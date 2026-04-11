"use server";

/**
 * Server Actions — AI Blog Generation & Sanity Draft Creation
 *
 * Flow:
 * 1. Validate inputs (persona, category, insight)
 * 2. Build Master System Prompt from persona + Mizo's background
 * 3. Call AI API (Claude or Gemini) for blog content
 * 4. Parse response into title, body, SEO fields
 * 5. Convert body to Sanity Portable Text
 * 6. Create draft document in Sanity
 * 7. Return result with Visual Signature metadata
 */

import { PERSONA_SEED } from "../../../sanity/schemas/aiPersona";
import { VISION_CATEGORIES } from "@/config/visionCategories";
import { sanityMutate, textToPortableText } from "@/lib/sanityClient";
import {
  getPersonaSoul,
  buildMasterSystemPrompt,
} from "@/lib/personaSouls";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GenerationInput {
  personaSlug: string;
  categorySlug: string;
  coreInsight: string;
  additionalContext?: string;
}

export interface GenerationResult {
  title: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  bodyPreview: string;
  tags: string[];
  sanityDocumentId?: string;
  personaSlug: string;
  categorySlug: string;
  error?: string;
}

// ─── Master System Prompt Builder ─────────────────────────────────────────────
// Soul-aware prompt: uses per-persona deep identity from personaSouls.ts,
// falls back to generic prompt for unknown slugs.

function buildSystemPrompt(
  personaSlug: string,
  personaName: string,
  personaTone: string,
  personaBio: string,
  categoryTitle: string,
  categoryDescription: string,
): string {
  // Try soul-aware prompt first
  const soul = getPersonaSoul(personaSlug);
  if (soul) {
    return buildMasterSystemPrompt(soul, categoryTitle, categoryDescription);
  }

  // Fallback for personas without a soul profile
  return `You are a world-class blog content writer channeling the voice and perspective of ${personaName}.

PERSONA IDENTITY:
- Name: ${personaName}
- Bio: ${personaBio}
- Writing Tone: ${personaTone}

AUTHOR CONTEXT:
You are writing for Mizo Amin's blog. Mizo Amin bridges multiple worlds:
- Professional Basketball Player — national and international levels, captain, MVP, champion
- Tech Expert — builds immersive 3D web experiences with Next.js, React Three Fiber, Three.js, AI
- Businessman & Entrepreneur — ventures in marketing, creative tech, digital innovation
- Based in Qatar with a global perspective spanning Middle East, Europe, and beyond

CATEGORY: ${categoryTitle}
${categoryDescription}

WRITING GUIDELINES:
1. Voice: Write in the ${personaTone} style of ${personaName}. Channel their philosophy, speech patterns, worldview.
2. Depth: 1500-2500 words. Each section should have genuine insight.
3. Structure: ## for H2, ### for H3. Start with a powerful hook, not "In this article..."
4. SEO: Naturally incorporate focus keyword 3-5 times.
5. Originality: No generic advice. Every paragraph reveals a unique perspective.
6. Ending: Close with a thought-provoking question or challenge.

OUTPUT FORMAT (strict JSON — no markdown fences, no explanation):
{
  "title": "Compelling article title (50-65 chars, include focus keyword)",
  "seoTitle": "SEO-optimized meta title (50-60 chars)",
  "metaDescription": "Meta description (150-160 chars, include keyword, end with value proposition)",
  "focusKeyword": "primary SEO keyword phrase (2-4 words)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "body": "Full article in markdown with ## headings, **bold**, *italic*"
}`;
}

// ─── AI API Call ──────────────────────────────────────────────────────────────

async function callAI(
  systemPrompt: string,
  userMessage: string,
): Promise<string> {
  // Try Claude first, fall back to Gemini
  const claudeKey = process.env.ANTHROPIC_API_KEY;
  const geminiKey = process.env.GOOGLE_AI_API_KEY;

  if (claudeKey) {
    return callClaude(claudeKey, systemPrompt, userMessage);
  }

  if (geminiKey) {
    return callGemini(geminiKey, systemPrompt, userMessage);
  }

  throw new Error(
    "No AI API key configured. Set ANTHROPIC_API_KEY or GOOGLE_AI_API_KEY in your environment.",
  );
}

async function callClaude(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const content = data.content?.[0];
  if (content?.type !== "text") {
    throw new Error("Unexpected Claude response format");
  }

  return content.text;
}

