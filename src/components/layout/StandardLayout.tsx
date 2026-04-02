/**
 * Mizo-Frame — StandardLayout for all non-3D pages
 *
 * Provides semantic HTML structure optimized for Rank #1 SEO:
 *   <header>  — Site-wide navigation bar with minimal CLS
 *   <nav>     — Breadcrumb trail (JSON-LD BreadcrumbList)
 *   <main>    — Page content slot
 *   <footer>  — Compact site footer
 *
 * Breadcrumb System:
 *   Connects the 3D VisionPlanet category choice → 2D blog pages.
 *   Auto-generates BreadcrumbList structured data (JSON-LD).
 *
 * Performance:
 *   Zero layout shift (fixed header height, font-display: swap)
 *   No client JS — this is a pure Server Component
 */

import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface StandardLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  /** If true, wraps children in <article> instead of plain <div> */
  isArticle?: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const SITE_NAME = "Mizo Universe";

const NAV_LINKS = [
  { href: "/", label: "Universe" },
  { href: "/blog", label: "Blog" },
  { href: "/vision", label: "Vision" },
] as const;

// ─── Breadcrumb JSON-LD ───────────────────────────────────────────────────────

function buildBreadcrumbJsonLd(crumbs: BreadcrumbItem[]) {
  const allCrumbs = [{ label: "Home", href: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StandardLayout({
  children,
  breadcrumbs,
  isArticle = false,
}: StandardLayoutProps) {
  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      {hasBreadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbs)),
          }}
        />
      )}

      {/* ═══ Header ═══ */}
      <header
        className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#030306]/80 backdrop-blur-xl"
        style={{ height: 56 }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-black text-sm tracking-tight"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,255,255,0.5)]" />
            {SITE_NAME}
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-gray-500 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ═══ Breadcrumb Nav ═══ */}
      {hasBreadcrumbs && (
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"
        >
          <ol
            className="flex items-center gap-1.5 text-xs font-mono text-gray-600"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                href="/"
                itemProp="item"
                className="hover:text-cyan-400 transition-colors"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li
                key={crumb.href}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span className="text-gray-700">/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span
                    className="text-gray-400"
                    itemProp="name"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    itemProp="item"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 2)} />
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* ═══ Main Content ═══ */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {isArticle ? (
          <article className="mx-auto max-w-4xl">{children}</article>
        ) : (
          children
        )}
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="border-t border-white/[0.04] bg-[#030306]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Mizo Amin. Built with Next.js,
              Three.js &amp; AI.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/vision" className="hover:text-white transition-colors">
                Vision
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
