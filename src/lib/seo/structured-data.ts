import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  getCanonicalUrl,
} from "./metadata";
import { type Planet } from "./planets";

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "MizoUniverse",
    description: SITE_TAGLINE,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/planet/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mizo Amin",
    alternateName: "Captain Mizo Amin",
    description:
      "Professional athlete, entrepreneur, and digital innovator — creator of Mizo Universe, a hyper-realistic 3D solar system portfolio blending sports, business, and technology.",
    url: SITE_URL,
    sameAs: [
      "https://twitter.com/MizoAmin",
      "https://www.instagram.com/mizoamin",
      "https://www.linkedin.com/in/mizoamin",
    ],
    knowsAbout: ["Sports", "Business", "Technology", "Digital Innovation"],
    jobTitle: "Athlete & Entrepreneur",
    image: getCanonicalUrl("/images/mizo-amin.jpg"),
  };
}

export function buildPlanetSchema(planet: Planet) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${planet.name} — ${SITE_NAME}`,
    description: planet.description,
    url: getCanonicalUrl(`/planet/${planet.slug}`),
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: planet.name,
      description: planet.description,
    },
    keywords: planet.keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: getCanonicalUrl(`/planet/${planet.slug}/opengraph-image`),
      width: 1200,
      height: 630,
      name: `${planet.name} — ${SITE_NAME}`,
      description: `Visual representation of ${planet.name} in the Mizo Universe 3D solar system portfolio`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Planets",
          item: getCanonicalUrl("/planet"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: planet.name,
          item: getCanonicalUrl(`/planet/${planet.slug}`),
        },
      ],
    },
  };
}

export function buildHomepageBreadcrumb() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}
