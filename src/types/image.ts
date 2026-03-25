/**
 * TypeScript types for the Mizo Universe image asset ecosystem.
 * Supports 20,000+ images with full metadata mapping.
 */

/** Broad content categories used to organise the archive */
export type ImageCategory =
  | "sports"
  | "business"
  | "technology"
  | "lifestyle"
  | "events"
  | "travel"
  | "personal"
  | "uncategorized";

/** Contextual metadata attached to every image */
export interface ImageMetadata {
  /** ISO-8601 date string (e.g. "2024-03-15") */
  date: string;
  /** High-level content category */
  category: ImageCategory;
  /** Free-text context descriptor (e.g. "AFC Champions League Final") */
  context: string;
  /** SEO-optimised alt text; produced by the SEO team */
  altText: string;
  /** Optional searchable tags */
  tags?: string[];
}

/**
 * The raw shape produced by the legacy Hostinger JSON export.
 * Field names are kept as-is to avoid ambiguity during migration.
 */
export interface LegacyImageAsset {
  id: string | number;
  /** Absolute or root-relative URL on Hostinger storage */
  url: string;
  title?: string;
  description?: string;
  /** YYYY-MM-DD or epoch milliseconds */
  date?: string | number;
  /** Unstructured category label */
  cat?: string;
  tags?: string | string[];
  width?: number;
  height?: number;
}

/** Canonical image record used throughout the Next.js app */
export interface ImageAsset {
  id: string;
  /** CDN-ready URL (WebP preferred, JPEG/PNG fallback) */
  src: string;
  /** Intrinsic width in pixels */
  width: number;
  /** Intrinsic height in pixels */
  height: number;
  metadata: ImageMetadata;
  /** Optional low-quality placeholder for blur-up effect */
  blurDataURL?: string;
}

/** Shape returned by the pagination helper */
export interface ImagePage {
  items: ImageAsset[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
}

/** Parameters for the Hostinger CDN image loader */
export interface HostingerLoaderParams {
  src: string;
  width: number;
  quality?: number;
}
