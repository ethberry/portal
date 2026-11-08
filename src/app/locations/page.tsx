import type { Metadata } from "next";

import { LocationsContent } from "./content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "We work as a distributed team across Asia. Legal entity and office are in Bali; the rest of the map is where the people are.",
  alternates: { canonical: "/locations" },
};

export default function Locations() {
  return <LocationsContent />;
}
