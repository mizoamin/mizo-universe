/**
 * Manifest resolver utilities.
 *
 * The live manifest at MANIFEST_URL is a flat object keyed by filename.
 * Each value has a `path` (Google Drive path) and a `data` block with
 * rich metadata. We extract the relative segment after `mizo_production_assets/`
 * and prepend ASSET_ROOT to build a public Hostinger URL.
 */

import { ASSET_ROOT } from "./constants";

// ─── Manifest types ───────────────────────────────────────────────────────────

export interface ManifestEntryData {
  Title: string;
  Year: string;
  Location?: string;
  City?: string;
  Country?: string;
  Tags?: string[];
  SEO_Tags?: string[];
  Keywords?: string[];
  Caption?: string;
}

export interface ManifestEntry {
  path: string;
  data: ManifestEntryData;
}

export type ManifestMap = Record<string, ManifestEntry>;

// ─── Asset record (resolved + typed) ─────────────────────────────────────────

export interface AssetRecord {
  id: string;
  url: string;
  year: string;
  title: string;
  location: string;
  caption: string;
}

// ─── URL resolution ───────────────────────────────────────────────────────────

/**
 * Converts a raw manifest path (Google Drive format) to a live Hostinger URL.
 * e.g. "/content/drive/MyDrive/mizo_production_assets/legacy/trophy_room/x.webp"
 *   →  "https://mizoamin.com/.../mizo_production_assets/legacy/trophy_room/x.webp"
 */
export function resolveAssetUrl(manifestPath: string): string {
  const marker = "mizo_production_assets/";
  const idx = manifestPath.indexOf(marker);
  const rel = idx !== -1 ? manifestPath.slice(idx + marker.length) : manifestPath;
  return ASSET_ROOT + rel;
}

// ─── Manifest filter ──────────────────────────────────────────────────────────

/**
 * Filters the manifest by path tokens (substring match on the relative path).
 * Pass an array of lowercase strings such as ["legacy/trophy_room", "legacy/national_pride"].
 * Returns all matching entries as AssetRecord[], capped at `limit` if provided.
 */
export function filterManifest(
  manifest: ManifestMap,
  pathTokens: string[],
  limit?: number
): AssetRecord[] {
  const results: AssetRecord[] = [];

  for (const [filename, entry] of Object.entries(manifest)) {
    if (limit !== undefined && results.length >= limit) break;

    const rawPath = entry.path ?? "";
    const marker = "mizo_production_assets/";
    if (!rawPath.includes(marker)) continue;

    const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
    const relLower = rel.toLowerCase();

    if (pathTokens.some((token) => relLower.includes(token))) {
      const d = entry.data;
      results.push({
        id: filename,
        url: ASSET_ROOT + rel,
        year: d.Year ?? "",
        title: d.Title ?? filename,
        location: d.City ?? d.Location ?? "Qatar",
        caption: d.Caption ?? d.Title ?? "",
      });
    }
  }

  return results;
}

/**
 * Same as filterManifest but also applies a year constraint.
 * Used by the Legacy Planet era slider.
 */
export function filterManifestByYear(
  manifest: ManifestMap,
  pathTokens: string[],
  years: string[],
  limit?: number
): AssetRecord[] {
  const results: AssetRecord[] = [];

  for (const [filename, entry] of Object.entries(manifest)) {
    if (limit !== undefined && results.length >= limit) break;

    const rawPath = entry.path ?? "";
    const marker = "mizo_production_assets/";
    if (!rawPath.includes(marker)) continue;

    const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
    const relLower = rel.toLowerCase();
    const d = entry.data;

    if (
      pathTokens.some((token) => relLower.includes(token)) &&
      years.includes(d.Year ?? "")
    ) {
      results.push({
        id: filename,
        url: ASSET_ROOT + rel,
        year: d.Year ?? "",
        title: d.Title ?? filename,
        location: d.City ?? d.Location ?? "Qatar",
        caption: d.Caption ?? d.Title ?? "",
      });
    }
  }

  return results;
}

/**
 * Filters the manifest by Tags array OR year match.
 * Pass lowercase tag strings such as ["award", "trophy", "champion"].
 * An entry matches if any of its Tags/SEO_Tags/Keywords contain any of the
 * provided tags (case-insensitive substring), OR its Year matches any entry
 * in the years array. Results are capped at `limit`.
 */
export function filterManifestByTags(
  manifest: ManifestMap,
  tags: string[],
  years: string[],
  limit?: number
): AssetRecord[] {
  const results: AssetRecord[] = [];
  const tagsLower = tags.map((t) => t.toLowerCase());

  for (const [filename, entry] of Object.entries(manifest)) {
    if (limit !== undefined && results.length >= limit) break;

    const rawPath = entry.path ?? "";
    const marker = "mizo_production_assets/";
    if (!rawPath.includes(marker)) continue;

    const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
    const d = entry.data;

    // Collect all tag-like fields into a single searchable array
    const allTags = [
      ...(d.Tags ?? []),
      ...(d.SEO_Tags ?? []),
      ...(d.Keywords ?? []),
    ].map((s) => s.toLowerCase());

    const tagMatch = tagsLower.some((t) =>
      allTags.some((at) => at.includes(t))
    );
    const yearMatch = years.includes(d.Year ?? "");

    if (tagMatch || yearMatch) {
      results.push({
        id: filename,
        url: ASSET_ROOT + rel,
        year: d.Year ?? "",
        title: d.Title ?? filename,
        location: d.City ?? d.Location ?? "Qatar",
        caption: d.Caption ?? d.Title ?? "",
      });
    }
  }

  return results;
}
