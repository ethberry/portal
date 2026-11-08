"use client";

import { useEffect } from "react";
import { captureException } from "@sentry/nextjs";

import { StatusPage } from "./components/common/status";

export default function ErrorPage(props: { error: Error & { digest?: string }; reset: () => void }) {
  const { error, reset } = props;

  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <StatusPage
      title="Something went wrong"
      description="An unexpected error stopped this page from loading. Please try again."
      actionLabel="Try again"
      onAction={reset}
    />
  );
}
