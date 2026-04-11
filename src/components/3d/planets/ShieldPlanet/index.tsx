"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SHIELD_SKIN } from "./skins";

// Pre-allocated vectors — zero GC in render loop
const _scale = new THREE.Vector3();

export default function ShieldPlanet() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringEquatorialRef = useRef<THREE.Mesh>(null);
  const ringInnerRef = useRef<THREE.Mesh>(null);
  const ringOuterRef = useRef<THREE.Mesh>(null);
  const auraRef = useRef<THREE.Mesh>(null);

  const ringEquatorialMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: SHIELD_SKIN.ringEquatorialColor,
        transparent: true,
        opacity: SHIELD_SKIN.ringEquatorialOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  const ringInnerMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: SHIELD_SKIN.ringInnerColor,
        transparent: true,
        opacity: SHIELD_SKIN.ringInnerOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  const ringOuterMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: SHIELD_SKIN.ringOuterColor,
        transparent: true,
        opacity: SHIELD_SKIN.ringOuterOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  const auraMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: SHIELD_SKIN.auraColor,
        transparent: true,
        opacity: SHIELD_SKIN.auraOpacity,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * SHIELD_SKIN.coreRotateSpeed;
      // Subtle emissive pulse — security heartbeat
      const mat = coreRef.current.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity =
        SHIELD_SKIN.coreEmissiveIntensity *
        (0.7 + 0.3 * Math.sin(t * SHIELD_SKIN.pulseSpeed));
    }

    if (ringEquatorialRef.current) {
      ringEquatorialRef.current.rotation.z += delta * SHIELD_SKIN.ringEquatorialSpeed;
    }

    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.x += delta * SHIELD_SKIN.ringInnerSpeed;
      ringInnerRef.current.rotation.y += delta * SHIELD_SKIN.ringInnerSpeed * 0.5;
    }

    if (ringOuterRef.current) {
      ringOuterRef.current.rotation.y += delta * SHIELD_SKIN.ringOuterSpeed;
      ringOuterRef.current.rotation.z += delta * SHIELD_SKIN.ringOuterSpeed * 0.7;
    }

    if (auraRef.current) {
      // Force-field breathing — scale ±2% at pulseSpeed
      const breathe = 1 + 0.02 * Math.sin(t * SHIELD_SKIN.pulseSpeed * 1.3);
      _scale.setScalar(breathe);
      auraRef.current.scale.copy(_scale);
    }
  });

  return (
    <group>
      {/* Titanium-carbon core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color={SHIELD_SKIN.coreColor}
          emissive={SHIELD_SKIN.coreEmissive}
          emissiveIntensity={SHIELD_SKIN.coreEmissiveIntensity}
          metalness={SHIELD_SKIN.metalness}
          roughness={SHIELD_SKIN.roughness}
          clearcoat={SHIELD_SKIN.clearcoat}
          clearcoatRoughness={SHIELD_SKIN.clearcoatRoughness}
          envMapIntensity={SHIELD_SKIN.envMapIntensity}
        />
      </mesh>

      {/* Equatorial electromagnetic ring */}
      <mesh ref={ringEquatorialRef} material={ringEquatorialMat}>
        <torusGeometry
          args={[
            SHIELD_SKIN.ringEquatorialRadius,
            SHIELD_SKIN.ringEquatorialTubeRadius,
            16,
            200,
          ]}
        />
      </mesh>

      {/* Tilted inner shield ring */}
      <mesh
        ref={ringInnerRef}
        material={ringInnerMat}
        rotation={[Math.PI / 3, 0, Math.PI / 5]}
      >
        <torusGeometry
          args={[
            SHIELD_SKIN.ringInnerRadius,
            SHIELD_SKIN.ringInnerTubeRadius,
            16,
            180,
          ]}
        />
      </mesh>

      {/* Outer sentinel ring — slow drift */}
      <mesh
        ref={ringOuterRef}
        material={ringOuterMat}
        rotation={[Math.PI / 7, Math.PI / 4, 0]}
      >
        <torusGeometry
          args={[
            SHIELD_SKIN.ringOuterRadius,
            SHIELD_SKIN.ringOuterTubeRadius,
            16,
            220,
          ]}
        />
      </mesh>

      {/* Force-field aura — breathing sphere (BackSide for inward glow) */}
      <mesh ref={auraRef} material={auraMat}>
        <sphereGeometry args={[1.65, 32, 32]} />
      </mesh>
    </group>
  );
}
