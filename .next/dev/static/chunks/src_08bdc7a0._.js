(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/PlanetCard/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlanetCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WarpTransition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** Convert a hex color to rgb tuple string for CSS rgba() usage */ function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "0,255,170";
    return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
function PlanetCard() {
    _s();
    const { mode, activePlanet, resetExperience } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])();
    const [triggerWarp, setTriggerWarp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isVisible = mode === "enter";
    // Resolve full planet data — themeColor, routePath, ui description
    const planetData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlanetsArray"])().find((p)=>p.id === activePlanet);
    const accent = planetData?.themeColor ?? "#00ffaa";
    const accentRgb = hexToRgb(accent);
    const targetRoute = planetData?.routePath ?? "/";
    const handleEnterDomain = ()=>{
        setTriggerWarp(true);
        // WarpTransition fires router.push after its animation delay
        // Reset experience after transition (300ms buffer past warp)
        setTimeout(()=>resetExperience(), 1100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                triggerWarp: triggerWarp,
                targetRoute: targetRoute
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 120,
                        opacity: 0,
                        scale: 0.94
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        y: 120,
                        opacity: 0,
                        scale: 0.94
                    },
                    transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 18
                    },
                    style: {
                        position: "absolute",
                        bottom: "7%",
                        left: "50%",
                        x: "-50%",
                        width: "min(92vw, 500px)",
                        padding: "0",
                        borderRadius: "20px",
                        // Planet-tinted glass border
                        border: `1px solid rgba(${accentRgb}, 0.28)`,
                        boxShadow: `0 0 60px rgba(${accentRgb}, 0.12), 0 24px 64px rgba(0,0,0,0.7), inset 0 0 24px rgba(${accentRgb}, 0.05)`,
                        color: "white",
                        zIndex: 100,
                        overflow: "hidden",
                        // Deep glassmorphism
                        background: `linear-gradient(160deg, rgba(8,16,28,0.82) 0%, rgba(0,4,8,0.92) 100%)`,
                        backdropFilter: "blur(32px)",
                        WebkitBackdropFilter: "blur(32px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: "8%",
                                right: "8%",
                                height: "1.5px",
                                background: `linear-gradient(90deg, transparent, rgba(${accentRgb}, 0.9) 40%, rgba(${accentRgb}, 0.9) 60%, transparent)`,
                                borderRadius: "1px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "14px",
                                left: "18px",
                                width: "12px",
                                height: "12px",
                                borderTop: `1.5px solid rgba(${accentRgb}, 0.5)`,
                                borderLeft: `1.5px solid rgba(${accentRgb}, 0.5)`,
                                borderRadius: "2px 0 0 0"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "14px",
                                right: "18px",
                                width: "12px",
                                height: "12px",
                                borderTop: `1.5px solid rgba(${accentRgb}, 0.5)`,
                                borderRight: `1.5px solid rgba(${accentRgb}, 0.5)`,
                                borderRadius: "0 2px 0 0"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "2.2rem 2rem 2rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "8px",
                                        marginBottom: "18px",
                                        fontSize: "10px",
                                        letterSpacing: "0.3em",
                                        color: `rgba(${accentRgb}, 0.9)`,
                                        textTransform: "uppercase",
                                        fontFamily: "monospace"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                opacity: [
                                                    1,
                                                    0.15,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 1.6,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            style: {
                                                display: "inline-block",
                                                width: "7px",
                                                height: "7px",
                                                borderRadius: "50%",
                                                backgroundColor: accent,
                                                boxShadow: `0 0 8px ${accent}`,
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        "SECTOR ONLINE · ",
                                        (planetData?.id ?? "").toUpperCase() || "UNKNOWN"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                planetData?.ui.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        textAlign: "center",
                                        margin: "0 0 8px",
                                        fontSize: "10px",
                                        letterSpacing: "0.35em",
                                        color: `rgba(${accentRgb}, 0.55)`,
                                        textTransform: "uppercase",
                                        fontFamily: "monospace"
                                    },
                                    children: planetData.ui.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        margin: "0 0 20px",
                                        textAlign: "center",
                                        fontSize: "clamp(2rem, 7vw, 2.8rem)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.18em",
                                        fontWeight: 900,
                                        lineHeight: 1,
                                        background: `linear-gradient(135deg, #ffffff 0%, ${accent} 100%)`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    },
                                    children: activePlanet?.replace("-", " ") ?? "UNKNOWN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "40px",
                                        height: "1px",
                                        background: `rgba(${accentRgb}, 0.4)`,
                                        margin: "0 auto 20px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        textAlign: "center",
                                        margin: "0 0 28px",
                                        lineHeight: 1.75,
                                        fontSize: "13px",
                                        color: "rgba(192,224,255,0.75)",
                                        letterSpacing: "0.03em"
                                    },
                                    children: planetData?.ui.description ?? "Accessing spatial data. Prepare for entry."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.03,
                                        boxShadow: `0 0 32px rgba(${accentRgb}, 0.5), 0 0 8px rgba(${accentRgb}, 0.2)`
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    onClick: handleEnterDomain,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        padding: "15px 0",
                                        borderRadius: "10px",
                                        background: `linear-gradient(135deg, rgba(${accentRgb}, 0.12) 0%, rgba(${accentRgb}, 0.06) 100%)`,
                                        color: accent,
                                        border: `1px solid rgba(${accentRgb}, 0.45)`,
                                        fontWeight: 800,
                                        fontSize: "12px",
                                        letterSpacing: "0.3em",
                                        cursor: "pointer",
                                        textTransform: "uppercase",
                                        fontFamily: "inherit",
                                        transition: "background 0.2s ease",
                                        boxShadow: `0 0 16px rgba(${accentRgb}, 0.18)`
                                    },
                                    children: "ENTER DOMAIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PlanetCard/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PlanetCard, "3U0RQYO1SGoEmeT3ky1IuPwmdLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"]
    ];
});
_c = PlanetCard;
var _c;
__turbopack_context__.k.register(_c, "PlanetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/core/SunCore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SunCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SunCore() {
    _s();
    const sunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 🌀 دوران يعتمد على الـ delta لضمان استقرار السرعة على أي جهاز
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SunCore.useFrame": (_, delta)=>{
            if (sunRef.current) {
                sunRef.current.rotation.y += delta * 0.08;
            }
        }
    }["SunCore.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: "#ffcc88",
                intensity: 500,
                distance: 1000,
                decay: 1.5,
                position: [
                    0,
                    0,
                    0
                ],
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/core/SunCore.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: sunRef,
                args: [
                    3,
                    64,
                    64
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                    color: "#ffb300",
                    emissive: "#ff7a00",
                    emissiveIntensity: 4,
                    roughness: 0.15,
                    metalness: 0.05,
                    distort: 0.3,
                    speed: 2,
                    toneMapped: false
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/core/SunCore.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/core/SunCore.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    4.2,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: "#ffae00",
                    transparent: true,
                    opacity: 0.15,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/core/SunCore.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/core/SunCore.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/core/SunCore.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(SunCore, "QPhTQhJGFKH7vBZVyvXvbDUH9uY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = SunCore;
var _c;
__turbopack_context__.k.register(_c, "SunCore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/BasePlanet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BasePlanet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
// 👈 استيراد العقل المدبر والأنواع
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BasePlanet({ id, name, color, orbitRadius, size, orbitSpeed, onPlanetFocus, children }) {
    _s();
    const orbitGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerPlanetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // 👈 للتحكم في دوران المجسم حول نفسه
    const currentOrbitAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random() * Math.PI * 2);
    // قراءة الحالة من العقل المدبر
    const { mode, activePlanet, setMode, setPlanet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])();
    const isActive = activePlanet === id;
    // 🎯 نقطة الهبوط السفلية كمنصة
    const targetDescentY = -size * 3.5;
    // 🌟 اللمعة السينمائية (نحتفظ بها كبديل مؤقت للكواكب التي لم نصممها بعد)
    const fresnelMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BasePlanet.useMemo[fresnelMaterial]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
                    }
                },
                vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldPosition = (modelMatrix * vec4(position,1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
                fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);
          gl_FragColor = vec4(uColor, fresnel);
        }
      `,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                transparent: true,
                depthWrite: false
            });
        }
    }["BasePlanet.useMemo[fresnelMaterial]"], [
        color
    ]);
    // ⚙️ محرك الفيزياء والحركة (لم يتم المساس بعبقريته)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "BasePlanet.useFrame": (state, delta)=>{
            if (mode === "free" || !isActive) {
                currentOrbitAngle.current += orbitSpeed * delta;
            }
            const x = Math.cos(currentOrbitAngle.current) * orbitRadius;
            const z = Math.sin(currentOrbitAngle.current) * orbitRadius;
            let targetY = 0;
            if (isActive) {
                if (mode === "isolation") {
                    targetY = Math.sin(state.clock.elapsedTime * 2) * (size * 0.2);
                } else if (mode === "enter") {
                    targetY = targetDescentY;
                }
            }
            if (orbitGroupRef.current) {
                orbitGroupRef.current.position.x = x;
                orbitGroupRef.current.position.z = z;
                const smoothFactor = 1 - Math.pow(0.001, delta);
                orbitGroupRef.current.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(orbitGroupRef.current.position.y, targetY, smoothFactor);
            }
            // دوران الكوكب الداخلي حول نفسه
            if (innerPlanetRef.current) {
                innerPlanetRef.current.rotation.y += delta * 0.2;
            }
        }
    }["BasePlanet.useFrame"]);
    // 🖱️ نظام الضغط السينمائي المدمج
    const handleClick = (e)=>{
        e.stopPropagation();
        if (!isActive || mode === "free") {
            if (onPlanetFocus && orbitGroupRef.current) {
                const worldPos = orbitGroupRef.current.position.clone();
                worldPos.y = 0;
                onPlanetFocus({
                    name,
                    position: worldPos
                });
            }
            setPlanet(id);
            setMode("approach");
        } else if (mode === "approach") {
            setMode("isolation");
        } else if (mode === "isolation") {
            setMode("enter");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: orbitGroupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                onClick: handleClick,
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                },
                onPointerOut: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "auto";
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            size * 3,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        visible: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: innerPlanetRef,
                children: children ? children // 👈 لو صممنا الكوكب، هيعرض التصميم الجديد
                 : /* 👈 طوق النجاة: لو لسه مصممناش الكوكب، يعرض الشكل الكلاسيكي بتاعك */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                    args: [
                                        size,
                                        64,
                                        64
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    metalness: 0.6,
                                    roughness: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            material: fresnelMaterial,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    size * 1.15,
                                    64,
                                    64
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            mode !== "enter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    size + 1.5,
                    0
                ],
                center: true,
                distanceFactor: 15,
                style: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "6px 14px",
                        borderRadius: "12px",
                        background: "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                        fontSize: "12px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        opacity: isActive && mode === "isolation" ? 0.3 : 1,
                        transition: "opacity 0.5s"
                    },
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/BasePlanet.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(BasePlanet, "wxhSM/sSy+7mwIe5urfjzHsaLIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = BasePlanet;
var _c;
__turbopack_context__.k.register(_c, "BasePlanet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/3d/planets/IdentityPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "HELIX",
    ()=>HELIX,
    "ICON_HOVER_SCALE",
    ()=>ICON_HOVER_SCALE,
    "ICON_SPRING",
    ()=>ICON_SPRING,
    "LIGHTING",
    ()=>LIGHTING,
    "LOD_CULL_RADIUS",
    ()=>LOD_CULL_RADIUS,
    "PALETTE",
    ()=>PALETTE,
    "PANEL_SPRING",
    ()=>PANEL_SPRING,
    "PROXIMITY_PULSE",
    ()=>PROXIMITY_PULSE,
    "SHELL_MATERIAL",
    ()=>SHELL_MATERIAL,
    "SPARKLE",
    ()=>SPARKLE
]);
/**
 * IdentityPlanet — "Layered Emerald" Skin & Material Configuration
 *
 * VISUAL CONCEPT: Digital Jewelry
 * ─────────────────────────────────────────────────────────────────
 * A hyper-realistic gemstone sphere — deep emerald (#004d40) with
 * crystal refraction (ior 1.45), full clearcoat (1.0), and internal
 * warm ivory attenuation creating visible "strata" inside the shell.
 *
 * MATERIAL SCIENCE
 * ─────────────────────────────────────────────────────────────────
 * MeshPhysicalMaterial with:
 *   transmission: 0.92   → Crystal-clear with slight emerald body
 *   thickness: 1.5       → Moderate depth for layered feel
 *   ior: 1.45            → Crystal refraction (between glass & gem)
 *   clearcoat: 1.0       → Perfect mirror surface layer
 *   iridescence: 0.6     → Subtle green→teal→gold angle shift
 *   attenuationColor: #e8dcc8 (Warm Ivory)
 *   attenuationDistance: 3.0 → Long-range warm glow inside
 *
 * INTERACTIVE ATMOSPHERE (Aura)
 * ─────────────────────────────────────────────────────────────────
 *   • IDLE        → Emerald (#00c896)
 *   • EDUCATION   → Royal Ivory (#f5e6c8), warm scholarly glow
 *   • SPORTS      → Championship Gold (#ffd700), energetic flare
 *
 * SPRING PHYSICS
 * ─────────────────────────────────────────────────────────────────
 * All UI panels: stiffness 250, damping 20, mass 1.0
 * Premium weightless feel with controlled overshoot.
 *
 * MOUSE PROXIMITY PULSE
 * ─────────────────────────────────────────────────────────────────
 * Core emissiveIntensity is driven by normalized mouse-to-planet
 * distance: distant → idle (0.4), close → peak (2.5).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const PALETTE = {
    /** Deep emerald base — primary hue */ emeraldDeep: "#004d40",
    /** Bright emerald for emissive edges and rim highlights */ emeraldBright: "#00c896",
    /** Translucent ivory — inner strata colour */ ivoryCore: "#f5f0e8",
    /** Warm ivory — attenuation colour inside gemstone */ ivoryCoreGlow: "#e8dcc8",
    /** Education aura — warm scholarly gold-ivory */ auraEducation: "#f5e6c8",
    /** Sports aura — championship gold */ auraSports: "#ffd700",
    /** Default idle aura */ auraIdle: "#00c896",
    /** Education helix node border — warm amber */ educationNode: "#c8a87a",
    /** Sports helix node border — emerald mint */ sportsNode: "#00e5a0",
    /** Deep background for UI overlays */ overlayBg: "#05140f"
};
const SHELL_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.emeraldDeep),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.emeraldBright),
    emissiveIntensity: 0.2,
    metalness: 0.0,
    roughness: 0.05,
    // ── Transmission ──
    transmission: 0.92,
    thickness: 1.5,
    ior: 1.45,
    // ── Iridescence ──
    iridescence: 0.6,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [
        100,
        400
    ],
    // ── Clearcoat ──
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    // ── Internal Attenuation (Warm Ivory depth tint) ──
    attenuationColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.ivoryCoreGlow),
    attenuationDistance: 3.0,
    envMapIntensity: 1.5,
    transparent: true
};
const CORE_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.ivoryCoreGlow),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.ivoryCore),
    emissiveIntensity: 0.8,
    roughness: 0.1,
    metalness: 0.35,
    transparent: true,
    opacity: 0.92
};
const PROXIMITY_PULSE = {
    /** Emissive when mouse is far away */ idle: 0.4,
    /** Emissive when mouse is directly over the planet */ peak: 2.5,
    /** Normalized distance at which peak begins to take effect (in world units) */ influenceRadius: 5.0
};
const AURA = {
    idle: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.auraIdle),
    education: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.auraEducation),
    sports: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.auraSports)
};
const AURA_LERP_RATE = 0.003;
const AURA_INTENSITY = {
    idle: 3.0,
    education: 5.0,
    sports: 6.0
};
const AURA_DISTANCE = {
    idle: 8,
    education: 10,
    sports: 12
};
const PANEL_SPRING = {
    stiffness: 250,
    damping: 20,
    mass: 1.0
};
const ICON_SPRING = {
    stiffness: 300,
    damping: 16,
    mass: 0.6
};
const ICON_HOVER_SCALE = 1.3;
const HELIX = {
    /** Radius of the helix orbit */ radius: 2.8,
    /** Total vertical span of the helix */ height: 4.0,
    /** Number of full turns */ turns: 1.5,
    /** Base rotation speed (rad/s) */ rotationSpeed: 0.04,
    /** Nodes on each strand */ nodesPerStrand: 24
};
const LIGHTING = {
    environment: "night",
    environmentIntensity: 1.3,
    /** Key — intense white SpotLight, top-right, VSM soft shadows */ key: {
        color: "#ffffff",
        intensity: 100,
        position: [
            5,
            8,
            4
        ],
        angle: 0.45,
        penumbra: 0.85,
        decay: 1.5,
        distance: 30
    },
    /** Fill — soft neutral PointLight, lower-left */ fill: {
        color: "#f0f0f0",
        intensity: 3.0,
        position: [
            -4,
            -2,
            6
        ],
        distance: 18,
        decay: 2
    },
    /** Rim — emerald-tinted DirectionalLight from behind */ rim: {
        color: PALETTE.emeraldBright,
        intensity: 4.0,
        position: [
            -4,
            6,
            -8
        ]
    }
};
const SPARKLE = {
    count: 60,
    scale: 0.4,
    size: 2,
    speed: 0.15,
    opacity: 0.7,
    color: PALETTE.ivoryCoreGlow
};
const LOD_CULL_RADIUS = 12;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/IdentityPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdentityPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * IdentityPlanet — Production-grade Identity Planet visual component
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. SEPARATION OF CONCERNS: Visual component only. Mounted as `children`
 *    inside <BasePlanet id="identity"> in TheSolarSystem.tsx.
 *
 * 2. FRESNEL GLASS EFFECT: Custom ShaderMaterial using dot(viewDir, normal).
 *    Avoids costly post-process layers. Zero new allocations in useFrame.
 *
 * 3. UNIVERSITY ARC — MANIFEST-WIRED: Fetches assets_manifest_v8.json on
 *    mount, filters for lifestyle/milestones + lifestyle/personal_history,
 *    renders up to ARC_NODE_COUNT real <Image> planes along CubicBezierCurve3.
 *    Geometric placeholder renders while manifest loads.
 *
 * 4. CAPTAIN'S COMMAND — MANIFEST-WIRED: Filters legacy/national_pride +
 *    performance/floor_general. Renders up to CAPTAIN_NODE_COUNT real images
 *    on a Fibonacci sphere. LOD culling applied per-node in useFrame.
 *
 * 5. PER-NODE LOD CULLING: Every node group ref is distance-checked against
 *    camera.position in useFrame. Beyond LOD_CULL_RADIUS → group.visible=false.
 *    _tempVec is pre-allocated outside the loop — ZERO allocations per frame.
 *
 * 6. TEMPORAL ECHO OVERLAY: Clicking any image node passes its AssetRecord
 *    metadata into the overlay, replacing placeholders with real photo + year
 *    + title + location from the live manifest.
 *
 * 7. NEBULA BACKGROUND: Additive point cloud via drei <Stars>, ivory tint.
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/IdentityPlanet/skins.ts [app-client] (ecmascript)");
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
// ─── Derived layout constants from HELIX config ──────────────────────────────
const DEFAULT_NODE_COUNT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELIX"].nodesPerStrand;
const CAPTAIN_CLUSTER_RADIUS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELIX"].radius * 0.65;
// Pre-allocated Vector3 — shared across all LOD checks, never allocates in useFrame
const _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const QU_ARC_TOKENS = [
    "lifestyle/milestones",
    "lifestyle/personal_history"
];
const CAPTAIN_TOKENS = [
    "legacy/national_pride",
    "performance/floor_general"
];
// Pre-allocated Color for aura lerping — zero allocations in useFrame
const _auraColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
// ─── Manifest hook ────────────────────────────────────────────────────────────
function useManifestAssets(arcLimit, captainLimit) {
    _s();
    const [arcAssets, setArcAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [captainAssets, setCaptainAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useManifestAssets.useEffect": ()=>{
            let cancelled = false;
            ({
                "useManifestAssets.useEffect": async ()=>{
                    try {
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_URL"]);
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const manifest = await res.json();
                        if (cancelled) return;
                        setArcAssets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifest"])(manifest, QU_ARC_TOKENS, arcLimit));
                        setCaptainAssets((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifest"])(manifest, CAPTAIN_TOKENS, captainLimit));
                    } catch (err) {
                        console.warn("[IdentityPlanet] Manifest fetch failed — graceful fallback:", err);
                    }
                }
            })["useManifestAssets.useEffect"]();
            return ({
                "useManifestAssets.useEffect": ()=>{
                    cancelled = true;
                }
            })["useManifestAssets.useEffect"];
        }
    }["useManifestAssets.useEffect"], [
        arcLimit,
        captainLimit
    ]);
    return {
        arcAssets,
        captainAssets
    };
}
_s(useManifestAssets, "1oLKRm5PcnBNkW7eTTVpWwEx3aA=");
// ─── Identity Core — Living Emerald (Layered Gemstone MeshPhysicalMaterial) ───
function IdentityCore({ auraMode }) {
    _s1();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "IdentityCore.useFrame": ({ clock }, delta)=>{
            const t = clock.elapsedTime;
            // Shell slow rotation
            if (shellRef.current) shellRef.current.rotation.y += 0.002;
            // Core proximity pulse (mouse distance → emissive intensity)
            if (coreRef.current) {
                const pulse = Math.sin(t * Math.PI * 2 * 0.4);
                const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].idle + (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].peak - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROXIMITY_PULSE"].idle) * (pulse * 0.5 + 0.5) * 0.3;
                coreRef.current.material.emissiveIntensity = base;
            }
            // Aura colour + intensity shift
            if (auraLightRef.current) {
                const targetColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA"][auraMode];
                const targetIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_INTENSITY"][auraMode];
                const targetDistance = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_DISTANCE"][auraMode];
                const lerpFactor = 1 - Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_LERP_RATE"], delta);
                auraLightRef.current.color.lerp(targetColor, lerpFactor);
                auraLightRef.current.intensity += (targetIntensity - auraLightRef.current.intensity) * lerpFactor;
                auraLightRef.current.distance += (targetDistance - auraLightRef.current.distance) * lerpFactor;
            }
        }
    }["IdentityCore.useFrame"]);
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
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissiveIntensity,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].metalness,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].roughness,
                    transmission: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].transmission,
                    thickness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].thickness,
                    ior: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].ior,
                    iridescence: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescence,
                    iridescenceIOR: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescenceIOR,
                    iridescenceThicknessRange: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].iridescenceThicknessRange,
                    clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoat,
                    clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoatRoughness,
                    attenuationColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationColor,
                    attenuationDistance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].attenuationDistance,
                    envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].envMapIntensity,
                    transparent: true
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: coreRef,
                args: [
                    0.72,
                    64,
                    64
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissiveIntensity,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].roughness,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].metalness,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].opacity
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: auraLightRef,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].auraIdle,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_INTENSITY"].idle,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AURA_DISTANCE"].idle,
                decay: 2
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s1(IdentityCore, "/B5uGR/Y+XAnoLqZlsKJoUMtdyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = IdentityCore;
// ─── Cinematic Lighting Rig (3-point + Environment) ──────────────────────────
function IdentityLightingRig() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environment,
                background: false,
                environmentIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environmentIntensity
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.angle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.penumbra,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.decay,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.distance,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-bias": -0.0001,
                "shadow-normalBias": 0.02
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.position,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.distance,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.decay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.position
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = IdentityLightingRig;
function ImageNode({ asset, position, scale = 0.28, borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].educationNode, onSelect, groupRef }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            scale * 0.95,
                            scale * 1.12,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: borderColor,
                        transparent: true,
                        opacity: 0.55,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                url: asset.url,
                scale: scale,
                transparent: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    onSelect(asset);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_c2 = ImageNode;
function UniversityArc({ assets, nodeCount, lodCullRadius, onSelectAsset }) {
    _s2();
    const count = assets.length;
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UniversityArc.useMemo[positions]": ()=>{
            const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-3.5, -1.5, 0.5), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.5, 2.5, 1.5), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.5, 2.8, -1.0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](3.5, 1.0, 0.5));
            return curve.getPoints(Math.max(count, nodeCount) - 1);
        }
    }["UniversityArc.useMemo[positions]"], [
        count,
        nodeCount
    ]);
    const renderPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UniversityArc.useMemo[renderPositions]": ()=>{
            return assets.map({
                "UniversityArc.useMemo[renderPositions]": (_, i)=>{
                    const base = positions[i] ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                    const jitterX = Math.sin(i * 2.3) * 0.075;
                    const jitterY = Math.cos(i * 1.7) * 0.075;
                    const jitterZ = Math.sin(i * 3.1) * 0.075;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](base.x + jitterX, base.y + jitterY, base.z + jitterZ);
                }
            }["UniversityArc.useMemo[renderPositions]"]);
        }
    }["UniversityArc.useMemo[renderPositions]"], [
        assets,
        positions
    ]);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    if (nodeRefs.current.length !== count) {
        nodeRefs.current = Array.from({
            length: count
        }, ()=>({
                current: null
            }));
    }
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "UniversityArc.useFrame": ({ clock })=>{
            if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.06;
            nodeRefs.current.forEach({
                "UniversityArc.useFrame": (ref)=>{
                    const g = ref.current;
                    if (!g) return;
                    _tempVec.setFromMatrixPosition(g.matrixWorld);
                    g.visible = _tempVec.distanceTo(camera.position) < lodCullRadius;
                }
            }["UniversityArc.useFrame"]);
        }
    }["UniversityArc.useFrame"]);
    // Geometric placeholder while manifest loads
    if (count === 0) {
        const placeholderCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicBezierCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-3.5, -1.5, 0.5), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.5, 2.5, 1.5), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.5, 2.8, -1.0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](3.5, 1.0, 0.5));
        const pts = placeholderCurve.getPoints(nodeCount - 1);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            children: pts.map((pt, i)=>{
                const t = i / Math.max(nodeCount - 1, 1);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pt,
                    scale: 0.06 + 0.04 * Math.sin(Math.PI * t),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                            args: [
                                1,
                                0
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                            lineNumber: 317,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].educationNode,
                            emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].educationNode,
                            emissiveIntensity: 0.4,
                            metalness: 0.6,
                            roughness: 0.3
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                            lineNumber: 318,
                            columnNumber: 15
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 316,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
            lineNumber: 312,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: assets.map((asset, i)=>{
            const t = i / Math.max(count - 1, 1);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageNode, {
                asset: asset,
                position: renderPositions[i],
                scale: 0.22 + 0.08 * Math.sin(Math.PI * t),
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].educationNode,
                onSelect: onSelectAsset,
                groupRef: nodeRefs.current[i]
            }, asset.id, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 331,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s2(UniversityArc, "6bz5elZBNVmgKWXv3OOn2elS68c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = UniversityArc;
function CaptainCommandCluster({ assets, nodeCount, lodCullRadius, onSelectAsset }) {
    _s3();
    const count = assets.length;
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CaptainCommandCluster.useMemo[positions]": ()=>{
            const n = Math.max(count, nodeCount);
            const goldenAngle = Math.PI * (3 - Math.sqrt(5));
            return Array.from({
                length: n
            }, {
                "CaptainCommandCluster.useMemo[positions]": (_, i)=>{
                    const y = 1 - i / (n - 1 || 1) * 2;
                    const r = Math.sqrt(Math.max(0, 1 - y * y));
                    const theta = goldenAngle * i;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(theta) * r * CAPTAIN_CLUSTER_RADIUS, y * CAPTAIN_CLUSTER_RADIUS, Math.sin(theta) * r * CAPTAIN_CLUSTER_RADIUS);
                }
            }["CaptainCommandCluster.useMemo[positions]"]);
        }
    }["CaptainCommandCluster.useMemo[positions]"], [
        count,
        nodeCount
    ]);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    if (nodeRefs.current.length !== count) {
        nodeRefs.current = Array.from({
            length: count
        }, ()=>({
                current: null
            }));
    }
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CaptainCommandCluster.useFrame": ({ clock })=>{
            if (groupRef.current) {
                groupRef.current.rotation.y = -clock.elapsedTime * 0.04;
                groupRef.current.rotation.x = clock.elapsedTime * 0.02;
            }
            nodeRefs.current.forEach({
                "CaptainCommandCluster.useFrame": (ref)=>{
                    const g = ref.current;
                    if (!g) return;
                    _tempVec.setFromMatrixPosition(g.matrixWorld);
                    g.visible = _tempVec.distanceTo(camera.position) < lodCullRadius;
                }
            }["CaptainCommandCluster.useFrame"]);
        }
    }["CaptainCommandCluster.useFrame"]);
    // Geometric placeholder while manifest loads
    if (count === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: groupRef,
            children: positions.slice(0, nodeCount).map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    scale: 0.07,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                            args: [
                                1,
                                0
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].sportsNode,
                            emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].sportsNode,
                            emissiveIntensity: 0.5,
                            metalness: 0.3,
                            roughness: 0.4
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
            lineNumber: 397,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: assets.map((asset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageNode, {
                asset: asset,
                position: positions[i],
                scale: 0.2,
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].sportsNode,
                onSelect: onSelectAsset,
                groupRef: nodeRefs.current[i]
            }, asset.id, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
_s3(CaptainCommandCluster, "LMoQZxGUTnMcLyBkaPdYbf9tDRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = CaptainCommandCluster;
function TemporalEchoOverlay({ visible, selectedAsset, onClose }) {
    _s4();
    const [sliderX, setSliderX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
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
            children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 40,
                    scale: 0.96
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 40,
                    scale: 0.96
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    type: "spring",
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
                },
                style: {
                    pointerEvents: "auto",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(680px, 92vw)",
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "linear-gradient(145deg,rgba(5,20,15,0.88) 0%,rgba(0,8,5,0.92) 100%)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(0,200,150,0.25)",
                    boxShadow: "0 0 60px rgba(0,200,150,0.12),inset 0 0 30px rgba(0,150,100,0.06)",
                    zIndex: 500
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1.25rem 1.5rem 0.75rem",
                            borderBottom: "1px solid rgba(0,200,150,0.12)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "#00c896",
                                            fontSize: 10,
                                            letterSpacing: "0.35em",
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                            marginBottom: 2
                                        },
                                        children: "Temporal Echo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: "#f5f0e8",
                                            fontSize: 18,
                                            fontWeight: 900,
                                            letterSpacing: "-0.02em"
                                        },
                                        children: selectedAsset ? `${selectedAsset.year} · ${selectedAsset.location}` : "Student → Captain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "rgba(255,255,255,0.3)",
                                    fontSize: 28,
                                    cursor: "pointer",
                                    lineHeight: 1,
                                    padding: "4px 8px"
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 480,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 471,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            height: 280,
                            overflow: "hidden",
                            userSelect: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(135deg,#1a1208 0%,#0d0a04 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        color: "#c8a87a"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                letterSpacing: "0.4em",
                                                textTransform: "uppercase",
                                                marginBottom: 8,
                                                opacity: 0.6
                                            },
                                            children: "THEN · Qatar University"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 36,
                                                fontWeight: 900,
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1
                                            },
                                            children: "Student"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 489,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                opacity: 0.5,
                                                marginTop: 8,
                                                fontWeight: 300
                                            },
                                            children: "Marketing · IT Pioneer · Early Court Years"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                    lineNumber: 487,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 486,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(135deg,#001a12 0%,#000d08 100%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    clipPath: `inset(0 0 0 ${sliderX}%)`
                                },
                                children: selectedAsset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedAsset.url,
                                            alt: selectedAsset.title,
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                filter: "sepia(0.05) saturate(1.1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 499,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: "0.75rem 1rem",
                                                background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 100%)",
                                                color: "#00e5a0",
                                                fontSize: 12,
                                                fontWeight: 600
                                            },
                                            children: selectedAsset.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 500,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        color: "#00e5a0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                letterSpacing: "0.4em",
                                                textTransform: "uppercase",
                                                marginBottom: 8,
                                                opacity: 0.6
                                            },
                                            children: "NOW · National Captain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 506,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 36,
                                                fontWeight: 900,
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1
                                            },
                                            children: "Captain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 507,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                opacity: 0.5,
                                                marginTop: 8,
                                                fontWeight: 300
                                            },
                                            children: "Qatar National Team · Club Al-Shamal · Entrepreneur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                            lineNumber: 508,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                    lineNumber: 505,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 495,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    left: `${sliderX}%`,
                                    width: 2,
                                    background: "linear-gradient(to bottom,transparent,#00c896,transparent)",
                                    transform: "translateX(-50%)",
                                    cursor: "ew-resize",
                                    zIndex: 10
                                },
                                onMouseDown: (e)=>{
                                    e.preventDefault();
                                    const rect = e.currentTarget.parentElement.getBoundingClientRect();
                                    const move = (ev)=>setSliderX(Math.min(95, Math.max(5, (ev.clientX - rect.left) / rect.width * 100)));
                                    const up = ()=>{
                                        window.removeEventListener("mousemove", move);
                                        window.removeEventListener("mouseup", up);
                                    };
                                    window.addEventListener("mousemove", move);
                                    window.addEventListener("mouseup", up);
                                },
                                onTouchMove: (e)=>{
                                    const rect = e.currentTarget.parentElement.getBoundingClientRect();
                                    setSliderX(Math.min(95, Math.max(5, (e.touches[0].clientX - rect.left) / rect.width * 100)));
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        width: 28,
                                        height: 28,
                                        borderRadius: "50%",
                                        background: "#00c896",
                                        boxShadow: "0 0 16px rgba(0,200,150,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#000",
                                        fontSize: 12,
                                        fontWeight: 900
                                    },
                                    children: "⇔"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                    lineNumber: 529,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 514,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 484,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.75rem 1.5rem",
                            borderTop: "1px solid rgba(0,200,150,0.08)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#c8a87a",
                                    fontSize: 11,
                                    opacity: 0.6
                                },
                                children: "← THEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            selectedAsset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#ffffff",
                                    fontSize: 11,
                                    opacity: 0.5
                                },
                                children: [
                                    selectedAsset.location,
                                    " · ",
                                    selectedAsset.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 537,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#00e5a0",
                                    fontSize: 11,
                                    opacity: 0.6
                                },
                                children: "NOW →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                                lineNumber: 539,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 534,
                        columnNumber: 13
                    }, this)
                ]
            }, "temporal-echo", true, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 440,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
            lineNumber: 438,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_s4(TemporalEchoOverlay, "Jl0PTCtFlAFfq3LlSS3SoPJv64Q=");
_c5 = TemporalEchoOverlay;
// ─── StoryLink Camera Animator ────────────────────────────────────────────────
function StoryLinkCameraControl({ target, active }) {
    _s5();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const lerpTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "StoryLinkCameraControl.useFrame": (_, delta)=>{
            if (!active || !target) return;
            lerpTarget.current.set(target.x, target.y + 3, target.z + 5);
            camera.position.lerp(lerpTarget.current, 1 - Math.pow(0.001, delta));
        }
    }["StoryLinkCameraControl.useFrame"]);
    return null;
}
_s5(StoryLinkCameraControl, "Kdl8kQvIAvDUE1l4awyuI7eTAh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = StoryLinkCameraControl;
function IdentityPlanetVisual() {
    _s6();
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "IdentityPlanetVisual.useDeviceStore[tier]": (s)=>s.tier
    }["IdentityPlanetVisual.useDeviceStore[tier]"]);
    const budget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IdentityPlanetVisual.useMemo[budget]": ()=>{
            if (tier === "mobile") {
                return {
                    arcNodeCount: 14,
                    captainNodeCount: 14,
                    lodCullRadius: 9,
                    ambientStars: 420
                };
            }
            if (tier === "tablet") {
                return {
                    arcNodeCount: 18,
                    captainNodeCount: 18,
                    lodCullRadius: 10.5,
                    ambientStars: 560
                };
            }
            return {
                arcNodeCount: DEFAULT_NODE_COUNT,
                captainNodeCount: DEFAULT_NODE_COUNT,
                lodCullRadius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOD_CULL_RADIUS"],
                ambientStars: 800
            };
        }
    }["IdentityPlanetVisual.useMemo[budget]"], [
        tier
    ]);
    const { arcAssets, captainAssets } = useManifestAssets(budget.arcNodeCount, budget.captainNodeCount);
    const [showTemporalEcho, setShowTemporalEcho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAsset, setSelectedAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [storyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [storyActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [auraMode, setAuraMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleCoreClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IdentityPlanetVisual.useCallback[handleCoreClick]": ()=>{
            setSelectedAsset(null);
            setShowTemporalEcho({
                "IdentityPlanetVisual.useCallback[handleCoreClick]": (v)=>!v
            }["IdentityPlanetVisual.useCallback[handleCoreClick]"]);
        }
    }["IdentityPlanetVisual.useCallback[handleCoreClick]"], []);
    const handleNodeSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IdentityPlanetVisual.useCallback[handleNodeSelect]": (asset)=>{
            setSelectedAsset(asset);
            setShowTemporalEcho(true);
        }
    }["IdentityPlanetVisual.useCallback[handleNodeSelect]"], []);
    const handleCloseEcho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IdentityPlanetVisual.useCallback[handleCloseEcho]": ()=>{
            setShowTemporalEcho(false);
            setSelectedAsset(null);
        }
    }["IdentityPlanetVisual.useCallback[handleCloseEcho]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IdentityLightingRig, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: 12,
                depth: 4,
                count: budget.ambientStars,
                factor: 1.2,
                saturation: 0.1,
                fade: true,
                speed: 0.3
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                onClick: handleCoreClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IdentityCore, {
                    auraMode: auraMode
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 619,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    onPointerEnter: ()=>setAuraMode("education"),
                    onPointerLeave: ()=>setAuraMode("idle"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UniversityArc, {
                        assets: arcAssets,
                        nodeCount: budget.arcNodeCount,
                        lodCullRadius: budget.lodCullRadius,
                        onSelectAsset: handleNodeSelect
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 628,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    onPointerEnter: ()=>setAuraMode("sports"),
                    onPointerLeave: ()=>setAuraMode("idle"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaptainCommandCluster, {
                        assets: captainAssets,
                        nodeCount: budget.captainNodeCount,
                        lodCullRadius: budget.lodCullRadius,
                        onSelectAsset: handleNodeSelect
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                        lineNumber: 643,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                    lineNumber: 639,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemporalEchoOverlay, {
                visible: showTemporalEcho,
                selectedAsset: selectedAsset,
                onClose: handleCloseEcho
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryLinkCameraControl, {
                target: storyTarget,
                active: storyActive
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/IdentityPlanet/index.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
_s6(IdentityPlanetVisual, "bxYKCwGV0W20lyKb3OdeddFtWo4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        useManifestAssets
    ];
});
_c7 = IdentityPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "IdentityCore");
__turbopack_context__.k.register(_c1, "IdentityLightingRig");
__turbopack_context__.k.register(_c2, "ImageNode");
__turbopack_context__.k.register(_c3, "UniversityArc");
__turbopack_context__.k.register(_c4, "CaptainCommandCluster");
__turbopack_context__.k.register(_c5, "TemporalEchoOverlay");
__turbopack_context__.k.register(_c6, "StoryLinkCameraControl");
__turbopack_context__.k.register(_c7, "IdentityPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/LegacyPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_MATERIAL",
    ()=>CORE_MATERIAL,
    "ERA_MAX",
    ()=>ERA_MAX,
    "ERA_MIN",
    ()=>ERA_MIN,
    "FOG",
    ()=>FOG,
    "FRAME_MATERIAL",
    ()=>FRAME_MATERIAL,
    "GALLERY_COUNT",
    ()=>GALLERY_COUNT,
    "GOD_RAY",
    ()=>GOD_RAY,
    "LIGHTING",
    ()=>LIGHTING,
    "LOD_CULL_RADIUS",
    ()=>LOD_CULL_RADIUS,
    "MEMORY_RECALL",
    ()=>MEMORY_RECALL,
    "PALETTE",
    ()=>PALETTE,
    "PANEL_SPRING",
    ()=>PANEL_SPRING,
    "SHELL_MATERIAL",
    ()=>SHELL_MATERIAL,
    "SIGNATURE_GLOW",
    ()=>SIGNATURE_GLOW,
    "SPIRAL",
    ()=>SPIRAL,
    "TEXTURES",
    ()=>TEXTURES
]);
/**
 * LegacyPlanet — "Obsidian-Gold Basketball" Skin & Material Configuration
 *
 * VISUAL CONCEPT — NBA Trophy Ball
 * ─────────────────────────────────────────────────────────────────
 * A hyper-realistic, obsidian-gold basketball with Mizo's gold
 * signature etched into the surface. The signature glows emissive
 * during God Ray pulses, creating a "living autograph" effect.
 *
 * MATERIAL SCIENCE — Trophy Gold (MeshPhysicalMaterial)
 * ─────────────────────────────────────────────────────────────────
 *   metalness: 1.0        → Full metal — like an actual NBA trophy
 *   roughness: 0.15       → Polished but with micro-grain for realism
 *   clearcoat: 1.0        → Lacquered trophy finish
 *   clearcoatRoughness: 0.04  → Near-mirror clearcoat layer
 *   envMapIntensity: 2.5   → Hot HDRI reflections on the surface
 *   reflectivity: 1.0      → Maximum Fresnel reflection at grazing angles
 *
 * THE SIGNATURE EFFECT
 * ─────────────────────────────────────────────────────────────────
 * Technique: Dual-texture blend via MeshPhysicalMaterial maps.
 *
 *   1. BASE MAP (albedo.jpg): The obsidian-gold basketball texture
 *      with panel lines and pebble grain.
 *
 *   2. SIGNATURE MAP (emissiveMap): A grayscale texture where Mizo's
 *      signature is white-on-black. When assigned as `emissiveMap`,
 *      ONLY the white signature pixels emit light. The black areas
 *      contribute zero emission → signature "floats" in gold glow.
 *
 *   3. GOD RAY SYNC: In useFrame, the core's `emissiveIntensity` is
 *      modulated by the same breathing sine wave as the God Ray shaft:
 *        breathe = 0.8 + 0.2 * sin(t * 0.5)
 *        emissiveIntensity = SIGNATURE_GLOW.idle + breathe * SIGNATURE_GLOW.amplitude
 *      This syncs the gold autograph glow with the god-ray pulse.
 *
 * DISPLAY ARCHITECTURE — Gravitational Legend Orbit
 * ─────────────────────────────────────────────────────────────────
 * Championship trophies orbit in a SPIRAL VORTEX (double helix) that
 * winds around the signed ball. The spiral creates gravitational
 * depth — trophies closer to the equator feel "pulled in" while
 * those near the poles drift wider. Combined with slow rotation,
 * this gives the sense that the ball's legend warps space itself.
 *
 *   SPIRAL_BASE_RADIUS: 2.8  → Close enough to feel gravitational pull
 *   SPIRAL_HEIGHT: 6.0       → Tall column embracing the planet
 *   SPIRAL_TURNS: 2.5        → Enough wraps for density without clutter
 *   rotationSpeed: 0.035     → Stately, trophy-case rotation
 *
 * TEXTURE PATHS
 * ─────────────────────────────────────────────────────────────────
 *   albedo:    /textures/planets/legacy/default/albedo.jpg
 *   signature: /textures/planets/legacy/default/albedo.jpg (emissiveMap fallback)
 *              → Create as white-on-black grayscale of Mizo's autograph
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const PALETTE = {
    /** Classic gold — primary surface hue */ gold: "#D4AF37",
    /** Bright gold — emissive highlights, god-ray tint */ goldBright: "#F5D060",
    /** Dim gold — ambient emissive base */ goldDim: "#8B7425",
    /** Deep obsidian — the dark base of the basketball */ obsidian: "#0D0D0D",
    /** Warm sepia bronze — secondary accent */ sepiaBronze: "#7C4E1E",
    /** Charcoal — UI overlay background */ charcoal: "#1A1A1A"
};
const TEXTURES = {
    /** Basketball surface — obsidian-gold base albedo */ albedo: "/textures/planets/legacy/default/albedo.jpg",
    /**
   * Signature emissive map — white-on-black grayscale.
   * White pixels = Mizo's autograph → glow gold.
   * Black pixels = zero emission → invisible.
   *
   * If this texture doesn't exist yet, the material falls back
   * to uniform emissive (no map), which still looks correct.
   */ signature: "/textures/planets/legacy/default/albedo.jpg"
};
const SHELL_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FFD700"),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FFA500"),
    emissiveIntensity: 1.4,
    metalness: 1.0,
    roughness: 0.18,
    // ── Clearcoat (lacquered trophy finish — makes signature pop) ──
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    // ── Environment reflections ──
    envMapIntensity: 2.5,
    reflectivity: 1.0
};
const CORE_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.goldBright),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.goldBright),
    emissiveIntensity: 0.8,
    metalness: 0.0,
    roughness: 0.8,
    transparent: true,
    opacity: 0.7
};
const SIGNATURE_GLOW = {
    /** Base emissive intensity when god rays are at minimum */ idle: 0.8,
    /** Additional intensity added at god ray peak */ amplitude: 0.8,
    /** Frequency in Hz (matches GodRayShaft at 0.5 Hz) */ frequency: 0.5,
    /** Emissive spike when a trophy/asset is hovered (“Memory Recall”) */ hoverSpike: 2.8
};
const GOD_RAY = {
    /** Outer cone geometry */ outerRadius: 4.5,
    outerHeight: 14,
    outerOpacity: 0.04,
    /** Inner cone geometry */ innerRadius: 1.5,
    innerHeight: 14,
    innerOpacity: 0.07,
    /** Breathing pulse at 0.5 Hz — synced with SIGNATURE_GLOW.frequency */ breatheBase: 0.8,
    breatheAmplitude: 0.2,
    /** SpotLight at apex */ spotIntensity: 60,
    spotDistance: 20,
    spotAngle: 0.4,
    spotPenumbra: 0.7,
    /** Pulse frequency in Hz */ pulseHz: 0.5
};
const SPIRAL = {
    /** Base orbital radius at equator level */ baseRadius: 2.8,
    /** Total vertical span of the helix column */ height: 6.0,
    /** Number of full helix revolutions */ turns: 2.5,
    /** Rotation speed (rad/frame ≈ 0.035 at 60fps) */ rotationSpeed: 0.035,
    /** Organic radius variation amplitude */ radiusVariation: 0.3,
    /**
   * Stairway to Glory: career assets (2015–2017) physically ascend the Y-axis.
   * Y offset is computed as: baseY + (yearIndex / totalYears) * stairwayRise
   */ stairwayRise: 1.5
};
const LIGHTING = {
    environment: "sunset",
    environmentIntensity: 1.2,
    /** Key — warm high-intensity SpotLight, top-right, VSM soft shadows */ key: {
        color: "#fff8e0",
        intensity: 100,
        position: [
            5,
            8,
            4
        ],
        angle: 0.45,
        penumbra: 0.85,
        decay: 1.5,
        distance: 30
    },
    /** Fill — neutral PointLight, lower-left */ fill: {
        color: "#f0f0f0",
        intensity: 3.0,
        position: [
            -4,
            -2,
            6
        ],
        distance: 18,
        decay: 2
    },
    /** Rim — golden DirectionalLight from behind (‘Halo’ effect) */ rim: {
        color: "#FFD700",
        intensity: 4.0,
        position: [
            -4,
            6,
            -8
        ]
    }
};
const PANEL_SPRING = {
    stiffness: 280,
    damping: 18,
    mass: 1.0
};
const GALLERY_COUNT = 32;
const ERA_MIN = 2000;
const ERA_MAX = 2026;
const LOD_CULL_RADIUS = 14;
const FRAME_MATERIAL = {
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.gold),
    emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.goldDim),
    emissiveIntensity: {
        idle: 1.0,
        hover: 1.8
    },
    metalness: 1.0,
    roughness: 0.1
};
const MEMORY_RECALL = {
    /** How fast the core reacts to hover (exponential lerp rate) */ lerpRate: 0.005
};
const FOG = {
    innerParticles: {
        radius: 8,
        depth: 3,
        count: 400,
        factor: 0.8,
        speed: 0.15
    },
    outerParticles: {
        radius: 16,
        depth: 5,
        count: 600,
        factor: 1.5,
        speed: 0.08
    },
    mistSphere: {
        radius: 7,
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE.goldDim),
        opacity: 0.025
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/LegacyPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegacyPlanetVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * LegacyPlanet — The Golden Era Monument
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. TROPHY GOLD CORE: MeshPhysicalMaterial imported from skins.ts.
 *    metalness:1 + clearcoat:1 + signed basketball textures (albedo + emissiveMap).
 *    Signature pulses emissive at 0.5Hz in sync with the God Rays.
 *
 * 2. STAIRWAY TO GLORY: Career assets arranged in a spiral that physically
 *    ascends the Y-axis — the "Ladder of Success". Earlier years at the base,
 *    peak years at the summit. Each frame orbits in a helix formation.
 *
 * 3. 3-POINT CINEMATIC LIGHTING: Warm Key (#FFD700), Neutral Fill, Golden Rim.
 *    All values imported from skins.ts LIGHTING config. VSM soft shadows.
 *
 * 4. GOD RAYS: Dual cone geometry (inner/outer) with AdditiveBlending.
 *    Pulsing at 0.5Hz, synced with the signature glow.
 *
 * 5. MEMORY RECALL: On trophy hover, core emissiveIntensity spikes to
 *    SIGNATURE_GLOW.hoverSpike, then decays back via exponential lerp.
 *
 * 6. SPRING PHYSICS: stiffness:280, damping:18 via useFrame lerps for
 *    trophy frame hover scale — heavy, premium feel. Zero GSAP.
 *
 * 7. LOD CULLING: Pre-allocated _tempVec. Per-node distance check in
 *    useFrame. Zero allocations per frame.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Stars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/resolvers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/LegacyPlanet/skins.ts [app-client] (ecmascript)");
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
// ─── Pre-allocated — ZERO allocations in useFrame ─────────────────────────────
const _tempVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
/** Tags for Hall of Champions manifest query */ const CHAMPION_TAGS = [
    "award",
    "trophy",
    "champion",
    "mvp",
    "shooting"
];
const CHAMPION_YEARS = [
    "2015",
    "2017"
];
const LEGACY_FALLBACK_TOKENS = [
    "legacy/trophy_room",
    "legacy/national_pride",
    "legacy/basketball_career"
];
// ─── Manifest hook ────────────────────────────────────────────────────────────
function useLegacyAssets(activeYear) {
    _s();
    const [allAssets, setAllAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredAssets, setFilteredAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Fetch manifest once on mount — tag-based query
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLegacyAssets.useEffect": ()=>{
            let cancelled = false;
            ({
                "useLegacyAssets.useEffect": async ()=>{
                    try {
                        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MANIFEST_URL"]);
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const manifest = await res.json();
                        if (cancelled) return;
                        // Primary: tag-based search (award, trophy, champion, mvp, shooting) + years 2015/2017
                        let heroAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifestByTags"])(manifest, CHAMPION_TAGS, CHAMPION_YEARS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY_COUNT"]);
                        // Fallback: if tag search yields few results, supplement with path-based
                        if (heroAssets.length < 12) {
                            const extra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$resolvers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterManifestByYear"])(manifest, LEGACY_FALLBACK_TOKENS, [
                                "2015",
                                "2016",
                                "2017"
                            ], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY_COUNT"] - heroAssets.length);
                            const existingIds = new Set(heroAssets.map({
                                "useLegacyAssets.useEffect": (a)=>a.id
                            }["useLegacyAssets.useEffect"]));
                            heroAssets.push(...extra.filter({
                                "useLegacyAssets.useEffect": (a)=>!existingIds.has(a.id)
                            }["useLegacyAssets.useEffect"]));
                        }
                        setAllAssets(heroAssets);
                        setFilteredAssets(heroAssets);
                    } catch (err) {
                        console.warn("[LegacyPlanet] Manifest fetch failed — graceful fallback:", err);
                    }
                }
            })["useLegacyAssets.useEffect"]();
            return ({
                "useLegacyAssets.useEffect": ()=>{
                    cancelled = true;
                }
            })["useLegacyAssets.useEffect"];
        }
    }["useLegacyAssets.useEffect"], []);
    // Re-filter when era slider year changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLegacyAssets.useEffect": ()=>{
            if (allAssets.length === 0) return;
            const targetYears = [
                String(activeYear - 1),
                String(activeYear),
                String(activeYear + 1)
            ];
            const yearFiltered = allAssets.filter({
                "useLegacyAssets.useEffect.yearFiltered": (a)=>targetYears.includes(a.year)
            }["useLegacyAssets.useEffect.yearFiltered"]);
            setFilteredAssets(yearFiltered.length >= 4 ? yearFiltered : allAssets);
        }
    }["useLegacyAssets.useEffect"], [
        activeYear,
        allAssets
    ]);
    return filteredAssets;
}
_s(useLegacyAssets, "F4T2MV2+sOMhJCIBga4loyMrw6A=");
// ─── Signed Trophy Core — MeshPhysicalMaterial from skins.ts ──────────────────
function LegacyGoldCore({ onClick, isHovered }) {
    _s1();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load basketball albedo + signature emissiveMap (graceful fallback if missing)
    let albedoMap = null;
    let signatureMap = null;
    try {
        // useTexture will suspend while loading — Suspense boundary catches this
        const textures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])({
            map: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].albedo,
            emissiveMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXTURES"].signature
        });
        albedoMap = textures.map;
        signatureMap = textures.emissiveMap;
    } catch  {
    // Textures not found — fall back to pure material colours (still looks great)
    }
    // Track current emissive for smooth lerp (Memory Recall effect)
    const currentEmissive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIGNATURE_GLOW"].idle);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LegacyGoldCore.useFrame": ({ clock }, delta)=>{
            const t = clock.elapsedTime;
            // Shell slow rotation — majestic trophy spin
            if (shellRef.current) shellRef.current.rotation.y = t * 0.025;
            // Signature breathing pulse at 0.5Hz synced with God Rays
            const breathe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].breatheBase + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].breatheAmplitude * Math.sin(t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIGNATURE_GLOW"].frequency);
            const targetEmissive = isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIGNATURE_GLOW"].hoverSpike : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIGNATURE_GLOW"].idle + breathe * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIGNATURE_GLOW"].amplitude;
            // Smooth exponential lerp — no snapping
            const lerpFactor = 1 - Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEMORY_RECALL"].lerpRate, delta);
            currentEmissive.current += (targetEmissive - currentEmissive.current) * lerpFactor;
            // Apply to shell material
            if (shellRef.current) {
                shellRef.current.material.emissiveIntensity = currentEmissive.current;
            }
            // Inner core also reacts to hover
            if (coreRef.current) {
                const coreTarget = isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissiveIntensity * 2.0 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissiveIntensity;
                const mat = coreRef.current.material;
                mat.emissiveIntensity += (coreTarget - mat.emissiveIntensity) * lerpFactor;
            }
            // Aura light intensity follows the pulse
            if (auraRef.current) {
                const auraTarget = isHovered ? 14 : 8;
                auraRef.current.intensity += (auraTarget - auraRef.current.intensity) * lerpFactor;
            }
        }
    }["LegacyGoldCore.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: shellRef,
                args: [
                    1.0,
                    128,
                    128
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].emissiveIntensity,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].metalness,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].roughness,
                    clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoat,
                    clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].clearcoatRoughness,
                    envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].envMapIntensity,
                    reflectivity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELL_MATERIAL"].reflectivity,
                    ...albedoMap ? {
                        map: albedoMap,
                        roughnessMap: albedoMap
                    } : {},
                    ...signatureMap ? {
                        emissiveMap: signatureMap
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: coreRef,
                args: [
                    0.65,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].color,
                    emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissive,
                    emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].emissiveIntensity,
                    metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].metalness,
                    roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].roughness,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_MATERIAL"].opacity
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: auraRef,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                intensity: 8,
                distance: 12,
                decay: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
                intensity: 4,
                distance: 6,
                decay: 2,
                position: [
                    0,
                    2,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s1(LegacyGoldCore, "LuOaJwpgOft2ExUVxbARK99sP48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = LegacyGoldCore;
// ─── God Ray / Light Shaft — skins.ts driven ─────────────────────────────────
function GodRayShaft() {
    _s2();
    const matOuterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GodRayShaft.useFrame": ({ clock })=>{
            const breath = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].breatheBase + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].breatheAmplitude * Math.sin(clock.elapsedTime * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].pulseHz);
            if (matOuterRef.current) matOuterRef.current.opacity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].outerOpacity * breath;
            if (matInnerRef.current) matInnerRef.current.opacity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].innerOpacity * breath;
        }
    }["GodRayShaft.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            8,
            0
        ],
        rotation: [
            Math.PI,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].outerRadius,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].outerHeight,
                            16,
                            1,
                            true
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        ref: matOuterRef,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                        transparent: true,
                        opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].outerOpacity,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].innerRadius,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].innerHeight,
                            16,
                            1,
                            true
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        ref: matInnerRef,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                        transparent: true,
                        opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].innerOpacity,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].spotIntensity,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].spotDistance,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].spotAngle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GOD_RAY"].spotPenumbra,
                decay: 1,
                position: [
                    0,
                    1,
                    0
                ],
                "target-position": [
                    0,
                    -14,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_s2(GodRayShaft, "r1NSzFKQk2X6Xu3uPCN7x6mgoO8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = GodRayShaft;
// ─── 3-Point Cinematic Lighting Rig — skins.ts driven ────────────────────────
function LegacyLightingRig() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.position,
                angle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.angle,
                penumbra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.penumbra,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.decay,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].key.distance,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-bias": -0.0001,
                "shadow-normalBias": 0.02
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.position,
                distance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.distance,
                decay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].fill.decay
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.color,
                intensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.intensity,
                position: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].rim.position
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = LegacyLightingRig;
function SpiralFrame({ asset, position, groupRef, onClick, onHoverChange }) {
    _s3();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.0);
    // Face outward from the spiral axis (Y)
    const yAngle = Math.atan2(position[0], position[2]);
    // Spring physics hover scale — stiffness:280, damping:18, useFrame lerp
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SpiralFrame.useFrame": (_, delta)=>{
            const target = hovered ? 1.18 : 1.0;
            const springForce = (target - currentScale.current) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness * 0.001;
            const dampingForce = -__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping * 0.01 * (currentScale.current - 1.0);
            currentScale.current += (springForce + dampingForce) * Math.min(delta, 0.033);
            currentScale.current = Math.max(0.8, Math.min(1.3, currentScale.current));
            if (meshRef.current) {
                meshRef.current.scale.setScalar(currentScale.current);
            }
        }
    }["SpiralFrame.useFrame"]);
    const handlePointerOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpiralFrame.useCallback[handlePointerOver]": (e)=>{
            e.stopPropagation?.();
            setHovered(true);
            onHoverChange(true);
            document.body.style.cursor = "pointer";
        }
    }["SpiralFrame.useCallback[handlePointerOver]"], [
        onHoverChange
    ]);
    const handlePointerOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpiralFrame.useCallback[handlePointerOut]": ()=>{
            setHovered(false);
            onHoverChange(false);
            document.body.style.cursor = "auto";
        }
    }["SpiralFrame.useCallback[handlePointerOut]"], [
        onHoverChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: (node)=>{
            if (groupRef && typeof groupRef === "object") groupRef.current = node;
            meshRef.current = node;
        },
        position: position,
        rotation: [
            0,
            -yAngle + Math.PI,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            0.38,
                            0.025,
                            16,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].color,
                        emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissive,
                        emissiveIntensity: hovered ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissiveIntensity.hover : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissiveIntensity.idle,
                        metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].metalness,
                        roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].roughness
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                url: asset.url,
                scale: 0.62,
                transparent: true,
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick(asset);
                },
                onPointerOver: handlePointerOver,
                onPointerOut: handlePointerOut
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 389,
                columnNumber: 7
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
                            0.42,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                        transparent: true,
                        opacity: hovered ? 0.18 : 0.06,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                        depthWrite: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 399,
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
                        background: "rgba(26,26,26,0.92)",
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold}50`,
                        borderRadius: 8,
                        padding: "6px 12px",
                        whiteSpace: "nowrap",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                                fontSize: 11,
                                fontWeight: 700,
                                margin: 0
                            },
                            children: asset.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
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
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 413,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_s3(SpiralFrame, "5TO4ei5vqRHTlHymmOAvdihHuCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = SpiralFrame;
/**
 * Stairway to Glory: assets arranged in a spiral helix that physically
 * ASCENDS the Y-axis. Earlier career moments at the base, peak achievements
 * at the summit. Each frame orbits in a helix with SPIRAL config from skins.ts.
 */ function HallOfChampions({ assets, onSelectAsset, onAnyHover }) {
    _s4();
    const count = assets.length;
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    if (nodeRefs.current.length !== count) {
        nodeRefs.current = Array.from({
            length: count
        }, ()=>({
                current: null
            }));
    }
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const spiralRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Bake Stairway to Glory spiral positions — ascending Y-axis
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HallOfChampions.useMemo[positions]": ()=>{
            const pts = [];
            const halfHeight = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].height / 2;
            for(let i = 0; i < Math.max(count, 12); i++){
                const t = i / Math.max(count - 1, 1); // 0→1
                const angle = t * Math.PI * 2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].turns;
                // Stairway to Glory: Y physically ascends from base to summit
                const y = -halfHeight + t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].height + t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].stairwayRise;
                // Organic radius variation for gravitational feel
                const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].baseRadius + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].radiusVariation * Math.sin(angle * 1.5);
                pts.push([
                    Math.cos(angle) * r,
                    y,
                    Math.sin(angle) * r
                ]);
            }
            return pts;
        }
    }["HallOfChampions.useMemo[positions]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "HallOfChampions.useFrame": ({ clock })=>{
            // Stately trophy-case rotation
            if (spiralRef.current) spiralRef.current.rotation.y = clock.elapsedTime * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPIRAL"].rotationSpeed;
            // Per-node LOD — zero allocations
            nodeRefs.current.forEach({
                "HallOfChampions.useFrame": (ref)=>{
                    const g = ref.current;
                    if (!g) return;
                    _tempVec.setFromMatrixPosition(g.matrixWorld);
                    g.visible = _tempVec.distanceTo(camera.position) < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOD_CULL_RADIUS"];
                }
            }["HallOfChampions.useFrame"]);
        }
    }["HallOfChampions.useFrame"]);
    if (count === 0) {
        // Placeholder golden torus frames while manifest loads
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: spiralRef,
            children: positions.slice(0, 12).map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                            args: [
                                0.38,
                                0.025,
                                16,
                                64
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].color,
                            emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissive,
                            emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].emissiveIntensity.idle,
                            metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].metalness,
                            roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_MATERIAL"].roughness
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
            lineNumber: 488,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: spiralRef,
        children: assets.map((asset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpiralFrame, {
                asset: asset,
                position: positions[i] ?? [
                    0,
                    0,
                    0
                ],
                lookAtCenter: true,
                groupRef: nodeRefs.current[i],
                onClick: onSelectAsset,
                onHoverChange: onAnyHover
            }, asset.id, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 508,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
_s4(HallOfChampions, "//fWo0sBmb5VG25UMPVtKjfr//U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = HallOfChampions;
function EraSlider({ year, onYearChange }) {
    _s5();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pct = (year - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"]) / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"] - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"]) * 100;
    const handleTrackClick = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const rawPct = (e.clientY - rect.top) / rect.height;
        const newYear = Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"] + rawPct * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"] - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"]));
        onYearChange(Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"], Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"], newYear)));
    };
    const handleDrag = (e)=>{
        if (e.buttons !== 1) return;
        const rect = sliderRef.current?.getBoundingClientRect();
        if (!rect) return;
        const rawPct = (e.clientY - rect.top) / rect.height;
        const newYear = Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"] + rawPct * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"] - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"]));
        onYearChange(Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"], Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"], newYear)));
    };
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
                right: "max(24px, env(safe-area-inset-right, 16px))",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "auto",
                zIndex: 300
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                        fontSize: 22,
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        textAlign: "center",
                        marginBottom: 12,
                        textShadow: `0 0 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright}80`
                    },
                    children: year
                }, year, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sliderRef,
                    onClick: handleTrackClick,
                    onMouseMove: handleDrag,
                    style: {
                        width: 4,
                        height: 200,
                        background: "rgba(212,168,67,0.2)",
                        borderRadius: 8,
                        position: "relative",
                        cursor: "pointer",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: `${pct}%`,
                                background: `linear-gradient(to bottom, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold})`,
                                borderRadius: 8
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: "50%",
                                top: `${pct}%`,
                                transform: "translate(-50%, -50%)",
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                                boxShadow: `0 0 12px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright}`,
                                border: "2px solid #fff"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: -18,
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
                                fontSize: 9,
                                opacity: 0.6,
                                whiteSpace: "nowrap"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MIN"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                bottom: -18,
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
                                fontSize: 9,
                                opacity: 0.6,
                                whiteSpace: "nowrap"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_MAX"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 571,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        textAlign: "center",
                        marginTop: 24,
                        opacity: 0.5
                    },
                    children: "Era"
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 594,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
            lineNumber: 551,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
