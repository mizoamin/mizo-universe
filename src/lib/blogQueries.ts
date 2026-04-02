/**
 * Blog GROQ Queries — Sanity data layer
 *
 * All queries for the blog engine in one place.
 * Server-side only — used by Server Components and Server Actions.
 */

import { sanityFetch } from "./sanityClient";

// ─── Types (Sanity document shapes after GROQ projection) ────────────────────

export interface SanityPost {
  _id: string;
  _type: "post";
  title: string;
  titleAr?: string;
  slug: string;
  excerpt?: string;
  excerptAr?: string;
  /** New bilingual content (8-pillar schema) */
  content?: unknown[];
  contentAr?: unknown[];
  /** Legacy body field — backward compat */
  body: unknown[];
  publishedAt: string;
  featured: boolean;
  tags?: string[];
  mainImage?: {
    url: string;
    altText?: string;
  };
  /** @deprecated — use mainImage */
  coverImage?: {
    url: string;
    alt?: string;
  };
  category: {
    _id: string;
    title: string;
    titleAr?: string;
    slug: string;
    icon: string;
    helixColor: string;
  };
  aiPersona?: {
    _id: string;
    name: string;
    slug: string;
    tone: string;
    signatureColor: string;
    pulsePattern: string;
    bio?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    ogImage?: { url: string };
  };
  migrationSource?: string;
  legacySlug?: string;
  wordCount?: number;
}

export interface SanityCategory {
  _id: string;
  title: string;
  titleAr?: string;
  slug: string;
  description?: string;
  descriptionAr?: string;
  descriptionFull?: string;
  descriptionFullAr?: string;
  includes?: string[];
  icon: string;
  helixColor: string;
  postCount: number;
}

export interface SanityPersona {
  _id: string;
  name: string;
  slug: string;
  bio?: string;
  bioAr?: string;
  tone: string;
  signatureColor: string;
  pulsePattern: string;
  avatar?: { url: string };
}

// ─── GROQ Projections ─────────────────────────────────────────────────────────

const POST_PROJECTION = `{
  _id,
  _type,
  title,
  titleAr,
  "slug": slug.current,
  excerpt,
  excerptAr,
  content,
  contentAr,
  // Fallback: coalesce content → body for backward compat
  "body": coalesce(content, body),
  publishedAt,
  featured,
  tags,
  "mainImage": mainImage{
    "url": asset->url,
    altText
  },
  "coverImage": mainImage{
    "url": asset->url,
    "alt": altText
  },
  "category": category->{
    _id,
    title,
    titleAr,
    "slug": slug.current,
    icon,
    helixColor
  },
  "aiPersona": aiPersona->{
    _id,
    name,
    "slug": slug.current,
    tone,
    signatureColor,
    pulsePattern,
    bio
  },
  seo{
    metaTitle,
    metaDescription,
    focusKeyword,
    canonicalUrl,
    noIndex,
    "ogImage": ogImage{ "url": asset->url }
  },
  migrationSource,
  legacySlug
}`;

const CATEGORY_PROJECTION = `{
  _id,
  title,
  titleAr,
  "slug": slug.current,
  description,
  descriptionAr,
  descriptionFull,
  descriptionFullAr,
  includes,
  icon,
  helixColor,
  "postCount": count(*[_type == "post" && category._ref == ^._id && !(_id in path("drafts.**"))])
}`;

const PERSONA_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  bio,
  bioAr,
  tone,
  signatureColor,
  pulsePattern,
  "avatar": avatar{ "url": asset->url }
}`;

// ─── Query Functions ──────────────────────────────────────────────────────────

/** Get a single post by category slug + post slug */
export async function getPostBySlug(
  categorySlug: string,
  postSlug: string,
): Promise<SanityPost | null> {
  return sanityFetch<SanityPost | null>(
    `*[_type == "post" && slug.current == $postSlug && category->slug.current == $categorySlug && !(_id in path("drafts.**"))][0]${POST_PROJECTION}`,
    { postSlug, categorySlug },
  );
}

/** Get posts by category with pagination */
export async function getPostsByCategory(
  categorySlug: string,
  page = 1,
  pageSize = 12,
): Promise<{ posts: SanityPost[]; total: number }> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const [posts, total] = await Promise.all([
    sanityFetch<SanityPost[]>(
      `*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))] | order(publishedAt desc) [$start...$end]${POST_PROJECTION}`,
      { categorySlug, start, end },
    ),
    sanityFetch<number>(
      `count(*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))])`,
      { categorySlug },
    ),
  ]);

  return { posts, total };
}

/** Get latest posts across all categories */
export async function getLatestPosts(limit = 12): Promise<SanityPost[]> {
  return sanityFetch<SanityPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`,
    { limit },
  );
}

/** Get featured posts */
export async function getFeaturedPosts(limit = 6): Promise<SanityPost[]> {
  return sanityFetch<SanityPost[]>(
    `*[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`,
    { limit },
  );
}

/** Get posts by multiple category slugs (for planet landing pages) */
export async function getPostsByCategorySlugs(
  categorySlugs: string[],
  limit = 6,
): Promise<SanityPost[]> {
  if (categorySlugs.length === 0) return [];
  return sanityFetch<SanityPost[]>(
    `*[_type == "post" && category->slug.current in $categorySlugs && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`,
    { categorySlugs, limit },
  );
}

/** Get all categories with post counts */
export async function getCategories(): Promise<SanityCategory[]> {
  return sanityFetch<SanityCategory[]>(
    `*[_type == "category"] | order(sortOrder asc)${CATEGORY_PROJECTION}`,
  );
}

/** Get a single category by slug */
export async function getCategoryBySlug(
  slug: string,
): Promise<SanityCategory | null> {
  return sanityFetch<SanityCategory | null>(
    `*[_type == "category" && slug.current == $slug][0]${CATEGORY_PROJECTION}`,
    { slug },
  );
}

/** Get all AI personas */
export async function getPersonas(): Promise<SanityPersona[]> {
  return sanityFetch<SanityPersona[]>(
    `*[_type == "aiPersona"] | order(sortOrder asc)${PERSONA_PROJECTION}`,
  );
}

/** Get all post slugs for static generation */
export async function getAllPostSlugs(): Promise<
  Array<{ categorySlug: string; postSlug: string }>
> {
  return sanityFetch<Array<{ categorySlug: string; postSlug: string }>>(
    `*[_type == "post" && !(_id in path("drafts.**"))]{
      "postSlug": slug.current,
      "categorySlug": category->slug.current
    }`,
  );
}

/** Get all category slugs for static generation */
export async function getAllCategorySlugs(): Promise<string[]> {
  return sanityFetch<string[]>(
    `*[_type == "category"]{ "slug": slug.current }.slug`,
  );
}
