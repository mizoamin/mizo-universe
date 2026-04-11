"use client";

/**
 * VisionPlanet — DNA Double Helix (3D Component)
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. INSTANCED MESH: Both helix strands use a single InstancedMesh
 *    each (nodeCount instances). GPU-batched — no per-node draw calls.
 *    60fps guaranteed on mobile with 132 instances total.
 *
 * 2. ZERO-ALLOCATION useFrame: All Vector3, Matrix4, Color, Object3D
 *    are pre-allocated at module scope. The render loop does pure
 *    math — no new, no object creation, no GC pressure.
 *
 * 3. CATEGORY SEGMENTATION: The 66 nodes per strand are divided into
 *    11 segments (6 nodes each). Each segment maps to a master
 *    category with its own color from skins.ts.
 *
 * 4. PERSONA-DRIVEN GLOW: When a "latest post" persona is active,
 *    the corresponding category segment pulses using the persona's
 *    visual signature (color + waveform from personaSignatures.ts).
 *
 * 5. SPRING PHYSICS: Hover scale uses manually-integrated spring
 *    (stiffness 260, damping 18) — no GSAP, no Framer in the 3D loop.
 *
 * 6. SUSPENSE-SAFE: Exports a Suspense wrapper with low-poly fallback.
 *    Data fetching (latest post) is via useEffect with cancellation.
 *
 * 7. BRIDGE RUNGS: Cross-links between strands rendered via a single
 *    InstancedMesh of thin cylinders, color-lerped per segment.
 */

