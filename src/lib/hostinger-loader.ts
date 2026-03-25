/**
 * Hostinger CDN image loader for Next.js.
 *
 * Usage – either pass it to the global `loaderFile` option in next.config.ts,
 * or supply it as the `loader` prop on individual <Image> components.
 *
 * The loader appends WebP conversion and resize parameters that are
 * recognised by Hostinger's LiteSpeed Cache image optimiser.
 *
 * Docs: https://support.hostinger.com/en/articles/image-optimization
 */
"use client";

import type { HostingerLoaderParams } from "@/types/image";

/**
 * Hostinger CDN base URL.  Override with the NEXT_PUBLIC_CDN_BASE_URL
 * environment variable when proxying through a custom domain.
 */
const CDN_BASE =
  process.env.NEXT_PUBLIC_CDN_BASE_URL?.replace(/\/$/, "") ?? "";

/**
 * Builds a CDN-ready URL with format conversion and size hints.
 *
 * Hostinger LiteSpeed Cache supports the following query params:
 *   - `format=webp`   – serve WebP when browser supports it
 *   - `width=<px>`    – resize to this width
 *   - `quality=<1-100>` – JPEG/WebP compression level
 */
export default function hostingerLoader({
  src,
  width,
  quality = 80,
}: HostingerLoaderParams): string {
  // Absolute URLs (already on Hostinger or another CDN) are passed through
  // with only the optimisation query params appended.
  const base = src.startsWith("http") ? "" : CDN_BASE;
  const url = new URL(`${base}${src}`, "https://placeholder.invalid");

  url.searchParams.set("format", "webp");
  url.searchParams.set("width", String(width));
  url.searchParams.set("quality", String(quality));

  // Return only the path+query when we control the host; return the full URL
  // for external assets so the Next.js runtime can fetch them correctly.
  if (src.startsWith("http")) {
    return url.toString();
  }
  return `${url.pathname}${url.search}`;
}
