"use client";

/**
 * Blog Post Client Component — Renders the post with StandardLayout + BlogContent
 *
 * Integrates the semantic layout (breadcrumbs, header, footer) with the
 * Elementor-emulating Portable Text renderer. Handles hero section,
 * persona visual signature, tags, and back navigation.
 */

import Link from "next/link";
import StandardLayout from "@/components/layout/StandardLayout";
import BlogContent from "@/components/blog/BlogContent";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogPostClientProps {
  post: {
    title: string;
    titleAr?: string;
    body: unknown[];
    publishedAt: string;
    tags: string[];
    coverImageUrl?: string;
    coverImageAlt?: string;
    categoryTitle: string;
    categorySlug: string;
    categoryIcon: string;
    categoryColor: string;
    personaName?: string;
    personaSlug?: string;
    personaTone?: string;
    personaColor?: string;
    personaPulse?: string;
    readingTime: number;
    wordCount: number;
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.categoryTitle, href: `/blog/${post.categorySlug}` },
    { label: post.title, href: `/blog/${post.categorySlug}/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-"))}` },
  ];

  return (
    <StandardLayout breadcrumbs={breadcrumbs} isArticle>
      {/* ═══ Hero Section ═══ */}
      <header className="relative">
        {post.coverImageUrl && (
          <div className="w-full h-[50vh] relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? post.title}
              className="w-full h-full object-cover"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
          {/* Category Badge */}
          <Link
            href={`/blog/${post.categorySlug}`}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-colors hover:opacity-80"
            style={{
              backgroundColor: `${post.categoryColor}20`,
              color: post.categoryColor,
              border: `1px solid ${post.categoryColor}40`,
            }}
          >
            <span>{post.categoryIcon}</span>
            {post.categoryTitle}
          </Link>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
            <time dateTime={post.publishedAt}>{publishDate}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
            <span>·</span>
            <span>{post.wordCount.toLocaleString()} words</span>

            {post.personaName && (
              <>
                <span>·</span>
                <span
                  className="flex items-center gap-1.5"
                  title={`AI Persona: ${post.personaName} (${post.personaTone})`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: post.personaColor }}
                  />
                  {post.personaName}
                </span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ═══ Article Body — powered by BlogContent ═══ */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <BlogContent
          blocks={post.body ?? []}
          accentColor={post.personaColor ?? post.categoryColor}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Visual Signature Bar */}
        {post.personaColor && (
          <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  backgroundColor: `${post.personaColor}20`,
                  boxShadow: `0 0 20px ${post.personaColor}40`,
                }}
              >
                🧬
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Visual Signature on DNA Helix
                </p>
                <p className="font-semibold">
                  <span style={{ color: post.personaColor }}>
                    {post.personaName}
                  </span>
                  {post.personaPulse && (
                    <span className="text-gray-500 text-sm ml-2">
                      ({post.personaPulse})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Navigation */}
        <div className="mt-12 flex gap-4">
          <Link
            href={`/blog/${post.categorySlug}`}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            ← More in {post.categoryTitle}
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            All Articles
          </Link>
        </div>
      </div>
    </StandardLayout>
  );
}
