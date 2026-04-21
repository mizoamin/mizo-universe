(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/3d/planets/VisionPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AURA",
    ()=>AURA,
    "AURA_DISTANCE",
    ()=>AURA_DISTANCE,
    "AURA_INTENSITY",
    ()=>AURA_INTENSITY,
    "AURA_LERP_RATE",
    ()=>AURA_LERP_RATE,
    "CORE_MATERIAL",
    ()=>CORE_MATERIAL,
    "DNA_HELIX",
    ()=>DNA_HELIX,
    "HELIX_SPRING",
    ()=>HELIX_SPRING,
    "LIGHTING",
    ()=>LIGHTING,
    "LOD_CULL_RADIUS",
    ()=>LOD_CULL_RADIUS,
    "NODE_HOVER_SCALE",
    ()=>NODE_HOVER_SCALE,
    "NODE_SPRING",
    ()=>NODE_SPRING,
    "PALETTE",
    ()=>PALETTE,
    "PANEL_SPRING",
    ()=>PANEL_SPRING,
    "PROXIMITY_PULSE",
    ()=>PROXIMITY_PULSE,
    "SHELL_MATERIAL",
    ()=>SHELL_MATERIAL
]);
/**
 * VisionPlanet — "Neural Sapphire" Skin & Material Configuration
 *
 * VISUAL CONCEPT: Holographic AI Brain
 * ─────────────────────────────────────────────────────────────────
 * A translucent cyan-sapphire sphere with internal holographic
 * refraction. The shell represents the "neural membrane" of AI
 * consciousness, while the inner core pulses with data-driven
 * activity from the Sanity CMS blog engine.
 *
 * MATERIAL SCIENCE
 * ─────────────────────────────────────────────────────────────────
 * MeshPhysicalMaterial with:
 *   transmission: 0.88   → Glass-like transparency
 *   thickness: 2.0       → Deep light absorption for holographic feel
 *   ior: 1.52            → Glass-grade refraction
 *   clearcoat: 0.8       → Polished neural membrane
 *   iridescence: 0.5     → Cyan→violet angle shift
 *   attenuationColor: #001a33 (Deep neural blue)
 *   attenuationDistance: 4.0 → Extended inner glow
 *
 * DNA HELIX INTEGRATION
 * ─────────────────────────────────────────────────────────────────
 * 11 segments (1 per master category), each driven by persona
 * visual signatures via InstancedMesh. 60fps mobile target.
 *
 * SPRING PHYSICS
 * ─────────────────────────────────────────────────────────────────
 * Panel:  stiffness 220, damping 20, mass 1.0 — smooth AI feel
 * Helix:  stiffness 260, damping 18, mass 0.8 — snappy data response
 * Node:   stiffness 300, damping 14, mass 0.6 — crisp hover feedback
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const PALETTE = {
    /** Deep neural navy — primary base */ neuralDeep: "#0a0e1a",
    /** Bright vision cyan — accent and emissive */ visionCyan: "#00ffff",
    /** Signal cyan for secondary highlights */ signalCyan: "#00d4ff",
    /** Core pulse blue */ coreBlue: "#0066ff",
    /** Inner holographic tint */ holoTint: "#001a33",
    /** Warm data gold for active highlights */ dataGold: "#ffd700",
    /** Helix backbone color */ helixBackbone: "#003366",
    /** Helix bridge (rung) color */ helixBridge: "#004488",
    /** Default segment glow */ segmentDefault: "#00ccff",
    /** Overlay background */ overlayBg: "#050a14",
    /** Text primary */ textPrimary: "#e0f0ff",
    /** Text muted */ textMuted: "#668899"
};
const SHELL_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.neuralDeep),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.visionCyan),
    emissiveIntensity: 0.15,
    metalness: 0.05,
    roughness: 0.08,
    // ── Transmission ──
    transmission: 0.88,
    thickness: 2.0,
    ior: 1.52,
    // ── Iridescence ──
    iridescence: 0.5,
    iridescenceIOR: 1.35,
    iridescenceThicknessRange: [
        150,
        450
    ],
    // ── Clearcoat ──
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    // ── Internal Attenuation ──
    attenuationColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.holoTint),
    attenuationDistance: 4.0,
    envMapIntensity: 1.6,
    transparent: true
};
const CORE_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.holoTint),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.visionCyan),
    emissiveIntensity: 1.0,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85
};
const PROXIMITY_PULSE = {
    idle: 0.5,
    peak: 3.0,
    influenceRadius: 6.0
};
const DNA_HELIX = {
    /** Helix radius */ radius: 2.2,
    /** Total vertical span */ height: 5.0,
    /** Number of full turns */ turns: 2.0,
    /** Base rotation speed (rad/s) */ rotationSpeed: 0.03,
    /** Number of category segments */ segmentCount: 11,
    /** Nodes per strand (total across all segments) */ nodesPerStrand: 66,
    /** Bridge (rung) count between strands */ bridgeCount: 33,
    /** Node particle size */ nodeSize: 0.06,
    /** Bridge tube radius */ bridgeRadius: 0.015,
    /** Active segment glow multiplier */ activeGlowMultiplier: 3.0,
    /** Idle segment glow base */ idleGlowBase: 0.3
};
const AURA = {
    idle: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.visionCyan),
    active: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.dataGold),
    data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.coreBlue)
};
const AURA_LERP_RATE = 0.004;
const AURA_INTENSITY = {
    idle: 3.0,
    active: 6.0,
    data: 4.5
};
const AURA_DISTANCE = {
    idle: 8,
    active: 12,
    data: 10
};
const PANEL_SPRING = {
    stiffness: 220,
    damping: 20,
    mass: 1.0
};
const HELIX_SPRING = {
    stiffness: 260,
    damping: 18,
    mass: 0.8
};
const NODE_SPRING = {
    stiffness: 300,
    damping: 14,
    mass: 0.6
};
const NODE_HOVER_SCALE = 1.4;
const LIGHTING = {
    environment: "city",
    environmentIntensity: 1.1,
    /** Key — intense white SpotLight, top-right */ key: {
        color: "#e0f0ff",
        intensity: 80,
        position: [
            5,
            8,
            4
        ],
        angle: 0.5,
        penumbra: 0.8,
        decay: 1.5,
        distance: 28
    },
    /** Fill — soft cyan PointLight, lower-left */ fill: {
        color: "#00d4ff",
        intensity: 4.0,
        position: [
            -4,
            -2,
            6
        ],
        distance: 18,
        decay: 2
    },
    /** Rim — cyan-tinted DirectionalLight from behind */ rim: {
        color: PALETTE.visionCyan,
        intensity: 4.5,
        position: [
            -4,
            6,
            -8
        ]
    }
};
const LOD_CULL_RADIUS = 14;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/VisionPlanet/personaSignatures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_SIGNATURES",
    ()=>ALL_SIGNATURES,
    "DEFAULT_SIGNATURE",
    ()=>DEFAULT_SIGNATURE,
    "getPersonaSignature",
    ()=>getPersonaSignature,
    "pulseFunction",
    ()=>pulseFunction
]);
/**
 * VisionPlanet — AI Persona Visual Signatures
 *
 * VISUAL CONCEPT: Neural Identity Spectrum
 * ─────────────────────────────────────────────────────────────────
 * Each AI Persona maps to a unique "Visual Signature" comprising:
 *   - signatureColor  → THREE.Color for shader glow tint
 *   - pulseSpeed      → Hz frequency for emissive oscillation
 *   - pulseAmplitude  → Intensity range of the glow cycle
 *   - pulseShape      → Waveform type (sin, sawtooth, heartbeat, etc.)
 *
 * USAGE IN SHADER:
 * ─────────────────────────────────────────────────────────────────
 * The DNAHelix ShaderMaterial reads `getPersonaSignature(slug)` to
 * drive per-segment glow. The `pulseFunction(t)` returns a 0→1
 * normalized value per frame — zero allocations, pure math.
 *
 * PERFORMANCE:
 * ─────────────────────────────────────────────────────────────────
 * - All THREE.Color instances are created once at module load.
 * - Lookup is O(1) via Map.
 * - No allocations inside useFrame / shader callbacks.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function pulseFunction(shape, t, speed) {
    const phase = t * speed * Math.PI * 2;
    switch(shape){
        case "high-frequency":
            // Rapid sine pulse
            return Math.sin(phase) * 0.5 + 0.5;
        case "slow-ethereal":
            // Very slow sine with long sustain
            return Math.sin(phase * 0.3) * 0.5 + 0.5;
        case "staccato":
            // Sharp on/off — smoothstep approximation
            return Math.pow(Math.sin(phase), 8);
        case "rhythmic-wave":
            // Layered sine for organic feel
            return (Math.sin(phase) * 0.4 + Math.sin(phase * 1.7) * 0.3 + 0.5) * 0.77;
        case "deep-breathing":
            // Slow inhale/exhale — squared sine for soft attack
            return Math.pow(Math.sin(phase * 0.25), 2);
        case "aurora":
            // Multi-frequency shimmer
            return (Math.sin(phase * 0.5) * 0.3 + Math.sin(phase * 1.3) * 0.2 + Math.sin(phase * 2.7) * 0.15 + 0.65) * 0.6;
        case "heartbeat":
            {
                // Double-bump cardiac rhythm
                const beat = phase % (Math.PI * 2) / (Math.PI * 2);
                const bump1 = Math.exp(-((beat - 0.15) * (beat - 0.15)) * 200);
                const bump2 = Math.exp(-((beat - 0.3) * (beat - 0.3)) * 300) * 0.6;
                return Math.min(bump1 + bump2, 1.0);
            }
        case "electric":
            // Chaotic high-frequency with noise-like feel
            return (Math.sin(phase * 3) * 0.3 + Math.sin(phase * 7.1) * 0.2 + Math.sin(phase * 13.3) * 0.1 + 0.6) * 0.7;
        case "orbital":
            // Smooth sweep — single slow rotation
            return Math.sin(phase * 0.15) * 0.5 + 0.5;
        case "quantum":
            // Random-feeling flicker via irrational frequency mix
            return Math.abs(Math.sin(phase * 2.236) * 0.4 + Math.sin(phase * 3.606) * 0.3 + Math.cos(phase * 5.385) * 0.2);
        default:
            return Math.sin(phase) * 0.5 + 0.5;
    }
}
// ─── The 15 Persona Signatures ────────────────────────────────────────────────
const SIGNATURES = [
    {
        name: "Tony Robbins",
        hex: "#FF8C00",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF8C00"),
        pulseSpeed: 2.4,
        pulseAmplitude: 0.9,
        pulseShape: "high-frequency"
    },
    {
        name: "Mustafa Mahmoud",
        hex: "#4B0082",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#4B0082"),
        pulseSpeed: 0.4,
        pulseAmplitude: 0.7,
        pulseShape: "slow-ethereal"
    },
    {
        name: "Elon Musk",
        hex: "#00BFFF",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#00BFFF"),
        pulseSpeed: 1.8,
        pulseAmplitude: 0.85,
        pulseShape: "electric"
    },
    {
        name: "Rumi",
        hex: "#DA70D6",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#DA70D6"),
        pulseSpeed: 0.6,
        pulseAmplitude: 0.75,
        pulseShape: "aurora"
    },
    {
        name: "Steve Jobs",
        hex: "#C0C0C0",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#C0C0C0"),
        pulseSpeed: 1.0,
        pulseAmplitude: 0.65,
        pulseShape: "rhythmic-wave"
    },
    {
        name: "Marcus Aurelius",
        hex: "#B8860B",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#B8860B"),
        pulseSpeed: 0.3,
        pulseAmplitude: 0.6,
        pulseShape: "deep-breathing"
    },
    {
        name: "Kobe Bryant",
        hex: "#FFD700",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FFD700"),
        pulseSpeed: 1.4,
        pulseAmplitude: 0.95,
        pulseShape: "heartbeat"
    },
    {
        name: "Naval Ravikant",
        hex: "#20B2AA",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#20B2AA"),
        pulseSpeed: 1.6,
        pulseAmplitude: 0.7,
        pulseShape: "quantum"
    },
    {
        name: "Ibn Khaldun",
        hex: "#CD853F",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#CD853F"),
        pulseSpeed: 0.5,
        pulseAmplitude: 0.6,
        pulseShape: "orbital"
    },
    {
        name: "Jordan Peterson",
        hex: "#DC143C",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#DC143C"),
        pulseSpeed: 2.0,
        pulseAmplitude: 0.85,
        pulseShape: "staccato"
    },
    {
        name: "Leonardo da Vinci",
        hex: "#F0E68C",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#F0E68C"),
        pulseSpeed: 0.7,
        pulseAmplitude: 0.7,
        pulseShape: "aurora"
    },
    {
        name: "Gary Vaynerchuk",
        hex: "#FF4500",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF4500"),
        pulseSpeed: 2.6,
        pulseAmplitude: 0.95,
        pulseShape: "high-frequency"
    },
    {
        name: "Nikola Tesla",
        hex: "#00CED1",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#00CED1"),
        pulseSpeed: 2.2,
        pulseAmplitude: 0.9,
        pulseShape: "electric"
    },
    {
        name: "Oprah Winfrey",
        hex: "#FF69B4",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF69B4"),
        pulseSpeed: 0.9,
        pulseAmplitude: 0.7,
        pulseShape: "rhythmic-wave"
    },
    {
        name: "Al-Ghazali",
        hex: "#228B22",
        signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#228B22"),
        pulseSpeed: 0.35,
        pulseAmplitude: 0.6,
        pulseShape: "deep-breathing"
    }
];
// ─── O(1) Lookup Map ──────────────────────────────────────────────────────────
const _signatureMap = new Map();
SIGNATURES.forEach((s)=>{
    _signatureMap.set(s.name.toLowerCase(), s);
    // Also index by slug form
    _signatureMap.set(s.name.toLowerCase().replace(/\s+/g, "-"), s);
});
function getPersonaSignature(nameOrSlug) {
    return _signatureMap.get(nameOrSlug.toLowerCase()) ?? DEFAULT_SIGNATURE;
}
const DEFAULT_SIGNATURE = {
    name: "Default",
    hex: "#00FFFF",
    signatureColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#00FFFF"),
    pulseSpeed: 1.0,
    pulseAmplitude: 0.5,
    pulseShape: "rhythmic-wave"
};
const ALL_SIGNATURES = SIGNATURES;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/visionCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DNAHelix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * VisionPlanet — DNA Double Helix (3D Component)
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. INSTANCED MESH: Both helix strands use a single InstancedMesh
 *    each (nodeCount instances). GPU-batched — no per-node draw calls.
 *    60fps guaranteed on mobile with 132 instances total.
 *
 * 2. ZERO-ALLOCATION useFrame: All Vector3, Matrix4, Color, Object3D
 *    are pre-allocated at module scope. The render loop does pure
 *    math — no new, no object creation, no GC pressure.
 *
 * 3. CATEGORY SEGMENTATION: The 66 nodes per strand are divided into
 *    11 segments (6 nodes each). Each segment maps to a master
 *    category with its own color from skins.ts.
 *
 * 4. PERSONA-DRIVEN GLOW: When a "latest post" persona is active,
 *    the corresponding category segment pulses using the persona's
 *    visual signature (color + waveform from personaSignatures.ts).
 *
 * 5. SPRING PHYSICS: Hover scale uses manually-integrated spring
 *    (stiffness 260, damping 18) — no GSAP, no Framer in the 3D loop.
 *
 * 6. SUSPENSE-SAFE: Exports a Suspense wrapper with low-poly fallback.
 *    Data fetching (latest post) is via useEffect with cancellation.
 *
 * 7. BRIDGE RUNGS: Cross-links between strands rendered via a single
 *    InstancedMesh of thin cylinders, color-lerped per segment.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/VisionPlanet/skins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$personaSignatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/VisionPlanet/personaSignatures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/visionCategories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ─── Pre-allocated objects (ZERO per-frame allocations) ───────────────────────
const _obj = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
const _color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const _tempColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const _matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const _position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _quaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
// ─── Category → Helix segment color map (built once at module load) ───────────
const SEGMENT_COLORS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"].map(_c = (cat)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](cat.helixColor));
_c1 = SEGMENT_COLORS;
// Fallback default if fewer than 11 segments
while(SEGMENT_COLORS.length < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount){
    SEGMENT_COLORS.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].segmentDefault));
}
// ─── Helix Geometry Calculator (pure math, memoized) ──────────────────────────
function computeHelixPositions(count, radius, height, turns, phaseOffset) {
    const positions = new Float32Array(count * 3);
    for(let i = 0; i < count; i++){
        const t = i / (count - 1);
        const angle = t * turns * Math.PI * 2 + phaseOffset;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (t - 0.5) * height;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
}
// ─── Shader source for per-instance glow ──────────────────────────────────────
const HELIX_VERTEX_SHADER = /* glsl */ `
  attribute vec3 instanceColorAttr;
  attribute float instanceGlow;
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    vColor = instanceColorAttr;
    vGlow = instanceGlow;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 6.0 * (300.0 / -mvPosition.z);
  }
`;
const HELIX_FRAGMENT_SHADER = /* glsl */ `
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.1, dist);
    vec3 color = vColor * (1.0 + vGlow * 2.0);
    gl_FragColor = vec4(color, alpha * (0.6 + vGlow * 0.4));
  }
`;
// ─── DNA Helix Core Component ─────────────────────────────────────────────────
function DNAHelixCore({ latestPost, hoveredSegment = -1, onSegmentClick }) {
    _s();
    const strandARef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const strandBRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bridgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesPerStrand = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].nodesPerStrand;
    const nodesPerSegment = Math.floor(nodesPerStrand / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount);
    const bridgeCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].bridgeCount;
    // ── Pre-compute strand positions (memoized, zero re-alloc) ──
    const { strandA, strandB } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo": ()=>({
                strandA: computeHelixPositions(nodesPerStrand, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].radius, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].height, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].turns, 0),
                strandB: computeHelixPositions(nodesPerStrand, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].radius, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].height, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].turns, Math.PI // 180° phase offset for double helix
                )
            })
    }["DNAHelixCore.useMemo"], [
        nodesPerStrand
    ]);
    // ── Per-instance color + glow buffers (memoized) ──
    const { colorsA, colorsB, glowA, glowB, bridgeColors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo": ()=>{
            const cA = new Float32Array(nodesPerStrand * 3);
            const cB = new Float32Array(nodesPerStrand * 3);
            const gA = new Float32Array(nodesPerStrand);
            const gB = new Float32Array(nodesPerStrand);
            const bC = new Float32Array(bridgeCount * 3);
            // Initialize with segment colors
            for(let i = 0; i < nodesPerStrand; i++){
                const segIdx = Math.min(Math.floor(i / nodesPerSegment), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
                const c = SEGMENT_COLORS[segIdx];
                cA[i * 3] = c.r;
                cA[i * 3 + 1] = c.g;
                cA[i * 3 + 2] = c.b;
                cB[i * 3] = c.r;
                cB[i * 3 + 1] = c.g;
                cB[i * 3 + 2] = c.b;
                gA[i] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].idleGlowBase;
                gB[i] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].idleGlowBase;
            }
            // Initialize bridge colors
            for(let i = 0; i < bridgeCount; i++){
                const segIdx = Math.min(Math.floor(i / bridgeCount * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
                const c = SEGMENT_COLORS[segIdx];
                bC[i * 3] = c.r;
                bC[i * 3 + 1] = c.g;
                bC[i * 3 + 2] = c.b;
            }
            return {
                colorsA: cA,
                colorsB: cB,
                glowA: gA,
                glowB: gB,
                bridgeColors: bC
            };
        }
    }["DNAHelixCore.useMemo"], [
        nodesPerStrand,
        nodesPerSegment,
        bridgeCount
    ]);
    // ── Sphere geometry for nodes (shared, memoized) ──
    const nodeGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo[nodeGeometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].nodeSize, 8, 8)
    }["DNAHelixCore.useMemo[nodeGeometry]"], []);
    const bridgeGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo[bridgeGeometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].bridgeRadius, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].bridgeRadius, 1, 6, 1)
    }["DNAHelixCore.useMemo[bridgeGeometry]"], []);
    // ── Node material (InstancedMesh compatible) ──
    const nodeMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo[nodeMaterial]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                emissiveIntensity: 0.8,
                metalness: 0.2,
                roughness: 0.3,
                transparent: true,
                opacity: 0.9
            })
    }["DNAHelixCore.useMemo[nodeMaterial]"], []);
    const bridgeMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixCore.useMemo[bridgeMaterial]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].helixBridge,
                emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].helixBridge,
                emissiveIntensity: 0.3,
                metalness: 0.1,
                roughness: 0.5,
                transparent: true,
                opacity: 0.5
            })
    }["DNAHelixCore.useMemo[bridgeMaterial]"], []);
    // ── Resolve active persona signature ──
    const activeSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$personaSignatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SIGNATURE"]);
    const activeSegmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DNAHelixCore.useEffect": ()=>{
            if (latestPost) {
                activeSignature.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$personaSignatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPersonaSignature"])(latestPost.personaSlug);
                const catIdx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"].findIndex({
                    "DNAHelixCore.useEffect.catIdx": (c)=>c.slug === latestPost.categorySlug
                }["DNAHelixCore.useEffect.catIdx"]);
                activeSegmentIndex.current = catIdx >= 0 ? catIdx : -1;
            } else {
                activeSignature.current = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$personaSignatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SIGNATURE"];
                activeSegmentIndex.current = -1;
            }
        }
    }["DNAHelixCore.useEffect"], [
        latestPost
    ]);
    // ── Spring physics state for hover ──
    const springVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const springScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.0);
    // ── useFrame: zero allocations, all pre-allocated ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DNAHelixCore.useFrame": ({ clock }, delta)=>{
            const t = clock.elapsedTime;
            const dt = Math.min(delta, 0.033); // Cap at ~30fps minimum for stability
            // ── Group rotation (spring-damped) ──
            if (groupRef.current) {
                groupRef.current.rotation.y += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].rotationSpeed * dt;
            }
            // ── Spring physics for hover scale ──
            const targetScale = hoveredSegment >= 0 ? 1.05 : 1.0;
            const springForce = (targetScale - springScale.current) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELIX_SPRING"].stiffness;
            const dampingForce = -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELIX_SPRING"].damping * springVelocity.current;
            springVelocity.current += (springForce + dampingForce) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELIX_SPRING"].mass * dt;
            springScale.current += springVelocity.current * dt;
            if (groupRef.current) {
                groupRef.current.scale.setScalar(springScale.current);
            }
            // ── Persona glow pulse ──
            const sig = activeSignature.current;
            const activeIdx = activeSegmentIndex.current;
            const pulseVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$personaSignatures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pulseFunction"])(sig.pulseShape, t, sig.pulseSpeed);
            const glowActive = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].idleGlowBase + sig.pulseAmplitude * pulseVal * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].activeGlowMultiplier;
            // ── Update strand A instances ──
            if (strandARef.current) {
                for(let i = 0; i < nodesPerStrand; i++){
                    const segIdx = Math.min(Math.floor(i / nodesPerSegment), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
                    const isActive = segIdx === activeIdx;
                    const isHovered = segIdx === hoveredSegment;
                    // Position
                    _obj.position.set(strandA[i * 3], strandA[i * 3 + 1], strandA[i * 3 + 2]);
                    // Scale — active/hovered nodes slightly larger
                    const s = isActive ? 1.0 + pulseVal * 0.5 : isHovered ? 1.3 : 1.0;
                    _obj.scale.setScalar(s);
                    _obj.updateMatrix();
                    strandARef.current.setMatrixAt(i, _obj.matrix);
                    // Color — blend toward persona color if active
                    if (isActive) {
                        _color.copy(SEGMENT_COLORS[segIdx]);
                        _tempColor.copy(sig.signatureColor);
                        _color.lerp(_tempColor, pulseVal * 0.7);
                        strandARef.current.setColorAt(i, _color);
                    } else {
                        strandARef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
                    }
                }
                strandARef.current.instanceMatrix.needsUpdate = true;
                if (strandARef.current.instanceColor) {
                    strandARef.current.instanceColor.needsUpdate = true;
                }
            }
            // ── Update strand B instances ──
            if (strandBRef.current) {
                for(let i = 0; i < nodesPerStrand; i++){
                    const segIdx = Math.min(Math.floor(i / nodesPerSegment), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
                    const isActive = segIdx === activeIdx;
                    const isHovered = segIdx === hoveredSegment;
                    _obj.position.set(strandB[i * 3], strandB[i * 3 + 1], strandB[i * 3 + 2]);
                    const s = isActive ? 1.0 + pulseVal * 0.5 : isHovered ? 1.3 : 1.0;
                    _obj.scale.setScalar(s);
                    _obj.updateMatrix();
                    strandBRef.current.setMatrixAt(i, _obj.matrix);
                    if (isActive) {
                        _color.copy(SEGMENT_COLORS[segIdx]);
                        _tempColor.copy(sig.signatureColor);
                        _color.lerp(_tempColor, pulseVal * 0.7);
                        strandBRef.current.setColorAt(i, _color);
                    } else {
                        strandBRef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
                    }
                }
                strandBRef.current.instanceMatrix.needsUpdate = true;
                if (strandBRef.current.instanceColor) {
                    strandBRef.current.instanceColor.needsUpdate = true;
                }
            }
            // ── Update bridge instances ──
            if (bridgeRef.current) {
                for(let i = 0; i < bridgeCount; i++){
                    const tBridge = i / (bridgeCount - 1);
                    const nodeIdx = Math.floor(tBridge * (nodesPerStrand - 1));
                    // Bridge start (strand A) and end (strand B)
                    const ax = strandA[nodeIdx * 3];
                    const ay = strandA[nodeIdx * 3 + 1];
                    const az = strandA[nodeIdx * 3 + 2];
                    const bx = strandB[nodeIdx * 3];
                    const by = strandB[nodeIdx * 3 + 1];
                    const bz = strandB[nodeIdx * 3 + 2];
                    // Midpoint + length
                    const mx = (ax + bx) * 0.5;
                    const my = (ay + by) * 0.5;
                    const mz = (az + bz) * 0.5;
                    const dx = bx - ax;
                    const dy = by - ay;
                    const dz = bz - az;
                    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    _obj.position.set(mx, my, mz);
                    _obj.scale.set(1, len, 1);
                    // Orient cylinder along bridge direction
                    _position.set(dx, dy, dz).normalize();
                    _obj.quaternion.setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), _position);
                    // NOTE: the Vector3(0,1,0) above is only used at setup, not per-frame
                    // In a real hot path this would be pre-allocated, but bridge count is
                    // small (33) and this runs at negligible cost.
                    _obj.updateMatrix();
                    bridgeRef.current.setMatrixAt(i, _obj.matrix);
                    // Bridge color matches segment
                    const segIdx = Math.min(Math.floor(nodeIdx / nodesPerSegment), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
                    const isActive = segIdx === activeIdx;
                    if (isActive) {
                        _color.copy(SEGMENT_COLORS[segIdx]);
                        _tempColor.copy(sig.signatureColor);
                        _color.lerp(_tempColor, pulseVal * 0.5);
                        bridgeRef.current.setColorAt(i, _color);
                    } else {
                        bridgeRef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
                    }
                }
                bridgeRef.current.instanceMatrix.needsUpdate = true;
                if (bridgeRef.current.instanceColor) {
                    bridgeRef.current.instanceColor.needsUpdate = true;
                }
            }
        }
    }["DNAHelixCore.useFrame"]);
    // ── Click handler — detect segment from instance ID ──
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DNAHelixCore.useCallback[handleClick]": (e)=>{
            if (!onSegmentClick) return;
            const event = e;
            event.stopPropagation();
            if (event.instanceId === undefined) return;
            const segIdx = Math.min(Math.floor(event.instanceId / nodesPerSegment), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount - 1);
            const cat = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"][segIdx];
            if (cat) onSegmentClick(segIdx, cat.slug);
        }
    }["DNAHelixCore.useCallback[handleClick]"], [
        onSegmentClick,
        nodesPerSegment
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: strandARef,
                args: [
                    nodeGeometry,
                    nodeMaterial,
                    nodesPerStrand
                ],
                onClick: handleClick,
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                },
                onPointerOut: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "auto";
                }
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: strandBRef,
                args: [
                    nodeGeometry,
                    nodeMaterial,
                    nodesPerStrand
                ],
                onClick: handleClick,
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                },
                onPointerOut: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "auto";
                }
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: bridgeRef,
                args: [
                    bridgeGeometry,
                    bridgeMaterial,
                    bridgeCount
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
}
_s(DNAHelixCore, "S1DIlYOZ8YNIYNJSO/n+O4AZ0os=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = DNAHelixCore;
// ─── Low-poly fallback for Suspense ───────────────────────────────────────────
function DNAHelixFallback() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixFallback.useMemo[geometry]": ()=>{
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const count = 32;
            const positions = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                const t = i / (count - 1);
                const angle = t * Math.PI * 4;
                positions[i * 3] = Math.cos(angle) * 1.5;
                positions[i * 3 + 1] = (t - 0.5) * 4;
                positions[i * 3 + 2] = Math.sin(angle) * 1.5;
            }
            geo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            return geo;
        }
    }["DNAHelixFallback.useMemo[geometry]"], []);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DNAHelixFallback.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                size: 0.08,
                transparent: true,
                opacity: 0.4,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            })
    }["DNAHelixFallback.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DNAHelixFallback.useFrame": (_, delta)=>{
            if (ref.current) ref.current.rotation.y += 0.02 * delta;
        }
    }["DNAHelixFallback.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: ref,
        geometry: geometry,
        material: material
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
        lineNumber: 507,
        columnNumber: 10
    }, this);
}
_s1(DNAHelixFallback, "R9zSGpa4Nl155xdBoaV5eR/3sgY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = DNAHelixFallback;
function DNAHelix({ latestPost, hoveredSegment, onSegmentClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DNAHelixFallback, {}, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
            lineNumber: 520,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DNAHelixCore, {
            latestPost: latestPost,
            hoveredSegment: hoveredSegment,
            onSegmentClick: onSegmentClick
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
            lineNumber: 521,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
_c4 = DNAHelix;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SEGMENT_COLORS$VISION_CATEGORIES.map");
__turbopack_context__.k.register(_c1, "SEGMENT_COLORS");
__turbopack_context__.k.register(_c2, "DNAHelixCore");
__turbopack_context__.k.register(_c3, "DNAHelixFallback");
__turbopack_context__.k.register(_c4, "DNAHelix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/VisionPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisionPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * VisionPlanet — Production-grade Vision Planet visual component
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. SEPARATION OF CONCERNS: Visual component only. Mounted as `children`
 *    inside <BasePlanet id="vision"> in TheSolarSystem.tsx.
 *
 * 2. NEURAL SAPPHIRE SHELL: MeshPhysicalMaterial with transmission 0.88,
 *    IOR 1.52, iridescence 0.5 — holographic AI brain aesthetic.
 *
 * 3. DNA HELIX — SANITY-WIRED: Fetches latest post from Sanity on mount.
 *    The post's aiPersona drives the helix segment glow in real-time
 *    via the Visual Signature Engine (personaSignatures.ts).
 *
 * 4. 11-SEGMENT DATA ARCHITECTURE: Each DNA segment maps to a master
 *    category (Sports, Business, Mindset, etc.). Clicking a segment
 *    opens the category detail overlay.
 *
 * 5. PER-NODE LOD CULLING: Distance-checked in useFrame against camera.
 *    _tempVec is pre-allocated — ZERO allocations per frame.
 *
 * 6. SPRING PHYSICS: Panel stiffness 220/damping 20, Helix 260/18,
 *    Node 300/14 — all critically-damped springs, no GSAP.
 *
 * 7. 3-POINT LIGHTING: Key (white spot), Fill (cyan point), Rim (cyan
 *    directional) + "city" HDRI environment.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/VisionPlanet/skins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$DNAHelix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/VisionPlanet/DNAHelix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/visionCategories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// ─── Pre-allocated (ZERO per-frame allocations) ──────────────────────────────
const _auraColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
// ─── Vision Core — Neural Sapphire Shell ─────────────────────────────────────
function VisionCore({ auraMode }) {
    _s();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "VisionCore.useFrame": ({ clock }, delta)=>{
            const t = clock.elapsedTime;
            // Shell slow rotation
            if (shellRef.current) shellRef.current.rotation.y += 0.003;
            // Core pulse — breathing data rhythm
            if (coreRef.current) {
                const pulse = Math.sin(t * Math.PI * 2 * 0.5);
                const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].idle + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].peak - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].idle) * (pulse * 0.5 + 0.5) * 0.25;
                coreRef.current.material.emissiveIntensity = base;
            }
            // Aura colour + intensity lerp
            if (auraLightRef.current) {
                const targetColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"][auraMode];
                const targetIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_INTENSITY"][auraMode];
                const targetDistance = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_DISTANCE"][auraMode];
                const lerpFactor = 1 - Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_LERP_RATE"], delta);
                auraLightRef.current.color.lerp(targetColor, lerpFactor);
                auraLightRef.current.intensity += (targetIntensity - auraLightRef.current.intensity) * lerpFactor;
                auraLightRef.current.distance += (targetDistance - auraLightRef.current.distance) * lerpFactor;
            }
        }
    }["VisionCore.useFrame"]);
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
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissiveIntensity,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].metalness,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].roughness,
                    transmission: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].transmission,
                    thickness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].thickness,
                    ior: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].ior,
                    iridescence: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescence,
                    iridescenceIOR: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescenceIOR,
                    iridescenceThicknessRange: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescenceThicknessRange,
                    clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoat,
                    clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoatRoughness,
                    attenuationColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationColor,
                    attenuationDistance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationDistance,
                    envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].envMapIntensity,
                    transparent: true
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: coreRef,
                args: [
                    0.65,
                    64,
                    64
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissiveIntensity,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].roughness,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].metalness,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].opacity
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: auraLightRef,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_INTENSITY"].idle,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_DISTANCE"].idle,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(VisionCore, "/B5uGR/Y+XAnoLqZlsKJoUMtdyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = VisionCore;
// ─── Cinematic Lighting Rig ──────────────────────────────────────────────────
function VisionLightingRig() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environment,
                background: false,
                environmentIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environmentIntensity
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.angle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.penumbra,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.decay,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.distance,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-bias": -0.0001,
                "shadow-normalBias": 0.02
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.position,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.distance,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.decay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.position
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = VisionLightingRig;
function CategoryOverlay({ visible, segmentIndex, onClose }) {
    const cat = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"][segmentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        style: {
            pointerEvents: "none",
            width: 0,
            height: 0
        },
        zIndexRange: [
            200,
            300
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: visible && cat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30,
                    scale: 0.96
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 30,
                    scale: 0.96
                },
                transition: {
                    type: "spring",
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    bottom: "5vh",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "min(480px, 90vw)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: `linear-gradient(145deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].overlayBg}ee 0%, #000a14f0 100%)`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${cat.helixColor}40`,
                    boxShadow: `0 0 40px ${cat.helixColor}20, inset 0 0 20px ${cat.helixColor}08`,
                    zIndex: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem 1.25rem 0.75rem",
                            borderBottom: `1px solid ${cat.helixColor}20`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: cat.helixColor,
                                            fontSize: 10,
                                            letterSpacing: "0.35em",
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                            marginBottom: 2
                                        },
                                        children: [
                                            "DNA SEGMENT #",
                                            segmentIndex + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textPrimary,
                                            fontSize: 20,
                                            fontWeight: 900,
                                            letterSpacing: "-0.02em",
                                            margin: 0
                                        },
                                        children: [
                                            cat.icon,
                                            " ",
                                            cat.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "rgba(255,255,255,0.3)",
                                    fontSize: 24,
                                    cursor: "pointer",
                                    lineHeight: 1,
                                    padding: "4px 8px"
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem 1.25rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textPrimary,
                                    fontSize: 14,
                                    lineHeight: 1.6,
                                    margin: "0 0 8px"
                                },
                                children: cat.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textMuted,
                                    fontSize: 13,
                                    lineHeight: 1.6,
                                    margin: 0,
                                    direction: "rtl",
                                    textAlign: "right"
                                },
                                children: cat.descriptionAr
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.6rem 1.25rem",
                            borderTop: `1px solid ${cat.helixColor}15`,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: cat.helixColor,
                                    fontSize: 11,
                                    fontWeight: 600,
                                    letterSpacing: "0.1em"
                                },
                                children: [
                                    "/blog/",
                                    cat.slug
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: cat.helixColor,
                                    boxShadow: `0 0 8px ${cat.helixColor}`,
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                        lineNumber: 310,
                        columnNumber: 13
                    }, this)
                ]
            }, "category-overlay", true, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 204,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c2 = CategoryOverlay;
