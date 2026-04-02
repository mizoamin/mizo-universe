# Hostinger Asset Registry

This directory holds **metadata files only** — JSON manifests, sitemaps, and AI-generated descriptors that represent the 20,000+ external assets hosted on our Hostinger CDN.

**No raw media files (images, videos, models, fonts) should be committed here.**

## What belongs in this folder

| File type | Purpose |
|-----------|---------|
| `*.json` | Asset manifests mapping relative paths to CDN-hosted files |
| `*.xml` | Sitemaps for search-engine discovery of hosted assets |
| `*.ai.json` | AI-generated metadata (alt text, descriptions, tags, embeddings) |

## How it works

1. Assets are hosted externally on the Hostinger CDN.
2. Metadata files in this directory describe those assets (paths, dimensions, alt text, categories, etc.).
3. The `assetHelper.ts` utility combines the CDN base URL with relative paths from these manifests to produce full asset URLs at runtime.

## Usage

```ts
import { getAssetUrl } from '@/data/hostinger-registry/assetHelper';

// Returns the full CDN URL for an asset
const url = getAssetUrl('images/planets/odyssey/hero.webp');
```

## Adding new metadata

Drop your exported JSON or AI metadata files directly into this directory. The application will read from them via standard imports or `fs` at build time.
