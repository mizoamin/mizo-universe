/**
 * Asset optimisation utilities for the Mizo Universe image pipeline.
 *
 * Covers:
 *  - WebP format detection
 *  - Responsive `sizes` attribute generation
 *  - Tiny blur-placeholder generation (base64 SVG)
 *  - Bundle-size guardrails (chunking large catalogues)
 */

import type { ImageAsset } from "@/types/image";

// ---------------------------------------------------------------------------
// WebP helpers
// ---------------------------------------------------------------------------

/**
 * Returns true when the asset URL already points to a WebP file.
 * The Hostinger CDN loader converts non-WebP images on the fly via the
 * `format=webp` query param, but this helper lets callers skip that step
 * when the source is already WebP.
 */
export function isWebP(src: string): boolean {
  return /\.webp(\?|$)/i.test(src);
}

/**
 * Derive the expected CDN URL for a given asset, preferring WebP.
 *
 * When the source is already a WebP the URL is returned as-is.
 * Otherwise the CDN loader will add `?format=webp` at render time; this
 * helper exists purely for static pre-computation (e.g. sitemap generation).
 */
export function toWebPUrl(src: string): string {
  if (isWebP(src)) return src;
  const url = src.includes("?") ? `${src}&format=webp` : `${src}?format=webp`;
  return url;
}

// ---------------------------------------------------------------------------
// Responsive sizes
// ---------------------------------------------------------------------------

/**
 * Generate a `sizes` attribute string for common gallery breakpoints.
 *
 * @param columns – Number of columns in the grid at desktop width (default 3).
 *
 * Example output for 3 columns:
 *   "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 */
export function buildSizesAttr(columns = 3): string {
  if (columns === 1) return "100vw";
  if (columns === 2) return "(max-width: 640px) 100vw, 50vw";
  if (columns === 4)
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";
  // Default: 3-column grid
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
}

// ---------------------------------------------------------------------------
// Blur placeholder
// ---------------------------------------------------------------------------

/**
 * Generate a tiny inline SVG encoded as a base64 data URL.
 *
 * Using an SVG instead of a tiny JPEG keeps the placeholder at ~120 bytes,
 * regardless of the image size, which is important when rendering 20k items.
 *
 * The placeholder uses the dominant colour if provided, otherwise a neutral
 * grey that works well for dark and light themes.
 */
export function buildBlurDataURL(dominantColor = "#888888"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="${dominantColor}"/></svg>`;
  // `btoa` is available in both browser and modern Node.js (v16+), making
  // this function safe to call from Client Components.
  const encoded = typeof btoa === "function"
    ? btoa(svg)
    : Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${encoded}`;
}

// ---------------------------------------------------------------------------
// Bundle-size guardrails
// ---------------------------------------------------------------------------

/**
 * Split a large catalogue into chunks of at most `size` items.
 *
 * Static-site generators work best when no single page references more than
 * a few hundred images.  Call this helper inside `generateStaticParams` to
 * produce per-page route params.
 *
 * @param assets – Full asset list.
 * @param size   – Chunk size (default 48 – one page of a 3-column grid).
 */
export function chunkAssets(assets: ImageAsset[], size = 48): ImageAsset[][] {
  const chunks: ImageAsset[][] = [];
  for (let i = 0; i < assets.length; i += size) {
    chunks.push(assets.slice(i, i + size));
  }
  return chunks;
}

/**
 * Strip any fields not needed for the initial render so that the JSON
 * serialised into the HTML payload stays small.
 *
 * The omitted fields (blurDataURL, tags) can be fetched on demand.
 */
export function toSlimAsset(
  asset: ImageAsset
): Omit<ImageAsset, "blurDataURL"> & { metadata: Omit<ImageAsset["metadata"], "tags"> } {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { blurDataURL: _blur, metadata, ...rest } = asset;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tags: _tags, ...slimMeta } = metadata;
  return { ...rest, metadata: slimMeta };
}
