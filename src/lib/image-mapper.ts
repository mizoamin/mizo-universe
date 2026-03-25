/**
 * Maps legacy Hostinger JSON records to the canonical ImageAsset shape
 * expected by the Next.js app.
 *
 * Legacy records arrive in bulk exports from the Hostinger file manager and
 * may have inconsistent field names, mixed date formats, and flat tag strings.
 * This module normalises everything so the rest of the app only ever works
 * with well-typed ImageAsset objects.
 */

import type {
  ImageAsset,
  ImageCategory,
  ImageMetadata,
  ImagePage,
  LegacyImageAsset,
} from "@/types/image";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CATEGORY_MAP: Record<string, ImageCategory> = {
  sport: "sports",
  sports: "sports",
  football: "sports",
  soccer: "sports",
  business: "business",
  biz: "business",
  corporate: "business",
  tech: "technology",
  technology: "technology",
  digital: "technology",
  life: "lifestyle",
  lifestyle: "lifestyle",
  event: "events",
  events: "events",
  travel: "travel",
  personal: "personal",
};

/** Normalise a raw category string to a known ImageCategory. */
function normaliseCategory(raw?: string): ImageCategory {
  if (!raw) return "uncategorized";
  const key = raw.toLowerCase().trim();
  return CATEGORY_MAP[key] ?? "uncategorized";
}

/** Convert epoch millis or "YYYY-MM-DD" strings to an ISO-8601 date string. */
function normaliseDate(raw?: string | number): string {
  if (!raw) return new Date(0).toISOString().slice(0, 10);
  if (typeof raw === "number") {
    return new Date(raw).toISOString().slice(0, 10);
  }
  // Already an ISO date?
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
  const parsed = new Date(raw);
  if (!isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return new Date(0).toISOString().slice(0, 10);
}

/** Split a raw tag value (string or array) into a clean string array. */
function normaliseTags(raw?: string | string[]): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map((t) => t.trim()).filter(Boolean);
  return raw
    .split(/[,;|]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

/**
 * Build an SEO-friendly alt text from available legacy fields.
 * The SEO team can override this value; it is stored in `metadata.altText`.
 */
function buildAltText(asset: LegacyImageAsset): string {
  if (asset.title) return asset.title;
  if (asset.description) return asset.description.slice(0, 120);
  const filename = asset.url.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
  return filename.replace(/[-_]/g, " ") || "Mizo Universe image";
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Convert a single legacy record to an ImageAsset.
 *
 * @param legacy - One record from the Hostinger JSON export.
 * @returns       Canonical ImageAsset ready for use by the Next.js app.
 */
export function mapLegacyAsset(legacy: LegacyImageAsset): ImageAsset {
  const metadata: ImageMetadata = {
    date: normaliseDate(legacy.date),
    category: normaliseCategory(legacy.cat),
    context: legacy.description ?? legacy.title ?? "",
    altText: buildAltText(legacy),
    tags: normaliseTags(legacy.tags),
  };

  return {
    id: String(legacy.id),
    src: legacy.url,
    width: legacy.width ?? 1920,
    height: legacy.height ?? 1080,
    metadata,
  };
}

/**
 * Convert an entire legacy JSON export to an array of ImageAssets.
 *
 * For datasets with 20,000+ records this runs synchronously but is designed
 * to be called inside a `generateStaticParams` or RSC so the cost is paid
 * at build time, not at request time.
 */
export function mapLegacyAssets(
  legacyAssets: LegacyImageAsset[]
): ImageAsset[] {
  return legacyAssets.map(mapLegacyAsset);
}

/**
 * Paginate a pre-mapped array of ImageAssets.
 *
 * With 20,000+ images we never want to ship the full list to the client.
 * Use this helper to slice the dataset for a given page.
 *
 * @param assets   Full sorted/filtered asset array.
 * @param page     1-indexed page number.
 * @param pageSize Number of items per page (default 48).
 */
export function paginateAssets(
  assets: ImageAsset[],
  page: number,
  pageSize = 48
): ImagePage {
  const safePageSize = Math.max(1, pageSize);
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * safePageSize;
  const items = assets.slice(start, start + safePageSize);

  return {
    items,
    total: assets.length,
    page: safePage,
    pageSize: safePageSize,
    hasNextPage: start + safePageSize < assets.length,
  };
}

/**
 * Filter assets by category, date range, or free-text context.
 *
 * All parameters are optional; passing none returns the full array.
 */
export function filterAssets(
  assets: ImageAsset[],
  options: {
    category?: ImageAsset["metadata"]["category"];
    fromDate?: string;
    toDate?: string;
    search?: string;
  }
): ImageAsset[] {
  const { category, fromDate, toDate, search } = options;
  const searchLower = search?.toLowerCase();

  return assets.filter((asset) => {
    if (category && asset.metadata.category !== category) return false;
    if (fromDate && asset.metadata.date < fromDate) return false;
    if (toDate && asset.metadata.date > toDate) return false;
    if (searchLower) {
      const haystack = [
        asset.metadata.altText,
        asset.metadata.context,
        asset.metadata.category,
        ...(asset.metadata.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(searchLower)) return false;
    }
    return true;
  });
}
