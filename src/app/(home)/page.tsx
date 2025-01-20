import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { Landing } from "@/app/(home)/lending";

export default async function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Landing />
    </HydrationBoundary>
  );
}
