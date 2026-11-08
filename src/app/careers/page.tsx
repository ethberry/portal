import type { Metadata } from "next";

import { CareersContent } from "./content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Five full-remote, full-time contractor roles for senior specialists.",
  alternates: { canonical: "/careers" },
};

export default function Careers() {
  return <CareersContent />;
}
