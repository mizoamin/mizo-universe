"use client";

/**
 * Gallery
 *
 * Renders a paginated, lazily-loaded grid of ImageAssets.
 *
 * Design considerations for 20,000+ images:
 *  - Only one page (default 48 items) is rendered per component mount.
 *  - An IntersectionObserver sentinel at the bottom of the list triggers
 *    the `onLoadMore` callback when the user scrolls near the end.
 *  - Above-the-fold images receive `priority` so they are eagerly loaded;
 *    all others are lazy-loaded by the browser.
 *  - The component is a Client Component purely for the scroll observer;
 *    the initial page data should be fetched server-side and passed as props.
 *
 * Usage (inside a Server Component):
 * ```tsx
 * const page = paginateAssets(allAssets, 1);
 * <Gallery initialPage={page} onLoadMore={fetchMoreAssets} />
 * ```
 */

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageAsset, ImagePage } from "@/types/image";
import OptimizedImage from "@/components/OptimizedImage";

/** Number of above-the-fold images to eagerly load */
const PRIORITY_COUNT = 6;

interface GalleryProps {
  /** First page of assets, pre-fetched server-side */
  initialPage: ImagePage;
  /**
   * Called when the user scrolls to the bottom.
   * Should return the next ImagePage or null when exhausted.
   */
  onLoadMore?: (nextPage: number) => Promise<ImagePage | null>;
  /** Number of columns in the CSS grid (default 3) */
  columns?: 1 | 2 | 3 | 4;
}

const COLUMN_CLASSES: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function Gallery({
  initialPage,
  onLoadMore,
  columns = 3,
}: GalleryProps) {
  const [assets, setAssets] = useState<ImageAsset[]>(initialPage.items);
  const [currentPage, setCurrentPage] = useState(initialPage.page);
  const [hasMore, setHasMore] = useState(initialPage.hasNextPage);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (!onLoadMore || loading || !hasMore) return;
    setLoading(true);
    const next = await onLoadMore(currentPage + 1);
    if (next) {
      setAssets((prev) => [...prev, ...next.items]);
      setCurrentPage(next.page);
      setHasMore(next.hasNextPage);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }, [onLoadMore, loading, hasMore, currentPage]);

  // Attach IntersectionObserver to the sentinel element
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !onLoadMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore, onLoadMore]);

  const gridClass = COLUMN_CLASSES[columns] ?? COLUMN_CLASSES[3];

  return (
    <section aria-label="Image gallery">
      <div className={`grid gap-4 ${gridClass}`}>
        {assets.map((asset, index) => (
          <article
            key={asset.id}
            className="relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800"
            style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
          >
            <OptimizedImage
              asset={asset}
              fill
              columns={columns}
              priority={index < PRIORITY_COUNT}
            />
            <figcaption className="sr-only">
              {asset.metadata.altText} — {asset.metadata.date}
            </figcaption>
          </article>
        ))}
      </div>

      {/* Scroll sentinel */}
      {hasMore && (
        <div
          ref={sentinelRef}
          aria-hidden="true"
          className="flex justify-center py-8"
        >
          {loading && (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Loading more images…
            </span>
          )}
        </div>
      )}

      {!hasMore && assets.length > 0 && (
        <p className="py-8 text-center text-sm text-zinc-400">
          All {assets.length.toLocaleString()} images loaded.
        </p>
      )}
    </section>
  );
}
