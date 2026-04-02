/**
 * Blog Category Listing — Server Component with SEO
 *
 * Dynamic route: /blog/[category]
 * Fetches bilingual descriptions from VISION_CATEGORIES config.
 * Arabic text uses premium calligraphy styling.
 * English description as technical subtitle.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getCategoryBySlug,
  getPostsByCategory,
  getAllCategorySlugs,
} from "@/lib/blogQueries";
import { generateCategoryMetadata, type CategorySEO } from "@/lib/seo";
import { CATEGORY_MAP } from "@/config/visionCategories";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllCategorySlugs();
    return slugs.map((slug) => ({ category: slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;

  try {
    const category = await getCategoryBySlug(slug);
    if (!category) return { title: "Category Not Found" };

    const seoInput: CategorySEO = {
      slug: category.slug,
      title: category.title,
      titleAr: category.titleAr ?? "",
      description: category.description ?? "",
      icon: category.icon,
    };

    return generateCategoryMetadata(seoInput);
  } catch {
    return { title: "Blog | Mizo Universe" };
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10));
  const pageSize = 12;

  let category;
  let posts: Awaited<ReturnType<typeof getPostsByCategory>>["posts"] = [];
  let total = 0;

  try {
    const [cat, postsData] = await Promise.all([
      getCategoryBySlug(slug),
      getPostsByCategory(slug, page, pageSize),
    ]);
    category = cat;
    posts = postsData.posts;
    total = postsData.total;
  } catch {
    return <DevPlaceholder slug={slug} />;
  }

  if (!category) notFound();

  // Resolve full descriptions from config (single source of truth)
  const configCat = CATEGORY_MAP.get(slug);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header — Bilingual with Premium Calligraphy */}
      <header className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="text-gray-500 hover:text-gray-300 text-sm mb-6 inline-block transition-colors"
          >
            ← All Categories
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <span
              className="text-5xl mt-1 shrink-0"
              style={{
                filter: configCat
                  ? `drop-shadow(0 0 12px ${configCat.helixColor}40)`
                  : undefined,
              }}
            >
              {category.icon}
            </span>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                {category.title}
              </h1>
              {/* Arabic Title — Premium Calligraphy style */}
              {category.titleAr && (
                <p
                  className="text-xl md:text-2xl mt-2 leading-relaxed"
                  dir="rtl"
                  style={{
                    color: configCat?.helixColor ?? "#888",
                    fontStyle: "italic",
                    fontWeight: 300,
                    letterSpacing: "0.04em",
                  }}
                >
                  {category.titleAr}
                </p>
              )}
            </div>
          </div>

          {/* Arabic Full Description — Premium Calligraphy block */}
          {configCat?.descriptionFullAr && (
            <blockquote
              className="mb-6 py-4 px-5 rounded-lg border-r-2"
              dir="rtl"
              style={{
                borderColor: `${configCat.helixColor}60`,
                backgroundColor: `${configCat.helixColor}06`,
                fontStyle: "italic",
                lineHeight: 2,
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {configCat.descriptionFullAr}
            </blockquote>
          )}

          {/* English Full Description — Technical Subtitle */}
          {configCat?.descriptionFull && (
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-mono tracking-wide">
              {configCat.descriptionFull}
            </p>
          )}

          {/* Content Pillars — "Includes" */}
          {configCat?.includes && configCat.includes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {configCat.includes.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    borderColor: `${configCat.helixColor}30`,
                    color: configCat.helixColor,
                    backgroundColor: `${configCat.helixColor}08`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Divider + count */}
          <div
            className="mt-6 pt-4 border-t flex items-center justify-between"
            style={{ borderColor: `${configCat?.helixColor ?? "#333"}15` }}
          >
            <p className="text-gray-600 text-sm">
              {total} {total === 1 ? "article" : "articles"}
            </p>
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: configCat?.helixColor ?? "#666",
                boxShadow: `0 0 8px ${configCat?.helixColor ?? "#666"}60`,
              }}
            />
          </div>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No articles in this category yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${slug}/${post.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all hover:bg-white/[0.04]"
                >
                  {post.coverImage?.url && (
                    <div className="w-full h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.alt ?? post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <h2 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <time>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </time>
                      {post.aiPersona && (
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: post.aiPersona.signatureColor,
                            }}
                          />
                          {post.aiPersona.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex justify-center gap-2 mt-12">
                {page > 1 && (
                  <Link
                    href={`/blog/${slug}?page=${page - 1}`}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors"
                  >
                    ← Prev
                  </Link>
                )}

                <span className="px-4 py-2 text-gray-500 text-sm">
                  Page {page} of {totalPages}
                </span>

                {page < totalPages && (
                  <Link
                    href={`/blog/${slug}?page=${page + 1}`}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors"
                  >
                    Next →
                  </Link>
                )}
              </nav>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function DevPlaceholder({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="max-w-2xl text-center space-y-6">
        <div className="text-6xl">📂</div>
        <h1 className="text-4xl font-black">Category: {slug}</h1>
        <p className="text-gray-500">
          Connect Sanity CMS to see live content.
        </p>
      </div>
    </div>
  );
}
