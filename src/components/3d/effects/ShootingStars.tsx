"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { seededRandom, seededRandomRange } from "@/lib/mathUtils";

// ─── Config ──────────────────────────────────────────────────────────────────

const TRAIL_COUNT = 60;
const TRAIL_SEGMENTS = 12;
const SPAWN_RADIUS = 400;
const TRAIL_MIN_SPEED = 80;
const TRAIL_MAX_SPEED = 220;
const TRAIL_MIN_LENGTH = 8;
const TRAIL_MAX_LENGTH = 28;
const TRAIL_LIFETIME = 1.8; // seconds

// ─── Types ────────────────────────────────────────────────────────────────────

interface Trail {
  active: boolean;
  position: THREE.Vector3;
  direction: THREE.Vector3;
  speed: number;
  length: number;
  age: number;
  lifetime: number;
  seed: number;
}

// ─── Geometry helpers ─────────────────────────────────────────────────────────

function buildLineGeometry(segments: number) {
  const positions = new Float32Array(segments * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geo;
}

function spawnTrail(trail: Trail, seed: number) {
  const theta = seededRandom(seed) * Math.PI * 2;
  const phi = seededRandom(seed + 1) * Math.PI;
  const r = SPAWN_RADIUS * (0.6 + seededRandom(seed + 2) * 0.4);

  trail.active = true;
  trail.age = 0;
  trail.seed = seed;
  trail.position.set(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  );

  // Direction: slightly inward toward origin with random spread
  const inward = trail.position.clone().negate().normalize();
  const spread = new THREE.Vector3(
    seededRandom(seed + 3) * 2 - 1,
    seededRandom(seed + 4) * 2 - 1,
    seededRandom(seed + 5) * 2 - 1,
  )
    .normalize()
    .multiplyScalar(0.35);
  trail.direction.copy(inward).add(spread).normalize();

  trail.speed = seededRandomRange(seed + 6, TRAIL_MIN_SPEED, TRAIL_MAX_SPEED);
  trail.length = seededRandomRange(seed + 7, TRAIL_MIN_LENGTH, TRAIL_MAX_LENGTH);
  trail.lifetime = TRAIL_LIFETIME * (0.7 + seededRandom(seed + 8) * 0.6);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShootingStars() {
  // Pre-allocate all per-trail geometry and state
  const geometries = useMemo(
    () => Array.from({ length: TRAIL_COUNT }, () => buildLineGeometry(TRAIL_SEGMENTS)),
    [],
  );

  const trails = useRef<Trail[]>(
    Array.from({ length: TRAIL_COUNT }, (_, i) => ({
      active: false,
      position: new THREE.Vector3(),
      direction: new THREE.Vector3(),
      speed: 0,
      length: 0,
      age: 0,
      lifetime: TRAIL_LIFETIME,
      seed: i * 137,
    })),
  );

  // Pre-allocated scratch vector — zero GC in render loop
  const _scratch = useRef(new THREE.Vector3());

  // Stagger initial activation so trails don't all appear at once
  useMemo(() => {
    trails.current.forEach((trail, i) => {
      spawnTrail(trail, i * 137);
      trail.age = (i / TRAIL_COUNT) * trail.lifetime;
    });
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05); // cap spike frames

    trails.current.forEach((trail, i) => {
      if (!trail.active) {
        spawnTrail(trail, trail.seed + trails.current.length);
        return;
      }

      trail.age += dt;
      if (trail.age >= trail.lifetime) {
        // Respawn with new seed to prevent cycling artifacts
        spawnTrail(trail, trail.seed + TRAIL_COUNT * 7 + i);
        return;
      }

      // Advance head position
      _scratch.current.copy(trail.direction).multiplyScalar(trail.speed * dt);
      trail.position.add(_scratch.current);

      // Build trail segment positions (head → tail)
      const geo = geometries[i];
      const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
      const fade = trail.age / trail.lifetime; // 0→1 over lifetime
      const currentLength = trail.length * (1 - fade * 0.5); // trail shortens near end

      for (let s = 0; s < TRAIL_SEGMENTS; s++) {
        const t = s / (TRAIL_SEGMENTS - 1);
        const offset = t * currentLength;
        posAttr.setXYZ(
          s,
          trail.position.x - trail.direction.x * offset,
          trail.position.y - trail.direction.y * offset,
          trail.position.z - trail.direction.z * offset,
        );
      }

      posAttr.needsUpdate = true;
      geo.computeBoundingSphere();
    });
  });

  return (
    <group>
      {geometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color="#e8f4ff"
            transparent
            opacity={0.55}
            depthWrite={false}
          />
        </line>
      ))}
    </group>
  );
}
