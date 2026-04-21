(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/ScrollFadeHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollFadeHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * ScrollFadeHero — Cinematic scroll-based fade + parallax for planet hero sections
 *
 * Uses direct DOM manipulation (no React re-renders) for 60 FPS scroll performance.
 * Hero opacity decreases and scale subtly increases as user scrolls down.
 *
 * Reduced-motion: disables scale transform, keeps gentle opacity fade.
 * Reads scroll from closest `.planet-page` ancestor (our scrollable container).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollFadeHero({ children }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollFadeHero.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const scrollTarget = el.closest(".planet-page");
            if (!scrollTarget) return;
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let ticking = false;
            const handleScroll = {
                "ScrollFadeHero.useEffect.handleScroll": ()=>{
                    if (ticking) return;
                    ticking = true;
                    requestAnimationFrame({
                        "ScrollFadeHero.useEffect.handleScroll": ()=>{
                            const scrollY = scrollTarget.scrollTop;
                            const heroHeight = el.offsetHeight || window.innerHeight;
                            const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
                            const opacity = 1 - progress;
                            const scale = prefersReduced ? 1 : 1 + progress * 0.08;
                            el.style.opacity = String(opacity);
                            el.style.transform = `scale(${scale})`;
                            ticking = false;
                        }
                    }["ScrollFadeHero.useEffect.handleScroll"]);
                }
            }["ScrollFadeHero.useEffect.handleScroll"];
            scrollTarget.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "ScrollFadeHero.useEffect": ()=>scrollTarget.removeEventListener("scroll", handleScroll)
            })["ScrollFadeHero.useEffect"];
        }
    }["ScrollFadeHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            willChange: "opacity, transform",
            transformOrigin: "center center"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ScrollFadeHero.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ScrollFadeHero, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ScrollFadeHero;
var _c;
__turbopack_context__.k.register(_c, "ScrollFadeHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/planetMetadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/engine/useAudioStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioStore",
    ()=>useAudioStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"use client";
;
;
const SFX_PATHS = {
    click: "/audio/click.mp3",
    hover: "/audio/hover.mp3",
    warp: "/audio/warp.mp3"
};
const AMBIENT_PATH = "/audio/ambient-hum.mp3";
let ambientAudio = null;
function clamp01(value) {
    return Math.max(0, Math.min(value, 1));
}
function getAmbientAudio() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!ambientAudio) {
        ambientAudio = new Audio(AMBIENT_PATH);
        ambientAudio.loop = true;
        ambientAudio.preload = "auto";
    }
    return ambientAudio;
}
function playOneShot(path, volume) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const sfx = new Audio(path);
        sfx.volume = clamp01(volume);
        void sfx.play().catch(()=>{
        // Ignore autoplay-blocked promises until user interaction occurs.
        });
    } catch  {
    // Ignore audio API failures gracefully.
    }
}
const useAudioStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        isMuted: false,
        ambientVolume: 0.25,
        isAmbientPlaying: false,
        setMuted: (muted)=>{
            set({
                isMuted: muted
            });
            const audio = getAmbientAudio();
            if (!audio) return;
            if (muted) {
                audio.pause();
                set({
                    isAmbientPlaying: false
                });
            } else if (get().isAmbientPlaying) {
                audio.volume = clamp01(get().ambientVolume);
                void audio.play().catch(()=>{
                // Browser may require gesture; keep state true for retry.
                });
            }
        },
        toggleMute: ()=>{
            const nextMuted = !get().isMuted;
            get().setMuted(nextMuted);
        },
        setAmbientVolume: (volume)=>{
            const next = clamp01(volume);
            set({
                ambientVolume: next
            });
            const audio = getAmbientAudio();
            if (audio) audio.volume = next;
        },
        startAmbientLoop: ()=>{
            if (get().isMuted) return;
            const audio = getAmbientAudio();
            if (!audio) return;
            audio.volume = clamp01(get().ambientVolume);
            set({
                isAmbientPlaying: true
            });
            void audio.play().catch(()=>{
            // Browser may block autoplay; state remains for next interaction.
            });
        },
        stopAmbientLoop: ()=>{
            const audio = getAmbientAudio();
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            set({
                isAmbientPlaying: false
            });
        },
        playSfx: (type)=>{
            if (get().isMuted) return;
            const path = SFX_PATHS[type];
            if (!path) return;
            const volume = type === "hover" ? 0.2 : type === "warp" ? 0.6 : 0.35;
            playOneShot(path, volume);
        }
    }), {
    name: "mizo-audio-store",
    partialize: (state)=>({
            isMuted: state.isMuted,
            ambientVolume: state.ambientVolume
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/engine/experienceStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExperience",
    ()=>useExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        mode: "free",
        activePlanet: null,
        setMode: (mode)=>set({
                mode
            }),
        setPlanet: (id)=>set({
                activePlanet: id
            }),
        // ✅ الدالة اللي كانت ناقصة
        resetExperience: ()=>set({
                mode: "free",
                activePlanet: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/WarpTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarpTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function usePrefersReducedMotion() {
    _s();
    const [prefersReduced, setPrefersReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "usePrefersReducedMotion.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
    }["usePrefersReducedMotion.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrefersReducedMotion.useEffect": ()=>{
            const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
            const handler = {
                "usePrefersReducedMotion.useEffect.handler": (e)=>setPrefersReduced(e.matches)
            }["usePrefersReducedMotion.useEffect.handler"];
            mql.addEventListener("change", handler);
            return ({
                "usePrefersReducedMotion.useEffect": ()=>mql.removeEventListener("change", handler)
            })["usePrefersReducedMotion.useEffect"];
        }
    }["usePrefersReducedMotion.useEffect"], []);
    return prefersReduced;
}
_s(usePrefersReducedMotion, "erjOSelkEDKgJy0WvrHHA1gZ3uQ=");
function WarpTransition({ triggerWarp, targetRoute }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const playSfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "WarpTransition.useAudioStore[playSfx]": (s)=>s.playSfx
    }["WarpTransition.useAudioStore[playSfx]"]);
    const prefersReducedMotion = usePrefersReducedMotion();
    const isWarping = Boolean(triggerWarp && targetRoute);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WarpTransition.useEffect": ()=>{
            if (triggerWarp && targetRoute) {
                playSfx("warp");
                // Reduced-motion: faster crossfade (400ms), normal: full warp (800ms)
                const delay = prefersReducedMotion ? 400 : 800;
                const timeout = setTimeout({
                    "WarpTransition.useEffect.timeout": ()=>{
                        router.push(targetRoute);
                    }
                }["WarpTransition.useEffect.timeout"], delay);
                return ({
                    "WarpTransition.useEffect": ()=>clearTimeout(timeout)
                })["WarpTransition.useEffect"];
            }
        }
    }["WarpTransition.useEffect"], [
        triggerWarp,
        targetRoute,
        router,
        prefersReducedMotion,
        playSfx
    ]);
    if (!isWarping) return null;
    // W-01: prefers-reduced-motion guard — WCAG 2.3.1 + visionOS compliance
    // Reduced motion: slow dark fade (no strobe). Full motion: cinematic white flash.
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[99999999] pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black animate-in fade-in duration-300 fill-mode-forwards"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/WarpTransition.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[99999999] pointer-events-none flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-white animate-in fade-in duration-500 fill-mode-forwards"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20 bg-black mix-blend-overlay animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/WarpTransition.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s1(WarpTransition, "8OvNKrZk9s7TPvZEdNadBrI+IvM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"],
        usePrefersReducedMotion
    ];
});
_c = WarpTransition;
var _c;
__turbopack_context__.k.register(_c, "WarpTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/NavigationHUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WarpTransition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/**
 * NavigationHUD — Glassmorphism radial planet radar overlay
 *
 * Fixed UI overlay that provides:
 * - Planet Radar: radial list of all 10 planets with accent dots
 * - Warp Trigger: click any planet → WarpTransition → route
 * - Current Location: shows active planet based on URL
 * - Audio Toggle: mute/unmute slot (prepared for ambient soundscape)
 * - Locked Planets: Voice, Videogram, Shield shown as ENCRYPTED
 *
 * Reads from: planetMetadata.ts, experienceStore, usePathname()
 * Z-layer: z-[9999] (above canvas, below warp transition)
 */ "use client";
;
;
;
;
;
;
/* ─── Constants ─────────────────────────────────────────────────────── */ /** Planets that are fully built and wired — rest show as ENCRYPTED */ const ACTIVE_PLANETS = new Set([
    "identity",
    "legacy",
    "vision",
    "odyssey",
    "ventures",
    "voice",
    "videogram",
    "library",
    "contact"
]);
/** Simulated distance values for the radar aesthetic */ const SIMULATED_DISTANCES = {
    identity: "6.0 AU",
    legacy: "9.0 AU",
    vision: "12.0 AU",
    odyssey: "15.0 AU",
    ventures: "18.0 AU",
    voice: "21.0 AU",
    videogram: "24.0 AU",
    library: "27.0 AU",
    contact: "30.0 AU",
    shield: "33.0 AU"
};
function NavigationHUD() {
    _s();
    // Cinematic/Solar toggle
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "NavigationHUD.useExperience[mode]": (s)=>s.mode
    }["NavigationHUD.useExperience[mode]"]);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "NavigationHUD.useExperience[setMode]": (s)=>s.setMode
    }["NavigationHUD.useExperience[setMode]"]);
    const isCinematic = mode === "cinematic";
    // Toggle handler
    const handleToggleView = ()=>{
        playSfx("click");
        setMode(isCinematic ? "free" : "cinematic");
    };
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const planets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlanetsArray"])();
    const isMuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "NavigationHUD.useAudioStore[isMuted]": (s)=>s.isMuted
    }["NavigationHUD.useAudioStore[isMuted]"]);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "NavigationHUD.useAudioStore[toggleMute]": (s)=>s.toggleMute
    }["NavigationHUD.useAudioStore[toggleMute]"]);
    const playSfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "NavigationHUD.useAudioStore[playSfx]": (s)=>s.playSfx
    }["NavigationHUD.useAudioStore[playSfx]"]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredPlanet, setHoveredPlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [warpTarget, setWarpTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerWarp, setTriggerWarp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect current planet from URL
    const currentPlanetId = planets.find((p)=>pathname === p.routePath)?.id ?? null;
    // Close HUD after warp completes (route change)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationHUD.useEffect": ()=>{
            if (triggerWarp) {
                const timeout = setTimeout({
                    "NavigationHUD.useEffect.timeout": ()=>{
                        setIsOpen(false);
                        setTriggerWarp(false);
                        setWarpTarget(null);
                    }
                }["NavigationHUD.useEffect.timeout"], 900);
                return ({
                    "NavigationHUD.useEffect": ()=>clearTimeout(timeout)
                })["NavigationHUD.useEffect"];
            }
        }
    }["NavigationHUD.useEffect"], [
        triggerWarp
    ]);
    const handlePlanetClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationHUD.useCallback[handlePlanetClick]": (routePath, planetId)=>{
            // Don't warp to current page or locked planets
            if (pathname === routePath || !ACTIVE_PLANETS.has(planetId)) return;
            playSfx("click");
            setWarpTarget(routePath);
            setTriggerWarp(true);
        }
    }["NavigationHUD.useCallback[handlePlanetClick]"], [
        pathname,
        playSfx
    ]);
    const isOnPlanetPage = currentPlanetId !== null;
    const isHome = pathname === "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                triggerWarp: triggerWarp,
                targetRoute: warpTarget ?? ""
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    playSfx("click");
                    setIsOpen((prev)=>!prev);
                },
                "aria-label": isOpen ? "Close navigation" : "Open navigation",
                className: "fixed top-6 right-6 z-[9999] flex items-center gap-2 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/25 transition-all duration-300 select-none group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-2.5 w-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono tracking-widest uppercase",
                        children: isOpen ? "CLOSE" : "NAV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 transition-transform duration-200",
                        style: {
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                        },
                        viewBox: "0 0 16 16",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "2",
                                y1: "8",
                                x2: "14",
                                y2: "8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "2",
                                x2: "8",
                                y2: "14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleToggleView,
                "aria-label": isCinematic ? "Switch to Map View" : "Switch to Cinematic View",
                className: "fixed top-6 left-6 z-[9999] flex items-center gap-2 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/25 transition-all duration-300 select-none group shadow-lg",
                children: [
                    isCinematic ? // Eye icon for Cinematic
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this) : // Map icon for Solar System
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M9 22V6m6 16V6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono tracking-widest uppercase",
                        children: isCinematic ? "CINEMATIC VIEW" : "MAP VIEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Planet navigation",
                className: "fixed top-20 right-6 z-[9999] w-80 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4 motion-safe:duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 pt-5 pb-3 border-b border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase",
                                        children: "System Navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono text-green-400/60 tracking-wider",
                                        children: "ONLINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono text-white/30 tracking-wider",
                                        children: "LOCATION:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-white/80 tracking-widest uppercase",
                                        children: isOnPlanetPage ? `ORBITING: ${planets.find((p)=>p.id === currentPlanetId)?.name ?? "UNKNOWN"}` : isHome ? "FREE ORBIT — GOD VIEW" : "IN TRANSIT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "px-3 py-2",
                        children: planets.map((planet)=>{
                            const isActive = ACTIVE_PLANETS.has(planet.id);
                            const isLocked = !isActive;
                            const isCurrent = planet.id === currentPlanetId;
                            const isHovered = planet.id === hoveredPlanet;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePlanetClick(planet.routePath, planet.id),
                                    onMouseEnter: ()=>{
                                        setHoveredPlanet(planet.id);
                                        if (!isLocked) playSfx("hover");
                                    },
                                    onMouseLeave: ()=>setHoveredPlanet(null),
                                    disabled: isLocked || isCurrent,
                                    "aria-label": isLocked ? `${planet.name} — encrypted` : isCurrent ? `${planet.name} — current location` : `Warp to ${planet.name}`,
                                    className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                      transition-all duration-200 group/planet text-left
                      ${isCurrent ? "bg-white/5 border border-white/10" : isLocked ? "opacity-40 cursor-not-allowed" : "hover:bg-white/5 cursor-pointer"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex-shrink-0 w-3 h-3 rounded-full transition-transform duration-200",
                                            style: {
                                                backgroundColor: isLocked ? "#333" : planet.themeColor,
                                                transform: isHovered && !isLocked ? "scale(1.4)" : "scale(1)",
                                                boxShadow: isCurrent ? `0 0 8px ${planet.themeColor}80` : isHovered && !isLocked ? `0 0 12px ${planet.themeColor}60` : "none"
                                            },
                                            children: isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 rounded-full animate-ping opacity-40",
                                                style: {
                                                    backgroundColor: planet.themeColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                lineNumber: 254,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 240,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs font-mono tracking-wider uppercase truncate
                            ${isCurrent ? "text-white" : isLocked ? "text-white/30" : "text-white/70 group-hover/planet:text-white"}`,
                                                            children: planet.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 25
                                                        }, this),
                                                        isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-amber-400/60 border border-amber-400/20 px-1.5 py-0.5 rounded",
                                                            children: "ENCRYPTED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 27
                                                        }, this),
                                                        isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-green-400/80 border border-green-400/20 px-1.5 py-0.5 rounded",
                                                            children: "HERE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "voice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-pink-400/80 border border-pink-400/20 px-1.5 py-0.5 rounded",
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "videogram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-gray-400/80 border border-gray-400/20 px-1.5 py-0.5 rounded",
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this),
                                                isHovered && !isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-mono text-white/40 truncate",
                                                            children: planet.ui.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-mono text-white/25 truncate",
                                                            dir: "rtl",
                                                            children: [
                                                                planet.ui.description.substring(0, 50),
                                                                "…"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-mono text-white/20 tabular-nums flex-shrink-0",
                                            children: SIMULATED_DISTANCES[planet.id]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this)
                            }, planet.id, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playSfx("click");
                                    toggleMute();
                                },
                                "aria-label": isMuted ? "Unmute ambient audio" : "Mute ambient audio",
                                className: "flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        children: !isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 5L6 9H2v6h4l5 4V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 5L6 9H2v6h4l5 4V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "23",
                                                    y1: "9",
                                                    x2: "17",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "9",
                                                    x2: "23",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono tracking-wider uppercase",
                                        children: isMuted ? "MUTED" : "AUDIO ON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] font-mono text-white/15 tracking-wider",
                                children: [
                                    ACTIVE_PLANETS.size,
                                    "/10 NODES ACTIVE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(NavigationHUD, "MMJgf8VEH3TrQa0ZnwwEle/p2mY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"]
    ];
});
_c = NavigationHUD;
var _c;
__turbopack_context__.k.register(_c, "NavigationHUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * ContactForm — Inquiry form for the Contact planet
 *
 * Client Component with form validation and submission feedback.
 * Currently logs to console — wire to API route or email service when ready.
 *
 * Categories: Collaboration, Business, Media, General
 * Secure: no dangerouslySetInnerHTML, input sanitized via controlled components
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const INQUIRY_TYPES = [
    {
        value: "collaboration",
        label: "Collaboration"
    },
    {
        value: "business",
        label: "Business Inquiry"
    },
    {
        value: "media",
        label: "Media & Press"
    },
    {
        value: "general",
        label: "General"
    }
];
const ACCENT = "#00ff88";
function ContactForm() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStatus("sending");
        // Simulate submission — wire to real API endpoint when ready
        setTimeout(()=>{
            setStatus("sent");
        }, 1200);
    };
    if (status === "sent") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 rounded-full mx-auto mb-6",
                    style: {
                        backgroundColor: ACCENT,
                        boxShadow: `0 0 30px ${ACCENT}60`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/ContactForm.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black uppercase tracking-tight mb-4",
                    children: "Transmission Received"
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/ContactForm.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Your message has entered the Mizo Universe. Expect a response within 48 hours."
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/ContactForm.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/ContactForm.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-1 rounded-full",
                        style: {
                            backgroundColor: ACCENT
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-black uppercase tracking-tight",
                        children: "Open Channel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/ContactForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-name",
                                className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "contact-name",
                                name: "name",
                                type: "text",
                                required: true,
                                autoComplete: "name",
                                placeholder: "Your name",
                                className: "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-email",
                                className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "contact-email",
                                name: "email",
                                type: "email",
                                required: true,
                                autoComplete: "email",
                                placeholder: "your@email.com",
                                className: "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-type",
                                className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
                                children: "Inquiry Type"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "contact-type",
                                name: "type",
                                required: true,
                                className: "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors appearance-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "bg-[#0a0a0a]",
                                        children: "Select type..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    INQUIRY_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.value,
                                            className: "bg-[#0a0a0a]",
                                            children: t.label
                                        }, t.value, false, {
                                            fileName: "[project]/src/app/contact/ContactForm.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "contact-message",
                                className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "contact-message",
                                name: "message",
                                required: true,
                                rows: 5,
                                placeholder: "Your message...",
                                className: "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#00ff88]/40 focus:outline-none focus:ring-1 focus:ring-[#00ff88]/20 transition-colors resize-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/ContactForm.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "sending",
                        className: "w-full py-4 rounded-xl font-black uppercase tracking-wider text-black transition-all disabled:opacity-50",
                        style: {
                            backgroundColor: ACCENT,
                            boxShadow: `0 0 20px ${ACCENT}30`
                        },
                        children: status === "sending" ? "Transmitting..." : "Send Transmission"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/ContactForm.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/ContactForm.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/contact/ContactForm.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_38a0e04c._.js.map