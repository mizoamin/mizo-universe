module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},50645,a=>{a.n(a.i(27572))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},58388,a=>{"use strict";let b=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID??"",c=process.env.NEXT_PUBLIC_SANITY_DATASET??"production",d="2024-01-01",e=process.env.SANITY_API_TOKEN??"",f=`https://${b}.apicdn.sanity.io/v${d}/data/query/${c}`,g=`https://${b}.api.sanity.io/v${d}/data/mutate/${c}`;async function h(a,b={},c={}){let{useCdn:d=!0,signal:g}=c,i=new URL(d?f:f.replace("apicdn","api"));for(let[c,d]of(i.searchParams.set("query",a),Object.entries(b)))i.searchParams.set(`$${c}`,JSON.stringify(d));let j={};e&&(j.Authorization=`Bearer ${e}`);let k=await fetch(i.toString(),{headers:j,signal:g,next:{revalidate:60}});if(!k.ok)throw Error(`Sanity query failed: ${k.status} ${k.statusText}`);return(await k.json()).result}async function i(a){if(!e)throw Error("SANITY_API_TOKEN is required for mutations");let b=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({mutations:a})});if(!b.ok){let a=await b.text();throw Error(`Sanity mutation failed: ${b.status} — ${a}`)}let c=await b.json();return{transactionId:c.transactionId,documentId:c.results?.[0]?.id}}function j(a){let b=a.split("\n").filter(a=>a.trim()),c=[],d=0,e=()=>`block-${d++}`,f=()=>`span-${d++}`;for(let a of b){let b=a.trim(),d="normal",g=b;b.startsWith("#### ")?(d="h4",g=b.slice(5)):b.startsWith("### ")?(d="h3",g=b.slice(4)):b.startsWith("## ")?(d="h2",g=b.slice(3)):b.startsWith("# ")?(d="h1",g=b.slice(2)):b.startsWith("> ")&&(d="blockquote",g=b.slice(2));let h=[],i=[];for(let a of g.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g)){if(!a)continue;let b=a.match(/^\*\*(.+)\*\*$/),c=a.match(/^\*([^*]+)\*$/),d=a.match(/^\[(.+)\]\((.+)\)$/);if(b)h.push({_type:"span",_key:f(),text:b[1],marks:["strong"]});else if(c)h.push({_type:"span",_key:f(),text:c[1],marks:["em"]});else if(d){let a=f();i.push({_type:"link",_key:a,href:d[2]}),h.push({_type:"span",_key:f(),text:d[1],marks:[a]})}else h.push({_type:"span",_key:f(),text:a})}0===h.length&&h.push({_type:"span",_key:f(),text:g}),c.push({_type:"block",_key:e(),style:d,children:h,markDefs:i.length>0?i:void 0})}return c}a.s(["sanityFetch",()=>h,"sanityMutate",()=>i,"textToPortableText",()=>j])},25251,a=>{"use strict";var b=a.i(58388);let c=`{
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
}`,d=`{
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
}`;async function e(a,d){return(0,b.sanityFetch)(`*[_type == "post" && slug.current == $postSlug && category->slug.current == $categorySlug && !(_id in path("drafts.**"))][0]${c}`,{postSlug:d,categorySlug:a})}async function f(a,d=1,e=12){let g=(d-1)*e,[h,i]=await Promise.all([(0,b.sanityFetch)(`*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))] | order(publishedAt desc) [$start...$end]${c}`,{categorySlug:a,start:g,end:g+e}),(0,b.sanityFetch)('count(*[_type == "post" && category->slug.current == $categorySlug && !(_id in path("drafts.**"))])',{categorySlug:a})]);return{posts:h,total:i}}async function g(a=12){return(0,b.sanityFetch)(`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${c}`,{limit:a})}async function h(a,d=6){return 0===a.length?[]:(0,b.sanityFetch)(`*[_type == "post" && category->slug.current in $categorySlugs && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...$limit]${c}`,{categorySlugs:a,limit:d})}async function i(){return(0,b.sanityFetch)(`*[_type == "category"] | order(sortOrder asc)${d}`)}async function j(a){return(0,b.sanityFetch)(`*[_type == "category" && slug.current == $slug][0]${d}`,{slug:a})}async function k(){return(0,b.sanityFetch)(`*[_type == "post" && !(_id in path("drafts.**"))]{
      "postSlug": slug.current,
      "categorySlug": category->slug.current
    }`)}async function l(){return(0,b.sanityFetch)('*[_type == "category"]{ "slug": slug.current }.slug')}a.s(["getAllCategorySlugs",()=>l,"getAllPostSlugs",()=>k,"getCategories",()=>i,"getCategoryBySlug",()=>j,"getLatestPosts",()=>g,"getPostBySlug",()=>e,"getPostsByCategory",()=>f,"getPostsByCategorySlugs",()=>h])},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},71029,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},63396,a=>{"use strict";let b=process.env.NEXT_PUBLIC_ASSET_ROOT??"https://mizoamin.com/wp-content/uploads/mizo_final_assets/mizo_production_assets";function c(a){let c=a.replace(/^\/+/,"");if(c.includes(".."))throw Error(`Invalid asset path: "${a}". Path traversal is not allowed.`);let d=b.replace(/\/+$/,"");return`${d}/${c}`}a.s(["getAssetUrl",()=>c])},38004,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/SmartCinemaGrid.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/SmartCinemaGrid.tsx <module evaluation>","default")},47026,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/SmartCinemaGrid.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/SmartCinemaGrid.tsx","default")},41790,a=>{"use strict";a.i(38004);var b=a.i(47026);a.n(b)},27836,a=>{"use strict";var b=a.i(7997),c=a.i(42382),d=a.i(41790);a.i(63396);let e=[{id:"fiba-asia-2015-showcase",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_FIBA2015",startTime:0,title_EN:"FIBA Asia 2015 Showcase: A Qatari Hoops Highlight",title_AR:"عرض FIBA آسيا 2015: أبرز لحظات كرة السلة القطرية",ai_summary:"Mizo Amin's standout performance at the 2015 FIBA Asia Championship, showcasing elite court vision and defensive intensity.",source:"youtube",category:"Match Highlight",year:"2015"},{id:"fiba-asia-championship-highlights",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_FIBACHAMP",startTime:15,title_EN:"FIBA Asia Championship Highlights",title_AR:"أبرز لحظات بطولة FIBA آسيا",ai_summary:"Comprehensive highlight reel from multiple FIBA Asia Championship appearances — fast breaks, clutch shots, and team leadership moments.",source:"youtube",category:"Match Highlight",year:"2015"},{id:"u16-season-highlights",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_U16",startTime:0,title_EN:"U16 Season Highlights: The Making of a Champion",title_AR:"أبرز لحظات موسم تحت 16: صناعة بطل",ai_summary:"Early career footage from the U16 national team season — raw talent, explosive athleticism, and the foundation of a future captain.",source:"youtube",category:"Match Highlight",year:"2010"},{id:"wasl-season-game",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_WASL",startTime:30,title_EN:"WASL Season Game Highlights",title_AR:"أبرز لحظات مباراة الوصل",ai_summary:"Key plays from WASL league action — pick-and-roll execution, transition offense, and defensive stops.",source:"youtube",category:"Match Highlight",year:"2016"},{id:"asian-beach-games-haiyang",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_BEACH",startTime:0,title_EN:"Haiyang Highlights: 3rd Asian Beach Games",title_AR:"أبرز لحظات هاييانغ: ألعاب الشاطئ الآسيوية الثالثة",ai_summary:"3x3 basketball action at the 2012 Asian Beach Games in Haiyang, China — intensity under the sun.",source:"youtube",category:"Match Highlight",year:"2012"},{id:"asian-games-qatar-vs-hongkong",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_ASIANGAMES",startTime:45,title_EN:"Asian Games: Qatar Defies Size to Conquer Hong Kong",title_AR:"الألعاب الآسيوية: قطر تتحدى الحجم وتهزم هونغ كونغ",ai_summary:"Underdog victory as Qatar's national team overcomes a larger Hong Kong squad with heart, hustle, and tactical brilliance.",source:"youtube",category:"Match Highlight",year:"2014"},{id:"fan-favorites-film-tv",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_FILMTV",startTime:0,title_EN:"Connecting Beyond the Court: Fan Favorites in Film & TV",title_AR:"التواصل خارج الملعب: المفضلات في السينما والتلفاز",ai_summary:"Off-court personality — Mizo shares his top film and TV picks, revealing the mindset behind the athlete.",source:"youtube",category:"Lifestyle",year:"2023"},{id:"netflix-vs-youtube-showdown",videoURL:"https://www.youtube.com/watch?v=PLACEHOLDER_NETFLIXYT",startTime:0,title_EN:"Screen Time Showdown: Netflix vs. YouTube",title_AR:"مواجهة وقت الشاشة: نتفليكس ضد يوتيوب",ai_summary:"A candid discussion about media consumption habits — streaming vs. creator content — from an athlete's perspective.",source:"youtube",category:"Lifestyle",year:"2023"},{id:"sample-mp4-training",videoURL:"videogram/training/court-session-01.mp4",startTime:10,title_EN:"Court Session: Pre-Game Warmup Routine",title_AR:"جلسة تدريب: روتين الإحماء قبل المباراة",ai_summary:"Behind-the-scenes look at the warm-up ritual — stretching, shooting drills, and mental preparation before tip-off.",source:"mp4",category:"Training",year:"2024"}],f=(0,a.i(31960).buildPlanetMetadata)("videogram");function g(){let a=[...new Set(e.map(a=>a.category))];return(0,b.jsxs)(c.default,{planetId:"videogram",children:[(0,b.jsxs)("div",{className:"mb-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden relative",children:[(0,b.jsx)("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(192,192,192,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(192,192,192,0.1),transparent_45%)]"}),(0,b.jsxs)("div",{className:"relative z-10",children:[(0,b.jsx)("p",{className:"text-xs uppercase tracking-[4px] text-gray-400 mb-3",children:"Time-Stamp Engine Active"}),(0,b.jsx)("h2",{className:"text-2xl md:text-4xl font-black uppercase tracking-tight mb-4",children:"Smart Cinematic Archive"}),(0,b.jsx)("p",{className:"text-gray-300 max-w-3xl leading-relaxed",children:"Hybrid Video System online. Every entry carries start-time precision, bilingual metadata, and AI-generated summaries. YouTube embeds and direct CDN assets are auto-detected and rendered with the appropriate player. Expand the archive by adding entries to the registry."})]})]}),(0,b.jsx)(d.default,{entries:e,categories:a,accentColor:"#c0c0c0"})]})}a.s(["default",()=>g,"metadata",0,f],27836)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2bdd971e._.js.map