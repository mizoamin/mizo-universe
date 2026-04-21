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
    }`)}async function l(){return(0,b.sanityFetch)('*[_type == "category"]{ "slug": slug.current }.slug')}a.s(["getAllCategorySlugs",()=>l,"getAllPostSlugs",()=>k,"getCategories",()=>i,"getCategoryBySlug",()=>j,"getLatestPosts",()=>g,"getPostBySlug",()=>e,"getPostsByCategory",()=>f,"getPostsByCategorySlugs",()=>h])},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},71029,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},53963,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/StatPulse.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/StatPulse.tsx <module evaluation>","default")},67006,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/StatPulse.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/StatPulse.tsx","default")},91091,a=>{"use strict";a.i(53963);var b=a.i(67006);a.n(b)},65707,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/ThoughtStream.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/ThoughtStream.tsx <module evaluation>","default")},5545,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/components/ui/widgets/ThoughtStream.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/ui/widgets/ThoughtStream.tsx","default")},14641,a=>{"use strict";a.i(65707);var b=a.i(5545);a.n(b)},68386,a=>{"use strict";var b=a.i(7997),c=a.i(42382),d=a.i(14641),e=a.i(91091);let f=(0,a.i(31960).buildPlanetMetadata)("legacy"),g=[{label:"Debut Age",value:"4",sublabel:"Youngest in Qatar History"},{label:"National Team",value:"2017",sublabel:"Top Gulf 3PT Shooter"},{label:"Club Legacy",value:"Al Shamal",sublabel:"Captain & Leader"},{label:"7th Asian",value:"Shooter",sublabel:"Continental Recognition"}],h=[{text:"Legacy isn't what you build for yourself. It's the foundation you leave for those who come after you.",textAr:"الإرث ليس ما تبنيه لنفسك. إنه الأساس الذي تتركه لمن يأتي بعدك.",source:"Mizo Amin"},{text:"My father taught me that the court doesn't care about your name — only your discipline. That's the Amin coaching DNA.",textAr:"علّمني أبي أن الملعب لا يهتم باسمك — فقط بانضباطك. هذا هو الحمض النووي لعائلة أمين في التدريب.",source:"Mizo Amin"},{text:"Every trophy in this archive was paid for in hours nobody saw — early mornings, late nights, and the quiet war against mediocrity.",textAr:"كل كأس في هذا الأرشيف دُفع ثمنه بساعات لم يرها أحد — صباحات مبكرة، ليالٍ متأخرة، والحرب الهادئة ضد الاعتيادية.",source:"Mizo Amin"}];function i(){return(0,b.jsxs)(c.default,{planetId:"legacy",children:[(0,b.jsx)(e.default,{stats:g,accentColor:"#ffaa00",title:"Heritage Timeline"}),(0,b.jsx)("div",{className:"mt-16",children:(0,b.jsx)(d.default,{thoughts:h,accentColor:"#ffaa00",title:"The Amin Dynasty"})})]})}a.s(["default",()=>i,"metadata",0,f])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__975f0890._.js.map