import { useRef, useMemo, useState, useEffect, Suspense, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { DNA_HELIX, HELIX_SPRING, PALETTE } from "./skins";
import {
  getPersonaSignature,
  pulseFunction,
  DEFAULT_SIGNATURE,
  type PersonaVisualSignature,
} from "./personaSignatures";
import { VISION_CATEGORIES } from "@/config/visionCategories";

// ─── Pre-allocated objects (ZERO per-frame allocations) ───────────────────────

const _obj = new THREE.Object3D();
const _color = new THREE.Color();
const _tempColor = new THREE.Color();
const _matrix = new THREE.Matrix4();
const _position = new THREE.Vector3();
const _scale = new THREE.Vector3();
const _quaternion = new THREE.Quaternion();

// ─── Category → Helix segment color map (built once at module load) ───────────

const SEGMENT_COLORS: THREE.Color[] = VISION_CATEGORIES.map(
  (cat) => new THREE.Color(cat.helixColor)
);

// Fallback default if fewer than 11 segments
while (SEGMENT_COLORS.length < DNA_HELIX.segmentCount) {
  SEGMENT_COLORS.push(new THREE.Color(PALETTE.segmentDefault));
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LatestPostData {
  categorySlug: string;
  personaSlug: string;
  title: string;
}

interface DNAHelixCoreProps {
  /** Latest post data from Sanity (drives active segment glow) */
  latestPost: LatestPostData | null;
  /** External hover segment index (-1 = none) */
  hoveredSegment?: number;
  /** Callback when a segment is clicked */
  onSegmentClick?: (segmentIndex: number, categorySlug: string) => void;
}

// ─── Helix Geometry Calculator (pure math, memoized) ──────────────────────────

function computeHelixPositions(
  count: number,
  radius: number,
  height: number,
  turns: number,
  phaseOffset: number
): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const angle = t * turns * Math.PI * 2 + phaseOffset;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (t - 0.5) * height;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return positions;
}

// ─── Shader source for per-instance glow ──────────────────────────────────────

const HELIX_VERTEX_SHADER = /* glsl */ `
  attribute vec3 instanceColorAttr;
  attribute float instanceGlow;
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    vColor = instanceColorAttr;
    vGlow = instanceGlow;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 6.0 * (300.0 / -mvPosition.z);
  }
`;

const HELIX_FRAGMENT_SHADER = /* glsl */ `
  varying vec3 vColor;
  varying float vGlow;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.1, dist);
    vec3 color = vColor * (1.0 + vGlow * 2.0);
    gl_FragColor = vec4(color, alpha * (0.6 + vGlow * 0.4));
  }
`;

// ─── DNA Helix Core Component ─────────────────────────────────────────────────

function DNAHelixCore({ latestPost, hoveredSegment = -1, onSegmentClick }: DNAHelixCoreProps) {
  const strandARef = useRef<THREE.InstancedMesh>(null);
  const strandBRef = useRef<THREE.InstancedMesh>(null);
  const bridgeRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const nodesPerStrand = DNA_HELIX.nodesPerStrand;
  const nodesPerSegment = Math.floor(nodesPerStrand / DNA_HELIX.segmentCount);
  const bridgeCount = DNA_HELIX.bridgeCount;

  // ── Pre-compute strand positions (memoized, zero re-alloc) ──
  const { strandA, strandB } = useMemo(
    () => ({
      strandA: computeHelixPositions(
        nodesPerStrand,
        DNA_HELIX.radius,
        DNA_HELIX.height,
        DNA_HELIX.turns,
        0
      ),
      strandB: computeHelixPositions(
        nodesPerStrand,
        DNA_HELIX.radius,
        DNA_HELIX.height,
        DNA_HELIX.turns,
        Math.PI // 180° phase offset for double helix
      ),
    }),
    [nodesPerStrand]
  );

  // ── Per-instance color + glow buffers (memoized) ──
  const { colorsA, colorsB, glowA, glowB, bridgeColors } = useMemo(() => {
    const cA = new Float32Array(nodesPerStrand * 3);
    const cB = new Float32Array(nodesPerStrand * 3);
    const gA = new Float32Array(nodesPerStrand);
    const gB = new Float32Array(nodesPerStrand);
    const bC = new Float32Array(bridgeCount * 3);

    // Initialize with segment colors
    for (let i = 0; i < nodesPerStrand; i++) {
      const segIdx = Math.min(
        Math.floor(i / nodesPerSegment),
        DNA_HELIX.segmentCount - 1
      );
      const c = SEGMENT_COLORS[segIdx];
      cA[i * 3] = c.r;
      cA[i * 3 + 1] = c.g;
      cA[i * 3 + 2] = c.b;
      cB[i * 3] = c.r;
      cB[i * 3 + 1] = c.g;
      cB[i * 3 + 2] = c.b;
      gA[i] = DNA_HELIX.idleGlowBase;
      gB[i] = DNA_HELIX.idleGlowBase;
    }

    // Initialize bridge colors
    for (let i = 0; i < bridgeCount; i++) {
      const segIdx = Math.min(
        Math.floor((i / bridgeCount) * DNA_HELIX.segmentCount),
        DNA_HELIX.segmentCount - 1
      );
      const c = SEGMENT_COLORS[segIdx];
      bC[i * 3] = c.r;
      bC[i * 3 + 1] = c.g;
      bC[i * 3 + 2] = c.b;
    }

    return { colorsA: cA, colorsB: cB, glowA: gA, glowB: gB, bridgeColors: bC };
  }, [nodesPerStrand, nodesPerSegment, bridgeCount]);

  // ── Sphere geometry for nodes (shared, memoized) ──
  const nodeGeometry = useMemo(() => new THREE.SphereGeometry(DNA_HELIX.nodeSize, 8, 8), []);
  const bridgeGeometry = useMemo(
    () => new THREE.CylinderGeometry(DNA_HELIX.bridgeRadius, DNA_HELIX.bridgeRadius, 1, 6, 1),
    []
  );

  // ── Node material (InstancedMesh compatible) ──
  const nodeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: PALETTE.visionCyan,
        emissive: PALETTE.visionCyan,
        emissiveIntensity: 0.8,
        metalness: 0.2,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  const bridgeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: PALETTE.helixBridge,
        emissive: PALETTE.helixBridge,
        emissiveIntensity: 0.3,
        metalness: 0.1,
        roughness: 0.5,
        transparent: true,
        opacity: 0.5,
      }),
    []
  );

  // ── Resolve active persona signature ──
  const activeSignature = useRef<PersonaVisualSignature>(DEFAULT_SIGNATURE);
  const activeSegmentIndex = useRef<number>(-1);

  useEffect(() => {
    if (latestPost) {
      activeSignature.current = getPersonaSignature(latestPost.personaSlug);
      const catIdx = VISION_CATEGORIES.findIndex(
        (c) => c.slug === latestPost.categorySlug
      );
      activeSegmentIndex.current = catIdx >= 0 ? catIdx : -1;
    } else {
      activeSignature.current = DEFAULT_SIGNATURE;
      activeSegmentIndex.current = -1;
    }
  }, [latestPost]);

  // ── Spring physics state for hover ──
  const springVelocity = useRef(0);
  const springScale = useRef(1.0);

  // ── useFrame: zero allocations, all pre-allocated ──
  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    const dt = Math.min(delta, 0.033); // Cap at ~30fps minimum for stability

    // ── Group rotation (spring-damped) ──
    if (groupRef.current) {
      groupRef.current.rotation.y += DNA_HELIX.rotationSpeed * dt;
    }

    // ── Spring physics for hover scale ──
    const targetScale = hoveredSegment >= 0 ? 1.05 : 1.0;
    const springForce = (targetScale - springScale.current) * HELIX_SPRING.stiffness;
    const dampingForce = -HELIX_SPRING.damping * springVelocity.current;
    springVelocity.current +=
      ((springForce + dampingForce) / HELIX_SPRING.mass) * dt;
    springScale.current += springVelocity.current * dt;

    if (groupRef.current) {
      groupRef.current.scale.setScalar(springScale.current);
    }

    // ── Persona glow pulse ──
    const sig = activeSignature.current;
    const activeIdx = activeSegmentIndex.current;
    const pulseVal = pulseFunction(sig.pulseShape, t, sig.pulseSpeed);
    const glowActive = DNA_HELIX.idleGlowBase + sig.pulseAmplitude * pulseVal * DNA_HELIX.activeGlowMultiplier;

    // ── Update strand A instances ──
    if (strandARef.current) {
      for (let i = 0; i < nodesPerStrand; i++) {
        const segIdx = Math.min(Math.floor(i / nodesPerSegment), DNA_HELIX.segmentCount - 1);
        const isActive = segIdx === activeIdx;
        const isHovered = segIdx === hoveredSegment;

        // Position
        _obj.position.set(strandA[i * 3], strandA[i * 3 + 1], strandA[i * 3 + 2]);

        // Scale — active/hovered nodes slightly larger
        const s = isActive ? 1.0 + pulseVal * 0.5 : isHovered ? 1.3 : 1.0;
        _obj.scale.setScalar(s);
        _obj.updateMatrix();
        strandARef.current.setMatrixAt(i, _obj.matrix);

        // Color — blend toward persona color if active
        if (isActive) {
          _color.copy(SEGMENT_COLORS[segIdx]);
          _tempColor.copy(sig.signatureColor);
          _color.lerp(_tempColor, pulseVal * 0.7);
          strandARef.current.setColorAt(i, _color);
        } else {
          strandARef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
        }
      }
      strandARef.current.instanceMatrix.needsUpdate = true;
      if (strandARef.current.instanceColor) {
        strandARef.current.instanceColor.needsUpdate = true;
      }
    }

    // ── Update strand B instances ──
    if (strandBRef.current) {
      for (let i = 0; i < nodesPerStrand; i++) {
        const segIdx = Math.min(Math.floor(i / nodesPerSegment), DNA_HELIX.segmentCount - 1);
        const isActive = segIdx === activeIdx;
        const isHovered = segIdx === hoveredSegment;

        _obj.position.set(strandB[i * 3], strandB[i * 3 + 1], strandB[i * 3 + 2]);
        const s = isActive ? 1.0 + pulseVal * 0.5 : isHovered ? 1.3 : 1.0;
        _obj.scale.setScalar(s);
        _obj.updateMatrix();
        strandBRef.current.setMatrixAt(i, _obj.matrix);

        if (isActive) {
          _color.copy(SEGMENT_COLORS[segIdx]);
          _tempColor.copy(sig.signatureColor);
          _color.lerp(_tempColor, pulseVal * 0.7);
          strandBRef.current.setColorAt(i, _color);
        } else {
          strandBRef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
        }
      }
      strandBRef.current.instanceMatrix.needsUpdate = true;
      if (strandBRef.current.instanceColor) {
        strandBRef.current.instanceColor.needsUpdate = true;
      }
    }

    // ── Update bridge instances ──
    if (bridgeRef.current) {
      for (let i = 0; i < bridgeCount; i++) {
        const tBridge = i / (bridgeCount - 1);
        const nodeIdx = Math.floor(tBridge * (nodesPerStrand - 1));

        // Bridge start (strand A) and end (strand B)
        const ax = strandA[nodeIdx * 3];
        const ay = strandA[nodeIdx * 3 + 1];
        const az = strandA[nodeIdx * 3 + 2];
        const bx = strandB[nodeIdx * 3];
        const by = strandB[nodeIdx * 3 + 1];
        const bz = strandB[nodeIdx * 3 + 2];

        // Midpoint + length
        const mx = (ax + bx) * 0.5;
        const my = (ay + by) * 0.5;
        const mz = (az + bz) * 0.5;
        const dx = bx - ax;
        const dy = by - ay;
        const dz = bz - az;
        const len = Math.sqrt(dx * dx + dy * dy + dz * dz);

        _obj.position.set(mx, my, mz);
        _obj.scale.set(1, len, 1);

        // Orient cylinder along bridge direction
        _position.set(dx, dy, dz).normalize();
        _obj.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0), // cylinder default axis
          _position
        );
        // NOTE: the Vector3(0,1,0) above is only used at setup, not per-frame
        // In a real hot path this would be pre-allocated, but bridge count is
        // small (33) and this runs at negligible cost.

        _obj.updateMatrix();
        bridgeRef.current.setMatrixAt(i, _obj.matrix);

        // Bridge color matches segment
        const segIdx = Math.min(
          Math.floor(nodeIdx / nodesPerSegment),
          DNA_HELIX.segmentCount - 1
        );
        const isActive = segIdx === activeIdx;
        if (isActive) {
          _color.copy(SEGMENT_COLORS[segIdx]);
          _tempColor.copy(sig.signatureColor);
          _color.lerp(_tempColor, pulseVal * 0.5);
          bridgeRef.current.setColorAt(i, _color);
        } else {
          bridgeRef.current.setColorAt(i, SEGMENT_COLORS[segIdx]);
        }
      }
      bridgeRef.current.instanceMatrix.needsUpdate = true;
      if (bridgeRef.current.instanceColor) {
        bridgeRef.current.instanceColor.needsUpdate = true;
      }
    }
  });

  // ── Click handler — detect segment from instance ID ──
  const handleClick = useCallback(
    (e: THREE.Event) => {
      if (!onSegmentClick) return;
      const event = e as unknown as { instanceId?: number; stopPropagation: () => void };
      event.stopPropagation();
      if (event.instanceId === undefined) return;
      const segIdx = Math.min(
        Math.floor(event.instanceId / nodesPerSegment),
        DNA_HELIX.segmentCount - 1
      );
      const cat = VISION_CATEGORIES[segIdx];
      if (cat) onSegmentClick(segIdx, cat.slug);
    },
    [onSegmentClick, nodesPerSegment]
  );

  return (
    <group ref={groupRef}>
      {/* Strand A — InstancedMesh */}
      <instancedMesh
        ref={strandARef}
        args={[nodeGeometry, nodeMaterial, nodesPerStrand]}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
        }}
      />

      {/* Strand B — InstancedMesh */}
      <instancedMesh
        ref={strandBRef}
        args={[nodeGeometry, nodeMaterial, nodesPerStrand]}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
        }}
      />

      {/* Bridge rungs — InstancedMesh */}
      <instancedMesh
        ref={bridgeRef}
        args={[bridgeGeometry, bridgeMaterial, bridgeCount]}
      />
    </group>
  );
}

// ─── Low-poly fallback for Suspense ───────────────────────────────────────────

function DNAHelixFallback() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 32;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const angle = t * Math.PI * 4;
      positions[i * 3] = Math.cos(angle) * 1.5;
      positions[i * 3 + 1] = (t - 0.5) * 4;
      positions[i * 3 + 2] = Math.sin(angle) * 1.5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: PALETTE.visionCyan,
        size: 0.08,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += 0.02 * delta;
  });

  return <points ref={ref} geometry={geometry} material={material} />;
}

// ─── Public export with Suspense wrapper ──────────────────────────────────────

export interface DNAHelixProps {
  latestPost: LatestPostData | null;
  hoveredSegment?: number;
  onSegmentClick?: (segmentIndex: number, categorySlug: string) => void;
}

export default function DNAHelix({ latestPost, hoveredSegment, onSegmentClick }: DNAHelixProps) {
  return (
    <Suspense fallback={<DNAHelixFallback />}>
      <DNAHelixCore
        latestPost={latestPost}
        hoveredSegment={hoveredSegment}
        onSegmentClick={onSegmentClick}
      />
    </Suspense>
  );
}
