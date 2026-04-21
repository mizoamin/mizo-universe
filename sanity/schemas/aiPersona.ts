/**
 * Sanity Schema — AI Persona (Pure TypeScript Definition)
 *
 * 15 AI Personas for the VisionPlanet blog engine.
 * Each persona has a unique visual signature (color + pulse pattern)
 * that drives the DNA Helix shader in the 3D frontend.
 *
 * NOTE: When Sanity Studio is configured, wrap these definitions
 * with defineType/defineField from the 'sanity' package.
 */

export const TONE_OPTIONS = [
  "motivational",
  "philosophical",
  "analytical",
  "storytelling",
  "technical",
  "poetic",
  "provocative",
  "calm-reflective",
  "energetic",
  "strategic",
] as const;

export type PersonaTone = (typeof TONE_OPTIONS)[number];

export const PULSE_PATTERN_OPTIONS = [
  "high-frequency",
  "slow-ethereal",
  "staccato",
  "rhythmic-wave",
  "deep-breathing",
  "aurora",
  "heartbeat",
  "electric",
  "orbital",
  "quantum",
] as const;

export type PulsePatternOption = (typeof PULSE_PATTERN_OPTIONS)[number];

/**
 * Sanity document schema definition for AI Persona.
 * Use with defineType() when sanity package is installed.
 */
export const aiPersonaSchema = {
  name: "aiPersona",
  title: "AI Persona",
  type: "document",
  fields: [
    { name: "name", title: "Persona Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 64 } },
    { name: "bio", title: "Short Bio (English)", type: "text" },
    { name: "bioAr", title: "Short Bio (Arabic)", type: "text" },
    { name: "tone", title: "Writing Tone", type: "string", options: { list: TONE_OPTIONS.map((t) => ({ title: t, value: t })) } },
    { name: "signatureColor", title: "Visual Signature Color (Hex)", type: "string" },
    { name: "pulsePattern", title: "Pulse Pattern", type: "string", options: { list: PULSE_PATTERN_OPTIONS.map((p) => ({ title: p, value: p })) } },
    { name: "avatar", title: "Persona Avatar", type: "image", options: { hotspot: true } },
    { name: "sortOrder", title: "Sort Order", type: "number" },
  ],
  orderings: [
    { title: "Sort Order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" as const }] },
  ],
} as const;

export default aiPersonaSchema;

/**
 * Seed data for the 15 AI Personas.
 * Visual signatures are exported separately in the Visual Signature Engine
 * (src/components/3d/planets/VisionPlanet/personaSignatures.ts).
 */
