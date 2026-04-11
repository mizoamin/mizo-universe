/**
 * BlogContent — Sanity Portable Text Renderer with Elementor Block Emulation
 *
 * Custom React components for Sanity block types that replicate
 * Elementor Pro's visual flexibility while outputting clean, semantic,
 * lightweight HTML optimized for Core Web Vitals.
 *
 * Block Components:
 *   RichTextSection  — Standard prose with full mark support
 *   MediaFullWidth   — Edge-to-edge image/video with lazy loading
 *   InsightCallout   — Highlighted insight box (tip, warning, quote)
 *   ComparisonTable  — Side-by-side comparison grid
 *   LegacyHTML       — Sanitized legacy Elementor HTML (migration mode)
 *
 * Performance:
 *   Zero CLS — all images use aspect-ratio + contain
 *   Lazy loading — all media below fold
 *   No external CSS — Tailwind utility classes only
 *   SSR-safe — no useEffect, no window access
 */

import Link from "next/link";
import type { PortableTextBlock } from "@/lib/sanityClient";

// ─── Types ────────────────────────────────────────────────────────────────────

/** Extended block types beyond standard Portable Text */
interface ImageBlock {
  _type: "image";
  _key: string;
  asset: { url: string };
  alt?: string;
  caption?: string;
}

interface InsightCalloutBlock {
  _type: "insightCallout";
  _key: string;
  variant: "tip" | "warning" | "quote" | "insight";
  heading?: string;
  body: string;
  attribution?: string;
}

interface ComparisonTableBlock {
  _type: "comparisonTable";
  _key: string;
  heading?: string;
  columns: Array<{
    title: string;
    items: string[];
  }>;
}

interface MediaFullWidthBlock {
  _type: "mediaFullWidth";
  _key: string;
  mediaType: "image" | "video";
  url: string;
  alt?: string;
  caption?: string;
  aspectRatio?: string;
}

interface LegacyHTMLBlock {
  _type: "legacyHTML";
  _key: string;
  html: string;
  source?: string;
}

type ContentBlock =
  | PortableTextBlock
  | ImageBlock
  | InsightCalloutBlock
  | ComparisonTableBlock
  | MediaFullWidthBlock
  | LegacyHTMLBlock;

