/**
 * SEO Config — Bilingual Metadata Engine (AR/EN)
 *
 * Per-planet SEO metadata registry with OpenGraph, Twitter Cards,
 * JSON-LD structured data (Person + SportsTeam + Organization),
 * and bilingual title/description support for Google 2026 indexing.
 *
 * Every planet, video interview, and match highlight gets
 * individually indexable metadata.
 */

import type { Metadata } from "next";
import type { PlanetId } from "./planetMetadata";

// ─── Constants ────────────────────────────────────────────────────────────────

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const SITE_NAME = "Mizo Universe";
const AUTHOR_NAME = "Mizo Amin";
const DEFAULT_OG_IMAGE = `${SITE_URL}/api/og`;
const TWITTER_HANDLE = "@mizoamin";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PlanetSEO {
  /** English page title */
  titleEn: string;
  /** Arabic page title */
  titleAr: string;
  /** English meta description */
  descriptionEn: string;
  /** Arabic meta description */
  descriptionAr: string;
  /** OpenGraph image path (from /public) */
  ogImage: string;
  /** Keywords for meta tag */
  keywords: string[];
  /** JSON-LD @type for the planet page */
  schemaType: "WebPage" | "VideoGallery" | "CollectionPage" | "ContactPage";
}

export interface VideoSEO {
  /** Video name (EN) */
  name: string;
  /** Video description (EN) */
  description: string;
  /** Thumbnail URL */
  thumbnailUrl: string;
  /** Upload/publish date (ISO 8601) */
  uploadDate: string;
  /** Duration in ISO 8601 (e.g., PT2M30S) */
  duration?: string;
  /** Embed URL */
  embedUrl?: string;
  /** Content URL (for CDN videos) */
  contentUrl?: string;
}

// ─── Per-planet SEO registry ──────────────────────────────────────────────────

