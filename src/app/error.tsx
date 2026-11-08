"use client";

import { StatusPage } from "./components/common/status";

export default function ErrorPage(props: { error: Error & { digest?: string }; reset: () => void }) {
  const { reset } = props;

  return (
    <StatusPage
      title="Something went wrong"
      description="An unexpected error stopped this page from loading. Please try again."
      actionLabel="Try again"
      onAction={reset}
    />
  );
}
