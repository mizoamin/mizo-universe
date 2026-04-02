"use client";

/**
 * ContactPlanet — Neural Communication Hub
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. FROSTED-GLASS CORE: MeshPhysicalMaterial shell (transmission 0.85,
 *    iridescence 0.45, ior 1.52) with inner Neural Core that doubles
 *    emissiveIntensity on hover.
 *
 * 2. SOCIAL ORBIT: 9 social icons distributed on an elliptical orbit
 *    (radiusX: 2.6, radiusZ: 2.2). useFrame rotation at delta * 0.015.
 *    Spring physics for hover scale (stiffness: 300, damping: 15, mass: 0.8).
 *
 * 3. DATA FIBER FILAMENTS: TubeGeometry along CatmullRomCurve3 per icon.
 *    UV-driven pulse shader for "data packets" travelling to/from the core.
 *
 * 4. DATA BURST: 3-phase sequence on core click:
 *    Charge (core ramp) → Burst (200-particle shockwave ring) → Settle.
 *
 * 5. CINEMATIC LIGHTING: Environment "city" + 3-point rig (SpotLight key,
 *    PointLight fill, cyan DirectionalLight rim).
 *
 * 6. ZERO GSAP: All animation via useFrame lerps/springs + Framer Motion.
 *    Pre-allocated Vector3/Color — ZERO allocations per frame.
 */