export interface BlogContentProps {
  blocks: unknown[];
  /** Persona accent color for styled elements */
  accentColor?: string;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BlogContent({
  blocks,
  accentColor = "#00ffff",
}: BlogContentProps) {
  return (
    <div className="blog-content space-y-0">
      {blocks.map((block) => {
        const b = block as ContentBlock;
        const key = ("_key" in b && b._key) || Math.random().toString(36);
        return (
          <ContentBlockRenderer
            key={key}
            block={b}
            accentColor={accentColor}
          />
        );
      })}
    </div>
  );
}

// ─── Block Router ─────────────────────────────────────────────────────────────

function ContentBlockRenderer({
  block,
  accentColor,
}: {
  block: ContentBlock;
  accentColor: string;
}) {
  switch (block._type) {
    case "block":
      return <RichTextSection block={block as PortableTextBlock} accentColor={accentColor} />;
    case "image":
      return <ImageRenderer block={block as ImageBlock} />;
    case "mediaFullWidth":
      return <MediaFullWidth block={block as MediaFullWidthBlock} />;
    case "insightCallout":
      return <InsightCallout block={block as InsightCalloutBlock} accentColor={accentColor} />;
    case "comparisonTable":
      return <ComparisonTable block={block as ComparisonTableBlock} accentColor={accentColor} />;
    case "legacyHTML":
      return <LegacyHTML block={block as LegacyHTMLBlock} />;
    default:
      return null;
  }
}

// ─── RichTextSection ──────────────────────────────────────────────────────────

function RichTextSection({
  block,
  accentColor,
}: {
  block: PortableTextBlock;
  accentColor: string;
}) {
  const children = renderSpans(block);

  switch (block.style) {
    case "h1":
      return (
        <h1 className="text-3xl sm:text-4xl font-black mt-12 mb-4 leading-tight tracking-tight text-white">
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-3 leading-tight text-white">
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-2 leading-snug text-white">
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-lg font-semibold mt-6 mb-2 text-gray-200">
          {children}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote
          className="my-6 pl-5 py-1 italic text-gray-300 leading-relaxed"
          style={{ borderLeft: `3px solid ${accentColor}` }}
        >
          {children}
        </blockquote>
      );
    default:
      return (
        <p className="text-gray-200 leading-[1.8] mb-4 text-base sm:text-lg">
          {children}
        </p>
      );
  }
}

// ─── Span / Mark Renderer ─────────────────────────────────────────────────────

function renderSpans(block: PortableTextBlock): React.ReactNode[] {
  const markDefs = block.markDefs ?? [];

  return (block.children ?? []).map((child, j) => {
    const text = child.text;
    const marks = child.marks ?? [];

    let node: React.ReactNode = text;

    // Apply marks in order
    for (const mark of marks) {
      if (mark === "strong") {
        node = <strong key={`s-${j}`} className="font-bold text-white">{node}</strong>;
      } else if (mark === "em") {
        node = <em key={`e-${j}`}>{node}</em>;
      } else if (mark === "code") {
        node = (
          <code
            key={`c-${j}`}
            className="bg-white/10 px-1.5 py-0.5 rounded text-cyan-300 text-sm font-mono"
          >
            {node}
          </code>
        );
      } else if (mark === "underline") {
        node = <u key={`u-${j}`}>{node}</u>;
      } else if (mark === "strikethrough" || mark === "strike-through") {
        node = <s key={`d-${j}`}>{node}</s>;
      } else {
        // Check markDefs for links and annotations
        const def = markDefs.find((d) => d._key === mark);
        if (def?._type === "link" && def.href) {
          const isExternal =
            typeof def.href === "string" &&
            (def.href.startsWith("http://") || def.href.startsWith("https://"));
          node = isExternal ? (
            <a
              key={`l-${j}`}
              href={def.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-400 transition-colors"
            >
              {node}
            </a>
          ) : (
            <Link
              key={`l-${j}`}
              href={def.href}
              className="text-cyan-400 underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-400 transition-colors"
            >
              {node}
            </Link>
          );
        }
      }
    }

    return node;
  });
}

// ─── Image Block ──────────────────────────────────────────────────────────────

function ImageRenderer({ block }: { block: ImageBlock }) {
  const url = block.asset?.url;
  if (!url) return null;

  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={block.alt ?? ""}
        loading="lazy"
        decoding="async"
        className="w-full rounded-xl"
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
      />
      {block.caption && (
        <figcaption className="text-center text-gray-500 text-sm mt-3 italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── MediaFullWidth — Edge-to-edge image/video ────────────────────────────────

function MediaFullWidth({ block }: { block: MediaFullWidthBlock }) {
  const ratio = block.aspectRatio ?? "16/9";

  return (
    <figure className="my-10 -mx-4 sm:-mx-6 lg:-mx-8">
      {block.mediaType === "video" ? (
        <video
          src={block.url}
          controls
          preload="metadata"
          className="w-full"
          style={{ aspectRatio: ratio }}
        >
          <track kind="captions" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={block.url}
          alt={block.alt ?? ""}
          loading="lazy"
          decoding="async"
          className="w-full"
          style={{ aspectRatio: ratio, objectFit: "cover" }}
        />
      )}
      {block.caption && (
        <figcaption className="text-center text-gray-500 text-sm mt-3 italic px-4">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── InsightCallout — Styled callout box ──────────────────────────────────────

const CALLOUT_STYLES = {
  tip: { icon: "💡", borderClass: "border-green-500/30", bgClass: "bg-green-500/[0.04]" },
  warning: { icon: "⚠️", borderClass: "border-amber-500/30", bgClass: "bg-amber-500/[0.04]" },
  quote: { icon: "💬", borderClass: "border-cyan-500/30", bgClass: "bg-cyan-500/[0.04]" },
  insight: { icon: "🧠", borderClass: "border-purple-500/30", bgClass: "bg-purple-500/[0.04]" },
} as const;

function InsightCallout({
  block,
  accentColor,
}: {
  block: InsightCalloutBlock;
  accentColor: string;
}) {
  const style = CALLOUT_STYLES[block.variant] ?? CALLOUT_STYLES.insight;

  return (
    <aside
      className={`my-8 rounded-xl border p-5 sm:p-6 ${style.borderClass} ${style.bgClass}`}
      role="note"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl mt-0.5 shrink-0" aria-hidden="true">
          {style.icon}
        </span>
        <div className="flex-1 min-w-0">
          {block.heading && (
            <h4 className="font-bold text-white text-sm mb-1.5">
              {block.heading}
            </h4>
          )}
          <p className="text-gray-300 text-sm leading-relaxed">
            {block.body}
          </p>
          {block.attribution && (
            <p
              className="mt-2 text-xs font-medium"
              style={{ color: accentColor }}
            >
              — {block.attribution}
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}

// ─── ComparisonTable — Side-by-side grid ──────────────────────────────────────

function ComparisonTable({
  block,
  accentColor,
}: {
  block: ComparisonTableBlock;
  accentColor: string;
}) {
  if (!block.columns || block.columns.length === 0) return null;

  return (
    <div className="my-8 overflow-x-auto">
      {block.heading && (
        <h4 className="font-bold text-white text-lg mb-3">{block.heading}</h4>
      )}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {block.columns.map((col, i) => (
              <th
                key={i}
                className="text-left p-3 font-bold text-xs uppercase tracking-wider border-b"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}20`,
                }}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({
            length: Math.max(...block.columns.map((c) => c.items.length)),
          }).map((_, rowIdx) => (
            <tr key={rowIdx} className="border-b border-white/[0.04]">
              {block.columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className="p-3 text-gray-300"
                >
                  {col.items[rowIdx] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── LegacyHTML — Sanitized Elementor HTML renderer ───────────────────────────
//
// SECURITY: We sanitize the HTML at ingest time (in the migration action).
// This component renders pre-cleaned HTML from Sanity. The HTML stored in
// Sanity has already been stripped of scripts, event handlers, and iframes
// by the migration pipeline.

function LegacyHTML({ block }: { block: LegacyHTMLBlock }) {
  if (!block.html) return null;

  return (
    <div className="my-8 legacy-content">
      {block.source && (
        <p className="text-[10px] font-mono text-gray-700 mb-2 uppercase tracking-wider">
          Migrated from: {block.source}
        </p>
      )}
      <div
        className="prose prose-invert prose-sm max-w-none [&_img]:rounded-lg [&_img]:my-4 [&_a]:text-cyan-400 [&_table]:border-collapse [&_td]:p-2 [&_td]:border [&_td]:border-white/10 [&_th]:p-2 [&_th]:border [&_th]:border-white/10 [&_th]:text-left [&_th]:font-bold"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    </div>
  );
}
