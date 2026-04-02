/**
 * Blog Index — /blog
 *
 * Server Component. Displays all categories and latest posts.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getLatestPosts } from "@/lib/blogQueries";
import { generateBlogIndexMetadata } from "@/lib/seo";
import { VISION_CATEGORIES } from "@/config/visionCategories";

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

export function generateMetadata(): Metadata {
  return generateBlogIndexMetadata();
}

export default async function BlogIndexPage() {
  let categories;
  let latestPosts;

  try {
    [categories, latestPosts] = await Promise.all([
      getCategories(),
      getLatestPosts(6),
    ]);
  } catch {
    // Sanity not configured — use static fallback
    return <StaticFallback />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <header className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Vision Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights on sports, business, mindset, wellness, and more — powered
            by 15 AI personas through the lens of Mizo Amin.
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/blog/${cat.slug}`}
              className="group p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              style={{ borderColor: `${cat.helixColor}20` }}
            >
              <span className="text-3xl block mb-2">{cat.icon}</span>
              <h3 className="font-bold group-hover:text-cyan-400 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {cat.postCount} {cat.postCount === 1 ? "article" : "articles"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.category.slug}/${post.slug}`}
                className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all"
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{post.category.icon}</span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: post.category.helixColor }}
                    >
                      {post.category.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
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
        </section>
      )}

      {/* Back to Universe */}
      <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors font-medium"
        >
          ← Return to Mizo Universe
        </Link>
      </div>
    </div>
  );
}

function StaticFallback() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Vision Blog
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Coming soon — connect Sanity CMS to activate the blog engine.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {VISION_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] opacity-60"
            >
              <span className="text-3xl block mb-2">{cat.icon}</span>
              <h3 className="font-bold">{cat.title}</h3>
              <p className="text-gray-600 text-sm mt-1">0 articles</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors font-medium"
        >
          ← Return to Mizo Universe
        </Link>
      </div>
    </div>
  );
}
