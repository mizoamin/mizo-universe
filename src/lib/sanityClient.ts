/**
 * Sanity Client — Lightweight GROQ query engine
 *
 * Uses Sanity's HTTP API directly (no heavy @sanity/client dependency).
 * All queries go through the CDN for production reads.
 * Mutations use the authenticated endpoint for draft writes.
 *
 * Environment Variables:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  — Sanity project ID
 *   NEXT_PUBLIC_SANITY_DATASET     — Dataset name (default: "production")
 *   SANITY_API_TOKEN               — Write-capable API token (server-only)
 */

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2024-01-01";
const TOKEN = process.env.SANITY_API_TOKEN ?? "";

const CDN_BASE = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
const MUTATE_BASE = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

// ─── GROQ Query ───────────────────────────────────────────────────────────────

export async function sanityFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {},
  options: { useCdn?: boolean; signal?: AbortSignal } = {},
): Promise<T> {
  const { useCdn = true, signal } = options;
  const base = useCdn ? CDN_BASE : CDN_BASE.replace("apicdn", "api");

  const url = new URL(base);
  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const headers: HeadersInit = {};
  if (TOKEN) headers["Authorization"] = `Bearer ${TOKEN}`;

  const res = await fetch(url.toString(), {
    headers,
    signal,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Sanity query failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.result as T;
}

// ─── Mutations (Server-only — requires SANITY_API_TOKEN) ──────────────────────

export interface SanityMutation {
  create?: Record<string, unknown>;
  createOrReplace?: Record<string, unknown>;
  createIfNotExists?: Record<string, unknown>;
  patch?: {
    id: string;
    set?: Record<string, unknown>;
    unset?: string[];
  };
}

export async function sanityMutate(
  mutations: SanityMutation[],
): Promise<{ transactionId: string; documentId?: string }> {
  if (!TOKEN) {
    throw new Error("SANITY_API_TOKEN is required for mutations");
  }

  const res = await fetch(MUTATE_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Sanity mutation failed: ${res.status} — ${errorBody}`);
  }

  const data = await res.json();
  return {
    transactionId: data.transactionId,
    documentId: data.results?.[0]?.id,
  };
}

// ─── Portable Text Helpers ────────────────────────────────────────────────────

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
}

/**
 * Convert AI-generated markdown-ish text into Sanity Portable Text blocks.
 * Handles: headings (##), paragraphs, bold (**), italic (*), links [text](url).
 */
export function textToPortableText(text: string): PortableTextBlock[] {
  const lines = text.split("\n").filter((l) => l.trim());
  const blocks: PortableTextBlock[] = [];
  let keyIdx = 0;

  const makeKey = () => `block-${keyIdx++}`;
  const makeSpanKey = () => `span-${keyIdx++}`;

  for (const line of lines) {
    const trimmed = line.trim();

    // Determine style from leading hashes
    let style: PortableTextBlock["style"] = "normal";
    let content = trimmed;

    if (trimmed.startsWith("#### ")) {
      style = "h4";
      content = trimmed.slice(5);
    } else if (trimmed.startsWith("### ")) {
      style = "h3";
      content = trimmed.slice(4);
    } else if (trimmed.startsWith("## ")) {
      style = "h2";
      content = trimmed.slice(3);
    } else if (trimmed.startsWith("# ")) {
      style = "h1";
      content = trimmed.slice(2);
    } else if (trimmed.startsWith("> ")) {
      style = "blockquote";
      content = trimmed.slice(2);
    }

    // Parse inline marks (bold, italic)
    const children: PortableTextBlock["children"] = [];
    const markDefs: NonNullable<PortableTextBlock["markDefs"]> = [];

    // Simple parser: split by **bold** and *italic*
    const parts = content.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);

    for (const part of parts) {
      if (!part) continue;

      const boldMatch = part.match(/^\*\*(.+)\*\*$/);
      const italicMatch = part.match(/^\*([^*]+)\*$/);
      const linkMatch = part.match(/^\[(.+)\]\((.+)\)$/);

      if (boldMatch) {
        children.push({
          _type: "span",
          _key: makeSpanKey(),
          text: boldMatch[1],
          marks: ["strong"],
        });
      } else if (italicMatch) {
        children.push({
          _type: "span",
          _key: makeSpanKey(),
          text: italicMatch[1],
          marks: ["em"],
        });
      } else if (linkMatch) {
        const linkKey = makeSpanKey();
        markDefs.push({
          _type: "link",
          _key: linkKey,
          href: linkMatch[2],
        });
        children.push({
          _type: "span",
          _key: makeSpanKey(),
          text: linkMatch[1],
          marks: [linkKey],
        });
      } else {
        children.push({
          _type: "span",
          _key: makeSpanKey(),
          text: part,
        });
      }
    }

    if (children.length === 0) {
      children.push({
        _type: "span",
        _key: makeSpanKey(),
        text: content,
      });
    }

    blocks.push({
      _type: "block",
      _key: makeKey(),
      style,
      children,
      markDefs: markDefs.length > 0 ? markDefs : undefined,
    });
  }

  return blocks;
}
