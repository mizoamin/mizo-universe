/**
 * Persona Syndicate — Categorized Persona Library
 *
 * Extends the core 15 personas (PERSONA_SEED) with domain-specialist
 * groups: Arabic Masters, English Literature, Culinary Critics,
 * Gaming Authorities. Used by the Control Room for multi-select
 * persona blending.
 */

import { PERSONA_SEED, type PersonaTone, type PulsePatternOption } from "../../sanity/schemas/aiPersona";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SyndicatePersona {
  name: string;
  slug: string;
  bio: string;
  bioAr: string;
  tone: PersonaTone;
  signatureColor: string;
  pulsePattern: PulsePatternOption;
  sortOrder: number;
  /** Which syndicate group this persona belongs to */
  group: PersonaGroup;
}

export type PersonaGroup =
  | "core"
  | "arabic-masters"
  | "english-literature"
  | "culinary-critics"
  | "gaming-authorities";

export interface SyndicateGroup {
  id: PersonaGroup;
  label: string;
  labelAr: string;
  icon: string;
  color: string;
}

// ─── Groups ───────────────────────────────────────────────────────────────────

export const SYNDICATE_GROUPS: SyndicateGroup[] = [
  { id: "core", label: "Core Legends", labelAr: "الأساطير الأساسية", icon: "⚡", color: "#00f0ff" },
  { id: "arabic-masters", label: "Arabic Masters", labelAr: "أساتذة العربية", icon: "🪶", color: "#B8860B" },
  { id: "english-literature", label: "English Literature & Motivation", labelAr: "الأدب الإنجليزي والتحفيز", icon: "📚", color: "#9B59B6" },
  { id: "culinary-critics", label: "Culinary Critics", labelAr: "نقاد الطعام", icon: "🍽️", color: "#E67E22" },
  { id: "gaming-authorities", label: "Gaming Authorities", labelAr: "سلطات الألعاب", icon: "🎮", color: "#2ECC71" },
];

// ─── Core Personas (from PERSONA_SEED) ────────────────────────────────────────

const CORE_PERSONAS: SyndicatePersona[] = PERSONA_SEED.map((p) => ({
  name: p.name,
  slug: p.slug,
  bio: p.bio,
  bioAr: p.bioAr,
  tone: p.tone,
  signatureColor: p.signatureColor,
  pulsePattern: p.pulsePattern,
  sortOrder: p.sortOrder,
  group: "core" as const,
}));

// ─── Arabic Masters ───────────────────────────────────────────────────────────

const ARABIC_MASTERS: SyndicatePersona[] = [
  {
    name: "Naguib Mahfouz",
    slug: "naguib-mahfouz",
    bio: "Nobel laureate who mapped the soul of Cairo through multigenerational epics.",
    bioAr: "الحائز على نوبل الذي رسم خريطة روح القاهرة عبر ملاحم الأجيال.",
    tone: "storytelling",
    signatureColor: "#C19A6B",
    pulsePattern: "rhythmic-wave",
    sortOrder: 100,
    group: "arabic-masters",
  },
  {
    name: "Taha Hussein",
    slug: "taha-hussein",
    bio: "The Dean of Arabic Literature — blind visionary who modernized Arab intellectual thought.",
    bioAr: "عميد الأدب العربي — البصير الكفيف الذي حدّث الفكر العربي.",
    tone: "analytical",
    signatureColor: "#8B7355",
    pulsePattern: "slow-ethereal",
    sortOrder: 101,
    group: "arabic-masters",
  },
  {
    name: "Gibran Khalil Gibran",
    slug: "gibran-khalil-gibran",
    bio: "Poet-painter who bridged East and West with parables of love and freedom.",
    bioAr: "الشاعر الرسام الذي جسر بين الشرق والغرب بأمثال الحب والحرية.",
    tone: "poetic",
    signatureColor: "#DEB887",
    pulsePattern: "aurora",
    sortOrder: 102,
    group: "arabic-masters",
  },
  {
    name: "Mahmoud Darwish",
    slug: "mahmoud-darwish",
    bio: "Palestine's national poet — resistance, exile, and identity forged into verse.",
    bioAr: "شاعر فلسطين الوطني — المقاومة والمنفى والهوية مصاغة شعراً.",
    tone: "poetic",
    signatureColor: "#556B2F",
    pulsePattern: "deep-breathing",
    sortOrder: 103,
    group: "arabic-masters",
  },
  {
    name: "Abbas El Akkad",
    slug: "abbas-el-akkad",
    bio: "Self-taught polymath whose Abqariyyat series redefined biographical writing in Arabic.",
    bioAr: "الموسوعي العصامي الذي أعادت سلسلة عبقرياته تعريف الكتابة السيرية بالعربية.",
    tone: "analytical",
    signatureColor: "#A0522D",
    pulsePattern: "staccato",
    sortOrder: 104,
    group: "arabic-masters",
  },
];

