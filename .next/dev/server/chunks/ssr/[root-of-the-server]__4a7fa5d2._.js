module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/config/planetMetadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlanetsArray",
    ()=>getPlanetsArray,
    "planetsData",
    ()=>planetsData
]);
const planetsData = {
    identity: {
        id: "identity",
        name: "Identity",
        themeColor: "#ffd4a3",
        orbitRadius: 6,
        baseSize: 0.8,
        orbitSpeed: 0.003,
        routePath: "/identity",
        ui: {
            title: "CORE IDENTITY",
            description: "Initialize sequence to explore the heritage and foundational roots."
        }
    },
    legacy: {
        id: "legacy",
        name: "Legacy",
        themeColor: "#ffaa00",
        orbitRadius: 9,
        baseSize: 1.0,
        orbitSpeed: 0.0025,
        routePath: "/legacy",
        ui: {
            title: "LEGACY ARCHIVES",
            description: "Accessing spatial data... Explore the basketball journey and achievements."
        }
    },
    vision: {
        id: "vision",
        name: "Vision",
        themeColor: "#00ffff",
        orbitRadius: 12,
        baseSize: 0.9,
        orbitSpeed: 0.002,
        routePath: "/vision",
        ui: {
            title: "FUTURE VISION",
            description: "Analyzing technological trajectories and AI innovation modules."
        }
    },
    odyssey: {
        id: "odyssey",
        name: "Odyssey",
        themeColor: "#4488ff",
        orbitRadius: 15,
        baseSize: 1.1,
        orbitSpeed: 0.0018,
        routePath: "/odyssey",
        ui: {
            title: "THE ODYSSEY",
            description: "Tracing the global travel logs and geographical milestones."
        }
    },
    ventures: {
        id: "ventures",
        name: "Ventures",
        themeColor: "#8A2BE2",
        orbitRadius: 18,
        baseSize: 0.85,
        orbitSpeed: 0.0015,
        routePath: "/ventures",
        ui: {
            title: "COMMERCIAL VENTURES",
            description: "Reviewing active business nodes and corporate architecture."
        }
    },
    voice: {
        id: "voice",
        name: "Voice",
        themeColor: "#ff0080",
        orbitRadius: 21,
        baseSize: 0.95,
        orbitSpeed: 0.0013,
        routePath: "/voice",
        ui: {
            title: "VOICE & BROADCAST",
            description: "Decoding audio signals, podcast streams, and public speaking logs."
        }
    },
    videogram: {
        id: "videogram",
        name: "Videogram",
        themeColor: "#c0c0c0",
        orbitRadius: 24,
        baseSize: 1.05,
        orbitSpeed: 0.0011,
        routePath: "/videogram",
        ui: {
            title: "MEDIA HIGHLIGHTS",
            description: "Accessing the visual database and cinematic representations."
        }
    },
    library: {
        id: "library",
        name: "Library",
        themeColor: "#ffffff",
        orbitRadius: 27,
        baseSize: 0.9,
        orbitSpeed: 0.0009,
        routePath: "/library",
        ui: {
            title: "KNOWLEDGE BASE",
            description: "Entering the central repository of philosophy and stored intelligence."
        }
    },
    contact: {
        id: "contact",
        name: "Contact",
        themeColor: "#00ff88",
        orbitRadius: 30,
        baseSize: 1.0,
        orbitSpeed: 0.0008,
        routePath: "/contact",
        ui: {
            title: "COMMUNICATION NODE",
            description: "Establishing secure links for direct connection and AI chat."
        }
    },
    shield: {
        id: "shield",
        name: "Shield",
        themeColor: "#555555",
        orbitRadius: 33,
        baseSize: 0.8,
        orbitSpeed: 0.0006,
        routePath: "/shield",
        ui: {
            title: "SECURITY SHIELD",
            description: "Monitoring defense mechanisms, legal assets, and system integrity."
        }
    }
};
const getPlanetsArray = ()=>Object.values(planetsData);
}),
"[project]/src/config/planetPageConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Planet Page Configuration — Extended content for planet landing pages
 *
 * Maps each PlanetId to its bilingual Mizo-Voice description,
 * related blog categories, and hero texture path.
 *
 * Source of truth for PlanetPageLayout.tsx rendering.
 */ __turbopack_context__.s([
    "PLANET_PAGE_CONFIG",
    ()=>PLANET_PAGE_CONFIG
]);
function blurUrl(color) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><rect fill="${color}" width="8" height="8" opacity="0.3"/></svg>`)}`;
}
const PLANET_PAGE_CONFIG = {
    identity: {
        descriptionEn: "Where it all began. The roots, the heritage, and the identity that fuel every move across the Mizo Universe. This is the core — the foundation of an athlete, entrepreneur, and builder.",
        descriptionAr: "حيث بدأ كل شيء. الجذور، التراث، والهوية التي تُغذّي كل خطوة في عالم ميزو. هذا هو الأساس — أساس الرياضي ورائد الأعمال والباني.",
        categorySlugs: [
            "lifestyle"
        ],
        heroTexture: "/textures/planets/identity/default/albedo.webp",
        blurDataUrl: blurUrl("#ffd4a3")
    },
    legacy: {
        descriptionEn: "From the youngest player to captain Qatar's national team — the Legacy chronicles a basketball career built on discipline, sacrifice, and relentless competitive fire.",
        descriptionAr: "من أصغر لاعب إلى قيادة المنتخب القطري — الإرث يسجّل مسيرة كرة سلة بُنيت على الانضباط والتضحية والروح التنافسية التي لا تهدأ.",
        categorySlugs: [
            "sports"
        ],
        heroTexture: "/textures/planets/legacy/default/albedo.jpg",
        blurDataUrl: blurUrl("#ffaa00")
    },
    vision: {
        descriptionEn: "Technology meets ambition. Vision is the command center for AI innovation, digital architecture, and the future systems being built at the intersection of sports and tech.",
        descriptionAr: "حيث تلتقي التكنولوجيا بالطموح. الرؤية هي مركز القيادة للابتكار في الذكاء الاصطناعي والهندسة الرقمية والأنظمة المستقبلية التي تُبنى عند تقاطع الرياضة والتقنية.",
        categorySlugs: [
            "tech-unboxing",
            "gaming"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#00ffff")
    },
    odyssey: {
        descriptionEn: "The Odyssey chronicles my journey from a 4-year-old holding a basketball for the first time to captaining Qatar's national team. Every game, every setback, every victory shaped the leader you see today. This is where the athlete speaks.",
        descriptionAr: "الأوديسة تروي رحلتي من طفل بعمر الأربع يمسك كرة السلة لأول مرة إلى قيادة المنتخب القطري. كل مباراة، كل انتكاسة، كل انتصار صنعت القائد الذي تراه اليوم. هنا يتكلم الرياضي.",
        categorySlugs: [
            "sports",
            "wellness"
        ],
        heroTexture: "/textures/planets/odyssey/diffuse.webp",
        blurDataUrl: blurUrl("#4488ff")
    },
    ventures: {
        descriptionEn: "I read markets like I read defenses — finding gaps, creating openings. From Qatar's booming startup scene to the global digital economy, Ventures is where entrepreneurship meets execution.",
        descriptionAr: "أقرأ الأسواق كما أقرأ الدفاعات — أجد الثغرات وأخلق الفرص. من مشهد الشركات الناشئة المزدهر في قطر إلى الاقتصاد الرقمي العالمي، هنا تلتقي ريادة الأعمال بالتنفيذ.",
        categorySlugs: [
            "business"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#8A2BE2")
    },
    voice: {
        descriptionEn: "Some ideas are too big for a page — they need a voice, a stage, a frequency. Voice captures podcasts, interviews, and spoken transmissions that amplify the signal.",
        descriptionAr: "بعض الأفكار أكبر من أن تُحتوى في صفحة — تحتاج صوتًا ومنصة وتردّدًا. الصوت يلتقط البودكاست والمقابلات والبثّات المنطوقة التي تُضخّم الإشارة.",
        categorySlugs: [
            "voices",
            "mindset"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#ff0080"),
        metaTags: [
            "podcast",
            "interview",
            "audio notes",
            "voice",
            "media appearances"
        ]
    },
    videogram: {
        descriptionEn: "The visual archive. Videogram is where every cinematic frame, highlight reel, and production showcase lives — raw, unfiltered, and built to be felt.",
        descriptionAr: "الأرشيف البصري. فيديوغرام هو حيث يعيش كل إطار سينمائي وشريط أهداف وعرض إنتاجي — خام، غير مفلتر، ومصنوع ليُحسّ.",
        categorySlugs: [
            "arts",
            "tech-unboxing"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#c0c0c0"),
        metaTags: [
            "match highlights",
            "youtube",
            "videogram",
            "media production",
            "film reel"
        ]
    },
    library: {
        descriptionEn: "My body is a weapon. My mind is the arsenal. Library is the central repository where books, mental models, and philosophical frameworks converge into actionable intelligence.",
        descriptionAr: "جسدي سلاح. عقلي ترسانة. المكتبة هي المستودع المركزي حيث تتقاطع الكتب والنماذج الذهنية والأطر الفلسفية لتتحوّل إلى ذكاء قابل للتنفيذ.",
        categorySlugs: [
            "reads",
            "mindset"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#ffffff")
    },
    contact: {
        descriptionEn: "Open the channel. Contact is the direct communication node for collaborations, business inquiries, and connections across the Mizo Universe.",
        descriptionAr: "افتح القناة. الاتصال هو عقدة التواصل المباشر للتعاون والاستفسارات التجارية والروابط عبر عالم ميزو.",
        categorySlugs: [],
        heroTexture: null,
        blurDataUrl: blurUrl("#00ff88")
    },
    shield: {
        descriptionEn: "The defense perimeter. Shield monitors privacy protocols, legal frameworks, and system integrity across the Mizo Universe.",
        descriptionAr: "المحيط الدفاعي. الدرع يراقب بروتوكولات الخصوصية والأطر القانونية وسلامة النظام عبر عالم ميزو.",
        categorySlugs: [
            "business"
        ],
        heroTexture: null,
        blurDataUrl: blurUrl("#555555"),
        metaTags: [
            "privacy",
            "security",
            "legal",
            "data protection",
            "shield"
        ]
    }
};
}),
"[project]/src/lib/sanityClient.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanityFetch",
    ()=>sanityFetch,
    "sanityMutate",
    ()=>sanityMutate,
    "textToPortableText",
    ()=>textToPortableText
]);
/**
 * Sanity Client — Lightweight GROQ query engine
 *
 * Uses Sanity's HTTP API directly (no heavy @sanity/client dependency).
 * All queries go through the CDN for production reads.
 * Mutations use the authenticated endpoint for draft writes.
 *
 * Environment Variables:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  — Sanity project ID
 *   NEXT_PUBLIC_SANITY_DATASET     — Dataset name (default: "production")
 *   SANITY_API_TOKEN               — Write-capable API token (server-only)
 */ const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2024-01-01";
const TOKEN = process.env.SANITY_API_TOKEN ?? "";
const CDN_BASE = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
const MUTATE_BASE = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;
async function sanityFetch(query, params = {}, options = {}) {
    const { useCdn = true, signal } = options;
    const base = useCdn ? CDN_BASE : CDN_BASE.replace("apicdn", "api");
    const url = new URL(base);
    url.searchParams.set("query", query);
    for (const [key, value] of Object.entries(params)){
        url.searchParams.set(`$${key}`, JSON.stringify(value));
    }
    const headers = {};
    if (TOKEN) headers["Authorization"] = `Bearer ${TOKEN}`;
    const res = await fetch(url.toString(), {
        headers,
        signal,
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) {
        throw new Error(`Sanity query failed: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.result;
}
async function sanityMutate(mutations) {
    if (!TOKEN) {
        throw new Error("SANITY_API_TOKEN is required for mutations");
    }
    const res = await fetch(MUTATE_BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            mutations
        })
    });
    if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`Sanity mutation failed: ${res.status} — ${errorBody}`);
    }
    const data = await res.json();
    return {
        transactionId: data.transactionId,
        documentId: data.results?.[0]?.id
    };
}
function textToPortableText(text) {
    const lines = text.split("\n").filter((l)=>l.trim());
    const blocks = [];
    let keyIdx = 0;
    const makeKey = ()=>`block-${keyIdx++}`;
    const makeSpanKey = ()=>`span-${keyIdx++}`;
    for (const line of lines){
        const trimmed = line.trim();
        // Determine style from leading hashes
        let style = "normal";
        let content = trimmed;
        if (trimmed.startsWith("#### ")) {
            style = "h4";
            content = trimmed.slice(5);
        } else if (trimmed.startsWith("### ")) {
            style = "h3";
            content = trimmed.slice(4);
        } else if (trimmed.startsWith("## ")) {
            style = "h2";
            content = trimmed.slice(3);
        } else if (trimmed.startsWith("# ")) {
            style = "h1";
            content = trimmed.slice(2);
        } else if (trimmed.startsWith("> ")) {
            style = "blockquote";
            content = trimmed.slice(2);
        }
        // Parse inline marks (bold, italic)
        const children = [];
        const markDefs = [];
        // Simple parser: split by **bold** and *italic*
        const parts = content.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
        for (const part of parts){
            if (!part) continue;
            const boldMatch = part.match(/^\*\*(.+)\*\*$/);
            const italicMatch = part.match(/^\*([^*]+)\*$/);
            const linkMatch = part.match(/^\[(.+)\]\((.+)\)$/);
            if (boldMatch) {
                children.push({
                    _type: "span",
                    _key: makeSpanKey(),
                    text: boldMatch[1],
                    marks: [
                        "strong"
                    ]
                });
            } else if (italicMatch) {
                children.push({
                    _type: "span",
                    _key: makeSpanKey(),
                    text: italicMatch[1],
                    marks: [
                        "em"
                    ]
                });
            } else if (linkMatch) {
                const linkKey = makeSpanKey();
                markDefs.push({
                    _type: "link",
                    _key: linkKey,
                    href: linkMatch[2]
                });
                children.push({
                    _type: "span",
                    _key: makeSpanKey(),
                    text: linkMatch[1],
                    marks: [
                        linkKey
                    ]
                });
            } else {
                children.push({
                    _type: "span",
                    _key: makeSpanKey(),
                    text: part
                });
            }
        }
        if (children.length === 0) {
            children.push({
                _type: "span",
                _key: makeSpanKey(),
                text: content
            });
        }
        blocks.push({
            _type: "block",
            _key: makeKey(),
            style,
            children,
            markDefs: markDefs.length > 0 ? markDefs : undefined
        });
    }
    return blocks;
}
}),
"[project]/src/lib/blogQueries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategorySlugs",
    ()=>getAllCategorySlugs,
    "getAllPostSlugs",
    ()=>getAllPostSlugs,
    "getCategories",
    ()=>getCategories,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getFeaturedPosts",
    ()=>getFeaturedPosts,
    "getLatestPosts",
    ()=>getLatestPosts,
    "getPersonas",
    ()=>getPersonas,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPostsByCategory",
    ()=>getPostsByCategory,
    "getPostsByCategorySlugs",
    ()=>getPostsByCategorySlugs
]);
/**
 * Blog GROQ Queries — Sanity data layer
 *
 * All queries for the blog engine in one place.
 * Server-side only — used by Server Components and Server Actions.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanityClient.ts [app-rsc] (ecmascript)");
;
// ─── GROQ Projections ─────────────────────────────────────────────────────────
const POST_PROJECTION = `{
  _id,
  _type,
  title,
  titleAr,
  "slug": slug.current,
  excerpt,
  excerptAr,
  content,
  contentAr,
  // Fallback: coalesce content → body for backward compat
  "body": coalesce(content, body),
  publishedAt,
  featured,
  tags,
  "mainImage": mainImage{
    "url": asset->url,
    altText
  },
  "coverImage": mainImage{
    "url": asset->url,
    "alt": altText
  },
  "category": category->{
    _id,
    title,
    titleAr,
    "slug": slug.current,
    icon,
    helixColor
  },
  "aiPersona": aiPersona->{
    _id,
    name,
    "slug": slug.current,
    tone,
    signatureColor,
    pulsePattern,
    bio
  },
  seo{
    metaTitle,
    metaDescription,
    focusKeyword,
    canonicalUrl,
    noIndex,
    "ogImage": ogImage{ "url": asset->url }
  },
  migrationSource,
  legacySlug
}`;
const CATEGORY_PROJECTION = `{
  _id,
  title,
  titleAr,
  "slug": slug.current,
  description,
  descriptionAr,
  descriptionFull,
  descriptionFullAr,
  includes,
  icon,
  helixColor,
  "postCount": count(*[_type == "post" && category._ref == ^._id && !(_id in path("drafts.**"))])
}`;
const PERSONA_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  bio,
  bioAr,
  tone,
  signatureColor,
  pulsePattern,
  "avatar": avatar{ "url": asset->url }
}`;
async function getPostBySlug(categorySlug, postSlug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && slug.current == $postSlug && category->slug.current == $categorySlug && !(_id in path("drafts.**"))][0]${POST_PROJECTION}`, {
        postSlug,
        categorySlug
    });
}
async function getPostsByCategory(categorySlug, page = 1, pageSize = 12) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const [posts, total] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))] | order(publishedAt desc) [$start...$end]${POST_PROJECTION}`, {
            categorySlug,
            start,
            end
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`count(*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))])`, {
            categorySlug
        })
    ]);
    return {
        posts,
        total
    };
}
async function getLatestPosts(limit = 12) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`, {
        limit
    });
}
async function getFeaturedPosts(limit = 6) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`, {
        limit
    });
}
async function getPostsByCategorySlugs(categorySlugs, limit = 6) {
    if (categorySlugs.length === 0) return [];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && category->slug.current in $categorySlugs && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${POST_PROJECTION}`, {
        categorySlugs,
        limit
    });
}
async function getCategories() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "category"] | order(sortOrder asc)${CATEGORY_PROJECTION}`);
}
async function getCategoryBySlug(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "category" && slug.current == $slug][0]${CATEGORY_PROJECTION}`, {
        slug
    });
}
async function getPersonas() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "aiPersona"] | order(sortOrder asc)${PERSONA_PROJECTION}`);
}
async function getAllPostSlugs() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "post" && !(_id in path("drafts.**"))]{
      "postSlug": slug.current,
      "categorySlug": category->slug.current
    }`);
}
async function getAllCategorySlugs() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])(`*[_type == "category"]{ "slug": slug.current }.slug`);
}
}),
"[project]/src/config/seoConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SEO Config — Bilingual Metadata Engine (AR/EN)
 *
 * Per-planet SEO metadata registry with OpenGraph, Twitter Cards,
 * JSON-LD structured data (Person + SportsTeam + Organization),
 * and bilingual title/description support for Google 2026 indexing.
 *
 * Every planet, video interview, and match highlight gets
 * individually indexable metadata.
 */ __turbopack_context__.s([
    "PLANET_SEO",
    ()=>PLANET_SEO,
    "buildOrganizationJsonLd",
    ()=>buildOrganizationJsonLd,
    "buildPersonJsonLd",
    ()=>buildPersonJsonLd,
    "buildPlanetMetadata",
    ()=>buildPlanetMetadata,
    "buildPlanetPageJsonLd",
    ()=>buildPlanetPageJsonLd,
    "buildVideoJsonLd",
    ()=>buildVideoJsonLd
]);
// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const SITE_NAME = "Mizo Universe";
const AUTHOR_NAME = "Mizo Amin";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;
const TWITTER_HANDLE = "@mizoamin";
const PLANET_SEO = {
    identity: {
        titleEn: "Core Identity — Mizo Amin | Heritage & Roots",
        titleAr: "الهوية الأساسية — ميزو أمين | التراث والجذور",
        descriptionEn: "Explore the foundational roots, heritage, and identity of Mizo Amin — professional basketball player, entrepreneur, and builder.",
        descriptionAr: "استكشف الجذور الأساسية والتراث وهوية ميزو أمين — لاعب كرة سلة محترف ورائد أعمال وباني.",
        ogImage: "/images/og-identity.jpg",
        keywords: [
            "Mizo Amin",
            "identity",
            "heritage",
            "Qatar",
            "basketball player",
            "هوية",
            "تراث"
        ],
        schemaType: "WebPage"
    },
    legacy: {
        titleEn: "Legacy Archives — Mizo Amin | Basketball Career",
        titleAr: "أرشيف الإرث — ميزو أمين | مسيرة كرة السلة",
        descriptionEn: "From the youngest player to captain of Qatar's national basketball team — the Legacy chronicles discipline, sacrifice, and competitive fire.",
        descriptionAr: "من أصغر لاعب إلى قيادة المنتخب القطري — الإرث يروي الانضباط والتضحية والروح التنافسية.",
        ogImage: "/images/og-legacy.jpg",
        keywords: [
            "basketball",
            "Qatar national team",
            "FIBA",
            "legacy",
            "كرة السلة",
            "المنتخب القطري"
        ],
        schemaType: "WebPage"
    },
    vision: {
        titleEn: "Future Vision — Mizo Amin | AI & Innovation",
        titleAr: "رؤية المستقبل — ميزو أمين | الذكاء الاصطناعي والابتكار",
        descriptionEn: "Technology meets ambition. AI innovation, digital architecture, and future systems at the intersection of sports and technology.",
        descriptionAr: "حيث تلتقي التكنولوجيا بالطموح. الابتكار في الذكاء الاصطناعي والهندسة الرقمية والأنظمة المستقبلية.",
        ogImage: "/images/og-vision.jpg",
        keywords: [
            "AI",
            "technology",
            "innovation",
            "vision",
            "digital architecture",
            "ذكاء اصطناعي"
        ],
        schemaType: "CollectionPage"
    },
    odyssey: {
        titleEn: "The Odyssey — Mizo Amin | Athletic Journey",
        titleAr: "الأوديسة — ميزو أمين | الرحلة الرياضية",
        descriptionEn: "Chronicles from a 4-year-old holding a basketball to captaining Qatar's national team — every game shaped the leader.",
        descriptionAr: "من طفل بعمر الأربع يمسك كرة السلة إلى قيادة المنتخب القطري — كل مباراة صنعت القائد.",
        ogImage: "/images/og-odyssey.jpg",
        keywords: [
            "odyssey",
            "journey",
            "basketball career",
            "athlete",
            "Qatar",
            "رحلة",
            "رياضي"
        ],
        schemaType: "WebPage"
    },
    ventures: {
        titleEn: "Ventures — Mizo Amin | Business & Entrepreneurship",
        titleAr: "المشاريع — ميزو أمين | الأعمال وريادة الأعمال",
        descriptionEn: "From Qatar's startup scene to the global digital economy — where entrepreneurship meets execution.",
        descriptionAr: "من مشهد الشركات الناشئة في قطر إلى الاقتصاد الرقمي العالمي — حيث تلتقي ريادة الأعمال بالتنفيذ.",
        ogImage: "/images/og-ventures.jpg",
        keywords: [
            "business",
            "ventures",
            "entrepreneurship",
            "startup",
            "Qatar",
            "أعمال",
            "ريادة"
        ],
        schemaType: "WebPage"
    },
    voice: {
        titleEn: "Voice Signals — Mizo Amin | Podcasts & Interviews",
        titleAr: "إشارات الصوت — ميزو أمين | البودكاست والمقابلات",
        descriptionEn: "Podcasts, interviews, and spoken transmissions — Voice captures the ideas too big for a page.",
        descriptionAr: "بودكاست ومقابلات وبثّات منطوقة — الصوت يلتقط الأفكار الأكبر من أن تُحتوى في صفحة.",
        ogImage: "/images/og-voice.jpg",
        keywords: [
            "podcast",
            "interview",
            "voice",
            "media",
            "radio",
            "بودكاست",
            "مقابلة"
        ],
        schemaType: "CollectionPage"
    },
    videogram: {
        titleEn: "Videogram — Mizo Amin | Smart Cinematic Archive",
        titleAr: "فيديوغرام — ميزو أمين | الأرشيف السينمائي الذكي",
        descriptionEn: "Hybrid Video System — YouTube highlights with Time-Stamp precision and direct CDN video assets. Match highlights, interviews, and cinematic productions.",
        descriptionAr: "نظام الفيديو الهجين — أبرز لحظات يوتيوب بدقة الطابع الزمني وأصول فيديو CDN المباشرة. أبرز المباريات والمقابلات والإنتاجات السينمائية.",
        ogImage: "/images/og-videogram.jpg",
        keywords: [
            "video",
            "highlights",
            "YouTube",
            "match highlights",
            "cinema",
            "فيديو",
            "أبرز اللحظات"
        ],
        schemaType: "VideoGallery"
    },
    library: {
        titleEn: "Knowledge Library — Mizo Amin | Books & Philosophy",
        titleAr: "مكتبة المعرفة — ميزو أمين | الكتب والفلسفة",
        descriptionEn: "Books, mental models, and philosophical frameworks converging into actionable intelligence.",
        descriptionAr: "الكتب والنماذج الذهنية والأطر الفلسفية تتقاطع لتتحوّل إلى ذكاء قابل للتنفيذ.",
        ogImage: "/images/og-library.jpg",
        keywords: [
            "books",
            "philosophy",
            "knowledge",
            "mindset",
            "library",
            "كتب",
            "فلسفة"
        ],
        schemaType: "CollectionPage"
    },
    contact: {
        titleEn: "Contact — Mizo Amin | Connect & Collaborate",
        titleAr: "تواصل — ميزو أمين | التواصل والتعاون",
        descriptionEn: "Open the channel. Direct communication for collaborations, business inquiries, and connections across the Mizo Universe.",
        descriptionAr: "افتح القناة. تواصل مباشر للتعاون والاستفسارات التجارية والروابط عبر عالم ميزو.",
        ogImage: "/images/og-contact.jpg",
        keywords: [
            "contact",
            "collaboration",
            "business inquiry",
            "connect",
            "تواصل",
            "تعاون"
        ],
        schemaType: "ContactPage"
    },
    shield: {
        titleEn: "Shield — Mizo Amin | Privacy & Security",
        titleAr: "الدرع — ميزو أمين | الخصوصية والأمان",
        descriptionEn: "Privacy protocols, legal frameworks, and system integrity across the Mizo Universe.",
        descriptionAr: "بروتوكولات الخصوصية والأطر القانونية وسلامة النظام عبر عالم ميزو.",
        ogImage: "/images/og-shield.jpg",
        keywords: [
            "privacy",
            "security",
            "legal",
            "shield",
            "protection",
            "خصوصية",
            "أمان"
        ],
        schemaType: "WebPage"
    }
};
function buildPlanetMetadata(planetId, locale = "en") {
    const seo = PLANET_SEO[planetId];
    const title = locale === "ar" ? seo.titleAr : seo.titleEn;
    const description = locale === "ar" ? seo.descriptionAr : seo.descriptionEn;
    const url = `${SITE_URL}/${planetId}`;
    return {
        title,
        description,
        keywords: seo.keywords,
        authors: [
            {
                name: AUTHOR_NAME
            }
        ],
        alternates: {
            canonical: url,
            languages: {
                en: url,
                ar: url
            }
        },
        openGraph: {
            title: seo.titleEn,
            description: seo.descriptionEn,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: seo.ogImage.startsWith("http") ? seo.ogImage : `${SITE_URL}${seo.ogImage}`,
                    width: 1200,
                    height: 630,
                    alt: seo.titleEn
                }
            ],
            type: "website",
            locale: "en_US"
        },
        twitter: {
            card: "summary_large_image",
            title: seo.titleEn,
            description: seo.descriptionEn,
            creator: TWITTER_HANDLE,
            images: [
                seo.ogImage.startsWith("http") ? seo.ogImage : `${SITE_URL}${seo.ogImage}`
            ]
        }
    };
}
function buildPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: AUTHOR_NAME,
        url: SITE_URL,
        sameAs: [
            "https://twitter.com/mizoamin",
            "https://instagram.com/mizoamin",
            "https://linkedin.com/in/mizoamin"
        ],
        jobTitle: "Professional Basketball Player & Entrepreneur",
        nationality: {
            "@type": "Country",
            name: "Qatar"
        },
        memberOf: {
            "@type": "SportsTeam",
            name: "Qatar National Basketball Team",
            sport: "Basketball"
        }
    };
}
function buildVideoJsonLd(video) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.name,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        ...video.duration ? {
            duration: video.duration
        } : {},
        ...video.embedUrl ? {
            embedUrl: video.embedUrl
        } : {},
        ...video.contentUrl ? {
            contentUrl: video.contentUrl
        } : {},
        author: {
            "@type": "Person",
            name: AUTHOR_NAME
        }
    };
}
function buildOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mizo Universe",
        url: SITE_URL,
        founder: {
            "@type": "Person",
            name: AUTHOR_NAME
        },
        description: "A cinematic AI-powered personal brand platform at the intersection of sports, technology, and entrepreneurship."
    };
}
function buildPlanetPageJsonLd(planetId) {
    const seo = PLANET_SEO[planetId];
    return {
        "@context": "https://schema.org",
        "@type": seo.schemaType,
        name: seo.titleEn,
        description: seo.descriptionEn,
        url: `${SITE_URL}/${planetId}`,
        inLanguage: [
            "en",
            "ar"
        ],
        author: buildPersonJsonLd(),
        isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL
        }
    };
}
}),
"[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/layout/ScrollFadeHero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/ScrollFadeHero.tsx <module evaluation>", "default");
}),
"[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/layout/ScrollFadeHero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/ScrollFadeHero.tsx", "default");
}),
"[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ScrollFadeHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ScrollFadeHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ScrollFadeHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/NavigationHUD.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/NavigationHUD.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/NavigationHUD.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/NavigationHUD.tsx", "default");
}),
"[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/layout/PlanetPageLayout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlanetPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
/**
 * PlanetPageLayout — Cinematic landing page template for all planets
 *
 * Server Component — fetches blog data from Sanity, renders full-viewport
 * hero with scroll-fade parallax, bilingual Mizo-Voice descriptions,
 * related blog grid, and a widget slot for planet-specific interactive blocks.
 *
 * Used by: src/app/{planetName}/page.tsx
 *
 * Architecture:
 *   Hero Section (sticky visual, ScrollFadeHero client component)
 *   → Content Zone (widgets slot + blog grid)
 *   → Footer
 *
 * Zero CLS: Fixed hero height (h-screen), Next/Image blur placeholders,
 * known font sizes. Scroll enabled via .planet-page CSS class.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetPageConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetPageConfig.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogQueries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blogQueries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/seoConfig.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ScrollFadeHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ScrollFadeHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavigationHUD.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
// ─── Post Card (internal) ─────────────────────────────────────────────────────
function PostCard({ post, accentColor }) {
    const imageUrl = post.mainImage?.url ?? post.coverImage?.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/blog/${post.category?.slug}/${post.slug}`,
        className: "group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48 overflow-hidden bg-white/[0.03]",
                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: post.mainImage?.altText ?? post.title,
                    width: 400,
                    height: 192,
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl",
                        children: post.category?.icon ?? "📝"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    post.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold uppercase tracking-wider mb-2 inline-block",
                        style: {
                            color: accentColor
                        },
                        children: post.category.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors line-clamp-2",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 line-clamp-2",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
