import React, { forwardRef, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { PlanetId, planetsData } from "@/config/planetMetadata";

// Fresnel Shader for Odyssey's atmosphere
const FresnelShader = {
  uniforms: {
    rimColor: { value: new THREE.Color("#4488ff") },
    viewVector: { value: new THREE.Vector3() },
    intensity: { value: 1.2 },
  },
  vertexShader: `
    varying float vDot;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vDot = dot(normalize(normalMatrix * normal), normalize(mvPosition.xyz));
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 rimColor;
    uniform float intensity;
    varying float vDot;
    void main() {
      float rim = 1.0 - abs(vDot);
      rim = pow(rim, 2.5) * intensity;
      gl_FragColor = vec4(rimColor, rim);
    }
  `,
};

interface CinematicPlanetProps {
  planetId: PlanetId;
  texturePath?: string;
  roughness?: number;
  metalness?: number;
  rimColor?: string;
}

const textureMap: Record<PlanetId, string> = {
  legacy: "planets/legacy/legacy_premium.jpg",
  ventures: "planets/ventures/ventures_premium.jpg",
  odyssey: "planets/odyssey/odyssey_premium.jpg",
  identity: "planets/identity/identity_premium.jpg",
  vision: "planets/vision/vision_premium.jpg",
  voice: "planets/voice/voice_premium.jpg",
  videogram: "planets/videogram/videogram_premium.jpg",
  library: "planets/library/library_premium.jpg",
  contact: "planets/contact/contact_premium.jpg",
  shield: "planets/shield/shield_premium.jpg",
};

const CinematicPlanet = forwardRef<THREE.Mesh, CinematicPlanetProps>(
  ({ planetId, texturePath, roughness = 0.3, metalness = 0.7, rimColor }, ref) => {
    const map = useLoader(THREE.TextureLoader, texturePath || `/textures/${textureMap[planetId]}`);
    const planetMeta = planetsData[planetId];
    const isOdyssey = planetId === "odyssey";
    const fresnelMaterial = useMemo(() => {
      if (!isOdyssey) return null;
      return new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(FresnelShader.uniforms),
        vertexShader: FresnelShader.vertexShader,
        fragmentShader: FresnelShader.fragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
    }, [isOdyssey]);

    return (
      <group>
        <mesh ref={ref} position={[0, -55, 0]} castShadow receiveShadow>
          <sphereGeometry args={[planetMeta.baseSize * 7, 96, 96]} />
          <meshPhysicalMaterial
            map={map}
            roughness={roughness}
            metalness={metalness}
            clearcoat={0.5}
            clearcoatRoughness={0.2}
            reflectivity={0.7}
            sheen={1}
            sheenColor={planetMeta.themeColor}
            iridescence={0.15}
            iridescenceIOR={1.2}
            transmission={0.1}
            thickness={0.5}
          />
        </mesh>
        {/* Odyssey's Fresnel Glow */}
        {isOdyssey && fresnelMaterial && (
          <mesh position={[0, -55, 0]}>
            <sphereGeometry args={[planetMeta.baseSize * 7.2, 96, 96]} />
            <primitive object={fresnelMaterial} attach="material" />
          </mesh>
        )}
      </group>
    );
  }
);

CinematicPlanet.displayName = "CinematicPlanet";
export default CinematicPlanet;
