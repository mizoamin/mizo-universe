(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/IntroPortal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function IntroPortal({ onEnter }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const holdStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // التوقيت المثالي: 1.5 ثانية
    const HOLD_DURATION = 1500;
    /* ✅ مسارات الصور الدقيقة */ const ASSETS = {
        idle: "/images/intro/mizo-state1-off.png",
        hover: "/images/intro/mizo-state2-ready.png",
        active: "/images/intro/mizo-state3-active.png"
    };
    /* --- PRELOAD (لمنع الرمشة) --- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroPortal.useEffect": ()=>{
            Object.values(ASSETS).forEach({
                "IntroPortal.useEffect": (src)=>{
                    const img = new Image();
                    img.src = src;
                }
            }["IntroPortal.useEffect"]);
        }
    }["IntroPortal.useEffect"], []);
    /* --- THE HOLD ENGINE --- */ const animateHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IntroPortal.useCallback[animateHold]": ()=>{
            rafRef.current = requestAnimationFrame({
                "IntroPortal.useCallback[animateHold]": (now)=>{
                    if (!holdStartRef.current) return;
                    const elapsed = now - holdStartRef.current;
                    const pct = Math.min(elapsed / HOLD_DURATION, 1);
                    setProgress(pct);
                    // عندما يصل الشحن لـ 75%، تضيء النظارة فوراً (الصورة الثالثة)
                    if (pct >= 0.75 && pct < 1) {
                        setState({
                            "IntroPortal.useCallback[animateHold]": (prev)=>prev === "complete" ? "complete" : "ignited"
                        }["IntroPortal.useCallback[animateHold]"]);
                    }
                    // عند اكتمال الـ 100%
                    if (pct >= 1) {
                        setState("complete");
                        setTimeout({
                            "IntroPortal.useCallback[animateHold]": ()=>{
                                if (typeof onEnter === "function") onEnter();
                            }
                        }["IntroPortal.useCallback[animateHold]"], 800); // 800ms للاستمتاع برؤية النظارة المضيئة قبل الانطلاق
                        return;
                    }
                    animateHold();
                }
            }["IntroPortal.useCallback[animateHold]"]);
        }
    }["IntroPortal.useCallback[animateHold]"], [
        onEnter
    ]);
    const startHold = (e)=>{
        e.preventDefault();
        // إذا أضاءت النظارة، لا يمكن التراجع!
        if (state === "ignited" || state === "complete") return;
        setState("holding"); // ظهور الصورة الثانية فوراً
        holdStartRef.current = performance.now();
        animateHold();
    };
    const cancelHold = (e)=>{
        e.preventDefault();
        if (state === "ignited" || state === "complete") return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        holdStartRef.current = null;
        setProgress(0);
        setState("idle"); // العودة للصورة الأولى
    };
    /* --- PARALLAX EFFECT --- */ const handleMove = (e)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.height / 2) / rect.height;
        containerRef.current.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
    };
    /* --- حالة ظهور كل صورة بدقة --- */ const showIdle = state === "idle";
    const showReady = state === "hover" || state === "holding";
    const showActive = state === "ignited" || state === "complete";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: state !== "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: containerRef,
            className: "fixed inset-0 z-[999999] flex flex-col items-center justify-between",
            style: {
                // 🛑 الدمج مع النجوم: المركز شفاف بنسبة 90% ليظهر عالم الـ 3D خلفك بوضوح
                background: "radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.95) 100%)",
                height: "100dvh",
                width: "100vw",
                overflow: "hidden",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent"
            },
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                scale: 1.05,
                filter: "blur(20px)"
            },
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            },
            onPointerMove: handleMove,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
            * { -webkit-tap-highlight-color: transparent !important; -webkit-touch-callout: none !important; user-select: none !important; }
            img { pointer-events: none !important; }
            body { overscroll-behavior: none; }
          `
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full flex items-end justify-center cursor-pointer mt-auto",
                    style: {
                        height: "60dvh",
                        maxWidth: "600px"
                    },
                    onPointerEnter: ()=>state === "idle" && setState("hover"),
                    onPointerLeave: ()=>state === "hover" ? setState("idle") : null,
                    onPointerDown: startHold,
                    onPointerUp: cancelHold,
                    onPointerCancel: cancelHold,
                    onContextMenu: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: ASSETS.idle,
                            alt: "Mizo Idle",
                            draggable: false,
                            className: "absolute bottom-0 w-full h-full object-contain object-bottom",
                            animate: {
                                opacity: showIdle ? 1 : 0
                            },
                            transition: {
                                duration: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: ASSETS.hover,
                            alt: "Mizo Ready",
                            draggable: false,
                            className: "absolute bottom-0 w-full h-full object-contain object-bottom",
                            animate: {
                                opacity: showReady ? 1 : 0
                            },
                            transition: {
                                duration: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: ASSETS.active,
                            alt: "Mizo Active",
                            draggable: false,
                            className: "absolute bottom-0 w-full h-full object-contain object-bottom",
                            animate: {
                                opacity: showActive ? 1 : 0
                            },
                            transition: {
                                duration: 0.2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute rounded-full pointer-events-none",
                            style: {
                                width: "300px",
                                height: "300px",
                                bottom: "10%",
                                border: "1px solid rgba(255,255,255,0.06)",
                                transform: `scale(${1 + progress * 0.1})`,
                                opacity: progress * 0.6,
                                transition: "transform 0.1s linear",
                                backdropFilter: "blur(2px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col items-center justify-center text-center z-10",
                    style: {
                        height: "40dvh",
                        paddingBottom: "5vh"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex items-center justify-center gap-4",
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#ffffff',
                                        fontWeight: 900,
                                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                        letterSpacing: '0.15em',
                                        lineHeight: 1
                                    },
                                    children: "MIZO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'transparent',
                                        WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
                                        fontWeight: 900,
                                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                        letterSpacing: '0.15em',
                                        lineHeight: 1
                                    },
                                    children: "AMIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4 mt-6 opacity-60 w-full px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 'clamp(20px, 4vw, 40px)',
                                        height: '1px',
                                        backgroundColor: 'rgba(255,255,255,0.4)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'white',
                                        letterSpacing: '0.5em',
                                        fontSize: 'clamp(9px, 1.5vw, 12px)',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        margin: 0
                                    },
                                    children: "SPATIAL DIGITAL DOMAIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 'clamp(20px, 4vw, 40px)',
                                        height: '1px',
                                        backgroundColor: 'rgba(255,255,255,0.4)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "mt-8 text-[11px] tracking-[0.4em] uppercase text-white/40 h-4",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.4
                            },
                            children: [
                                showIdle && "HOLD / CLICK TO ENTER",
                                showReady && "INITIALIZING SEQUENCE...",
                                showActive && "NEURAL LINK ESTABLISHED..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/IntroPortal.tsx",
            lineNumber: 99,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/IntroPortal.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(IntroPortal, "/l6W2QvL9E6m7mKqOfpMmblNpS4=");
_c = IntroPortal;
var _c;
__turbopack_context__.k.register(_c, "IntroPortal");
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
                lineNumber: 91,
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
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-mono tracking-widest uppercase",
                        children: isOpen ? "CLOSE" : "NAV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 113,
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
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "2",
                                x2: "8",
                                y2: "14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 97,
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
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono text-green-400/60 tracking-wider",
                                        children: "ONLINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 143,
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
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-white/80 tracking-widest uppercase",
                                        children: isOnPlanetPage ? `ORBITING: ${planets.find((p)=>p.id === currentPlanetId)?.name ?? "UNKNOWN"}` : isHome ? "FREE ORBIT — GOD VIEW" : "IN TRANSIT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 142,
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
                                                lineNumber: 216,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 202,
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
                                                            lineNumber: 226,
                                                            columnNumber: 25
                                                        }, this),
                                                        isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-amber-400/60 border border-amber-400/20 px-1.5 py-0.5 rounded",
                                                            children: "ENCRYPTED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 27
                                                        }, this),
                                                        isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-green-400/80 border border-green-400/20 px-1.5 py-0.5 rounded",
                                                            children: "HERE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "voice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-pink-400/80 border border-pink-400/20 px-1.5 py-0.5 rounded",
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "videogram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] font-mono tracking-widest text-gray-400/80 border border-gray-400/20 px-1.5 py-0.5 rounded",
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 225,
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
                                                            lineNumber: 257,
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
                                                            lineNumber: 260,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 224,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-mono text-white/20 tabular-nums flex-shrink-0",
                                            children: SIMULATED_DISTANCES[planet.id]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 268,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                    lineNumber: 177,
                                    columnNumber: 19
                                }, this)
                            }, planet.id, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 176,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 168,
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
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 5L6 9H2v6h4l5 4V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "23",
                                                    y1: "9",
                                                    x2: "17",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "9",
                                                    x2: "23",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-mono tracking-wider uppercase",
                                        children: isMuted ? "MUTED" : "AUDIO ON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 280,
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
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(NavigationHUD, "o0z+Xe+4dUQ+izBy8GHvn3ytUEQ=", false, function() {
    return [
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
"[project]/src/config/deviceProfiles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Device Profiles — Performance tier definitions
 *
 * Each tier defines rendering caps: DPR, star counts, texture quality,
 * post-processing toggles, shadow toggles. Read by useDeviceStore to
 * configure the 3D engine adaptively.
 *
 * ⚠️ config/ imports NOTHING from engine/ or components/.
 */ __turbopack_context__.s([
    "DEVICE_PROFILES",
    ()=>DEVICE_PROFILES,
    "TIER_BREAKPOINTS",
    ()=>TIER_BREAKPOINTS
]);
const DEVICE_PROFILES = {
    mobile: {
        tier: "mobile",
        quality: "low",
        dpr: [
            1,
            1.5
        ],
        fov: 65,
        starCount: 1500,
        textureResolution: 512,
        shadows: false,
        postProcessing: false,
        bloomEnabled: false,
        dofEnabled: false,
        instancedMesh: false
    },
    tablet: {
        tier: "tablet",
        quality: "medium",
        dpr: [
            1,
            1.5
        ],
        fov: 55,
        starCount: 3000,
        textureResolution: 1024,
        shadows: false,
        postProcessing: true,
        bloomEnabled: true,
        dofEnabled: false,
        instancedMesh: true
    },
    desktop: {
        tier: "desktop",
        quality: "high",
        dpr: [
            1,
            2
        ],
        fov: 40,
        starCount: 5000,
        textureResolution: 2048,
        shadows: true,
        postProcessing: true,
        bloomEnabled: true,
        dofEnabled: false,
        instancedMesh: true
    },
    ultra: {
        tier: "ultra",
        quality: "ultra",
        dpr: [
            1,
            2
        ],
        fov: 40,
        starCount: 8000,
        textureResolution: 2048,
        shadows: true,
        postProcessing: true,
        bloomEnabled: true,
        dofEnabled: true,
        instancedMesh: true
    },
    "vision-pro": {
        tier: "vision-pro",
        quality: "ultra",
        dpr: [
            1,
            2
        ],
        fov: 40,
        starCount: 8000,
        textureResolution: 2048,
        shadows: true,
        postProcessing: true,
        bloomEnabled: true,
        dofEnabled: true,
        instancedMesh: true
    }
};
const TIER_BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1920
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/engine/deviceStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeviceStore",
    ()=>useDeviceStore
]);
/**
 * Device Store — Zustand store for hardware detection & adaptive rendering
 *
 * Detects device tier (mobile/tablet/desktop/ultra/vision-pro) and
 * exposes the corresponding DeviceProfile from deviceProfiles.ts.
 *
 * Components read: useDeviceStore(s => s.profile.starCount), etc.
 * Initialized once on mount via initDeviceProfile().
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/deviceProfiles.ts [app-client] (ecmascript)");
;
;
/**
 * Detect device tier from screen width, touch capability, and user agent.
 * GPU tier detection can be added later via WebGL renderer info.
 */ function detectTier() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const ua = navigator.userAgent.toLowerCase();
    // Apple Vision Pro detection
    if (ua.includes("apple vision") || ua.includes("xros")) {
        return "vision-pro";
    }
    const width = window.innerWidth;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const deviceMemory = navigator.deviceMemory;
    // Mobile: narrow viewport + touch
    if (width < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_BREAKPOINTS"].mobile && isTouchDevice) {
        return "mobile";
    }
    // Tablet: mid viewport + touch
    if (width < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_BREAKPOINTS"].tablet && isTouchDevice) {
        return "tablet";
    }
    // Ultra: wide viewport + high memory (8GB+) or 4K+ display
    if (width > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_BREAKPOINTS"].desktop || deviceMemory && deviceMemory >= 8 || window.devicePixelRatio >= 2 && width >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_BREAKPOINTS"].desktop) {
        return "ultra";
    }
    return "desktop";
}
const useDeviceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tier: "desktop",
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_PROFILES"].desktop,
        initialized: false,
        initDeviceProfile: ()=>{
            const tier = detectTier();
            set({
                tier,
                profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEVICE_PROFILES"][tier],
                initialized: true
            });
        }
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
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$IntroPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/IntroPortal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavigationHUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-client] (ecmascript)");
;
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
// 🚀 Dynamic import — entire 3D canvas loads only after intro completes
// Prevents R3F + Three.js (~500KB) from blocking First Contentful Paint
const UniverseCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = UniverseCanvas;
function Home() {
    _s();
    const [isIntroComplete, setIsIntroComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initDeviceProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"])({
        "Home.useDeviceStore[initDeviceProfile]": (s)=>s.initDeviceProfile
    }["Home.useDeviceStore[initDeviceProfile]"]);
    const startAmbientLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "Home.useAudioStore[startAmbientLoop]": (s)=>s.startAmbientLoop
    }["Home.useAudioStore[startAmbientLoop]"]);
    const stopAmbientLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])({
        "Home.useAudioStore[stopAmbientLoop]": (s)=>s.stopAmbientLoop
    }["Home.useAudioStore[stopAmbientLoop]"]);
    // Initialize device detection once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            initDeviceProfile();
        }
    }["Home.useEffect"], [
        initDeviceProfile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (isIntroComplete) {
                startAmbientLoop();
                return;
            }
            stopAmbientLoop();
        }
    }["Home.useEffect"], [
        isIntroComplete,
        startAmbientLoop,
        stopAmbientLoop
    ]);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"])({
        "Home.useExperience[setMode]": (s)=>s.setMode
    }["Home.useExperience[setMode]"]);
    const handleIntroIgnition = ()=>{
        setIsIntroComplete(true);
        setMode("cinematic");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-screen h-screen relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UniverseCanvas, {
                    isIntroComplete: isIntroComplete
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            isIntroComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 27
            }, this),
            !isIntroComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$IntroPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onEnter: handleIntroIgnition
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Home, "d2vn2MJOkm2Lb2hBlHe8yAs6mAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperience"]
    ];
});
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "UniverseCanvas");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6756a7e1._.js.map