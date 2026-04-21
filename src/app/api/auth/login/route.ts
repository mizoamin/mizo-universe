/**
 * Auth Login API — Sets HttpOnly admin token cookie
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { token } = body as { token?: string };

  if (!token) {
    return NextResponse.json({ error: "Token required" }, { status: 400 });
  }

  const expectedToken = process.env.MIZO_ADMIN_TOKEN;

  if (!expectedToken) {
    // No token configured — dev mode allows any token
    if (process.env.NODE_ENV === "development") {
      const response = NextResponse.json({ success: true });
      response.cookies.set("mizo_admin_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    }
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Timing-safe comparison
  if (!timingSafeEqual(token, expectedToken)) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("mizo_admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
