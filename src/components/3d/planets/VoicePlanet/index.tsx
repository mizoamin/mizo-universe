"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { VOICE_SKIN } from "./skins";

const _color = new THREE.Color();

export default function VoicePlanet() {
	const coreRef = useRef<THREE.Mesh>(null);
	const waveARef = useRef<THREE.Mesh>(null);
	const waveBRef = useRef<THREE.Mesh>(null);

	const waveMaterial = useMemo(
		() =>
			new THREE.MeshBasicMaterial({
				color: VOICE_SKIN.waveColor,
				transparent: true,
				opacity: VOICE_SKIN.waveOpacity,
				blending: THREE.AdditiveBlending,
			}),
		[]
	);

	useFrame((state, delta) => {
		const t = state.clock.elapsedTime;

		if (coreRef.current) {
			coreRef.current.rotation.y += delta * 0.35;
			const pulse = 1 + Math.sin(t * VOICE_SKIN.pulseSpeed) * 0.05;
			coreRef.current.scale.setScalar(pulse);

			const mat = coreRef.current.material as THREE.MeshPhysicalMaterial;
			const emissiveBoost = 0.8 + Math.sin(t * VOICE_SKIN.pulseSpeed) * 0.4;
			mat.emissiveIntensity = VOICE_SKIN.coreEmissiveIntensity * emissiveBoost;
		}

		if (waveARef.current) {
			waveARef.current.rotation.x += delta * 0.9;
			waveARef.current.rotation.y += delta * 0.6;
			const s = 1 + Math.sin(t * VOICE_SKIN.waveSpeed) * 0.09;
			waveARef.current.scale.setScalar(s);
		}

		if (waveBRef.current) {
			waveBRef.current.rotation.x -= delta * 0.7;
			waveBRef.current.rotation.z += delta * 0.8;
			const s = 1 + Math.cos(t * VOICE_SKIN.waveSpeed * 1.1) * 0.11;
			waveBRef.current.scale.setScalar(s);
		}

		_color.set(VOICE_SKIN.waveColor).offsetHSL(0, 0, Math.sin(t * 0.8) * 0.02);
		waveMaterial.color.copy(_color);
	});

	return (
		<group>
			<mesh ref={coreRef} castShadow receiveShadow>
				<sphereGeometry args={[1, 64, 64]} />
				<meshPhysicalMaterial
					color={VOICE_SKIN.coreColor}
					emissive={VOICE_SKIN.coreEmissive}
					emissiveIntensity={VOICE_SKIN.coreEmissiveIntensity}
					metalness={VOICE_SKIN.metalness}
					roughness={VOICE_SKIN.roughness}
					clearcoat={0.8}
					clearcoatRoughness={0.12}
				/>
			</mesh>

			<mesh ref={waveARef} material={waveMaterial}>
				<torusGeometry args={[1.35, 0.04, 16, 180]} />
			</mesh>

			<mesh ref={waveBRef} material={waveMaterial} rotation={[Math.PI / 2.2, 0, 0]}>
				<torusGeometry args={[1.6, 0.03, 16, 180]} />
			</mesh>
		</group>
	);
}

