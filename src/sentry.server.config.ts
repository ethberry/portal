import { init } from "@sentry/nextjs";

import { TRACES_SAMPLE_RATE } from "./lib/sentry";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  init({ dsn, tracesSampleRate: TRACES_SAMPLE_RATE });
}