import { useRef, useMemo, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Sphere, Stars, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

import {
  PALETTE,
  SHELL_MATERIAL,
  CORE_MATERIAL,
  CORE_EMISSIVE_IDLE,
  CORE_EMISSIVE_HOVER,
  SPRING,
  ICON_HOVER_SCALE,
  ORBIT,
  BURST,
} from "./skins";
import { useDeviceStore } from "@/engine/deviceStore";

// ─── Pre-allocated objects — ZERO allocations in useFrame ─────────────────────

const _color = new THREE.Color();
const _vec3 = new THREE.Vector3();

// ─── Social Link Data ─────────────────────────────────────────────────────────

interface SocialLink {
  name: string;
  url: string;
  icon: string; // SVG path (viewBox 0 0 24 24)
  color: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/mizoamin/", color: "#E4405F", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "Facebook", url: "https://www.facebook.com/24mizoamin/", color: "#1877F2", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "X", url: "https://x.com/mizoamin24", color: "#FFFFFF", icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z" },
  { name: "Threads", url: "https://www.threads.com/@mizoamin", color: "#FFFFFF", icon: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.1-1.137 3.428-1.165 1.08-.022 2.071.142 2.943.477l.002-.037c-.04-1.612-.478-2.708-1.343-3.353-.783-.582-1.92-.875-3.39-.875h-.022c-1.25.008-2.28.32-3.058.928l-1.255-1.58C8.185 2.545 9.585 2.09 11.27 2.074h.028c1.943.012 3.474.478 4.551 1.388 1.127.951 1.717 2.368 1.766 4.224.385.183.744.392 1.073.625 1.02.72 1.77 1.672 2.227 2.83.764 1.933.722 4.56-1.109 6.346-1.803 1.76-4.082 2.477-7.167 2.502h-.002zM11.94 14.886c-.865.02-1.53.205-1.976.548-.478.368-.663.834-.636 1.326.04.73.552 1.395 1.404 1.818.607.302 1.378.464 2.17.42 1.11-.06 1.96-.457 2.53-1.183.444-.567.745-1.336.892-2.282-.813-.34-1.752-.528-2.794-.528-.524 0-1.058.032-1.59.119v-.238z" },
  { name: "TikTok", url: "https://www.tiktok.com/@mizo_amin", color: "#00F2EA", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { name: "Snapchat", url: "https://www.snapchat.com/@mizo_amin", color: "#FFFC00", icon: "M12.017.063c2.59.02 4.885 1.246 6.23 3.18.87 1.24 1.305 2.77 1.305 4.582 0 .48-.03.97-.09 1.47-.046.382-.103.765-.17 1.148.3.138.622.207.957.207.25 0 .503-.044.753-.133.178-.063.356-.095.533-.095.34 0 .63.12.87.36.24.24.36.54.36.9 0 .56-.3 1-.9 1.32-.32.178-.66.31-1.02.4-.36.088-.72.16-1.08.218-.22.035-.36.07-.42.1-.14.09-.24.26-.28.52-.04.26.12.58.46.98.06.08.15.178.26.3 1.04 1.14 1.76 2.08 2.16 2.82.14.26.22.52.22.78 0 .48-.24.88-.73 1.18-.46.29-1.05.48-1.76.57-.19.02-.36.07-.5.15-.14.08-.24.2-.3.36-.06.16-.12.34-.19.52-.07.18-.16.34-.27.48-.11.14-.26.25-.45.33-.19.08-.42.12-.69.12-.2 0-.42-.02-.67-.06-.25-.04-.54-.1-.87-.18-.48-.12-.87-.18-1.18-.18-.14 0-.37.02-.69.06-.32.04-.69.12-1.11.24-.34.1-.64.16-.9.2-.26.04-.5.06-.73.06-.28 0-.52-.04-.72-.12-.2-.08-.36-.19-.48-.33-.12-.14-.21-.3-.28-.48-.07-.18-.13-.36-.19-.52-.08-.2-.18-.33-.32-.4-.14-.08-.32-.13-.56-.16-.7-.08-1.28-.27-1.74-.56-.46-.3-.7-.69-.7-1.18 0-.26.08-.52.24-.78.4-.74 1.12-1.68 2.16-2.82.11-.12.19-.22.25-.3.34-.4.5-.72.46-.98-.04-.26-.13-.43-.28-.52-.06-.03-.2-.07-.42-.1-.36-.06-.72-.13-1.08-.22-.36-.09-.7-.22-1.02-.4-.6-.32-.9-.76-.9-1.32 0-.36.12-.66.36-.9.24-.24.53-.36.87-.36.17 0 .35.03.53.1.25.09.5.13.75.13.34 0 .66-.07.96-.21-.07-.38-.13-.77-.17-1.15-.06-.5-.09-.99-.09-1.47 0-1.81.44-3.34 1.31-4.58C7.13 1.31 9.43.082 12.017.063z" },
  { name: "LinkedIn", url: "https://qa.linkedin.com/in/mizo-amin", color: "#0A66C2", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mizo_Amin", color: "#CCCCCC", icon: "M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.991-1.532.016-.45-1.16-1.382-3.882-2.072-5.848-.608-1.733-1.241-3.63-1.885-5.516-.287-.837-.754-.773-1.191-.037-.53.888-.908 1.756-1.377 2.748-.153.326-.442.155-.442.155L0 9.397c.007-.012 1.09-2.238 1.662-3.168.678-1.103 1.438-1.233 2.127-.122.89 1.434 1.73 3.736 2.398 5.506 1.222-2.496 2.478-5.208 2.724-5.672.37-.697.975-.696 1.384.037.696 1.248 2.833 6.005 3.774 7.904.862-2.463 2.48-6.876 2.668-7.22.413-.758 1.047-.932 1.63-.204.82 1.024 1.633 2.66 1.633 2.66l-.725.968s-.472-.817-.914-1.544c-.28-.46-.723-.536-1.074.176-.437.89-2.177 5.58-2.917 7.583-.536 1.453-1.1 1.526-1.61.087-.548-1.544-2.175-4.916-2.75-6.279z" },
  { name: "Google", url: "http://g.co/kgs/VDbLGD", color: "#4285F4", icon: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" },
];

// ─── Data Fiber Pulse Shader ──────────────────────────────────────────────────

const fiberVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fiberFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uActive;

  varying vec2 vUv;

  void main() {
    // Base fiber opacity — thin glow line
    float base = 0.15 + 0.1 * uActive;

    // Data packet pulse — moves along the fiber
    float packetSpeed = 1.5;
    float packetWidth = 0.08;
    float packet = smoothstep(packetWidth, 0.0,
      abs(fract(vUv.x - uTime * packetSpeed) - 0.5) - 0.02
    );

    // Second packet offset for visual density
    float packet2 = smoothstep(packetWidth, 0.0,
      abs(fract(vUv.x - uTime * packetSpeed + 0.5) - 0.5) - 0.02
    ) * 0.6;

    float brightness = base + (packet + packet2) * (0.6 + 0.4 * uActive);
    float alpha = brightness * (0.4 + 0.6 * smoothstep(0.5, 0.0, abs(vUv.y - 0.5)));

    gl_FragColor = vec4(uColor * brightness * 2.0, alpha);
  }
`;

// ─── Spring helper (per-frame, zero allocation) ───────────────────────────────

function springLerp(
  current: number,
  target: number,
  velocity: { value: number },
  delta: number
): number {
  const dt = Math.min(delta, 0.05); // cap for frame drops
  const displacement = current - target;
  const springForce = -SPRING.stiffness * displacement;
  const dampForce = -SPRING.damping * velocity.value;
  const accel = (springForce + dampForce) / SPRING.mass;
  velocity.value += accel * dt;
  return current + velocity.value * dt;
}

// ─── Contact Core ─────────────────────────────────────────────────────────────

function ContactCore({ hovered, burstPhase }: { hovered: boolean; burstPhase: number }) {
  const shellRef = useRef<THREE.Mesh>(null);
  const coreMatRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((_, delta) => {
    if (shellRef.current) shellRef.current.rotation.y += 0.002;

    if (coreMatRef.current) {
      const targetIntensity = hovered ? CORE_EMISSIVE_HOVER : CORE_EMISSIVE_IDLE;
      // Burst phase ramps core glow further
      const burstBoost = burstPhase > 0 ? 1.5 + burstPhase * 2.0 : 0;
      coreMatRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        coreMatRef.current.emissiveIntensity,
        targetIntensity + burstBoost,
        1 - Math.pow(0.001, delta)
      );
    }
  });

  return (
    <group>
      {/* Outer frosted-glass shell */}
      <Sphere ref={shellRef} args={[1.0, 128, 128]}>
        <meshPhysicalMaterial
          color={SHELL_MATERIAL.color}
          emissive={SHELL_MATERIAL.emissive}
          emissiveIntensity={SHELL_MATERIAL.emissiveIntensity}
          metalness={SHELL_MATERIAL.metalness}
          roughness={SHELL_MATERIAL.roughness}
          transmission={SHELL_MATERIAL.transmission}
          thickness={SHELL_MATERIAL.thickness}
          ior={SHELL_MATERIAL.ior}
          iridescence={SHELL_MATERIAL.iridescence}
          iridescenceIOR={SHELL_MATERIAL.iridescenceIOR}
          iridescenceThicknessRange={SHELL_MATERIAL.iridescenceThicknessRange}
          clearcoat={SHELL_MATERIAL.clearcoat}
          clearcoatRoughness={SHELL_MATERIAL.clearcoatRoughness}
          attenuationColor={SHELL_MATERIAL.attenuationColor}
          attenuationDistance={SHELL_MATERIAL.attenuationDistance}
          envMapIntensity={SHELL_MATERIAL.envMapIntensity}
          transparent={SHELL_MATERIAL.transparent}
        />
      </Sphere>

      {/* Inner Neural Core — visible through shell */}
      <Sphere args={[0.55, 64, 64]}>
        <meshStandardMaterial
          ref={coreMatRef}
          color={CORE_MATERIAL.color}
          emissive={CORE_MATERIAL.emissive}
          emissiveIntensity={CORE_MATERIAL.emissiveIntensity}
          roughness={CORE_MATERIAL.roughness}
          metalness={CORE_MATERIAL.metalness}
          transparent={CORE_MATERIAL.transparent}
          opacity={CORE_MATERIAL.opacity}
        />
      </Sphere>

      {/* Core illumination */}
      <pointLight color={PALETTE.signalCyan} intensity={4} distance={8} decay={2} />
    </group>
  );
}

// ─── Data Fiber Filament (core → icon) ────────────────────────────────────────

function DataFiber({
  target,
  active,
}: {
  target: THREE.Vector3;
  active: boolean;
}) {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { geometry, uniforms } = useMemo(() => {
    // CatmullRomCurve3 from origin to target with a midpoint pull toward Y-axis
    const mid = target.clone().multiplyScalar(0.5);
    mid.y += 0.4 + Math.random() * 0.3;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      mid,
      target,
    ]);
    const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.012, 6, false);
    const u = {
      uColor: { value: new THREE.Color(PALETTE.signalCyan) },
      uTime: { value: 0 },
      uActive: { value: 0 },
    };
    return { geometry: tubeGeo, uniforms: u };
  }, [target]);

  useFrame(({ clock }, delta) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.elapsedTime;
    const targetVal = active ? 1.0 : 0.0;
    matRef.current.uniforms.uActive.value = THREE.MathUtils.lerp(
      matRef.current.uniforms.uActive.value,
      targetVal,
      1 - Math.pow(0.01, delta)
    );
  });

  return (
    <mesh geometry={geometry}>
      <shaderMaterial
        ref={matRef}
        vertexShader={fiberVertexShader}
        fragmentShader={fiberFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ─── Social Icon Node ─────────────────────────────────────────────────────────

interface IconNodeProps {
  link: SocialLink;
  position: [number, number, number];
  hovered: boolean;
  onHover: (name: string | null) => void;
}

function SocialIconNode({ link, position, hovered, onHover }: IconNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const currentScale = useRef(1);
  const scaleVelocity = useRef({ value: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = hovered ? ICON_HOVER_SCALE : 1;
    currentScale.current = springLerp(currentScale.current, target, scaleVelocity.current, delta);
    groupRef.current.scale.setScalar(currentScale.current);
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Glowing sphere base */}
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); onHover(link.name); document.body.style.cursor = "pointer"; }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); document.body.style.cursor = "auto"; }}
        onClick={(e) => { e.stopPropagation(); window.open(link.url, "_blank", "noopener,noreferrer"); }}
      >
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial
          color={hovered ? link.color : PALETTE.signalCyan}
          emissive={hovered ? link.color : PALETTE.fiberGlow}
          emissiveIntensity={hovered ? 2.0 : 0.6}
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Small halo ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.22, 0.26, 32]} />
        <meshBasicMaterial
          color={hovered ? link.color : PALETTE.signalCyan}
          transparent
          opacity={hovered ? 0.5 : 0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Icon label — Html overlay */}
      <Html
        center
        distanceFactor={8}
        style={{ pointerEvents: "none", userSelect: "none" }}
        position={[0, 0.32, 0]}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}>
          <svg
            viewBox="0 0 24 24"
            width={16}
            height={16}
            fill={hovered ? link.color : "rgba(255,255,255,0.65)"}
            style={{ transition: "fill 0.2s ease", filter: hovered ? `drop-shadow(0 0 4px ${link.color})` : "none" }}
          >
            <path d={link.icon} />
          </svg>
          {hovered && (
            <span style={{
              color: link.color,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              textShadow: `0 0 8px ${link.color}80`,
            }}>{link.name}</span>
          )}
        </div>
      </Html>
    </group>
  );
}

// ─── Social Orbit (elliptical, useFrame-driven) ──────────────────────────────

function SocialOrbit({ hoveredIcon, onHover }: { hoveredIcon: string | null; onHover: (n: string | null) => void }) {
  const orbitRef = useRef<THREE.Group>(null);

  // Pre-compute icon orbital positions once (avoid per-render object churn)
  const orbitPositions = useMemo(() => {
    return SOCIAL_LINKS.map((_, i) => {
      const angle = (i / SOCIAL_LINKS.length) * Math.PI * 2;
      const x = Math.cos(angle) * ORBIT.radiusX;
      const y = Math.sin(angle * 3) * 0.15;
      const z = Math.sin(angle) * ORBIT.radiusZ;
      return [x, y, z] as [number, number, number];
    });
  }, []);

  useFrame(({ clock }, delta) => {
    if (!orbitRef.current) return;
    orbitRef.current.rotation.y += delta * ORBIT.rotationSpeed;
  });

  return (
    <group ref={orbitRef}>
      {/* Orbit ring visual (subtle) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[
          Math.min(ORBIT.radiusX, ORBIT.radiusZ) - 0.02,
          Math.max(ORBIT.radiusX, ORBIT.radiusZ) + 0.02,
          64,
        ]} />
        <meshBasicMaterial
          color={PALETTE.signalCyan}
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {SOCIAL_LINKS.map((link, i) => {
        return (
          <SocialIconNode
            key={link.name}
            link={link}
            position={orbitPositions[i]}
            hovered={hoveredIcon === link.name}
            onHover={onHover}
          />
        );
      })}
    </group>
  );
}

// ─── Data Burst Effect (3-phase particle ring) ───────────────────────────────

function DataBurstEffect({ active, particleCount }: { active: boolean; particleCount: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const phaseRef = useRef<"idle" | "charge" | "burst" | "settle">("idle");
  const timerRef = useRef(0);
  const ringRef = useRef<THREE.Mesh>(null);

  // Pre-generate particle positions on a ring
  const { positions, velocities } = useMemo(() => {
    const count = particleCount;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 0.6 + Math.random() * 0.2;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      pos[i * 3 + 2] = Math.sin(angle) * r;
      // Velocity: outward radial
      vel[i * 3] = Math.cos(angle) * (3 + Math.random() * 2);
      vel[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      vel[i * 3 + 2] = Math.sin(angle) * (3 + Math.random() * 2);
    }
    return { positions: pos, velocities: vel };
  }, [particleCount]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return geo;
  }, [positions]);

  // Trigger burst when active goes true
  const prevActive = useRef(false);

  useFrame((_, delta) => {
    // Detect rising edge
    if (active && !prevActive.current) {
      phaseRef.current = "charge";
      timerRef.current = 0;
      // Reset particle positions
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      posAttr.array.set(positions);
      posAttr.needsUpdate = true;
    }
    prevActive.current = active;

    if (phaseRef.current === "idle") return;

    timerRef.current += delta;
    const t = timerRef.current;

    if (phaseRef.current === "charge" && t >= BURST.chargeDuration) {
      phaseRef.current = "burst";
      timerRef.current = 0;
    } else if (phaseRef.current === "burst" && t >= BURST.burstDuration) {
      phaseRef.current = "settle";
      timerRef.current = 0;
    } else if (phaseRef.current === "settle" && t >= BURST.settleDuration) {
      phaseRef.current = "idle";
    }

    // Animate particles outward during burst + settle
    if (phaseRef.current === "burst" || phaseRef.current === "settle") {
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const damping = phaseRef.current === "settle" ? 0.95 : 1.0;
      for (let i = 0; i < particleCount; i++) {
        arr[i * 3] += velocities[i * 3] * delta * damping;
        arr[i * 3 + 1] += velocities[i * 3 + 1] * delta * damping;
        arr[i * 3 + 2] += velocities[i * 3 + 2] * delta * damping;
      }
      posAttr.needsUpdate = true;
    }

    // Update opacity
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      if (phaseRef.current === "charge") {
        mat.opacity = 0.4 + (t / BURST.chargeDuration) * 0.6;
        mat.size = 0.03 + (t / BURST.chargeDuration) * 0.02;
      } else if (phaseRef.current === "burst") {
        mat.opacity = 1.0;
        mat.size = 0.06;
      } else if (phaseRef.current === "settle") {
        mat.opacity = Math.max(0, 1.0 - t / BURST.settleDuration);
        mat.size = 0.06 * (1 - t / BURST.settleDuration * 0.5);
      }
    }

    // Shockwave ring scale
    if (ringRef.current) {
      if (phaseRef.current === "burst") {
        ringRef.current.visible = true;
        const progress = timerRef.current / BURST.burstDuration;
        ringRef.current.scale.setScalar(1 + progress * 4);
        (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 * (1 - progress);
      } else if (phaseRef.current === "settle") {
        const progress = timerRef.current / BURST.settleDuration;
        ringRef.current.scale.setScalar(5 + progress * 2);
        (ringRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.15 * (1 - progress));
      } else {
        ringRef.current.visible = false;
      }
    }
  });

  return (
    <group>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          color={PALETTE.burstMint}
          size={0.03}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Shockwave ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} visible={false}>
        <ringGeometry args={[0.8, 0.85, 64]} />
        <meshBasicMaterial
          color={PALETTE.signalCyan}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// ─── Cinematic Lighting Rig ──────────────────────────────────────────────────

function ContactLightingRig() {
  return (
    <>
      {/* HDRI environment — urban reflections */}
      <Environment preset="city" background={false} environmentIntensity={1.0} />

      {/* KEY — SpotLight from top-right, VSM soft shadow */}
      <spotLight
        color="#ffffff"
        intensity={60}
        position={[5, 7, 4]}
        angle={0.5}
        penumbra={0.8}
        decay={1.5}
        distance={25}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />

      {/* FILL — soft point light from lower-left */}
      <pointLight
        color="#ffffff"
        intensity={2}
        position={[-3, -1, 5]}
        distance={15}
        decay={2}
      />

      {/* RIM — cyan directional backlight for edge separation */}
      <directionalLight
        color={PALETTE.signalCyan}
        intensity={3.5}
        position={[-4, 5, -7]}
      />
    </>
  );
}

// ─── Status Terminal ──────────────────────────────────────────────────────────

function StatusTerminal() {
  return (
    <Html
      transform
      occlude
      position={[3.2, 1.5, -1.5]}
      rotation={[0, -0.35, 0]}
      scale={0.45}
    >
      <div style={{
        width: 260,
        background: "rgba(10,22,40,0.94)",
        border: `1px solid ${PALETTE.signalCyan}30`,
        borderRadius: 12,
        padding: "14px 16px",
        fontFamily: "'Courier New', monospace",
        fontSize: 11,
        lineHeight: 1.8,
        color: PALETTE.signalCyan,
        boxShadow: `0 0 30px ${PALETTE.signalCyan}15`,
        pointerEvents: "none",
      }}>
        {/* Title bar dots */}
        <div style={{ display: "flex", gap: 5, marginBottom: 10, paddingBottom: 8, borderBottom: `1px solid ${PALETTE.signalCyan}20` }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: "auto", fontSize: 9, opacity: 0.4, color: "#fff" }}>neural-hub.sh</span>
        </div>
        <div style={{ opacity: 0.6 }}>$ neural-hub status</div>
        <div style={{ color: "#28c840" }}>✓ Communication array online</div>
        <div style={{ opacity: 0.6 }}>$ scan --channels</div>
        <div><span style={{ color: PALETTE.burstMint }}>→</span> 9 active social fibers</div>
        <div style={{ opacity: 0.6 }}>$ ping --global</div>
        <div><span style={{ color: "#28c840" }}>✓</span> All nodes responding</div>
        <div style={{ opacity: 0.6 }}>$ burst --status</div>
        <div><span style={{ color: PALETTE.signalCyan }}>READY</span><span style={{ opacity: 0.4 }}> — click core to fire</span></div>
        <div style={{ marginTop: 4 }}>
          <span style={{ opacity: 0.6 }}>$ </span>
          <span style={{ display: "inline-block", width: 7, height: 14, background: PALETTE.signalCyan, animation: "neuralBlink 1s step-end infinite", verticalAlign: "middle" }} />
        </div>
        <style>{`@keyframes neuralBlink { 50% { opacity: 0; } }`}</style>
      </div>
    </Html>
  );
}

// ─── Contact Info Panel (shown on core click) ─────────────────────────────────

function ContactInfoPanel({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Html center style={{ pointerEvents: "none", width: 0, height: 0 }} zIndexRange={[200, 400]}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="contact-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              bottom: "max(40px, env(safe-area-inset-bottom, 20px))",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(480px, 90vw)",
              borderRadius: 16,
              overflow: "hidden",
              background: `linear-gradient(145deg, rgba(10,22,40,0.94) 0%, ${PALETTE.deepBlack}f8 100%)`,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: `1px solid ${PALETTE.signalCyan}30`,
              boxShadow: `0 0 50px ${PALETTE.signalCyan}20, inset 0 0 20px ${PALETTE.neuralNavy}`,
              zIndex: 500,
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.25rem 1.5rem 0.75rem",
              borderBottom: `1px solid ${PALETTE.signalCyan}15`,
            }}>
              <div>
                <p style={{
                  color: PALETTE.signalCyan,
                  fontSize: 9,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 4,
                  margin: 0,
                }}>Neural Communication Hub</p>
                <h3 style={{
                  color: PALETTE.hoverWhite,
                  fontSize: 18,
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}>Connect with Mizo Amin</h3>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 28,
                  cursor: "pointer",
                  lineHeight: 1,
                  padding: "4px 8px",
                }}
              >×</button>
            </div>

            {/* Social links grid */}
            <div style={{
              padding: "1rem 1.5rem 1.25rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 10px",
                    borderRadius: 10,
                    background: `${PALETTE.neuralNavy}cc`,
                    border: `1px solid ${PALETTE.signalCyan}18`,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <svg viewBox="0 0 24 24" width={14} height={14} fill={link.color} style={{ flexShrink: 0 }}>
                    <path d={link.icon} />
                  </svg>
                  <span style={{
                    color: PALETTE.hoverWhite,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div style={{
              padding: "0.75rem 1.5rem",
              borderTop: `1px solid ${PALETTE.signalCyan}10`,
              textAlign: "center",
            }}>
              <p style={{
                color: PALETTE.signalCyan,
                fontSize: 10,
                opacity: 0.5,
                margin: 0,
              }}>Click any icon in orbit · Open social channels directly</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export default function ContactPlanetVisual() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [coreHovered, setCoreHovered] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const tier = useDeviceStore((s) => s.tier);

  const budget = useMemo(() => {
    if (tier === "mobile") {
      return { burstParticles: 120, ambientStars: 220 };
    }
    if (tier === "tablet") {
      return { burstParticles: 160, ambientStars: 320 };
    }
    return { burstParticles: BURST.particleCount, ambientStars: 500 };
  }, [tier]);

  const handleCoreClick = useCallback(() => {
    // Trigger data burst + toggle panel
    setBurstActive(true);
    setShowPanel((v) => !v);
    // Reset burst after full cycle
    setTimeout(() => setBurstActive(false),
      (BURST.chargeDuration + BURST.burstDuration + BURST.settleDuration) * 1000
    );
  }, []);

  const handleClosePanel = useCallback(() => {
    setShowPanel(false);
  }, []);

  // Pre-compute fiber target positions (match orbit positions)
  const fiberTargets = useMemo(() => {
    return SOCIAL_LINKS.map((_, i) => {
      const angle = (i / SOCIAL_LINKS.length) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(angle) * ORBIT.radiusX,
        Math.sin(angle * 3) * 0.15,
        Math.sin(angle) * ORBIT.radiusZ
      );
    });
  }, []);

  return (
    <group>
      {/* Cinematic lighting */}
      <ContactLightingRig />

      {/* Ambient star field */}
      <Stars radius={14} depth={5} count={budget.ambientStars} factor={0.8} saturation={0.15} fade speed={0.2} />

      {/* Neural Core — click for burst + panel */}
      <group
        onClick={handleCoreClick}
        onPointerOver={() => setCoreHovered(true)}
        onPointerOut={() => setCoreHovered(false)}
      >
        <ContactCore hovered={coreHovered} burstPhase={burstActive ? 1 : 0} />
      </group>

      {/* Data Burst particle effect */}
      <DataBurstEffect active={burstActive} particleCount={budget.burstParticles} />

      {/* Data Fiber Filaments — core to each icon */}
      {fiberTargets.map((target, i) => (
        <DataFiber
          key={SOCIAL_LINKS[i].name}
          target={target}
          active={hoveredIcon === SOCIAL_LINKS[i].name}
        />
      ))}

      {/* Social Icon Orbit */}
      <SocialOrbit hoveredIcon={hoveredIcon} onHover={setHoveredIcon} />

      {/* Floating status terminal */}
      <StatusTerminal />

      {/* Contact info panel overlay */}
      <ContactInfoPanel visible={showPanel} onClose={handleClosePanel} />
    </group>
  );
}
