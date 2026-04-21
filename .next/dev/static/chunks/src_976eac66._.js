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
"[project]/src/components/3d/planets/VenturesPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VenturesPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * VenturesPlanet — The Business Empire Hub
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. DATA-GRID CORE: Custom ShaderMaterial with procedural grid lines via
 *    step(fract(uv * N)) in Neon Cyan over Deep Navy base. Fresnel rim glow.
 *    Zero texture dependencies — fully resolution-independent.
 *
 * 2. HEXAGONAL GALLERY — MANIFEST-WIRED: Assets filtered by TAG-BASED search
 *    (business, punchy, startup, marketing, management) via filterManifestByTags().
 *    Distributed on a Fibonacci sphere shell at radius 3.2 with hexagonal
 *    wireframe rings — representing structure and order.
 *
 * 3. LOD CULLING: Pre-allocated _tempVec. Per-node distance check in useFrame.
 *    Beyond LOD_CULL_RADIUS → group.visible = false. Zero allocations per frame.
 *
 * 4. CODE TERMINAL: Floating <Html> panel with monospace terminal aesthetic.
 *    Shows live asset count and sector information.
 *
 * 5. PULSING QUOTE: drei <Text> SDF rendering — "A Leader is a Reader" with
 *    sine-wave opacity oscillation in useFrame.
 *
 * PALETTE: #001219 (Deep Navy), #00E5FF (Neon Cyan)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/resolvers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const PALETTE = {
    navy: "#001219",
    cyan: "#00E5FF",
    cyanDim: "#006D77",
    cyanGlow: "#00B4D8",
    charcoal: "#0A0A0A"
};
/** Max asset nodes displayed in the hex grid */ const HEX_GRID_COUNT = 36;
/** LOD cull radius — pre-allocated, zero allocations inside useFrame */ const LOD_CULL_RADIUS = 14;
const _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
/** Fibonacci sphere shell radius for hex grid */ const HEX_SHELL_RADIUS = 3.2;
/** Tags for ventures manifest query */ const VENTURES_TAGS = [
    "business",
    "punchy",
    "startup",
    "marketing",
    "management"
];
/** Fallback path tokens */ const VENTURES_FALLBACK_TOKENS = [
    "ventures/",
    "business/"
];
/** Shared hex wireframe geometry — single GPU upload, reused by all nodes */ const _hexCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.42, 6);
const _hexEdges = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](_hexCircle);
const _hexHaloGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.44, 6);
// ─── Data-Grid Shader ─────────────────────────────────────────────────────────
const gridVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-worldPos.xyz);
    gl_Position = projectionMatrix * worldPos;
  }
`;
const gridFragmentShader = /* glsl */ `
  uniform vec3 uBaseColor;
  uniform vec3 uGridColor;
  uniform float uTime;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    // Grid lines — procedural, resolution-independent
    float gridDensity = 24.0;
    vec2 grid = abs(fract(vUv * gridDensity - 0.5) - 0.5);
    float line = min(grid.x, grid.y);
    float gridMask = 1.0 - smoothstep(0.01, 0.04, line);

    // Vertical scan line
    float scan = smoothstep(0.48, 0.5, fract(vUv.y - uTime * 0.05));
    float scanLine = scan * 0.3;

    // Fresnel rim
    float fresnel = pow(1.0 - clamp(dot(vNormal, vViewDir), 0.0, 1.0), 3.0);

    // Slow pulse on grid brightness
    float pulse = 0.7 + 0.3 * sin(uTime * 0.6);

    // Compose colour
    vec3 base = uBaseColor;
    vec3 gridCol = uGridColor * gridMask * pulse;
    vec3 rim = uGridColor * fresnel * 0.6;
    vec3 scanCol = uGridColor * scanLine;
    vec3 colour = base + gridCol + rim + scanCol;

    float alpha = mix(uOpacity * 0.85, uOpacity, fresnel);
    gl_FragColor = vec4(colour, alpha);
  }
