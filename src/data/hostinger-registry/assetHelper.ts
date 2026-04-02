/**
 * Hostinger CDN asset URL builder.
 *
 * Combines the CDN base with relative paths from the JSON manifests
 * stored in this directory to produce full, safe asset URLs.
 */

/** Hostinger CDN root (no trailing slash). */
export const HOSTINGER_CDN_BASE =
  process.env.NEXT_PUBLIC_ASSET_ROOT ??
  "https://mizoamin.com/wp-content/uploads/mizo_final_assets/mizo_production_assets";

/**
 * Build a full CDN URL from a relative asset path.
 *
 * - Strips leading slashes from `relativePath` to avoid double-slash issues.
 * - Returns a clean, absolute URL safe for use in `<img>`, `<video>`, fetch, etc.
 *
 * @example
 * getAssetUrl('images/planets/odyssey/hero.webp')
 * // → 'https://your-domain.hostingersite.com/images/planets/odyssey/hero.webp'
 */
export function getAssetUrl(relativePath: string): string {
  // Reject paths that try to escape the CDN root
  const sanitized = relativePath.replace(/^\/+/, '');

  if (sanitized.includes('..')) {
    throw new Error(
      `Invalid asset path: "${relativePath}". Path traversal is not allowed.`,
    );
  }

  const base = HOSTINGER_CDN_BASE.replace(/\/+$/, "");
  return `${base}/${sanitized}`;
}
