/**
 * Blog SEO Engine — Metadata Factory
 *
 * Generates dynamic OpenGraph, JSON-LD (BlogPosting), Twitter Cards,
 * and Canonical tags for every blog post. Designed for Rank #1 SEO.
 *
 * Architecture:
 * ─────────────────────────────────────────────────────────────────
 * - generatePostMetadata()  → Next.js Metadata object for generateMetadata()
 * - generateBlogJsonLd()    → JSON-LD BlogPosting structured data
 * - generateCategoryMetadata() → Category listing page metadata
 *
 * All functions are pure — no side effects, cacheable by Next.js.
 */

import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const SITE_NAME = "Mizo Universe";
const AUTHOR_NAME = "Mizo Amin";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogPostSEO {
  title: string;
  titleAr?: string;
  slug: string;
  excerpt: string;
  categorySlug: string;
  categoryTitle: string;
  personaName?: string;
  coverImageUrl?: string;
  publishedAt: string;
  modifiedAt?: string;
  tags?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    ogImageUrl?: string;
  };
  wordCount?: number;
  readingTimeMinutes?: number;
}

export interface CategorySEO {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  icon: string;
}

// ─── Post Metadata Factory ────────────────────────────────────────────────────

export function generatePostMetadata(post: BlogPostSEO): Metadata {
  const title = post.seo?.metaTitle ?? `${post.title} | ${SITE_NAME}`;
  const description =
    post.seo?.metaDescription ?? post.excerpt.slice(0, 160);
  const canonical =
    post.seo?.canonicalUrl ??
    `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;
  const ogImage = post.seo?.ogImageUrl ?? post.coverImageUrl ?? DEFAULT_OG_IMAGE;
  const keywords = [
    post.seo?.focusKeyword,
    post.categoryTitle,
    ...(post.tags ?? []),
    AUTHOR_NAME,
  ].filter(Boolean) as string[];

  return {
    title,
    description,
    keywords,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    creator: AUTHOR_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      authors: [AUTHOR_NAME],
      tags: post.tags,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@mizoamin",
    },
    robots: post.seo?.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
  };
}

// ─── JSON-LD BlogPosting Structured Data ──────────────────────────────────────

export function generateBlogJsonLd(post: BlogPostSEO): object {
  const canonical =
    post.seo?.canonicalUrl ??
    `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;
  const ogImage = post.seo?.ogImageUrl ?? post.coverImageUrl ?? DEFAULT_OG_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    name: post.title,
    description: post.seo?.metaDescription ?? post.excerpt.slice(0, 160),
    url: canonical,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
      jobTitle: "Professional Basketball Player, Tech Expert & Businessman",
      sameAs: [
        "https://www.instagram.com/mizoamin",
        "https://www.linkedin.com/in/mizoamin",
        "https://x.com/mizoamin",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    articleSection: post.categoryTitle,
    keywords: [
      post.seo?.focusKeyword,
      ...(post.tags ?? []),
    ]
      .filter(Boolean)
      .join(", "),
    wordCount: post.wordCount,
    timeRequired: post.readingTimeMinutes
      ? `PT${post.readingTimeMinutes}M`
      : undefined,
    inLanguage: "en",
    ...(post.personaName && {
      about: {
        "@type": "Thing",
        name: `AI Perspective: ${post.personaName}`,
      },
    }),
  };
}

// ─── Category Page Metadata ───────────────────────────────────────────────────

export function generateCategoryMetadata(category: CategorySEO): Metadata {
  const title = `${category.icon} ${category.title} — Blog | ${SITE_NAME}`;
  const description = `${category.description} Explore ${category.title.toLowerCase()} articles by ${AUTHOR_NAME}.`;
  const canonical = `${SITE_URL}/blog/${category.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  };
}

// ─── Blog Index Metadata ──────────────────────────────────────────────────────

export function generateBlogIndexMetadata(): Metadata {
  const title = `Blog — ${SITE_NAME}`;
  const description = `Explore articles on sports, business, mindset, wellness, tech, and more by ${AUTHOR_NAME} — Professional Basketball Player, Tech Expert & Businessman.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/blog`,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ─── Twitter/X Thread Summary Generator ───────────────────────────────────────

export interface TwitterThread {
  tweets: string[];
  totalChars: number;
  threadCount: number;
}

/**
 * Generates a Twitter/X thread summary from a blog post.
 * Each tweet is constrained to 280 characters. The thread is designed for
 * maximum engagement: hook → key insights → CTA with link.
 *
 * @param post - Blog post SEO data
 * @param bodyText - Full markdown body (will be stripped to plain text)
 * @returns TwitterThread with array of tweet strings
 */
export function generateTwitterThread(
  post: BlogPostSEO,
  bodyText: string,
): TwitterThread {
  const canonical =
    post.seo?.canonicalUrl ??
    `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;

  // Strip markdown to extract sentences
  const plainText = bodyText
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/\*\*(.+?)\*\*/g, "$1") // bold
    .replace(/\*(.+?)\*/g, "$1") // italic
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/`(.+?)`/g, "$1") // inline code
    .replace(/>\s+/g, "") // blockquotes
    .replace(/[-*]\s+/g, "") // list items
    .replace(/\n{2,}/g, "\n")
    .trim();

  const sentences = plainText
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.length > 20);

  const tweets: string[] = [];

  // Tweet 1: Hook — title + persona + category context
  const hookSuffix = post.personaName
    ? ` (via the lens of ${post.personaName})`
    : "";
  const hook = `🧵 ${post.title}${hookSuffix}\n\nA thread on ${post.categoryTitle.toLowerCase()} 👇`;
  tweets.push(truncateTweet(hook));

  // Tweets 2-6: Key insights from the body — extract strongest sentences
  const insightSentences = sentences
    .filter((s) => s.length >= 40 && s.length <= 250)
    .slice(0, 5);

  insightSentences.forEach((sentence, i) => {
    const prefix = `${i + 2}/ `;
    tweets.push(truncateTweet(`${prefix}${sentence}`));
  });

  // Final tweet: CTA with link
  const cta = `${tweets.length + 1}/ Read the full article:\n\n${canonical}\n\n${post.tags?.slice(0, 3).map((t) => `#${t.replace(/\s+/g, "")}`).join(" ") ?? ""}`;
  tweets.push(truncateTweet(cta));

  return {
    tweets,
    totalChars: tweets.reduce((sum, t) => sum + t.length, 0),
    threadCount: tweets.length,
  };
}

function truncateTweet(text: string, maxLen = 280): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + "…";
}
