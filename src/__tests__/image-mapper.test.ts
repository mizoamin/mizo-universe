import {
  mapLegacyAsset,
  mapLegacyAssets,
  paginateAssets,
  filterAssets,
} from "@/lib/image-mapper";
import type { LegacyImageAsset, ImageAsset } from "@/types/image";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const validLegacy: LegacyImageAsset = {
  id: 42,
  url: "/assets/images/2024/sports/final.jpg",
  title: "AFC Champions League Final",
  description: "Captain Mizo lifting the trophy",
  date: "2024-05-15",
  cat: "sports",
  tags: "football,afc,trophy",
  width: 3840,
  height: 2160,
};

const minimalLegacy: LegacyImageAsset = {
  id: "007",
  url: "/assets/images/unknown.jpg",
};

const epochLegacy: LegacyImageAsset = {
  id: 99,
  url: "/assets/images/epoch.jpg",
  date: 1697500800000, // 2023-10-17
  cat: "lifestyle",
};

// ---------------------------------------------------------------------------
// mapLegacyAsset
// ---------------------------------------------------------------------------

describe("mapLegacyAsset", () => {
  it("maps all fields from a full legacy record", () => {
    const asset = mapLegacyAsset(validLegacy);

    expect(asset.id).toBe("42");
    expect(asset.src).toBe("/assets/images/2024/sports/final.jpg");
    expect(asset.width).toBe(3840);
    expect(asset.height).toBe(2160);
    expect(asset.metadata.date).toBe("2024-05-15");
    expect(asset.metadata.category).toBe("sports");
    expect(asset.metadata.altText).toBe("AFC Champions League Final");
    expect(asset.metadata.context).toBe("Captain Mizo lifting the trophy");
    expect(asset.metadata.tags).toEqual(["football", "afc", "trophy"]);
  });

  it("applies default width and height when missing", () => {
    const asset = mapLegacyAsset(minimalLegacy);
    expect(asset.width).toBe(1920);
    expect(asset.height).toBe(1080);
  });

  it("defaults id to string form of numeric id", () => {
    expect(mapLegacyAsset({ id: 7, url: "/x.jpg" }).id).toBe("7");
  });

  it("falls back to filename as alt text when title and description are absent", () => {
    const asset = mapLegacyAsset(minimalLegacy);
    expect(asset.metadata.altText).toBe("unknown");
  });

  it("converts epoch milliseconds to ISO date string", () => {
    const asset = mapLegacyAsset(epochLegacy);
    expect(asset.metadata.date).toBe("2023-10-17");
  });

  it("normalises unknown category to 'uncategorized'", () => {
    const asset = mapLegacyAsset({ id: 1, url: "/x.jpg", cat: "mystery" });
    expect(asset.metadata.category).toBe("uncategorized");
  });

  it("normalises 'sport' alias to 'sports'", () => {
    const asset = mapLegacyAsset({ id: 1, url: "/x.jpg", cat: "sport" });
    expect(asset.metadata.category).toBe("sports");
  });

  it("normalises 'tech' alias to 'technology'", () => {
    const asset = mapLegacyAsset({ id: 1, url: "/x.jpg", cat: "tech" });
    expect(asset.metadata.category).toBe("technology");
  });

  it("handles tags as an array", () => {
    const asset = mapLegacyAsset({
      id: 1,
      url: "/x.jpg",
      tags: ["a", "b", "c"],
    });
    expect(asset.metadata.tags).toEqual(["a", "b", "c"]);
  });

  it("handles tags as a semicolon-separated string", () => {
    const asset = mapLegacyAsset({ id: 1, url: "/x.jpg", tags: "a;b;c" });
    expect(asset.metadata.tags).toEqual(["a", "b", "c"]);
  });

  it("returns empty tags array when tags field is absent", () => {
    const asset = mapLegacyAsset(minimalLegacy);
    expect(asset.metadata.tags).toEqual([]);
  });

  it("defaults missing date to the Unix epoch", () => {
    const asset = mapLegacyAsset(minimalLegacy);
    expect(asset.metadata.date).toBe("1970-01-01");
  });
});

