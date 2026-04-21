(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Global asset and network constants.
 * Single source of truth — change ASSET_ROOT here to reroute all assets.
 */ __turbopack_context__.s([
    "ASSET_ROOT",
    ()=>ASSET_ROOT,
    "MANIFEST_URL",
    ()=>MANIFEST_URL
]);
const ASSET_ROOT = "https://mizoamin.com/wp-content/uploads/mizo_final_assets/mizo_production_assets/";
const MANIFEST_URL = `${ASSET_ROOT}assets_manifest_v8.json`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/resolvers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterManifest",
    ()=>filterManifest,
    "filterManifestByTags",
    ()=>filterManifestByTags,
    "filterManifestByYear",
    ()=>filterManifestByYear,
    "resolveAssetUrl",
    ()=>resolveAssetUrl
]);
/**
 * Manifest resolver utilities.
 *
 * The live manifest at MANIFEST_URL is a flat object keyed by filename.
 * Each value has a `path` (Google Drive path) and a `data` block with
 * rich metadata. We extract the relative segment after `mizo_production_assets/`
 * and prepend ASSET_ROOT to build a public Hostinger URL.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
function resolveAssetUrl(manifestPath) {
    const marker = "mizo_production_assets/";
    const idx = manifestPath.indexOf(marker);
    const rel = idx !== -1 ? manifestPath.slice(idx + marker.length) : manifestPath;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_ROOT"] + rel;
}
function filterManifest(manifest, pathTokens, limit) {
    const results = [];
    for (const [filename, entry] of Object.entries(manifest)){
        if (limit !== undefined && results.length >= limit) break;
        const rawPath = entry.path ?? "";
        const marker = "mizo_production_assets/";
        if (!rawPath.includes(marker)) continue;
        const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
        const relLower = rel.toLowerCase();
        if (pathTokens.some((token)=>relLower.includes(token))) {
            const d = entry.data;
            results.push({
                id: filename,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_ROOT"] + rel,
                year: d.Year ?? "",
                title: d.Title ?? filename,
                location: d.City ?? d.Location ?? "Qatar",
                caption: d.Caption ?? d.Title ?? ""
            });
        }
    }
    return results;
}
function filterManifestByYear(manifest, pathTokens, years, limit) {
    const results = [];
    for (const [filename, entry] of Object.entries(manifest)){
        if (limit !== undefined && results.length >= limit) break;
        const rawPath = entry.path ?? "";
        const marker = "mizo_production_assets/";
        if (!rawPath.includes(marker)) continue;
        const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
        const relLower = rel.toLowerCase();
        const d = entry.data;
        if (pathTokens.some((token)=>relLower.includes(token)) && years.includes(d.Year ?? "")) {
            results.push({
                id: filename,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_ROOT"] + rel,
                year: d.Year ?? "",
                title: d.Title ?? filename,
                location: d.City ?? d.Location ?? "Qatar",
                caption: d.Caption ?? d.Title ?? ""
            });
        }
    }
    return results;
}
function filterManifestByTags(manifest, tags, years, limit) {
    const results = [];
    const tagsLower = tags.map((t)=>t.toLowerCase());
    for (const [filename, entry] of Object.entries(manifest)){
        if (limit !== undefined && results.length >= limit) break;
        const rawPath = entry.path ?? "";
        const marker = "mizo_production_assets/";
        if (!rawPath.includes(marker)) continue;
        const rel = rawPath.slice(rawPath.indexOf(marker) + marker.length);
        const d = entry.data;
        // Collect all tag-like fields into a single searchable array
        const allTags = [
            ...d.Tags ?? [],
            ...d.SEO_Tags ?? [],
            ...d.Keywords ?? []
        ].map((s)=>s.toLowerCase());
        const tagMatch = tagsLower.some((t)=>allTags.some((at)=>at.includes(t)));
        const yearMatch = years.includes(d.Year ?? "");
        if (tagMatch || yearMatch) {
            results.push({
                id: filename,
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSET_ROOT"] + rel,
                year: d.Year ?? "",
                title: d.Title ?? filename,
                location: d.City ?? d.Location ?? "Qatar",
                caption: d.Caption ?? d.Title ?? ""
            });
        }
    }
    return results;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/LibraryPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALBUM_CATEGORIES",
    ()=>ALBUM_CATEGORIES,
    "AURA",
    ()=>AURA,
    "CAROUSEL",
    ()=>CAROUSEL,
    "CLOUD_GALLERY",
    ()=>CLOUD_GALLERY,
    "DATA_CORE",
    ()=>DATA_CORE,
    "FOG",
    ()=>FOG,
    "FRAME_MATERIAL",
    ()=>FRAME_MATERIAL,
    "FRUSTUM_MARGIN",
    ()=>FRUSTUM_MARGIN,
    "LAZY_LOAD_BATCH",
    ()=>LAZY_LOAD_BATCH,
    "LIGHTING",
    ()=>LIGHTING,
    "LOD_CULL_RADIUS",
    ()=>LOD_CULL_RADIUS,
    "MAX_VISIBLE_FRAMES",
    ()=>MAX_VISIBLE_FRAMES,
    "PALETTE",
    ()=>PALETTE,
    "PANEL_SPRING",
    ()=>PANEL_SPRING,
    "SHELL_MATERIAL",
    ()=>SHELL_MATERIAL,
    "SPRING_PHYSICS",
    ()=>SPRING_PHYSICS,
    "TEXTURES",
    ()=>TEXTURES
]);
/**
 * LibraryPlanet — "Obsidian Knowledge" Skin & Material Configuration
 *
 * VISUAL CONCEPT — The Great Archive
 * ─────────────────────────────────────────────────────────────────
 * A deep obsidian translucent sphere housing a luminous Data Core —
 * thousands of glowing voxel-like particles floating within, evoking
 * the feeling of knowledge stored in crystalline memory. The shell
 * refracts an indigo-violet aura that pulses with the rhythm of
 * loaded images, as if the planet breathes with information.
 *
 * MATERIAL SCIENCE — Deep Obsidian (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   color: #020617           → Near-black with a blue undertone
 *   transmission: 0.7        → Semi-translucent — reveals inner Data Core
 *   roughness: 0.15          → Polished obsidian glass surface
 *   thickness: 3.0           → Deep refraction volume
 *   ior: 1.8                 → High refraction — sapphire-like bending
 *   clearcoat: 1.0           → Perfect clearcoat gloss layer
 *
 * DISPLAY ARCHITECTURE — Cloud Gallery
 * ─────────────────────────────────────────────────────────────────
 * 20,000+ images organized into Album Clusters that orbit the planet
 * as a Spherical Grid. On album click, images expand into a
 * Cylindrical Carousel surrounding the viewer. Frustum culling
 * ensures only visible frames consume GPU resources.
 *
 * TEXTURE PATHS
 * ─────────────────────────────────────────────────────────────────
 *   albedo: /textures/planets/library/default/albedo.jpg
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const PALETTE = {
    /** Deep obsidian — shell surface */ obsidian: "#020617",
    /** Rich indigo — primary accent, aura base */ indigo: "#4f46e5",
    /** Bright violet — emissive highlights, active states */ violet: "#7c3aed",
    /** Electric blue — rim light, secondary glow */ electricBlue: "#3b82f6",
    /** Cool white — key light, text highlights */ coolWhite: "#e0e7ff",
    /** Dim slate — UI overlay background */ slate: "#0f172a",
    /** Warm amber — category accent (Basketball) */ amber: "#f59e0b",
    /** Emerald — category accent (University) */ emerald: "#10b981",
    /** Rose — category accent (Personal) */ rose: "#f43f5e",
    /** Cyan — category accent (Business) */ cyan: "#06b6d4"
};
const TEXTURES = {
    /** Obsidian surface albedo — subtle surface detail */ albedo: "/textures/planets/library/default/albedo.jpg"
};
const SHELL_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#020617"),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1e1b4b"),
    emissiveIntensity: 0.3,
    // ── Transmission (translucent glass) ──
    transmission: 0.7,
    roughness: 0.15,
    thickness: 3.0,
    ior: 1.8,
    // ── Clearcoat (polished obsidian finish) ──
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    // ── Attenuation (indigo light absorption) ──
    attenuationColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#312e81"),
    attenuationDistance: 2.5,
    // ── Environment reflections ──
    envMapIntensity: 1.8
};
const DATA_CORE = {
    /** Number of voxel particles inside the shell */ particleCount: 2000,
    /** Radius of the spherical particle volume */ radius: 0.75,
    /** Base particle size */ size: 0.015,
    /** Emissive brightness range [min, max] */ brightnessRange: [
        0.3,
        1.0
    ],
    /** Rotation speed of the inner particle cloud (rad/s) */ rotationSpeed: 0.08,
    /** Pulse frequency — synced with aura (Hz) */ pulseHz: 0.3,
    /** Pulse amplitude for particle size modulation */ pulseAmplitude: 0.4,
    /** Base color for core particles */ color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#818cf8"),
    /** Secondary color for variety */ colorAlt: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#c084fc")
};
const AURA = {
    /** Base indigo-violet aura color */ color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#4f46e5"),
    /** Aura sphere radius */ radius: 1.35,
    /** Base opacity when idle */ idleOpacity: 0.04,
    /** Peak opacity when fully loaded */ peakOpacity: 0.12,
    /** Pulse frequency in Hz — pulses based on load count */ pulseHz: 0.4,
    /** Ambient point light intensity range */ lightIntensity: {
        idle: 4,
        peak: 10
    },
    /** Ambient point light distance */ lightDistance: 10
};
const ALBUM_CATEGORIES = [
    {
        id: "basketball",
        label: "Basketball Career",
        color: PALETTE.amber,
        pathTokens: [
            "legacy/basketball_career",
            "legacy/trophy_room",
            "legacy/national_pride"
        ],
        tags: [
            "basketball",
            "trophy",
            "champion",
            "mvp",
            "sports",
            "shooting",
            "award"
        ]
    },
    {
        id: "business",
        label: "Business & Marketing",
        color: PALETTE.cyan,
        pathTokens: [
            "ventures/",
            "business/",
            "marketing/"
        ],
        tags: [
            "business",
            "marketing",
            "brand",
            "entrepreneurship",
            "ventures",
            "startup"
        ]
    },
    {
        id: "university",
        label: "University Life",
        color: PALETTE.emerald,
        pathTokens: [
            "identity/education",
            "identity/university",
            "university/"
        ],
        tags: [
            "university",
            "education",
            "campus",
            "academic",
            "graduation",
            "college"
        ]
    },
    {
        id: "personal",
        label: "Personal Archive",
        color: PALETTE.rose,
        pathTokens: [
            "personal/",
            "family/",
            "travel/",
            "social/"
        ],
        tags: [
            "personal",
            "family",
            "travel",
            "social",
            "lifestyle",
            "portrait"
        ]
    }
];
const CLOUD_GALLERY = {
    /** Orbital radius of album cluster spheres around the planet */ orbitRadius: 3.2,
    /** Orbit speed for album clusters (rad/s) */ orbitSpeed: 0.015,
    /** Number of album thumbnail frames per cluster node */ thumbnailsPerCluster: 6,
    /** Size of album cluster node (the sphere representing a category) */ clusterNodeSize: 0.35,
    /** Spacing between thumbnail frames within a cluster */ thumbnailSpacing: 0.55
};
const CAROUSEL = {
    /** Radius of the cylindrical carousel */ radius: 4.0,
    /** Vertical spacing between rows */ rowHeight: 1.2,
    /** Number of columns around the cylinder */ columns: 12,
    /** Max rows visible at once */ maxVisibleRows: 5,
    /** Rotation speed when browsing (rad/s) */ browseSpeed: 0.3,
    /** Frame size (width/height of each image plane) */ frameSize: 0.75,
    /** Gap between frames */ frameGap: 0.08
};
const SPRING_PHYSICS = {
    stiffness: 180,
    damping: 25,
    mass: 1.0
};
const PANEL_SPRING = {
    stiffness: 200,
    damping: 22,
    mass: 1.0
};
const FRAME_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.indigo),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.violet),
    emissiveIntensity: {
        idle: 0.5,
        hover: 1.6
    },
    metalness: 0.8,
    roughness: 0.15
};
const LIGHTING = {
    environment: "night",
    environmentIntensity: 0.8,
    /** Key — sharp cool-white SpotLight from top-right */ key: {
        color: "#e0e7ff",
        intensity: 80,
        position: [
            6,
            8,
            5
        ],
        angle: 0.4,
        penumbra: 0.75,
        decay: 1.5,
        distance: 30
    },
    /** Fill — deep violet PointLight from bottom */ fill: {
        color: "#7c3aed",
        intensity: 5.0,
        position: [
            0,
            -5,
            3
        ],
        distance: 16,
        decay: 2
    },
    /** Rim — electric blue DirectionalLight for sharp edge definition */ rim: {
        color: "#3b82f6",
        intensity: 4.5,
        position: [
            -5,
            4,
            -8
        ]
    }
};
const LAZY_LOAD_BATCH = 24;
const LOD_CULL_RADIUS = 15;
const FRUSTUM_MARGIN = 1.1;
const MAX_VISIBLE_FRAMES = 64;
const FOG = {
    innerParticles: {
        radius: 6,
        depth: 3,
        count: 300,
        factor: 0.6,
        speed: 0.1
    },
    outerParticles: {
        radius: 14,
        depth: 5,
        count: 500,
        factor: 1.2,
        speed: 0.06
    },
    mistSphere: {
        radius: 6,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#1e1b4b"),
        opacity: 0.02
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/LibraryPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LibraryPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * LibraryPlanet — The Great Archive
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. OBSIDIAN KNOWLEDGE CORE: MeshPhysicalMaterial from skins.ts.
 *    transmission:0.7 + ior:1.8 + clearcoat:1. Deep sapphire-like
 *    refraction reveals the Data Core — 2000 glowing voxel particles.
 *
 * 2. DATA CORE: BufferGeometry Points system inside the translucent
 *    shell. Particles pulse at 0.3Hz, rotating slowly to simulate
 *    living binary data streams. Color alternates between indigo
 *    and violet for visual depth.
 *
 * 3. CLOUD GALLERY: 4 Album Clusters (Basketball Career, Business &
 *    Marketing, University Life, Personal Archive) orbiting the planet
 *    in a spherical grid. Each cluster shows up to 6 thumbnail frames.
 *
 * 4. CYLINDRICAL CAROUSEL: On album click, the selected category
 *    expands into a cylindrical wrap of images surrounding the user.
 *    12 columns × N rows, frustum-culled, lazy-loaded in batches.
 *
 * 5. 3-POINT CINEMATIC LIGHTING:
 *    Key: Sharp cool-white SpotLight.
 *    Fill: Deep violet PointLight from bottom.
 *    Rim: Electric blue DirectionalLight for edge definition.
 *
 * 6. SPRING PHYSICS: stiffness:180, damping:25 for fluid underwater
 *    motion on all image frames. Zero GSAP.
 *
 * 7. PERFORMANCE: Frustum culling in useFrame, lazy texture loading
 *    in batches of 24, LOD distance culling, pre-allocated vectors.
 *    Zero allocations per frame. Locked 60fps.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/resolvers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/LibraryPlanet/skins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _frustum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"]();
const _projScreenMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
function useLibraryAssets() {
    _s();
    const [albums, setAlbums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLibraryAssets.useEffect": ()=>{
            let cancelled = false;
            ({
                "useLibraryAssets.useEffect": async ()=>{
                    try {
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_URL"]);
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const manifest = await res.json();
                        if (cancelled) return;
                        const categorized = {};
                        let total = 0;
                        for (const cat of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALBUM_CATEGORIES"]){
                            // Tag-based search first
                            let assets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifestByTags"])(manifest, cat.tags, [], 500);
                            // Supplement with path-based if tag search yields few results
                            if (assets.length < 20) {
                                const extra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifest"])(manifest, cat.pathTokens, 500 - assets.length);
                                const ids = new Set(assets.map({
                                    "useLibraryAssets.useEffect": (a)=>a.id
                                }["useLibraryAssets.useEffect"]));
                                assets.push(...extra.filter({
                                    "useLibraryAssets.useEffect": (a)=>!ids.has(a.id)
                                }["useLibraryAssets.useEffect"]));
                            }
                            categorized[cat.id] = assets;
                            total += assets.length;
                        }
                        setAlbums(categorized);
                        setTotalCount(total);
                        setLoading(false);
                    } catch (err) {
                        console.warn("[LibraryPlanet] Manifest fetch failed — graceful fallback:", err);
                        setLoading(false);
                    }
                }
            })["useLibraryAssets.useEffect"]();
            return ({
                "useLibraryAssets.useEffect": ()=>{
                    cancelled = true;
                }
            })["useLibraryAssets.useEffect"];
        }
    }["useLibraryAssets.useEffect"], []);
    return {
        albums,
        totalCount,
        loading
    };
}
_s(useLibraryAssets, "5tMX7nNyuyj/NoBLElDHNqLJtpA=");
// ─── Data Core — Glowing Voxel Points Inside the Shell ───────────────────────
function DataCore({ loadProgress, particleCount }) {
    _s1();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { positions, colors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataCore.useMemo": ()=>{
            const count = particleCount;
            const pos = new Float32Array(count * 3);
            const col = new Float32Array(count * 3);
            const c1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].color;
            const c2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].colorAlt;
            for(let i = 0; i < count; i++){
                // Spherical distribution inside the core
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].radius * Math.cbrt(Math.random()); // Cube root for uniform volume
                const i3 = i * 3;
                pos[i3] = r * Math.sin(phi) * Math.cos(theta);
                pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                pos[i3 + 2] = r * Math.cos(phi);
                // Alternate between primary and secondary color
                const mix = Math.random();
                col[i3] = c1.r * (1 - mix) + c2.r * mix;
                col[i3 + 1] = c1.g * (1 - mix) + c2.g * mix;
                col[i3 + 2] = c1.b * (1 - mix) + c2.b * mix;
            }
            return {
                positions: pos,
                colors: col
            };
        }
    }["DataCore.useMemo"], [
        particleCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DataCore.useFrame": ({ clock })=>{
            if (!pointsRef.current) return;
            const t = clock.elapsedTime;
            // Slow rotation of the data cloud
            pointsRef.current.rotation.y = t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].rotationSpeed;
            pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
            // Pulse particle size based on load progress + sine wave
            const pulse = 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].pulseAmplitude * Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].pulseHz);
            const loadScale = 0.5 + 0.5 * loadProgress; // More particles "activate" as images load
            const mat = pointsRef.current.material;
            mat.size = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].size * pulse * loadScale;
        }
    }["DataCore.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-position",
                        args: [
                            positions,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                        attach: "attributes-color",
                        args: [
                            colors,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].size,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s1(DataCore, "KZvUsVTbOM1WYl5Rgs9suIKkwIA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = DataCore;
// ─── Obsidian Knowledge Shell ─────────────────────────────────────────────────
function ObsidianShell({ loadProgress, particleCount }) {
    _s2();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ObsidianShell.useFrame": ({ clock })=>{
            const t = clock.elapsedTime;
            // Slow majestic rotation
            if (shellRef.current) {
                shellRef.current.rotation.y = t * 0.02;
            }
            // Aura pulse — intensity scales with load progress
            const auraPulse = Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].pulseHz) * 0.5 + 0.5;
            const auraOpacity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].idleOpacity + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].peakOpacity - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].idleOpacity) * loadProgress * auraPulse;
            if (auraRef.current) {
                auraRef.current.material.opacity = auraOpacity;
            }
            if (auraLightRef.current) {
                const targetIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].lightIntensity.idle + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].lightIntensity.peak - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].lightIntensity.idle) * loadProgress * auraPulse;
                auraLightRef.current.intensity += (targetIntensity - auraLightRef.current.intensity) * 0.05;
            }
        }
    }["ObsidianShell.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: shellRef,
                args: [
                    1.0,
                    128,
                    128
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissiveIntensity,
                    transmission: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].transmission,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].roughness,
                    thickness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].thickness,
                    ior: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].ior,
                    clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoat,
                    clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoatRoughness,
                    attenuationColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationColor,
                    attenuationDistance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationDistance,
                    envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].envMapIntensity
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataCore, {
                loadProgress: loadProgress,
                particleCount: particleCount
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: auraRef,
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].radius,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].color,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].idleOpacity,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: auraLightRef,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].indigo,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].lightIntensity.idle,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"].lightDistance,
                decay: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].violet,
                intensity: 3,
                distance: 6,
                decay: 2,
                position: [
                    0,
                    2,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s2(ObsidianShell, "wt112Vkp/4aGFBYr6m+iRlts6aA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ObsidianShell;
// ─── 3-Point Cinematic Lighting Rig ──────────────────────────────────────────
function LibraryLightingRig() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.angle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.penumbra,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.decay,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.distance,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-bias": -0.0001,
                "shadow-normalBias": 0.02
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.position,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.distance,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.decay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.position
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = LibraryLightingRig;
function LazyImageFrame({ asset, position, rotation, categoryColor, groupRef, onClick, onHoverChange, shouldLoad }) {
    _s3();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.0);
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Pre-compute category color once — avoids new THREE.Color() on every JSX render pass
    const threeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LazyImageFrame.useMemo[threeColor]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](categoryColor)
    }["LazyImageFrame.useMemo[threeColor]"], [
        categoryColor
    ]);
    // Spring physics: stiffness 180, damping 25 — fluid underwater movement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LazyImageFrame.useFrame": (_, delta)=>{
            const target = hovered ? 1.15 : 1.0;
            const dt = Math.min(delta, 0.033);
            const springForce = (target - currentScale.current) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].stiffness;
            const dampingForce = -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].damping * velocity.current;
            const acceleration = (springForce + dampingForce) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].mass;
            velocity.current += acceleration * dt;
            currentScale.current += velocity.current * dt;
            currentScale.current = Math.max(0.7, Math.min(1.3, currentScale.current));
            if (meshRef.current) {
                meshRef.current.scale.setScalar(currentScale.current);
            }
        }
    }["LazyImageFrame.useFrame"]);
    const handlePointerOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LazyImageFrame.useCallback[handlePointerOver]": (e)=>{
            e.stopPropagation?.();
            setHovered(true);
            onHoverChange(true);
            document.body.style.cursor = "pointer";
        }
    }["LazyImageFrame.useCallback[handlePointerOver]"], [
        onHoverChange
    ]);
    const handlePointerOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LazyImageFrame.useCallback[handlePointerOut]": ()=>{
            setHovered(false);
            onHoverChange(false);
            document.body.style.cursor = "auto";
        }
    }["LazyImageFrame.useCallback[handlePointerOut]"], [
        onHoverChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: (node)=>{
            if (groupRef && typeof groupRef === "object") groupRef.current = node;
            meshRef.current = node;
        },
        position: position,
        rotation: rotation,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize + 0.06,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize + 0.06
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: threeColor,
                        emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissive,
                        emissiveIntensity: hovered ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissiveIntensity.hover : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissiveIntensity.idle,
                        metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].metalness,
                        roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].roughness
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            shouldLoad ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                url: asset.url,
                scale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize,
                transparent: true,
                position: [
                    0,
                    0,
                    0.01
                ],
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick(asset);
                },
                onPointerOver: handlePointerOver,
                onPointerOut: handlePointerOut
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 406,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0.01
                ],
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick(asset);
                },
                onPointerOver: handlePointerOver,
                onPointerOut: handlePointerOut,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].slate,
                        transparent: true,
                        opacity: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 416,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    -0.02
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].frameSize * 0.6,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: threeColor,
                        transparent: true,
                        opacity: hovered ? 0.2 : 0.04,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                        depthWrite: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 5,
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(15,23,42,0.92)",
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${categoryColor}50`,
                        borderRadius: 8,
                        padding: "6px 14px",
                        whiteSpace: "nowrap",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: categoryColor,
                                fontSize: 11,
                                fontWeight: 700,
                                margin: 0
                            },
                            children: asset.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                fontSize: 9,
                                opacity: 0.7,
                                margin: 0
                            },
                            children: [
                                asset.year,
                                " · ",
                                asset.location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 442,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 441,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
_s3(LazyImageFrame, "oIUMPccsOq8SAT5vPzle48y0dF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = LazyImageFrame;
function AlbumCluster({ category, assets, orbitAngle, onSelectAlbum }) {
    _s4();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.0);
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Pre-compute category color once — avoids new THREE.Color(category.color) on every render
    const threeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AlbumCluster.useMemo[threeColor]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](category.color)
    }["AlbumCluster.useMemo[threeColor]"], [
        category.color
    ]);
    // Orbital position on sphere
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AlbumCluster.useMemo[position]": ()=>{
            const y = Math.sin(orbitAngle * 0.7) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].orbitRadius * 0.4;
            const xz = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].orbitRadius * Math.cos(orbitAngle * 0.7);
            return [
                Math.cos(orbitAngle) * xz,
                y,
                Math.sin(orbitAngle) * xz
            ];
        }
    }["AlbumCluster.useMemo[position]"], [
        orbitAngle
    ]);
    // Thumbnails — show up to 6 preview images around the cluster node
    const thumbnails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AlbumCluster.useMemo[thumbnails]": ()=>{
            return assets.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].thumbnailsPerCluster);
        }
    }["AlbumCluster.useMemo[thumbnails]"], [
        assets
    ]);
    // Spring hover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AlbumCluster.useFrame": (_, delta)=>{
            const target = hovered ? 1.2 : 1.0;
            const dt = Math.min(delta, 0.033);
            const springForce = (target - currentScale.current) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].stiffness;
            const dampingForce = -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].damping * velocity.current;
            velocity.current += (springForce + dampingForce) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].mass * dt;
            currentScale.current += velocity.current * dt;
            currentScale.current = Math.max(0.8, Math.min(1.4, currentScale.current));
            if (groupRef.current) {
                groupRef.current.scale.setScalar(currentScale.current);
            }
        }
    }["AlbumCluster.useFrame"]);
    const handlePointerOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlbumCluster.useCallback[handlePointerOver]": (e)=>{
            e.stopPropagation?.();
            setHovered(true);
            document.body.style.cursor = "pointer";
        }
    }["AlbumCluster.useCallback[handlePointerOver]"], []);
    const handlePointerOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlbumCluster.useCallback[handlePointerOut]": ()=>{
            setHovered(false);
            document.body.style.cursor = "auto";
        }
    }["AlbumCluster.useCallback[handlePointerOut]"], []);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlbumCluster.useCallback[handleClick]": (e)=>{
            e.stopPropagation?.();
            onSelectAlbum(category);
        }
    }["AlbumCluster.useCallback[handleClick]"], [
        category,
        onSelectAlbum
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].clusterNodeSize,
                    32,
                    32
                ],
                onClick: handleClick,
                onPointerOver: handlePointerOver,
                onPointerOut: handlePointerOut,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: threeColor,
                    emissive: threeColor,
                    emissiveIntensity: hovered ? 1.2 : 0.5,
                    transmission: 0.4,
                    roughness: 0.2,
                    thickness: 1.5,
                    ior: 1.5,
                    clearcoat: 0.8,
                    metalness: 0.1
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            thumbnails.map((asset, i)=>{
                const thumbAngle = i / thumbnails.length * Math.PI * 2;
                const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].thumbnailSpacing;
                const tx = Math.cos(thumbAngle) * r;
                const tz = Math.sin(thumbAngle) * r;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        tx,
                        0,
                        tz
                    ],
                    rotation: [
                        0,
                        -thumbAngle + Math.PI,
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                        url: asset.url,
                        scale: 0.35,
                        transparent: true,
                        onClick: (e)=>{
                            e.stopPropagation();
                            onSelectAlbum(category);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 558,
                        columnNumber: 13
                    }, this)
                }, asset.id, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].clusterNodeSize * 2,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: threeColor,
                        transparent: true,
                        opacity: hovered ? 0.12 : 0.03,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 6,
                position: [
                    0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].clusterNodeSize + 0.4,
                    0
                ],
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(15,23,42,0.88)",
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${category.color}40`,
                        borderRadius: 10,
                        padding: "5px 12px",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: category.color,
                                fontSize: 11,
                                fontWeight: 800,
                                margin: 0,
                                letterSpacing: "0.05em"
                            },
                            children: category.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                fontSize: 9,
                                opacity: 0.6,
                                margin: 0
                            },
                            children: [
                                assets.length.toLocaleString(),
                                " images"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 583,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
_s4(AlbumCluster, "ufSWUx38DEWIMF0CIZylkpazUGY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = AlbumCluster;
function CloudGallery({ albums, onSelectAlbum }) {
    _s5();
    const orbitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CloudGallery.useFrame": ({ clock })=>{
            if (orbitRef.current) {
                orbitRef.current.rotation.y = clock.elapsedTime * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_GALLERY"].orbitSpeed;
            }
        }
    }["CloudGallery.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: orbitRef,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALBUM_CATEGORIES"].map((cat, i)=>{
            const angle = i / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALBUM_CATEGORIES"].length * Math.PI * 2;
            const assets = albums[cat.id] ?? [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlbumCluster, {
                category: cat,
                assets: assets,
                orbitAngle: angle,
                onSelectAlbum: onSelectAlbum
            }, cat.id, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 626,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 621,
        columnNumber: 5
    }, this);
}
_s5(CloudGallery, "ZN1fZCgaMMK2TEgZAccgqpf6AoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = CloudGallery;
function CylindricalCarousel({ category, assets, onSelectAsset, onClose, budget }) {
    _s6();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Lazy loading: track which batch of images to load
    const [loadedBatch, setLoadedBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(budget.lazyLoadBatch);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CylindricalCarousel.useEffect": ()=>{
            setLoadedBatch(budget.lazyLoadBatch);
        }
    }["CylindricalCarousel.useEffect"], [
        budget.lazyLoadBatch,
        assets.length
    ]);
    // Load more images as user scrolls (triggered by proximity in useFrame)
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CylindricalCarousel.useCallback[loadMore]": ()=>{
            setLoadedBatch({
                "CylindricalCarousel.useCallback[loadMore]": (prev)=>Math.min(prev + budget.lazyLoadBatch, assets.length)
            }["CylindricalCarousel.useCallback[loadMore]"]);
        }
    }["CylindricalCarousel.useCallback[loadMore]"], [
        assets.length,
        budget.lazyLoadBatch
    ]);
    // Limit visible frames for performance
    const visibleAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CylindricalCarousel.useMemo[visibleAssets]": ()=>{
            return assets.slice(0, Math.min(assets.length, budget.maxVisibleFrames));
        }
    }["CylindricalCarousel.useMemo[visibleAssets]"], [
        assets,
        budget.maxVisibleFrames
    ]);
    // Cylindrical positions
    const framePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CylindricalCarousel.useMemo[framePositions]": ()=>{
            const result = [];
            const cols = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].columns;
            for(let i = 0; i < visibleAssets.length; i++){
                const col = i % cols;
                const row = Math.floor(i / cols);
                const angle = col / cols * Math.PI * 2;
                const x = Math.cos(angle) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].radius;
                const z = Math.sin(angle) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].radius;
                const y = (row - Math.floor(visibleAssets.length / cols / 2)) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].rowHeight;
                result.push({
                    pos: [
                        x,
                        y,
                        z
                    ],
                    rot: [
                        0,
                        -angle + Math.PI,
                        0
                    ]
                });
            }
            return result;
        }
    }["CylindricalCarousel.useMemo[framePositions]"], [
        visibleAssets.length
    ]);
    // Per-frame refs for frustum culling
    const frameRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    if (frameRefs.current.length !== visibleAssets.length) {
        frameRefs.current = Array.from({
            length: visibleAssets.length
        }, ()=>({
                current: null
            }));
    }
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Slow rotation + frustum culling + lazy load trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CylindricalCarousel.useFrame": ({ clock })=>{
            if (carouselRef.current) {
                carouselRef.current.rotation.y = clock.elapsedTime * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].browseSpeed * 0.1;
            }
            // Update frustum from camera
            _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
            _frustum.setFromProjectionMatrix(_projScreenMatrix);
            let nearestUnloaded = Infinity;
            // Frustum cull + LOD distance cull
            frameRefs.current.forEach({
                "CylindricalCarousel.useFrame": (ref, i)=>{
                    const g = ref.current;
                    if (!g) return;
                    _tempVec.setFromMatrixPosition(g.matrixWorld);
                    const dist = _tempVec.distanceTo(camera.position);
                    const inFrustum = _frustum.containsPoint(_tempVec);
                    g.visible = inFrustum && dist < budget.lodCullRadius;
                    // Track closest unloaded frame for lazy loading
                    if (i >= loadedBatch && dist < nearestUnloaded) {
                        nearestUnloaded = dist;
                    }
                }
            }["CylindricalCarousel.useFrame"]);
            // Trigger lazy load when user approaches unloaded frames
            if (nearestUnloaded < budget.lodCullRadius * 0.7) {
                loadMore();
            }
        }
    }["CylindricalCarousel.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: carouselRef,
        children: [
            visibleAssets.map((asset, i)=>{
                const fp = framePositions[i];
                if (!fp) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyImageFrame, {
                    asset: asset,
                    position: fp.pos,
                    rotation: fp.rot,
                    categoryColor: category.color,
                    groupRef: frameRefs.current[i],
                    onClick: onSelectAsset,
                    onHoverChange: ()=>{},
                    shouldLoad: i < loadedBatch
                }, asset.id, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 739,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 8,
                position: [
                    0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].rowHeight * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].maxVisibleRows + 1),
                    0
                ],
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        pointerEvents: "auto",
                        background: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].slate}dd`,
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${category.color}50`,
                        borderRadius: 24,
                        color: category.color,
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "8px 20px",
                        cursor: "pointer",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase"
                    },
                    children: "← Back to Archive"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 755,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 754,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                center: true,
                distanceFactor: 8,
                position: [
                    0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].rowHeight * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAROUSEL"].maxVisibleRows + 2),
                    0
                ],
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: category.color,
                                fontSize: 18,
                                fontWeight: 900,
                                letterSpacing: "0.08em",
                                margin: 0
                            },
                            children: category.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 779,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                fontSize: 11,
                                opacity: 0.5,
                                margin: "4px 0 0"
                            },
                            children: [
                                visibleAssets.length,
                                " of ",
                                assets.length.toLocaleString(),
                                " images"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 782,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 778,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 734,
        columnNumber: 5
    }, this);
}
_s6(CylindricalCarousel, "D+zoK+bTG6JjcUmbDhyEEdpZPqc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = CylindricalCarousel;
function AssetDetailPanel({ asset, visible, categoryColor, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        style: {
            pointerEvents: "none",
            width: 0,
            height: 0
        },
        zIndexRange: [
            200,
            400
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: visible && asset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.94,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.94,
                    y: 20
                },
                transition: {
                    type: "spring",
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(560px, 90vw)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(2,6,23,0.97) 100%)`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${categoryColor}40`,
                    boxShadow: `0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].indigo}20, inset 0 0 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].slate}10`,
                    zIndex: 500,
                    display: "flex",
                    gap: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 120,
                            flexShrink: 0,
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: asset.url,
                            alt: asset.title,
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                            lineNumber: 833,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 831,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1.25rem 1.25rem 1rem",
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: categoryColor,
                                    fontSize: 9,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    marginBottom: 6,
                                    opacity: 0.7
                                },
                                children: [
                                    "Library · ",
                                    asset.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                                lineNumber: 838,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#e0e7ff",
                                    fontSize: 15,
                                    fontWeight: 800,
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8
                                },
                                children: asset.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                                lineNumber: 841,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                    fontSize: 12,
                                    opacity: 0.7,
                                    fontWeight: 500
                                },
                                children: asset.location
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                                lineNumber: 844,
                                columnNumber: 15
                            }, this),
                            asset.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                    fontSize: 11,
                                    opacity: 0.5,
                                    marginTop: 6,
                                    lineHeight: 1.4
                                },
                                children: asset.caption
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                                lineNumber: 848,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 837,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            color: `${categoryColor}60`,
                            fontSize: 22,
                            cursor: "pointer",
                            padding: "0.75rem 1rem",
                            alignSelf: "flex-start"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                        lineNumber: 855,
                        columnNumber: 13
                    }, this)
                ]
            }, asset.id, true, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 805,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
            lineNumber: 803,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 802,
        columnNumber: 5
    }, this);
}
_c7 = AssetDetailPanel;
// ─── Volumetric Fog ───────────────────────────────────────────────────────────
function VolumeFog() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.factor,
                saturation: 0.8,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 873,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.factor,
                saturation: 0.4,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 874,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.radius,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.color,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.opacity,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 876,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 875,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c8 = VolumeFog;
