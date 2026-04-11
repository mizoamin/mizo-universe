"use client";

import { useCallback, useRef } from "react";
import * as THREE from "three";

/**
 * Frame-rate independent smoothing factor.
 *
 * Uses exponential decay to produce consistent feel across 30/60/120fps.
 */
export function cinematicAlpha(delta: number, smoothness = 0.001): number {
	return 1 - Math.pow(smoothness, delta);
}

/**
 * useCinematicLerp
 *
 * Utility hook for premium camera/object smoothing without per-frame allocations.
 */
export default function useCinematicLerp() {
	const tempVec3 = useRef(new THREE.Vector3());

	const dampNumber = useCallback(
		(current: number, target: number, delta: number, smoothness = 0.001): number => {
			return THREE.MathUtils.lerp(current, target, cinematicAlpha(delta, smoothness));
		},
		[]
	);

	const dampVector3 = useCallback(
		(
			current: THREE.Vector3,
			target: THREE.Vector3,
			delta: number,
			smoothness = 0.001
		): THREE.Vector3 => {
			const a = cinematicAlpha(delta, smoothness);
			tempVec3.current.copy(current).lerp(target, a);
			current.copy(tempVec3.current);
			return current;
		},
		[]
	);

	const dampEulerY = useCallback(
		(current: number, target: number, delta: number, smoothness = 0.001): number => {
			const wrapped = Math.atan2(Math.sin(target - current), Math.cos(target - current));
			return current + wrapped * cinematicAlpha(delta, smoothness);
		},
		[]
	);

	return {
		dampNumber,
		dampVector3,
		dampEulerY,
	};
}