async function PlanetPageLayout({ planetId, children }) {
    const planet = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["planetsData"][planetId];
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetPageConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLANET_PAGE_CONFIG"][planetId];
    // Fetch related blog posts (graceful Sanity fallback)
    let posts = [];
    if (config.categorySlugs.length > 0) {
        try {
            posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogQueries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostsByCategorySlugs"])(config.categorySlugs, 6);
        } catch  {
            posts = [];
        }
    }
    // JSON-LD BreadcrumbList
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Universe",
                item: `${SITE_URL}/`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: planet.name,
                item: `${SITE_URL}${planet.routePath}`
            }
        ]
    };
    // JSON-LD WebPage with author attribution
    const seoMeta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLANET_SEO"][planetId];
    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": seoMeta.schemaType,
        name: seoMeta.titleEn,
        description: seoMeta.descriptionEn,
        url: `${SITE_URL}${planet.routePath}`,
        author: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPersonJsonLd"])(),
        inLanguage: [
            "en",
            "ar"
        ],
        keywords: seoMeta.keywords.join(", ")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(webPageJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "planet-page bg-[#050505] text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "pointer-events-auto flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    "Universe"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none text-xs font-bold uppercase tracking-[3px]",
                                style: {
                                    color: planet.themeColor
                                },
                                children: planet.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ScrollFadeHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative h-screen flex items-end justify-center pb-24 overflow-hidden",
                            children: [
                                config.heroTexture && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: config.heroTexture,
                                    alt: `${planet.name} planet surface`,
                                    fill: true,
                                    className: "object-cover opacity-20 scale-110",
                                    priority: true,
                                    sizes: "100vw",
                                    placeholder: "blur",
                                    blurDataURL: config.blurDataUrl
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 pointer-events-none",
                                    style: {
                                        background: `radial-gradient(ellipse 80% 60% at 50% 30%, ${planet.themeColor}15 0%, transparent 70%)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 text-center max-w-4xl px-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] sm:text-xs font-bold uppercase tracking-[6px] mb-6",
                                            style: {
                                                color: planet.themeColor
                                            },
                                            children: [
                                                "Mizo Universe · ",
                                                planet.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500",
                                            children: planet.ui.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-20 mx-auto mb-8 rounded-full",
                                            style: {
                                                backgroundColor: planet.themeColor,
                                                boxShadow: `0 0 30px ${planet.themeColor}60`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto",
                                            children: config.descriptionEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base md:text-lg font-light text-gray-500 leading-relaxed max-w-2xl mx-auto",
                                            dir: "rtl",
                                            children: config.descriptionAr
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 motion-safe:animate-bounce",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-[4px]",
                                            children: "Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M19 14l-7 7m0 0l-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            config.categorySlugs.length > 0 ? posts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-1 rounded-full",
                                                style: {
                                                    backgroundColor: planet.themeColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-black uppercase tracking-tight",
                                                children: "Transmissions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PostCard, {
                                                post: post,
                                                accentColor: planet.themeColor
                                            }, post._id, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 293,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/blog",
                                            className: "inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors",
                                            children: [
                                                "View All Posts",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this) : /* Stealth Mode — categories mapped but no posts yet */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-1 rounded-full",
                                                style: {
                                                    backgroundColor: planet.themeColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-black uppercase tracking-tight",
                                                children: "Transmissions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-20 rounded-2xl border border-white/[0.06] bg-white/[0.01]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full mb-6 motion-safe:animate-pulse",
                                                style: {
                                                    backgroundColor: planet.themeColor,
                                                    boxShadow: `0 0 20px ${planet.themeColor}40`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold uppercase tracking-[4px] text-gray-500 mb-2",
                                                children: "Stealth Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 max-w-sm text-center",
                                                children: "Scanning for new intel… Future transmissions are being prepared for this sector."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "border-t border-white/[0.04] mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "© ",
                                                    new Date().getFullYear(),
                                                    " Mizo Amin. Built with Next.js, Three.js & AI."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/blog",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Blog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Universe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PlanetPageLayout.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/widgets/ProjectOrbit.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/widgets/ProjectOrbit.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/widgets/ProjectOrbit.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/widgets/ProjectOrbit.tsx", "default");
}),
"[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widgets$2f$ProjectOrbit$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widgets$2f$ProjectOrbit$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widgets$2f$ProjectOrbit$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/vision/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisionPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PlanetPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PlanetPageLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widgets$2f$ProjectOrbit$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/widgets/ProjectOrbit.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/seoConfig.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPlanetMetadata"])("vision");
// ─── Tech Projects ────────────────────────────────────────────────────────────
const VISION_PROJECTS = [
    {
        title: "Mizo Universe Platform",
        description: "A cinematic 3D personal brand platform built with Next.js 16, React Three Fiber, and 15 AI personas. The project you're experiencing now.",
        status: "active"
    },
    {
        title: "AI Persona Engine",
        description: "15 synthetic intelligence personas, each with unique voice, tone, and visual signature. Powering bilingual content generation at scale.",
        status: "active"
    },
    {
        title: "Sports Analytics AI",
        description: "Computer vision and machine learning models for basketball performance analysis. Shot tracking, defensive positioning, play prediction.",
        status: "building"
    },
    {
        title: "Spatial Computing Lab",
        description: "Exploring Apple Vision Pro and spatial web interfaces. Building the next generation of immersive athlete brand experiences.",
        status: "stealth"
    }
];
function VisionPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PlanetPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        planetId: "vision",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widgets$2f$ProjectOrbit$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            projects: VISION_PROJECTS,
            accentColor: "#00ffff",
            title: "Innovation Lab"
        }, void 0, false, {
            fileName: "[project]/src/app/vision/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/vision/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/vision/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/vision/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a7fa5d2._.js.map