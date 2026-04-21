/**
 * Sanity Webhook Handler — Triggers Google Indexing on Publish
 *
 * When a Sanity document transitions from draft → published,
 * this webhook automatically submits the URL to Google's
 * Indexing API for instant crawling.
 *
 * Sanity Webhook Setup:
 * 1. Go to your Sanity project → API → Webhooks
 * 2. Name: "Google Indexing on Publish"
 * 3. URL: https://yourdomain.com/api/webhooks/sanity
 * 4. Trigger on: Create, Update
 * 5. Filter: _type == "post"
 * 6. Projection: {_id, _type, slug, publishedAt, _rev}
 * 7. Set a secret and add it as SANITY_WEBHOOK_SECRET env var
 */

import { NextRequest, NextResponse } from "next/server";
import { submitUrl } from "@/lib/indexing/google";
import { createHmac, timingSafeEqual } from "crypto";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SanityWebhookBody {
  _id: string;
  _type: string;
  slug?: { current: string };
  publishedAt?: string;
  _rev: string;
}

// ─── Signature Verification ──────────────────────────────────────────────────

function verifySignature(
  body: string,
  signature: string | null,
  secret: string,
): boolean {
  if (!signature) return false;

  const expected = createHmac("sha256", secret).update(body).digest("hex");

  try {
    return timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected),
    );
  } catch {
    return false;
  }
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 },
    );
  }

  // Read raw body for signature verification
  const rawBody = await request.text();
  const signature = request.headers.get("sanity-webhook-signature");

  if (!verifySignature(rawBody, signature, webhookSecret)) {
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 401 },
    );
  }

  // Parse the webhook payload
  let payload: SanityWebhookBody;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  // Only process published posts (not drafts)
  if (payload._type !== "post") {
    return NextResponse.json({ status: "skipped", reason: "not a post" });
  }

  // Draft documents in Sanity start with "drafts."
  if (payload._id.startsWith("drafts.")) {
    return NextResponse.json({ status: "skipped", reason: "still a draft" });
  }

  // Must have a slug and publishedAt date
  if (!payload.slug?.current || !payload.publishedAt) {
    return NextResponse.json({
      status: "skipped",
      reason: "missing slug or publishedAt",
    });
  }

  // Build the canonical URL
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mizoamin.com";
  const postUrl = `${siteUrl}/blog/${payload.slug.current}`;

  // Submit to Google Indexing API
  const result = await submitUrl(postUrl, "URL_UPDATED");

  return NextResponse.json({
    status: result.success ? "indexed" : "failed",
    url: postUrl,
    notifyTime: result.notifyTime,
    error: result.error,
  });
}

// Only allow POST
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 },
  );
}
