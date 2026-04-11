/**
 * PlanetPageLayout — Cinematic landing page template for all planets
 *
 * Server Component — fetches blog data from Sanity, renders full-viewport
 * hero with scroll-fade parallax, bilingual Mizo-Voice descriptions,
 * related blog grid, and a widget slot for planet-specific interactive blocks.
 *
 * Used by: src/app/{planetName}/page.tsx
 *
 * Architecture:
 *   Hero Section (sticky visual, ScrollFadeHero client component)
 *   → Content Zone (widgets slot + blog grid)
 *   → Footer
 *
 * Zero CLS: Fixed hero height (h-screen), Next/Image blur placeholders,
 * known font sizes. Scroll enabled via .planet-page CSS class.
 */

import Image from "next/image";
import Link from "next/link";
import { planetsData, getPlanetNeighbors, type PlanetId } from "@/config/planetMetadata";
import { PLANET_PAGE_CONFIG } from "@/config/planetPageConfig";
import { getPostsByCategorySlugs, type SanityPost } from "@/lib/blogQueries";
import { buildPersonJsonLd, PLANET_SEO } from "@/config/seoConfig";
import ScrollFadeHero from "./ScrollFadeHero";
import NavigationHUD from "@/components/ui/NavigationHUD";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlanetPageLayoutProps {
  planetId: PlanetId;
  /** Planet-specific widgets (StatPulse, ProjectOrbit, ThoughtStream, etc.) */
  children?: React.ReactNode;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";

// ─── Post Card (internal) ─────────────────────────────────────────────────────

function PostCard({
  post,
  accentColor,
}: {
  post: SanityPost;
  accentColor: string;
}) {
  const imageUrl = post.mainImage?.url ?? post.coverImage?.url;

  return (
    <Link
      href={`/blog/${post.category?.slug}/${post.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
    >
      <div className="relative w-full h-48 overflow-hidden bg-white/[0.03]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.mainImage?.altText ?? post.title}
            width={400}
            height={192}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">{post.category?.icon ?? "📝"}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        {post.category && (
          <span
            className="text-xs font-bold uppercase tracking-wider mb-2 inline-block"
            style={{ color: accentColor }}
          >
            {post.category.title}
          </span>
        )}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
}

// ─── Layout Component ─────────────────────────────────────────────────────────

export default async function PlanetPageLayout({
  planetId,
  children,
}: PlanetPageLayoutProps) {
  const planet = planetsData[planetId];
  const config = PLANET_PAGE_CONFIG[planetId];
  const { prev, next } = getPlanetNeighbors(planetId);

  // Fetch related blog posts (graceful Sanity fallback)
  let posts: SanityPost[] = [];
  if (config.categorySlugs.length > 0) {
    try {
      posts = await getPostsByCategorySlugs(config.categorySlugs, 6);
    } catch {
      posts = [];
    }
  }

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Universe",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: planet.name,
        item: `${SITE_URL}${planet.routePath}`,
      },
    ],
  };

  // JSON-LD WebPage with author attribution
  const seoMeta = PLANET_SEO[planetId];
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": seoMeta.schemaType,
    name: seoMeta.titleEn,
    description: seoMeta.descriptionEn,
    url: `${SITE_URL}${planet.routePath}`,
    author: buildPersonJsonLd(),
    inLanguage: ["en", "ar"],
    keywords: seoMeta.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="planet-page bg-[#050505] text-white">
        {/* ═══ Navigation HUD ═══ */}
        <NavigationHUD />

        {/* ═══ Floating Header ═══ */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
          {/* Breadcrumb trail */}
          <nav
            aria-label="Breadcrumb"
            className="pointer-events-auto flex items-center gap-1.5 text-xs font-mono"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="2.5" strokeWidth={2} />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" strokeWidth={1.5} />
              </svg>
              <span>Universe</span>
            </Link>
            <span className="text-white/20">/</span>
            <span
              className="font-bold uppercase tracking-[2px] text-[10px]"
              style={{ color: planet.themeColor }}
              aria-current="page"
            >
              {planet.name}
            </span>
          </nav>
          {/* Planet HUD label — right side */}
          <span className="pointer-events-none text-[10px] font-bold uppercase tracking-[3px] text-white/30">
            {planet.ui.title}
          </span>
        </header>

        {/* ═══ Cinematic Hero ═══ */}
        <ScrollFadeHero>
          <section className="relative h-screen flex items-end justify-center pb-24 overflow-hidden">
            {/* Background texture */}
            {config.heroTexture && (
              <Image
                src={config.heroTexture}
                alt={`${planet.name} planet surface`}
                fill
                className="object-cover opacity-20 scale-110"
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL={config.blurDataUrl}
              />
            )}
            {/* Radial accent glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 30%, ${planet.themeColor}15 0%, transparent 70%)`,
              }}
            />

            {/* Top + bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
              <p
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[6px] mb-6"
                style={{ color: planet.themeColor }}
              >
                Mizo Universe &middot; {planet.name}
              </p>

              <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                {planet.ui.title}
              </h1>

              <div
                className="h-1 w-20 mx-auto mb-8 rounded-full"
                style={{
                  backgroundColor: planet.themeColor,
                  boxShadow: `0 0 30px ${planet.themeColor}60`,
                }}
              />

              <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto">
                {config.descriptionEn}
              </p>
              <p
                className="text-base md:text-lg font-light text-gray-500 leading-relaxed max-w-2xl mx-auto"
                dir="rtl"
              >
                {config.descriptionAr}
              </p>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 motion-safe:animate-bounce">
              <span className="text-[10px] uppercase tracking-[4px]">
                Explore
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7"
                />
              </svg>
            </div>
          </section>
        </ScrollFadeHero>

        {/* ═══ Content Zone ═══ */}
        <div className="relative z-10">
          {/* Planet-specific widgets */}
          {children && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {children}
            </section>
          )}

          {/* Blog Grid / Stealth Mode */}
          {config.categorySlugs.length > 0 ? (
            posts.length > 0 ? (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="h-6 w-1 rounded-full"
                    style={{ backgroundColor: planet.themeColor }}
                  />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    Transmissions
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <PostCard
                      key={post._id}
                      post={post}
                      accentColor={planet.themeColor}
                    />
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors"
                  >
                    View All Posts
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </section>
            ) : (
              /* Stealth Mode — categories mapped but no posts yet */
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="h-6 w-1 rounded-full"
                    style={{ backgroundColor: planet.themeColor }}
                  />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    Transmissions
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-white/[0.06] bg-white/[0.01]">
                  <div
                    className="w-3 h-3 rounded-full mb-6 motion-safe:animate-pulse"
                    style={{
                      backgroundColor: planet.themeColor,
                      boxShadow: `0 0 20px ${planet.themeColor}40`,
                    }}
                  />
                  <p className="text-sm font-bold uppercase tracking-[4px] text-gray-500 mb-2">
                    Stealth Mode
                  </p>
                  <p className="text-xs text-gray-600 max-w-sm text-center">
                    Scanning for new intel&hellip; Future transmissions are being prepared for this sector.
                  </p>
                </div>
              </section>
            )
          ) : null}

          {/* Planet-to-Planet Navigation */}
          {(prev || next) && (
            <nav
              aria-label="Planet navigation"
              className="border-t border-white/[0.04] mt-8"
            >
              <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <p className="text-center text-[10px] uppercase tracking-[4px] text-gray-700 mb-6">
                  Navigate the Universe
                </p>
                <div className="flex items-stretch justify-between gap-4">
                  {/* Previous planet */}
                  {prev ? (
                    <Link
                      href={prev.routePath}
                      className="group flex-1 flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-1">Previous</p>
                        <p
                          className="text-sm font-bold uppercase tracking-wider truncate group-hover:text-white transition-colors"
                          style={{ color: prev.themeColor }}
                        >
                          {prev.name}
                        </p>
                        <p className="text-xs text-gray-700 truncate mt-0.5">{prev.ui.title}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}

                  {/* Universe home */}
                  <Link
                    href="/"
                    className="group flex flex-col items-center justify-center gap-2 px-6 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 flex-shrink-0"
                    aria-label="Return to Universe"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="2.5" strokeWidth={1.5} />
                      <ellipse cx="12" cy="12" rx="10" ry="4.5" strokeWidth={1.5} />
                    </svg>
                    <span className="text-[9px] uppercase tracking-[3px] text-gray-600 group-hover:text-white transition-colors">Universe</span>
                  </Link>

                  {/* Next planet */}
                  {next ? (
                    <Link
                      href={next.routePath}
                      className="group flex-1 flex items-center justify-end gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <div className="min-w-0 text-right">
                        <p className="text-[10px] uppercase tracking-[3px] text-gray-600 mb-1">Next</p>
                        <p
                          className="text-sm font-bold uppercase tracking-wider truncate group-hover:text-white transition-colors"
                          style={{ color: next.themeColor }}
                        >
                          {next.name}
                        </p>
                        <p className="text-xs text-gray-700 truncate mt-0.5">{next.ui.title}</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
              </div>
            </nav>
          )}

          {/* Footer */}
          <footer className="border-t border-white/[0.04] mt-8">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                <p>
                  &copy; {new Date().getFullYear()} Mizo Amin. Built with
                  Next.js, Three.js &amp; AI.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Universe
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
