import type { Metadata } from "next";

import { SeniorFlutterDeveloperContent } from "./content";

export const metadata: Metadata = {
  title: "Senior Flutter Developer",
  description: "Full-remote, full-time contractor role at EthBerry.",
  alternates: { canonical: "/careers/senior-flutter-developer" },
};

export default function SeniorFlutterDeveloper() {
  return <SeniorFlutterDeveloperContent />;
}
