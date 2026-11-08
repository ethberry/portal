import type { Metadata } from "next";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { Landing } from "./landing";

export const metadata: Metadata = {
  description:
    "Rapid project prototyping to showcase a working demo version, test new theories, identify market needs, and engage the community",
  alternates: { canonical: "/" },
};

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Landing />
    </HydrationBoundary>
  );
}
