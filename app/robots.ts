import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/privacy"],
      disallow: [
        "/preview", "/early-access", "/why-vascurra", "/patient-0",
        "/how-it-works", "/veya", "/intelligence", "/lab", "/people", "/personal",
        "/families", "/clinicians", "/research", "/responsible", "/support",
        "/about", "/access", "/contact", "/terms", "/accessibility", "/disclaimer",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
