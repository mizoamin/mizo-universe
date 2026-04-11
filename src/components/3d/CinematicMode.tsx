import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { animated } from '@react-spring/three';
import { useExperience } from '@/engine/experienceStore';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { VIDEOGRAM_VIDEO_CONFIG } from '@/config/videogramConfig';
import { usePlanetTexture, usePlanetTexturePreload } from '@/hooks/usePlanetTextures';
import { useDeviceStore } from '@/engine/deviceStore';

const PLANET_SKINS: { name: string; texture: string; rimColor: string }[] = [
  { name: 'Legacy', texture: '/textures/planets/legacy/default/albedo.jpg', rimColor: '#ffb347' },
  { name: 'Ventures', texture: '/textures/planets/ventures/marble-gold.jpg', rimColor: '#ffe066' },
  { name: 'Odyssey', texture: '/textures/planets/odyssey/diffuse.webp', rimColor: '#7fdfff' },
  { name: 'Vision', texture: '/textures/planets/vision/cyan-grid.jpg', rimColor: '#00fff7' },
  { name: 'Voice', texture: '/textures/planets/voice/pulsing-sonic-wave.jpg', rimColor: '#7d3cff' },
  { name: 'Videogram', texture: '/textures/planets/videogram/film-reel-glitch.jpg', rimColor: '#ff00e6' },
  { name: 'Shield', texture: '/textures/planets/shield/hex-chrome.jpg', rimColor: '#ffd700' },
  { name: 'Library', texture: '/textures/planets/library/marble-text.jpg', rimColor: '#f8f8ff' },
  { name: 'Contact', texture: '/textures/planets/contact/neural-network.jpg', rimColor: '#00bfff' },
  { name: 'Identity', texture: '/textures/planets/identity/liquid-fingerprint.jpg', rimColor: '#c0c0c0' },
];

type StarDriftProps = { intensity?: number; dip?: number; count?: number };
function StarDrift({ intensity = 1, dip = 0, count = 400 }: StarDriftProps) {
  const group = useRef<THREE.Group>(null);
  const stars = useMemo<[number, number, number][]>(() =>
    Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 400,
      (Math.random() - 0.5) * 200 + 60,
      (Math.random() - 0.5) * 400,
    ]),
    [count]
  );
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0007 * intensity;
      group.current.position.y = -dip * 0.1;
    }
  });
  return (
    <group ref={group}>
      {stars.map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], pos[2]]}>
          <sphereGeometry args={[0.4, 4, 4]} />
          <meshBasicMaterial color="#fff" />
        </mesh>
      ))}
    </group>
  );
}

type Meteor = { x: number; y: number; z: number; speed: number };
type MeteorsProps = { count?: number; dip?: number };
function Meteors({ count = 6, dip = 0 }: MeteorsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meteors = useMemo<Meteor[]>(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 300,
      y: Math.random() * 120 + 60,
      z: (Math.random() - 0.5) * 300,
      speed: Math.random() * 0.7 + 0.3,
    })),
    [count]
  );

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    for (let i = 0; i < meteors.length; i++) {
      const m = meteors[i];
      m.y -= m.speed * (1 + (dip ?? 0) * 0.01) * delta * 60;
      if (m.y < -60) {
        m.y = Math.random() * 120 + 60;
      }

      const mesh = groupRef.current.children[i] as THREE.Mesh | undefined;
      if (mesh) {
        mesh.position.set(m.x, m.y, m.z);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {meteors.map((m, i) => (
        <mesh key={i} position={[m.x, m.y, m.z]}>
          <sphereGeometry args={[1.2, 6, 6]} />
          <meshBasicMaterial color="#ffeedd" />
        </mesh>
      ))}
    </group>
  );
}

