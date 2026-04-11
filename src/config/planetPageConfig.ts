/**
 * Planet Page Configuration — Extended content for planet landing pages
 *
 * Maps each PlanetId to its bilingual Mizo-Voice description,
 * related blog categories, and hero texture path.
 *
 * Source of truth for PlanetPageLayout.tsx rendering.
 */

import type { PlanetId } from "./planetMetadata";

export interface PlanetPageData {
  /** Mizo-Voice description — English */
  descriptionEn: string;
  /** Mizo-Voice description — Arabic */
  descriptionAr: string;
  /** Blog category slugs to fetch related posts */
  categorySlugs: string[];
  /** Path to hero background texture in /public (null = gradient only) */
  heroTexture: string | null;
  /** Tiny blur placeholder for Next/Image */
  blurDataUrl: string;
  /** Planet-level SEO tags (used by metadata builders) */
  metaTags?: string[];
}

function blurUrl(color: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><rect fill="${color}" width="8" height="8" opacity="0.3"/></svg>`,
  )}`;
}

export const PLANET_PAGE_CONFIG: Record<PlanetId, PlanetPageData> = {
  identity: {
    descriptionEn:
      "Where it all began. The roots, the heritage, and the identity that fuel every move across the Mizo Universe. This is the core — the foundation of an athlete, entrepreneur, and builder.",
    descriptionAr:
      "حيث بدأ كل شيء. الجذور، التراث، والهوية التي تُغذّي كل خطوة في عالم ميزو. هذا هو الأساس — أساس الرياضي ورائد الأعمال والباني.",
    categorySlugs: ["lifestyle"],
    heroTexture: "/textures/planets/identity/default/albedo.webp",
    blurDataUrl: blurUrl("#ffd4a3"),
  },
  legacy: {
    descriptionEn:
      "From the youngest player to captain Qatar's national team — the Legacy chronicles a basketball career built on discipline, sacrifice, and relentless competitive fire.",
    descriptionAr:
      "من أصغر لاعب إلى قيادة المنتخب القطري — الإرث يسجّل مسيرة كرة سلة بُنيت على الانضباط والتضحية والروح التنافسية التي لا تهدأ.",
    categorySlugs: ["sports"],
    heroTexture: "/textures/planets/legacy/default/albedo.jpg",
    blurDataUrl: blurUrl("#ffaa00"),
  },
  vision: {
    descriptionEn:
      "Technology meets ambition. Vision is the command center for AI innovation, digital architecture, and the future systems being built at the intersection of sports and tech.",
    descriptionAr:
      "حيث تلتقي التكنولوجيا بالطموح. الرؤية هي مركز القيادة للابتكار في الذكاء الاصطناعي والهندسة الرقمية والأنظمة المستقبلية التي تُبنى عند تقاطع الرياضة والتقنية.",
    categorySlugs: ["tech-unboxing", "gaming"],
    heroTexture: null,
    blurDataUrl: blurUrl("#00ffff"),
  },
  odyssey: {
    descriptionEn:
      "The Odyssey chronicles my journey from a 4-year-old holding a basketball for the first time to captaining Qatar's national team. Every game, every setback, every victory shaped the leader you see today. This is where the athlete speaks.",
    descriptionAr:
      "الأوديسة تروي رحلتي من طفل بعمر الأربع يمسك كرة السلة لأول مرة إلى قيادة المنتخب القطري. كل مباراة، كل انتكاسة، كل انتصار صنعت القائد الذي تراه اليوم. هنا يتكلم الرياضي.",
    categorySlugs: ["sports", "wellness"],
    heroTexture: "/textures/planets/odyssey/diffuse.webp",
    blurDataUrl: blurUrl("#4488ff"),
  },
  ventures: {
    descriptionEn:
      "I read markets like I read defenses — finding gaps, creating openings. From Qatar's booming startup scene to the global digital economy, Ventures is where entrepreneurship meets execution.",
    descriptionAr:
      "أقرأ الأسواق كما أقرأ الدفاعات — أجد الثغرات وأخلق الفرص. من مشهد الشركات الناشئة المزدهر في قطر إلى الاقتصاد الرقمي العالمي، هنا تلتقي ريادة الأعمال بالتنفيذ.",
    categorySlugs: ["business"],
    heroTexture: null,
    blurDataUrl: blurUrl("#8A2BE2"),
  },
  voice: {
    descriptionEn:
      "Some ideas are too big for a page — they need a voice, a stage, a frequency. Voice captures podcasts, interviews, and spoken transmissions that amplify the signal.",
    descriptionAr:
      "بعض الأفكار أكبر من أن تُحتوى في صفحة — تحتاج صوتًا ومنصة وتردّدًا. الصوت يلتقط البودكاست والمقابلات والبثّات المنطوقة التي تُضخّم الإشارة.",
    categorySlugs: ["voices", "mindset"],
    heroTexture: null,
    blurDataUrl: blurUrl("#ff0080"),
    metaTags: ["podcast", "interview", "audio notes", "voice", "media appearances"],
  },
  videogram: {
    descriptionEn:
      "The visual archive. Videogram is where every cinematic frame, highlight reel, and production showcase lives — raw, unfiltered, and built to be felt.",
    descriptionAr:
      "الأرشيف البصري. فيديوغرام هو حيث يعيش كل إطار سينمائي وشريط أهداف وعرض إنتاجي — خام، غير مفلتر، ومصنوع ليُحسّ.",
    categorySlugs: ["arts", "tech-unboxing"],
    heroTexture: null,
    blurDataUrl: blurUrl("#c0c0c0"),
    metaTags: ["match highlights", "youtube", "videogram", "media production", "film reel"],
  },
  library: {
    descriptionEn:
      "My body is a weapon. My mind is the arsenal. Library is the central repository where books, mental models, and philosophical frameworks converge into actionable intelligence.",
    descriptionAr:
      "جسدي سلاح. عقلي ترسانة. المكتبة هي المستودع المركزي حيث تتقاطع الكتب والنماذج الذهنية والأطر الفلسفية لتتحوّل إلى ذكاء قابل للتنفيذ.",
    categorySlugs: ["reads", "mindset"],
    heroTexture: null,
    blurDataUrl: blurUrl("#ffffff"),
  },
  contact: {
    descriptionEn:
      "Open the channel. Contact is the direct communication node for collaborations, business inquiries, and connections across the Mizo Universe.",
    descriptionAr:
      "افتح القناة. الاتصال هو عقدة التواصل المباشر للتعاون والاستفسارات التجارية والروابط عبر عالم ميزو.",
    categorySlugs: [],
    heroTexture: null,
    blurDataUrl: blurUrl("#00ff88"),
  },
  shield: {
    descriptionEn:
      "The defense perimeter. Shield monitors privacy protocols, legal frameworks, and system integrity across the Mizo Universe.",
    descriptionAr:
      "المحيط الدفاعي. الدرع يراقب بروتوكولات الخصوصية والأطر القانونية وسلامة النظام عبر عالم ميزو.",
    categorySlugs: ["business"],
    heroTexture: null,
    blurDataUrl: blurUrl("#555555"),
    metaTags: ["privacy", "security", "legal", "data protection", "shield"],
  },
};
