module.exports = [
"[project]/src/components/ui/IntroPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function IntroPortal({ onEnter }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isReducedMotion, setIsReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasImageError, setHasImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [depthShift, setDepthShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const holdStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const moveRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const enteredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const enterTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const HOLD_DURATION = isTouchDevice ? 900 : 1500;
    const ASSETS = {
        idle: "/images/intro/mizo-state1-off.png",
        hover: "/images/intro/mizo-state2-ready.png",
        active: "/images/intro/mizo-state3-active.png"
    };
    // Animation phases for cinematic transitions
    const getAnimationPhase = (currentState, pct)=>{
        if (currentState === "idle") {
            return {
                scale: 1,
                opacity: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                blur: 0,
                brightness: 1,
                saturate: 0.85
            };
        }
        if (currentState === "hover" || currentState === "holding") {
            // Phase 1-2: Breathing/focus effect
            const breathe = Math.sin(pct * Math.PI * 2) * 0.015;
            return {
                scale: 1.02 + breathe,
                opacity: 1,
                rotationY: pct * 2.5,
                rotationX: pct * -1.2,
                z: pct * 8,
                blur: pct * 0.8,
                brightness: 1 + pct * 0.08,
                saturate: 0.85 + pct * 0.1
            };
        }
        if (currentState === "ignited") {
            // Fast transition: snap through to active
            return {
                scale: 1.08,
                opacity: 1,
                rotationY: 4,
                rotationX: -2,
                z: 12,
                blur: 0.5,
                brightness: 1.12,
                saturate: 1
            };
        }
        return {
            scale: 1,
            opacity: 0,
            rotationY: 0,
            rotationX: 0,
            z: 0,
            blur: 0,
            brightness: 1,
            saturate: 1
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const pointerQuery = window.matchMedia("(pointer: coarse)");
        const syncPreferences = ()=>{
            setIsReducedMotion(reducedMotionQuery.matches);
            setIsTouchDevice(pointerQuery.matches || navigator.maxTouchPoints > 0);
        };
        syncPreferences();
        reducedMotionQuery.addEventListener("change", syncPreferences);
        pointerQuery.addEventListener("change", syncPreferences);
        Object.values(ASSETS).forEach((src)=>{
            const img = new Image();
            img.src = src;
        });
        // Depth animation loop for subtle continuous movement
        let depthRaf;
        const animateDepth = (t)=>{
            setDepthShift(Math.sin(t / 1000) * 2);
            depthRaf = requestAnimationFrame(animateDepth);
        };
        depthRaf = requestAnimationFrame(animateDepth);
        return ()=>{
            reducedMotionQuery.removeEventListener("change", syncPreferences);
            pointerQuery.removeEventListener("change", syncPreferences);
            cancelAnimationFrame(depthRaf);
        };
    }, []);
    const finalizeEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (enteredRef.current) return;
        enteredRef.current = true;
        setState("complete");
        const exitDelay = isReducedMotion ? 220 : 700;
        enterTimerRef.current = setTimeout(()=>{
            onEnter();
        }, exitDelay);
    }, [
        isReducedMotion,
        onEnter
    ]);
    const animateHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        rafRef.current = requestAnimationFrame((now)=>{
            if (!holdStartRef.current) return;
            const elapsed = now - holdStartRef.current;
            const pct = Math.min(elapsed / HOLD_DURATION, 1);
            setProgress(pct);
            if (pct >= 0.75 && pct < 1) {
                setState((prev)=>prev === "complete" ? "complete" : "ignited");
            }
            if (pct >= 1) {
                finalizeEnter();
                return;
            }
            animateHold();
        });
    }, [
        HOLD_DURATION,
        finalizeEnter
    ]);
    const triggerQuickEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (state === "ignited" || state === "complete") return;
        setState("ignited");
        setProgress(1);
        finalizeEnter();
    }, [
        finalizeEnter,
        state
    ]);
    const startHold = (e)=>{
        e.preventDefault();
        if (state === "ignited" || state === "complete") return;
        if (isTouchDevice || e.pointerType === "touch") {
            triggerQuickEnter();
            return;
        }
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setState("holding");
        holdStartRef.current = performance.now();
        animateHold();
    };
    const cancelHold = (e)=>{
        e.preventDefault();
        if (state === "ignited" || state === "complete") return;
        if (isTouchDevice || e.pointerType === "touch") return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        holdStartRef.current = null;
        setProgress(0);
        setState("idle");
    };
    const applyParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const container = containerRef.current;
        const pointer = pointerTargetRef.current;
        if (!container || !pointer || isReducedMotion || isTouchDevice || state === "complete") {
            moveRafRef.current = null;
            return;
        }
        const rect = container.getBoundingClientRect();
        const x = (pointer.x - rect.width / 2) / rect.width;
        const y = (pointer.y - rect.height / 2) / rect.height;
        container.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
        moveRafRef.current = null;
    }, [
        isReducedMotion,
        isTouchDevice,
        state
    ]);
    const handleMove = (e)=>{
        if (!containerRef.current || isReducedMotion || isTouchDevice || state === "complete") return;
        pointerTargetRef.current = {
            x: e.clientX,
            y: e.clientY
        };
        if (moveRafRef.current !== null) return;
        moveRafRef.current = requestAnimationFrame(applyParallax);
    };
    const resetParallax = ()=>{
        if (!containerRef.current) return;
        containerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            triggerQuickEnter();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (moveRafRef.current) cancelAnimationFrame(moveRafRef.current);
            if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isTouchDevice && state === "idle") {
            setState("hover");
        }
    }, [
        isTouchDevice,
        state
    ]);
    const onImageError = ()=>{
        setHasImageError(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: state !== "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: containerRef,
            className: "fixed inset-0 z-[999999] flex flex-col items-center justify-between",
            role: "button",
            tabIndex: 0,
            "aria-label": "Enter Mizo Universe",
            style: {
                background: "radial-gradient(circle at center, rgba(2,8,16,0.08) 0%, rgba(0,0,0,0.96) 100%)",
                height: "100dvh",
                width: "100vw",
                overflow: "hidden",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                willChange: "transform"
            },
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                scale: isReducedMotion ? 1 : 1.04,
                filter: isReducedMotion ? "blur(0px)" : "blur(12px)"
            },
            transition: {
                duration: isReducedMotion ? 0.28 : 0.9,
                ease: "easeInOut"
            },
            onPointerMove: handleMove,
            onPointerLeave: resetParallax,
            onKeyDown: handleKeyDown,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full flex items-end justify-center cursor-pointer mt-auto",
                    style: {
                        height: "60dvh",
                        maxWidth: "600px"
                    },
                    onPointerEnter: ()=>!isTouchDevice && state === "idle" && setState("hover"),
                    onPointerLeave: ()=>!isTouchDevice && state === "hover" ? setState("idle") : null,
                    onPointerDown: startHold,
                    onPointerUp: cancelHold,
                    onPointerCancel: cancelHold,
                    onContextMenu: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                pointerEvents: "none",
                                background: `radial-gradient(circle at center, rgba(100,150,255,${progress * 0.05 + 0.02}) 0%, transparent 70%)`,
                                transition: "background 0.3s ease-out"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: imageContainerRef,
                            style: {
                                position: "absolute",
                                inset: 0,
                                perspective: "1200px",
                                perspectiveOrigin: "center bottom"
                            },
                            children: [
                                !hasImageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: ASSETS.idle,
                                            alt: "Mizo idle portrait",
                                            draggable: false,
                                            onError: onImageError,
                                            className: "absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none",
                                            style: {
                                                filter: `blur(${state === "idle" ? 0 : 2}px) brightness(${state === "idle" ? 1 : 0.8}) saturate(${state === "idle" ? 0.85 : 0.6})`,
                                                transformOrigin: "center bottom"
                                            },
                                            animate: {
                                                opacity: state === "idle" ? 1 : 0,
                                                scale: state === "idle" ? 1 : 0.95,
                                                rotationY: state === "idle" ? 0 : 8,
                                                z: state === "idle" ? 0 : -20
                                            },
                                            transition: {
                                                duration: isReducedMotion ? 0.2 : 0.6,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                position: "absolute",
                                                inset: 0,
                                                transformOrigin: "center bottom"
                                            },
                                            animate: {
                                                opacity: state === "hover" || state === "holding" ? 1 : 0,
                                                scale: state === "hover" || state === "holding" ? 1.02 : 1.05,
                                                rotationY: state === "hover" || state === "holding" ? progress * 1.5 : 4,
                                                rotationX: state === "hover" || state === "holding" ? progress * -0.8 : -1.5,
                                                filter: state === "hover" || state === "holding" ? `blur(${progress * 0.4}px) brightness(${1 + progress * 0.06}) saturate(${0.85 + progress * 0.08})` : "blur(2px) brightness(0.8) saturate(0.6)"
                                            },
                                            transition: {
                                                duration: isReducedMotion ? 0.2 : 0.4,
                                                ease: "easeOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: ASSETS.hover,
                                                alt: "Mizo ready portrait",
                                                draggable: false,
                                                className: "w-full h-full object-contain object-bottom pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: ASSETS.active,
                                            alt: "Mizo active portrait",
                                            draggable: false,
                                            onError: onImageError,
                                            className: "absolute bottom-0 w-full h-full object-contain object-bottom pointer-events-none",
                                            style: {
                                                filter: `blur(0px) brightness(${state === "ignited" || state === "complete" ? 1.15 : 0}) saturate(${state === "ignited" || state === "complete" ? 1.2 : 0})`,
                                                transformOrigin: "center bottom"
                                            },
                                            animate: {
                                                opacity: state === "ignited" || state === "complete" ? 1 : 0,
                                                scale: state === "ignited" || state === "complete" ? 1.08 : 0.92,
                                                rotationY: state === "ignited" || state === "complete" ? 2 : -4,
                                                z: state === "ignited" || state === "complete" ? 20 : -30
                                            },
                                            transition: {
                                                duration: isReducedMotion ? 0.15 : 0.35,
                                                ease: "easeOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                            lineNumber: 366,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                hasImageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 w-full h-full flex items-center justify-center pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "min(76vw, 380px)",
                                            aspectRatio: "3 / 4",
                                            border: "1px solid rgba(255,255,255,0.18)",
                                            background: "linear-gradient(160deg, rgba(22,30,44,0.9) 0%, rgba(6,10,18,0.98) 100%)",
                                            boxShadow: "0 20px 48px rgba(0,0,0,0.55), inset 0 0 44px rgba(130,170,210,0.08)",
                                            display: "grid",
                                            placeItems: "center",
                                            color: "rgba(228,236,248,0.84)",
                                            letterSpacing: "0.22em",
                                            fontSize: "14px",
                                            fontWeight: 700
                                        },
                                        children: "MIZO AMIN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                        lineNumber: 392,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full pointer-events-none",
                            style: {
                                width: "300px",
                                height: "300px",
                                bottom: "10%",
                                border: "1.5px solid rgba(200,220,255,0.12)",
                                transformOrigin: "center"
                            },
                            animate: {
                                scale: 1 + progress * 0.2,
                                opacity: progress * 0.7,
                                boxShadow: `0 0 ${20 + progress * 30}px rgba(100,150,255,${0.2 + progress * 0.4})`
                            },
                            transition: {
                                duration: 0.1,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this),
                        (state === "holding" || state === "ignited" || state === "complete") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full pointer-events-none",
                            style: {
                                width: "280px",
                                height: "280px",
                                bottom: "10%",
                                left: "50%",
                                top: "auto",
                                transform: "translateX(-50%)",
                                background: `radial-gradient(circle, rgba(150,190,255,${0.15 + progress * 0.2}) 0%, transparent 70%)`,
                                backdropFilter: "blur(8px)"
                            },
                            animate: {
                                opacity: state === "ignited" ? 1 : progress * 0.8
                            },
                            transition: {
                                duration: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 434,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col items-center justify-center text-center z-10",
                    style: {
                        height: "40dvh",
                        paddingBottom: "5vh"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "var(--color-text-primary)",
                                        fontWeight: "var(--font-weight-black)",
                                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                        letterSpacing: "0.15em",
                                        lineHeight: 1
                                    },
                                    children: "MIZO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "transparent",
                                        WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
                                        fontWeight: "var(--font-weight-black)",
                                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                        letterSpacing: "0.15em",
                                        lineHeight: 1
                                    },
                                    children: "AMIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4 mt-6 opacity-60 w-full px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "clamp(20px, 4vw, 40px)",
                                        height: "1px",
                                        backgroundColor: "rgba(255,255,255,0.4)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "var(--color-text-primary)",
                                        letterSpacing: "0.5em",
                                        fontSize: "var(--text-body-xs)",
                                        fontWeight: "var(--font-weight-bold)",
                                        textTransform: "uppercase",
                                        margin: 0
                                    },
                                    children: "SPATIAL DIGITAL DOMAIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "clamp(20px, 4vw, 40px)",
                                        height: "1px",
                                        backgroundColor: "rgba(255,255,255,0.4)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 482,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            style: {
                                marginTop: "var(--space-6)",
                                fontSize: "var(--text-body-xs)",
                                letterSpacing: "0.4em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.4)",
                                height: "1rem"
                            },
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
                                state === "idle" && (isTouchDevice ? "TAP TO ENTER" : "HOLD TO ENTER"),
                                (state === "hover" || state === "holding") && "INITIALIZING SEQUENCE...",
                                (state === "ignited" || state === "complete") && "NEURAL LINK ESTABLISHED..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "14px",
                                width: "min(70vw, 360px)",
                                height: "2px",
                                background: "rgba(255,255,255,0.08)",
                                overflow: "hidden"
                            },
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    height: "100%",
                                    background: "linear-gradient(90deg, rgba(180,220,255,0.25), rgba(255,255,255,0.75), rgba(180,220,255,0.25))",
                                    transformOrigin: "left center"
                                },
                                animate: {
                                    scaleX: progress
                                },
                                transition: {
                                    duration: 0.08
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/IntroPortal.tsx",
                                lineNumber: 527,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/IntroPortal.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/IntroPortal.tsx",
                    lineNumber: 454,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/IntroPortal.tsx",
            lineNumber: 257,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/IntroPortal.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/planetMetadata.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPlanetNeighbors",
    ()=>getPlanetNeighbors,
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
function getPlanetNeighbors(id) {
    const planets = getPlanetsArray();
    const idx = planets.findIndex((p)=>p.id === id);
    return {
        prev: idx > 0 ? planets[idx - 1] : null,
        next: idx < planets.length - 1 ? planets[idx + 1] : null
    };
}
}),
"[project]/src/engine/useAudioStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioStore",
    ()=>useAudioStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const SFX_PATHS = {
    click: ("TURBOPACK compile-time value", "") || "",
    hover: ("TURBOPACK compile-time value", "") || "",
    warp: ("TURBOPACK compile-time value", "") || ""
};
const AMBIENT_PATH = ("TURBOPACK compile-time value", "") || "";
let ambientAudio = null;
function clamp01(value) {
    return Math.max(0, Math.min(value, 1));
}
function getAmbientAudio() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function playOneShot(path, volume) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const useAudioStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
}),
"[project]/src/engine/experienceStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExperience",
    ()=>useExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        mode: "jupiter-hub",
        activePlanet: null,
        cinematicPlanetIndex: 0,
        selectedMoonId: null,
        setMode: (mode)=>set({
                mode
            }),
        setPlanet: (id)=>set({
                activePlanet: id
            }),
        setCinematicPlanetIndex: (idx)=>set({
                cinematicPlanetIndex: idx
            }),
        setSelectedMoon: (id)=>set({
                selectedMoonId: id
            }),
        resetExperience: ()=>set({
                mode: "jupiter-hub",
                activePlanet: null,
                cinematicPlanetIndex: 0,
                selectedMoonId: null
            })
    }));
}),
"[project]/src/components/ui/WarpTransition.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarpTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function usePrefersReducedMotion() {
    const [prefersReduced, setPrefersReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = (e)=>setPrefersReduced(e.matches);
        mql.addEventListener("change", handler);
        return ()=>mql.removeEventListener("change", handler);
    }, []);
    return prefersReduced;
}
function WarpTransition({ triggerWarp, targetRoute }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const playSfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.playSfx);
    const prefersReducedMotion = usePrefersReducedMotion();
    const isWarping = Boolean(triggerWarp && targetRoute);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (triggerWarp && targetRoute) {
            playSfx("warp");
            // Reduced-motion: faster crossfade (400ms), normal: full warp (800ms)
            const delay = prefersReducedMotion ? 400 : 800;
            const timeout = setTimeout(()=>{
                router.push(targetRoute);
            }, delay);
            return ()=>clearTimeout(timeout);
        }
    }, [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 pointer-events-none",
            style: {
                zIndex: "var(--z-overlay)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 animate-in fade-in fill-mode-forwards",
                style: {
                    backgroundColor: "rgba(0,0,0,1)",
                    animationDuration: "var(--duration-moderate)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/WarpTransition.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none flex items-center justify-center",
        style: {
            zIndex: "var(--z-overlay)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 animate-in fade-in fill-mode-forwards",
                style: {
                    backgroundColor: "rgba(255,255,255,1)",
                    animationDuration: "var(--duration-slow)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 motion-safe:animate-pulse",
                style: {
                    backgroundColor: "rgba(0,0,0,0.2)",
                    mixBlendMode: "overlay",
                    animationDuration: "var(--duration-moderate)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/WarpTransition.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/WarpTransition.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/NavigationHUD.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WarpTransition.tsx [app-ssr] (ecmascript)");
/**
 * NavigationHUD — Glassmorphism radial planet radar overlay
 *
 * Fixed UI overlay that provides:
 * - Planet Radar: radial list of all 10 planets with accent dots
 * - Warp Trigger: click any planet → WarpTransition → route
 * - Current Location: shows active planet based on URL
 * - Audio Toggle: mute/unmute slot (prepared for ambient soundscape)
 * - Locked Planets: non-active planets shown as ENCRYPTED
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
    "contact",
    "shield"
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
    // Cinematic/Solar toggle
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.mode);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.setMode);
    const isCinematic = mode === "cinematic";
    // Toggle handler
    const handleToggleView = ()=>{
        playSfx("click");
        setMode(isCinematic ? "free" : "cinematic");
    };
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const planets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlanetsArray"])();
    const isMuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.isMuted);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.toggleMute);
    const playSfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.playSfx);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredPlanet, setHoveredPlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [warpTarget, setWarpTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerWarp, setTriggerWarp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect current planet from URL
    const currentPlanetId = planets.find((p)=>pathname === p.routePath)?.id ?? null;
    // Close HUD after warp completes (route change)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (triggerWarp) {
            const timeout = setTimeout(()=>{
                setIsOpen(false);
                setTriggerWarp(false);
                setWarpTarget(null);
            }, 900);
            return ()=>clearTimeout(timeout);
        }
    }, [
        triggerWarp
    ]);
    const handlePlanetClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((routePath, planetId)=>{
        // Don't warp to current page or locked planets
        if (pathname === routePath || !ACTIVE_PLANETS.has(planetId)) return;
        playSfx("click");
        setWarpTarget(routePath);
        setTriggerWarp(true);
    }, [
        pathname,
        playSfx
    ]);
    const isOnPlanetPage = currentPlanetId !== null;
    const isHome = pathname === "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WarpTransition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                triggerWarp: triggerWarp,
                targetRoute: warpTarget ?? ""
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    playSfx("click");
                    setIsOpen((prev)=>!prev);
                },
                "aria-label": isOpen ? "Close navigation" : "Open navigation",
                className: "fixed top-6 right-6 z-[9999] flex items-center gap-2 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/25 transition-all duration-300 select-none group shadow-md",
                style: {
                    color: isOpen ? "var(--color-accent-prime)" : "var(--color-text-muted)",
                    borderColor: isOpen ? "var(--color-accent-prime)33" : "rgba(255,255,255,0.1)",
                    transition: `all var(--duration-fast) var(--ease-out-cubic)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-2.5 w-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                                style: {
                                    backgroundColor: "var(--color-accent-prime)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex h-2.5 w-2.5 rounded-full",
                                style: {
                                    backgroundColor: "var(--color-accent-prime)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-body-xs font-mono tracking-hud uppercase",
                        children: isOpen ? "CLOSE" : "NAV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 transition-transform",
                        style: {
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            transitionDuration: "var(--duration-fast)",
                            transitionTimingFunction: "var(--ease-out-cubic)"
                        },
                        viewBox: "0 0 16 16",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "2",
                                y1: "8",
                                x2: "14",
                                y2: "8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "2",
                                x2: "8",
                                y2: "14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleToggleView,
                "aria-label": isCinematic ? "Switch to Map View" : "Switch to Cinematic View",
                className: "fixed top-6 left-6 z-[9999] flex items-center gap-2 px-4 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full transition-all select-none group",
                style: {
                    color: "var(--color-text-muted)",
                    borderColor: "rgba(255,255,255,0.1)",
                    boxShadow: "var(--shadow-md)",
                    transitionDuration: "var(--duration-fast)",
                    transitionTimingFunction: "var(--ease-out-cubic)"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.color = "var(--color-text-primary)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                },
                children: [
                    isCinematic ? // Eye icon for Cinematic
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this) : // Map icon for Solar System
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M9 22V6m6 16V6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-body-xs font-mono tracking-hud uppercase",
                        children: isCinematic ? "CINEMATIC VIEW" : "MAP VIEW"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Planet navigation",
                className: "fixed top-20 right-6 z-[9999] w-80 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4 motion-safe:duration-300 relative",
                style: {
                    background: "var(--color-surface-glass-3)",
                    borderColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "var(--shadow-lg)",
                    backdropFilter: "var(--blur-glass-lg)",
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 14%, black 100%)",
                    maskImage: "linear-gradient(to top, transparent 0%, black 14%, black 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 pt-5 pb-3",
                        style: {
                            borderBottomColor: "rgba(255,255,255,0.05)",
                            borderBottomWidth: "1px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-body-xs font-mono tracking-hud uppercase",
                                        style: {
                                            color: "var(--color-text-muted)"
                                        },
                                        children: "System Navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body-xs font-mono tracking-hud",
                                        style: {
                                            color: "var(--color-text-success)"
                                        },
                                        children: "ONLINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body-xs font-mono tracking-hud",
                                        style: {
                                            color: "var(--color-text-tertiary)"
                                        },
                                        children: "LOCATION:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body-xs font-mono tracking-widest uppercase",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: isOnPlanetPage ? `ORBITING: ${planets.find((p)=>p.id === currentPlanetId)?.name ?? "UNKNOWN"}` : isHome ? "FREE ORBIT — GOD VIEW" : "IN TRANSIT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "px-3 py-2",
                        children: planets.map((planet)=>{
                            const isActive = ACTIVE_PLANETS.has(planet.id);
                            const isLocked = !isActive;
                            const isCurrent = planet.id === currentPlanetId;
                            const isHovered = planet.id === hoveredPlanet;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePlanetClick(planet.routePath, planet.id),
                                    onMouseEnter: ()=>{
                                        setHoveredPlanet(planet.id);
                                        if (!isLocked) playSfx("hover");
                                    },
                                    onMouseLeave: ()=>setHoveredPlanet(null),
                                    disabled: isLocked || isCurrent,
                                    "aria-label": isLocked ? `${planet.name} — encrypted` : isCurrent ? `${planet.name} — current location` : `Warp to ${planet.name}`,
                                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group/planet text-left",
                                    style: {
                                        transitionDuration: "var(--duration-fast)",
                                        transitionTimingFunction: "var(--ease-out-cubic)",
                                        ...isCurrent && {
                                            background: `linear-gradient(90deg, ${planet.themeColor}22 0%, rgba(255,255,255,0.06) 52%, rgba(255,255,255,0.03) 100%)`,
                                            boxShadow: `inset 0 0 0 1px ${planet.themeColor}40, var(--shadow-md)`,
                                            borderColor: `${planet.themeColor}33`,
                                            borderWidth: "1px"
                                        },
                                        ...isLocked && {
                                            opacity: 0.4,
                                            cursor: "not-allowed"
                                        },
                                        ...!isCurrent && !isLocked && {
                                            cursor: "pointer"
                                        }
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isLocked && !isCurrent) {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                            e.currentTarget.style.borderWidth = "1px";
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isLocked && !isCurrent) {
                                            e.currentTarget.style.background = "";
                                            e.currentTarget.style.borderColor = "";
                                            e.currentTarget.style.borderWidth = "";
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex-shrink-0 w-3 h-3 rounded-full transition-transform",
                                            style: {
                                                backgroundColor: isLocked ? "#333" : planet.themeColor,
                                                transform: isHovered && !isLocked ? "scale(1.4)" : "scale(1)",
                                                boxShadow: isCurrent ? `0 0 8px ${planet.themeColor}80` : isHovered && !isLocked ? `0 0 12px ${planet.themeColor}60` : "none",
                                                transitionDuration: "var(--duration-fast)"
                                            },
                                            children: isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 rounded-full motion-safe:animate-ping opacity-40",
                                                style: {
                                                    backgroundColor: planet.themeColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                lineNumber: 329,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 314,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body-xs font-mono tracking-hud uppercase truncate",
                                                            style: {
                                                                color: isCurrent ? "var(--color-text-primary)" : isLocked ? "var(--color-text-disabled)" : "var(--color-text-secondary)"
                                                            },
                                                            children: planet.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 25
                                                        }, this),
                                                        isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body-xs font-mono tracking-hud px-1.5 py-0.5 rounded",
                                                            style: {
                                                                color: "var(--color-text-warning)",
                                                                borderColor: "var(--color-text-warning)",
                                                                borderWidth: "1px",
                                                                fontSize: "0.625rem"
                                                            },
                                                            children: "ENCRYPTED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 27
                                                        }, this),
                                                        isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body-xs font-mono tracking-hud px-1.5 py-0.5 rounded",
                                                            style: {
                                                                color: "var(--color-text-success)",
                                                                borderColor: "var(--color-text-success)",
                                                                borderWidth: "1px",
                                                                fontSize: "0.625rem"
                                                            },
                                                            children: "HERE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "voice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body-xs font-mono tracking-hud px-1.5 py-0.5 rounded",
                                                            style: {
                                                                color: "var(--color-planet-voice)",
                                                                borderColor: "var(--color-planet-voice)",
                                                                borderWidth: "1px",
                                                                fontSize: "0.625rem"
                                                            },
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isLocked && !isCurrent && planet.id === "videogram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-body-xs font-mono tracking-hud px-1.5 py-0.5 rounded",
                                                            style: {
                                                                color: "var(--color-planet-videogram)",
                                                                borderColor: "var(--color-planet-videogram)",
                                                                borderWidth: "1px",
                                                                fontSize: "0.625rem"
                                                            },
                                                            children: "READY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 23
                                                }, this),
                                                isHovered && !isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-150",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-body-xs font-mono truncate",
                                                            style: {
                                                                color: "var(--color-text-tertiary)"
                                                            },
                                                            children: planet.ui.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-body-xs font-mono truncate",
                                                            dir: "rtl",
                                                            style: {
                                                                color: "var(--color-text-muted)"
                                                            },
                                                            children: [
                                                                planet.ui.description.substring(0, 50),
                                                                "…"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 337,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-body-xs font-mono tabular-nums flex-shrink-0",
                                            style: {
                                                color: "var(--color-text-muted)"
                                            },
                                            children: SIMULATED_DISTANCES[planet.id]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                            lineNumber: 419,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                    lineNumber: 264,
                                    columnNumber: 19
                                }, this)
                            }, planet.id, false, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 263,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 flex items-center justify-between",
                        style: {
                            borderTopColor: "rgba(255,255,255,0.05)",
                            borderTopWidth: "1px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    playSfx("click");
                                    toggleMute();
                                },
                                "aria-label": isMuted ? "Unmute ambient audio" : "Mute ambient audio",
                                className: "flex items-center gap-2 transition-colors",
                                style: {
                                    color: isMuted ? "var(--color-text-muted)" : "var(--color-text-secondary)",
                                    transitionDuration: "var(--duration-fast)"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.color = "var(--color-text-primary)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.color = isMuted ? "var(--color-text-muted)" : "var(--color-text-secondary)";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        children: !isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 5L6 9H2v6h4l5 4V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 5L6 9H2v6h4l5 4V5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "23",
                                                    y1: "9",
                                                    x2: "17",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "9",
                                                    x2: "23",
                                                    y2: "15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-body-xs font-mono tracking-hud uppercase",
                                        children: isMuted ? "MUTED" : "AUDIO ON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-body-xs font-mono tracking-hud",
                                style: {
                                    color: "var(--color-text-muted)"
                                },
                                children: [
                                    ACTIVE_PLANETS.size,
                                    "/10 NODES ACTIVE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 429,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-2xl",
                        style: {
                            background: "linear-gradient(to top, var(--color-surface-void) 0%, rgba(0,0,0,0) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavigationHUD.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ui/CinematicHUD.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/planetMetadata.ts [app-ssr] (ecmascript)");
/**
 * CinematicHUD — Premium 2D overlay for the Grand Tour cinematic mode.
 *
 * Renders entirely outside the R3F Canvas (pure DOM/React), so:
 * - Navigation buttons dispatch CustomEvent('cinematic-navigate') which CinematicMode listens to
 * - No raycasting, no OrbitControls conflicts
 * - Framer Motion for all entrance / exit / content-swap animations
 *
 * Planet identity comes from experienceStore.cinematicPlanetIndex → PLANET_ORDER → planetsData
 */ "use client";
;
;
;
;
;
;
/* ─── Planet order MUST match PLANET_SKINS in CinematicMode.tsx ─────── */ const PLANET_ORDER = [
    "legacy",
    "ventures",
    "odyssey",
    "vision",
    "voice",
    "videogram",
    "shield",
    "library",
    "contact",
    "identity"
];
const PLANET_RIM_COLORS = {
    legacy: "#ffb347",
    ventures: "#ffe066",
    odyssey: "#7fdfff",
    vision: "#00fff7",
    voice: "#7d3cff",
    videogram: "#ff00e6",
    shield: "#ffd700",
    library: "#f8f8ff",
    contact: "#00bfff",
    identity: "#c0c0c0"
};
/* ─── Motion variants ─────────────────────────────────────────────────── */ const nameVariants = {
    enter: (dir)=>({
            opacity: 0,
            x: dir > 0 ? 60 : -60,
            filter: "blur(8px)"
        }),
    center: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    },
    exit: (dir)=>({
            opacity: 0,
            x: dir > 0 ? -60 : 60,
            filter: "blur(8px)",
            transition: {
                duration: 0.3,
                ease: [
                    0.4,
                    0,
                    1,
                    1
                ]
            }
        })
};
const hudVariants = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: {
            duration: 0.4,
            ease: [
                0.4,
                0,
                1,
                1
            ]
        }
    }
};
function CinematicHUD() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const cinematicPlanetIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.cinematicPlanetIndex);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.setMode);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const prevIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(cinematicPlanetIndex);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const diff = cinematicPlanetIndex - prevIndexRef.current;
        // Handle wrap-around (e.g., 9→0 is forward, 0→9 is backward)
        if (diff === 0) return;
        const dir = Math.abs(diff) > PLANET_ORDER.length / 2 ? -Math.sign(diff) : Math.sign(diff);
        setDirection(dir);
        prevIndexRef.current = cinematicPlanetIndex;
    }, [
        cinematicPlanetIndex
    ]);
    const planetId = PLANET_ORDER[cinematicPlanetIndex];
    const planet = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["planetsData"][planetId];
    const rimColor = PLANET_RIM_COLORS[planetId] ?? "#ffffff";
    const navigate = (dir)=>{
        window.dispatchEvent(new CustomEvent("cinematic-navigate", {
            detail: {
                dir
            }
        }));
    };
    const jumpTo = (targetIndex)=>{
        window.dispatchEvent(new CustomEvent("cinematic-jump", {
            detail: {
                targetIndex
            }
        }));
    };
    const enterPlanet = ()=>{
        if (!planet) return;
        setMode("free");
        router.push(planet.routePath);
    };
    const exitCinematic = ()=>setMode("free");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pointer-events-none fixed inset-0 z-[100] flex flex-col justify-between select-none",
        variants: hudVariants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "var(--space-1)",
                            borderRadius: "var(--radius-full)",
                            borderWidth: "1px",
                            borderColor: "rgba(255,255,255,0.1)",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            padding: "var(--space-1) var(--space-2)",
                            fontSize: "var(--text-body-xs)",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: "rgba(255,255,255,0.5)",
                            backdropFilter: "blur(12px)",
                            cursor: "pointer",
                            transition: `all var(--duration-moderate) var(--ease-out-cubic)`,
                            pointerEvents: "auto"
                        },
                        onClick: exitCinematic,
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        },
                        onMouseDown: (e)=>{
                            e.currentTarget.style.transform = "scale(0.95)";
                        },
                        onMouseUp: (e)=>{
                            e.currentTarget.style.transform = "scale(1)";
                        },
                        "aria-label": "Exit Grand Tour",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1l10 10M11 1L1 11",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            "Exit Tour"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.55em] font-mono",
                        style: {
                            color: rimColor,
                            opacity: 0.55
                        },
                        children: "Grand Tour · Mizo Universe"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[11px] tracking-widest text-white/30",
                        children: [
                            String(cinematicPlanetIndex + 1).padStart(2, "0"),
                            " /",
                            " ",
                            String(PLANET_ORDER.length).padStart(2, "0")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pointer-events-auto absolute -left-2 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5 active:scale-90 md:left-6",
                        onClick: ()=>navigate(-1),
                        "aria-label": "Previous planet",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13 15L7 10L13 5",
                                stroke: "white",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden text-center",
                        style: {
                            minHeight: "7rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            custom: direction,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: direction,
                                variants: nameVariants,
                                initial: "enter",
                                animate: "center",
                                exit: "exit",
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "var(--text-body-xs)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.45em",
                                            fontFamily: "monospace",
                                            color: rimColor,
                                            opacity: 0.7
                                        },
                                        children: planet?.ui.title ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(3rem, 8vw, 5rem)",
                                            fontWeight: "var(--font-weight-black)",
                                            textTransform: "uppercase",
                                            letterSpacing: "var(--tracking-cinematic)",
                                            color: "var(--color-text-primary)",
                                            fontFamily: "'Arial Black', sans-serif",
                                            textShadow: `0 0 40px ${rimColor}55, 0 2px 24px rgba(0,0,0,0.8)`
                                        },
                                        children: planet?.name ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            maxWidth: "20rem",
                                            textAlign: "center",
                                            fontSize: "var(--text-body-xs)",
                                            lineHeight: "var(--line-height-body)",
                                            color: "rgba(255,255,255,0.4)"
                                        },
                                        children: planet?.ui.description ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, planetId, true, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pointer-events-auto absolute -right-2 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5 active:scale-90 md:right-6",
                        onClick: ()=>navigate(1),
                        "aria-label": "Next planet",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 15L13 10L7 5",
                                stroke: "white",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 pb-8 md:pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pointer-events-auto group relative overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.04] active:scale-95",
                        style: {
                            borderColor: `${rimColor}55`,
                            background: `linear-gradient(135deg, ${rimColor}18 0%, transparent 100%)`,
                            boxShadow: `0 0 24px ${rimColor}22`
                        },
                        onClick: enterPlanet,
                        "aria-label": `Enter ${planet?.name} planet`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                style: {
                                    background: `linear-gradient(135deg, ${rimColor}28 0%, ${rimColor}08 100%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex items-center gap-2",
                                children: [
                                    "Enter ",
                                    planet?.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M3 7h8M8 4l3 3-3 3",
                                            stroke: rimColor,
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto flex items-center gap-2",
                        children: PLANET_ORDER.map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>jumpTo(i),
                                "aria-label": `Go to ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$planetMetadata$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["planetsData"][id].name}`,
                                style: {
                                    width: i === cinematicPlanetIndex ? 20 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    background: i === cinematicPlanetIndex ? PLANET_RIM_COLORS[id] : "rgba(255,255,255,0.2)",
                                    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0
                                }
                            }, id, false, {
                                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[9px] uppercase tracking-[0.4em] text-white/20",
                        children: "Swipe · Scroll · Arrow keys"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/CinematicHUD.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CinematicHUD.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/deviceProfiles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/engine/deviceStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/deviceProfiles.ts [app-ssr] (ecmascript)");
;
;
/**
 * Detect device tier from screen width, touch capability, and user agent.
 * GPU tier detection can be added later via WebGL renderer info.
 */ function detectTier() {
    if ("TURBOPACK compile-time truthy", 1) return "desktop";
    //TURBOPACK unreachable
    ;
    const ua = undefined;
    const width = undefined;
    const isTouchDevice = undefined;
    const deviceMemory = undefined;
}
const useDeviceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tier: "desktop",
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEVICE_PROFILES"].desktop,
        initialized: false,
        initDeviceProfile: ()=>{
            const tier = detectTier();
            set({
                tier,
                profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$deviceProfiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEVICE_PROFILES"][tier],
                initialized: true
            });
        }
    }));
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$IntroPortal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/IntroPortal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavigationHUD.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CinematicHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CinematicHUD.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/deviceStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/useAudioStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/engine/experienceStore.ts [app-ssr] (ecmascript)");
;
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
// 🚀 Dynamic import — entire 3D canvas loads only after intro completes
// Prevents R3F + Three.js (~500KB) from blocking First Contentful Paint
const UniverseCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/3d/core/UniverseCanvas.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function Home() {
    const [isIntroComplete, setIsIntroComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHandoffActive, setIsHandoffActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReducedMotion, setIsReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handoffTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initDeviceProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$deviceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeviceStore"])((s)=>s.initDeviceProfile);
    const startAmbientLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.startAmbientLoop);
    const stopAmbientLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$useAudioStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAudioStore"])((s)=>s.stopAmbientLoop);
    // Initialize device detection once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initDeviceProfile();
    }, [
        initDeviceProfile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isIntroComplete) {
            startAmbientLoop();
            return;
        }
        stopAmbientLoop();
    }, [
        isIntroComplete,
        startAmbientLoop,
        stopAmbientLoop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = ()=>setIsReducedMotion(query.matches);
        sync();
        query.addEventListener("change", sync);
        return ()=>query.removeEventListener("change", sync);
    }, []);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.setMode);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$engine$2f$experienceStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExperience"])((s)=>s.mode);
    const handleIntroIgnition = ()=>{
        setIsIntroComplete(true);
        setIsHandoffActive(true);
        setMode("cinematic");
        if (handoffTimerRef.current) clearTimeout(handoffTimerRef.current);
        handoffTimerRef.current = setTimeout(()=>{
            setIsHandoffActive(false);
            handoffTimerRef.current = null;
        }, isReducedMotion ? 220 : 900);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (handoffTimerRef.current) clearTimeout(handoffTimerRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-c69f7bb2f923ddfe" + " " + "w-screen h-screen relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c69f7bb2f923ddfe" + " " + "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UniverseCanvas, {
                    isIntroComplete: isIntroComplete
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            isIntroComplete && !isHandoffActive && mode !== "cinematic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavigationHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isIntroComplete && !isHandoffActive && mode === "cinematic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CinematicHUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            !isIntroComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c69f7bb2f923ddfe" + " " + "absolute inset-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$IntroPortal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onEnter: handleIntroIgnition
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            isHandoffActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "radial-gradient(circle at center, rgba(190,220,255,0.18) 0%, rgba(6,14,26,0.7) 42%, rgba(0,0,0,0.96) 100%)",
                    backdropFilter: isReducedMotion ? "blur(0px)" : "blur(8px)",
                    WebkitBackdropFilter: isReducedMotion ? "blur(0px)" : "blur(8px)",
                    animation: isReducedMotion ? "handoff-fade-reduced 220ms linear forwards" : "handoff-fade 900ms ease-out forwards"
                },
                "aria-hidden": "true",
                className: "jsx-c69f7bb2f923ddfe" + " " + "absolute inset-0 z-20 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c69f7bb2f923ddfe" + " " + "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "rgba(220,236,255,0.82)",
                            fontSize: "11px",
                            letterSpacing: "0.45em",
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            textShadow: "0 0 22px rgba(172,214,255,0.4)",
                            animation: isReducedMotion ? "handoff-text-reduced 220ms linear forwards" : "handoff-text 900ms ease-out forwards"
                        },
                        className: "jsx-c69f7bb2f923ddfe",
                        children: "Entering The Universe"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c69f7bb2f923ddfe",
                children: "@keyframes handoff-fade{0%{opacity:1}to{opacity:0}}@keyframes handoff-fade-reduced{0%{opacity:1}to{opacity:0}}@keyframes handoff-text{0%{opacity:.75;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(-6px)scale(1.02)}}@keyframes handoff-text-reduced{0%{opacity:.7;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(0)scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_c3c59a28._.js.map