export const PLANET_SEO: Record<PlanetId, PlanetSEO> = {
  identity: {
    titleEn: "Core Identity — Mizo Amin | Heritage & Roots",
    titleAr: "الهوية الأساسية — ميزو أمين | التراث والجذور",
    descriptionEn:
      "Explore the foundational roots, heritage, and identity of Mizo Amin — professional basketball player, entrepreneur, and builder.",
    descriptionAr:
      "استكشف الجذور الأساسية والتراث وهوية ميزو أمين — لاعب كرة سلة محترف ورائد أعمال وباني.",
    ogImage: "/images/og-identity.jpg",
    keywords: ["Mizo Amin", "identity", "heritage", "Qatar", "basketball player", "هوية", "تراث"],
    schemaType: "WebPage",
  },
  legacy: {
    titleEn: "Legacy Archives — Mizo Amin | Basketball Career",
    titleAr: "أرشيف الإرث — ميزو أمين | مسيرة كرة السلة",
    descriptionEn:
      "From the youngest player to captain of Qatar's national basketball team — the Legacy chronicles discipline, sacrifice, and competitive fire.",
    descriptionAr:
      "من أصغر لاعب إلى قيادة المنتخب القطري — الإرث يروي الانضباط والتضحية والروح التنافسية.",
    ogImage: "/images/og-legacy.jpg",
    keywords: ["basketball", "Qatar national team", "FIBA", "legacy", "كرة السلة", "المنتخب القطري"],
    schemaType: "WebPage",
  },
  vision: {
    titleEn: "Future Vision — Mizo Amin | AI & Innovation",
    titleAr: "رؤية المستقبل — ميزو أمين | الذكاء الاصطناعي والابتكار",
    descriptionEn:
      "Technology meets ambition. AI innovation, digital architecture, and future systems at the intersection of sports and technology.",
    descriptionAr:
      "حيث تلتقي التكنولوجيا بالطموح. الابتكار في الذكاء الاصطناعي والهندسة الرقمية والأنظمة المستقبلية.",
    ogImage: "/images/og-vision.jpg",
    keywords: ["AI", "technology", "innovation", "vision", "digital architecture", "ذكاء اصطناعي"],
    schemaType: "CollectionPage",
  },
  odyssey: {
    titleEn: "The Odyssey — Mizo Amin | Athletic Journey",
    titleAr: "الأوديسة — ميزو أمين | الرحلة الرياضية",
    descriptionEn:
      "Chronicles from a 4-year-old holding a basketball to captaining Qatar's national team — every game shaped the leader.",
    descriptionAr:
      "من طفل بعمر الأربع يمسك كرة السلة إلى قيادة المنتخب القطري — كل مباراة صنعت القائد.",
    ogImage: "/images/og-odyssey.jpg",
    keywords: ["odyssey", "journey", "basketball career", "athlete", "Qatar", "رحلة", "رياضي"],
    schemaType: "WebPage",
  },
  ventures: {
    titleEn: "Ventures — Mizo Amin | Business & Entrepreneurship",
    titleAr: "المشاريع — ميزو أمين | الأعمال وريادة الأعمال",
    descriptionEn:
      "From Qatar's startup scene to the global digital economy — where entrepreneurship meets execution.",
    descriptionAr:
      "من مشهد الشركات الناشئة في قطر إلى الاقتصاد الرقمي العالمي — حيث تلتقي ريادة الأعمال بالتنفيذ.",
    ogImage: "/images/og-ventures.jpg",
    keywords: ["business", "ventures", "entrepreneurship", "startup", "Qatar", "أعمال", "ريادة"],
    schemaType: "WebPage",
  },
  voice: {
    titleEn: "Voice Signals — Mizo Amin | Podcasts & Interviews",
    titleAr: "إشارات الصوت — ميزو أمين | البودكاست والمقابلات",
    descriptionEn:
      "Podcasts, interviews, and spoken transmissions — Voice captures the ideas too big for a page.",
    descriptionAr:
      "بودكاست ومقابلات وبثّات منطوقة — الصوت يلتقط الأفكار الأكبر من أن تُحتوى في صفحة.",
    ogImage: "/images/og-voice.jpg",
    keywords: ["podcast", "interview", "voice", "media", "radio", "بودكاست", "مقابلة"],
    schemaType: "CollectionPage",
  },
  videogram: {
    titleEn: "Videogram — Mizo Amin | Smart Cinematic Archive",
    titleAr: "فيديوغرام — ميزو أمين | الأرشيف السينمائي الذكي",
    descriptionEn:
      "Hybrid Video System — YouTube highlights with Time-Stamp precision and direct CDN video assets. Match highlights, interviews, and cinematic productions.",
    descriptionAr:
      "نظام الفيديو الهجين — أبرز لحظات يوتيوب بدقة الطابع الزمني وأصول فيديو CDN المباشرة. أبرز المباريات والمقابلات والإنتاجات السينمائية.",
    ogImage: "/images/og-videogram.jpg",
    keywords: ["video", "highlights", "YouTube", "match highlights", "cinema", "فيديو", "أبرز اللحظات"],
    schemaType: "VideoGallery",
  },
  library: {
    titleEn: "Knowledge Library — Mizo Amin | Books & Philosophy",
    titleAr: "مكتبة المعرفة — ميزو أمين | الكتب والفلسفة",
    descriptionEn:
      "Books, mental models, and philosophical frameworks converging into actionable intelligence.",
    descriptionAr:
      "الكتب والنماذج الذهنية والأطر الفلسفية تتقاطع لتتحوّل إلى ذكاء قابل للتنفيذ.",
    ogImage: "/images/og-library.jpg",
    keywords: ["books", "philosophy", "knowledge", "mindset", "library", "كتب", "فلسفة"],
    schemaType: "CollectionPage",
  },
  contact: {
    titleEn: "Contact — Mizo Amin | Connect & Collaborate",
    titleAr: "تواصل — ميزو أمين | التواصل والتعاون",
    descriptionEn:
      "Open the channel. Direct communication for collaborations, business inquiries, and connections across the Mizo Universe.",
    descriptionAr:
      "افتح القناة. تواصل مباشر للتعاون والاستفسارات التجارية والروابط عبر عالم ميزو.",
    ogImage: "/images/og-contact.jpg",
    keywords: ["contact", "collaboration", "business inquiry", "connect", "تواصل", "تعاون"],
    schemaType: "ContactPage",
  },
  shield: {
    titleEn: "Shield — Mizo Amin | Privacy & Security",
    titleAr: "الدرع — ميزو أمين | الخصوصية والأمان",
    descriptionEn:
      "Privacy protocols, legal frameworks, and system integrity across the Mizo Universe.",
    descriptionAr:
      "بروتوكولات الخصوصية والأطر القانونية وسلامة النظام عبر عالم ميزو.",
    ogImage: "/images/og-shield.jpg",
    keywords: ["privacy", "security", "legal", "shield", "protection", "خصوصية", "أمان"],
    schemaType: "WebPage",
  },
};

