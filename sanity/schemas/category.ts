/**
 * Sanity Schema — Blog Category (Pure TypeScript Definition)
 *
 * 11 Master Categories for VisionPlanet blog engine.
 * Each category carries bilingual metadata (EN/AR) and maps
 * directly to a DNA Helix segment in the 3D frontend.
 *
 * NOTE: When Sanity Studio is configured, wrap these definitions
 * with defineType/defineField from the 'sanity' package.
 *
 * Shared seed data lives in src/config/visionCategories.ts
 * and is re-exported here for migration scripts.
 */

// Re-export shared category data for Sanity migration scripts
export { VISION_CATEGORIES as CATEGORY_SEED } from "../../src/config/visionCategories";

/** Master category slugs — single source of truth */
export const MASTER_CATEGORIES = [
  "sports",
  "business",
  "mindset",
  "wellness",
  "lifestyle",
  "arts",
  "reads",
  "voices",
  "culinary",
  "tech-unboxing",
  "gaming",
] as const;

export type MasterCategorySlug = (typeof MASTER_CATEGORIES)[number];

/**
 * Sanity document schema definition for Blog Category.
 * Use with defineType() when sanity package is installed.
 */
export const categorySchema = {
  name: "category",
  title: "Blog Category",
  type: "document",
  fields: [
    { name: "title", title: "Title (English)", type: "string" },
    { name: "titleAr", title: "Title (Arabic)", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 48 } },
    { name: "description", title: "Description (English)", type: "text" },
    { name: "descriptionAr", title: "Description (Arabic)", type: "text" },
    { name: "descriptionFull", title: "Full Description (English)", type: "text" },
    { name: "descriptionFullAr", title: "Full Description (Arabic)", type: "text" },
    { name: "includes", title: "Content Pillars", type: "array", of: [{ type: "string" }], description: "What this category covers (bullet points)" },
    { name: "icon", title: "Category Icon Emoji", type: "string" },
    { name: "helixColor", title: "DNA Helix Segment Color", type: "string" },
    { name: "sortOrder", title: "Sort Order", type: "number" },
    {
      name: "seo",
      title: "SEO Overrides",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text" },
        { name: "ogImage", title: "OpenGraph Image", type: "image" },
      ],
    },
  ],
  orderings: [
    { title: "Sort Order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" as const }] },
  ],
} as const;

export default categorySchema;
