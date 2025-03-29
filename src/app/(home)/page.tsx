import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { Landing } from "./landing";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Landing />
    </HydrationBoundary>
  );
}
