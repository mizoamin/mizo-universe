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
"[project]/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Blog SEO Engine — Metadata Factory
 *
 * Generates dynamic OpenGraph, JSON-LD (BlogPosting), Twitter Cards,
 * and Canonical tags for every blog post. Designed for Rank #1 SEO.
 *
 * Architecture:
 * ─────────────────────────────────────────────────────────────────
 * - generatePostMetadata()  → Next.js Metadata object for generateMetadata()
 * - generateBlogJsonLd()    → JSON-LD BlogPosting structured data
 * - generateCategoryMetadata() → Category listing page metadata
 *
 * All functions are pure — no side effects, cacheable by Next.js.
 */ __turbopack_context__.s([
    "generateBlogIndexMetadata",
    ()=>generateBlogIndexMetadata,
    "generateBlogJsonLd",
    ()=>generateBlogJsonLd,
    "generateCategoryMetadata",
    ()=>generateCategoryMetadata,
    "generatePostMetadata",
    ()=>generatePostMetadata,
    "generateTwitterThread",
    ()=>generateTwitterThread
]);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mizoamin.com";
const SITE_NAME = "Mizo Universe";
const AUTHOR_NAME = "Mizo Amin";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;
function generatePostMetadata(post) {
    const title = post.seo?.metaTitle ?? `${post.title} | ${SITE_NAME}`;
    const description = post.seo?.metaDescription ?? post.excerpt.slice(0, 160);
    const canonical = post.seo?.canonicalUrl ?? `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;
    const ogImage = post.seo?.ogImageUrl ?? post.coverImageUrl ?? DEFAULT_OG_IMAGE;
    const keywords = [
        post.seo?.focusKeyword,
        post.categoryTitle,
        ...post.tags ?? [],
        AUTHOR_NAME
    ].filter(Boolean);
    return {
        title,
        description,
        keywords,
        authors: [
            {
                name: AUTHOR_NAME,
                url: SITE_URL
            }
        ],
        creator: AUTHOR_NAME,
        publisher: SITE_NAME,
        alternates: {
            canonical
        },
        openGraph: {
            type: "article",
            title,
            description,
            url: canonical,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ],
            publishedTime: post.publishedAt,
            modifiedTime: post.modifiedAt ?? post.publishedAt,
            authors: [
                AUTHOR_NAME
            ],
            tags: post.tags,
            locale: "en_US"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                ogImage
            ],
            creator: "@mizoamin"
        },
        robots: post.seo?.noIndex ? {
            index: false,
            follow: false
        } : {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    };
}
function generateBlogJsonLd(post) {
    const canonical = post.seo?.canonicalUrl ?? `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;
    const ogImage = post.seo?.ogImageUrl ?? post.coverImageUrl ?? DEFAULT_OG_IMAGE;
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        name: post.title,
        description: post.seo?.metaDescription ?? post.excerpt.slice(0, 160),
        url: canonical,
        image: {
            "@type": "ImageObject",
            url: ogImage,
            width: 1200,
            height: 630
        },
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt ?? post.publishedAt,
        author: {
            "@type": "Person",
            name: AUTHOR_NAME,
            url: SITE_URL,
            jobTitle: "Professional Basketball Player, Tech Expert & Businessman",
            sameAs: [
                "https://www.instagram.com/mizoamin",
                "https://www.linkedin.com/in/mizoamin",
                "https://x.com/mizoamin"
            ]
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/logo.png`
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical
        },
        articleSection: post.categoryTitle,
        keywords: [
            post.seo?.focusKeyword,
            ...post.tags ?? []
        ].filter(Boolean).join(", "),
        wordCount: post.wordCount,
        timeRequired: post.readingTimeMinutes ? `PT${post.readingTimeMinutes}M` : undefined,
        inLanguage: "en",
        ...post.personaName && {
            about: {
                "@type": "Thing",
                name: `AI Perspective: ${post.personaName}`
            }
        }
    };
}
function generateCategoryMetadata(category) {
    const title = `${category.icon} ${category.title} — Blog | ${SITE_NAME}`;
    const description = `${category.description} Explore ${category.title.toLowerCase()} articles by ${AUTHOR_NAME}.`;
    const canonical = `${SITE_URL}/blog/${category.slug}`;
    return {
        title,
        description,
        alternates: {
            canonical
        },
        openGraph: {
            type: "website",
            title,
            description,
            url: canonical,
            siteName: SITE_NAME,
            images: [
                {
                    url: DEFAULT_OG_IMAGE,
                    width: 1200,
                    height: 630
                }
            ],
            locale: "en_US"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                DEFAULT_OG_IMAGE
            ]
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    };
}
function generateBlogIndexMetadata() {
    const title = `Blog — ${SITE_NAME}`;
    const description = `Explore articles on sports, business, mindset, wellness, tech, and more by ${AUTHOR_NAME} — Professional Basketball Player, Tech Expert & Businessman.`;
    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_URL}/blog`
        },
        openGraph: {
            type: "website",
            title,
            description,
            url: `${SITE_URL}/blog`,
            siteName: SITE_NAME,
            images: [
                {
                    url: DEFAULT_OG_IMAGE,
                    width: 1200,
                    height: 630
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description
        }
    };
}
function generateTwitterThread(post, bodyText) {
    const canonical = post.seo?.canonicalUrl ?? `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`;
    // Strip markdown to extract sentences
    const plainText = bodyText.replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/\*\*(.+?)\*\*/g, "$1") // bold
    .replace(/\*(.+?)\*/g, "$1") // italic
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/`(.+?)`/g, "$1") // inline code
    .replace(/>\s+/g, "") // blockquotes
    .replace(/[-*]\s+/g, "") // list items
    .replace(/\n{2,}/g, "\n").trim();
    const sentences = plainText.split(/(?<=[.!?])\s+/).filter((s)=>s.length > 20);
    const tweets = [];
    // Tweet 1: Hook — title + persona + category context
    const hookSuffix = post.personaName ? ` (via the lens of ${post.personaName})` : "";
    const hook = `🧵 ${post.title}${hookSuffix}\n\nA thread on ${post.categoryTitle.toLowerCase()} 👇`;
    tweets.push(truncateTweet(hook));
    // Tweets 2-6: Key insights from the body — extract strongest sentences
    const insightSentences = sentences.filter((s)=>s.length >= 40 && s.length <= 250).slice(0, 5);
    insightSentences.forEach((sentence, i)=>{
        const prefix = `${i + 2}/ `;
        tweets.push(truncateTweet(`${prefix}${sentence}`));
    });
    // Final tweet: CTA with link
    const cta = `${tweets.length + 1}/ Read the full article:\n\n${canonical}\n\n${post.tags?.slice(0, 3).map((t)=>`#${t.replace(/\s+/g, "")}`).join(" ") ?? ""}`;
    tweets.push(truncateTweet(cta));
    return {
        tweets,
        totalChars: tweets.reduce((sum, t)=>sum + t.length, 0),
        threadCount: tweets.length
    };
}
function truncateTweet(text, maxLen = 280) {
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen - 1) + "…";
}
}),
"[project]/src/config/visionCategories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * VisionPlanet — Master Category Definitions
 *
 * Shared between Sanity schemas and 3D frontend components.
 * Pure TypeScript — no external dependencies.
 *
 * 11 Master Categories map 1:1 to DNA Helix segments.
 * Full bilingual descriptions (EN/AR) written by Mizo Amin.
 */ __turbopack_context__.s([
    "CATEGORY_MAP",
    ()=>CATEGORY_MAP,
    "VISION_CATEGORIES",
    ()=>VISION_CATEGORIES
]);
const VISION_CATEGORIES = [
    {
        slug: "sports",
        title: "Sports",
        titleAr: "الرياضة",
        description: "Elite athletic performance, basketball mastery, and competitive fire — from the court to the arena of life.",
        descriptionAr: "الأداء الرياضي النخبوي، إتقان كرة السلة، والروح التنافسية — من الملعب إلى ساحة الحياة.",
        descriptionFull: "This isn't a highlights reel. This is the raw, unfiltered truth about what it takes to compete at the highest level. I've been a captain, an MVP, a champion — and I've been benched, injured, and humbled. Every article here is forged from sweat, discipline, and thousands of hours on the court. Whether it's breaking down elite basketball IQ, dissecting training protocols, or exploring the mental warfare of competition, this is where the athlete in me speaks loudest.",
        descriptionFullAr: "هذا ليس شريط أهداف. هذه هي الحقيقة الخام عمّا يتطلبه الأمر للمنافسة على أعلى مستوى. كنتُ قائدًا، وأفضل لاعب، وبطلًا — وجلستُ على مقاعد البدلاء، وأُصبتُ، وتعلّمتُ التواضع. كل مقال هنا مصنوع من العرق والانضباط وآلاف الساعات في الملعب. سواء كان الأمر يتعلق بتحليل الذكاء العالي في كرة السلة، أو تشريح بروتوكولات التدريب، أو استكشاف الحرب الذهنية في المنافسة.",
        includes: [
            "Basketball Analysis & IQ",
            "Training Protocols & Recovery",
            "Athlete Mindset & Discipline",
            "Sports Science & Performance",
            "Competition Stories & Lessons"
        ],
        icon: "🏀",
        helixColor: "#FF4500",
        sortOrder: 0
    },
    {
        slug: "business",
        title: "Business",
        titleAr: "الأعمال",
        description: "Entrepreneurship, ventures, strategic thinking, and market disruption — building empires from first principles.",
        descriptionAr: "ريادة الأعمال، المشاريع، التفكير الاستراتيجي، وزعزعة الأسواق — بناء إمبراطوريات من المبادئ الأولى.",
        descriptionFull: "I read markets the way I read defenses — finding gaps, exploiting mismatches, creating opportunities others don't see. From launching ventures in Qatar's booming ecosystem to navigating the global digital economy, every piece here distills hard-won lessons from the trenches. This is business through the lens of someone who's built, failed, pivoted, and scaled. No MBA theory — just battlefield intelligence.",
        descriptionFullAr: "أقرأ الأسواق كما أقرأ الدفاعات — أجد الثغرات، أستغلّ نقاط الضعف، وأخلق فرصًا لا يراها الآخرون. من إطلاق مشاريع في النظام البيئي المزدهر في قطر إلى التنقّل في الاقتصاد الرقمي العالمي، كل مقال هنا يُقطّر دروسًا مكتسبة بعرق الخنادق. هذا عمل تجاري من عدسة شخص بنى وفشل وتكيّف وتوسّع. لا نظريات أكاديمية — فقط ذكاء ميداني.",
        includes: [
            "Entrepreneurship & Startups",
            "Strategic Market Analysis",
            "Digital Business Models",
            "Qatar & Middle East Markets",
            "Leadership & Team Building"
        ],
        icon: "💼",
        helixColor: "#FFD700",
        sortOrder: 1
    },
    {
        slug: "mindset",
        title: "Mindset",
        titleAr: "العقلية",
        description: "Mental models, peak performance psychology, and growth philosophy — the operating system behind everything.",
        descriptionAr: "النماذج الذهنية، علم نفس الأداء العالي، وفلسفة النمو — نظام التشغيل وراء كل شيء.",
        descriptionFull: "Your mindset isn't just important — it IS the game. Before I ever step onto the court, write a line of code, or walk into a business meeting, the battle has already been won or lost inside my head. This is where I break down the mental models that separate the elite from the average: Stoic philosophy through a modern lens, the neuroscience of peak performance, the psychology of resilience, and the daily rituals that compound into extraordinary results. Every article here is a software update for your brain.",
        descriptionFullAr: "عقليتك ليست مهمة فحسب — هي اللعبة كلها. قبل أن أدخل الملعب أو أكتب سطر كود أو أخطو إلى اجتماع عمل، المعركة تكون قد حُسمت في رأسي. هنا أُفكّك النماذج الذهنية التي تفصل النخبة عن العاديين: الفلسفة الرواقية بعدسة حديثة، علم أعصاب الأداء العالي، سيكولوجية المرونة، والطقوس اليومية التي تتراكم لتصنع نتائج استثنائية. كل مقال هنا تحديث برمجي لعقلك.",
        includes: [
            "Mental Models & Frameworks",
            "Stoic Philosophy Applied",
            "Peak Performance Psychology",
            "Resilience & Anti-Fragility",
            "Daily Rituals & Habits"
        ],
        icon: "🧠",
        helixColor: "#8A2BE2",
        sortOrder: 2
    },
    {
        slug: "wellness",
        title: "Wellness",
        titleAr: "العافية",
        description: "Physical health, nutrition science, recovery protocols, and longevity — the athlete's body as a laboratory.",
        descriptionAr: "الصحة البدنية، علم التغذية، بروتوكولات التعافي، وطول العمر — جسد الرياضي كمختبر.",
        descriptionFull: "My body is my first business, my primary technology, and my longest investment. As a professional athlete, I don't have the luxury of guessing — every meal, sleep cycle, and recovery session is engineered. This section covers evidence-based nutrition, the science of sleep optimization, injury recovery protocols I've lived through, cold plunge and sauna data, supplementation that actually works, and the daily rhythms that keep a 6'4\" athlete performing at elite levels decade after decade.",
        descriptionFullAr: "جسدي هو عملي الأول، وتقنيتي الأساسية، واستثماري الأطول أمدًا. كرياضي محترف، لا أملك رفاهية التخمين — كل وجبة ودورة نوم وجلسة تعافٍ مُهندسة بدقة. هذا القسم يغطي التغذية المبنية على أدلة، وعلم تحسين النوم، وبروتوكولات التعافي من الإصابات التي عشتُها، وبيانات الغطس البارد والساونا، والمكمّلات التي تعمل فعلًا.",
        includes: [
            "Evidence-Based Nutrition",
            "Sleep & Recovery Science",
            "Injury Rehabilitation",
            "Longevity & Biohacking",
            "Athlete Training Protocols"
        ],
        icon: "💪",
        helixColor: "#00FF7F",
        sortOrder: 3
    },
    {
        slug: "lifestyle",
        title: "Lifestyle",
        titleAr: "نمط الحياة",
        description: "Daily rituals, personal style, travel, and curated living — designing life with the same precision as code.",
        descriptionAr: "الطقوس اليومية، الأسلوب الشخصي، السفر، والحياة المنسّقة — تصميم الحياة بنفس دقة البرمجة.",
        descriptionFull: "I design my life the way I design my code — with intention, architecture, and zero wasted cycles. This section is the intersection of aesthetic and function: how to build a daily operating system that balances athletic discipline with creative exploration, the art of curating your environment (from your desk setup to your travel kit), and what it means to live between Qatar, Europe, and everywhere in between. Every lifestyle choice is a design decision.",
        descriptionFullAr: "أُصمّم حياتي كما أُصمّم الكود — بنيّة واضحة، هندسة معمارية، وصفر دورات ضائعة. هذا القسم هو تقاطع الجمال والوظيفة: كيف تبني نظام تشغيل يومي يوازن بين انضباط الرياضي واستكشاف المبدع، وفنّ تنسيق بيئتك (من إعداد مكتبك إلى حقيبة سفرك)، ومعنى أن تعيش بين قطر وأوروبا والعالم بأسره. كل خيار في نمط الحياة هو قرار تصميم.",
        includes: [
            "Daily Operating Systems",
            "Travel & Global Living",
            "Environment Design",
            "Personal Style & Aesthetics",
            "Work-Life Architecture"
        ],
        icon: "✨",
        helixColor: "#FF69B4",
        sortOrder: 4
    },
    {
        slug: "arts",
        title: "Arts",
        titleAr: "الفنون",
        description: "Creative expression, visual arts, music appreciation, and culture — the soul behind the machine.",
        descriptionAr: "التعبير الإبداعي، الفنون البصرية، تذوّق الموسيقى، والثقافة — الروح خلف الآلة.",
        descriptionFull: "Behind every 3D planet I build, behind every play I execute, behind every business I launch — there's an artist who sees the world in color, rhythm, and story. This section explores the creative dimension: from analyzing masterpieces that changed how I think, to the intersection of technology and art (generative AI, procedural design, creative coding), to the music that soundtracks my life. Art isn't decoration — it's the lens through which everything else gains meaning.",
        descriptionFullAr: "وراء كل كوكب ثلاثي الأبعاد أبنيه، وراء كل خطة ألعب أنفّذها، وراء كل عمل أُطلقه — هناك فنان يرى العالم بالألوان والإيقاع والقصة. هذا القسم يستكشف البُعد الإبداعي: من تحليل الروائع التي غيّرت طريقة تفكيري، إلى تقاطع التكنولوجيا والفن (الذكاء الاصطناعي التوليدي، التصميم الإجرائي، البرمجة الإبداعية)، إلى الموسيقى التي تُشكّل الخلفية الصوتية لحياتي.",
        includes: [
            "Visual Arts & Analysis",
            "Creative Coding & Generative Art",
            "Music & Soundtrack of Life",
            "Film, TV & Storytelling",
            "Cultural Commentary"
        ],
        icon: "🎨",
        helixColor: "#FF1493",
        sortOrder: 5
    },
    {
        slug: "reads",
        title: "Reads",
        titleAr: "القراءات",
        description: "Book reviews, intellectual deep-dives, and knowledge distillation — compressing decades into pages.",
        descriptionAr: "مراجعات الكتب، الغوص الفكري العميق، وتقطير المعرفة — ضغط عقود في صفحات.",
        descriptionFull: "I consume books the way athletes consume protein — systematically, aggressively, and with intent to convert knowledge into performance. This isn't a Goodreads list. Every review here is a complete extraction: the three ideas that matter most, how they connect to my world (sports, tech, business), and the specific actions I took after reading. From Arabic philosophical classics to modern neuroscience, from Stoic meditations to startup playbooks — this is knowledge, pressure-tested by a life that demands results.",
        descriptionFullAr: "أستهلك الكتب كما يستهلك الرياضيون البروتين — بشكل منهجي وعنيف وبنيّة تحويل المعرفة إلى أداء. هذه ليست قائمة قراءات عادية. كل مراجعة هنا هي استخلاص كامل: الأفكار الثلاث الأهم، وكيف ترتبط بعالمي (الرياضة، التقنية، الأعمال)، والإجراءات المحددة التي اتخذتُها بعد القراءة. من كلاسيكيات الفلسفة العربية إلى علم الأعصاب الحديث، ومن التأملات الرواقية إلى أدلة الشركات الناشئة.",
        includes: [
            "Book Reviews & Extractions",
            "Arabic Literature & Philosophy",
            "Business & Strategy Books",
            "Science & Psychology",
            "Knowledge Systems & Note-Taking"
        ],
        icon: "📚",
        helixColor: "#4169E1",
        sortOrder: 6
    },
    {
        slug: "voices",
        title: "Voices",
        titleAr: "الأصوات",
        description: "Interviews, podcasts, public speaking, and influential dialogues — amplifying ideas that matter.",
        descriptionAr: "المقابلات، البودكاست، الخطابة، والحوارات المؤثرة — تضخيم الأفكار التي تهمّ.",
        descriptionFull: "Some ideas are too big for a page — they need a voice, a conversation, a stage. This section captures the dialogues that shape my thinking: podcast breakdowns of conversations that blew my mind, lessons from public speaking (from locker room speeches to tech demos), interview techniques I've refined, and analyses of the world's greatest communicators. Whether I'm dissecting a TED talk or sharing what I learned addressing a room of investors, this is where spoken word meets written depth.",
        descriptionFullAr: "بعض الأفكار أكبر من أن تُحتوى في صفحة — تحتاج صوتًا، ومحادثة، ومنصّة. هذا القسم يلتقط الحوارات التي تُشكّل تفكيري: تحليلات بودكاست لمحادثات فجّرت ذهني، ودروس من الخطابة العامة (من خطابات غرفة تبديل الملابس إلى العروض التقنية)، وتقنيات المقابلات التي صقلتُها، وتحليلات لأعظم المتحدثين في العالم.",
        includes: [
            "Podcast Breakdowns",
            "Public Speaking Craft",
            "Interview Technique",
            "Communication Analysis",
            "Dialogue & Debate"
        ],
        icon: "🎙️",
        helixColor: "#FF6347",
        sortOrder: 7
    },
    {
        slug: "culinary",
        title: "Culinary",
        titleAr: "الطهي",
        description: "Gastronomy, food culture, recipes, and culinary adventures — fuel meets art meets culture.",
        descriptionAr: "فن الطهي، ثقافة الطعام، الوصفات، والمغامرات الغذائية — حيث يلتقي الوقود بالفن بالثقافة.",
        descriptionFull: "For an athlete, food is fuel. For a traveler, food is culture. For me, it's both — and a deep fascination I can't shake. Living in Qatar gives me access to one of the most diverse food scenes on Earth: from traditional Machboos to Japanese omakase, from Lebanese street food to Michelin-starred innovation. This section is part restaurant review, part cultural exploration, part performance nutrition — always through the lens of someone who treats every meal as both art and engineering.",
        descriptionFullAr: "للرياضي، الطعام وقود. للمسافر، الطعام ثقافة. بالنسبة لي، هو الاثنان — وشغف عميق لا أستطيع التخلّص منه. العيش في قطر يمنحني وصولًا إلى واحدة من أكثر مشاهد الطعام تنوعًا على وجه الأرض: من المجبوس التقليدي إلى الأوماكاسي الياباني، ومن طعام الشارع اللبناني إلى الابتكار الحاصل على نجوم ميشلان.",
        includes: [
            "Restaurant Reviews & Discovery",
            "Performance Nutrition",
            "Qatari & Middle Eastern Cuisine",
            "Global Food Adventures",
            "Cooking as Craft"
        ],
        icon: "🍽️",
        helixColor: "#FFA07A",
        sortOrder: 8
    },
    {
        slug: "tech-unboxing",
        title: "Tech Unboxing",
        titleAr: "فتح صندوق التكنولوجيا",
        description: "Gadget reviews, hardware teardowns, and bleeding-edge tech analysis — tested by a developer who builds with it.",
        descriptionAr: "مراجعات الأجهزة، تفكيك العتاد، وتحليل التكنولوجيا المتقدمة — مُختبرة من مطوّر يبني بها.",
        descriptionFull: "I don't just unbox tech — I stress-test it against real-world demands. As someone who codes immersive 3D experiences with React Three Fiber and Three.js, I need hardware that performs under pressure. Every review here comes from someone who pushes devices to their limits: laptops benchmarked against webpack builds and Blender renders, phones tested across continents, audio gear evaluated in both the gym and the studio. This is tech reviewed by a builder, not a spectator.",
        descriptionFullAr: "أنا لا أفتح صناديق التكنولوجيا فحسب — أختبرها تحت الضغط الحقيقي. كشخص يبرمج تجارب ثلاثية الأبعاد غامرة باستخدام React Three Fiber و Three.js، أحتاج عتادًا يؤدّي تحت الضغط. كل مراجعة هنا تأتي من شخص يدفع الأجهزة إلى أقصى حدودها: حواسيب مقاسة ضد بناء webpack وعروض Blender، وهواتف مُختبرة عبر القارات.",
        includes: [
            "Hardware Reviews & Benchmarks",
            "Developer Workstation Builds",
            "Mobile & Wearable Tech",
            "Audio & Studio Gear",
            "Emerging Tech & Gadgets"
        ],
        icon: "📦",
        helixColor: "#00CED1",
        sortOrder: 9
    },
    {
        slug: "gaming",
        title: "Gaming",
        titleAr: "الألعاب",
        description: "Competitive gaming, game reviews, esports analysis, and interactive entertainment — where competition never sleeps.",
        descriptionAr: "الألعاب التنافسية، مراجعات الألعاب، تحليل الرياضات الإلكترونية، والترفيه التفاعلي — حيث لا تنام المنافسة أبدًا.",
        descriptionFull: "Competition doesn't stop when I leave the basketball court — it continues on the digital field. Gaming is where my competitive instinct, strategic thinking, and technical knowledge converge. From deep-dive game reviews that analyze mechanics with the same rigor I apply to basketball film study, to esports industry analysis, to the technology behind next-gen graphics (which directly connects to my Three.js work). This is gaming analyzed by a competitor and built by an engineer.",
        descriptionFullAr: "المنافسة لا تتوقف عندما أغادر ملعب كرة السلة — تستمر في الميدان الرقمي. الألعاب هي حيث تتلاقى غريزتي التنافسية وتفكيري الاستراتيجي ومعرفتي التقنية. من المراجعات العميقة التي تحلّل الميكانيكيات بنفس الصرامة التي أطبّقها في دراسة أفلام كرة السلة، إلى تحليل صناعة الرياضات الإلكترونية، إلى التقنية وراء رسومات الجيل القادم.",
        includes: [
            "Game Reviews & Deep Analysis",
            "Esports & Competitive Scene",
            "Gaming Hardware & Performance",
            "Game Design & Mechanics",
            "Industry News & Commentary"
        ],
        icon: "🎮",
        helixColor: "#7B68EE",
        sortOrder: 10
    }
];
const CATEGORY_MAP = new Map(VISION_CATEGORIES.map((c)=>[
        c.slug,
        c
    ]));
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Blog Index — /blog
 *
 * Server Component. Displays all categories and latest posts.
 */ __turbopack_context__.s([
    "default",
    ()=>BlogIndexPage,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogQueries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blogQueries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/visionCategories.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const revalidate = 60;
function generateMetadata() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBlogIndexMetadata"])();
}
async function BlogIndexPage() {
    let categories;
    let latestPosts;
    try {
        [categories, latestPosts] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogQueries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blogQueries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestPosts"])(6)
        ]);
    } catch  {
        // Sanity not configured — use static fallback
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StaticFallback, {}, void 0, false, {
            fileName: "[project]/src/app/blog/page.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "pt-20 pb-16 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-7xl font-black mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500",
                                children: "Vision Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg max-w-2xl mx-auto",
                            children: "Insights on sports, business, mindset, wellness, and more — powered by 15 AI personas through the lens of Mizo Amin."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${cat.slug}`,
                                className: "group p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all",
                                style: {
                                    borderColor: `${cat.helixColor}20`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl block mb-2",
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold group-hover:text-cyan-400 transition-colors",
                                        children: cat.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm mt-1",
                                        children: [
                                            cat.postCount,
                                            " ",
                                            cat.postCount === 1 ? "article" : "articles"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat._id, true, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            latestPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: "Latest Articles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: latestPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${post.category.slug}/${post.slug}`,
                                className: "group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all",
                                children: [
                                    post.coverImage?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-48 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: post.coverImage.url,
                                            alt: post.coverImage.alt ?? post.title,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: post.category.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium",
                                                        style: {
                                                            color: post.category.helixColor
                                                        },
                                                        children: post.category.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs text-gray-500 mt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                        children: new Date(post.publishedAt).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    post.aiPersona && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full",
                                                                style: {
                                                                    backgroundColor: post.aiPersona.signatureColor
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 25
                                                            }, this),
                                                            post.aiPersona.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, post._id, true, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 pb-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-block px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors font-medium",
                    children: "← Return to Mizo Universe"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function StaticFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "pt-20 pb-16 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-black mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500",
                            children: "Vision Blog"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg max-w-2xl mx-auto",
                        children: "Coming soon — connect Sanity CMS to activate the blog engine."
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl border border-white/10 bg-white/[0.02] opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl block mb-2",
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold",
                                        children: cat.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm mt-1",
                                        children: "0 articles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.slug, true, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 pb-20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-block px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors font-medium",
                    children: "← Return to Mizo Universe"
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb91b78a._.js.map