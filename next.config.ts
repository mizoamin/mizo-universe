import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy directive values.
 * Keep this tight: only allow sources we explicitly trust.
 */
const ContentSecurityPolicy = [
  "default-src 'self'",
  // Scripts: self + Next.js inline HMR in dev only
  isDev ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'" : "script-src 'self'",
  // Styles: Tailwind generates inline styles; allow in dev; use nonce in prod if needed
  "style-src 'self' 'unsafe-inline'",
  // Fonts: Google Fonts (used by next/font/google)
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self + data URIs (Three.js textures) + our own CDN placeholder
  "img-src 'self' data: blob:",
  // WebGL / canvas workers used by Three.js
  "worker-src 'self' blob:",
  // WebGL context setup (Three.js needs connect-src for texture loading)
  "connect-src 'self'",
  // No plugins
  "object-src 'none'",
  // Block framing from other origins
  "frame-ancestors 'none'",
  // Upgrade HTTP → HTTPS in production
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  // ── Content Security Policy ────────────────────────────────────────────────
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  // ── Strict Transport Security (HSTS) ──────────────────────────────────────
  // 2 years, include sub-domains, allow HSTS preload list submission
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // ── Clickjacking prevention ────────────────────────────────────────────────
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // ── MIME-type sniffing prevention ──────────────────────────────────────────
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // ── Referrer leakage control ───────────────────────────────────────────────
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // ── Permissions / Feature Policy ──────────────────────────────────────────
  // Restrict access to sensitive browser APIs
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
    ].join(", "),
  },
  // ── Remove "X-Powered-By: Next.js" fingerprint ────────────────────────────
  // (also set poweredByHeader: false below)
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Do not expose Next.js version in response headers
  poweredByHeader: false,

  // Apply security headers to every route
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  // Restrict next/image to trusted domains only
  // Use remotePatterns (the secure API) — never set `domains` (deprecated)
  images: {
    remotePatterns: [
      // Example: if you serve user avatars from your own bucket,
      // add a specific pattern like:
      // { protocol: "https", hostname: "cdn.mizo-universe.com", pathname: "/images/**" }
      //
      // No external image hosts are allowed by default (principle of least privilege).
    ],
    // Disallow SVG from remote sources to prevent XSS via SVG
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Prevent accidental exposure of environment variables to the browser.
  // Only variables prefixed with NEXT_PUBLIC_ are exposed by Next.js.
  // This comment documents the convention — no runtime changes needed.
};

export default nextConfig;