export default function CinematicMode() {
  // --- State ---
  const cinematicPlanetIndex = useExperience((s) => s.cinematicPlanetIndex);
  const [planetIndex, setPlanetIndex] = useState(cinematicPlanetIndex);
  const planetRef = useRef<THREE.Mesh>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dip, setDip] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const tier = useDeviceStore((s) => s.tier);
  const { camera } = useThree();
  const setCinematicPlanetIndex = useExperience((s) => s.setCinematicPlanetIndex);

  // Live refs to avoid stale closures in event callbacks
  const planetIndexRef = useRef(planetIndex);
  planetIndexRef.current = planetIndex;
  const isTransitioningRef = useRef(isTransitioning);
  isTransitioningRef.current = isTransitioning;
  const queuedTargetRef = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setIsReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const budget = useMemo(() => {
    if (tier === 'mobile') {
      return { starCount: 180, meteorCount: 3, planetSegments: 72, atmosphereSegments: 56 };
    }
    if (tier === 'tablet') {
      return { starCount: 260, meteorCount: 4, planetSegments: 96, atmosphereSegments: 72 };
    }
    return { starCount: 400, meteorCount: 7, planetSegments: 128, atmosphereSegments: 96 };
  }, [tier]);

  usePlanetTexturePreload(
    PLANET_SKINS.map((item) => item.texture),
    { colorMode: 'srgb' }
  );

  // Reset camera to canonical cinematic horizon position on mount
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    cam.position.set(0, 80, 160);
    cam.up.set(0, 1, 0);
    cam.lookAt(0, 0, 0);
    cam.updateProjectionMatrix();
  }, [camera]);

  // Sync active planet index to store so CinematicHUD can read it
  useEffect(() => {
    setCinematicPlanetIndex(planetIndex);
  }, [planetIndex, setCinematicPlanetIndex]);

  // --- GSAP Dip & Rise transition (stable — reads from refs) ---
  const transitionToIndex = useCallback((nextIdx: number) => {
    if (isTransitioningRef.current) {
      queuedTargetRef.current = nextIdx;
      return;
    }

    if (nextIdx === planetIndexRef.current) return;

    setIsTransitioning(true);
    if (!planetRef.current) {
      setIsTransitioning(false);
      return;
    }

    const dropDuration = isReducedMotion ? 0.2 : 0.72;
    const riseDuration = isReducedMotion ? 0.28 : 1.2;

    gsap.to(planetRef.current.position, {
      y: -130,
      duration: dropDuration,
      ease: isReducedMotion ? 'power2.inOut' : 'power4.in',
      onUpdate: () => {
        if (planetRef.current) setDip(planetRef.current.position.y + 130);
      },
      onComplete: () => {
        planetIndexRef.current = nextIdx;
        setPlanetIndex(nextIdx);
        setShowVideo(false);
        if (!planetRef.current) {
          setIsTransitioning(false);
          return;
        }
        gsap.to(planetRef.current.position, {
          y: -55,
          duration: riseDuration,
          ease: isReducedMotion ? 'power2.out' : 'back.out(1.2)',
          onUpdate: () => {
            if (planetRef.current) setDip(planetRef.current.position.y + 130);
          },
          onComplete: () => {
            setIsTransitioning(false);
            setDip(0);

            const queued = queuedTargetRef.current;
            queuedTargetRef.current = null;
            if (queued !== null && queued !== planetIndexRef.current) {
              transitionToIndex(queued);
            }
          },
        });
      },
    });
  }, [isReducedMotion]);

  const changePlanet = useCallback((dir = 1) => {
    const nextIdx =
      (planetIndexRef.current + dir + PLANET_SKINS.length) % PLANET_SKINS.length;
    transitionToIndex(nextIdx);
  }, [transitionToIndex]);

  const jumpToPlanet = useCallback((targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= PLANET_SKINS.length) return;
    transitionToIndex(targetIndex);
  }, [transitionToIndex]);

  // --- NAVIGATION: keyboard, wheel (debounced), swipe (window-level), HUD custom event ---
  useEffect(() => {
    let lastWheelTime = 0;
    const touchStart = { x: 0 };

    const handleKey = (e: KeyboardEvent) => {
      if (showVideo) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePlanet(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changePlanet(-1);
    };

    const handleWheel = (e: WheelEvent) => {
      if (showVideo) return;
      const now = Date.now();
      if (now - lastWheelTime < 500) return;

      const dominantDelta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(dominantDelta) > 20) {
        lastWheelTime = now;
        changePlanet(dominantDelta > 0 ? 1 : -1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.x = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (showVideo) return;
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const threshold = Math.max(32, Math.round(window.innerWidth * 0.05));
      if (Math.abs(dx) > threshold) changePlanet(dx < 0 ? 1 : -1);
    };

    // Listen for navigation signals dispatched by CinematicHUD controls
    const handleNavigate = (e: Event) => {
      if (showVideo) return;
      const dir = (e as CustomEvent<{ dir: number }>).detail?.dir;
      if (dir === 1 || dir === -1) changePlanet(dir);
    };

    const handleJump = (e: Event) => {
      if (showVideo) return;
      const targetIndex = (e as CustomEvent<{ targetIndex: number }>).detail?.targetIndex;
      if (typeof targetIndex === 'number') jumpToPlanet(targetIndex);
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('cinematic-navigate', handleNavigate);
    window.addEventListener('cinematic-jump', handleJump);

    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('cinematic-navigate', handleNavigate);
      window.removeEventListener('cinematic-jump', handleJump);
    };
  }, [changePlanet, jumpToPlanet, showVideo]);

  // --- Active planet data ---
  const planet = PLANET_SKINS[planetIndex];
  const isVideogram = planet.name.toLowerCase() === 'videogram';
  const isOdyssey = planet.name.toLowerCase() === 'odyssey';
  const activeTexture = usePlanetTexture(planet.texture, { colorMode: 'srgb' });

  const odysseyAtmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      uniforms: {
        uColor: { value: new THREE.Color('#72a8ff') },
        uIntensity: { value: 0.95 },
        uPower: { value: 2.8 },
        uLightDir: { value: new THREE.Vector3(0, 0.3, 1).normalize() },
      },
      vertexShader: `
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        uniform float uPower;
        uniform vec3 uLightDir;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec3 N = normalize(vWorldNormal);
          vec3 V = normalize(cameraPosition - vWorldPosition);
          float fresnel = pow(1.0 - max(dot(N, V), 0.0), uPower);
          float lightWrap = 0.35 + 0.65 * max(dot(N, normalize(uLightDir)), 0.0);
          float alpha = fresnel * uIntensity * lightWrap;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });
  }, []);

  return (
    <group>
      {/* Starfield & Meteors react to dip during transitions */}
      <StarDrift intensity={1.1} dip={dip} count={budget.starCount} />
      <Meteors count={budget.meteorCount} dip={dip} />

      {/* SpotLight Rim Aura — color matches active planet */}
      <spotLight
        position={[0, -120, 40]}
        angle={1.2}
        penumbra={0.7}
        intensity={2.2}
        color={planet.rimColor}
        castShadow
      />

      {/* Horizon Planet Mesh */}
      <animated.mesh
        ref={planetRef}
        position={[0, -55, 0]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[65, budget.planetSegments, budget.planetSegments]} />
        <meshStandardMaterial
          map={activeTexture ?? undefined}
          color={activeTexture ? '#ffffff' : '#17263f'}
          emissive={planet.rimColor}
          emissiveIntensity={0.7}
          metalness={planet.name === 'Ventures' ? 1 : 0.6}
          roughness={planet.name === 'Ventures' ? 0.15 : 0.3}
          bumpScale={0}
          opacity={planet.name === 'Vision' ? 0.9 : 1}
          transparent={planet.name === 'Vision'}
        />
        {/* Videogram Play Button Overlay */}
        {isVideogram && !showVideo && (
          <Html center>
            <button
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 24px #ff00e6',
                cursor: 'pointer',
                zIndex: 10,
              }}
              onClick={() => setShowVideo(true)}
              aria-label="Play Video"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#ff00e6" strokeWidth="2" fill="#111" />
                <polygon points="16,13 29,20 16,27" fill="#ff00e6" />
              </svg>
            </button>
          </Html>
        )}
      </animated.mesh>

      {/* Odyssey atmosphere glow */}
      {isOdyssey && (
        <mesh position={[0, -55, 0]}>
          <sphereGeometry args={[67.2, budget.atmosphereSegments, budget.atmosphereSegments]} />
          <primitive object={odysseyAtmosphereMaterial} attach="material" />
        </mesh>
      )}

      {/* Videogram Video Overlay */}
      {isVideogram && showVideo && (
        <Html fullscreen style={{ pointerEvents: 'auto', zIndex: 20 }}>
          <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEOGRAM_VIDEO_CONFIG.youtubeId}?autoplay=1&start=${VIDEOGRAM_VIDEO_CONFIG.startSeconds}`}
              title={VIDEOGRAM_VIDEO_CONFIG.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 18, boxShadow: '0 0 32px #ff00e6', width: 'min(900px, 92vw)', height: 'min(506px, 52vw)' }}
            />
            <button
              style={{ marginTop: 32, padding: '12px 32px', borderRadius: 8, background: '#ff00e6', color: '#fff', fontWeight: 700, border: 'none', fontSize: 18, cursor: 'pointer' }}
              onClick={() => setShowVideo(false)}
            >
              Close Video
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}
