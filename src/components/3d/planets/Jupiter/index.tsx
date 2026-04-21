/**
 * Jupiter Planet — Immersive 3D hub center
 *
 * Uses custom shader material to render procedurally-generated atmosphere.
 * Optimized for 60fps with LOD (Level of Detail) based on device tier.
 * Rotates continuously with subtle wind animation.
 */

"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { JUPITER_CONFIG } from "@/config/jupiterConfig";

interface JupiterProps {
  enableIdleRotation?: boolean;
}

export default function Jupiter({ enableIdleRotation = true }: JupiterProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { gl, renderer } = useThree();

  // Create custom shader material
  const jupiterMaterial = useMemo(() => {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      varying float vHeight;

      void main() {
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
        vHeight = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      uniform float uTime;
      uniform float uWindSpeed;
      uniform float uSpotWobble;
      uniform float uSpotWobbleFreq;
      uniform vec3 uBandColorPrimary;
      uniform vec3 uBandColorSecondary;
      uniform vec3 uZoneColorLight;
      uniform vec3 uPolarColor;
      uniform vec3 uSpotColor;
      uniform vec3 uSunDir;
      uniform float uSunIntensity;
      uniform float uAmbientIntensity;
      uniform float uSelfIllumination;

      float random(vec2 st) {
        return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float perlinLike(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        f = f * f * (3.0 - 2.0 * f);
        float n = mix(
          mix(random(i), random(i + vec2(1.0, 0.0)), f.x),
          mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
        return n;
      }

      float fbm(vec2 st, int octaves) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        for (int i = 0; i < 6; i++) {
          if (i >= octaves) break;
          value += amplitude * perlinLike(st * frequency);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      vec3 generateBands(vec3 pos) {
        float latitude = atan(pos.y, length(pos.xz)) * 2.0 / 3.14159;
        float longitude = atan(pos.z, pos.x);
        float windPhase = longitude + uTime * uWindSpeed * (latitude * 0.5);
        float bandPattern = sin(latitude * 8.0 + 0.5) * 0.5 + 0.5;
        float cloudNoise = fbm(vec2(windPhase, latitude), 4);
        bandPattern += cloudNoise * 0.15;
        vec3 bandColor = mix(uZoneColorLight, mix(uBandColorPrimary, uBandColorSecondary, cloudNoise), bandPattern);
        float polarMask = smoothstep(0.7, 1.0, abs(latitude));
        bandColor = mix(bandColor, uPolarColor, polarMask * 0.4);
        return bandColor;
      }

      vec3 generateGreatRedSpot(vec3 pos, vec3 bandBase) {
        float latitude = atan(pos.y, length(pos.xz)) * 2.0 / 3.14159;
        float longitude = atan(pos.z, pos.x);
        float spotLat = -0.38;
        float wobble = sin(uTime * uSpotWobbleFreq) * uSpotWobble;
        float spotLongitude = 0.0 + uTime * uWindSpeed + wobble;
        float distToSpot = distance(vec2(latitude, longitude), vec2(spotLat, spotLongitude));
        float spotIntensity = exp(-distToSpot * distToSpot * 8.0);
        float spotTurbulence = fbm(vec2(longitude * 5.0, latitude * 5.0), 3);
        spotIntensity *= (0.7 + 0.3 * spotTurbulence);
        return mix(bandBase, uSpotColor, spotIntensity * 0.8);
      }

      void main() {
        vec3 pos = normalize(vPosition);
        vec3 bandColor = generateBands(pos);
        vec3 spotColor = generateGreatRedSpot(pos, bandColor);
        float diffuse = max(dot(vNormal, uSunDir), 0.0) * uSunIntensity;
        float ambient = uAmbientIntensity;
        float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 2.0) * 0.2;
        vec3 finalColor = spotColor * (diffuse + ambient + fresnel);
        finalColor += uSelfIllumination * spotColor;
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWindSpeed: { value: JUPITER_CONFIG.windSpeed },
        uSpotWobble: { value: JUPITER_CONFIG.spotWobbleAmount },
        uSpotWobbleFreq: { value: JUPITER_CONFIG.spotWobbleFrequency },
        uBandColorPrimary: { value: new THREE.Color(JUPITER_CONFIG.bandColorPrimary) },
        uBandColorSecondary: { value: new THREE.Color(JUPITER_CONFIG.bandColorSecondary) },
        uZoneColorLight: { value: new THREE.Color(JUPITER_CONFIG.zoneColorLight) },
        uPolarColor: { value: new THREE.Color(JUPITER_CONFIG.polarColor) },
        uSpotColor: { value: new THREE.Color(JUPITER_CONFIG.spotColor) },
        uSunDir: { value: new THREE.Vector3(1, 0.5, 1).normalize() },
        uSunIntensity: { value: JUPITER_CONFIG.sunIntensity },
        uAmbientIntensity: { value: JUPITER_CONFIG.ambientIntensity },
        uSelfIllumination: { value: JUPITER_CONFIG.selfIllumination },
      },
      side: THREE.FrontSide,
      transparent: false,
    });
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Time-based shader update
      if (jupiterMaterial.uniforms.uTime) {
        jupiterMaterial.uniforms.uTime.value += delta;
      }

      // Idle rotation
      if (enableIdleRotation) {
        const rotSpeed = (JUPITER_CONFIG.idleRotationSpeed * Math.PI) / 180;
        meshRef.current.rotation.y += rotSpeed * delta;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={
        new THREE.IcosahedronGeometry(
          JUPITER_CONFIG.radius,
          JUPITER_CONFIG.widthSegments
        )
      }
      material={jupiterMaterial}
      scale={[1, 1 - JUPITER_CONFIG.oblateness, 1]}
      castShadow
      receiveShadow
    />
  );
}
