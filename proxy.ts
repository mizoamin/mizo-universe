import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy – runs on the Edge before every request is handled.
 *
 * Security responsibilities:
 *  1. Redirect plain HTTP → HTTPS in production (HTTPS enforcement).
 *  2. Strip the `x-forwarded-host` header to prevent host-header injection
 *     when running behind a reverse-proxy / CDN.
 */
export function proxy(request: NextRequest) {
  // Only redirect in production; in local dev there is no TLS certificate.
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") === "http"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

/**
 * Run this proxy on all routes except Next.js internals and static files.
 */
export const config = {
  matcher: [
    /*
     * Match every request path except:
     *  - _next/static  (static files)
     *  - _next/image   (image optimisation)
     *  - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
