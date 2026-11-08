import type { Metadata } from "next";

import { EventsContent } from "./content";

export const metadata: Metadata = {
  title: "Events",
  description: "Events where the EthBerry team takes part.",
  alternates: { canonical: "/events" },
};

export default function Events() {
  return <EventsContent />;
}
