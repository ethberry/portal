import type { Metadata } from "next";

import { SeniorTypescriptLlmContent } from "./content";

export const metadata: Metadata = {
  title: "Senior TypeScript Engineer — LLM Agents",
  description: "Full-remote, full-time contractor role at EthBerry.",
  alternates: { canonical: "/careers/senior-typescript-llm" },
};

export default function SeniorTypescriptLlm() {
  return <SeniorTypescriptLlmContent />;
}
