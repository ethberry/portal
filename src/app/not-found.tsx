import type { Metadata } from "next";

import { StatusPage } from "./components/common/status";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <StatusPage
      title="Page not found"
      description="The page you are looking for does not exist or has moved."
      actionLabel="Go to the home page"
      href="/"
    />
  );
}
