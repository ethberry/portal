import type { MetadataRoute } from "next";

const BASE_URL = "https://ethberry.io";

// Every public page. Add new pages here.
const PATHS = [
  "/",
  "/careers",
  "/careers/devops",
  "/careers/sales",
  "/careers/senior-flutter-developer",
  "/careers/senior-typescript-fintech",
  "/careers/senior-typescript-llm",
  "/contact",
  "/events",
  "/locations",
  "/press-kit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map(path => ({ url: `${BASE_URL}${path}` }));
}
