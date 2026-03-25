import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { PLANET_SLUGS } from "@/lib/seo/planets";

const LAST_MODIFIED = new Date("2026-03-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const planetRoutes: MetadataRoute.Sitemap = PLANET_SLUGS.map((slug) => ({
    url: `${SITE_URL}/planet/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...planetRoutes];
}