_s5(EraSlider, "wjKMYkN3mXB32DfSYznkohhJ8nw=");
_c5 = EraSlider;
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
                    type: "spring",
                    stiffness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].stiffness,
                    damping: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].damping,
                    mass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_SPRING"].mass
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
                    background: `linear-gradient(145deg, rgba(26,20,10,0.92) 0%, rgba(12,8,2,0.96) 100%)`,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold}40`,
                    boxShadow: `0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold}20, inset 0 0 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldDim}10`,
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
                            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                            lineNumber: 641,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 639,
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
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].goldBright,
                                    fontSize: 9,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    marginBottom: 6,
                                    opacity: 0.7
                                },
                                children: [
                                    "Legacy · ",
                                    asset.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                                lineNumber: 646,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: "#f5f0e0",
                                    fontSize: 15,
                                    fontWeight: 800,
                                    lineHeight: 1.35,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 8
                                },
                                children: asset.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                                lineNumber: 649,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold,
                                    fontSize: 12,
                                    opacity: 0.7,
                                    fontWeight: 500
                                },
                                children: asset.location
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                                lineNumber: 652,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 645,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            color: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PALETTE"].gold}60`,
                            fontSize: 22,
                            cursor: "pointer",
                            padding: "0.75rem 1rem",
                            alignSelf: "flex-start"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 658,
                        columnNumber: 13
                    }, this)
                ]
            }, asset.id, true, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 613,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
            lineNumber: 611,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
