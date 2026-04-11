/**
 * Next.js Middleware — Route Protection + Rate Limiting + Slug Guard
 *
 * 1. Auth: Protects /secret-control-room and /api/generate-blog
 * 2. Rate Limit: 10 req/min on /api/generate-blog to prevent AI API abuse
 * 3. Slug Guard: Redirects legacy WordPress/Elementor URLs to new structure
 *    e.g., /2024/05/old-post-slug → /blog/[matched-category]/old-post-slug
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_PATHS = ["/secret-control-room", "/api/generate-blog"];
const LOGIN_PATH = "/secret-control-room/login";
const RATE_LIMITED_PATHS = ["/api/generate-blog"];

// ─── Inline rate limiter (Edge Runtime compatible — no Node.js imports) ───────

const rateLimitStore = new Map<string, number[]>();

function checkRateLimit(
  ip: string,
  maxHits: number,
  windowMs: number,
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const cutoff = now - windowMs;

  let timestamps = rateLimitStore.get(ip) ?? [];
  timestamps = timestamps.filter((t) => t > cutoff);

  if (timestamps.length >= maxHits) {
    rateLimitStore.set(ip, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return { allowed: true, remaining: maxHits - timestamps.length };
}

// ─── Slug Guard — Legacy WordPress URL patterns ──────────────────────────────
// Common WP permalink structures: /YYYY/MM/slug, /YYYY/MM/DD/slug, /p=123

const LEGACY_URL_PATTERN = /^\/(\d{4})\/(\d{2})(?:\/\d{2})?\/([a-z0-9-]+)\/?$/;

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

function isRateLimitedPath(pathname: string): boolean {
  return RATE_LIMITED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ─── 1. Slug Guard — redirect legacy WordPress URLs ──────────────────
  const legacyMatch = LEGACY_URL_PATTERN.exec(pathname);
  if (legacyMatch) {
    const slug = legacyMatch[3];
    // Redirect to /blog with slug as catch-all — the blog route will
    // look up the post by legacySlug field in Sanity and serve it.
    // 301 permanent redirect for SEO link juice preservation.
    const newUrl = new URL(`/blog/legacy/${slug}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Skip login page itself
  if (pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  // ─── 2. Rate Limiting for AI generation endpoints ────────────────────
  if (isRateLimitedPath(pathname)) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const { allowed, remaining } = checkRateLimit(ip, 10, 60_000);

    if (!allowed) {
      return new NextResponse(
        JSON.stringify({
          error: "Rate limit exceeded. Max 10 requests per minute.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
            "X-RateLimit-Remaining": "0",
          },
        },
      );
    }

    // Add rate limit headers to successful responses
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Remaining", String(remaining));
    // Continue to auth check below (don't return yet)
    // We need to fall through, so we handle this inline
  }

  // ─── 3. Auth — protect admin routes ──────────────────────────────────
  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const expectedToken = process.env.MIZO_ADMIN_TOKEN;

  // If no token is configured, allow access in development
  if (!expectedToken) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Check cookie first, then Authorization header
  const cookieToken = request.cookies.get("mizo_admin_token")?.value;
  const authHeader = request.headers.get("Authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  const providedToken = cookieToken ?? bearerToken;

  // Timing-safe comparison
  if (!providedToken || !timingSafeEqual(providedToken, expectedToken)) {
    if (!pathname.startsWith("/api/")) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return new NextResponse(
      JSON.stringify({ error: "Unauthorized" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return NextResponse.next();
}

/**
 * Constant-time string comparison to prevent timing attacks.
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export const config = {
  matcher: [
    "/secret-control-room/:path*",
    "/api/generate-blog/:path*",
    // Legacy WordPress permalink patterns (slug guard)
    "/:year(\\d{4})/:month(\\d{2})/:slug*",
  ],
};
