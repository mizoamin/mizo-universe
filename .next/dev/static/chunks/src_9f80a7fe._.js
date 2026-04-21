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
"[project]/src/components/3d/planets/OdysseyPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATMOSPHERE",
    ()=>ATMOSPHERE,
    "CITY_COORDS",
    ()=>CITY_COORDS,
    "CLOUD_SHELL",
    ()=>CLOUD_SHELL,
    "CLUSTER",
    ()=>CLUSTER,
    "COUNTRY_COORDS",
    ()=>COUNTRY_COORDS,
    "EARTH_MATERIAL",
    ()=>EARTH_MATERIAL,
    "FOG",
    ()=>FOG,
    "GLOBE",
    ()=>GLOBE,
    "LIGHTING",
    ()=>LIGHTING,
    "LOD_CULL_RADIUS",
    ()=>LOD_CULL_RADIUS,
    "MAX_MARKERS",
    ()=>MAX_MARKERS,
    "NIGHT_LIGHTS",
    ()=>NIGHT_LIGHTS,
    "PALETTE",
    ()=>PALETTE,
    "PANEL_SPRING",
    ()=>PANEL_SPRING,
    "PIN",
    ()=>PIN,
    "SPRING_PHYSICS",
    ()=>SPRING_PHYSICS,
    "TEXTURES",
    ()=>TEXTURES,
    "TEXTURE_CONFIG",
    ()=>TEXTURE_CONFIG
]);
/**
 * OdysseyPlanet — "Photorealistic Odyssey" Skin & Material Configuration
 *
 * VISUAL CONCEPT — 8K NASA Earth × Super Mario Odyssey Stylization
 * ─────────────────────────────────────────────────────────────────
 * A photorealistic 8K Earth globe with high-contrast colors, combining
 * NASA-level PBR textures (Diffuse, Normal, Roughness, Clouds,
 * Night Lights) with stylized Mario Odyssey vibes — bright 3D
 * Travel Pins that pop out, bouncy spring physics, and a soft
 * Rayleigh-scattering atmospheric glow.
 *
 * 8K WEBP TEXTURE PIPELINE
 * ─────────────────────────────────────────────────────────────────
 *   All textures loaded via THREE.TextureLoader with:
 *     texture.anisotropy = gl.capabilities.getMaxAnisotropy()
 *   → Ensures 8K detail stays sharp at oblique viewing angles.
 *   → Proper dispose() on component unmount prevents VRAM leaks.
 *
 * MATERIAL SCIENCE — Earth Surface (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   metalness: 0.0         → Non-metallic (rock/water/vegetation)
 *   roughness: 0.6         → Mixed terrain roughness (overridden by map)
 *   clearcoat: 0.35        → Subtle ocean gloss + ice cap sheen
 *   clearcoatRoughness: 0.3 → Slightly rough clearcoat
 *   envMapIntensity: 1.4   → Punchy HDRI reflections on oceans
 *   normalScale: [1.5, 1.5]→ Deep topographic shadows from 8K normal
 *
 * NIGHT LIGHTS (emissiveMap — light-direction sync)
 * ─────────────────────────────────────────────────────────────────
 *   emissive: #ffcc66       → Warm city-light orange glow
 *   emissiveIntensity: modulated per-frame by sun direction
 *   → Surface normal · sunDir < 0 → night hemisphere → glow ON
 *   → Smooth sigmoid transition at the terminator line
 *
 * ATMOSPHERE
 * ─────────────────────────────────────────────────────────────────
 *   Custom Fresnel ShaderMaterial — soft sky-blue Rayleigh glow.
 *   Two-tone: inner = warm (sunrise tint), outer = cool (deep blue).
 *   Visible from all angles, fades at grazing incidence.
 *
 * CLOUD SHELL
 * ─────────────────────────────────────────────────────────────────
 *   Separate sphere (radius + 0.015) with clouds.webp as both
 *   map and alphaMap. Independent rotation at 0.005 rad/s for
 *   parallax depth against the surface below.
 *
 * TEXTURE PATHS (local /public — 8K WebP)
 * ─────────────────────────────────────────────────────────────────
 *   diffuse:    /textures/planets/odyssey/diffuse.webp
 *   normal:     /textures/planets/odyssey/normal.webp
 *   roughness:  /textures/planets/odyssey/specular.webp (fallback)
 *   clouds:     /textures/planets/odyssey/clouds.webp
 *   night:      /textures/planets/odyssey/night.webp
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const PALETTE = {
    /** Deep ocean — base fallback color for the globe */ ocean: "#1a3a5c",
    /** Land green — fallback land tone */ land: "#2d5a27",
    /** Sky blue — atmosphere Rayleigh scattering */ skyBlue: "#87ceeb",
    /** Atmosphere rim — deeper blue for Fresnel edge */ atmosphereRim: "#4a90d9",
    /** Atmosphere warm — sunrise tint near terminator */ atmosphereWarm: "#ffa07a",
    /** Night glow — city lights warm orange */ nightGlow: "#ffcc66",
    /** Pin gold — Odyssey marker primary */ pinGold: "#fbbf24",
    /** Pin red — Odyssey marker accent / mega-pin */ pinRed: "#ef4444",
    /** Pin white — marker highlight */ pinWhite: "#fef3c7",
    /** Cool white — key light / fresh text */ coolWhite: "#f0f9ff",
    /** Slate — UI overlay background */ slate: "#0f172a",
    /** Deep space — background darkness */ deepSpace: "#030712"
};
const TEXTURES = {
    /** 8K Diffuse (albedo) — full-colour Earth surface */ diffuse: "/textures/planets/odyssey/diffuse.webp",
    /** 8K Normal map — terrain elevation → deep topographic shadows */ normal: "/textures/planets/odyssey/normal.webp",
    /** 8K Roughness map — oceans smooth, land rough */ roughness: "/textures/planets/odyssey/specular.webp",
    /** 8K Cloud layer — semi-transparent white (used as map + alphaMap) */ clouds: "/textures/planets/odyssey/clouds.webp",
    /** 8K Night lights emissiveMap — city lights white-on-black */ night: "/textures/planets/odyssey/night.webp"
};
const TEXTURE_CONFIG = {
    /** Color space for diffuse map (sRGB for colour accuracy) */ diffuseColorSpace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"],
    /** Color space for data maps (Linear for normal/roughness/night) */ dataColorSpace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"],
    /** Wrap mode for Earth spherical mapping */ wrapS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"],
    wrapT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"],
    /** Min filter for 8K maps (trilinear for smooth mipmapping) */ minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearMipmapLinearFilter"],
    /** Mag filter (bilinear) */ magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
    /** Generate mipmaps for 8K textures (essential for LOD) */ generateMipmaps: true
};
const EARTH_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff"),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffcc66"),
    emissiveIntensity: 0.0,
    metalness: 0.0,
    roughness: 0.6,
    // ── Clearcoat (ocean gloss + ice cap sheen) ──
    clearcoat: 0.35,
    clearcoatRoughness: 0.3,
    // ── Environment reflections (punchy for oceans) ──
    envMapIntensity: 1.4,
    /** 8K Normal map strength — deep topographic shadows */ normalScale: [
        1.5,
        1.5
    ]
};
const CLOUD_SHELL = {
    /** Radius offset above earth surface */ radiusOffset: 0.015,
    /** Cloud base opacity */ opacity: 0.4,
    /** Cloud rotation speed (slightly different from earth for parallax) */ rotationSpeed: 0.005,
    /** Cloud shell sphere segments (lower than earth — clouds are soft) */ segments: 64
};
const ATMOSPHERE = {
    /** Atmosphere shell radius (slightly larger than earth) */ radius: 1.08,
    /** Rayleigh scattering base color */ color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#87ceeb"),
    /** Fresnel power — controls how tight the rim glow is */ fresnelPower: 3.5,
    /** Overall opacity */ opacity: 0.45,
    /** Vertex shader — computes view-dependent Fresnel */ vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    /** Fragment shader — Rayleigh Fresnel scattering with warm terminator tint */ fragmentShader: `
    uniform vec3 uColor;
    uniform float uPower;
    uniform float uOpacity;
    uniform vec3 uSunDir;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), uPower);
      // Warm tint near terminator (sunset/sunrise edge)
      float sunDot = dot(vNormal, uSunDir);
      vec3 warmTint = vec3(1.0, 0.7, 0.5);
      vec3 finalColor = mix(uColor, warmTint, smoothstep(-0.1, 0.2, sunDot) * 0.3);
      gl_FragColor = vec4(finalColor, fresnel * uOpacity);
    }
  `
};
const NIGHT_LIGHTS = {
    /** Max emissive intensity on the dark hemisphere */ maxEmissive: 2.0,
    /** How fast the emissive intensity reacts per frame (lerp rate) */ lerpRate: 0.04,
    /** Gentle pulse on top of the night lights */ pulseHz: 0.3,
    pulseAmplitude: 0.15
};
const GLOBE = {
    /** Earth sphere radius */ radius: 1.0,
    /** Sphere segments (high for smooth curvature with 8K map) */ segments: 256,
    /** Auto-rotation speed (rad/s) */ autoRotateSpeed: 0.04,
    /** Slerp speed for fly-to animation (0→1 interpolation rate per frame) */ slerpSpeed: 0.03,
    /** Axial tilt (Earth ~23.4°, in radians) */ axialTilt: 0.408
};
const PIN = {
    /** Pin body height (diamond shape) */ height: 0.08,
    /** Pin body width */ width: 0.025,
    /** Hover scale multiplier */ hoverScale: 1.8,
    /** Hover emissive intensity */ hoverEmissive: 2.5,
    /** Idle emissive intensity */ idleEmissive: 0.8,
    /** Bounce amplitude on first appearance */ bounceAmplitude: 0.02,
    /** Bounce frequency (Hz) */ bounceHz: 2.0,
    /** Pin float height above surface */ floatHeight: 0.03,
    /** Regular pin color */ color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#fbbf24"),
    /** Mega-pin color (cluster with 5+ photos) */ megaColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ef4444"),
    /** Mega-pin scale multiplier */ megaScale: 1.5,
    /** Mega-pin threshold (min assets to become mega) */ megaThreshold: 5
};
const SPRING_PHYSICS = {
    stiffness: 200,
    damping: 20,
    mass: 1.0
};
const PANEL_SPRING = {
    stiffness: 220,
    damping: 22,
    mass: 1.0
};
const LIGHTING = {
    environment: "sunset",
    environmentIntensity: 0.6,
    /** Key — warm sunlight SpotLight from top-right (simulating the sun) */ key: {
        color: "#fff8f0",
        intensity: 90,
        position: [
            8,
            6,
            5
        ],
        angle: 0.5,
        penumbra: 0.8,
        decay: 1.5,
        distance: 35
    },
    /** Fill — cool blue PointLight from bottom-left (space ambient bounce) */ fill: {
        color: "#93c5fd",
        intensity: 3.0,
        position: [
            -4,
            -3,
            4
        ],
        distance: 18,
        decay: 2
    },
    /** Rim — electric-blue DirectionalLight from behind (atmospheric backlight) */ rim: {
        color: "#3b82f6",
        intensity: 5.0,
        position: [
            -5,
            5,
            -8
        ]
    }
};
const CITY_COORDS = {
    // ── Qatar ──
    "Doha": {
        lat: 25.2854,
        lng: 51.5310
    },
    "Al Wakrah": {
        lat: 25.1720,
        lng: 51.6038
    },
    "Lusail": {
        lat: 25.4200,
        lng: 51.4900
    },
    "Al Khor": {
        lat: 25.6804,
        lng: 51.4969
    },
    "Education City": {
        lat: 25.3148,
        lng: 51.4400
    },
    "The Pearl": {
        lat: 25.3741,
        lng: 51.5512
    },
    "Aspire Zone": {
        lat: 25.2620,
        lng: 51.4484
    },
    // ── UAE ──
    "Dubai": {
        lat: 25.2048,
        lng: 55.2708
    },
    "Abu Dhabi": {
        lat: 24.4539,
        lng: 54.3773
    },
    "Sharjah": {
        lat: 25.3463,
        lng: 55.4209
    },
    "Ajman": {
        lat: 25.4052,
        lng: 55.5136
    },
    // ── Saudi Arabia ──
    "Riyadh": {
        lat: 24.7136,
        lng: 46.6753
    },
    "Jeddah": {
        lat: 21.4858,
        lng: 39.1925
    },
    "Mecca": {
        lat: 21.3891,
        lng: 39.8579
    },
    "Medina": {
        lat: 24.5247,
        lng: 39.5692
    },
    "Dammam": {
        lat: 26.3927,
        lng: 49.9777
    },
    // ── Gulf / Middle East ──
    "Manama": {
        lat: 26.2285,
        lng: 50.5860
    },
    "Kuwait City": {
        lat: 29.3759,
        lng: 47.9774
    },
    "Muscat": {
        lat: 23.5880,
        lng: 58.3829
    },
    "Amman": {
        lat: 31.9454,
        lng: 35.9284
    },
    "Beirut": {
        lat: 33.8938,
        lng: 35.5018
    },
    // ── Europe ──
    "London": {
        lat: 51.5074,
        lng: -0.1278
    },
    "Paris": {
        lat: 48.8566,
        lng: 2.3522
    },
    "Barcelona": {
        lat: 41.3874,
        lng: 2.1686
    },
    "Istanbul": {
        lat: 41.0082,
        lng: 28.9784
    },
    "Rome": {
        lat: 41.9028,
        lng: 12.4964
    },
    "Madrid": {
        lat: 40.4168,
        lng: -3.7038
    },
    "Berlin": {
        lat: 52.5200,
        lng: 13.4050
    },
    "Amsterdam": {
        lat: 52.3676,
        lng: 4.9041
    },
    "Munich": {
        lat: 48.1351,
        lng: 11.5820
    },
    "Vienna": {
        lat: 48.2082,
        lng: 16.3738
    },
    "Zurich": {
        lat: 47.3769,
        lng: 8.5417
    },
    "Geneva": {
        lat: 46.2044,
        lng: 6.1432
    },
    "Milan": {
        lat: 45.4642,
        lng: 9.1900
    },
    "Prague": {
        lat: 50.0755,
        lng: 14.4378
    },
    "Budapest": {
        lat: 47.4979,
        lng: 19.0402
    },
    "Lisbon": {
        lat: 38.7223,
        lng: -9.1393
    },
    "Athens": {
        lat: 37.9838,
        lng: 23.7275
    },
    "Copenhagen": {
        lat: 55.6761,
        lng: 12.5683
    },
    "Stockholm": {
        lat: 59.3293,
        lng: 18.0686
    },
    "Oslo": {
        lat: 59.9139,
        lng: 10.7522
    },
    "Helsinki": {
        lat: 60.1699,
        lng: 24.9384
    },
    "Dublin": {
        lat: 53.3498,
        lng: -6.2603
    },
    "Edinburgh": {
        lat: 55.9533,
        lng: -3.1883
    },
    "Manchester": {
        lat: 53.4808,
        lng: -2.2426
    },
    "Marseille": {
        lat: 43.2965,
        lng: 5.3698
    },
    "Nice": {
        lat: 43.7102,
        lng: 7.2620
    },
    "Monaco": {
        lat: 43.7384,
        lng: 7.4246
    },
    // ── Americas ──
    "New York": {
        lat: 40.7128,
        lng: -74.0060
    },
    "Los Angeles": {
        lat: 34.0522,
        lng: -118.2437
    },
    "Miami": {
        lat: 25.7617,
        lng: -80.1918
    },
    "Chicago": {
        lat: 41.8781,
        lng: -87.6298
    },
    "Houston": {
        lat: 29.7604,
        lng: -95.3698
    },
    "Toronto": {
        lat: 43.6532,
        lng: -79.3832
    },
    "San Francisco": {
        lat: 37.7749,
        lng: -122.4194
    },
    "Washington": {
        lat: 38.9072,
        lng: -77.0369
    },
    "Boston": {
        lat: 42.3601,
        lng: -71.0589
    },
    "Las Vegas": {
        lat: 36.1699,
        lng: -115.1398
    },
    "Montreal": {
        lat: 45.5017,
        lng: -73.5673
    },
    "Vancouver": {
        lat: 49.2827,
        lng: -123.1207
    },
    "Mexico City": {
        lat: 19.4326,
        lng: -99.1332
    },
    "São Paulo": {
        lat: -23.5505,
        lng: -46.6333
    },
    "Buenos Aires": {
        lat: -34.6037,
        lng: -58.3816
    },
    // ── Asia ──
    "Tokyo": {
        lat: 35.6762,
        lng: 139.6503
    },
    "Singapore": {
        lat: 1.3521,
        lng: 103.8198
    },
    "Hong Kong": {
        lat: 22.3193,
        lng: 114.1694
    },
    "Bangkok": {
        lat: 13.7563,
        lng: 100.5018
    },
    "Kuala Lumpur": {
        lat: 3.1390,
        lng: 101.6869
    },
    "Seoul": {
        lat: 37.5665,
        lng: 126.9780
    },
    "Mumbai": {
        lat: 19.0760,
        lng: 72.8777
    },
    "Beijing": {
        lat: 39.9042,
        lng: 116.4074
    },
    "Shanghai": {
        lat: 31.2304,
        lng: 121.4737
    },
    "Delhi": {
        lat: 28.7041,
        lng: 77.1025
    },
    "Bali": {
        lat: -8.3405,
        lng: 115.0920
    },
    "Taipei": {
        lat: 25.0330,
        lng: 121.5654
    },
    "Osaka": {
        lat: 34.6937,
        lng: 135.5023
    },
    "Jakarta": {
        lat: -6.2088,
        lng: 106.8456
    },
    "Manila": {
        lat: 14.5995,
        lng: 120.9842
    },
    "Ho Chi Minh City": {
        lat: 10.8231,
        lng: 106.6297
    },
    // ── Africa ──
    "Cairo": {
        lat: 30.0444,
        lng: 31.2357
    },
    "Casablanca": {
        lat: 33.5731,
        lng: -7.5898
    },
    "Johannesburg": {
        lat: -26.2041,
        lng: 28.0473
    },
    "Nairobi": {
        lat: -1.2921,
        lng: 36.8219
    },
    "Cape Town": {
        lat: -33.9249,
        lng: 18.4241
    },
    "Lagos": {
        lat: 6.5244,
        lng: 3.3792
    },
    "Marrakech": {
        lat: 31.6295,
        lng: -7.9811
    },
    "Tunis": {
        lat: 36.8065,
        lng: 10.1815
    },
    // ── Oceania ──
    "Sydney": {
        lat: -33.8688,
        lng: 151.2093
    },
    "Melbourne": {
        lat: -37.8136,
        lng: 144.9631
    },
    "Auckland": {
        lat: -36.8485,
        lng: 174.7633
    }
};
const COUNTRY_COORDS = {
    "Qatar": {
        lat: 25.3548,
        lng: 51.1839
    },
    "UAE": {
        lat: 23.4241,
        lng: 53.8478
    },
    "United Arab Emirates": {
        lat: 23.4241,
        lng: 53.8478
    },
    "Saudi Arabia": {
        lat: 23.8859,
        lng: 45.0792
    },
    "Bahrain": {
        lat: 26.0667,
        lng: 50.5577
    },
    "Kuwait": {
        lat: 29.3117,
        lng: 47.4818
    },
    "Oman": {
        lat: 21.4735,
        lng: 55.9754
    },
    "Jordan": {
        lat: 30.5852,
        lng: 36.2384
    },
    "Lebanon": {
        lat: 33.8547,
        lng: 35.8623
    },
    "Iraq": {
        lat: 33.2232,
        lng: 43.6793
    },
    "Iran": {
        lat: 32.4279,
        lng: 53.6880
    },
    "United Kingdom": {
        lat: 55.3781,
        lng: -3.4360
    },
    "France": {
        lat: 46.2276,
        lng: 2.2137
    },
    "Spain": {
        lat: 40.4637,
        lng: -3.7492
    },
    "Germany": {
        lat: 51.1657,
        lng: 10.4515
    },
    "Italy": {
        lat: 41.8719,
        lng: 12.5674
    },
    "Turkey": {
        lat: 38.9637,
        lng: 35.2433
    },
    "Netherlands": {
        lat: 52.1326,
        lng: 5.2913
    },
    "Switzerland": {
        lat: 46.8182,
        lng: 8.2275
    },
    "Austria": {
        lat: 47.5162,
        lng: 14.5501
    },
    "Portugal": {
        lat: 39.3999,
        lng: -8.2245
    },
    "Greece": {
        lat: 39.0742,
        lng: 21.8243
    },
    "Czech Republic": {
        lat: 49.8175,
        lng: 15.4730
    },
    "Hungary": {
        lat: 47.1625,
        lng: 19.5033
    },
    "Sweden": {
        lat: 60.1282,
        lng: 18.6435
    },
    "Norway": {
        lat: 60.4720,
        lng: 8.4689
    },
    "Denmark": {
        lat: 56.2639,
        lng: 9.5018
    },
    "Finland": {
        lat: 61.9241,
        lng: 25.7482
    },
    "Ireland": {
        lat: 53.1424,
        lng: -7.6921
    },
    "USA": {
        lat: 37.0902,
        lng: -95.7129
    },
    "United States": {
        lat: 37.0902,
        lng: -95.7129
    },
    "Canada": {
        lat: 56.1304,
        lng: -106.3468
    },
    "Mexico": {
        lat: 23.6345,
        lng: -102.5528
    },
    "Brazil": {
        lat: -14.2350,
        lng: -51.9253
    },
    "Argentina": {
        lat: -38.4161,
        lng: -63.6167
    },
    "Japan": {
        lat: 36.2048,
        lng: 138.2529
    },
    "China": {
        lat: 35.8617,
        lng: 104.1954
    },
    "India": {
        lat: 20.5937,
        lng: 78.9629
    },
    "South Korea": {
        lat: 35.9078,
        lng: 127.7669
    },
    "Thailand": {
        lat: 15.8700,
        lng: 100.9925
    },
    "Malaysia": {
        lat: 4.2105,
        lng: 101.9758
    },
    "Singapore": {
        lat: 1.3521,
        lng: 103.8198
    },
    "Indonesia": {
        lat: -0.7893,
        lng: 113.9213
    },
    "Philippines": {
        lat: 12.8797,
        lng: 121.7740
    },
    "Vietnam": {
        lat: 14.0583,
        lng: 108.2772
    },
    "Taiwan": {
        lat: 23.6978,
        lng: 120.9605
    },
    "Australia": {
        lat: -25.2744,
        lng: 133.7751
    },
    "New Zealand": {
        lat: -40.9006,
        lng: 174.8860
    },
    "Egypt": {
        lat: 26.8206,
        lng: 30.8025
    },
    "South Africa": {
        lat: -30.5595,
        lng: 22.9375
    },
    "Kenya": {
        lat: -0.0236,
        lng: 37.9062
    },
    "Morocco": {
        lat: 31.7917,
        lng: -7.0926
    },
    "Nigeria": {
        lat: 9.0820,
        lng: 8.6753
    },
    "Tunisia": {
        lat: 33.8869,
        lng: 9.5375
    }
};
const CLUSTER = {
    /** Minimum angular distance (degrees) to merge two markers */ mergeAngleDeg: 3.0,
    /** Mega-pin visual pulse frequency (Hz) */ pulseHz: 1.0,
    /** Mega-pin pulse amplitude */ pulseAmplitude: 0.15
};
const MAX_MARKERS = 300;
const LOD_CULL_RADIUS = 12;
const FOG = {
    innerParticles: {
        radius: 5,
        depth: 2,
        count: 200,
        factor: 0.5,
        speed: 0.08
    },
    outerParticles: {
        radius: 12,
        depth: 4,
        count: 400,
        factor: 1.0,
        speed: 0.05
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePlanetTextures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPreloadedTexture",
    ()=>getPreloadedTexture,
    "preloadPlanetTextures",
    ()=>preloadPlanetTextures,
    "usePlanetTexture",
    ()=>usePlanetTexture,
    "usePlanetTexturePreload",
    ()=>usePlanetTexturePreload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
const textureCache = new Map();
const pendingLoads = new Map();
function applyTextureOptions(tex, options) {
    tex.colorSpace = options.colorMode === "srgb" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"];
    if (typeof options.anisotropy === "number") tex.anisotropy = options.anisotropy;
    if (options.wrapS !== undefined) tex.wrapS = options.wrapS;
    if (options.wrapT !== undefined) tex.wrapT = options.wrapT;
    tex.needsUpdate = true;
}
function loadTexture(path, options = {}) {
    if (!path) return Promise.resolve(null);
    if (textureCache.has(path)) return Promise.resolve(textureCache.get(path) ?? null);
    if (pendingLoads.has(path)) return pendingLoads.get(path);
    const pending = loader.loadAsync(path).then((tex)=>{
        applyTextureOptions(tex, options);
        textureCache.set(path, tex);
        pendingLoads.delete(path);
        return tex;
    }).catch(()=>{
        textureCache.set(path, null);
        pendingLoads.delete(path);
        return null;
    });
    pendingLoads.set(path, pending);
    return pending;
}
function getPreloadedTexture(path) {
    return textureCache.get(path);
}
function preloadPlanetTextures(paths, options = {}) {
    const unique = Array.from(new Set(paths.filter(Boolean)));
    return Promise.all(unique.map((path)=>loadTexture(path, options))).then(()=>undefined);
}
function usePlanetTexture(path, options = {}) {
    _s();
    const [texture, setTexture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "usePlanetTexture.useState": ()=>getPreloadedTexture(path) ?? null
    }["usePlanetTexture.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlanetTexture.useEffect": ()=>{
            let cancelled = false;
            if (!path) {
                setTexture(null);
                return;
            }
            const cached = getPreloadedTexture(path);
            if (cached !== undefined) {
                setTexture(cached ?? null);
                return;
            }
            loadTexture(path, options).then({
                "usePlanetTexture.useEffect": (tex)=>{
                    if (!cancelled) setTexture(tex);
                }
            }["usePlanetTexture.useEffect"]);
            return ({
                "usePlanetTexture.useEffect": ()=>{
                    cancelled = true;
                }
            })["usePlanetTexture.useEffect"];
        }
    }["usePlanetTexture.useEffect"], [
        path,
        options.anisotropy,
        options.colorMode,
        options.wrapS,
        options.wrapT
    ]);
    return texture;
}
_s(usePlanetTexture, "fWuKuFkMuizq+B6knk3XN7eXeP8=");
function usePlanetTexturePreload(paths, options = {}) {
    _s1();
    const stablePaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePlanetTexturePreload.useMemo[stablePaths]": ()=>Array.from(new Set(paths.filter(Boolean))).sort()
    }["usePlanetTexturePreload.useMemo[stablePaths]"], [
        paths
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlanetTexturePreload.useEffect": ()=>{
            void preloadPlanetTextures(stablePaths, options);
        }
    }["usePlanetTexturePreload.useEffect"], [
        stablePaths,
        options.anisotropy,
        options.colorMode,
        options.wrapS,
        options.wrapT
    ]);
}
_s1(usePlanetTexturePreload, "GhOG5nnC4gIQBIMD8e+UQ0WseGg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/OdysseyPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OdysseyPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * OdysseyPlanet — The Global Journey
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. PHOTOREALISTIC EARTH: MeshPhysicalMaterial from skins.ts with
 *    8K WebP Diffuse, Normal, Roughness, Clouds, and Night Lights.
 *    Loaded via THREE.TextureLoader with max anisotropy for 8K
 *    sharpness. VRAM dispose() on component unmount.
 *    Graceful fallback to solid colours if textures missing.
 *
 * 2. ATMOSPHERIC GLOW: Custom Fresnel ShaderMaterial — Rayleigh
 *    scattering in soft sky-blue. Visible as a rim halo.
 *
 * 3. CLOUD LAYER: Separate sphere with alpha clouds + independent
 *    rotation for depth parallax.
 *
 * 4. NIGHT LIGHTS: emissiveMap with intensity modulated by sun
 *    direction — only dark hemisphere shows city lights.
 *
 * 5. GEO-SPATIAL MAPPING: Parse manifest City/Country → lat/lng
 *    via CITY_COORDS lookup → spherical → Cartesian (x,y,z).
 *    Clustering merges nearby pins into Mega-Pins.
 *
 * 6. INSTANCED MESH: All pins rendered via InstancedMesh for
 *    maximum GPU efficiency. Per-instance color via instanceColor.
 *
 * 7. MARIO-STYLE ODYSSEY PINS: Diamond-shaped markers that float
 *    and bounce. Mega-Pins pulse and glow red for clusters ≥5.
 *
 * 8. FLY-TO SLERP: Clicking a Travel Log entry smoothly rotates
 *    the globe via quaternion Slerp to the target coordinate.
 *
 * 9. HOLOGRAPHIC TOOLTIPS: On pin hover — floating Html with
 *    image thumbnail, Title, City/Country, Caption story snippet.
 *
 * 10. 3-POINT CINEMATIC LIGHTING: Warm Key (sun), Cool Fill
 *     (space bounce), Sky-blue Rim (atmospheric backlight).
 *
 * 11. SPRING PHYSICS: stiffness:200, damping:20 — Odyssey bouncy.
 *
 * 12. PERFORMANCE: InstancedMesh, LOD culling, pre-allocated
 *     vectors, zero useFrame allocations. Locked 60fps.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/resolvers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/OdysseyPlanet/skins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlanetTextures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
;
// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _tempMat4 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _tempQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const _targetQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const _tempColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const _sunDir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position).normalize();
const _dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
const _pinWhiteColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinWhite);
const _earthNormalScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].normalScale);
const _oceanFallbackColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].ocean);
// ─── Geo-Spatial Utilities ────────────────────────────────────────────────────
/** Convert (lat, lng) degrees → (x, y, z) on a unit sphere */ function latLngToXYZ(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180); // Polar angle from north pole
    const theta = (lng + 180) * (Math.PI / 180); // Azimuthal angle
    return [
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    ];
}
/** Look up lat/lng for a city/country string from the skins.ts database */ function resolveGeoCoord(city, country) {
    // Try exact city match first
    if (city && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_COORDS"][city]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_COORDS"][city];
    // Try city from location field (might be "City, Country" format)
    const cityPart = city.split(",")[0].trim();
    if (cityPart && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_COORDS"][cityPart]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_COORDS"][cityPart];
    // Fall back to country centroid
    if (country && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_COORDS"][country]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_COORDS"][country];
    return null;
}
// ─── Clustering Algorithm ─────────────────────────────────────────────────────
function clusterGeoAssets(assets, maxMarkers) {
    const clusters = [];
    const used = new Set();
    const mergeRad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLUSTER"].mergeAngleDeg * (Math.PI / 180);
    for(let i = 0; i < assets.length; i++){
        if (used.has(i)) continue;
        used.add(i);
        const seed = assets[i];
        const group = [
            seed
        ];
        // Merge nearby assets
        for(let j = i + 1; j < assets.length; j++){
            if (used.has(j)) continue;
            const other = assets[j];
            const dLat = (seed.lat - other.lat) * (Math.PI / 180);
            const dLng = (seed.lng - other.lng) * (Math.PI / 180);
            const angDist = Math.sqrt(dLat * dLat + dLng * dLng);
            if (angDist < mergeRad) {
                group.push(other);
                used.add(j);
            }
        }
        // Average position
        const avgLat = group.reduce((s, a)=>s + a.lat, 0) / group.length;
        const avgLng = group.reduce((s, a)=>s + a.lng, 0) / group.length;
        const pos = latLngToXYZ(avgLat, avgLng, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].radius + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].floatHeight);
        clusters.push({
            id: `cluster-${i}`,
            lat: avgLat,
            lng: avgLng,
            position: pos,
            assets: group,
            city: seed.city,
            country: seed.country,
            isMega: group.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].megaThreshold
        });
    }
    // Sort by size descending, cap at maxMarkers
    clusters.sort((a, b)=>b.assets.length - a.assets.length);
    return clusters.slice(0, maxMarkers);
}
// ─── Manifest Hook — Fetches & Geo-locates Assets ────────────────────────────
function useOdysseyAssets(maxMarkers) {
    _s();
    const [clusters, setClusters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOdysseyAssets.useEffect": ()=>{
            let cancelled = false;
            ({
                "useOdysseyAssets.useEffect": async ()=>{
                    try {
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_URL"]);
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const manifest = await res.json();
                        if (cancelled) return;
                        const geoAssets = [];
                        let total = 0;
                        for (const [filename, entry] of Object.entries(manifest)){
                            total++;
                            const d = entry.data;
                            const city = d.City ?? d.Location ?? "";
                            const country = d.Country ?? "";
                            const coord = resolveGeoCoord(city, country);
                            if (!coord) continue;
                            const rawPath = entry.path ?? "";
                            const marker = "mizo_production_assets/";
                            const idx = rawPath.indexOf(marker);
                            const rel = idx !== -1 ? rawPath.slice(idx + marker.length) : rawPath;
                            geoAssets.push({
                                id: filename,
                                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAssetUrl"])(rawPath),
                                title: d.Title ?? filename,
                                city,
                                country,
                                caption: d.Caption ?? d.Title ?? "",
                                year: d.Year ?? "",
                                lat: coord.lat,
                                lng: coord.lng,
                                position: latLngToXYZ(coord.lat, coord.lng, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].radius + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].floatHeight)
                            });
                        }
                        if (!cancelled) {
                            const clustered = clusterGeoAssets(geoAssets, maxMarkers);
                            setClusters(clustered);
                            setTotalCount(total);
                            setLoading(false);
                        }
                    } catch (err) {
                        console.warn("[OdysseyPlanet] Manifest fetch failed — graceful fallback:", err);
                        if (!cancelled) setLoading(false);
                    }
                }
            })["useOdysseyAssets.useEffect"]();
            return ({
                "useOdysseyAssets.useEffect": ()=>{
                    cancelled = true;
                }
            })["useOdysseyAssets.useEffect"];
        }
    }["useOdysseyAssets.useEffect"], [
        maxMarkers
    ]);
    return {
        clusters,
        totalCount,
        loading
    };
}
_s(useOdysseyAssets, "xOte6kLpz7e6c6CDa+eFjOpCTYM=");
// ─── 8K Texture Loader Hook ───────────────────────────────────────────────────
/** Loads a single texture via THREE.TextureLoader with max anisotropy.
 *  Returns null if the texture fails to load (graceful fallback). */ function useEarthTextures(gl) {
    _s1();
    const [textures, setTextures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        diffuse: null,
        normal: null,
        roughness: null,
        clouds: null,
        night: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEarthTextures.useEffect": ()=>{
            let disposed = false;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            const maxAniso = gl.capabilities.getMaxAnisotropy();
            const loaded = [];
            /** Configure a loaded texture with optimal 8K settings */ function configure(tex, isSRGB) {
                tex.anisotropy = maxAniso;
                tex.colorSpace = isSRGB ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].diffuseColorSpace : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].dataColorSpace;
                tex.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].wrapS;
                tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].wrapT;
                tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].minFilter;
                tex.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].magFilter;
                tex.generateMipmaps = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].generateMipmaps;
                tex.needsUpdate = true;
                loaded.push(tex);
                return tex;
            }
            async function loadOrCache(path, isSRGB) {
                const cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreloadedTexture"])(path);
                if (cached) return configure(cached, isSRGB);
                return loader.loadAsync(path).then({
                    "useEarthTextures.useEffect.loadOrCache": (t)=>configure(t, isSRGB)
                }["useEarthTextures.useEffect.loadOrCache"]).catch({
                    "useEarthTextures.useEffect.loadOrCache": ()=>null
                }["useEarthTextures.useEffect.loadOrCache"]);
            }
            const promises = [
                loadOrCache(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].diffuse, true),
                loadOrCache(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].normal, false),
                loadOrCache(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].roughness, false),
                loadOrCache(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].clouds, true),
                loadOrCache(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].night, false)
            ];
            Promise.all(promises).then({
                "useEarthTextures.useEffect": ([diffuse, normal, roughness, clouds, night])=>{
                    if (disposed) {
                        loaded.forEach({
                            "useEarthTextures.useEffect": (t)=>t.dispose()
                        }["useEarthTextures.useEffect"]);
                        return;
                    }
                    setTextures({
                        diffuse,
                        normal,
                        roughness,
                        clouds,
                        night
                    });
                }
            }["useEarthTextures.useEffect"]);
            // VRAM cleanup on unmount
            return ({
                "useEarthTextures.useEffect": ()=>{
                    disposed = true;
                    loaded.forEach({
                        "useEarthTextures.useEffect": (t)=>t.dispose()
                    }["useEarthTextures.useEffect"]);
                }
            })["useEarthTextures.useEffect"];
        }
    }["useEarthTextures.useEffect"], [
        gl
    ]);
    return textures;
}
_s1(useEarthTextures, "dnaZPKvkKynC3uKYB7Fsd0PPNzk=");
// ─── Earth Globe ──────────────────────────────────────────────────────────────
function EarthGlobe({ flyToTarget }) {
    _s2();
    const earthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloudsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const globeGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexturePreload"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].diffuse,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].normal,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].roughness,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].clouds,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].night
    ], {
        colorMode: "srgb",
        anisotropy: gl.capabilities.getMaxAnisotropy(),
        wrapS: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].wrapS,
        wrapT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURE_CONFIG"].wrapT
    });
    // Load 8K WebP textures with max anisotropy + VRAM disposal
    const { diffuse, normal, roughness, clouds, night } = useEarthTextures(gl);
    // Fly-to: compute target quaternion from cluster position
    const isFlying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const emissiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EarthGlobe.useEffect": ()=>{
            if (!flyToTarget || !globeGroupRef.current) return;
            const targetPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...flyToTarget.position).normalize();
            const forward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1);
            _targetQuat.setFromUnitVectors(targetPos, forward);
            isFlying.current = true;
        }
    }["EarthGlobe.useEffect"], [
        flyToTarget
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EarthGlobe.useFrame": ({ clock }, delta)=>{
            const t = clock.elapsedTime;
            // Auto-rotate when not flying
            if (globeGroupRef.current) {
                if (isFlying.current) {
                    globeGroupRef.current.quaternion.slerp(_targetQuat, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].slerpSpeed);
                    if (globeGroupRef.current.quaternion.angleTo(_targetQuat) < 0.01) {
                        isFlying.current = false;
                    }
                } else {
                    globeGroupRef.current.rotation.y += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].autoRotateSpeed * delta;
                }
            }
            // Cloud layer independent rotation for parallax
            if (cloudsRef.current) {
                cloudsRef.current.rotation.y = t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_SHELL"].rotationSpeed;
            }
            // Night lights: light-direction-aware emissive with gentle pulse
            if (earthRef.current) {
                const mat = earthRef.current.material;
                const nightPulse = 1.0 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NIGHT_LIGHTS"].pulseAmplitude * Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NIGHT_LIGHTS"].pulseHz);
                const targetEmissive = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NIGHT_LIGHTS"].maxEmissive * nightPulse * (night ? 1 : 0.3);
                // Smooth lerp to prevent popping
                emissiveRef.current += (targetEmissive - emissiveRef.current) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NIGHT_LIGHTS"].lerpRate;
                mat.emissiveIntensity = emissiveRef.current;
            }
        }
    }["EarthGlobe.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: globeGroupRef,
        rotation: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].axialTilt,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: earthRef,
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].radius,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].segments,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].segments
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].emissiveIntensity,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].metalness,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].roughness,
                    clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].clearcoat,
                    clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].clearcoatRoughness,
                    envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EARTH_MATERIAL"].envMapIntensity,
                    normalScale: _earthNormalScale,
                    ...diffuse ? {
                        map: diffuse
                    } : {
                        color: _oceanFallbackColor
                    },
                    ...normal ? {
                        normalMap: normal
                    } : {},
                    ...roughness ? {
                        roughnessMap: roughness
                    } : {},
                    ...night ? {
                        emissiveMap: night
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: cloudsRef,
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBE"].radius + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_SHELL"].radiusOffset,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_SHELL"].segments,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_SHELL"].segments
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: "#ffffff",
                    transparent: true,
                    opacity: clouds ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOUD_SHELL"].opacity : 0,
                    depthWrite: false,
                    ...clouds ? {
                        map: clouds,
                        alphaMap: clouds
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s2(EarthGlobe, "nyvwc+MG+P55WgJ/YslfAVsRX0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexturePreload"],
        useEarthTextures,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = EarthGlobe;
// ─── Atmospheric Glow (Fresnel Rayleigh) ──────────────────────────────────────
function AtmosphericGlow() {
    _s3();
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AtmosphericGlow.useMemo[material]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    uColor: {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].color
                    },
                    uPower: {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].fresnelPower
                    },
                    uOpacity: {
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].opacity
                    },
                    uSunDir: {
                        value: _sunDir
                    },
                    uIntensity: {
                        value: 1.0
                    }
                },
                vertexShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].vertexShader,
                fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].fragmentShader,
                transparent: true,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            });
        }
    }["AtmosphericGlow.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "AtmosphericGlow.useFrame": ({ clock })=>{
            const pulse = 0.96 + 0.04 * Math.sin(clock.elapsedTime * 0.8);
            material.uniforms.uOpacity.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].opacity * pulse;
        }
    }["AtmosphericGlow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATMOSPHERE"].radius,
            64,
            64
        ],
        material: material
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 459,
        columnNumber: 5
    }, this);
}
_s3(AtmosphericGlow, "6Q9Y/dEciz1GFW9gnhBSxnYXSpU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = AtmosphericGlow;
// ─── Lighting Rig ─────────────────────────────────────────────────────────────
function OdysseyLightingRig() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.angle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.penumbra,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.decay,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.distance,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-bias": -0.0001,
                "shadow-normalBias": 0.02
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.position,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.distance,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.decay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.position
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = OdysseyLightingRig;
function OdysseyPins({ clusters, onPinHover, onPinClick, lodCullRadius }) {
    _s4();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Diamond geometry for pins (octahedron = diamond shape)
    const pinGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OdysseyPins.useMemo[pinGeometry]": ()=>{
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctahedronGeometry"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].width, 0);
            // Scale to make it taller (diamond shape)
            geo.scale(1, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].height / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].width, 1);
            return geo;
        }
    }["OdysseyPins.useMemo[pinGeometry]"], []);
    const pinMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OdysseyPins.useMemo[pinMaterial]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].color,
                emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].color,
                emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].idleEmissive,
                metalness: 0.6,
                roughness: 0.2
            });
        }
    }["OdysseyPins.useMemo[pinMaterial]"], []);
    // Per-instance scale tracking for spring animation
    const scalesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(0));
    const velocitiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(0));
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync instance count
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OdysseyPins.useEffect": ()=>{
            if (clusters.length === 0) return;
            scalesRef.current = new Float32Array(clusters.length).fill(1.0);
            velocitiesRef.current = new Float32Array(clusters.length).fill(0);
            // Set initial instance matrices and colours
            if (!meshRef.current) return;
            const mesh = meshRef.current;
            for(let i = 0; i < clusters.length; i++){
                const c = clusters[i];
                _dummy.position.set(...c.position);
                // Orient pin to point outward from globe center
                _dummy.lookAt(0, 0, 0);
                _dummy.rotateX(Math.PI / 2); // Point diamond tip outward
                const scale = c.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].megaScale : 1.0;
                _dummy.scale.setScalar(scale);
                _dummy.updateMatrix();
                mesh.setMatrixAt(i, _dummy.matrix);
                // Instance colour: gold for regular, red for mega
                _tempColor.set(c.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].megaColor : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].color);
                mesh.setColorAt(i, _tempColor);
            }
            mesh.instanceMatrix.needsUpdate = true;
            if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        }
    }["OdysseyPins.useEffect"], [
        clusters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "OdysseyPins.useFrame": ({ clock }, delta)=>{
            if (!meshRef.current || clusters.length === 0) return;
            const mesh = meshRef.current;
            const t = clock.elapsedTime;
            const dt = Math.min(delta, 0.033);
            for(let i = 0; i < clusters.length; i++){
                const c = clusters[i];
                const isHovered = i === hoveredIndex;
                // Spring physics for scale
                const targetScale = isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].hoverScale : c.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].megaScale : 1.0;
                const springForce = (targetScale - scalesRef.current[i]) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].stiffness;
                const dampingForce = -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].damping * velocitiesRef.current[i];
                velocitiesRef.current[i] += (springForce + dampingForce) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].mass * dt;
                scalesRef.current[i] += velocitiesRef.current[i] * dt;
                scalesRef.current[i] = Math.max(0.5, Math.min(3.0, scalesRef.current[i]));
                // Bounce animation
                const bounce = Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].bounceHz + i * 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].bounceAmplitude;
                // Mega-pin pulse
                const megaPulse = c.isMega ? 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLUSTER"].pulseAmplitude * Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLUSTER"].pulseHz + i) : 1;
                // Update instance matrix
                _dummy.position.set(c.position[0] * (1 + bounce), c.position[1] * (1 + bounce), c.position[2] * (1 + bounce));
                _dummy.lookAt(0, 0, 0);
                _dummy.rotateX(Math.PI / 2);
                _dummy.scale.setScalar(scalesRef.current[i] * megaPulse);
                _dummy.updateMatrix();
                mesh.setMatrixAt(i, _dummy.matrix);
                // LOD culling
                _tempVec.set(...c.position);
                const dist = _tempVec.distanceTo(camera.position);
                // We can't hide individual instances, but we can scale to zero
                if (dist > lodCullRadius) {
                    _dummy.scale.setScalar(0);
                    _dummy.updateMatrix();
                    mesh.setMatrixAt(i, _dummy.matrix);
                }
                // Update emissive per hover
                _tempColor.copy(isHovered ? _pinWhiteColor : c.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].megaColor : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIN"].color);
                mesh.setColorAt(i, _tempColor);
            }
            mesh.instanceMatrix.needsUpdate = true;
            if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        }
    }["OdysseyPins.useFrame"]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPins.useCallback[handlePointerMove]": (e)=>{
            const event = e;
            event.stopPropagation?.();
            const idx = event.instanceId;
            if (idx !== undefined && idx < clusters.length) {
                setHoveredIndex(idx);
                onPinHover(clusters[idx]);
                document.body.style.cursor = "pointer";
            }
        }
    }["OdysseyPins.useCallback[handlePointerMove]"], [
        clusters,
        onPinHover
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPins.useCallback[handlePointerLeave]": ()=>{
            setHoveredIndex(null);
            onPinHover(null);
            document.body.style.cursor = "auto";
        }
    }["OdysseyPins.useCallback[handlePointerLeave]"], [
        onPinHover
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPins.useCallback[handleClick]": (e)=>{
            const event = e;
            event.stopPropagation?.();
            const idx = event.instanceId;
            if (idx !== undefined && idx < clusters.length) {
                onPinClick(clusters[idx]);
            }
        }
    }["OdysseyPins.useCallback[handleClick]"], [
        clusters,
        onPinClick
    ]);
    if (clusters.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            pinGeometry,
            pinMaterial,
            clusters.length
        ],
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave,
        onClick: handleClick
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 653,
        columnNumber: 5
    }, this);
}
_s4(OdysseyPins, "Yv9+zHMI6fz2ns+UBQ3dF8qvf0U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = OdysseyPins;
function HoloTooltip({ cluster }) {
    if (!cluster) return null;
    const hero = cluster.assets[0];
    const totalInCluster = cluster.assets.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        distanceFactor: 4,
        position: [
            cluster.position[0] * 1.15,
            cluster.position[1] * 1.15,
            cluster.position[2] * 1.15
        ],
        style: {
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            transition: {
                type: "spring",
                stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].stiffness,
                damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPRING_PHYSICS"].damping
            },
            style: {
                background: "rgba(15,23,42,0.92)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}50`,
                borderRadius: 12,
                padding: 0,
                width: 220,
                overflow: "hidden",
                boxShadow: `0 0 30px ${cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}30`
            },
            children: [
                hero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        height: 100,
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: hero.url,
                        alt: hero.title,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 705,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 703,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "10px 14px 12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "0.35em",
                                textTransform: "uppercase",
                                margin: 0,
                                opacity: 0.8
                            },
                            children: [
                                cluster.city,
                                cluster.country ? `, ${cluster.country}` : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                fontSize: 13,
                                fontWeight: 800,
                                lineHeight: 1.35,
                                margin: "5px 0 0",
                                letterSpacing: "-0.01em"
                            },
                            children: hero?.title ?? "Untitled"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this),
                        hero?.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                fontSize: 10,
                                opacity: 0.55,
                                margin: "4px 0 0",
                                lineHeight: 1.4,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            },
                            children: hero.caption
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                            lineNumber: 739,
                            columnNumber: 13
                        }, this),
                        totalInCluster > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                                fontSize: 10,
                                fontWeight: 600,
                                margin: "6px 0 0",
                                opacity: 0.7
                            },
                            children: [
                                "+",
                                totalInCluster - 1,
                                " more photo",
                                totalInCluster > 2 ? "s" : "",
                                " here"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                            lineNumber: 755,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
            lineNumber: 685,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 675,
        columnNumber: 5
    }, this);
}
_c4 = HoloTooltip;
function TravelLog({ clusters, onFlyTo, maxCities }) {
    _s5();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Top cities by asset count
    const topCities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TravelLog.useMemo[topCities]": ()=>{
            return clusters.filter({
                "TravelLog.useMemo[topCities]": (c)=>c.city
            }["TravelLog.useMemo[topCities]"]).sort({
                "TravelLog.useMemo[topCities]": (a, b)=>b.assets.length - a.assets.length
            }["TravelLog.useMemo[topCities]"]).slice(0, maxCities);
        }
    }["TravelLog.useMemo[topCities]"], [
        clusters,
        maxCities
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        style: {
            pointerEvents: "none",
            width: 0,
            height: 0
        },
        zIndexRange: [
            100,
            200
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "fixed",
                left: "max(16px, env(safe-area-inset-left, 12px))",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "auto",
                zIndex: 300
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setExpanded((v)=>!v),
                    style: {
                        background: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].slate}dd`,
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}40`,
                        borderRadius: 10,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "8px 14px",
                        cursor: "pointer",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                        display: "block"
                    },
                    children: expanded ? "✕ Close" : "🗺 Travel Log"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 801,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            x: 0,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            x: -20,
                            height: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                            damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping
                        },
                        style: {
                            background: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].slate}ee`,
                            backdropFilter: "blur(16px)",
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}30`,
                            borderRadius: 12,
                            padding: "10px 0",
                            maxHeight: 360,
                            overflowY: "auto",
                            width: 190
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                    fontSize: 9,
                                    fontWeight: 700,
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                    padding: "0 14px 8px",
                                    margin: 0,
                                    opacity: 0.5,
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}15`
                                },
                                children: "Top Destinations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 840,
                                columnNumber: 15
                            }, this),
                            topCities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onFlyTo(c),
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        padding: "7px 14px",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                                fontSize: 11,
                                                fontWeight: 600,
                                                opacity: 0.85
                                            },
                                            children: c.city || c.country
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                            lineNumber: 870,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: c.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                                                fontSize: 10,
                                                fontWeight: 700,
                                                opacity: 0.7
                                            },
                                            children: c.assets.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                            lineNumber: 878,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                    lineNumber: 855,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 824,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 822,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
            lineNumber: 792,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 791,
        columnNumber: 5
    }, this);
}
_s5(TravelLog, "JtktcnEeoNLcmSsoycEQfkCDVBU=");
_c5 = TravelLog;
function ClusterPanel({ cluster, visible, onClose, onSelectAsset, maxAssets }) {
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
            children: visible && cluster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(600px, 92vw)",
                    maxHeight: "40vh",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(3,7,18,0.97) 100%)`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}40`,
                    boxShadow: `0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}15`,
                    zIndex: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "14px 18px",
                            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}20`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: cluster.isMega ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinRed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: "0.35em",
                                            textTransform: "uppercase",
                                            margin: 0
                                        },
                                        children: [
                                            "📍 ",
                                            cluster.city,
                                            cluster.country ? `, ${cluster.country}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                        lineNumber: 944,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                            fontSize: 13,
                                            fontWeight: 800,
                                            margin: "2px 0 0"
                                        },
                                        children: [
                                            cluster.assets.length,
                                            " Photo",
                                            cluster.assets.length !== 1 ? "s" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                        lineNumber: 954,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 943,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}60`,
                                    fontSize: 22,
                                    cursor: "pointer",
                                    padding: 4
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 958,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 936,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                            gap: 4,
                            padding: 8,
                            overflowY: "auto",
                            maxHeight: "calc(40vh - 60px)"
                        },
                        children: cluster.assets.slice(0, maxAssets).map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelectAsset(asset),
                                style: {
                                    aspectRatio: "1",
                                    overflow: "hidden",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}20`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: asset.url,
                                    alt: asset.title,
                                    loading: "lazy",
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                    lineNumber: 988,
                                    columnNumber: 19
                                }, this)
                            }, asset.id, false, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 976,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 967,
                        columnNumber: 13
                    }, this)
                ]
            }, cluster.id, true, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 911,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
            lineNumber: 909,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 908,
        columnNumber: 5
    }, this);
}
_c6 = ClusterPanel;
function AssetDetailPanel({ asset, visible, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        style: {
            pointerEvents: "none",
            width: 0,
            height: 0
        },
        zIndexRange: [
            300,
            500
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
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(520px, 88vw)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: `linear-gradient(145deg, rgba(15,23,42,0.94) 0%, rgba(3,7,18,0.97) 100%)`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}40`,
                    boxShadow: `0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}15`,
                    zIndex: 600,
                    display: "flex",
                    gap: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 140,
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
                            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                            lineNumber: 1045,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 1043,
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
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                                    fontSize: 9,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    marginBottom: 6,
                                    opacity: 0.7
                                },
                                children: [
                                    "📍 ",
                                    asset.city,
                                    asset.country ? `, ${asset.country}` : "",
                                    " · ",
                                    asset.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 1050,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                    fontSize: 15,
                                    fontWeight: 800,
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8
                                },
                                children: asset.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 1053,
                                columnNumber: 15
                            }, this),
                            asset.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                                    fontSize: 11,
                                    opacity: 0.55,
                                    lineHeight: 1.5,
                                    margin: 0
                                },
                                children: asset.caption
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                                lineNumber: 1057,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 1049,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold}60`,
                            fontSize: 22,
                            cursor: "pointer",
                            padding: "0.75rem 1rem",
                            alignSelf: "flex-start"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                        lineNumber: 1064,
                        columnNumber: 13
                    }, this)
                ]
            }, asset.id, true, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1017,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
            lineNumber: 1015,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 1014,
        columnNumber: 5
    }, this);
}
_c7 = AssetDetailPanel;
// ─── Ambient Haze ─────────────────────────────────────────────────────────────
function AmbientHaze() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.factor,
                saturation: 0.6,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1082,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.factor,
                saturation: 0.3,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1083,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c8 = AmbientHaze;
// ─── Stats HUD ────────────────────────────────────────────────────────────────
function StatsHUD({ totalCount, clusterCount, loading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        distanceFactor: 10,
        position: [
            0,
            -1.8,
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
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].atmosphereRim,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        margin: 0,
                        opacity: 0.6
                    },
                    children: loading ? "Mapping Journey..." : "The Global Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 1094,
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
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].coolWhite,
                        fontSize: 20,
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        margin: "4px 0 0",
                        textShadow: `0 0 30px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].skyBlue}40`
                    },
                    children: totalCount > 0 ? `${totalCount.toLocaleString()} Moments` : "..."
                }, totalCount, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 1110,
                    columnNumber: 9
                }, this),
                clusterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].pinGold,
                        fontSize: 10,
                        fontWeight: 600,
                        margin: "2px 0 0",
                        opacity: 0.5
                    },
                    children: [
                        clusterCount,
                        " locations mapped"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 1126,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
            lineNumber: 1093,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 1092,
        columnNumber: 5
    }, this);
}
_c9 = StatsHUD;
function OdysseyPlanetVisual() {
    _s6();
    const [hoveredCluster, setHoveredCluster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCluster, setSelectedCluster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flyToTarget, setFlyToTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAsset, setSelectedAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAssetDetail, setShowAssetDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "OdysseyPlanetVisual.useDeviceStore[tier]": (s)=>s.tier
    }["OdysseyPlanetVisual.useDeviceStore[tier]"]);
    const budget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OdysseyPlanetVisual.useMemo[budget]": ()=>{
            if (tier === "mobile") {
                return {
                    maxMarkers: 120,
                    lodCullRadius: 9,
                    maxTravelCities: 10,
                    maxClusterAssets: 20
                };
            }
            if (tier === "tablet") {
                return {
                    maxMarkers: 180,
                    lodCullRadius: 10,
                    maxTravelCities: 14,
                    maxClusterAssets: 30
                };
            }
            return {
                maxMarkers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MARKERS"],
                lodCullRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOD_CULL_RADIUS"],
                maxTravelCities: 20,
                maxClusterAssets: 50
            };
        }
    }["OdysseyPlanetVisual.useMemo[budget]"], [
        tier
    ]);
    const { clusters, totalCount, loading } = useOdysseyAssets(budget.maxMarkers);
    const handlePinHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handlePinHover]": (cluster)=>{
            setHoveredCluster(cluster);
        }
    }["OdysseyPlanetVisual.useCallback[handlePinHover]"], []);
    const handlePinClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handlePinClick]": (cluster)=>{
            if (cluster.isMega || cluster.assets.length > 1) {
                // Mega-pin or multi-asset: open cluster panel
                setSelectedCluster(cluster);
            } else if (cluster.assets.length === 1) {
                // Single asset: open detail directly
                setSelectedAsset(cluster.assets[0]);
                setShowAssetDetail(true);
            }
            // Fly to the clicked pin
            setFlyToTarget(cluster);
        }
    }["OdysseyPlanetVisual.useCallback[handlePinClick]"], []);
    const handleFlyTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handleFlyTo]": (cluster)=>{
            setFlyToTarget(cluster);
        }
    }["OdysseyPlanetVisual.useCallback[handleFlyTo]"], []);
    const handleCloseCluster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handleCloseCluster]": ()=>{
            setSelectedCluster(null);
        }
    }["OdysseyPlanetVisual.useCallback[handleCloseCluster]"], []);
    const handleSelectAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handleSelectAsset]": (asset)=>{
            setSelectedAsset(asset);
            setShowAssetDetail(true);
        }
    }["OdysseyPlanetVisual.useCallback[handleSelectAsset]"], []);
    const handleCloseAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OdysseyPlanetVisual.useCallback[handleCloseAsset]": ()=>{
            setShowAssetDetail(false);
            setSelectedAsset(null);
        }
    }["OdysseyPlanetVisual.useCallback[handleCloseAsset]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environment,
                background: false,
                environmentIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$OdysseyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environmentIntensity
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OdysseyLightingRig, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientHaze, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtmosphericGlow, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EarthGlobe, {
                    flyToTarget: flyToTarget
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                    lineNumber: 1232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OdysseyPins, {
                clusters: clusters,
                onPinHover: handlePinHover,
                onPinClick: handlePinClick,
                lodCullRadius: budget.lodCullRadius
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1236,
                columnNumber: 7
            }, this),
            hoveredCluster && !selectedCluster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HoloTooltip, {
                cluster: hoveredCluster
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1245,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsHUD, {
                totalCount: totalCount,
                clusterCount: clusters.length,
                loading: loading
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TravelLog, {
                clusters: clusters,
                onFlyTo: handleFlyTo,
                maxCities: budget.maxTravelCities
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClusterPanel, {
                cluster: selectedCluster,
                visible: !!selectedCluster,
                onClose: handleCloseCluster,
                onSelectAsset: handleSelectAsset,
                maxAssets: budget.maxClusterAssets
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetDetailPanel, {
                asset: selectedAsset,
                visible: showAssetDetail,
                onClose: handleCloseAsset
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
                lineNumber: 1264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/OdysseyPlanet/index.tsx",
        lineNumber: 1217,
        columnNumber: 5
    }, this);
}
_s6(OdysseyPlanetVisual, "l2EIKhg84XFkybSwdbuws6vjyrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        useOdysseyAssets
    ];
});
_c10 = OdysseyPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "EarthGlobe");
__turbopack_context__.k.register(_c1, "AtmosphericGlow");
__turbopack_context__.k.register(_c2, "OdysseyLightingRig");
__turbopack_context__.k.register(_c3, "OdysseyPins");
__turbopack_context__.k.register(_c4, "HoloTooltip");
__turbopack_context__.k.register(_c5, "TravelLog");
__turbopack_context__.k.register(_c6, "ClusterPanel");
__turbopack_context__.k.register(_c7, "AssetDetailPanel");
__turbopack_context__.k.register(_c8, "AmbientHaze");
__turbopack_context__.k.register(_c9, "StatsHUD");
__turbopack_context__.k.register(_c10, "OdysseyPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9f80a7fe._.js.map