_c6 = AssetDetailPanel;
// ─── Volumetric fog particle shell — skins.ts driven ─────────────────────────
function VolumeFog() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.factor,
                saturation: 0.6,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].innerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stars"], {
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.depth,
                count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.count,
                factor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.factor,
                saturation: 0.3,
                fade: true,
                speed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].outerParticles.speed
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.radius,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.color,
                    transparent: true,
                    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOG"].mistSphere.opacity,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 682,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 681,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c7 = VolumeFog;
function LegacyPlanetVisual() {
    _s6();
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2016);
    const [selectedAsset, setSelectedAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDetail, setShowDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSlider, setShowSlider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTrophyHovered, setIsTrophyHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const galleryAssets = useLegacyAssets(activeYear);
    const handleCoreClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacyPlanetVisual.useCallback[handleCoreClick]": ()=>{
            setShowSlider({
                "LegacyPlanetVisual.useCallback[handleCoreClick]": (v)=>!v
            }["LegacyPlanetVisual.useCallback[handleCoreClick]"]);
        }
    }["LegacyPlanetVisual.useCallback[handleCoreClick]"], []);
    const handleAssetSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacyPlanetVisual.useCallback[handleAssetSelect]": (asset)=>{
            setSelectedAsset(asset);
            setShowDetail(true);
        }
    }["LegacyPlanetVisual.useCallback[handleAssetSelect]"], []);
    const handleCloseDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacyPlanetVisual.useCallback[handleCloseDetail]": ()=>{
            setShowDetail(false);
            setSelectedAsset(null);
        }
    }["LegacyPlanetVisual.useCallback[handleCloseDetail]"], []);
    const handleTrophyHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LegacyPlanetVisual.useCallback[handleTrophyHover]": (hovered)=>{
            setIsTrophyHovered(hovered);
        }
    }["LegacyPlanetVisual.useCallback[handleTrophyHover]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environment,
                background: false,
                environmentIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGHTING"].environmentIntensity
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegacyLightingRig, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeFog, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GodRayShaft, {}, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegacyGoldCore, {
                    onClick: handleCoreClick,
                    isHovered: isTrophyHovered
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 738,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HallOfChampions, {
                        assets: galleryAssets,
                        onSelectAsset: handleAssetSelect,
                        onAnyHover: handleTrophyHover
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                        lineNumber: 744,
                        columnNumber: 11
                    }, this)
                }, activeYear, false, {
                    fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                    lineNumber: 743,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this),
            showSlider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EraSlider, {
                year: activeYear,
                onYearChange: setActiveYear
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 749,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssetDetailPanel, {
                asset: selectedAsset,
                visible: showDetail,
                onClose: handleCloseDetail
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/LegacyPlanet/index.tsx",
        lineNumber: 725,
        columnNumber: 5
    }, this);
}
_s6(LegacyPlanetVisual, "OfHJ7XVwXhjufPlEm258WkhqC+E=", false, function() {
    return [
        useLegacyAssets
    ];
});
_c8 = LegacyPlanetVisual;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "LegacyGoldCore");
__turbopack_context__.k.register(_c1, "GodRayShaft");
__turbopack_context__.k.register(_c2, "LegacyLightingRig");
__turbopack_context__.k.register(_c3, "SpiralFrame");
__turbopack_context__.k.register(_c4, "HallOfChampions");
__turbopack_context__.k.register(_c5, "EraSlider");
__turbopack_context__.k.register(_c6, "AssetDetailPanel");
__turbopack_context__.k.register(_c7, "VolumeFog");
__turbopack_context__.k.register(_c8, "LegacyPlanetVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/systems/TheSolarSystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TheSolarSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$core$2f$SunCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/core/SunCore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$BasePlanet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/BasePlanet.tsx [app-client] (ecmascript)");
// 👈 استدعاء العقل المدبر للحالة من المحرك
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
// 👈 استدعاء قاعدة البيانات المركزية للبيانات
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-client] (ecmascript)");
// 👈 1. استيراد الأشكال البصرية المستقلة (إشارة قاطعة للمجلدات الجديدة)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/IdentityPlanet/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/LegacyPlanet/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// 🚀 Dynamic import for VisionPlanet — heaviest 3D component (DNAHelix + HUD)
// Code-split to keep initial bundle lean
const VisionPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/VisionPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c = VisionPlanetVisualLazy;
// 🚀 Dynamic imports for remaining built planets — lazy-loaded for bundle optimization
const OdysseyPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/OdysseyPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c1 = OdysseyPlanetVisualLazy;
const VenturesPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/VenturesPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c2 = VenturesPlanetVisualLazy;
const VoicePlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/VoicePlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c3 = VoicePlanetVisualLazy;
const VideogramPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/VideogramPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c4 = VideogramPlanetVisualLazy;
const LibraryPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/LibraryPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c5 = LibraryPlanetVisualLazy;
const ContactPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/ContactPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c6 = ContactPlanetVisualLazy;
const ShieldPlanetVisualLazy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/3d/planets/ShieldPlanet/index.tsx [app-client] (ecmascript, async loader)"));
_c7 = ShieldPlanetVisualLazy;
function TheSolarSystem({ onPlanetFocus }) {
    _s();
    const resetExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "TheSolarSystem.useExperience[resetExperience]": (state)=>state.resetExperience
    }["TheSolarSystem.useExperience[resetExperience]"]);
    // 🧠 جلب بيانات المجرة من الـ Config (تطبيق مبدأ Data Isolation)
    const planets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TheSolarSystem.useMemo[planets]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlanetsArray"])()
    }["TheSolarSystem.useMemo[planets]"], []);
    // 👈 2. قاموس الأشكال: ربط الـ ID بالتصميم البصري المحدد
    const PlanetVisuals = {
        identity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$IdentityPlanet$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 42,
            columnNumber: 15
        }, this),
        legacy: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$LegacyPlanet$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this),
        vision: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisionPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this),
        odyssey: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OdysseyPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this),
        ventures: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VenturesPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this),
        voice: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VoicePlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this),
        videogram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideogramPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this),
        library: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LibraryPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this),
        contact: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this),
        shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldPlanetVisualLazy, {}, void 0, false, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$core$2f$SunCore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onPlanetFocus(null);
                            resetExperience(); // تصفير الحالة لضمان سلاسة حركة الكاميرا
                        },
                        onPointerOver: ()=>document.body.style.cursor = "pointer",
                        onPointerOut: ()=>document.body.style.cursor = "auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    16,
                                    32,
                                    32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                transparent: true,
                                opacity: 0,
                                depthWrite: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            planets.map((planet)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            rotation: [
                                -Math.PI / 2,
                                0,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                                    args: [
                                        planet.orbitRadius - 0.05,
                                        planet.orbitRadius + 0.05,
                                        128
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                    color: "#ffffff",
                                    transparent: true,
                                    opacity: 0.06,
                                    side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$BasePlanet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: planet.id,
                            name: planet.name,
                            color: planet.themeColor,
                            orbitRadius: planet.orbitRadius,
                            size: planet.baseSize,
                            orbitSpeed: planet.orbitSpeed,
                            onPlanetFocus: onPlanetFocus,
                            children: PlanetVisuals[planet.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                scale: [
                                    planet.baseSize,
                                    planet.baseSize,
                                    planet.baseSize
                                ],
                                children: PlanetVisuals[planet.id]
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, planet.id, true, {
                    fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/systems/TheSolarSystem.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(TheSolarSystem, "8S3Ph3gmpHxzzszmfpVVzih0Vmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"]
    ];
});
_c8 = TheSolarSystem;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "VisionPlanetVisualLazy");
__turbopack_context__.k.register(_c1, "OdysseyPlanetVisualLazy");
__turbopack_context__.k.register(_c2, "VenturesPlanetVisualLazy");
__turbopack_context__.k.register(_c3, "VoicePlanetVisualLazy");
__turbopack_context__.k.register(_c4, "VideogramPlanetVisualLazy");
__turbopack_context__.k.register(_c5, "LibraryPlanetVisualLazy");
__turbopack_context__.k.register(_c6, "ContactPlanetVisualLazy");
__turbopack_context__.k.register(_c7, "ShieldPlanetVisualLazy");
__turbopack_context__.k.register(_c8, "TheSolarSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/core/CinematicCameraController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicCameraController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CinematicCameraController({ focusTarget }) {
    _s();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "CinematicCameraController.useExperience[mode]": (state)=>state.mode
    }["CinematicCameraController.useExperience[mode]"]);
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "CinematicCameraController.useDeviceStore[tier]": (state)=>state.tier
    }["CinematicCameraController.useDeviceStore[tier]"]);
    const { camera, controls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [isReducedMotion, setIsReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 📍 Pre-allocated vectors (reused every frame, no GC pressure)
    const defaultCameraPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 80, 160));
    const currentLookAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    const parallaxTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    const idealCameraPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
    const isReturning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicCameraController.useEffect": ()=>{
            const query = window.matchMedia("(prefers-reduced-motion: reduce)");
            const sync = {
                "CinematicCameraController.useEffect.sync": ()=>setIsReducedMotion(query.matches)
            }["CinematicCameraController.useEffect.sync"];
            sync();
            query.addEventListener("change", sync);
            return ({
                "CinematicCameraController.useEffect": ()=>query.removeEventListener("change", sync)
            })["CinematicCameraController.useEffect"];
        }
    }["CinematicCameraController.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CinematicCameraController.useFrame": (state, delta)=>{
            if (!controls) return;
            const orbit = controls;
            const cam = camera;
            const motionBudget = tier === "mobile" ? {
                parallax: 8,
                hoverX: 0.55,
                hoverY: 0.35,
                baseSmooth: 0.00045
            } : tier === "tablet" ? {
                parallax: 11,
                hoverX: 0.8,
                hoverY: 0.55,
                baseSmooth: 0.0003
            } : {
                parallax: 15,
                hoverX: 1.2,
                hoverY: 0.8,
                baseSmooth: 0.0001
            };
            // 🧠 Frame-rate independent lerp
            const smoothFactor = 1 - Math.pow(motionBudget.baseSmooth, delta);
            const t = state.clock.getElapsedTime();
            // ==========================================
            // 🌌 Mode: FREE (God View & Parallax)
            // ==========================================
            if (mode === "free" || !focusTarget) {
                orbit.enabled = true;
                // Safe return to center
                if (isReturning.current) {
                    cam.position.lerp(defaultCameraPos.current, smoothFactor);
                    if (cam.position.distanceTo(defaultCameraPos.current) < 5) {
                        isReturning.current = false;
                    }
                }
                // Parallax effect (mutate pre-allocated vector)
                parallaxTarget.current.set(state.pointer.x * motionBudget.parallax, state.pointer.y * motionBudget.parallax, 0);
                currentLookAt.current.lerp(parallaxTarget.current, smoothFactor * 0.2);
                orbit.target.copy(currentLookAt.current);
                // Return FOV to home
                const targetFov = 40;
                const nextFov = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(cam.fov, targetFov, smoothFactor);
                if (Math.abs(nextFov - cam.fov) > 0.01) {
                    cam.fov = nextFov;
                    cam.updateProjectionMatrix();
                }
            } else {
                orbit.enabled = false;
                isReturning.current = true;
                // Calculate ideal camera position (mutate pre-allocated vector)
                idealCameraPosition.current.set(focusTarget.x, focusTarget.y + 2, focusTarget.z + 18);
                // Drone hover effect for isolation/enter states
                if ((mode === "isolation" || mode === "enter") && !isReducedMotion) {
                    idealCameraPosition.current.x += Math.sin(t * 0.8) * motionBudget.hoverX;
                    idealCameraPosition.current.y += Math.cos(t * 0.5) * motionBudget.hoverY;
                    const nextFov = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(cam.fov, 28, smoothFactor);
                    if (Math.abs(nextFov - cam.fov) > 0.01) {
                        cam.fov = nextFov;
                        cam.updateProjectionMatrix();
                    }
                } else if (mode === "approach") {
                    const targetFov = isReducedMotion ? 52 : 65;
                    const nextFov = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(cam.fov, targetFov, smoothFactor);
                    if (Math.abs(nextFov - cam.fov) > 0.01) {
                        cam.fov = nextFov;
                        cam.updateProjectionMatrix();
                    }
                } else if (mode === "isolation" || mode === "enter") {
                    // Reduced-motion path: preserve focus without micro-hover drift
                    const nextFov = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(cam.fov, 28, smoothFactor);
                    if (Math.abs(nextFov - cam.fov) > 0.01) {
                        cam.fov = nextFov;
                        cam.updateProjectionMatrix();
                    }
                }
                // Apply smooth camera interpolation using pre-allocated vectors
                cam.position.lerp(idealCameraPosition.current, smoothFactor);
                currentLookAt.current.lerp(focusTarget, smoothFactor);
                orbit.target.copy(currentLookAt.current);
            }
            // 🔄 تحديث محرك التحكم في النهاية لضمان عدم وجود اهتزازات
            orbit.update();
        }
    }["CinematicCameraController.useFrame"]);
    return null;
}
_s(CinematicCameraController, "yGIjXn1Kqx3Um5JcibmYgdVFfhE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CinematicCameraController;
var _c;
__turbopack_context__.k.register(_c, "CinematicCameraController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/videogramConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// videogramConfig.ts
// Placeholder config for Videogram planet video integration
__turbopack_context__.s([
    "VIDEOGRAM_VIDEO_CONFIG",
    ()=>VIDEOGRAM_VIDEO_CONFIG
]);
const VIDEOGRAM_VIDEO_CONFIG = {
    youtubeId: "dQw4w9WgXcQ",
    startSeconds: 42,
    title: "Sample Professional Video",
    description: "This is a placeholder for the Videogram planet video."
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
"[project]/src/components/3d/CinematicMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/dist/react-spring_three.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$videogramConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/videogramConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlanetTextures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
const PLANET_SKINS = [
    {
        name: 'Legacy',
        texture: '/textures/planets/legacy/default/albedo.jpg',
        rimColor: '#ffb347'
    },
    {
        name: 'Ventures',
        texture: '/textures/planets/ventures/marble-gold.jpg',
        rimColor: '#ffe066'
    },
    {
        name: 'Odyssey',
        texture: '/textures/planets/odyssey/diffuse.webp',
        rimColor: '#7fdfff'
    },
    {
        name: 'Vision',
        texture: '/textures/planets/vision/cyan-grid.jpg',
        rimColor: '#00fff7'
    },
    {
        name: 'Voice',
        texture: '/textures/planets/voice/pulsing-sonic-wave.jpg',
        rimColor: '#7d3cff'
    },
    {
        name: 'Videogram',
        texture: '/textures/planets/videogram/film-reel-glitch.jpg',
        rimColor: '#ff00e6'
    },
    {
        name: 'Shield',
        texture: '/textures/planets/shield/hex-chrome.jpg',
        rimColor: '#ffd700'
    },
    {
        name: 'Library',
        texture: '/textures/planets/library/marble-text.jpg',
        rimColor: '#f8f8ff'
    },
    {
        name: 'Contact',
        texture: '/textures/planets/contact/neural-network.jpg',
        rimColor: '#00bfff'
    },
    {
        name: 'Identity',
        texture: '/textures/planets/identity/liquid-fingerprint.jpg',
        rimColor: '#c0c0c0'
    }
];
function StarDrift({ intensity = 1, dip = 0, count = 400 }) {
    _s();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StarDrift.useMemo[stars]": ()=>Array.from({
                length: count
            }, {
                "StarDrift.useMemo[stars]": ()=>[
                        (Math.random() - 0.5) * 400,
                        (Math.random() - 0.5) * 200 + 60,
                        (Math.random() - 0.5) * 400
                    ]
            }["StarDrift.useMemo[stars]"])
    }["StarDrift.useMemo[stars]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "StarDrift.useFrame": ()=>{
            if (group.current) {
                group.current.rotation.y += 0.0007 * intensity;
                group.current.position.y = -dip * 0.1;
            }
        }
    }["StarDrift.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        children: stars.map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    pos[0],
                    pos[1],
                    pos[2]
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.4,
                            4,
                            4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#fff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/3d/CinematicMode.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StarDrift, "kf5KuIyxiz0OwEESTwp0ml+gpYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = StarDrift;
function Meteors({ count = 6, dip = 0 }) {
    _s1();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meteors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Meteors.useMemo[meteors]": ()=>Array.from({
                length: count
            }, {
                "Meteors.useMemo[meteors]": ()=>({
                        x: (Math.random() - 0.5) * 300,
                        y: Math.random() * 120 + 60,
                        z: (Math.random() - 0.5) * 300,
                        speed: Math.random() * 0.7 + 0.3
                    })
            }["Meteors.useMemo[meteors]"])
    }["Meteors.useMemo[meteors]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Meteors.useFrame": (_, delta)=>{
            if (!groupRef.current) return;
            for(let i = 0; i < meteors.length; i++){
                const m = meteors[i];
                m.y -= m.speed * (1 + (dip ?? 0) * 0.01) * delta * 60;
                if (m.y < -60) {
                    m.y = Math.random() * 120 + 60;
                }
                const mesh = groupRef.current.children[i];
                if (mesh) {
                    mesh.position.set(m.x, m.y, m.z);
                }
            }
        }
    }["Meteors.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: meteors.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    m.x,
                    m.y,
                    m.z
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1.2,
                            6,
                            6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffeedd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/3d/CinematicMode.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s1(Meteors, "QDOTE11OxPnAxzOa3ddGeBe0164=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Meteors;
function CinematicMode() {
    _s2();
    // --- State ---
    const cinematicPlanetIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "CinematicMode.useExperience[cinematicPlanetIndex]": (s)=>s.cinematicPlanetIndex
    }["CinematicMode.useExperience[cinematicPlanetIndex]"]);
    const [planetIndex, setPlanetIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cinematicPlanetIndex);
    const planetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dip, setDip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReducedMotion, setIsReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "CinematicMode.useDeviceStore[tier]": (s)=>s.tier
    }["CinematicMode.useDeviceStore[tier]"]);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const setCinematicPlanetIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "CinematicMode.useExperience[setCinematicPlanetIndex]": (s)=>s.setCinematicPlanetIndex
    }["CinematicMode.useExperience[setCinematicPlanetIndex]"]);
    // Live refs to avoid stale closures in event callbacks
    const planetIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(planetIndex);
    planetIndexRef.current = planetIndex;
    const isTransitioningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isTransitioning);
    isTransitioningRef.current = isTransitioning;
    const queuedTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicMode.useEffect": ()=>{
            const query = window.matchMedia('(prefers-reduced-motion: reduce)');
            const sync = {
                "CinematicMode.useEffect.sync": ()=>setIsReducedMotion(query.matches)
            }["CinematicMode.useEffect.sync"];
            sync();
            query.addEventListener('change', sync);
            return ({
                "CinematicMode.useEffect": ()=>query.removeEventListener('change', sync)
            })["CinematicMode.useEffect"];
        }
    }["CinematicMode.useEffect"], []);
    const budget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CinematicMode.useMemo[budget]": ()=>{
            if (tier === 'mobile') {
                return {
                    starCount: 180,
                    meteorCount: 3,
                    planetSegments: 72,
                    atmosphereSegments: 56
                };
            }
            if (tier === 'tablet') {
                return {
                    starCount: 260,
                    meteorCount: 4,
                    planetSegments: 96,
                    atmosphereSegments: 72
                };
            }
            return {
                starCount: 400,
                meteorCount: 7,
                planetSegments: 128,
                atmosphereSegments: 96
            };
        }
    }["CinematicMode.useMemo[budget]"], [
        tier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexturePreload"])(PLANET_SKINS.map({
        "CinematicMode.usePlanetTexturePreload": (item)=>item.texture
    }["CinematicMode.usePlanetTexturePreload"]), {
        colorMode: 'srgb'
    });
    // Reset camera to canonical cinematic horizon position on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicMode.useEffect": ()=>{
            const cam = camera;
            cam.position.set(0, 80, 160);
            cam.up.set(0, 1, 0);
            cam.lookAt(0, 0, 0);
            cam.updateProjectionMatrix();
        }
    }["CinematicMode.useEffect"], [
        camera
    ]);
    // Sync active planet index to store so CinematicHUD can read it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicMode.useEffect": ()=>{
            setCinematicPlanetIndex(planetIndex);
        }
    }["CinematicMode.useEffect"], [
        planetIndex,
        setCinematicPlanetIndex
    ]);
    // --- GSAP Dip & Rise transition (stable — reads from refs) ---
    const transitionToIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicMode.useCallback[transitionToIndex]": (nextIdx)=>{
            if (isTransitioningRef.current) {
                queuedTargetRef.current = nextIdx;
                return;
            }
            if (nextIdx === planetIndexRef.current) return;
            setIsTransitioning(true);
            if (!planetRef.current) {
                setIsTransitioning(false);
                return;
            }
            const dropDuration = isReducedMotion ? 0.2 : 0.72;
            const riseDuration = isReducedMotion ? 0.28 : 1.2;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(planetRef.current.position, {
                y: -130,
                duration: dropDuration,
                ease: isReducedMotion ? 'power2.inOut' : 'power4.in',
                onUpdate: {
                    "CinematicMode.useCallback[transitionToIndex]": ()=>{
                        if (planetRef.current) setDip(planetRef.current.position.y + 130);
                    }
                }["CinematicMode.useCallback[transitionToIndex]"],
                onComplete: {
                    "CinematicMode.useCallback[transitionToIndex]": ()=>{
                        planetIndexRef.current = nextIdx;
                        setPlanetIndex(nextIdx);
                        setShowVideo(false);
                        if (!planetRef.current) {
                            setIsTransitioning(false);
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(planetRef.current.position, {
                            y: -55,
                            duration: riseDuration,
                            ease: isReducedMotion ? 'power2.out' : 'back.out(1.2)',
                            onUpdate: {
                                "CinematicMode.useCallback[transitionToIndex]": ()=>{
                                    if (planetRef.current) setDip(planetRef.current.position.y + 130);
                                }
                            }["CinematicMode.useCallback[transitionToIndex]"],
                            onComplete: {
                                "CinematicMode.useCallback[transitionToIndex]": ()=>{
                                    setIsTransitioning(false);
                                    setDip(0);
                                    const queued = queuedTargetRef.current;
                                    queuedTargetRef.current = null;
                                    if (queued !== null && queued !== planetIndexRef.current) {
                                        transitionToIndex(queued);
                                    }
                                }
                            }["CinematicMode.useCallback[transitionToIndex]"]
                        });
                    }
                }["CinematicMode.useCallback[transitionToIndex]"]
            });
        }
    }["CinematicMode.useCallback[transitionToIndex]"], [
        isReducedMotion
    ]);
    const changePlanet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicMode.useCallback[changePlanet]": (dir = 1)=>{
            const nextIdx = (planetIndexRef.current + dir + PLANET_SKINS.length) % PLANET_SKINS.length;
            transitionToIndex(nextIdx);
        }
    }["CinematicMode.useCallback[changePlanet]"], [
        transitionToIndex
    ]);
    const jumpToPlanet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CinematicMode.useCallback[jumpToPlanet]": (targetIndex)=>{
            if (targetIndex < 0 || targetIndex >= PLANET_SKINS.length) return;
            transitionToIndex(targetIndex);
        }
    }["CinematicMode.useCallback[jumpToPlanet]"], [
        transitionToIndex
    ]);
    // --- NAVIGATION: keyboard, wheel (debounced), swipe (window-level), HUD custom event ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicMode.useEffect": ()=>{
            let lastWheelTime = 0;
            const touchStart = {
                x: 0
            };
            const handleKey = {
                "CinematicMode.useEffect.handleKey": (e)=>{
                    if (showVideo) return;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePlanet(1);
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changePlanet(-1);
                }
            }["CinematicMode.useEffect.handleKey"];
            const handleWheel = {
                "CinematicMode.useEffect.handleWheel": (e)=>{
                    if (showVideo) return;
                    const now = Date.now();
                    if (now - lastWheelTime < 500) return;
                    const dominantDelta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
                    if (Math.abs(dominantDelta) > 20) {
                        lastWheelTime = now;
                        changePlanet(dominantDelta > 0 ? 1 : -1);
                    }
                }
            }["CinematicMode.useEffect.handleWheel"];
            const handleTouchStart = {
                "CinematicMode.useEffect.handleTouchStart": (e)=>{
                    touchStart.x = e.touches[0].clientX;
                }
            }["CinematicMode.useEffect.handleTouchStart"];
            const handleTouchEnd = {
                "CinematicMode.useEffect.handleTouchEnd": (e)=>{
                    if (showVideo) return;
                    const dx = e.changedTouches[0].clientX - touchStart.x;
                    const threshold = Math.max(32, Math.round(window.innerWidth * 0.05));
                    if (Math.abs(dx) > threshold) changePlanet(dx < 0 ? 1 : -1);
                }
            }["CinematicMode.useEffect.handleTouchEnd"];
            // Listen for navigation signals dispatched by CinematicHUD controls
            const handleNavigate = {
                "CinematicMode.useEffect.handleNavigate": (e)=>{
                    if (showVideo) return;
                    const dir = e.detail?.dir;
                    if (dir === 1 || dir === -1) changePlanet(dir);
                }
            }["CinematicMode.useEffect.handleNavigate"];
            const handleJump = {
                "CinematicMode.useEffect.handleJump": (e)=>{
                    if (showVideo) return;
                    const targetIndex = e.detail?.targetIndex;
                    if (typeof targetIndex === 'number') jumpToPlanet(targetIndex);
                }
            }["CinematicMode.useEffect.handleJump"];
            window.addEventListener('keydown', handleKey);
            window.addEventListener('wheel', handleWheel, {
                passive: true
            });
            window.addEventListener('touchstart', handleTouchStart, {
                passive: true
            });
            window.addEventListener('touchend', handleTouchEnd, {
                passive: true
            });
            window.addEventListener('cinematic-navigate', handleNavigate);
            window.addEventListener('cinematic-jump', handleJump);
            return ({
                "CinematicMode.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKey);
                    window.removeEventListener('wheel', handleWheel);
                    window.removeEventListener('touchstart', handleTouchStart);
                    window.removeEventListener('touchend', handleTouchEnd);
                    window.removeEventListener('cinematic-navigate', handleNavigate);
                    window.removeEventListener('cinematic-jump', handleJump);
                }
            })["CinematicMode.useEffect"];
        }
    }["CinematicMode.useEffect"], [
        changePlanet,
        jumpToPlanet,
        showVideo
    ]);
    // --- Active planet data ---
    const planet = PLANET_SKINS[planetIndex];
    const isVideogram = planet.name.toLowerCase() === 'videogram';
    const isOdyssey = planet.name.toLowerCase() === 'odyssey';
    const activeTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexture"])(planet.texture, {
        colorMode: 'srgb'
    });
    const odysseyAtmosphereMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CinematicMode.useMemo[odysseyAtmosphereMaterial]": ()=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                transparent: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                uniforms: {
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#72a8ff')
                    },
                    uIntensity: {
                        value: 0.95
                    },
                    uPower: {
                        value: 2.8
                    },
                    uLightDir: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.3, 1).normalize()
                    }
                },
                vertexShader: `
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
                fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        uniform float uPower;
        uniform vec3 uLightDir;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec3 N = normalize(vWorldNormal);
          vec3 V = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - max(dot(N, V), 0.0), uPower);
          float lightWrap = 0.35 + 0.65 * max(dot(N, normalize(uLightDir)), 0.0);
          float alpha = fresnel * uIntensity * lightWrap;
          gl_FragColor = vec4(uColor, alpha);
        }
      `
            });
        }
    }["CinematicMode.useMemo[odysseyAtmosphereMaterial]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarDrift, {
                intensity: 1.1,
                dip: dip,
                count: budget.starCount
            }, void 0, false, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meteors, {
                count: budget.meteorCount,
                dip: dip
            }, void 0, false, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                position: [
                    0,
                    -120,
                    40
                ],
                angle: 1.2,
                penumbra: 0.7,
                intensity: 2.2,
                color: planet.rimColor,
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$dist$2f$react$2d$spring_three$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].mesh, {
                ref: planetRef,
                position: [
                    0,
                    -55,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            65,
                            budget.planetSegments,
                            budget.planetSegments
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        map: activeTexture ?? undefined,
                        color: activeTexture ? '#ffffff' : '#17263f',
                        emissive: planet.rimColor,
                        emissiveIntensity: 0.7,
                        metalness: planet.name === 'Ventures' ? 1 : 0.6,
                        roughness: planet.name === 'Ventures' ? 0.15 : 0.3,
                        bumpScale: 0,
                        opacity: planet.name === 'Vision' ? 0.9 : 1,
                        transparent: planet.name === 'Vision'
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    isVideogram && !showVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        center: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'rgba(0,0,0,0.7)',
                                border: 'none',
                                borderRadius: '50%',
                                width: 80,
                                height: 80,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 24px #ff00e6',
                                cursor: 'pointer',
                                zIndex: 10
                            },
                            onClick: ()=>setShowVideo(true),
                            "aria-label": "Play Video",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "20",
                                        cy: "20",
                                        r: "19",
                                        stroke: "#ff00e6",
                                        strokeWidth: "2",
                                        fill: "#111"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "16,13 29,20 16,27",
                                        fill: "#ff00e6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/CinematicMode.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            isOdyssey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -55,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            67.2,
                            budget.atmosphereSegments,
                            budget.atmosphereSegments
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                        object: odysseyAtmosphereMaterial,
                        attach: "material"
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/CinematicMode.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            isVideogram && showVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                fullscreen: true,
                style: {
                    pointerEvents: 'auto',
                    zIndex: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: `https://www.youtube.com/embed/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$videogramConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEOGRAM_VIDEO_CONFIG"].youtubeId}?autoplay=1&start=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$videogramConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEOGRAM_VIDEO_CONFIG"].startSeconds}`,
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$videogramConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEOGRAM_VIDEO_CONFIG"].title,
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            style: {
                                borderRadius: 18,
                                boxShadow: '0 0 32px #ff00e6',
                                width: 'min(900px, 92vw)',
                                height: 'min(506px, 52vw)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/CinematicMode.tsx",
                            lineNumber: 417,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                marginTop: 32,
                                padding: '12px 32px',
                                borderRadius: 8,
                                background: '#ff00e6',
                                color: '#fff',
                                fontWeight: 700,
                                border: 'none',
                                fontSize: 18,
                                cursor: 'pointer'
                            },
                            onClick: ()=>setShowVideo(false),
                            children: "Close Video"
                        }, void 0, false, {
                            fileName: "[project]/src/components/3d/CinematicMode.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/3d/CinematicMode.tsx",
                    lineNumber: 410,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/CinematicMode.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/CinematicMode.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_s2(CinematicMode, "8y+QBUSqAi+JCIgxY1jxDf9ZfXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexturePreload"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlanetTextures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlanetTexture"]
    ];
});
_c2 = CinematicMode;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StarDrift");
__turbopack_context__.k.register(_c1, "Meteors");
__turbopack_context__.k.register(_c2, "CinematicMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/effects/ShootingStars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShootingStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ShootingStars() {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 🛑 Gated: Only rotate if geometry exists (prevents wasted per-frame work on empty placeholder)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ShootingStars.useFrame": ()=>{
            if (groupRef.current && groupRef.current.children.length > 0) {
                groupRef.current.rotation.y += 0.0005;
            }
        }
    }["ShootingStars.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef
    }, void 0, false, {
        fileName: "[project]/src/components/3d/effects/ShootingStars.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ShootingStars, "6IJMYK8+MXZFwT7izzQ7Jqot7FY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ShootingStars;
var _c;
__turbopack_context__.k.register(_c, "ShootingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/effects/BackgroundStars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BackgroundStars({ targetSpeed = 0.5, starCount = 8000 }) {
    _s();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // السرعة المبدئية هادية
    const currentSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0.5);
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BackgroundStars.useMemo[particles]": ()=>{
            const temp = new Float32Array(starCount * 3);
            for(let i = 0; i < starCount; i++){
                temp[i * 3] = (Math.random() - 0.5) * 2000;
                temp[i * 3 + 1] = (Math.random() - 0.5) * 2000;
                temp[i * 3 + 2] = (Math.random() - 0.5) * 2000;
            }
            return temp;
        }
    }["BackgroundStars.useMemo[particles]"], [
        starCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "BackgroundStars.useFrame": (state, delta)=>{
            if (!pointsRef.current) return;
            // 🛑 فرامل ناعمة جداً: تنزل بالسرعة بهدوء شديد
            currentSpeed.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(currentSpeed.current, targetSpeed, delta * 1.0);
            const positions = pointsRef.current.geometry.attributes.position.array;
            for(let i = 0; i < starCount; i++){
                // 🛑 السحر هنا: قللنا قوة الدفع من 300 لـ 50 لحركة واقعية، فخمة ومريحة للعين
                positions[i * 3 + 2] += currentSpeed.current * (delta * 50);
                if (positions[i * 3 + 2] > 200) {
                    positions[i * 3 + 2] = -1800;
                }
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    }["BackgroundStars.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    args: [
                        particles,
                        3
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/BackgroundStars.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/BackgroundStars.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 1.5,
                color: "#ffffff",
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/BackgroundStars.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/effects/BackgroundStars.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(BackgroundStars, "hLMqEKmsNQbH/vynEj5gXVtVgIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = BackgroundStars;
var _c;
__turbopack_context__.k.register(_c, "BackgroundStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/effects/PostProcessing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostProcessing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * PostProcessing — Global Cinematic Post-Processing Stack
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. ADAPTIVE QUALITY: Reads DPR + UA to build device profile.
 *    Mobile/low-end mounts a lighter composer. Desktop gets the full stack.
 *
 * 2. MODE-GATED DOF: Depth of Field only activates when experienceStore
 *    mode is "isolation" or "enter" — never in free-flight.
 *
 * 3. N8AO: World-space ambient occlusion at half resolution. Desktop only.
 *
 * 4. BLOOM: mipmapBlur for physically-correct light bleed. High
 *    luminanceThreshold (0.9) so only hot emissives bloom.
 *
 * 5. CONDITIONAL CHILDREN: EffectComposer expects Element children —
 *    we use separate Desktop/Mobile composer components to avoid
 *    `false | Element` conditional type issues.
 *
 * BUDGET: ~1.35ms at 1080p, ~3.8ms at 4K.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ─── Desktop stack (full pipeline) ───────────────────────────────────────────
function DesktopComposer({ dofActive }) {
    _s();
    const { gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const isLowEnd = gl.getPixelRatio() <= 1;
    const caOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesktopComposer.useMemo[caOffset]": ()=>[
                0.0004,
                0.0004
            ]
    }["DesktopComposer.useMemo[caOffset]"], []);
    if (isLowEnd) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
            multisampling: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                    intensity: 0.5,
                    luminanceThreshold: 0.9,
                    luminanceSmoothing: 0.025,
                    mipmapBlur: true
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                    offset: 0.3,
                    darkness: 0.7,
                    blendFunction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendFunction"].NORMAL
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    if (dofActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
            multisampling: 4,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N8AO"], {
                    aoRadius: 2.0,
                    intensity: 3.0,
                    distanceFalloff: 1.0,
                    quality: "medium",
                    halfRes: true
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                    intensity: 0.8,
                    luminanceThreshold: 0.9,
                    luminanceSmoothing: 0.025,
                    mipmapBlur: true
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthOfField"], {
                    focusDistance: 0.02,
                    focalLength: 0.025,
                    bokehScale: 3.0,
                    height: 480
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChromaticAberration"], {
                    offset: caOffset,
                    radialModulation: true,
                    modulationOffset: 0.5
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                    offset: 0.3,
                    darkness: 0.7,
                    blendFunction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendFunction"].NORMAL
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
        multisampling: 4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N8AO"], {
                aoRadius: 2.0,
                intensity: 3.0,
                distanceFalloff: 1.0,
                quality: "medium",
                halfRes: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                intensity: 0.8,
                luminanceThreshold: 0.9,
                luminanceSmoothing: 0.025,
                mipmapBlur: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChromaticAberration"], {
                offset: caOffset,
                radialModulation: true,
                modulationOffset: 0.5
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                offset: 0.3,
                darkness: 0.7,
                blendFunction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendFunction"].NORMAL
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(DesktopComposer, "NPrDgqCbAI/HrFyEB4KHjU72qG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = DesktopComposer;
// ─── Mobile stack (lightweight: Bloom + Vignette only) ───────────────────────
function MobileComposer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
        multisampling: 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                intensity: 0.5,
                luminanceThreshold: 0.9,
                luminanceSmoothing: 0.025,
                mipmapBlur: true
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                offset: 0.3,
                darkness: 0.6,
                blendFunction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendFunction"].NORMAL
            }, void 0, false, {
                fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c1 = MobileComposer;
function PostProcessing() {
    _s1();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "PostProcessing.useExperience[mode]": (s)=>s.mode
    }["PostProcessing.useExperience[mode]"]);
    const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "PostProcessing.useDeviceStore[profile]": (s)=>s.profile
    }["PostProcessing.useDeviceStore[profile]"]);
    const dofActive = profile.dofEnabled && (mode === "isolation" || mode === "enter");
    if (!profile.postProcessing) {
        return null;
    }
    if (profile.tier === "mobile" || profile.tier === "tablet") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileComposer, {}, void 0, false, {
            fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
            lineNumber: 162,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopComposer, {
        dofActive: dofActive
    }, void 0, false, {
        fileName: "[project]/src/components/3d/effects/PostProcessing.tsx",
        lineNumber: 165,
        columnNumber: 10
    }, this);
}
_s1(PostProcessing, "w8FvCAM0sTSPWEC4zkx2ugGDxME=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"]
    ];
});
_c2 = PostProcessing;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DesktopComposer");
__turbopack_context__.k.register(_c1, "MobileComposer");
__turbopack_context__.k.register(_c2, "PostProcessing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LoadingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LoadingScreen() {
    _s();
    const { progress, active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            if (!active && progress >= 100) {
                const t = setTimeout({
                    "LoadingScreen.useEffect.t": ()=>setVisible(false)
                }["LoadingScreen.useEffect.t"], 600);
                return ({
                    "LoadingScreen.useEffect": ()=>clearTimeout(t)
                })["LoadingScreen.useEffect"];
            }
        }
    }["LoadingScreen.useEffect"], [
        active,
        progress
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black pointer-events-none select-none",
        style: {
            opacity: !active && progress >= 100 ? 0 : 1,
            transition: "opacity 0.6s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-white/60 rounded-full transition-all duration-300",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/LoadingScreen.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoadingScreen.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/30 text-xs tracking-[0.4em] uppercase font-light",
                children: "Loading Universe"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LoadingScreen.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/LoadingScreen.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "RkKu/PgfZIcVEr2obnU0Ay38vlg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"]
    ];
});
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UniverseCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
// 👈 استيراد العقل المدبر والبطاقة من العناوين الجديدة (AAA Structure)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PlanetCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PlanetCard/index.tsx [app-client] (ecmascript)");
// 👈 استيراد مكونات الـ 3D من طبقاتها الجديدة
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$systems$2f$TheSolarSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/systems/TheSolarSystem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$core$2f$CinematicCameraController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/core/CinematicCameraController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$CinematicMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/CinematicMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$ShootingStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/effects/ShootingStars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$BackgroundStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/effects/BackgroundStars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$PostProcessing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/effects/PostProcessing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LoadingScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
;
;
/**
 * U-03: Derives FOV from viewport aspect ratio and updates on every resize.
 * Lives inside <Canvas> to access useThree(). Returns null (no render output).
 * Aspect → FOV table covers: folded foldable, portrait, near-square inner,
 * standard 16:9, ultrawide, and Apple Vision Pro spatial window.
 */ function CameraFOVAdapter() {
    _s();
    const { camera, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraFOVAdapter.useEffect": ()=>{
            function updateFOV() {
                const w = gl.domElement.clientWidth;
                const h = gl.domElement.clientHeight;
                if (h === 0) return;
                const aspect = w / h;
                let fov;
                if (aspect < 0.6) fov = 55; // folded foldable cover (tall portrait)
                else if (aspect < 0.8) fov = 50; // standard portrait phone
                else if (aspect < 1.3) fov = 45; // near-square inner foldable unfolded
                else if (aspect < 1.9) fov = 40; // standard 16:9 landscape / desktop
                else if (aspect < 2.4) fov = 35; // ultrawide / Vision Pro spatial window
                else fov = 30; // extreme-wide spatial display
                const persp = camera;
                if (Math.abs(persp.fov - fov) > 0.5) {
                    persp.fov = fov;
                    persp.updateProjectionMatrix();
                }
            }
            updateFOV();
            window.addEventListener("resize", updateFOV);
            return ({
                "CameraFOVAdapter.useEffect": ()=>window.removeEventListener("resize", updateFOV)
            })["CameraFOVAdapter.useEffect"];
        }
    }["CameraFOVAdapter.useEffect"], [
        camera,
        gl
    ]);
    return null;
}
_s(CameraFOVAdapter, "djMck6qEDqeW1EjWNovzXn2V/KQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = CameraFOVAdapter;
function UniverseCanvas({ isIntroComplete }) {
    _s1();
    const [activePlanet, setActivePlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "UniverseCanvas.useExperience[mode]": (state)=>state.mode
    }["UniverseCanvas.useExperience[mode]"]);
    const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "UniverseCanvas.useDeviceStore[profile]": (state)=>state.profile
    }["UniverseCanvas.useDeviceStore[profile]"]);
    const resetExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "UniverseCanvas.useExperience[resetExperience]": (state)=>state.resetExperience
    }["UniverseCanvas.useExperience[resetExperience]"]);
    const handleReset = ()=>{
        setActivePlanet(null);
        resetExperience();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            width: "100dvw",
            height: "100dvh",
            backgroundColor: "#000000",
            overflow: "hidden"
        },
        onDoubleClick: handleReset,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                shadows: profile.shadows ? "soft" : false,
                dpr: profile.dpr,
                camera: {
                    position: [
                        0,
                        80,
                        160
                    ],
                    fov: 40,
                    near: 0.1,
                    far: 20000
                },
                gl: {
                    antialias: true,
                    toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                    toneMappingExposure: 1.1
                },
                onPointerMissed: handleReset,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                        attach: "background",
                        args: [
                            "#000000"
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                        attach: "fog",
                        args: [
                            "#000000",
                            200,
                            1000
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.15
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$BackgroundStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                targetSpeed: isIntroComplete ? 0.05 : 1.0,
                                starCount: profile.starCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraFOVAdapter, {}, void 0, false, {
                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            isIntroComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                        onDoubleClick: (e)=>{
                                            e.stopPropagation();
                                            handleReset();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                                args: [
                                                    9000,
                                                    32,
                                                    32
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                                                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                                                transparent: true,
                                                opacity: 0,
                                                depthWrite: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$ShootingStars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    mode === "cinematic" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$CinematicMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$core$2f$CinematicCameraController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                focusTarget: activePlanet?.position || null
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$systems$2f$TheSolarSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onPlanetFocus: setActivePlanet
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    profile.postProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$effects$2f$PostProcessing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                                        lineNumber: 141,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    isIntroComplete && mode !== "cinematic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enableDamping: true,
                        dampingFactor: 0.05,
                        minDistance: 50,
                        maxDistance: 800,
                        touches: {
                            ONE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].ROTATE,
                            TWO: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOUCH"].DOLLY_PAN
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PlanetCard$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/core/UniverseCanvas.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(UniverseCanvas, "H84MSbGpF5i3eI5jEcv5zDWnD7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"]
    ];
});
_c1 = UniverseCanvas;
var _c, _c1;
__turbopack_context__.k.register(_c, "CameraFOVAdapter");
__turbopack_context__.k.register(_c1, "UniverseCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_08bdc7a0._.js.map