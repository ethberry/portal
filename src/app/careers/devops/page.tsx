import type { Metadata } from "next";

import { DevopsContent } from "./content";

export const metadata: Metadata = {
  title: "Senior DevOps Engineer — AWS, Terraform & ECS/Fargate",
  description: "Full-remote, full-time contractor role at EthBerry.",
  alternates: { canonical: "/careers/devops" },
};

export default function Devops() {
  return <DevopsContent />;
}
