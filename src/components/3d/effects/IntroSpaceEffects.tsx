"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function IntroSpaceEffects() {
  const starsRef = useRef<THREE.Points>(null);
  const starsCount = 7000;

  // إنشاء هندسة النجوم مرة واحدة
  const starGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3000;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    // حركة هادئة جداً وثابتة نحوك (كما في الفيديو تماماً)
    if (starsRef.current) {
      const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starsCount; i++) {
        positions[i * 3 + 2] += 1.5; // سرعة بطيئة وراقية
        
        // إعادة التدوير من الخلف لضمان استمرار الفضاء
        if (positions[i * 3 + 2] > 500) {
          positions[i * 3 + 2] = -2500;
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={starsRef} geometry={starGeo}>
      {/* نجوم بيضاء نقية وصغيرة الحجم */}
      <pointsMaterial 
        color="#ffffff" 
        size={1.8} 
        transparent={true} 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}