import { captureRouterTransitionStart, init } from "@sentry/nextjs";

import { TRACES_SAMPLE_RATE } from "./lib/sentry";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  // The browser sends events to the managed tunnel that the server answers (serveTunnelIntegration), past ad-blockers.
  init({ dsn, tracesSampleRate: TRACES_SAMPLE_RATE, tunnel: true });
}

export const onRouterTransitionStart = captureRouterTransitionStart;