// ─── Metadata builder ─────────────────────────────────────────────────────────

/**
 * Build a Next.js Metadata object for a planet page.
 * Supports bilingual alternate links and full OpenGraph + Twitter cards.
 */
export function buildPlanetMetadata(
  planetId: PlanetId,
  locale: "en" | "ar" = "en",
): Metadata {
  const seo = PLANET_SEO[planetId];
  const title = locale === "ar" ? seo.titleAr : seo.titleEn;
  const description = locale === "ar" ? seo.descriptionAr : seo.descriptionEn;
  const url = `${SITE_URL}/${planetId}`;

  // Use the dynamic OG image route — generates a styled 1200×630 image per planet
  const ogImageUrl = `${SITE_URL}/api/og?planet=${planetId}`;

  return {
    title,
    description,
    keywords: seo.keywords,
    authors: [{ name: AUTHOR_NAME }],
    alternates: {
      canonical: url,
      languages: {
        en: url,
        ar: url,
      },
    },
    openGraph: {
      title: seo.titleEn,
      description: seo.descriptionEn,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seo.titleEn,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.titleEn,
      description: seo.descriptionEn,
      creator: TWITTER_HANDLE,
      images: [ogImageUrl],
    },
  };
}

// ─── JSON-LD generators ───────────────────────────────────────────────────────

/**
 * Generate Person + SportsTeam JSON-LD for the site owner.
 */
export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: [
      "https://twitter.com/mizoamin",
      "https://instagram.com/mizoamin",
      "https://linkedin.com/in/mizoamin",
    ],
    jobTitle: "Professional Basketball Player & Entrepreneur",
    nationality: {
      "@type": "Country",
      name: "Qatar",
    },
    memberOf: {
      "@type": "SportsTeam",
      name: "Qatar National Basketball Team",
      sport: "Basketball",
    },
  };
}

/**
 * Generate VideoObject JSON-LD for individual video entries.
 * Ensures Google 2026 indexes each video interview / match highlight individually.
 */
export function buildVideoJsonLd(video: VideoSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...(video.duration ? { duration: video.duration } : {}),
    ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    ...(video.contentUrl ? { contentUrl: video.contentUrl } : {}),
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
  };
}

/**
 * Generate Organization JSON-LD for business entity schema.
 */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mizo Universe",
    url: SITE_URL,
    founder: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    description:
      "A cinematic AI-powered personal brand platform at the intersection of sports, technology, and entrepreneurship.",
  };
}

/**
 * Build a planet page's full JSON-LD (page + person + org context).
 */
export function buildPlanetPageJsonLd(planetId: PlanetId) {
  const seo = PLANET_SEO[planetId];
  return {
    "@context": "https://schema.org",
    "@type": seo.schemaType,
    name: seo.titleEn,
    description: seo.descriptionEn,
    url: `${SITE_URL}/${planetId}`,
    inLanguage: ["en", "ar"],
    author: buildPersonJsonLd(),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
