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
        style={{
          position: "sticky",
          top: 0,
          zIndex: "var(--z-header)",
          width: "100%",
          borderBottomWidth: "1px",
          borderBottomColor: "rgba(255,255,255,0.06)",
          backgroundColor: "rgba(3,3,6,0.8)",
          backdropFilter: "blur(20px)",
          height: "56px",
        }}
      >
        <div style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", display: "flex", height: "56px", alignItems: "center", justifyContent: "space-between", paddingLeft: "var(--space-2)", paddingRight: "var(--space-2)" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-1)",
              color: "var(--color-text-primary)",
              fontWeight: "var(--font-weight-black)",
              fontSize: "var(--text-body-sm)",
              letterSpacing: "var(--tracking-tight)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "var(--space-0-5)",
                height: "var(--space-0-5)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-accent-prime)",
                boxShadow: "0 0 6px rgba(0,255,255,0.5)",
              }}
            />
            {SITE_NAME}
          </Link>

          <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "var(--text-body-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-tertiary)",
                  textDecoration: "none",
                  transition: `color var(--duration-fast) var(--ease-out-cubic)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-tertiary)";
                }}
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
