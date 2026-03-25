# Mizo Universe — API Reference

This document covers the public TypeScript APIs shipped with the Mizo Universe
Next.js application. All modules live under `src/lib/` or `src/types/`.

---

## Table of Contents

1. [Types (`src/types/image.ts`)](#types)
2. [SEO library (`src/lib/seo/`)](#seo-library)
   - [planets.ts](#seoplanetsts)
   - [metadata.ts](#seometadatats)
   - [structured-data.ts](#seostructured-datats)
3. [Image pipeline (`src/lib/`)](#image-pipeline)
   - [hostinger-loader.ts](#hostinger-loaderts)
   - [image-mapper.ts](#image-mapperts)
   - [asset-optimization.ts](#asset-optimizationts)

---

## Types

**`src/types/image.ts`**

All image-related types used across the application.

```ts
import type {
  ImageAsset,
  ImageCategory,
  ImageMetadata,
  ImagePage,
  HostingerLoaderParams,
  LegacyImageAsset,
} from "@/types/image";
```

### `ImageCategory`

```ts
type ImageCategory =
  | "sports"
  | "business"
  | "technology"
  | "lifestyle"
  | "events"
  | "travel"
  | "personal"
  | "uncategorized";
```

### `ImageMetadata`

```ts
interface ImageMetadata {
  date: string;      // ISO-8601, e.g. "2024-03-15"
  category: ImageCategory;
  context: string;   // e.g. "AFC Champions League Final"
  altText: string;   // SEO-optimised alt text
  tags?: string[];
}
```

### `ImageAsset`

The canonical image record used throughout the app.

```ts
interface ImageAsset {
  id: string;
  src: string;        // CDN-ready URL (WebP preferred)
  width: number;      // intrinsic width in pixels
  height: number;     // intrinsic height in pixels
  metadata: ImageMetadata;
  blurDataURL?: string; // optional blur-up placeholder
}
```

### `ImagePage`

Returned by the pagination helper.

```ts
interface ImagePage {
  items: ImageAsset[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
}
```

### `LegacyImageAsset`

Raw shape produced by the Hostinger JSON export.

```ts
interface LegacyImageAsset {
  id: string | number;
  url: string;          // absolute or root-relative URL
  title?: string;
  description?: string;
  date?: string | number; // YYYY-MM-DD or epoch milliseconds
  cat?: string;           // unstructured category label
  tags?: string | string[];
  width?: number;
  height?: number;
}
```

### `HostingerLoaderParams`

```ts
interface HostingerLoaderParams {
  src: string;
  width: number;
  quality?: number; // default 80
}
```

---

## SEO library

### `src/lib/seo/planets.ts`

Planet registry for the 3D solar system portfolio.

```ts
import {
  PLANETS,
  PLANET_SLUGS,
  getPlanetBySlug,
  type Planet,
} from "@/lib/seo/planets";
```

#### `Planet` interface

```ts
interface Planet {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  theme: "sports" | "business" | "technology" | "life" | "universe";
  color: string; // CSS hex colour
}
```

#### `PLANETS`

`Planet[]` — the full ordered list of all eight planets.

#### `PLANET_SLUGS`

`string[]` — convenience array of all planet slugs, e.g.
`["mercury", "venus", "earth", ...]`.

#### `getPlanetBySlug(slug)`

Returns the matching `Planet` or `undefined`.

```ts
const planet = getPlanetBySlug("earth");
// { name: "Earth", slug: "earth", theme: "life", ... }
```

**Example — `generateStaticParams` in a planet route:**

```ts
// src/app/planet/[planetName]/page.tsx
import { PLANET_SLUGS } from "@/lib/seo/planets";

export function generateStaticParams() {
  return PLANET_SLUGS.map((slug) => ({ planetName: slug }));
}
```

---

### `src/lib/seo/metadata.ts`

Site-wide metadata constants and per-planet metadata helpers.

```ts
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  TWITTER_HANDLE,
  getCanonicalUrl,
  getPlanetMetadata,
  generatePlanetAlternates,
  generatePlanetOpenGraph,
  generatePlanetTwitterCard,
} from "@/lib/seo/metadata";
```

#### Constants

| Export           | Value                                                              |
|------------------|--------------------------------------------------------------------|
| `SITE_URL`       | `process.env.NEXT_PUBLIC_SITE_URL` or `"https://mizouniverse.com"` |
| `SITE_NAME`      | `"Mizo Universe"`                                                  |
| `SITE_TAGLINE`   | `"The Digital Ecosystem of Captain Mizo Amin — …"`                |
| `TWITTER_HANDLE` | `"@MizoAmin"`                                                      |

#### `getCanonicalUrl(path)`

Prepend `SITE_URL` to any path, ensuring a leading slash.

```ts
getCanonicalUrl("/planet/earth");
// "https://mizouniverse.com/planet/earth"

getCanonicalUrl("planet/earth"); // leading slash added automatically
// "https://mizouniverse.com/planet/earth"
```

#### `getPlanetMetadata(planet)`

Returns a plain object with pre-computed title, description, keywords,
canonical URL, and OG image URL for the given planet.

```ts
import { getPlanetBySlug } from "@/lib/seo/planets";
import { getPlanetMetadata } from "@/lib/seo/metadata";

const planet = getPlanetBySlug("saturn")!;
const meta = getPlanetMetadata(planet);
// {
//   title: "Saturn — Technology | Mizo Universe",
//   description: "Structure and innovation — ...",
//   keywords: ["technology", "innovation", ...],
//   canonicalUrl: "https://mizouniverse.com/planet/saturn",
//   ogImageUrl: "https://mizouniverse.com/planet/saturn/opengraph-image",
// }
```

#### `generatePlanetOpenGraph(planet)`

Returns a Next.js-compatible `openGraph` metadata object.

```ts
// src/app/planet/[planetName]/page.tsx
import type { Metadata } from "next";
import { getPlanetBySlug } from "@/lib/seo/planets";
import { generatePlanetOpenGraph } from "@/lib/seo/metadata";

export async function generateMetadata({ params }): Promise<Metadata> {
  const planet = getPlanetBySlug(params.planetName)!;
  return {
    openGraph: generatePlanetOpenGraph(planet),
  };
}
```

#### `generatePlanetTwitterCard(planet)`

Returns a Next.js-compatible `twitter` metadata object.

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const planet = getPlanetBySlug(params.planetName)!;
  return {
    twitter: generatePlanetTwitterCard(planet),
  };
}
```

#### `generatePlanetAlternates(planet)`

Returns a Next.js-compatible `alternates` metadata object with the canonical
URL pre-filled.

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const planet = getPlanetBySlug(params.planetName)!;
  return {
    alternates: generatePlanetAlternates(planet),
  };
}
```

---

### `src/lib/seo/structured-data.ts`

JSON-LD schema builders for Google structured data.

```ts
import {
  buildWebSiteSchema,
  buildPersonSchema,
  buildPlanetSchema,
  buildHomepageBreadcrumb,
} from "@/lib/seo/structured-data";
```

All functions return a plain object. Inject it into the page with a
`<script type="application/ld+json">` tag inside a Server Component.

#### `buildWebSiteSchema()`

`schema.org/WebSite` schema for the root domain.

```tsx
// src/app/layout.tsx
import { buildWebSiteSchema } from "@/lib/seo/structured-data";

export default function RootLayout({ children }) {
  const schema = buildWebSiteSchema();
  return (
    <html>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
```

#### `buildPersonSchema()`

`schema.org/Person` schema for Mizo Amin.

```tsx
const personSchema = buildPersonSchema();
// { "@context": "https://schema.org", "@type": "Person", name: "Mizo Amin", ... }
```

#### `buildPlanetSchema(planet)`

`schema.org/WebPage` schema for a planet detail page, including breadcrumb
and image metadata.

```tsx
// src/app/planet/[planetName]/page.tsx
import { buildPlanetSchema } from "@/lib/seo/structured-data";
import { getPlanetBySlug } from "@/lib/seo/planets";

export default function PlanetPage({ params }) {
  const planet = getPlanetBySlug(params.planetName)!;
  const schema = buildPlanetSchema(planet);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* page content */}
    </>
  );
}
```

#### `buildHomepageBreadcrumb()`

`schema.org/BreadcrumbList` with a single "Home" entry for the root page.

---

## Image pipeline

### `src/lib/hostinger-loader.ts`

A Next.js custom image loader that appends WebP conversion and resize
parameters recognised by Hostinger's LiteSpeed Cache optimiser.

#### Setup — global (recommended)

```ts
// next.config.ts
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/hostinger-loader.ts",
  },
};
export default nextConfig;
```

Set `NEXT_PUBLIC_CDN_BASE_URL` in your environment when images are served
from a custom CDN domain:

```
# .env.local
NEXT_PUBLIC_CDN_BASE_URL=https://cdn.mizouniverse.com
```

#### Setup — per-component

```tsx
import Image from "next/image";
import hostingerLoader from "@/lib/hostinger-loader";

<Image
  loader={hostingerLoader}
  src="/images/hero.jpg"
  width={1200}
  height={630}
  alt="Mizo Universe hero"
/>
```

The loader appends `?format=webp&width=<w>&quality=<q>` automatically.
For absolute URLs (external CDN assets) the full URL is returned unchanged
except for the appended query params.

---

### `src/lib/image-mapper.ts`

Converts raw Hostinger JSON export records to the canonical `ImageAsset`
shape and provides filtering and pagination helpers.

```ts
import {
  mapLegacyAsset,
  mapLegacyAssets,
  paginateAssets,
  filterAssets,
} from "@/lib/image-mapper";
```

#### `mapLegacyAsset(legacy)`

Convert a single `LegacyImageAsset` to an `ImageAsset`.

```ts
import legacyData from "@/data/legacy-images.json";
import { mapLegacyAsset } from "@/lib/image-mapper";

const asset = mapLegacyAsset(legacyData[0]);
// {
//   id: "42",
//   src: "https://cdn.mizouniverse.com/images/hero.jpg",
//   width: 1920,
//   height: 1080,
//   metadata: { date: "2024-03-15", category: "sports", altText: "...", ... },
// }
```

#### `mapLegacyAssets(legacyAssets)`

Bulk-convert an entire JSON export. Safe to call inside `generateStaticParams`
or a React Server Component — processing happens at build time.

```ts
import legacyData from "@/data/legacy-images.json";
import { mapLegacyAssets } from "@/lib/image-mapper";

const assets = mapLegacyAssets(legacyData);
// ImageAsset[] — all 20 000+ records normalised
```

#### `filterAssets(assets, options)`

Filter by category, date range, or free-text search. All options are optional.

```ts
import { filterAssets } from "@/lib/image-mapper";

// Filter by category
const sports = filterAssets(assets, { category: "sports" });

// Filter by date range
const recent = filterAssets(assets, {
  fromDate: "2024-01-01",
  toDate: "2024-12-31",
});

// Free-text search across altText, context, category, and tags
const results = filterAssets(assets, { search: "champions league" });

// Combine filters
const filtered = filterAssets(assets, {
  category: "sports",
  fromDate: "2024-01-01",
  search: "final",
});
```

#### `paginateAssets(assets, page, pageSize?)`

Paginate a pre-mapped (and optionally filtered) array. Returns an `ImagePage`.
`page` is 1-indexed; `pageSize` defaults to `48`.

```ts
import { mapLegacyAssets, paginateAssets } from "@/lib/image-mapper";

const allAssets = mapLegacyAssets(legacyData);

// Page 1 of the full catalogue
const page1 = paginateAssets(allAssets, 1);
// { items: [...48 assets...], total: 20000, page: 1, pageSize: 48, hasNextPage: true }

// Page 3 with a custom page size
const page3 = paginateAssets(allAssets, 3, 24);
```

**Example — `generateStaticParams` for paginated gallery routes:**

```ts
// src/app/gallery/page/[page]/page.tsx
import legacyData from "@/data/legacy-images.json";
import { mapLegacyAssets, paginateAssets } from "@/lib/image-mapper";

const PAGE_SIZE = 48;

export function generateStaticParams() {
  const total = legacyData.length;
  const pageCount = Math.ceil(total / PAGE_SIZE);
  return Array.from({ length: pageCount }, (_, i) => ({
    page: String(i + 1),
  }));
}
```

---

### `src/lib/asset-optimization.ts`

Utility functions for WebP detection, responsive `sizes` attributes,
blur placeholders, and catalogue chunking.

```ts
import {
  isWebP,
  toWebPUrl,
  buildSizesAttr,
  buildBlurDataURL,
  chunkAssets,
  toSlimAsset,
} from "@/lib/asset-optimization";
```

#### `isWebP(src)`

Returns `true` when the URL already points to a `.webp` file.

```ts
isWebP("/images/hero.webp");   // true
isWebP("/images/hero.jpg");    // false
isWebP("/img.webp?v=2");       // true
```

#### `toWebPUrl(src)`

Derive the CDN URL for a given asset, appending `?format=webp` when the
source is not already WebP.

```ts
toWebPUrl("/images/hero.jpg");
// "/images/hero.jpg?format=webp"

toWebPUrl("/images/hero.webp");
// "/images/hero.webp"  (unchanged)

toWebPUrl("/images/hero.jpg?v=2");
// "/images/hero.jpg?v=2&format=webp"
```

#### `buildSizesAttr(columns?)`

Generate a responsive `sizes` attribute for common grid layouts.
`columns` defaults to `3`.

```ts
buildSizesAttr();   // "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
buildSizesAttr(1);  // "100vw"
buildSizesAttr(2);  // "(max-width: 640px) 100vw, 50vw"
buildSizesAttr(4);  // "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
```

```tsx
<Image
  src={asset.src}
  sizes={buildSizesAttr(3)}
  width={asset.width}
  height={asset.height}
  alt={asset.metadata.altText}
/>
```

#### `buildBlurDataURL(dominantColor?)`

Generate a tiny inline SVG data URL for use as a blur-up placeholder.
`dominantColor` defaults to `"#888888"`.

At ~120 bytes this is safe to inline for catalogues with 20 000+ images.

```ts
const placeholder = buildBlurDataURL("#4fa3e0"); // Earth blue
// "data:image/svg+xml;base64,..."
```

```tsx
<Image
  src={asset.src}
  placeholder="blur"
  blurDataURL={asset.blurDataURL ?? buildBlurDataURL()}
  alt={asset.metadata.altText}
/>
```

#### `chunkAssets(assets, size?)`

Split a large catalogue into chunks of at most `size` items (default `48`).
Use inside `generateStaticParams` to cap the number of images per page.

```ts
const chunks = chunkAssets(allAssets, 48);
// ImageAsset[][] — each inner array has at most 48 items

export function generateStaticParams() {
  return chunks.map((_, i) => ({ page: String(i + 1) }));
}
```

#### `toSlimAsset(asset)`

Strip `blurDataURL` and `tags` from an asset so the JSON serialised into the
HTML payload stays small. The omitted fields can be fetched on demand.

```ts
const slim = toSlimAsset(asset);
// { id, src, width, height, metadata: { date, category, context, altText } }
// blurDataURL and metadata.tags are omitted
```
