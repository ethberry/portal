import type { Metadata } from "next";

import { SeniorTypescriptFintechContent } from "./content";

export const metadata: Metadata = {
  title: "Senior TypeScript Engineer — Fintech",
  description: "Full-remote, full-time contractor role at EthBerry.",
  alternates: { canonical: "/careers/senior-typescript-fintech" },
};

export default function SeniorTypescriptFintech() {
  return <SeniorTypescriptFintechContent />;
}
