import type { Metadata } from "next";

import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact EthBerry",
  description: "Tell EthBerry about your custom software or AI agent project, or book a call with the team.",
};

export default function Contact() {
  return <ContactContent />;
}
