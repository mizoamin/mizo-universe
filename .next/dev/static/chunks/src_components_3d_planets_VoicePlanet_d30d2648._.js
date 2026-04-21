(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/3d/planets/VoicePlanet/skins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VOICE_SKIN",
    ()=>VOICE_SKIN
]);
const VOICE_SKIN = {
    coreColor: "#2a0a1f",
    coreEmissive: "#ff0080",
    coreEmissiveIntensity: 1.2,
    metalness: 0.35,
    roughness: 0.28,
    waveColor: "#ff4fa6",
    waveOpacity: 0.3,
    pulseSpeed: 2.3,
    waveSpeed: 1.7
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/3d/planets/VoicePlanet/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoicePlanet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/3d/planets/VoicePlanet/skins.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const _color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
function VoicePlanet() {
    _s();
    const coreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const waveARef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const waveBRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const waveMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoicePlanet.useMemo[waveMaterial]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].waveColor,
                transparent: true,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].waveOpacity,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
            })
    }["VoicePlanet.useMemo[waveMaterial]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "VoicePlanet.useFrame": (state, delta)=>{
            const t = state.clock.elapsedTime;
            if (coreRef.current) {
                coreRef.current.rotation.y += delta * 0.35;
                const pulse = 1 + Math.sin(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].pulseSpeed) * 0.05;
                coreRef.current.scale.setScalar(pulse);
                const mat = coreRef.current.material;
                const emissiveBoost = 0.8 + Math.sin(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].pulseSpeed) * 0.4;
                mat.emissiveIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].coreEmissiveIntensity * emissiveBoost;
            }
            if (waveARef.current) {
                waveARef.current.rotation.x += delta * 0.9;
                waveARef.current.rotation.y += delta * 0.6;
                const s = 1 + Math.sin(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].waveSpeed) * 0.09;
                waveARef.current.scale.setScalar(s);
            }
            if (waveBRef.current) {
                waveBRef.current.rotation.x -= delta * 0.7;
                waveBRef.current.rotation.z += delta * 0.8;
                const s = 1 + Math.cos(t * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].waveSpeed * 1.1) * 0.11;
                waveBRef.current.scale.setScalar(s);
            }
            _color.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].waveColor).offsetHSL(0, 0, Math.sin(t * 0.8) * 0.02);
            waveMaterial.color.copy(_color);
        }
    }["VoicePlanet.useFrame"]);
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
                        fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                        lineNumber: 60,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].coreColor,
                        emissive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].coreEmissive,
                        emissiveIntensity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].coreEmissiveIntensity,
                        metalness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].metalness,
                        roughness: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$3d$2f$planets$2f$VoicePlanet$2f$skins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_SKIN"].roughness,
                        clearcoat: 0.8,
                        clearcoatRoughness: 0.12
                    }, void 0, false, {
                        fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                lineNumber: 59,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: waveARef,
                material: waveMaterial,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        1.35,
                        0.04,
                        16,
                        180
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                    lineNumber: 73,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: waveBRef,
                material: waveMaterial,
                rotation: [
                    Math.PI / 2.2,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                    args: [
                        1.6,
                        0.03,
                        16,
                        180
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                    lineNumber: 77,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
                lineNumber: 76,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/3d/planets/VoicePlanet/index.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this);
}
_s(VoicePlanet, "x1qeYgZJkGU6tIVzT79Amy+Mc7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = VoicePlanet;
var _c;
__turbopack_context__.k.register(_c, "VoicePlanet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_3d_planets_VoicePlanet_d30d2648._.js.map