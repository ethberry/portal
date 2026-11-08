import type { Metadata } from "next";

import { SalesContent } from "./content";

export const metadata: Metadata = {
  title: "Business Development Manager — Custom Software & AI Services",
  description: "Full-remote, full-time contractor role at EthBerry.",
  alternates: { canonical: "/careers/sales" },
};

export default function Sales() {
  return <SalesContent />;
}
