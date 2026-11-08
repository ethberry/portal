<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# What this project is

The public site of EthBerry (ethberry.io) plus a small license API. It is one Next.js app (App Router, React 19, MUI, wagmi/RainbowKit) with a Supabase database behind a few server routes.

- Public pages: landing, careers (one page per vacancy), contact form, events, locations (map), press kit. English only.
- API (`src/app/api`): license signing for EthBerry software, contact requests, newsletter signups, and a cron route that keeps the free Supabase project from being paused.
- Where it lives: GitHub `ethberry/portal` (default branch `dev`; `master` is the deploy branch), Vercel project `ethberry-portal` (team `ethberrys-projects`, Hobby plan), Supabase project `Portal` (ref `ofpjdduxgfdkugnvigvg`, free plan).

# Run, build, check

- Node 24 (`.nvmrc`; the Vercel project setting still says 22.x). `npm install` works without a lockfile on purpose (`.npmrc`: `package-lock=false`, `save-exact`, `legacy-peer-deps`).
- `npm run dev` is `next dev --webpack`; the first compile of `/` takes about 15 s. It also re-adds the Next.js block at the top of this file.
- `npm run build`, `npm run start`. `npm run lint` is `eslint . --fix` on the whole repo: for one file use `npx eslint <file>`.
- Type check: `npx tsc --noEmit`. `tsconfig.tsbuildinfo` is tracked in git and changes on every `tsc` run: restore it with `git checkout -- tsconfig.tsbuildinfo` unless the change is intended.
- There are no tests and no CI workflow in the repository; Vercel builds on every push. Husky runs `lint-staged` on commit (Prettier and ESLint on `ts`/`tsx`, Prettier on `json`; nothing on `md`). Prettier: width 120, double quotes, trailing commas.

# Project structure

```text
src/app/
  layout.tsx, i18n.ts + en.json (translations), theme.ts, styled.ts, wagmi.config.ts (RainbowKit / wagmi)
  (home)/            landing page, one folder per section: 1-hero ... 8-faq
  careers/           one folder per vacancy (devops, sales, senior-flutter-developer,
                     senior-typescript-fintech, senior-typescript-llm), apply.ts
  contact/           contact page, schema.ts (zod) shared with the API route
  contracts/         ERC20Ownable.sol and ERC20Ownable.json: a sample ERC20 token (the owner can mint)
  events/  locations/  press-kit/      public pages (page.tsx + content.tsx; locations also has data.ts, map.tsx)
  components/        Providers.tsx, ReactQueryClientProvider.tsx, header/, footer/ (footer/subscribe: newsletter form
                     and its schema), common/
  api/
    license/         POST {licenseKey, nonce}: looks the license up, stores the nonce (each nonce works once) and returns
                     a signature over (nonce, licenseKey, status) made with PRIVATE_KEY; CORS is open for this path
                     (see next.config.ts)
    contact/         POST: saves a contact request
    subscribe/       POST: saves a newsletter email (a duplicate email still answers success)
    address/         GET: fixed list of demo accounts
    cron/db-ping/    GET: called by Vercel Cron (schedule in vercel.json), protected by CRON_SECRET;
                     reads every table and writes cron_heartbeat so Supabase does not pause the project
src/db/
  supabase.ts        the supabase-js client (service role key, server side only)
  supabase.types.ts  generated types, see below
supabase/migrations/ SQL migrations (timestamp-named files)
public/              landing/ (section images), press-kit/ (logos)
vercel.json          Vercel Cron schedule
```

# Database (Supabase)

- Tables: `license` (uuid, title, status `ACTIVE|REVOKED|EXPIRED`, expires_at), `nonce` (license_uuid → license, unique nonce), `subscription` (unique email), `contact_request`, `cron_heartbeat` (name, ran_at, runs).
- Row level security is on for every table and there are no policies. Only server code with the service role key reads and writes (`src/db/supabase.ts`); the browser never talks to Supabase.
- Connecting from a terminal: take `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from Vercel (`vercel env pull .env.local`) and use `@supabase/supabase-js`, for example in a throw-away script run with `node --env-file=.env.local`. The REST API refuses aggregate functions (`PGRST123`).
- Schema changes: add a file to `supabase/migrations/`, then `npx supabase db push`. The CLI is already linked to the project and logged in on the owner's Mac (it uses a temporary login role, no database password needed); `npx supabase db push --dry-run` shows what would be applied. After a migration is applied, regenerate the types (next section).
- License rows are inserted straight into the database, never through a migration: they must not end up in GitHub.
- The free plan pauses a project after a week of low activity (a paused project shows `INACTIVE` in `npx supabase projects list`, its `*.supabase.co` host stops resolving, and it is restored from the dashboard). The cron route below exists to prevent that.

## `src/db/supabase.types.ts` is generated

The types file is generated by Supabase from the database. Do not edit it by hand, not even a single line, and do not format it: it is listed in `.prettierignore` (ESLint ignores it too in `eslint.config.mjs`). After a migration is applied, regenerate it with `npm run supabase:gen` and commit exactly what the command wrote. The `PostgrestVersion` line may change between CLI versions; commit it as generated.

# Deploy and cron (Vercel)

- Work happens on `dev`, the default branch (Renovate targets it too). A push to `dev` or a pull request gets a preview deployment; previews do not run cron.
- Production (`ethberry.io`) is deployed from `master` only (the Production Branch setting of the Vercel project): merge `dev` into `master` (fast-forward) and push. Fork protection is on.
- Cron: `vercel.json` lists three runs a day of `/api/cron/db-ping`. On the Hobby plan one cron job may run at most once a day (up to 100 jobs per project, start time can drift by up to 59 minutes), so an hourly schedule would fail the deployment. Cron runs only on production deployments.
- Vercel sends `Authorization: Bearer <CRON_SECRET>`; the secret is read when the deployment is built, so redeploy after changing it.

# Environment variables

Stored in Vercel (Production, Preview, Development) and pulled with `vercel env pull .env.local`. The pull overwrites `.env.local` and adds a line to `.gitignore`: revert that line (`git checkout .gitignore`), `.env.local` is already ignored.

`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `PRIVATE_KEY` (signs licenses), `CRON_SECRET`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`, `NPM_RC` (npm auth for the private `@ethberry/*` packages on Vercel builds). `VERCEL_OIDC_TOKEN` is added by the pull itself.
