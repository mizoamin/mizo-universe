"use client";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SunCore() {
  const sunRef = useRef<THREE.Mesh>(null);

  // 🌀 دوران يعتمد على الـ delta لضمان استقرار السرعة على أي جهاز
  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 💡 مصدر الضوء المركزي (PointLight) 
          يغطي المجرة بالكامل ويرمي ظلال واقعية
      */}
      <pointLight
        color="#ffcc88"
        intensity={500}
        distance={1000}
        decay={1.5}
        position={[0, 0, 0]}
        castShadow
      />

      {/* ☀️ قلب الشمس الحي (Distortion Plasma) 
          دقة 64 ممتازة للأداء، ومادة الـ Distort تعطي إحساس الغليان
      */}
      <Sphere ref={sunRef} args={[3, 64, 64]}>
        <MeshDistortMaterial
          color="#ffb300"
          emissive="#ff7a00"
          emissiveIntensity={4} // تم ضبط القوة لتتكامل مع الكاميرا الجديدة
          roughness={0.15}
          metalness={0.05}
          distort={0.3}
          speed={2}
          toneMapped={false} // 👈 التريكة المعمارية: يمنع بهتان لون البلازما
        />
      </Sphere>

      {/* 🌟 الهالة المضيئة (Glow Halo) 
          تأثير سينمائي بـ AdditiveBlending ولا يستهلك أداء
      */}
      <Sphere args={[4.2, 32, 32]}>
        <meshBasicMaterial
          color="#ffae00"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}