"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BackgroundStarsProps {
  targetSpeed?: number;
  starCount?: number;
}

export default function BackgroundStars({ targetSpeed = 0.5, starCount = 8000 }: BackgroundStarsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // السرعة المبدئية هادية
  const currentSpeed = useRef(0.5); 

  const particles = useMemo(() => {
    const temp = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 2000;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    return temp;
  }, [starCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // 🛑 فرامل ناعمة جداً: تنزل بالسرعة بهدوء شديد
    currentSpeed.current = THREE.MathUtils.lerp(currentSpeed.current, targetSpeed, delta * 1.0);
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < starCount; i++) {
      // 🛑 السحر هنا: قللنا قوة الدفع من 300 لـ 50 لحركة واقعية، فخمة ومريحة للعين
      positions[i * 3 + 2] += currentSpeed.current * (delta * 50); 
      
      if (positions[i * 3 + 2] > 200) {
        positions[i * 3 + 2] = -1800;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
