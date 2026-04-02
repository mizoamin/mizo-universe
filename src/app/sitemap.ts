/**
 * Dynamic Sitemap Generator — All categories + blog posts
 *
 * Next.js App Router convention: src/app/sitemap.ts
 * Automatically generates /sitemap.xml at build time + ISR revalidation.
 * Includes all 11 master categories and all published posts.
 */

import type { MetadataRoute } from "next";
import { VISION_CATEGORIES } from "@/config/visionCategories";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";

// Sanity fetch (inline to avoid circular imports in sitemap)
async function fetchSitemapPosts(): Promise<
  Array<{ slug: string; categorySlug: string; updatedAt: string }>
> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

  if (!projectId) return [];

  try {
    const query = encodeURIComponent(
      `*[_type == "post" && !(_id in path("drafts.**"))]{
        "slug": slug.current,
        "categorySlug": category->slug.current,
        "updatedAt": coalesce(_updatedAt, publishedAt)
      }`
    );
    const url = `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.result ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchSitemapPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Category pages (all 11 master categories)
  const categoryPages: MetadataRoute.Sitemap = VISION_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/blog/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Planet pages
  const planetPages: MetadataRoute.Sitemap = [
    "identity", "legacy", "vision", "shield", "odyssey",
    "voice", "ventures", "videogram", "library", "contact",
  ].map((planet) => ({
    url: `${SITE_URL}/${planet}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog post pages
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...planetPages, ...postPages];
}