// ─── Archive Stats Overlay (image count HUD) ─────────────────────────────────
function ArchiveStats({ totalCount, loading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        distanceFactor: 10,
        position: [
            0,
            -2.2,
            0
        ],
        style: {
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].indigo,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        margin: 0,
                        opacity: 0.6
                    },
                    children: loading ? "Scanning Archive..." : "The Great Archive"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 895,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                        fontSize: 22,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        margin: "4px 0 0",
                        textShadow: `0 0 30px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].indigo}60`
                    },
                    children: totalCount > 0 ? `${totalCount.toLocaleString()} Images` : "..."
                }, totalCount, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 911,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
            lineNumber: 894,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 893,
        columnNumber: 5
    }, this);
}
_c9 = ArchiveStats;
function LibraryPlanetVisual() {
    _s7();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAsset, setSelectedAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDetail, setShowDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { albums, totalCount, loading } = useLibraryAssets();
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "LibraryPlanetVisual.useDeviceStore[tier]": (s)=>s.tier
    }["LibraryPlanetVisual.useDeviceStore[tier]"]);
    const budget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LibraryPlanetVisual.useMemo[budget]": ()=>{
            if (tier === "mobile") {
                return {
                    dataCoreParticles: 900,
                    maxVisibleFrames: 28,
                    lazyLoadBatch: 12,
                    lodCullRadius: 11
                };
            }
            if (tier === "tablet") {
                return {
                    dataCoreParticles: 1400,
                    maxVisibleFrames: 44,
                    lazyLoadBatch: 16,
                    lodCullRadius: 13
                };
            }
            return {
                dataCoreParticles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_CORE"].particleCount,
                maxVisibleFrames: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_VISIBLE_FRAMES"],
                lazyLoadBatch: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAZY_LOAD_BATCH"],
                lodCullRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOD_CULL_RADIUS"]
            };
        }
    }["LibraryPlanetVisual.useMemo[budget]"], [
        tier
    ]);
    // Load progress (0→1) drives Data Core + Aura intensity
    const loadProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LibraryPlanetVisual.useMemo[loadProgress]": ()=>{
            if (totalCount === 0) return 0;
            return Math.min(totalCount / 200, 1); // Cap at 200 for smooth visual
        }
    }["LibraryPlanetVisual.useMemo[loadProgress]"], [
        totalCount
    ]);
    // Album selection — opens Cylindrical Carousel
    const handleSelectAlbum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPlanetVisual.useCallback[handleSelectAlbum]": (category)=>{
            setSelectedCategory(category);
        }
    }["LibraryPlanetVisual.useCallback[handleSelectAlbum]"], []);
    const handleCloseCarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPlanetVisual.useCallback[handleCloseCarousel]": ()=>{
            setSelectedCategory(null);
        }
    }["LibraryPlanetVisual.useCallback[handleCloseCarousel]"], []);
    // Asset selection — opens detail panel
    const handleSelectAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPlanetVisual.useCallback[handleSelectAsset]": (asset)=>{
            setSelectedAsset(asset);
            setShowDetail(true);
        }
    }["LibraryPlanetVisual.useCallback[handleSelectAsset]"], []);
    const handleCloseDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LibraryPlanetVisual.useCallback[handleCloseDetail]": ()=>{
            setShowDetail(false);
            setSelectedAsset(null);
        }
    }["LibraryPlanetVisual.useCallback[handleCloseDetail]"], []);
    // Current category color for detail panel theming
    const activeCategoryColor = selectedCategory?.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].indigo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environment,
                background: false,
                environmentIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LibraryPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environmentIntensity
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1000,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LibraryLightingRig, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1003,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeFog, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1006,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ObsidianShell, {
                loadProgress: loadProgress,
                particleCount: budget.dataCoreParticles
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchiveStats, {
                totalCount: totalCount,
                loading: loading
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1012,
                columnNumber: 7
            }, this),
            !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudGallery, {
                    albums: albums,
                    onSelectAlbum: handleSelectAlbum
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 1017,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1016,
                columnNumber: 9
            }, this),
            selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CylindricalCarousel, {
                    category: selectedCategory,
                    assets: albums[selectedCategory.id] ?? [],
                    onSelectAsset: handleSelectAsset,
                    onClose: handleCloseCarousel,
                    budget: {
                        maxVisibleFrames: budget.maxVisibleFrames,
                        lazyLoadBatch: budget.lazyLoadBatch,
                        lodCullRadius: budget.lodCullRadius
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                    lineNumber: 1024,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1023,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetDetailPanel, {
                asset: selectedAsset,
                visible: showDetail,
                categoryColor: activeCategoryColor,
                onClose: handleCloseDetail
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
                lineNumber: 1039,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LibraryPlanet/index.tsx",
        lineNumber: 998,
        columnNumber: 5
    }, this);
}
_s7(LibraryPlanetVisual, "/oeee0SabXI2XAPopEI/nGKrq5k=", false, function() {
    return [
        useLibraryAssets,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"]
    ];
});
_c10 = LibraryPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "DataCore");
__turbopack_context__.k.register(_c1, "ObsidianShell");
__turbopack_context__.k.register(_c2, "LibraryLightingRig");
__turbopack_context__.k.register(_c3, "LazyImageFrame");
__turbopack_context__.k.register(_c4, "AlbumCluster");
__turbopack_context__.k.register(_c5, "CloudGallery");
__turbopack_context__.k.register(_c6, "CylindricalCarousel");
__turbopack_context__.k.register(_c7, "AssetDetailPanel");
__turbopack_context__.k.register(_c8, "VolumeFog");
__turbopack_context__.k.register(_c9, "ArchiveStats");
__turbopack_context__.k.register(_c10, "LibraryPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_53534aeb._.js.map