import hostingerLoader from "@/lib/hostinger-loader";

describe("hostingerLoader", () => {
  const ORIG_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIG_ENV };
  });

  afterAll(() => {
    process.env = ORIG_ENV;
  });

  it("appends format, width and quality params to a root-relative src", () => {
    const result = hostingerLoader({ src: "/img/photo.jpg", width: 800, quality: 75 });
    expect(result).toContain("format=webp");
    expect(result).toContain("width=800");
    expect(result).toContain("quality=75");
  });

  it("uses default quality of 80 when quality is not provided", () => {
    const result = hostingerLoader({ src: "/img/photo.jpg", width: 400 });
    expect(result).toContain("quality=80");
  });

  it("returns only path+query (no host) for root-relative src", () => {
    const result = hostingerLoader({ src: "/img/photo.jpg", width: 800 });
    expect(result).not.toMatch(/^https?:\/\//);
    expect(result).toMatch(/^\/img\/photo\.jpg\?/);
  });

  it("returns a full URL for absolute src", () => {
    const result = hostingerLoader({
      src: "https://assets.hostinger.com/mizo-universe/photo.jpg",
      width: 1280,
      quality: 85,
    });
    expect(result).toMatch(/^https:\/\/assets\.hostinger\.com\//);
    expect(result).toContain("format=webp");
    expect(result).toContain("width=1280");
    expect(result).toContain("quality=85");
  });
});
