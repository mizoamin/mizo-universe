/**
 * Blog Post Page — Server Component with Full SEO
 *
 * Dynamic route: /blog/[category]/[slug]
 *
 * Architecture:
 * ─────────────────────────────────────────────────────────────────
 * 1. generateMetadata() — Dynamic OG tags, Twitter Cards, keywords
 * 2. JSON-LD BlogPosting — Injected as <script type="application/ld+json">
 * 3. Canonical URL — /blog/{category}/{slug}
 * 4. Server Component — Zero client JS for content, maximum SEO crawlability
 * 5. Visual Signature — Persona color/pulse mapped from DNA Helix engine
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blogQueries";
import {
  generatePostMetadata,
  generateBlogJsonLd,
  type BlogPostSEO,
} from "@/lib/seo";
import BlogPostClient from "./BlogPostClient";

// ─── Types ────────────────────────────────────────────────────────────────────

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

// ─── Static Params (ISR-compatible) ───────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((s) => ({
      category: s.categorySlug,
      slug: s.postSlug,
    }));
  } catch {
    // Sanity not configured yet — return empty for dev
    return [];
  }
}

// ─── Dynamic Metadata Factory ─────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  try {
    const post = await getPostBySlug(category, slug);
    if (!post) return { title: "Post Not Found" };

    const seoInput: BlogPostSEO = {
      title: post.title,
      titleAr: post.titleAr,
      slug: post.slug,
      excerpt: post.excerpt ?? "",
      categorySlug: post.category.slug,
      categoryTitle: post.category.title,
      personaName: post.aiPersona?.name,
      coverImageUrl: post.coverImage?.url,
      publishedAt: post.publishedAt,
      tags: post.tags,
      seo: {
        metaTitle: post.seo?.metaTitle,
        metaDescription: post.seo?.metaDescription,
        focusKeyword: post.seo?.focusKeyword,
        canonicalUrl: post.seo?.canonicalUrl,
        noIndex: post.seo?.noIndex,
        ogImageUrl: post.seo?.ogImage?.url,
      },
    };

    return generatePostMetadata(seoInput);
  } catch {
    return { title: "Blog | Mizo Universe" };
  }
}

// ─── Reading Time Calculator ──────────────────────────────────────────────────

function estimateReadingTime(body: unknown[]): {
  wordCount: number;
  minutes: number;
} {
  let wordCount = 0;

  for (const block of body) {
    const b = block as Record<string, unknown>;
    if (b._type === "block" && Array.isArray(b.children)) {
      for (const child of b.children) {
        const c = child as Record<string, unknown>;
        if (typeof c.text === "string") {
          wordCount += c.text.split(/\s+/).filter(Boolean).length;
        }
      }
    }
  }

  return { wordCount, minutes: Math.max(1, Math.ceil(wordCount / 238)) };
}

// ─── Page Component (Server) ──────────────────────────────────────────────────

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params;

  let post;
  try {
    post = await getPostBySlug(category, slug);
  } catch {
    // Sanity not configured — show dev placeholder
    return <DevPlaceholder category={category} slug={slug} />;
  }

  if (!post) notFound();

  const { wordCount, minutes } = estimateReadingTime(post.body ?? []);

  // Build JSON-LD
  const jsonLd = generateBlogJsonLd({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? "",
    categorySlug: post.category.slug,
    categoryTitle: post.category.title,
    personaName: post.aiPersona?.name,
    coverImageUrl: post.coverImage?.url,
    publishedAt: post.publishedAt,
    tags: post.tags,
    seo: {
      metaTitle: post.seo?.metaTitle,
      metaDescription: post.seo?.metaDescription,
      focusKeyword: post.seo?.focusKeyword,
      canonicalUrl: post.seo?.canonicalUrl,
      ogImageUrl: post.seo?.ogImage?.url,
    },
    wordCount,
    readingTimeMinutes: minutes,
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPostClient
        post={{
          title: post.title,
          titleAr: post.titleAr,
          body: post.body,
          publishedAt: post.publishedAt,
          tags: post.tags ?? [],
          coverImageUrl: post.coverImage?.url,
          coverImageAlt: post.coverImage?.alt,
          categoryTitle: post.category.title,
          categorySlug: post.category.slug,
          categoryIcon: post.category.icon,
          categoryColor: post.category.helixColor,
          personaName: post.aiPersona?.name,
          personaSlug: post.aiPersona?.slug,
          personaTone: post.aiPersona?.tone,
          personaColor: post.aiPersona?.signatureColor,
          personaPulse: post.aiPersona?.pulsePattern,
          readingTime: minutes,
          wordCount,
        }}
      />
    </>
  );
}

// ─── Dev Placeholder ──────────────────────────────────────────────────────────

function DevPlaceholder({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="max-w-2xl text-center space-y-6">
        <div className="text-6xl">📝</div>
        <h1 className="text-4xl font-black">Blog Post</h1>
        <p className="text-gray-400 text-lg">
          <span className="text-cyan-400">{category}</span>
          {" / "}
          <span className="text-cyan-400">{slug}</span>
        </p>
        <p className="text-gray-500">
          Connect Sanity CMS to see live content. Configure{" "}
          <code className="text-cyan-300">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
          in your environment.
        </p>
      </div>
    </div>
  );
}
