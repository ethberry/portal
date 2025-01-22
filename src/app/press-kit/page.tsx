import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { PressKit } from "@/app/press-kit/content";

export default async function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PressKit />
    </HydrationBoundary>
  );
}