async function callGemini(
  apiKey: string,
  systemPrompt: string,
  userMessage: string,
): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: userMessage }] }],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 4096,
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Unexpected Gemini response format");
  }

  return text;
}

// ─── Response Parser ──────────────────────────────────────────────────────────

interface AIResponse {
  title: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  tags: string[];
  body: string;
}

function parseAIResponse(raw: string): AIResponse {
  // Strip markdown code fences if present
  let cleaned = raw.trim();
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  const parsed = JSON.parse(cleaned);

  // Validate required fields
  if (!parsed.title || !parsed.body) {
    throw new Error("AI response missing required 'title' or 'body' fields");
  }

  return {
    title: String(parsed.title).slice(0, 200),
    seoTitle: String(parsed.seoTitle ?? parsed.title).slice(0, 70),
    metaDescription: String(parsed.metaDescription ?? "").slice(0, 170),
    focusKeyword: String(parsed.focusKeyword ?? "").slice(0, 60),
    tags: Array.isArray(parsed.tags)
      ? parsed.tags.map(String).slice(0, 10)
      : [],
    body: String(parsed.body),
  };
}

// ─── Slug Generator ──────────────────────────────────────────────────────────

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
}

// ─── Main Server Action ───────────────────────────────────────────────────────

export async function generateBlogPost(
  input: GenerationInput,
): Promise<GenerationResult> {
  // 1. Validate inputs
  const persona = PERSONA_SEED.find((p) => p.slug === input.personaSlug);
  if (!persona) {
    return {
      title: "",
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      bodyPreview: "",
      tags: [],
      personaSlug: input.personaSlug,
      categorySlug: input.categorySlug,
      error: `Unknown persona: ${input.personaSlug}`,
    };
  }

  const category = VISION_CATEGORIES.find(
    (c) => c.slug === input.categorySlug,
  );
  if (!category) {
    return {
      title: "",
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      bodyPreview: "",
      tags: [],
      personaSlug: input.personaSlug,
      categorySlug: input.categorySlug,
      error: `Unknown category: ${input.categorySlug}`,
    };
  }

  if (input.coreInsight.trim().length < 10) {
    return {
      title: "",
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      bodyPreview: "",
      tags: [],
      personaSlug: input.personaSlug,
      categorySlug: input.categorySlug,
      error: "Core insight must be at least 10 characters.",
    };
  }

  // 2. Build prompts
  const systemPrompt = buildSystemPrompt(
    persona.slug,
    persona.name,
    persona.tone,
    persona.bio,
    category.title,
    category.description,
  );

  const userMessage = `Core Insight / Topic: ${input.coreInsight}${
    input.additionalContext
      ? `\n\nAdditional Context: ${input.additionalContext}`
      : ""
  }`;

  // 3. Call AI
  let aiRaw: string;
  try {
    aiRaw = await callAI(systemPrompt, userMessage);
  } catch (err) {
    return {
      title: "",
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      bodyPreview: "",
      tags: [],
      personaSlug: input.personaSlug,
      categorySlug: input.categorySlug,
      error: `AI generation failed: ${err instanceof Error ? err.message : "Unknown error"}`,
    };
  }

  // 4. Parse response
  let parsed: AIResponse;
  try {
    parsed = parseAIResponse(aiRaw);
  } catch (err) {
    return {
      title: "",
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      bodyPreview: "",
      tags: [],
      personaSlug: input.personaSlug,
      categorySlug: input.categorySlug,
      error: `Failed to parse AI response: ${err instanceof Error ? err.message : "Invalid JSON"}`,
    };
  }

  // 5. Convert to Portable Text
  const portableTextBody = textToPortableText(parsed.body);
  const slug = generateSlug(parsed.title);

  // 6. Save to Sanity as draft
  let sanityDocumentId: string | undefined;
  try {
    const sanityDoc = {
      _type: "post",
      title: parsed.title,
      slug: { _type: "slug", current: slug },
      excerpt: parsed.metaDescription,
      body: portableTextBody,
      category: { _type: "reference", _ref: `category-${input.categorySlug}` },
      aiPersona: {
        _type: "reference",
        _ref: `persona-${input.personaSlug}`,
      },
      publishedAt: null, // Draft — not published yet
      featured: false,
      tags: parsed.tags,
      seo: {
        metaTitle: parsed.seoTitle,
        metaDescription: parsed.metaDescription,
        focusKeyword: parsed.focusKeyword,
        noIndex: false,
      },
      indexingStatus: "pending",
    };

    const { documentId } = await sanityMutate([{ create: sanityDoc }]);
    sanityDocumentId = documentId;
  } catch {
    // Sanity not configured — still return the generated content
    // The draft just won't be saved
  }

  // 7. Return result
  return {
    title: parsed.title,
    seoTitle: parsed.seoTitle,
    metaDescription: parsed.metaDescription,
    focusKeyword: parsed.focusKeyword,
    bodyPreview: parsed.body.slice(0, 500),
    tags: parsed.tags,
    sanityDocumentId,
    personaSlug: input.personaSlug,
    categorySlug: input.categorySlug,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// BULK GENERATION & LEGACY MIGRATION
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BulkGenerationInput {
  items: GenerationInput[];
  /** Optional delay (ms) between API calls to avoid rate limits */
  delayBetween?: number;
  /** If true, submit generated URLs to Google Indexing API */
  triggerIndexing?: boolean;
}

export interface BulkGenerationResult {
  total: number;
  succeeded: number;
  failed: number;
  results: GenerationResult[];
}

export interface MigrationInput {
  /** Raw Elementor/WordPress HTML content */
  html: string;
  /** Post title */
  title: string;
  /** Category slug from VISION_CATEGORIES */
  categorySlug: string;
  /** Persona slug for visual signature */
  personaSlug: string;
  /** Original source URL (for audit trail) */
  sourceUrl?: string;
  /** Tags */
  tags?: string[];
}

export interface MigrationResult {
  title: string;
  slug: string;
  sanityDocumentId?: string;
  blockCount: number;
  indexingSubmitted: boolean;
  error?: string;
}

// ─── HTML Sanitizer — strip Elementor div-soup into clean content ─────────────
//
// SECURITY: This strips ALL script tags, event handlers, iframes,
// style tags, data attributes, and Elementor wrapper divs.
// Only safe semantic HTML passes through.

function sanitizeElementorHTML(rawHTML: string): string {
  let html = rawHTML;

  // 1. Remove script/style/iframe tags and their content
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[\s\S]*?<\/style>/gi, "");
  html = html.replace(/<iframe[\s\S]*?<\/iframe>/gi, "");
  html = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  html = html.replace(/<object[\s\S]*?<\/object>/gi, "");
  html = html.replace(/<embed[\s\S]*?>/gi, "");

  // 2. Remove event handlers (onclick, onerror, onload, etc.)
  html = html.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, "");
  html = html.replace(/\s+on\w+\s*=\s*[^\s>]*/gi, "");

  // 3. Remove javascript: URLs
  html = html.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');
  html = html.replace(/src\s*=\s*["']javascript:[^"']*["']/gi, "");

  // 4. Remove data attributes and Elementor-specific attributes
  html = html.replace(/\s+data-[\w-]+\s*=\s*["'][^"']*["']/gi, "");
  html = html.replace(/\s+data-[\w-]+\s*=\s*[^\s>]*/gi, "");

  // 5. Strip Elementor wrapper divs (keep inner content)
  // Match common Elementor class prefixes
  const elementorWrapperPattern =
    /<div\s+class\s*=\s*["'][^"']*(?:elementor|e-con|ekit|jet-)[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;
  // Run multiple passes since divs can be nested
  for (let i = 0; i < 5; i++) {
    const prev = html;
    html = html.replace(elementorWrapperPattern, "$1");
    if (html === prev) break;
  }

  // 6. Remove empty divs and spans
  html = html.replace(/<div\s*>\s*<\/div>/gi, "");
  html = html.replace(/<span\s*>\s*<\/span>/gi, "");

  // 7. Remove inline styles (they break our Tailwind layout)
  html = html.replace(/\s+style\s*=\s*["'][^"']*["']/gi, "");

  // 8. Remove class attributes (we apply our own)
  html = html.replace(/\s+class\s*=\s*["'][^"']*["']/gi, "");

  // 9. Normalize whitespace
  html = html.replace(/\n{3,}/g, "\n\n").trim();

  return html;
}

// ─── Elementor HTML → Portable Text Blocks converter ──────────────────────────

interface ParsedBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

function elementorToPortableText(
  sanitizedHTML: string,
  sourceUrl?: string,
): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];
  let keyCounter = 0;
  const nextKey = () => `migrated-${++keyCounter}`;

  // Extract headings, paragraphs, images, lists from clean HTML
  // We parse line-by-line after stripping to simple content

  // Split by block-level tags
  const segments = sanitizedHTML.split(
    /(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|<p[^>]*>[\s\S]*?<\/p>|<img[^>]*\/?>|<ul[^>]*>[\s\S]*?<\/ul>|<ol[^>]*>[\s\S]*?<\/ol>|<blockquote[^>]*>[\s\S]*?<\/blockquote>|<table[^>]*>[\s\S]*?<\/table>)/gi
  );

  for (const segment of segments) {
    const trimmed = segment.trim();
    if (!trimmed) continue;

    // Heading match
    const headingMatch = trimmed.match(
      /^<(h[1-6])[^>]*>([\s\S]*?)<\/\1>$/i
    );
    if (headingMatch) {
      const level = headingMatch[1].toLowerCase();
      const text = stripHTMLTags(headingMatch[2]);
      if (text) {
        blocks.push({
          _type: "block",
          _key: nextKey(),
          style: level as "h1" | "h2" | "h3" | "h4",
          children: [{ _type: "span", _key: nextKey(), text, marks: [] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Paragraph match
    const pMatch = trimmed.match(/^<p[^>]*>([\s\S]*?)<\/p>$/i);
    if (pMatch) {
      const text = stripHTMLTags(pMatch[1]);
      if (text) {
        blocks.push({
          _type: "block",
          _key: nextKey(),
          style: "normal",
          children: [{ _type: "span", _key: nextKey(), text, marks: [] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Blockquote
    const bqMatch = trimmed.match(
      /^<blockquote[^>]*>([\s\S]*?)<\/blockquote>$/i
    );
    if (bqMatch) {
      const text = stripHTMLTags(bqMatch[1]);
      if (text) {
        blocks.push({
          _type: "block",
          _key: nextKey(),
          style: "blockquote",
          children: [{ _type: "span", _key: nextKey(), text, marks: [] }],
          markDefs: [],
        });
      }
      continue;
    }

    // Image
    const imgMatch = trimmed.match(
      /^<img[^>]*src\s*=\s*["']([^"']+)["'][^>]*\/?>/i
    );
    if (imgMatch) {
      const altMatch = trimmed.match(/alt\s*=\s*["']([^"']*)["']/i);
      blocks.push({
        _type: "image",
        _key: nextKey(),
        asset: { url: imgMatch[1] },
        alt: altMatch?.[1] ?? "",
      });
      continue;
    }

    // Anything else that has text content — wrap as legacyHTML block
    const plainText = stripHTMLTags(trimmed);
    if (plainText.length > 20) {
      blocks.push({
        _type: "legacyHTML",
        _key: nextKey(),
        html: trimmed,
        source: sourceUrl ?? "elementor-migration",
      });
    }
  }

  return blocks;
}

function stripHTMLTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// ─── Migrate Legacy Post ──────────────────────────────────────────────────────

export async function migrateLegacyPost(
  input: MigrationInput,
): Promise<MigrationResult> {
  // Validate inputs
  const category = VISION_CATEGORIES.find((c) => c.slug === input.categorySlug);
  if (!category) {
    return {
      title: input.title,
      slug: "",
      blockCount: 0,
      indexingSubmitted: false,
      error: `Unknown category: ${input.categorySlug}`,
    };
  }

  const persona = PERSONA_SEED.find((p) => p.slug === input.personaSlug);
  if (!persona) {
    return {
      title: input.title,
      slug: "",
      blockCount: 0,
      indexingSubmitted: false,
      error: `Unknown persona: ${input.personaSlug}`,
    };
  }

  // 1. Sanitize HTML
  const cleanHTML = sanitizeElementorHTML(input.html);

  // 2. Convert to Portable Text
  const ptBlocks = elementorToPortableText(cleanHTML, input.sourceUrl);

  // 3. Generate slug
  const slug = generateSlug(input.title);

  // 4. Create Sanity document
  let sanityDocumentId: string | undefined;
  try {
    const sanityDoc = {
      _type: "post",
      title: input.title,
      slug: { _type: "slug", current: slug },
      excerpt: stripHTMLTags(cleanHTML).slice(0, 160),
      body: ptBlocks,
      category: { _type: "reference", _ref: `category-${input.categorySlug}` },
      aiPersona: { _type: "reference", _ref: `persona-${input.personaSlug}` },
      publishedAt: new Date().toISOString(),
      featured: false,
      tags: input.tags ?? [],
      seo: {
        metaTitle: input.title.slice(0, 60),
        metaDescription: stripHTMLTags(cleanHTML).slice(0, 160),
        focusKeyword: "",
        noIndex: false,
      },
      migrationSource: input.sourceUrl ?? "elementor",
      indexingStatus: "pending",
    };

    const { documentId } = await sanityMutate([{ create: sanityDoc }]);
    sanityDocumentId = documentId;
  } catch (err) {
    return {
      title: input.title,
      slug,
      blockCount: ptBlocks.length,
      indexingSubmitted: false,
      error: `Sanity mutation failed: ${err instanceof Error ? err.message : "Unknown"}`,
    };
  }

  // 5. Submit to Google Indexing API
  let indexingSubmitted = false;
  try {
    const { submitUrl } = await import("@/lib/indexing/google");
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizo.world";
    await submitUrl(`${siteUrl}/blog/${input.categorySlug}/${slug}`);
    indexingSubmitted = true;
  } catch {
    // Non-fatal — indexing can be retried later
  }

  return {
    title: input.title,
    slug,
    sanityDocumentId,
    blockCount: ptBlocks.length,
    indexingSubmitted,
  };
}

// ─── Bulk Generation Server Action ────────────────────────────────────────────

export async function generateBulkPosts(
  input: BulkGenerationInput,
): Promise<BulkGenerationResult> {
  const results: GenerationResult[] = [];
  let succeeded = 0;
  let failed = 0;

  for (const item of input.items) {
    // Generate each post sequentially to respect API rate limits
    const result = await generateBlogPost(item);

    if (result.error) {
      failed++;
    } else {
      succeeded++;

      // Submit to Google Indexing API if requested
      if (input.triggerIndexing && result.sanityDocumentId) {
        try {
          const { submitUrl } = await import("@/lib/indexing/google");
          const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizo.world";
          const slug = generateSlug(result.title);
          await submitUrl(`${siteUrl}/blog/${item.categorySlug}/${slug}`);
        } catch {
          // Non-fatal
        }
      }
    }

    results.push(result);

    // Delay between calls
    if (input.delayBetween && input.delayBetween > 0) {
      await new Promise((r) => setTimeout(r, input.delayBetween));
    }
  }

  return {
    total: input.items.length,
    succeeded,
    failed,
    results,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// GOD-MODE: Full Post Suite Generation + Per-Field Regeneration
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FullSuiteInput {
  personaSlugs: string[];
  categorySlug: string;
  coreInsight: string;
  additionalContext?: string;
  /** Language for content generation */
  language?: "en" | "ar" | "both";
}

export interface FullSuiteResult {
  title: string;
  titleAr: string;
  slug: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  seo: {
    focusKeyword: string;
    metaTitle: string;
    metaDescription: string;
  };
  tags: string[];
  sanityDocumentId?: string;
  personaSlugs: string[];
  categorySlug: string;
  error?: string;
}

export type RegenerableField =
  | "title"
  | "titleAr"
  | "excerpt"
  | "excerptAr"
  | "content"
  | "contentAr"
  | "focusKeyword"
  | "metaTitle"
  | "metaDescription";

export interface RegenerateFieldInput {
  field: RegenerableField;
  personaSlugs: string[];
  categorySlug: string;
  coreInsight: string;
  /** Existing fields — provides AI with context for coherent regeneration */
  existingTitle?: string;
  existingExcerpt?: string;
  existingContent?: string;
}

// ─── Blended System Prompt Builder ────────────────────────────────────────────

function buildBlendedPrompt(
  personaSlugs: string[],
  categoryTitle: string,
  categoryDescription: string,
): string {
  const { buildBlendedSystemPrompt } = require("@/lib/personaSouls") as {
    buildBlendedSystemPrompt: (slugs: string[], cat: string, desc: string) => string;
  };
  return buildBlendedSystemPrompt(personaSlugs, categoryTitle, categoryDescription);
}

// ─── Full Suite Generator ─────────────────────────────────────────────────────

export async function generateFullPostSuite(
  input: FullSuiteInput,
): Promise<FullSuiteResult> {
  const { personaSlugs, categorySlug, coreInsight, additionalContext, language = "both" } = input;

  // Validate
  const category = VISION_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) {
    return emptyFullSuiteResult(input, `Unknown category: ${categorySlug}`);
  }
  if (personaSlugs.length === 0) {
    return emptyFullSuiteResult(input, "At least one persona is required.");
  }
  if (coreInsight.trim().length < 10) {
    return emptyFullSuiteResult(input, "Core insight must be at least 10 characters.");
  }

  // Build prompt — blended if multiple personas, single if one
  const systemPrompt = personaSlugs.length === 1
    ? buildSystemPrompt(
        personaSlugs[0],
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.name ?? personaSlugs[0],
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.tone ?? "analytical",
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.bio ?? "",
        category.title,
        category.description,
      )
    : buildBlendedPrompt(personaSlugs, category.title, category.description);

  // Override output format to include bilingual fields
  const fullSuiteFormat = `

OUTPUT FORMAT (strict JSON — no markdown fences, no explanation):
{
  "title": "Compelling English title (50-65 chars)",
  "titleAr": "عنوان عربي جذاب (50-65 حرف)",
  "excerpt": "English excerpt/meta-description (max 160 chars)",
  "excerptAr": "مقتطف عربي (أقصى 160 حرف)",
  "content": "Full English article in markdown with ## headings, **bold**, *italic* — 1500-2500 words",
  ${language !== "en" ? '"contentAr": "المقال الكامل بالعربية بتنسيق ماركداون مع عناوين ## و**غامق** و*مائل* — 1500-2500 كلمة",' : ""}
  "seo": {
    "focusKeyword": "primary keyword phrase (2-4 words)",
    "metaTitle": "SEO meta title (50-60 chars)",
    "metaDescription": "Meta description (150-160 chars)"
  },
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}`;

  const userMessage = `Core Insight / Topic: ${coreInsight}${
    additionalContext ? `\n\nAdditional Context: ${additionalContext}` : ""
  }`;

  // Call AI
  let aiRaw: string;
  try {
    aiRaw = await callAI(systemPrompt + fullSuiteFormat, userMessage);
  } catch (err) {
    return emptyFullSuiteResult(
      input,
      `AI generation failed: ${err instanceof Error ? err.message : "Unknown"}`,
    );
  }

  // Parse
  let parsed: Record<string, unknown>;
  try {
    let cleaned = aiRaw.trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    parsed = JSON.parse(cleaned);
  } catch {
    return emptyFullSuiteResult(input, "Failed to parse AI response as JSON.");
  }

  const title = String(parsed.title ?? "").slice(0, 200);
  const titleAr = String(parsed.titleAr ?? "").slice(0, 200);
  const excerpt = String(parsed.excerpt ?? "").slice(0, 160);
  const excerptAr = String(parsed.excerptAr ?? "").slice(0, 160);
  const content = String(parsed.content ?? "");
  const contentAr = String(parsed.contentAr ?? "");
  const seoObj = (parsed.seo ?? {}) as Record<string, unknown>;
  const seo = {
    focusKeyword: String(seoObj.focusKeyword ?? "").slice(0, 60),
    metaTitle: String(seoObj.metaTitle ?? title).slice(0, 70),
    metaDescription: String(seoObj.metaDescription ?? excerpt).slice(0, 170),
  };
  const tags = Array.isArray(parsed.tags) ? parsed.tags.map(String).slice(0, 10) : [];
  const slug = generateSlug(title);

  // Save to Sanity — using new 8-pillar schema
  let sanityDocumentId: string | undefined;
  try {
    const contentPT = textToPortableText(content);
    const contentArPT = contentAr ? textToPortableText(contentAr) : [];

    const sanityDoc: Record<string, unknown> = {
      _type: "post",
      title,
      titleAr,
      slug: { _type: "slug", current: slug },
      excerpt,
      excerptAr,
      content: contentPT,
      contentAr: contentArPT,
      // Keep legacy body for backward compat
      body: contentPT,
      category: { _type: "reference", _ref: `category-${categorySlug}` },
      aiPersona: {
        _type: "reference",
        _ref: `persona-${personaSlugs[0]}`,
      },
      publishedAt: null,
      featured: false,
      tags,
      seo: {
        focusKeyword: seo.focusKeyword,
        metaTitle: seo.metaTitle,
        metaDescription: seo.metaDescription,
        noIndex: false,
      },
      indexingStatus: "pending",
    };

    const { documentId } = await sanityMutate([{ create: sanityDoc }]);
    sanityDocumentId = documentId;
  } catch {
    // Non-fatal — return the content even if Sanity save fails
  }

  return {
    title,
    titleAr,
    slug,
    excerpt,
    excerptAr,
    content: content.slice(0, 500),
    contentAr: contentAr.slice(0, 500),
    seo,
    tags,
    sanityDocumentId,
    personaSlugs,
    categorySlug,
  };
}

// ─── Per-Field Regeneration ───────────────────────────────────────────────────

export async function regenerateField(
  input: RegenerateFieldInput,
): Promise<{ value: string; error?: string }> {
  const { field, personaSlugs, categorySlug, coreInsight, existingTitle, existingExcerpt, existingContent } = input;

  const category = VISION_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return { value: "", error: `Unknown category: ${categorySlug}` };

  const fieldPrompts: Record<RegenerableField, string> = {
    title: `Generate ONLY a compelling English blog post title (50-65 chars) for this topic. Output ONLY the title text, nothing else.`,
    titleAr: `Generate ONLY a compelling Arabic blog post title (50-65 chars) for this topic. Output ONLY the Arabic title text, nothing else.`,
    excerpt: `Generate ONLY a concise English excerpt/meta-description (max 160 chars) for a blog post titled "${existingTitle ?? coreInsight}". Output ONLY the excerpt text, nothing else.`,
    excerptAr: `Generate ONLY a concise Arabic excerpt (max 160 chars) for a blog post titled "${existingTitle ?? coreInsight}". Output ONLY the Arabic excerpt text, nothing else.`,
    content: `Write a full English blog post (1500-2500 words) in markdown with ## headings about: ${coreInsight}. ${existingTitle ? `Title: "${existingTitle}".` : ""}`,
    contentAr: `Write a full Arabic blog post (1500-2500 words) in markdown with ## headings about: ${coreInsight}. ${existingTitle ? `Title: "${existingTitle}".` : ""} Write entirely in Arabic (فصحى), RTL-ready.`,
    focusKeyword: `Generate ONLY a primary SEO focus keyword phrase (2-4 words) for a post about: "${coreInsight}". Output ONLY the keyword, nothing else.`,
    metaTitle: `Generate ONLY an SEO-optimized meta title (50-60 chars) for a post titled "${existingTitle ?? coreInsight}". Output ONLY the meta title text, nothing else.`,
    metaDescription: `Generate ONLY an SEO meta description (150-160 chars) for a post about: "${existingExcerpt ?? coreInsight}". Output ONLY the meta description text, nothing else.`,
  };

  // Build contextual system prompt
  const systemPrompt = personaSlugs.length === 1
    ? buildSystemPrompt(
        personaSlugs[0],
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.name ?? "",
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.tone ?? "analytical",
        PERSONA_SEED.find((p) => p.slug === personaSlugs[0])?.bio ?? "",
        category.title,
        category.description,
      )
    : buildBlendedPrompt(personaSlugs, category.title, category.description);

  try {
    const raw = await callAI(systemPrompt, fieldPrompts[field]);
    // Clean up: strip quotes, code fences, excess whitespace
    let value = raw.trim()
      .replace(/^["'`]+/, "")
      .replace(/["'`]+$/, "")
      .replace(/^```[\s\S]*?\n/, "")
      .replace(/\n```$/, "")
      .trim();

    // Apply length limits
    const limits: Partial<Record<RegenerableField, number>> = {
      title: 200,
      titleAr: 200,
      excerpt: 160,
      excerptAr: 160,
      focusKeyword: 60,
      metaTitle: 70,
      metaDescription: 170,
    };
    if (limits[field]) {
      value = value.slice(0, limits[field]);
    }

    return { value };
  } catch (err) {
    return { value: "", error: err instanceof Error ? err.message : "AI call failed" };
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function emptyFullSuiteResult(
  input: FullSuiteInput,
  error: string,
): FullSuiteResult {
  return {
    title: "",
    titleAr: "",
    slug: "",
    excerpt: "",
    excerptAr: "",
    content: "",
    contentAr: "",
    seo: { focusKeyword: "", metaTitle: "", metaDescription: "" },
    tags: [],
    personaSlugs: input.personaSlugs,
    categorySlug: input.categorySlug,
    error,
  };
}
