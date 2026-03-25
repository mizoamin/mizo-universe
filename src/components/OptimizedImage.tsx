"use client";

/**
 * OptimizedImage
 *
 * Thin wrapper around `next/image` that applies:
 *  - The Hostinger CDN loader (WebP + resize)
 *  - Lazy loading by default (can be overridden with `priority`)
 *  - A blur-placeholder for progressive rendering
 *  - The SEO alt text stored in ImageAsset.metadata.altText
 *
 * Usage:
 * ```tsx
 * <OptimizedImage asset={myImageAsset} className="rounded-lg" />
 * ```
 */

import Image from "next/image";
import type { ImageAsset } from "@/types/image";
import hostingerLoader from "@/lib/hostinger-loader";
import { buildBlurDataURL, buildSizesAttr } from "@/lib/asset-optimization";

interface OptimizedImageProps {
  asset: ImageAsset;
  /** Override the number of grid columns used for the `sizes` attribute */
  columns?: number;
  /** When true, the image is loaded eagerly (above-the-fold hero images) */
  priority?: boolean;
  className?: string;
  /** Tailwind / CSS object-fit style for fill mode */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Render the image in fill mode (parent must be position:relative) */
  fill?: boolean;
}

export default function OptimizedImage({
  asset,
  columns = 3,
  priority = false,
  className,
  objectFit = "cover",
  fill = false,
}: OptimizedImageProps) {
  const placeholder = asset.blurDataURL ?? buildBlurDataURL();
  const sizes = buildSizesAttr(columns);

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.metadata.altText}
        loader={hostingerLoader}
        placeholder="blur"
        blurDataURL={placeholder}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className={className}
        fill
        style={{ objectFit }}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.metadata.altText}
      loader={hostingerLoader}
      placeholder="blur"
      blurDataURL={placeholder}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      className={className}
      width={asset.width}
      height={asset.height}
      priority={priority}
    />
  );
}
