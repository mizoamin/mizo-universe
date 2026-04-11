"use client";

import { useMemo, lazy, Suspense } from "react";
import * as THREE from "three";
import SunCore from "../core/SunCore";
import BasePlanet from "../planets/BasePlanet";
// 👈 استدعاء العقل المدبر للحالة من المحرك
import { useExperience } from "../../../engine/experienceStore";
// 👈 استدعاء قاعدة البيانات المركزية للبيانات
import { getPlanetsArray } from "../../../config/planetMetadata";

// 👈 1. استيراد الأشكال البصرية المستقلة (إشارة قاطعة للمجلدات الجديدة)
import IdentityPlanetVisual from "../planets/IdentityPlanet/index";
import LegacyPlanetVisual from "../planets/LegacyPlanet/index";

// 🚀 Dynamic import for VisionPlanet — heaviest 3D component (DNAHelix + HUD)
// Code-split to keep initial bundle lean
const VisionPlanetVisualLazy = lazy(() => import("../planets/VisionPlanet/index"));

// 🚀 Dynamic imports for remaining built planets — lazy-loaded for bundle optimization
const OdysseyPlanetVisualLazy = lazy(() => import("../planets/OdysseyPlanet/index"));
const VenturesPlanetVisualLazy = lazy(() => import("../planets/VenturesPlanet/index"));
const VoicePlanetVisualLazy = lazy(() => import("../planets/VoicePlanet/index"));
const VideogramPlanetVisualLazy = lazy(() => import("../planets/VideogramPlanet/index"));
const LibraryPlanetVisualLazy = lazy(() => import("../planets/LibraryPlanet/index"));
const ContactPlanetVisualLazy = lazy(() => import("../planets/ContactPlanet/index"));
const ShieldPlanetVisualLazy = lazy(() => import("../planets/ShieldPlanet/index"));

// 🛡️ الحفاظ على الأنواع القوية لضمان استقرار الـ TypeScript
type TheSolarSystemProps = {
  onPlanetFocus: (data: { name: string; position: THREE.Vector3 } | null) => void;
};

export default function TheSolarSystem({ onPlanetFocus }: TheSolarSystemProps) {
  const resetExperience = useExperience((state) => state.resetExperience);

  // 🧠 جلب بيانات المجرة من الـ Config (تطبيق مبدأ Data Isolation)
  const planets = useMemo(() => getPlanetsArray(), []);

  // 👈 2. قاموس الأشكال: ربط الـ ID بالتصميم البصري المحدد
  const PlanetVisuals: Record<string, React.ReactNode> = {
    identity: <IdentityPlanetVisual />,
    legacy: <LegacyPlanetVisual />,
    vision: (
      <Suspense fallback={null}>
        <VisionPlanetVisualLazy />
      </Suspense>
    ),
    odyssey: (
      <Suspense fallback={null}>
        <OdysseyPlanetVisualLazy />
      </Suspense>
    ),
    ventures: (
      <Suspense fallback={null}>
        <VenturesPlanetVisualLazy />
      </Suspense>
    ),
    voice: (
      <Suspense fallback={null}>
        <VoicePlanetVisualLazy />
      </Suspense>
    ),
    videogram: (
      <Suspense fallback={null}>
        <VideogramPlanetVisualLazy />
      </Suspense>
    ),
    library: (
      <Suspense fallback={null}>
        <LibraryPlanetVisualLazy />
      </Suspense>
    ),
    contact: (
      <Suspense fallback={null}>
        <ContactPlanetVisualLazy />
      </Suspense>
    ),
    shield: (
      <Suspense fallback={null}>
        <ShieldPlanetVisualLazy />
      </Suspense>
    ),
  };

  return (
    <group>
      {/* ☀️ الشمس مع Hitbox للرجوع للفضاء الحر */}
      <group>
        <SunCore />

        <mesh
          onClick={(e) => {
            e.stopPropagation();
            onPlanetFocus(null);
            resetExperience(); // تصفير الحالة لضمان سلاسة حركة الكاميرا
          }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
        >
          <sphereGeometry args={[16, 32, 32]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      </group>

      {/* 🪐 رسم الكواكب ومداراتها بناءً على الـ Metadata المركزية */}
      {planets.map((planet) => {
        return (
          <group key={planet.id}>
            {/* خط المدار السينمائي */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry
                args={[
                  planet.orbitRadius - 0.05,
                  planet.orbitRadius + 0.05,
                  128,
                ]}
              />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.06}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* 🛡️ الغلاف الفيزيائي (BasePlanet) لإدارة الحركة والتفاعل */}
            <BasePlanet
              id={planet.id} 
              name={planet.name}
              color={planet.themeColor}       
              orbitRadius={planet.orbitRadius}
              size={planet.baseSize}          
              orbitSpeed={planet.orbitSpeed}
              onPlanetFocus={onPlanetFocus}
            >
              {/* 👈 3. السحر المعماري: حقن التصميم الجديد مع ضبط القياس تلقائياً */}
              {PlanetVisuals[planet.id] ? (
                <group scale={[planet.baseSize, planet.baseSize, planet.baseSize]}>
                  {PlanetVisuals[planet.id]}
                </group>
              ) : null}
            </BasePlanet>
          </group>
        );
      })}
    </group>
  );
}