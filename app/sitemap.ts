import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

/** Phase 1A is a single page. Routes are added here as they are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
