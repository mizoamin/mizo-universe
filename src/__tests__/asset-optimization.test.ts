import {
  isWebP,
  toWebPUrl,
  buildSizesAttr,
  buildBlurDataURL,
  chunkAssets,
  toSlimAsset,
} from "@/lib/asset-optimization";
import { mapLegacyAsset } from "@/lib/image-mapper";
import type { ImageAsset } from "@/types/image";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeAsset(overrides: Partial<ImageAsset> = {}): ImageAsset {
  return {
    id: "1",
    src: "/img/test.jpg",
    width: 1920,
    height: 1080,
    metadata: {
      date: "2024-01-01",
      category: "sports",
      context: "Test context",
      altText: "Test image",
      tags: ["a", "b"],
    },
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// isWebP
// ---------------------------------------------------------------------------

describe("isWebP", () => {
  it("returns true for .webp URLs", () => {
    expect(isWebP("/img/photo.webp")).toBe(true);
    expect(isWebP("https://cdn.example.com/photo.webp")).toBe(true);
    expect(isWebP("/img/photo.webp?width=800")).toBe(true);
  });

  it("returns false for non-WebP URLs", () => {
    expect(isWebP("/img/photo.jpg")).toBe(false);
    expect(isWebP("/img/photo.png")).toBe(false);
    expect(isWebP("/img/photo.jpeg")).toBe(false);
    expect(isWebP("/img/photo.avif")).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// toWebPUrl
// ---------------------------------------------------------------------------

describe("toWebPUrl", () => {
  it("returns WebP URLs unchanged", () => {
    const url = "/img/photo.webp";
    expect(toWebPUrl(url)).toBe(url);
  });

  it("appends format=webp to non-WebP URLs with no query string", () => {
    expect(toWebPUrl("/img/photo.jpg")).toBe("/img/photo.jpg?format=webp");
  });

  it("appends format=webp to non-WebP URLs that already have a query string", () => {
    expect(toWebPUrl("/img/photo.jpg?width=800")).toBe(
      "/img/photo.jpg?width=800&format=webp"
    );
  });
});

// ---------------------------------------------------------------------------
// buildSizesAttr
// ---------------------------------------------------------------------------

describe("buildSizesAttr", () => {
  it("returns '100vw' for 1 column", () => {
    expect(buildSizesAttr(1)).toBe("100vw");
  });

  it("returns 2-breakpoint string for 2 columns", () => {
    expect(buildSizesAttr(2)).toBe("(max-width: 640px) 100vw, 50vw");
  });

  it("returns 3-breakpoint string for 3 columns (default)", () => {
    expect(buildSizesAttr(3)).toBe(
      "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    );
    // Default matches 3
    expect(buildSizesAttr()).toBe(buildSizesAttr(3));
  });

  it("returns 4-column string for 4 columns", () => {
    expect(buildSizesAttr(4)).toBe(
      "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    );
  });
});

// ---------------------------------------------------------------------------
// buildBlurDataURL
// ---------------------------------------------------------------------------

describe("buildBlurDataURL", () => {
  it("returns a base64-encoded SVG data URL", () => {
    const url = buildBlurDataURL();
    expect(url).toMatch(/^data:image\/svg\+xml;base64,/);
  });

  it("uses the default grey colour when no argument is provided", () => {
    const url = buildBlurDataURL();
    const decoded = Buffer.from(url.split(",")[1], "base64").toString("utf8");
    expect(decoded).toContain("#888888");
  });

  it("incorporates the provided dominant colour", () => {
    const url = buildBlurDataURL("#ff0000");
    const decoded = Buffer.from(url.split(",")[1], "base64").toString("utf8");
    expect(decoded).toContain("#ff0000");
  });

  it("produces a very small payload (< 200 bytes)", () => {
    const url = buildBlurDataURL();
    expect(url.length).toBeLessThan(200);
  });
});

// ---------------------------------------------------------------------------
// chunkAssets
// ---------------------------------------------------------------------------

describe("chunkAssets", () => {
  const assets = Array.from({ length: 100 }, (_, i) =>
    mapLegacyAsset({ id: i + 1, url: `/img/${i + 1}.jpg` })
  );

  it("splits assets into chunks of the given size", () => {
    const chunks = chunkAssets(assets, 10);
    expect(chunks).toHaveLength(10);
    chunks.forEach((chunk) => expect(chunk).toHaveLength(10));
  });

  it("last chunk is smaller when total is not divisible by chunk size", () => {
    const chunks = chunkAssets(assets, 48);
    expect(chunks).toHaveLength(3);
    expect(chunks[0]).toHaveLength(48);
    expect(chunks[1]).toHaveLength(48);
    expect(chunks[2]).toHaveLength(4);
  });

  it("returns a single chunk when assets fit within one page (default 48)", () => {
    const small = assets.slice(0, 20);
    const chunks = chunkAssets(small);
    expect(chunks).toHaveLength(1);
    expect(chunks[0]).toHaveLength(20);
  });

  it("returns an empty array for empty input", () => {
    expect(chunkAssets([])).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// toSlimAsset
// ---------------------------------------------------------------------------

describe("toSlimAsset", () => {
  it("strips blurDataURL from the returned object", () => {
    const asset = makeAsset({ blurDataURL: "data:image/svg+xml;..." });
    const slim = toSlimAsset(asset);
    expect("blurDataURL" in slim).toBe(false);
  });

  it("strips tags from metadata", () => {
    const asset = makeAsset();
    const slim = toSlimAsset(asset);
    expect("tags" in slim.metadata).toBe(false);
  });

  it("preserves all other fields", () => {
    const asset = makeAsset();
    const slim = toSlimAsset(asset);
    expect(slim.id).toBe("1");
    expect(slim.src).toBe("/img/test.jpg");
    expect(slim.width).toBe(1920);
    expect(slim.height).toBe(1080);
    expect(slim.metadata.date).toBe("2024-01-01");
    expect(slim.metadata.category).toBe("sports");
    expect(slim.metadata.altText).toBe("Test image");
  });
});
