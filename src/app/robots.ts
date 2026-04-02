/**
 * Robots.txt Generator — Next.js App Router convention
 *
 * Allows all crawlers, blocks admin routes, references sitemap.
 */

import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/secret-control-room/",
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
