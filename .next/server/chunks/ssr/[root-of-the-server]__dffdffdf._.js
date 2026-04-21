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
    }`)}async function l(){return(0,b.sanityFetch)('*[_type == "category"]{ "slug": slug.current }.slug')}a.s(["getAllCategorySlugs",()=>l,"getAllPostSlugs",()=>k,"getCategories",()=>i,"getCategoryBySlug",()=>j,"getLatestPosts",()=>g,"getPostBySlug",()=>e,"getPostsByCategory",()=>f,"getPostsByCategorySlugs",()=>h])},57082,a=>{"use strict";let b=process.env.NEXT_PUBLIC_SITE_URL??"https://mizoamin.com",c="Mizo Universe",d="Mizo Amin",e=`${b}/images/og-default.jpg`;function f(a){let f=a.seo?.metaTitle??`${a.title} | ${c}`,g=a.seo?.metaDescription??a.excerpt.slice(0,160),h=a.seo?.canonicalUrl??`${b}/blog/${a.categorySlug}/${a.slug}`,i=a.seo?.ogImageUrl??a.coverImageUrl??e;return{title:f,description:g,keywords:[a.seo?.focusKeyword,a.categoryTitle,...a.tags??[],d].filter(Boolean),authors:[{name:d,url:b}],creator:d,publisher:c,alternates:{canonical:h},openGraph:{type:"article",title:f,description:g,url:h,siteName:c,images:[{url:i,width:1200,height:630,alt:a.title}],publishedTime:a.publishedAt,modifiedTime:a.modifiedAt??a.publishedAt,authors:[d],tags:a.tags,locale:"en_US"},twitter:{card:"summary_large_image",title:f,description:g,images:[i],creator:"@mizoamin"},robots:a.seo?.noIndex?{index:!1,follow:!1}:{index:!0,follow:!0,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}}function g(a){let f=a.seo?.canonicalUrl??`${b}/blog/${a.categorySlug}/${a.slug}`,g=a.seo?.ogImageUrl??a.coverImageUrl??e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:a.title,name:a.title,description:a.seo?.metaDescription??a.excerpt.slice(0,160),url:f,image:{"@type":"ImageObject",url:g,width:1200,height:630},datePublished:a.publishedAt,dateModified:a.modifiedAt??a.publishedAt,author:{"@type":"Person",name:d,url:b,jobTitle:"Professional Basketball Player, Tech Expert & Businessman",sameAs:["https://www.instagram.com/mizoamin","https://www.linkedin.com/in/mizoamin","https://x.com/mizoamin"]},publisher:{"@type":"Organization",name:c,url:b,logo:{"@type":"ImageObject",url:`${b}/images/logo.png`}},mainEntityOfPage:{"@type":"WebPage","@id":f},articleSection:a.categoryTitle,keywords:[a.seo?.focusKeyword,...a.tags??[]].filter(Boolean).join(", "),wordCount:a.wordCount,timeRequired:a.readingTimeMinutes?`PT${a.readingTimeMinutes}M`:void 0,inLanguage:"en",...a.personaName&&{about:{"@type":"Thing",name:`AI Perspective: ${a.personaName}`}}}}function h(a){let f=`${a.icon} ${a.title} — Blog | ${c}`,g=`${a.description} Explore ${a.title.toLowerCase()} articles by ${d}.`,h=`${b}/blog/${a.slug}`;return{title:f,description:g,alternates:{canonical:h},openGraph:{type:"website",title:f,description:g,url:h,siteName:c,images:[{url:e,width:1200,height:630}],locale:"en_US"},twitter:{card:"summary_large_image",title:f,description:g,images:[e]},robots:{index:!0,follow:!0,"max-image-preview":"large","max-snippet":-1}}}function i(){let a=`Blog — ${c}`,f=`Explore articles on sports, business, mindset, wellness, tech, and more by ${d} — Professional Basketball Player, Tech Expert & Businessman.`;return{title:a,description:f,alternates:{canonical:`${b}/blog`},openGraph:{type:"website",title:a,description:f,url:`${b}/blog`,siteName:c,images:[{url:e,width:1200,height:630}]},twitter:{card:"summary_large_image",title:a,description:f}}}a.s(["generateBlogIndexMetadata",()=>i,"generateBlogJsonLd",()=>g,"generateCategoryMetadata",()=>h,"generatePostMetadata",()=>f])},87393,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/blog/[category]/[slug]/BlogPostClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/blog/[category]/[slug]/BlogPostClient.tsx <module evaluation>","default")},20927,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/blog/[category]/[slug]/BlogPostClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/blog/[category]/[slug]/BlogPostClient.tsx","default")},45936,a=>{"use strict";a.i(87393);var b=a.i(20927);a.n(b)},74395,a=>{"use strict";var b=a.i(7997);a.i(70396);var c=a.i(73727),d=a.i(25251),e=a.i(57082),f=a.i(45936);async function g(){try{return(await (0,d.getAllPostSlugs)()).map(a=>({category:a.categorySlug,slug:a.postSlug}))}catch{return[]}}async function h({params:a}){let{category:b,slug:c}=await a;try{let a=await (0,d.getPostBySlug)(b,c);if(!a)return{title:"Post Not Found"};let f={title:a.title,titleAr:a.titleAr,slug:a.slug,excerpt:a.excerpt??"",categorySlug:a.category.slug,categoryTitle:a.category.title,personaName:a.aiPersona?.name,coverImageUrl:a.coverImage?.url,publishedAt:a.publishedAt,tags:a.tags,seo:{metaTitle:a.seo?.metaTitle,metaDescription:a.seo?.metaDescription,focusKeyword:a.seo?.focusKeyword,canonicalUrl:a.seo?.canonicalUrl,noIndex:a.seo?.noIndex,ogImageUrl:a.seo?.ogImage?.url}};return(0,e.generatePostMetadata)(f)}catch{return{title:"Blog | Mizo Universe"}}}async function i({params:a}){let g,{category:h,slug:i}=await a;try{g=await (0,d.getPostBySlug)(h,i)}catch{return(0,b.jsx)(j,{category:h,slug:i})}g||(0,c.notFound)();let{wordCount:k,minutes:l}=function(a){let b=0;for(let c of a)if("block"===c._type&&Array.isArray(c.children))for(let a of c.children)"string"==typeof a.text&&(b+=a.text.split(/\s+/).filter(Boolean).length);return{wordCount:b,minutes:Math.max(1,Math.ceil(b/238))}}(g.body??[]),m=(0,e.generateBlogJsonLd)({title:g.title,slug:g.slug,excerpt:g.excerpt??"",categorySlug:g.category.slug,categoryTitle:g.category.title,personaName:g.aiPersona?.name,coverImageUrl:g.coverImage?.url,publishedAt:g.publishedAt,tags:g.tags,seo:{metaTitle:g.seo?.metaTitle,metaDescription:g.seo?.metaDescription,focusKeyword:g.seo?.focusKeyword,canonicalUrl:g.seo?.canonicalUrl,ogImageUrl:g.seo?.ogImage?.url},wordCount:k,readingTimeMinutes:l});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}}),(0,b.jsx)(f.default,{post:{title:g.title,titleAr:g.titleAr,body:g.body,publishedAt:g.publishedAt,tags:g.tags??[],coverImageUrl:g.coverImage?.url,coverImageAlt:g.coverImage?.alt,categoryTitle:g.category.title,categorySlug:g.category.slug,categoryIcon:g.category.icon,categoryColor:g.category.helixColor,personaName:g.aiPersona?.name,personaSlug:g.aiPersona?.slug,personaTone:g.aiPersona?.tone,personaColor:g.aiPersona?.signatureColor,personaPulse:g.aiPersona?.pulsePattern,readingTime:l,wordCount:k}})]})}function j({category:a,slug:c}){return(0,b.jsx)("div",{className:"min-h-screen bg-[#050505] text-white flex items-center justify-center",children:(0,b.jsxs)("div",{className:"max-w-2xl text-center space-y-6",children:[(0,b.jsx)("div",{className:"text-6xl",children:"📝"}),(0,b.jsx)("h1",{className:"text-4xl font-black",children:"Blog Post"}),(0,b.jsxs)("p",{className:"text-gray-400 text-lg",children:[(0,b.jsx)("span",{className:"text-cyan-400",children:a})," / ",(0,b.jsx)("span",{className:"text-cyan-400",children:c})]}),(0,b.jsxs)("p",{className:"text-gray-500",children:["Connect Sanity CMS to see live content. Configure"," ",(0,b.jsx)("code",{className:"text-cyan-300",children:"NEXT_PUBLIC_SANITY_PROJECT_ID"})," ","in your environment."]})]})})}a.s(["default",()=>i,"generateMetadata",()=>h,"generateStaticParams",()=>g,"revalidate",0,60])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__dffdffdf._.js.map