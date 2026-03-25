import { PLANETS, type Planet } from "./planets";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizouniverse.com";

export const SITE_NAME = "Mizo Universe";
export const SITE_TAGLINE =
  "The Digital Ecosystem of Captain Mizo Amin — Sports · Business · Technology";

export const TWITTER_HANDLE = "@MizoAmin";

export function getCanonicalUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

export function getPlanetMetadata(planet: Planet) {
  const title = `${planet.name} — ${planet.theme.charAt(0).toUpperCase() + planet.theme.slice(1)} | ${SITE_NAME}`;
  const description = planet.description;
  const canonicalUrl = getCanonicalUrl(`/planet/${planet.slug}`);
  const ogImageUrl = getCanonicalUrl(`/planet/${planet.slug}/opengraph-image`);

  return {
    title,
    description,
    keywords: planet.keywords,
    canonicalUrl,
    ogImageUrl,
  };
}

export function generatePlanetAlternates(planet: Planet) {
  return {
    canonical: getCanonicalUrl(`/planet/${planet.slug}`),
  };
}

export function generatePlanetOpenGraph(planet: Planet) {
  const { title, description, ogImageUrl } = getPlanetMetadata(planet);
  return {
    title,
    description,
    url: getCanonicalUrl(`/planet/${planet.slug}`),
    siteName: SITE_NAME,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${planet.name} — ${SITE_NAME}: ${planet.theme} dimension`,
      },
    ],
    type: "website" as const,
  };
}

export function generatePlanetTwitterCard(planet: Planet) {
  const { title, description, ogImageUrl } = getPlanetMetadata(planet);
  return {
    card: "summary_large_image" as const,
    title,
    description,
    creator: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
    images: [ogImageUrl],
  };
}

export { PLANETS };