// ---------------------------------------------------------------------------
// mapLegacyAssets
// ---------------------------------------------------------------------------

describe("mapLegacyAssets", () => {
  it("maps every record in the array", () => {
    const results = mapLegacyAssets([validLegacy, minimalLegacy, epochLegacy]);
    expect(results).toHaveLength(3);
    expect(results[0].id).toBe("42");
    expect(results[1].id).toBe("007");
    expect(results[2].id).toBe("99");
  });

  it("returns an empty array for empty input", () => {
    expect(mapLegacyAssets([])).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// paginateAssets
// ---------------------------------------------------------------------------

function makeAssets(count: number): ImageAsset[] {
  return Array.from({ length: count }, (_, i) =>
    mapLegacyAsset({ id: i + 1, url: `/img/${i + 1}.jpg` })
  );
}

describe("paginateAssets", () => {
  const assets = makeAssets(100);

  it("returns the first page with correct items", () => {
    const result = paginateAssets(assets, 1, 10);
    expect(result.items).toHaveLength(10);
    expect(result.items[0].id).toBe("1");
    expect(result.items[9].id).toBe("10");
    expect(result.page).toBe(1);
    expect(result.total).toBe(100);
    expect(result.hasNextPage).toBe(true);
  });

  it("returns the last page and sets hasNextPage to false", () => {
    const result = paginateAssets(assets, 10, 10);
    expect(result.items).toHaveLength(10);
    expect(result.items[0].id).toBe("91");
    expect(result.hasNextPage).toBe(false);
  });

  it("handles a page that overshoots the end", () => {
    const result = paginateAssets(assets, 999, 10);
    expect(result.items).toHaveLength(0);
    expect(result.hasNextPage).toBe(false);
  });

  it("clamps page and pageSize to at least 1", () => {
    const result = paginateAssets(assets, -1, 0);
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// filterAssets
// ---------------------------------------------------------------------------

describe("filterAssets", () => {
  const assets: ImageAsset[] = [
    mapLegacyAsset({ id: 1, url: "/a.jpg", cat: "sports", date: "2024-01-01", title: "Game day" }),
    mapLegacyAsset({ id: 2, url: "/b.jpg", cat: "business", date: "2023-06-15", title: "Board meeting" }),
    mapLegacyAsset({ id: 3, url: "/c.jpg", cat: "sports", date: "2023-12-31", title: "Training session", description: "Morning drills in Dubai" }),
    mapLegacyAsset({ id: 4, url: "/d.jpg", cat: "technology", date: "2024-03-01", title: "GITEX keynote" }),
  ];

  it("returns all assets when no filters are applied", () => {
    expect(filterAssets(assets, {})).toHaveLength(4);
  });

  it("filters by category", () => {
    const results = filterAssets(assets, { category: "sports" });
    expect(results).toHaveLength(2);
    expect(results.every((a) => a.metadata.category === "sports")).toBe(true);
  });

  it("filters by fromDate", () => {
    const results = filterAssets(assets, { fromDate: "2024-01-01" });
    expect(results).toHaveLength(2);
  });

  it("filters by toDate", () => {
    const results = filterAssets(assets, { toDate: "2023-12-31" });
    expect(results).toHaveLength(2);
  });

  it("filters by date range", () => {
    const results = filterAssets(assets, {
      fromDate: "2023-06-01",
      toDate: "2023-12-31",
    });
    expect(results).toHaveLength(2);
  });

  it("filters by search text in altText", () => {
    const results = filterAssets(assets, { search: "board" });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("2");
  });

  it("filters by search text in context", () => {
    const results = filterAssets(assets, { search: "Dubai" });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("3");
  });

  it("combines category and search filters", () => {
    const results = filterAssets(assets, {
      category: "sports",
      search: "training",
    });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("3");
  });

  it("returns empty array when nothing matches", () => {
    const results = filterAssets(assets, { search: "zzz-no-match" });
    expect(results).toHaveLength(0);
  });
});
