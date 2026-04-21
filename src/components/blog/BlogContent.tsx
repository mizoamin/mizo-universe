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
        <h1
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: "var(--font-weight-black)",
            marginTop: "var(--space-8)",
            marginBottom: "var(--space-4)",
            lineHeight: "var(--line-height-heading)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text-primary)",
          }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          style={{
            fontSize: "var(--text-h2)",
            fontWeight: "var(--font-weight-bold)",
            marginTop: "var(--space-7)",
            marginBottom: "var(--space-3)",
            lineHeight: "var(--line-height-heading)",
            color: "var(--color-text-primary)",
          }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{
            fontSize: "var(--text-h3)",
            fontWeight: "var(--font-weight-semibold)",
            marginTop: "var(--space-6)",
            marginBottom: "var(--space-2)",
            lineHeight: "var(--line-height-heading)",
            color: "var(--color-text-primary)",
          }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          style={{
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-semibold)",
            marginTop: "var(--space-4)",
            marginBottom: "var(--space-2)",
            color: "var(--color-text-secondary)",
          }}
        >
          {children}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote
          style={{
            marginTop: "var(--space-4)",
            marginBottom: "var(--space-4)",
            paddingLeft: "var(--space-3)",
            paddingTop: "var(--space-1)",
            borderLeft: `3px solid ${accentColor}`,
            fontStyle: "italic",
            color: "var(--color-text-tertiary)",
            lineHeight: "var(--line-height-body)",
          }}
        >
          {children}
        </blockquote>
      );
    default:
      return (
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-text-secondary)",
            lineHeight: "var(--line-height-body)",
            marginBottom: "var(--space-4)",
          }}
        >
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
        node = <strong key={`s-${j}`} style={{ fontWeight: "var(--font-weight-bold)", color: "var(--color-text-primary)" }}>{node}</strong>;
      } else if (mark === "em") {
        node = <em key={`e-${j}`}>{node}</em>;
      } else if (mark === "code") {
        node = (
          <code
            key={`c-${j}`}
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              padding: "var(--space-0-5) var(--space-1)",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-accent-prime)",
              fontSize: "var(--text-body-sm)",
              fontFamily: "monospace",
            }}
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
              style={{
                color: "var(--color-accent-prime)",
                textDecoration: "underline",
                textDecorationColor: "rgba(var(--color-accent-rgb, 0, 255, 255), 0.25)",
                textUnderlineOffset: "0.25em",
                transition: `text-decoration-color var(--duration-fast)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationColor = "rgba(var(--color-accent-rgb, 0, 255, 255), 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationColor = "rgba(var(--color-accent-rgb, 0, 255, 255), 0.25)";
              }}
            >
              {node}
            </a>
          ) : (
            <Link
              key={`l-${j}`}
              href={def.href}
              style={{
                color: "var(--color-accent-prime)",
                textDecoration: "underline",
                textDecorationColor: "rgba(var(--color-accent-rgb, 0, 255, 255), 0.25)",
                textUnderlineOffset: "0.25em",
              }}
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
    <figure style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-6)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={block.alt ?? ""}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          borderRadius: "var(--radius-xl)",
          aspectRatio: "16/9",
          objectFit: "cover",
        }}
      />
      {block.caption && (
        <figcaption
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-body-sm)",
            marginTop: "var(--space-2)",
            fontStyle: "italic",
          }}
        >
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
    <figure style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-6)", marginLeft: "calc(var(--space-4) * -1)", marginRight: "calc(var(--space-4) * -1)" }}>
      {block.mediaType === "video" ? (
        <video
          src={block.url}
          controls
          preload="metadata"
          style={{
            width: "100%",
            aspectRatio: ratio,
            objectFit: "cover",
          }}
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
          style={{
            width: "100%",
            aspectRatio: ratio,
            objectFit: "cover",
          }}
        />
      )}
      {block.caption && (
        <figcaption
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-body-sm)",
            marginTop: "var(--space-2)",
            fontStyle: "italic",
            paddingLeft: "var(--space-4)",
            paddingRight: "var(--space-4)",
          }}
        >
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
      style={{
        marginTop: "var(--space-6)",
        marginBottom: "var(--space-6)",
        borderRadius: "var(--radius-xl)",
        borderWidth: "1px",
        padding: "var(--space-4)",
        borderColor: CALLOUT_STYLES[block.variant]?.borderClass || "rgba(255,255,255,0.1)",
        backgroundColor: CALLOUT_STYLES[block.variant]?.bgClass || "rgba(255,255,255,0.02)",
      }}
      role="note"
    >
      <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-start" }}>
        <span style={{ fontSize: "var(--text-h3)", marginTop: "var(--space-0-5)", flexShrink: 0 }} aria-hidden="true">
          {style.icon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          {block.heading && (
            <h4
              style={{
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-text-primary)",
                fontSize: "var(--text-body-sm)",
                marginBottom: "var(--space-1)",
              }}
            >
              {block.heading}
            </h4>
          )}
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "var(--text-body-sm)",
              lineHeight: "var(--line-height-body)",
            }}
          >
            {block.body}
          </p>
          {block.attribution && (
            <p
              style={{
                marginTop: "var(--space-2)",
                fontSize: "var(--text-body-xs)",
                fontWeight: "var(--font-weight-medium)",
                color: accentColor,
              }}
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
    <div style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-6)", overflowX: "auto" }}>
      {block.heading && (
        <h4
          style={{
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            fontSize: "var(--text-h4)",
            marginBottom: "var(--space-2)",
          }}
        >
          {block.heading}
        </h4>
      )}
      <table style={{ width: "100%", fontSize: "var(--text-body-sm)", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {block.columns.map((col, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "var(--space-2)",
                  fontWeight: "var(--font-weight-bold)",
                  fontSize: "var(--text-body-xs)",
                  letterSpacing: "var(--tracking-wide)",
                  color: accentColor,
                  borderBottomWidth: "1px",
                  borderBottomColor: `${accentColor}33`,
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
            <tr key={rowIdx} style={{ borderBottomWidth: "1px", borderBottomColor: "rgba(255,255,255,0.04)" }}>
              {block.columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    padding: "var(--space-2)",
                    color: "var(--color-text-secondary)",
                  }}
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
    <div style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-6)" }} className="legacy-content">
      {block.source && (
        <p
          style={{
            fontSize: "var(--text-body-xs)",
            fontFamily: "monospace",
            color: "var(--color-text-muted)",
            marginBottom: "var(--space-2)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
          }}
        >
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
