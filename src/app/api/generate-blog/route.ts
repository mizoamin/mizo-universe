/**
 * AI Blog Generation — Route Handler
 *
 * POST /api/generate-blog
 *
 * Protected by middleware (requires MIZO_ADMIN_TOKEN).
 * Delegates to the same Server Action used by the Control Room.
 *
 * Request body:
 * {
 *   "personaSlug": "kobe-bryant",
 *   "categorySlug": "mindset",
 *   "coreInsight": "The parallels between basketball practice and code debugging",
 *   "additionalContext": "optional extra context"
 * }
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { generateBlogPost } from "@/app/secret-control-room/actions";

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { personaSlug, categorySlug, coreInsight, additionalContext } =
    body as Record<string, string | undefined>;

  // Validate required fields
  if (!personaSlug || !categorySlug || !coreInsight) {
    return NextResponse.json(
      {
        error: "Missing required fields: personaSlug, categorySlug, coreInsight",
      },
      { status: 400 },
    );
  }

  const result = await generateBlogPost({
    personaSlug,
    categorySlug,
    coreInsight,
    additionalContext: additionalContext ?? undefined,
  });

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  return NextResponse.json(result, { status: 201 });
}
