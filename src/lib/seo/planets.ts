export interface Planet {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
  theme: "sports" | "business" | "technology" | "life" | "universe";
  color: string;
}

export const PLANETS: Planet[] = [
  {
    name: "Mercury",
    slug: "mercury",
    description:
      "Speed, agility, and quick reflexes — Mercury embodies the athletic edge of Mizo Amin's sports career, highlighting peak performance and competitive spirit.",
    keywords: [
      "sports career",
      "athlete",
      "speed",
      "agility",
      "performance",
      "Mizo Amin sports",
    ],
    theme: "sports",
    color: "#b5b5b5",
  },
  {
    name: "Venus",
    slug: "venus",
    description:
      "Ambition and beauty — Venus reflects Mizo Amin's business vision, brand partnerships, and entrepreneurial ventures shaping a global digital presence.",
    keywords: [
      "business ventures",
      "brand partnerships",
      "entrepreneurship",
      "digital brand",
      "Mizo Amin business",
    ],
    theme: "business",
    color: "#e8cda0",
  },
  {
    name: "Earth",
    slug: "earth",
    description:
      "Home base — Earth is the foundation of Mizo Amin's digital ecosystem, connecting his life story, values, and mission across sports, business, and technology.",
    keywords: [
      "Mizo Amin",
      "digital ecosystem",
      "portfolio",
      "life story",
      "Captain Mizo",
    ],
    theme: "life",
    color: "#4fa3e0",
  },
  {
    name: "Mars",
    slug: "mars",
    description:
      "Drive and determination — Mars powers Mizo Amin's relentless pursuit of excellence in competitive sports and high-performance athletic achievements.",
    keywords: [
      "competitive sports",
      "athletic excellence",
      "determination",
      "sportsmanship",
      "Mizo Amin athlete",
    ],
    theme: "sports",
    color: "#c1440e",
  },
  {
    name: "Jupiter",
    slug: "jupiter",
    description:
      "Expansive influence — Jupiter represents Mizo Amin's largest business endeavors, strategic leadership, and visionary approach to building impactful enterprises.",
    keywords: [
      "strategic leadership",
      "business strategy",
      "visionary",
      "enterprise",
      "Mizo Amin leadership",
    ],
    theme: "business",
    color: "#c88b3a",
  },
  {
    name: "Saturn",
    slug: "saturn",
    description:
      "Structure and innovation — Saturn channels Mizo Amin's technology ventures, digital platforms, and structured approach to building scalable tech solutions.",
    keywords: [
      "technology",
      "innovation",
      "digital platforms",
      "tech solutions",
      "Mizo Amin tech",
    ],
    theme: "technology",
    color: "#e4d191",
  },
  {
    name: "Uranus",
    slug: "uranus",
    description:
      "Unconventional thinking — Uranus represents the creative, boundary-pushing ideas that define Mizo Amin's unique approach to blending sports, business, and technology.",
    keywords: [
      "creativity",
      "innovation",
      "unconventional",
      "interdisciplinary",
      "Mizo Amin creative",
    ],
    theme: "technology",
    color: "#7de8e8",
  },
  {
    name: "Neptune",
    slug: "neptune",
    description:
      "Vision and depth — Neptune captures the far-reaching digital universe Mizo Amin is building, a lasting legacy spanning sports stardom and technological impact.",
    keywords: [
      "digital legacy",
      "vision",
      "future",
      "impact",
      "Mizo Amin universe",
    ],
    theme: "universe",
    color: "#3f54ba",
  },
];

export function getPlanetBySlug(slug: string): Planet | undefined {
  return PLANETS.find((p) => p.slug === slug.toLowerCase());
}

export const PLANET_SLUGS = PLANETS.map((p) => p.slug);
