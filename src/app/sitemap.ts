import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { PLANET_SLUGS } from "@/lib/seo/planets";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const planetRoutes: MetadataRoute.Sitemap = PLANET_SLUGS.map((slug) => ({
    url: `${SITE_URL}/planet/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...planetRoutes];
}
