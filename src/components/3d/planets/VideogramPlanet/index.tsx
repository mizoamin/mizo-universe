"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { VIDEOGRAM_SKIN } from "./skins";

/* ── Pre-allocated objects (zero GC in render loop) ── */
const _color = new THREE.Color();

export default function VideogramPlanet() {
  const coreRef = useRef<THREE.Mesh>(null);
  const gridRingARef = useRef<THREE.Mesh>(null);
  const gridRingBRef = useRef<THREE.Mesh>(null);
  const reelRef = useRef<THREE.Mesh>(null);

  /* Grid panel material — additive blend for glitch aesthetic */
  const gridMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: VIDEOGRAM_SKIN.gridColor,
        transparent: true,
        opacity: VIDEOGRAM_SKIN.gridOpacity,
        blending: THREE.AdditiveBlending,
        wireframe: true,
      }),
    [],
  );

  /* Film-reel ring material */
  const reelMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: VIDEOGRAM_SKIN.reelColor,
        transparent: true,
        opacity: VIDEOGRAM_SKIN.reelOpacity,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    /* ── Core sphere: slow rotation + emissive pulse ── */
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * VIDEOGRAM_SKIN.rotSpeed;
      const pulse = 1 + Math.sin(t * VIDEOGRAM_SKIN.pulseSpeed) * 0.03;
      coreRef.current.scale.setScalar(pulse);

      const mat = coreRef.current.material as THREE.MeshPhysicalMaterial;
      const boost = 0.6 + Math.sin(t * VIDEOGRAM_SKIN.pulseSpeed) * 0.3;
      mat.emissiveIntensity = VIDEOGRAM_SKIN.coreEmissiveIntensity * boost;
    }

    /* ── Grid ring A: counter-rotate + glitch flicker ── */
    if (gridRingARef.current) {
      gridRingARef.current.rotation.z += delta * 0.7;
      gridRingARef.current.rotation.x += delta * 0.3;
      const glitch = Math.sin(t * VIDEOGRAM_SKIN.glitchSpeed) > 0.85 ? 0.15 : 0;
      gridMaterial.opacity = VIDEOGRAM_SKIN.gridOpacity + glitch;
    }

    /* ── Grid ring B: perpendicular rotation ── */
    if (gridRingBRef.current) {
      gridRingBRef.current.rotation.y += delta * 0.5;
      gridRingBRef.current.rotation.x -= delta * 0.4;
    }

    /* ── Film-reel outer ring: steady orbit ── */
    if (reelRef.current) {
      reelRef.current.rotation.z -= delta * 0.25;
    }

    /* ── Subtle hue shift on grid panels ── */
    _color
      .set(VIDEOGRAM_SKIN.gridEmissive)
      .offsetHSL(0, 0, Math.sin(t * 1.2) * 0.03);
    gridMaterial.color.copy(_color);
  });

  return (
    <group>
      {/* Chrome reflective core sphere */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color={VIDEOGRAM_SKIN.coreColor}
          emissive={VIDEOGRAM_SKIN.coreEmissive}
          emissiveIntensity={VIDEOGRAM_SKIN.coreEmissiveIntensity}
          metalness={VIDEOGRAM_SKIN.metalness}
          roughness={VIDEOGRAM_SKIN.roughness}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Glitch-grid wireframe ring A */}
      <mesh ref={gridRingARef} material={gridMaterial}>
        <torusGeometry args={[1.4, 0.06, 8, 64]} />
      </mesh>

      {/* Glitch-grid wireframe ring B (perpendicular) */}
      <mesh
        ref={gridRingBRef}
        material={gridMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[1.55, 0.04, 8, 64]} />
      </mesh>

      {/* Film-reel outer ring */}
      <mesh ref={reelRef} material={reelMaterial}>
        <ringGeometry args={[1.8, 1.88, 48]} />
      </mesh>
    </group>
  );
}
