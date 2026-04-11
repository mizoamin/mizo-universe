"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// 👈 استيراد العقل المدبر والأنواع
import { useExperience } from "../../../engine/experienceStore";
import { PlanetId } from "../../../config/planetMetadata";

export type BasePlanetProps = {
  id: PlanetId;
  name: string;
  color: string;
  orbitRadius: number;
  size: number;
  orbitSpeed: number;
  onPlanetFocus?: (data: { name: string; position: THREE.Vector3 }) => void;
  children?: React.ReactNode; // 👈 الإضافة المعمارية الأهم: استقبال المجسم البصري
};

export default function BasePlanet({
  id,
  name,
  color,
  orbitRadius,
  size,
  orbitSpeed,
  onPlanetFocus,
  children,
}: BasePlanetProps) {
  const orbitGroupRef = useRef<THREE.Group>(null);
  const innerPlanetRef = useRef<THREE.Group>(null); // 👈 للتحكم في دوران المجسم حول نفسه
  const currentOrbitAngle = useRef(Math.random() * Math.PI * 2);

  // قراءة الحالة من العقل المدبر
  const { mode, activePlanet, setMode, setPlanet } = useExperience();
  const isActive = activePlanet === id;

  // 🎯 نقطة الهبوط السفلية كمنصة
  const targetDescentY = -size * 3.5;

  // 🌟 اللمعة السينمائية (نحتفظ بها كبديل مؤقت للكواكب التي لم نصممها بعد)
  const fresnelMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) } },
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
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
  }, [color]);

  // ⚙️ محرك الفيزياء والحركة (لم يتم المساس بعبقريته)
  useFrame((state, delta) => {
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
      orbitGroupRef.current.position.y = THREE.MathUtils.lerp(
        orbitGroupRef.current.position.y,
        targetY,
        smoothFactor
      );
    }

    // دوران الكوكب الداخلي حول نفسه
    if (innerPlanetRef.current) {
      innerPlanetRef.current.rotation.y += delta * 0.2;
    }
  });

  // 🖱️ نظام الضغط السينمائي المدمج
  const handleClick = (e: any) => {
    e.stopPropagation();

    if (!isActive || mode === "free") {
      if (onPlanetFocus && orbitGroupRef.current) {
        const worldPos = orbitGroupRef.current.position.clone();
        worldPos.y = 0; 
        onPlanetFocus({ name, position: worldPos });
      }
      setPlanet(id);
      setMode("approach");
    } else if (mode === "approach") {
      setMode("isolation");
    } else if (mode === "isolation") {
      setMode("enter");
    }
  };

  return (
    <group ref={orbitGroupRef}>
      {/* 🎯 Hitbox مخفي لتسهيل الضغط */}
      <mesh
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[size * 3, 32, 32]} />
        <meshBasicMaterial visible={false} />
      </mesh>

      {/* 🪐 المجسم البصري للكوكب (يدور حول نفسه) */}
      <group ref={innerPlanetRef}>
        {children ? (
          children // 👈 لو صممنا الكوكب، هيعرض التصميم الجديد
        ) : (
          /* 👈 طوق النجاة: لو لسه مصممناش الكوكب، يعرض الشكل الكلاسيكي بتاعك */
          <group>
            <mesh>
              <sphereGeometry args={[size, 64, 64]} />
              <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
            </mesh>
            <mesh material={fresnelMaterial}>
              <sphereGeometry args={[size * 1.15, 64, 64]} />
            </mesh>
          </group>
        )}
      </group>

      {/* 🏷️ بطاقة اسم الكوكب */}
      {mode !== "enter" && (
        <Html
          position={[0, size + 1.5, 0]}
          center
          distanceFactor={15}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
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
              transition: "opacity 0.5s",
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}