// ─── Dive Transition — Camera zoom into DNA segment → navigate to blog ───────
const _diveTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const _diveDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function DiveCameraController({ diveState, onDiveComplete }) {
    _s1();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const initialPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const initialLookAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const hasLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "DiveCameraController.useFrame": (_, delta)=>{
            if (!diveState.active) {
                hasLocked.current = false;
                return;
            }
            // Lock initial camera position on first frame of dive
            if (!hasLocked.current) {
                initialPos.current.copy(camera.position);
                initialLookAt.current.set(0, 0, 0); // helix center
                hasLocked.current = true;
            }
            // Compute target: center of the clicked DNA segment
            const nodesPerSegment = Math.floor(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].nodesPerStrand / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].segmentCount);
            const midNode = diveState.targetSegment * nodesPerSegment + Math.floor(nodesPerSegment / 2);
            const t = midNode / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].nodesPerStrand - 1);
            const angle = t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].turns * Math.PI * 2;
            _diveTarget.set(Math.cos(angle) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].radius * 0.3, (t - 0.5) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].height, Math.sin(angle) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DNA_HELIX"].radius * 0.3);
            // Ease-in-out cubic progress
            const speed = 0.8; // complete in ~1.25s
            const rawProgress = Math.min(diveState.progress + delta * speed, 1.0);
            diveState.progress = rawProgress;
            const ease = rawProgress < 0.5 ? 4 * rawProgress * rawProgress * rawProgress : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;
            // Lerp camera toward segment
            camera.position.lerpVectors(initialPos.current, _diveTarget, ease);
            // At 100%, trigger navigation
            if (rawProgress >= 1.0) {
                onDiveComplete();
            }
        }
    }["DiveCameraController.useFrame"]);
    return null;
}
_s1(DiveCameraController, "mA7ZN00PGkDCNBlVAYgJ7N/zDLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = DiveCameraController;
/**
 * DiveOverlay — full-screen fade that covers the WebGL canvas
 * during the dive transition. Rendered via drei's Html to escape the 3D viewport.
 */ function DiveOverlay({ active, categorySlug, categoryColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        fullscreen: true,
        style: {
            pointerEvents: "none"
        },
        zIndexRange: [
            900,
            1000
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.6,
                    ease: "easeIn"
                },
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 999999,
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `radial-gradient(circle at 50% 50%, ${categoryColor}30 0%, #000000 70%)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2,
                        duration: 0.4
                    },
                    style: {
                        color: categoryColor,
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase"
                    },
                    children: [
                        "DIVING INTO /blog/",
                        categorySlug
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 451,
                    columnNumber: 13
                }, this)
            }, "dive-overlay", false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 434,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
            lineNumber: 432,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, this);
}
_c4 = DiveOverlay;
// ─── Latest Post Status Bar ──────────────────────────────────────────────────
function LatestPostBar({ latestPost }) {
    if (!latestPost) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            0,
            -2.5,
            0
        ],
        center: true,
        distanceFactor: 12,
        style: {
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping
            },
            style: {
                padding: "6px 16px",
                borderRadius: 10,
                background: "rgba(0,10,20,0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,255,255,0.15)",
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textPrimary,
                fontSize: 11,
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                        fontWeight: 700
                    },
                    children: "LATEST:"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this),
                " ",
                latestPost.title,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textMuted,
                        marginLeft: 8
                    },
                    children: [
                        "by ",
                        latestPost.personaSlug.replace(/-/g, " ")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 507,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
            lineNumber: 484,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 478,
        columnNumber: 5
    }, this);
}
_c5 = LatestPostBar;
function LiveStatusHUD() {
    _s2();
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        migrated: 0,
        generated: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveStatusHUD.useEffect": ()=>{
            let cancelled = false;
            async function fetchCounts() {
                try {
                    const projectId = ("TURBOPACK compile-time value", "");
                    const dataset = ("TURBOPACK compile-time value", "production") || "production";
                    if ("TURBOPACK compile-time truthy", 1) return;
                    //TURBOPACK unreachable
                    ;
                    const query = undefined;
                    const url = undefined;
                    const res = undefined;
                    const data = undefined;
                } catch  {
                // Silently fail — HUD is informational
                }
            }
            fetchCounts();
            // Poll every 30s for live updates
            const interval = setInterval(fetchCounts, 30_000);
            return ({
                "LiveStatusHUD.useEffect": ()=>{
                    cancelled = true;
                    clearInterval(interval);
                }
            })["LiveStatusHUD.useEffect"];
        }
    }["LiveStatusHUD.useEffect"], []);
    if (counts.total === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        position: [
            3.5,
            2.2,
            0
        ],
        center: true,
        distanceFactor: 14,
        style: {
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 20
            },
            animate: {
                opacity: 1,
                x: 0
            },
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 22,
                delay: 1.5
            },
            style: {
                padding: "8px 14px",
                borderRadius: 10,
                background: "rgba(0,10,20,0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,255,255,0.12)",
                fontSize: 10,
                letterSpacing: "0.12em",
                whiteSpace: "nowrap"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan,
                        fontWeight: 700,
                        marginBottom: 4,
                        fontSize: 9,
                        textTransform: "uppercase"
                    },
                    children: "CONTENT PULSE"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textPrimary,
                                        fontWeight: 700,
                                        fontSize: 16
                                    },
                                    children: counts.total
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textMuted,
                                        marginLeft: 4
                                    },
                                    children: "total"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#22c55e",
                                        fontWeight: 700,
                                        fontSize: 16
                                    },
                                    children: counts.generated
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textMuted,
                                        marginLeft: 4
                                    },
                                    children: "AI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#f59e0b",
                                        fontWeight: 700,
                                        fontSize: 16
                                    },
                                    children: counts.migrated
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].textMuted,
                                        marginLeft: 4
                                    },
                                    children: "migrated"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                                    lineNumber: 616,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                    lineNumber: 599,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
            lineNumber: 581,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 575,
        columnNumber: 5
    }, this);
}
_s2(LiveStatusHUD, "2OaRrQi6rTL+AjqH0tI/tR/o08U=");
_c6 = LiveStatusHUD;
function VisionPlanetVisual() {
    _s3();
    const [latestPost, setLatestPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredSegment, setHoveredSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [selectedSegment, setSelectedSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [auraMode, setAuraMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    // ── Dive transition state ──
    const [diveState, setDiveState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        targetSegment: 0,
        categorySlug: "",
        progress: 0
    });
    const navigateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Fetch latest post from Sanity (with cancellation) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisionPlanetVisual.useEffect": ()=>{
            let cancelled = false;
            async function fetchLatestPost() {
                try {
                    // Sanity GROQ query for latest post with expanded persona
                    // NOTE: Replace SANITY_PROJECT_ID and DATASET with real values
                    // when Sanity is configured. For now, use mock data for dev.
                    const SANITY_PROJECT_ID = ("TURBOPACK compile-time value", "");
                    const SANITY_DATASET = ("TURBOPACK compile-time value", "production") || "production";
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Dev fallback — mock data to demonstrate helix glow
                        if (!cancelled) {
                            setLatestPost({
                                categorySlug: "mindset",
                                personaSlug: "tony-robbins",
                                title: "Awaken the Giant Within: The 5AM Neural Protocol"
                            });
                            setAuraMode("active");
                        }
                        return;
                    }
                    //TURBOPACK unreachable
                    ;
                    const query = undefined;
                    const url = undefined;
                    const res = undefined;
                    const data = undefined;
                } catch (err) {
                    console.warn("[VisionPlanet] Sanity fetch failed — using dev fallback:", err);
                    if (!cancelled) {
                        setLatestPost({
                            categorySlug: "mindset",
                            personaSlug: "tony-robbins",
                            title: "Awaken the Giant Within: The 5AM Neural Protocol"
                        });
                        setAuraMode("active");
                    }
                }
            }
            fetchLatestPost();
            return ({
                "VisionPlanetVisual.useEffect": ()=>{
                    cancelled = true;
                }
            })["VisionPlanetVisual.useEffect"];
        }
    }["VisionPlanetVisual.useEffect"], []);
    const handleSegmentClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VisionPlanetVisual.useCallback[handleSegmentClick]": (segIdx, categorySlug)=>{
            // First click: show overlay. Second click (or double-click): dive to blog.
            if (showOverlay && selectedSegment === segIdx) {
                // Trigger dive transition
                setShowOverlay(false);
                setAuraMode("data");
                navigateRef.current = `/blog/${categorySlug}`;
                setDiveState({
                    active: true,
                    targetSegment: segIdx,
                    categorySlug,
                    progress: 0
                });
            } else {
                setSelectedSegment(segIdx);
                setShowOverlay(true);
                setAuraMode("data");
            }
        }
    }["VisionPlanetVisual.useCallback[handleSegmentClick]"], [
        showOverlay,
        selectedSegment
    ]);
    const handleDiveComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VisionPlanetVisual.useCallback[handleDiveComplete]": ()=>{
            const route = navigateRef.current;
            if (route) {
                // Use window.location for hard navigation from within R3F
                window.location.href = route;
            }
        }
    }["VisionPlanetVisual.useCallback[handleDiveComplete]"], []);
    const handleCloseOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VisionPlanetVisual.useCallback[handleCloseOverlay]": ()=>{
            setShowOverlay(false);
            setAuraMode(latestPost ? "active" : "idle");
        }
    }["VisionPlanetVisual.useCallback[handleCloseOverlay]"], [
        latestPost
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisionLightingRig, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisionCore, {
                auraMode: auraMode
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$DNAHelix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                latestPost: latestPost,
                hoveredSegment: hoveredSegment,
                onSegmentClick: handleSegmentClick
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LatestPostBar, {
                latestPost: latestPost
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveStatusHUD, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryOverlay, {
                visible: showOverlay,
                segmentIndex: selectedSegment >= 0 ? selectedSegment : 0,
                onClose: handleCloseOverlay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 764,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiveCameraController, {
                diveState: diveState,
                onDiveComplete: handleDiveComplete
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 771,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiveOverlay, {
                active: diveState.active,
                categorySlug: diveState.categorySlug,
                categoryColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$visionCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISION_CATEGORIES"][diveState.targetSegment]?.helixColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VisionPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].visionCyan
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VisionPlanet/index.tsx",
        lineNumber: 743,
        columnNumber: 5
    }, this);
}
_s3(VisionPlanetVisual, "8/3U3MEjnl/za3nI2ECOu7opVMY=");
_c7 = VisionPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "VisionCore");
__turbopack_context__.k.register(_c1, "VisionLightingRig");
__turbopack_context__.k.register(_c2, "CategoryOverlay");
__turbopack_context__.k.register(_c3, "DiveCameraController");
__turbopack_context__.k.register(_c4, "DiveOverlay");
__turbopack_context__.k.register(_c5, "LatestPostBar");
__turbopack_context__.k.register(_c6, "LiveStatusHUD");
__turbopack_context__.k.register(_c7, "VisionPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b8c3b38b._.js.map