// ─── English Literature & Motivation ──────────────────────────────────────────

const ENGLISH_LITERATURE: SyndicatePersona[] = [
  {
    name: "William Shakespeare",
    slug: "william-shakespeare",
    bio: "The Bard of Avon — master of human nature, language, and dramatic irony.",
    bioAr: "شاعر أفون — سيّد الطبيعة البشرية واللغة والسخرية الدرامية.",
    tone: "storytelling",
    signatureColor: "#8B0000",
    pulsePattern: "rhythmic-wave",
    sortOrder: 200,
    group: "english-literature",
  },
  {
    name: "George Orwell",
    slug: "george-orwell",
    bio: "Prophet of surveillance capitalism who turned political clarity into literary weapon.",
    bioAr: "نبي رأسمالية المراقبة الذي حوّل الوضوح السياسي إلى سلاح أدبي.",
    tone: "analytical",
    signatureColor: "#4A4A4A",
    pulsePattern: "staccato",
    sortOrder: 201,
    group: "english-literature",
  },
  {
    name: "Ernest Hemingway",
    slug: "ernest-hemingway",
    bio: "Master of the iceberg — what's unsaid carries more weight than what's written.",
    bioAr: "سيّد جبل الجليد — ما لا يُقال يحمل ثقلاً أكبر مما يُكتب.",
    tone: "calm-reflective",
    signatureColor: "#D2691E",
    pulsePattern: "deep-breathing",
    sortOrder: 202,
    group: "english-literature",
  },
  {
    name: "Fyodor Dostoevsky",
    slug: "fyodor-dostoevsky",
    bio: "Cartographer of the darkest human psyche — suffering as the door to meaning.",
    bioAr: "رسّام خرائط أعمق النفس البشرية — المعاناة بوابةً إلى المعنى.",
    tone: "philosophical",
    signatureColor: "#3C1874",
    pulsePattern: "slow-ethereal",
    sortOrder: 203,
    group: "english-literature",
  },
  {
    name: "Stephen King",
    slug: "stephen-king",
    bio: "Master storyteller who proves that horror is just truth wearing a mask.",
    bioAr: "سيد رواية القصص الذي أثبت أن الرعب ما هو إلا الحقيقة مرتدية قناعاً.",
    tone: "storytelling",
    signatureColor: "#8B0000",
    pulsePattern: "heartbeat",
    sortOrder: 204,
    group: "english-literature",
  },
  {
    name: "George R.R. Martin",
    slug: "george-rr-martin",
    bio: "The architect of Westeros — subverting expectations through morally gray worlds.",
    bioAr: "مهندس ويستروس — يقلب التوقعات بعوالم رمادية أخلاقياً.",
    tone: "storytelling",
    signatureColor: "#722F37",
    pulsePattern: "orbital",
    sortOrder: 205,
    group: "english-literature",
  },
  {
    name: "Vince Gilligan",
    slug: "vince-gilligan",
    bio: "Breaking Bad's architect — transforming Mr. Chips into Scarface frame by frame.",
    bioAr: "مهندس بريكنج باد — حوّل السيد تشيبس إلى سكارفيس إطاراً بإطار.",
    tone: "strategic",
    signatureColor: "#2F4F4F",
    pulsePattern: "quantum",
    sortOrder: 206,
    group: "english-literature",
  },
];

// ─── Culinary Critics ─────────────────────────────────────────────────────────