`;
// ─── Manifest hook ────────────────────────────────────────────────────────────
function useVenturesAssets() {
    _s();
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVenturesAssets.useEffect": ()=>{
            let cancelled = false;
            ({
                "useVenturesAssets.useEffect": async ()=>{
                    try {
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_URL"]);
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const manifest = await res.json();
                        if (cancelled) return;
                        // Primary: tag-based search
                        let results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifestByTags"])(manifest, VENTURES_TAGS, [], HEX_GRID_COUNT);
                        // Fallback: path-based if tag search yields few results
                        if (results.length < 8) {
                            const extra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifest"])(manifest, VENTURES_FALLBACK_TOKENS, HEX_GRID_COUNT - results.length);
                            const existingIds = new Set(results.map({
                                "useVenturesAssets.useEffect": (a)=>a.id
                            }["useVenturesAssets.useEffect"]));
                            results.push(...extra.filter({
                                "useVenturesAssets.useEffect": (a)=>!existingIds.has(a.id)
                            }["useVenturesAssets.useEffect"]));
                        }
                        setAssets(results.slice(0, HEX_GRID_COUNT));
                    } catch (err) {
                        console.warn("[VenturesPlanet] Manifest fetch failed:", err);
                    }
                }
            })["useVenturesAssets.useEffect"]();
            return ({
                "useVenturesAssets.useEffect": ()=>{
                    cancelled = true;
                }
            })["useVenturesAssets.useEffect"];
        }
    }["useVenturesAssets.useEffect"], []);
    return assets;
}
_s(useVenturesAssets, "TkvTObijVMpqXANY4UjdWlfk3qg=");
// ─── The Data-Grid Core ───────────────────────────────────────────────────────
function VenturesCore({ onClick }) {
    _s1();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VenturesCore.useMemo[uniforms]": ()=>({
                uBaseColor: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.navy)
                },
                uGridColor: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.cyan)
                },
                uTime: {
                    value: 0
                },
                uOpacity: {
                    value: 0.88
                }
            })
    }["VenturesCore.useMemo[uniforms]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "VenturesCore.useFrame": ({ clock })=>{
            if (matRef.current) {
                matRef.current.uniforms.uTime.value = clock.elapsedTime;
            }
            if (meshRef.current) {
                meshRef.current.rotation.y += 0.003;
            }
        }
    }["VenturesCore.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: meshRef,
                args: [
                    1.0,
                    128,
                    128
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                    ref: matRef,
                    vertexShader: gridVertexShader,
                    fragmentShader: gridFragmentShader,
                    uniforms: uniforms,
                    transparent: true,
                    depthWrite: false,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    0.65,
                    48,
                    48
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: PALETTE.cyanDim,
                    emissive: PALETTE.cyan,
                    emissiveIntensity: 0.6,
                    metalness: 0.2,
                    roughness: 0.5,
                    transparent: true,
                    opacity: 0.8
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: PALETTE.cyan,
                intensity: 5,
                distance: 10,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: PALETTE.cyanGlow,
                intensity: 3,
                distance: 6,
                decay: 2,
                position: [
                    0,
                    1.5,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s1(VenturesCore, "LxHXlC3OhtgtFgEoFBkaxiAv35w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = VenturesCore;
function HexNode({ asset, position, rotation, groupRef, onClick }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: position,
        rotation: rotation,
        scale: hovered ? 1.15 : 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                geometry: _hexEdges,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                    color: PALETTE.cyan,
                    transparent: true,
                    opacity: hovered ? 0.9 : 0.5
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                url: asset.url,
                scale: 0.55,
                transparent: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick(asset);
                },
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    setHovered(true);
                    document.body.style.cursor = "pointer";
                },
                onPointerOut: ()=>{
                    setHovered(false);
                    document.body.style.cursor = "auto";
                }
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    -0.02
                ],
                geometry: _hexHaloGeo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: PALETTE.cyan,
                    transparent: true,
                    opacity: hovered ? 0.15 : 0.04,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    depthWrite: false
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 291,
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
                        background: "rgba(0,18,25,0.92)",
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${PALETTE.cyan}40`,
                        borderRadius: 8,
                        padding: "6px 12px",
                        whiteSpace: "nowrap",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: PALETTE.cyan,
                                fontSize: 11,
                                fontWeight: 700,
                                margin: 0
                            },
                            children: asset.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: PALETTE.cyanGlow,
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
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s2(HexNode, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = HexNode;
function HexGrid({ assets, onSelectAsset }) {
    _s3();
    const count = assets.length;
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    if (nodeRefs.current.length !== Math.max(count, 12)) {
        nodeRefs.current = Array.from({
            length: Math.max(count, 12)
        }, ()=>({
                current: null
            }));
    }
    // Fibonacci sphere positions + outward-facing Euler rotations (baked once)
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexGrid.useMemo[layout]": ()=>{
            const n = Math.max(count, 12);
            const goldenAngle = Math.PI * (3 - Math.sqrt(5));
            const pts = [];
            const _dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            const _quat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            const _euler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"]();
            const _forward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1);
            for(let i = 0; i < n; i++){
                const y = 1 - i / (n - 1) * 2;
                const r = Math.sqrt(1 - y * y);
                const theta = goldenAngle * i;
                const px = Math.cos(theta) * r * HEX_SHELL_RADIUS;
                const py = y * HEX_SHELL_RADIUS;
                const pz = Math.sin(theta) * r * HEX_SHELL_RADIUS;
                // Face outward from origin
                _dir.set(px, py, pz).normalize();
                _quat.setFromUnitVectors(_forward, _dir);
                _euler.setFromQuaternion(_quat);
                pts.push({
                    pos: [
                        px,
                        py,
                        pz
                    ],
                    rot: [
                        _euler.x,
                        _euler.y,
                        _euler.z
                    ]
                });
            }
            return pts;
        }
    }["HexGrid.useMemo[layout]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "HexGrid.useFrame": ({ clock })=>{
            // Slow rotation
            if (gridRef.current) gridRef.current.rotation.y = clock.elapsedTime * 0.025;
            // Per-node LOD culling — zero allocations
            nodeRefs.current.forEach({
                "HexGrid.useFrame": (ref)=>{
                    const g = ref.current;
                    if (!g) return;
                    _tempVec.setFromMatrixPosition(g.matrixWorld);
                    g.visible = _tempVec.distanceTo(camera.position) < LOD_CULL_RADIUS;
                }
            }["HexGrid.useFrame"]);
        }
    }["HexGrid.useFrame"]);
    // Placeholder wireframes while manifest loads
    if (count === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: gridRef,
            children: layout.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: item.pos,
                    rotation: item.rot,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                        geometry: _hexEdges,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                            color: PALETTE.cyan,
                            transparent: true,
                            opacity: 0.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 413,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                        lineNumber: 412,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 411,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
            lineNumber: 409,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: gridRef,
        children: assets.map((asset, i)=>{
            const item = layout[i];
            if (!item) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HexNode, {
                asset: asset,
                position: item.pos,
                rotation: item.rot,
                groupRef: nodeRefs.current[i],
                onClick: onSelectAsset
            }, asset.id, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 431,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
_s3(HexGrid, "QXak8J8jbiuObXg2QH8Pzk0cjQ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = HexGrid;
// ─── Code Terminal ────────────────────────────────────────────────────────────
function CodeTerminal({ assetCount }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        transform: true,
        occlude: true,
        position: [
            3.5,
            1.8,
            -1
        ],
        rotation: [
            0,
            -0.4,
            0
        ],
        scale: 0.5,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 280,
                background: "rgba(0,18,25,0.94)",
                border: `1px solid ${PALETTE.cyan}30`,
                borderRadius: 12,
                padding: "14px 16px",
                fontFamily: "'Courier New', monospace",
                fontSize: 11,
                lineHeight: 1.8,
                color: PALETTE.cyan,
                boxShadow: `0 0 30px ${PALETTE.cyan}15, inset 0 0 15px ${PALETTE.navy}`,
                pointerEvents: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 5,
                        marginBottom: 10,
                        paddingBottom: 8,
                        borderBottom: `1px solid ${PALETTE.cyan}20`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#ff5f57"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#febc2e"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#28c840"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                marginLeft: "auto",
                                fontSize: 9,
                                opacity: 0.4,
                                color: "#fff"
                            },
                            children: "ventures.sh"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: 0.6
                    },
                    children: "$ mizo ventures init"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: "#28c840"
                    },
                    children: "✓ Business engine loaded"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 519,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: 0.6
                    },
                    children: "$ scan --sectors"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: PALETTE.cyanGlow
                            },
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this),
                        " Marketing · IT · Management"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: 0.6
                    },
                    children: "$ load --assets"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#28c840"
                            },
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        " ",
                        assetCount > 0 ? `${assetCount} ventures loaded` : "scanning manifest..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: 0.6
                    },
                    children: "$ status"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 532,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: PALETTE.cyan
                            },
                            children: "ACTIVE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                opacity: 0.4
                            },
                            children: " — all systems operational"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 533,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                opacity: 0.6
                            },
                            children: "$ "
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-block",
                                width: 7,
                                height: 14,
                                background: PALETTE.cyan,
                                animation: "venturesBlink 1s step-end infinite",
                                verticalAlign: "middle"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@keyframes venturesBlink { 50% { opacity: 0; } }`
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                    lineNumber: 552,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
            lineNumber: 456,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_c3 = CodeTerminal;
// ─── Pulsing Motivational Text ────────────────────────────────────────────────
function PulsingQuote() {
    _s4();
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PulsingQuote.useFrame": ({ clock })=>{
            if (textRef.current) {
                const mat = textRef.current.material;
                mat.opacity = 0.5 + 0.5 * Math.sin(clock.elapsedTime * 0.6);
            }
        }
    }["PulsingQuote.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        ref: textRef,
        position: [
            0,
            -2.8,
            0
        ],
        fontSize: 0.28,
        color: PALETTE.cyan,
        anchorX: "center",
        anchorY: "middle",
        maxWidth: 6,
        textAlign: "center",
        children: "A Leader is a Reader"
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 571,
        columnNumber: 5
    }, this);
}
_s4(PulsingQuote, "q6QS2zhhHxoIGUSLYGYZcMWJvgU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = PulsingQuote;
function AssetDetailPanel({ asset, visible, onClose }) {
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
                    duration: 0.45,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(520px, 90vw)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "linear-gradient(145deg, rgba(0,18,25,0.94) 0%, rgba(0,8,12,0.97) 100%)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${PALETTE.cyan}35`,
                    boxShadow: `0 0 40px ${PALETTE.cyan}18, inset 0 0 20px ${PALETTE.navy}`,
                    zIndex: 500,
                    display: "flex",
                    gap: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 110,
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
                            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                            lineNumber: 632,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                        lineNumber: 630,
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
                                    color: PALETTE.cyan,
                                    fontSize: 9,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    marginBottom: 6,
                                    opacity: 0.7
                                },
                                children: [
                                    "Ventures · ",
                                    asset.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                                lineNumber: 645,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#e0f7ff",
                                    fontSize: 15,
                                    fontWeight: 800,
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8
                                },
                                children: asset.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                                lineNumber: 657,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: PALETTE.cyanGlow,
                                    fontSize: 12,
                                    opacity: 0.7,
                                    fontWeight: 500
                                },
                                children: asset.location
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                                lineNumber: 669,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                        lineNumber: 644,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            color: `${PALETTE.cyan}60`,
                            fontSize: 22,
                            cursor: "pointer",
                            padding: "0.75rem 1rem",
                            alignSelf: "flex-start"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                        lineNumber: 682,
                        columnNumber: 13
                    }, this)
                ]
            }, asset.id, true, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 603,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
            lineNumber: 601,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 596,
        columnNumber: 5
    }, this);
}
_c5 = AssetDetailPanel;
function VenturesPlanetVisual() {
    _s5();
    const assets = useVenturesAssets();
    const [selectedAsset, setSelectedAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelectAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VenturesPlanetVisual.useCallback[handleSelectAsset]": (asset)=>{
            setSelectedAsset(asset);
        }
    }["VenturesPlanetVisual.useCallback[handleSelectAsset]"], []);
    const handleCloseDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VenturesPlanetVisual.useCallback[handleCloseDetail]": ()=>{
            setSelectedAsset(null);
        }
    }["VenturesPlanetVisual.useCallback[handleCloseDetail]"], []);
    const handleCoreClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VenturesPlanetVisual.useCallback[handleCoreClick]": ()=>{
            setSelectedAsset(null);
        }
    }["VenturesPlanetVisual.useCallback[handleCoreClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: 14,
                depth: 5,
                count: 600,
                factor: 1.0,
                saturation: 0.15,
                fade: true,
                speed: 0.2
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 724,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VenturesCore, {
                onClick: handleCoreClick
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HexGrid, {
                assets: assets,
                onSelectAsset: handleSelectAsset
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeTerminal, {
                assetCount: assets.length
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 741,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PulsingQuote, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetDetailPanel, {
                asset: selectedAsset,
                visible: selectedAsset !== null,
                onClose: handleCloseDetail
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
                lineNumber: 747,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VenturesPlanet/index.tsx",
        lineNumber: 722,
        columnNumber: 5
    }, this);
}
_s5(VenturesPlanetVisual, "LwiUlRQ7bhN9+QqxMyMD2LDRPyM=", false, function() {
    return [
        useVenturesAssets
    ];
});
_c6 = VenturesPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "VenturesCore");
__turbopack_context__.k.register(_c1, "HexNode");
__turbopack_context__.k.register(_c2, "HexGrid");
__turbopack_context__.k.register(_c3, "CodeTerminal");
__turbopack_context__.k.register(_c4, "PulsingQuote");
__turbopack_context__.k.register(_c5, "AssetDetailPanel");
__turbopack_context__.k.register(_c6, "VenturesPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_976eac66._.js.map