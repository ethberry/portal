import type { Metadata } from "next";

import { PressKitContent } from "./content";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Visual styles of EthBerry and how to use them consistently.",
  alternates: { canonical: "/press-kit" },
};

export default function PressKit() {
  return <PressKitContent />;
}