export const PERSONA_SEED = [
  { name: "Tony Robbins", slug: "tony-robbins", bio: "Peak performance strategist and motivational powerhouse.", bioAr: "استراتيجي الأداء العالي وقوة التحفيز.", tone: "motivational" as const, signatureColor: "#FF8C00", pulsePattern: "high-frequency" as const, sortOrder: 0 },
  { name: "Mustafa Mahmoud", slug: "mustafa-mahmoud", bio: "Philosopher, physician, and spiritual seeker bridging science and faith.", bioAr: "فيلسوف وطبيب وباحث روحاني يجمع بين العلم والإيمان.", tone: "philosophical" as const, signatureColor: "#4B0082", pulsePattern: "slow-ethereal" as const, sortOrder: 1 },
  { name: "Elon Musk", slug: "elon-musk", bio: "Radical technologist disrupting space, energy, and computation.", bioAr: "تقني ثوري يزعزع الفضاء والطاقة والحوسبة.", tone: "provocative" as const, signatureColor: "#00BFFF", pulsePattern: "electric" as const, sortOrder: 2 },
  { name: "Rumi", slug: "rumi", bio: "13th-century mystic poet whose words still illuminate hearts.", bioAr: "شاعر صوفي من القرن الثالث عشر لا تزال كلماته تنير القلوب.", tone: "poetic" as const, signatureColor: "#DA70D6", pulsePattern: "aurora" as const, sortOrder: 3 },
  { name: "Steve Jobs", slug: "steve-jobs", bio: "Design visionary who merged technology with the liberal arts.", bioAr: "صاحب رؤية تصميمية دمج التكنولوجيا بالفنون الحرة.", tone: "storytelling" as const, signatureColor: "#C0C0C0", pulsePattern: "rhythmic-wave" as const, sortOrder: 4 },
  { name: "Marcus Aurelius", slug: "marcus-aurelius", bio: "Roman emperor-philosopher and master of Stoic discipline.", bioAr: "إمبراطور روماني فيلسوف وسيّد الانضباط الرواقي.", tone: "calm-reflective" as const, signatureColor: "#B8860B", pulsePattern: "deep-breathing" as const, sortOrder: 5 },
  { name: "Kobe Bryant", slug: "kobe-bryant", bio: "Mamba Mentality — relentless drive, obsessive preparation, legendary output.", bioAr: "عقلية مامبا — الدافع الذي لا يرحم، التحضير المهووس، الإنتاج الأسطوري.", tone: "motivational" as const, signatureColor: "#FFD700", pulsePattern: "heartbeat" as const, sortOrder: 6 },
  { name: "Naval Ravikant", slug: "naval-ravikant", bio: "Angel investor and modern philosopher of wealth and happiness.", bioAr: "مستثمر ملاك وفيلسوف حديث للثروة والسعادة.", tone: "analytical" as const, signatureColor: "#20B2AA", pulsePattern: "quantum" as const, sortOrder: 7 },
  { name: "Ibn Khaldun", slug: "ibn-khaldun", bio: "Father of sociology and historiography, ahead of his time by centuries.", bioAr: "أبو علم الاجتماع والتأريخ، سابق لعصره بقرون.", tone: "analytical" as const, signatureColor: "#CD853F", pulsePattern: "orbital" as const, sortOrder: 8 },
  { name: "Jordan Peterson", slug: "jordan-peterson", bio: "Clinical psychologist dissecting meaning, order, and responsibility.", bioAr: "عالم نفس سريري يشرّح المعنى والنظام والمسؤولية.", tone: "provocative" as const, signatureColor: "#DC143C", pulsePattern: "staccato" as const, sortOrder: 9 },
  { name: "Leonardo da Vinci", slug: "leonardo-da-vinci", bio: "The ultimate polymath — art, science, engineering, and unbounded curiosity.", bioAr: "الموسوعي المطلق — الفن والعلم والهندسة وفضول بلا حدود.", tone: "storytelling" as const, signatureColor: "#F0E68C", pulsePattern: "aurora" as const, sortOrder: 10 },
  { name: "Gary Vaynerchuk", slug: "gary-vaynerchuk", bio: "Hustle-culture architect and social media marketing pioneer.", bioAr: "مهندس ثقافة الكدّ ورائد التسويق عبر وسائل التواصل الاجتماعي.", tone: "energetic" as const, signatureColor: "#FF4500", pulsePattern: "high-frequency" as const, sortOrder: 11 },
  { name: "Nikola Tesla", slug: "nikola-tesla", bio: "Electrical genius who saw the future in alternating currents and wireless energy.", bioAr: "عبقري كهربائي رأى المستقبل في التيار المتردد والطاقة اللاسلكية.", tone: "technical" as const, signatureColor: "#00CED1", pulsePattern: "electric" as const, sortOrder: 12 },
  { name: "Oprah Winfrey", slug: "oprah-winfrey", bio: "Media mogul and empathetic storyteller who changed global conversation.", bioAr: "قطب إعلامي وراوية متعاطفة غيّرت الحوار العالمي.", tone: "storytelling" as const, signatureColor: "#FF69B4", pulsePattern: "rhythmic-wave" as const, sortOrder: 13 },
  { name: "Al-Ghazali", slug: "al-ghazali", bio: "Islamic polymath who reconciled reason with spiritual revival.", bioAr: "عالم إسلامي موسوعي وفّق بين العقل والإحياء الروحي.", tone: "philosophical" as const, signatureColor: "#228B22", pulsePattern: "deep-breathing" as const, sortOrder: 14 },
] as const;
