(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/3d/planets/ShieldPlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ShieldPlanet — Skins Configuration
 * Theme: Security Shield · Defense Mechanisms · Legal Assets · System Integrity
 * Visual: Tungsten-carbon core wrapped in rotating electromagnetic shield rings
 */ __turbopack_context__.s([
    "SHIELD_SKIN",
    ()=>SHIELD_SKIN
]);
const SHIELD_SKIN = {
    // Core sphere — dark carbon-titanium alloy
    coreColor: "#0d1117",
    coreEmissive: "#1e3a5f",
    coreEmissiveIntensity: 0.7,
    metalness: 0.92,
    roughness: 0.18,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.6,
    // Equatorial shield ring — electric steel blue
    ringEquatorialColor: "#2a6698",
    ringEquatorialOpacity: 0.55,
    ringEquatorialTubeRadius: 0.045,
    ringEquatorialRadius: 1.38,
    // Tilted inner ring — dim cyan
    ringInnerColor: "#1a4a6a",
    ringInnerOpacity: 0.38,
    ringInnerTubeRadius: 0.028,
    ringInnerRadius: 1.22,
    // Outer sentinel ring — faint steel
    ringOuterColor: "#0f2a40",
    ringOuterOpacity: 0.22,
    ringOuterTubeRadius: 0.018,
    ringOuterRadius: 1.58,
    // Force-field pulse aura
    auraColor: "#1a4a88",
    auraOpacity: 0.08,
    // Animation speeds
    ringEquatorialSpeed: 0.28,
    ringInnerSpeed: -0.45,
    ringOuterSpeed: 0.18,
    pulseSpeed: 1.1,
    coreRotateSpeed: 0.12
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/ShieldPlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShieldPlanet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/ShieldPlanet/skins.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Pre-allocated vectors — zero GC in render loop
const _scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
function ShieldPlanet() {
    _s();
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringEquatorialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringOuterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const auraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringEquatorialMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShieldPlanet.useMemo[ringEquatorialMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringEquatorialColor,
                transparent: true,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringEquatorialOpacity,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            })
    }["ShieldPlanet.useMemo[ringEquatorialMat]"], []);
    const ringInnerMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShieldPlanet.useMemo[ringInnerMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerColor,
                transparent: true,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerOpacity,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            })
    }["ShieldPlanet.useMemo[ringInnerMat]"], []);
    const ringOuterMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShieldPlanet.useMemo[ringOuterMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterColor,
                transparent: true,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterOpacity,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            })
    }["ShieldPlanet.useMemo[ringOuterMat]"], []);
    const auraMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShieldPlanet.useMemo[auraMat]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].auraColor,
                transparent: true,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].auraOpacity,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"],
                depthWrite: false
            })
    }["ShieldPlanet.useMemo[auraMat]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ShieldPlanet.useFrame": (state, delta)=>{
            const t = state.clock.elapsedTime;
            if (coreRef.current) {
                coreRef.current.rotation.y += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].coreRotateSpeed;
                // Subtle emissive pulse — security heartbeat
                const mat = coreRef.current.material;
                mat.emissiveIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].coreEmissiveIntensity * (0.7 + 0.3 * Math.sin(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].pulseSpeed));
            }
            if (ringEquatorialRef.current) {
                ringEquatorialRef.current.rotation.z += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringEquatorialSpeed;
            }
            if (ringInnerRef.current) {
                ringInnerRef.current.rotation.x += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerSpeed;
                ringInnerRef.current.rotation.y += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerSpeed * 0.5;
            }
            if (ringOuterRef.current) {
                ringOuterRef.current.rotation.y += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterSpeed;
                ringOuterRef.current.rotation.z += delta * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterSpeed * 0.7;
            }
            if (auraRef.current) {
                // Force-field breathing — scale ±2% at pulseSpeed
                const breathe = 1 + 0.02 * Math.sin(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].pulseSpeed * 1.3);
                _scale.setScalar(breathe);
                auraRef.current.scale.copy(_scale);
            }
        }
    }["ShieldPlanet.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: coreRef,
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            64,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].coreColor,
                        emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].coreEmissive,
                        emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].coreEmissiveIntensity,
                        metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].metalness,
                        roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].roughness,
                        clearcoat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].clearcoat,
                        clearcoatRoughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].clearcoatRoughness,
                        envMapIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].envMapIntensity
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringEquatorialRef,
                material: ringEquatorialMat,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringEquatorialRadius,
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringEquatorialTubeRadius,
                        16,
                        200
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringInnerRef,
                material: ringInnerMat,
                rotation: [
                    Math.PI / 3,
                    0,
                    Math.PI / 5
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerRadius,
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringInnerTubeRadius,
                        16,
                        180
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringOuterRef,
                material: ringOuterMat,
                rotation: [
                    Math.PI / 7,
                    Math.PI / 4,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterRadius,
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$ShieldPlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIELD_SKIN"].ringOuterTubeRadius,
                        16,
                        220
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: auraRef,
                material: auraMat,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                    args: [
                        1.65,
                        32,
                        32
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/ShieldPlanet/index.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ShieldPlanet, "DJUPqX/VmAfB7ltdg1vQ41rZP0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ShieldPlanet;
var _c;
__turbopack_context__.k.register(_c, "ShieldPlanet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_3d_planets_ShieldPlanet_20359e01._.js.map