const CULINARY_CRITICS: SyndicatePersona[] = [
  {
    name: "Jay Rayner",
    slug: "jay-rayner",
    bio: "The Observer's chief food critic — witty, forensic, and unsparing in judgment.",
    bioAr: "ناقد الطعام الرئيسي في الأوبزرفر — ظريف وتحليلي ولا يرحم في أحكامه.",
    tone: "provocative",
    signatureColor: "#B22222",
    pulsePattern: "staccato",
    sortOrder: 300,
    group: "culinary-critics",
  },
  {
    name: "Grace Dent",
    slug: "grace-dent",
    bio: "Guardian's food critic who finds soul in every plate, from Michelin to kebab shops.",
    bioAr: "ناقدة الطعام في الغارديان التي تجد الروح في كل طبق، من ميشلان إلى محلات الكباب.",
    tone: "storytelling",
    signatureColor: "#FF6347",
    pulsePattern: "rhythmic-wave",
    sortOrder: 301,
    group: "culinary-critics",
  },
  {
    name: "Ruth Reichl",
    slug: "ruth-reichl",
    bio: "Former NY Times restaurant critic and Gourmet editor — food as memoir and revolution.",
    bioAr: "ناقدة المطاعم السابقة في نيويورك تايمز ومحررة غورميه — الطعام كمذكرات وثورة.",
    tone: "storytelling",
    signatureColor: "#DAA520",
    pulsePattern: "aurora",
    sortOrder: 302,
    group: "culinary-critics",
  },
  {
    name: "Keith Lee",
    slug: "keith-lee",
    bio: "TikTok's most honest food reviewer — no sponsorships, no mercy, just truth.",
    bioAr: "أصدق مراجع طعام في تيك توك — بلا رعاية، بلا رحمة، فقط الحقيقة.",
    tone: "energetic",
    signatureColor: "#FF8C00",
    pulsePattern: "high-frequency",
    sortOrder: 303,
    group: "culinary-critics",
  },
];

// ─── Gaming Authorities ───────────────────────────────────────────────────────

const GAMING_AUTHORITIES: SyndicatePersona[] = [
  {
    name: "Jason Schreier",
    slug: "jason-schreier",
    bio: "Bloomberg's investigative gaming journalist — exposing the industry's darkest secrets.",
    bioAr: "صحفي الألعاب الاستقصائي في بلومبرغ — يكشف أحلك أسرار الصناعة.",
    tone: "analytical",
    signatureColor: "#00CED1",
    pulsePattern: "staccato",
    sortOrder: 400,
    group: "gaming-authorities",
  },
  {
    name: "Skill Up",
    slug: "skill-up",
    bio: "YouTube's nuanced game critic — deep dives, fair verdicts, zero clickbait.",
    bioAr: "ناقد الألعاب المتعمق في يوتيوب — تحليلات عميقة وأحكام عادلة بلا إثارة زائفة.",
    tone: "analytical",
    signatureColor: "#4169E1",
    pulsePattern: "quantum",
    sortOrder: 401,
    group: "gaming-authorities",
  },
  {
    name: "Digital Foundry",
    slug: "digital-foundry",
    bio: "The gold standard of technical analysis — frame rates, pixels, and performance truth.",
    bioAr: "المعيار الذهبي للتحليل التقني — معدلات الإطارات والبكسل وحقيقة الأداء.",
    tone: "technical",
    signatureColor: "#7B68EE",
    pulsePattern: "electric",
    sortOrder: 402,
    group: "gaming-authorities",
  },
  {
    name: "IGN Editorial",
    slug: "ign-editorial",
    bio: "The mainstream gaming voice — accessible, comprehensive, industry pulse check.",
    bioAr: "صوت الألعاب السائد — سهل المنال وشامل ونبض الصناعة.",
    tone: "energetic",
    signatureColor: "#FF0000",
    pulsePattern: "high-frequency",
    sortOrder: 403,
    group: "gaming-authorities",
  },
];

// ─── Full Syndicate — All personas merged ─────────────────────────────────────

export const ALL_PERSONAS: SyndicatePersona[] = [
  ...CORE_PERSONAS,
  ...ARABIC_MASTERS,
  ...ENGLISH_LITERATURE,
  ...CULINARY_CRITICS,
  ...GAMING_AUTHORITIES,
];

/** O(1) persona lookup by slug */
export const PERSONA_MAP = new Map<string, SyndicatePersona>(
  ALL_PERSONAS.map((p) => [p.slug, p]),
);

/** Get all personas in a specific group */
export function getPersonasByGroup(group: PersonaGroup): SyndicatePersona[] {
  return ALL_PERSONAS.filter((p) => p.group === group);
}

/** Get the group metadata for a persona slug */
export function getPersonaGroup(slug: string): SyndicateGroup | undefined {
  const persona = PERSONA_MAP.get(slug);
  if (!persona) return undefined;
  return SYNDICATE_GROUPS.find((g) => g.id === persona.group);
}
