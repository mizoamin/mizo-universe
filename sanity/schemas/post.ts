/**
 * Sanity Schema — Blog Post (Enterprise-SEO Standard)
 *
 * 8-Pillar Architecture:
 *   1. title / titleAr — Bilingual titles (required)
 *   2. slug — Auto-generated from title
 *   3. mainImage — Cover image with explicit altText
 *   4. content / contentAr — Separate Portable Text for EN/AR (i18n SEO)
 *   5. excerpt / excerptAr — Social sharing previews (max 160 chars)
 *   6. category — Reference to 11 Master Categories
 *   7. seo — focusKeyword, metaTitle, metaDescription (Yoast/RankMath architecture)
 *   8. publishedAt — Publication datetime
 *
 * Additional fields for the Mizo Universe engine:
 *   - aiPersona reference (Visual Signature on DNA Helix)
 *   - tags array
 *   - featured flag
 *   - Google Indexing status tracking
 *   - Migration audit trail (slug guard for WordPress SEO preservation)
 *
 * NOTE: When Sanity Studio is configured, wrap these definitions
 * with defineType/defineField from the 'sanity' package.
 */

/** Rich text block types shared between content and contentAr */
const RICH_TEXT_BLOCKS = [
  { type: "block" },
  {
    type: "image",
    options: { hotspot: true },
    fields: [
      { name: "alt", title: "Alt Text", type: "string" },
      { name: "caption", title: "Caption", type: "string" },
    ],
  },
  { type: "code" },
];

/**
 * Sanity document schema definition for Blog Post.
 * Use with defineType() when sanity package is installed.
 */
export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "contentAr", title: "المحتوى العربي" },
    { name: "media", title: "Media" },
    { name: "taxonomy", title: "Taxonomy" },
    { name: "seo", title: "SEO" },
    { name: "meta", title: "Metadata" },
  ],
  fields: [
    // ══════════════════════════════════════════════════════════════
    // PILLAR 1: Title (Bilingual, Required)
    // ══════════════════════════════════════════════════════════════
    {
      name: "title",
      title: "Title (English)",
      type: "string",
      group: "content",
      validation: (r: { required: () => { max: (n: number) => unknown } }) =>
        r.required().max(200),
    },
    {
      name: "titleAr",
      title: "العنوان (عربي)",
      type: "string",
      group: "contentAr",
      validation: (r: { required: () => { max: (n: number) => unknown } }) =>
        r.required().max(200),
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 2: Slug (auto-generated, SEO-critical)
    // ══════════════════════════════════════════════════════════════
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      options: { source: "title", maxLength: 96 },
      description:
        "Auto-generated from title. For migrated WordPress posts, set manually to preserve original URL.",
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 3: Main Image (explicit altText for accessibility + SEO)
    // ══════════════════════════════════════════════════════════════
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        {
          name: "altText",
          title: "Alt Text (Required for SEO)",
          type: "string",
          description: "Describe the image for screen readers and Google Image Search.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 4: Content — Separate tabs for EN/AR (i18n SEO)
    // ══════════════════════════════════════════════════════════════
    {
      name: "content",
      title: "Content (English)",
      type: "array",
      group: "content",
      of: RICH_TEXT_BLOCKS,
    },
    {
      name: "contentAr",
      title: "المحتوى (عربي)",
      type: "array",
      group: "contentAr",
      of: RICH_TEXT_BLOCKS,
    },

    // Legacy body field — kept for backward compatibility with existing posts.
    // New posts should use content/contentAr. Queries should check both.
    {
      name: "body",
      title: "Body (Legacy)",
      type: "array",
      hidden: true,
      of: RICH_TEXT_BLOCKS,
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 5: Excerpt — Social Sharing (max 160 chars)
    // ══════════════════════════════════════════════════════════════
    {
      name: "excerpt",
      title: "Excerpt (English)",
      type: "text",
      group: "content",
      description: "Social sharing preview. Max 160 characters.",
      validation: (r: { max: (n: number) => unknown }) => r.max(160),
    },
    {
      name: "excerptAr",
      title: "المقتطف (عربي)",
      type: "text",
      group: "contentAr",
      description: "معاينة المشاركة الاجتماعية. 160 حرفًا كحد أقصى.",
      validation: (r: { max: (n: number) => unknown }) => r.max(160),
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 6: Category — Reference to 11 Master Categories
    // ══════════════════════════════════════════════════════════════
    {
      name: "category",
      title: "Category",
      type: "reference",
      group: "taxonomy",
      to: [{ type: "category" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      group: "taxonomy",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },

    // AI Persona Link — drives DNA Helix visual signature
    {
      name: "aiPersona",
      title: "AI Persona",
      type: "reference",
      group: "taxonomy",
      to: [{ type: "aiPersona" }],
      description:
        "The AI persona that authored this post. Drives the DNA Helix visual signature.",
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 7: SEO — Yoast/RankMath architecture
    // ══════════════════════════════════════════════════════════════
    {
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      fields: [
        {
          name: "focusKeyword",
          title: "Focus Keyword",
          type: "string",
          description: "Primary SEO keyword phrase (2-4 words). Must appear in title, first paragraph, and 3-5 times in body.",
        },
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "50-60 characters. Include focus keyword.",
          validation: (r: { max: (n: number) => unknown }) => r.max(70),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "150-160 characters. Include keyword, end with value proposition.",
          validation: (r: { max: (n: number) => unknown }) => r.max(170),
        },
        {
          name: "canonicalUrl",
          title: "Canonical URL",
          type: "url",
          description: "For WordPress-migrated posts: set to the original URL to signal authority transfer.",
        },
        { name: "noIndex", title: "No Index", type: "boolean", initialValue: false },
        { name: "ogImage", title: "OpenGraph Image Override", type: "image" },
      ],
    },

    // ══════════════════════════════════════════════════════════════
    // PILLAR 8: Published At
    // ══════════════════════════════════════════════════════════════
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "meta",
    },

    // ══════════════════════════════════════════════════════════════
    // Extended Metadata
    // ══════════════════════════════════════════════════════════════
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      group: "meta",
      initialValue: false,
    },

    // Indexing Status — Google Indexing API integration
    {
      name: "indexingStatus",
      title: "Indexing Status",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Submitted", value: "submitted" },
          { title: "Indexed", value: "indexed" },
          { title: "Failed", value: "failed" },
        ],
      },
      initialValue: "pending",
    },
    { name: "lastIndexedAt", title: "Last Indexed At", type: "datetime", group: "meta" },

    // Migration audit trail — slug guard for WordPress SEO preservation
    {
      name: "migrationSource",
      title: "Migration Source",
      type: "string",
      group: "meta",
      description: "Original WordPress/Elementor URL. Set automatically during migration.",
      readOnly: true,
    },
    {
      name: "legacySlug",
      title: "Legacy WordPress Slug",
      type: "string",
      group: "meta",
      description: "The original WordPress slug. Set during migration to preserve SEO equity. Slug Guard uses this for 301 redirect mapping.",
      readOnly: true,
    },
  ],
  orderings: [
    {
      title: "Published (Latest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" as const }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "mainImage",
    },
  },
} as const;

export default postSchema;
