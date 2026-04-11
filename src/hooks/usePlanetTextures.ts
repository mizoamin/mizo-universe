"use client";

import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

type TextureColorMode = "srgb" | "linear";

interface TextureLoadOptions {
	colorMode?: TextureColorMode;
	anisotropy?: number;
	wrapS?: THREE.Wrapping;
	wrapT?: THREE.Wrapping;
}

const loader = new THREE.TextureLoader();
const textureCache = new Map<string, THREE.Texture | null>();
const pendingLoads = new Map<string, Promise<THREE.Texture | null>>();

function applyTextureOptions(tex: THREE.Texture, options: TextureLoadOptions) {
	tex.colorSpace = options.colorMode === "srgb" ? THREE.SRGBColorSpace : THREE.LinearSRGBColorSpace;
	if (typeof options.anisotropy === "number") tex.anisotropy = options.anisotropy;
	if (options.wrapS !== undefined) tex.wrapS = options.wrapS;
	if (options.wrapT !== undefined) tex.wrapT = options.wrapT;
	tex.needsUpdate = true;
}

function loadTexture(path: string, options: TextureLoadOptions = {}): Promise<THREE.Texture | null> {
	if (!path) return Promise.resolve(null);
	if (textureCache.has(path)) return Promise.resolve(textureCache.get(path) ?? null);
	if (pendingLoads.has(path)) return pendingLoads.get(path) as Promise<THREE.Texture | null>;

	const pending = loader
		.loadAsync(path)
		.then((tex) => {
			applyTextureOptions(tex, options);
			textureCache.set(path, tex);
			pendingLoads.delete(path);
			return tex;
		})
		.catch(() => {
			textureCache.set(path, null);
			pendingLoads.delete(path);
			return null;
		});

	pendingLoads.set(path, pending);
	return pending;
}

export function getPreloadedTexture(path: string): THREE.Texture | null | undefined {
	return textureCache.get(path);
}

export function preloadPlanetTextures(paths: string[], options: TextureLoadOptions = {}): Promise<void> {
	const unique = Array.from(new Set(paths.filter(Boolean)));
	return Promise.all(unique.map((path) => loadTexture(path, options))).then(() => undefined);
}

export function usePlanetTexture(path: string, options: TextureLoadOptions = {}) {
	const [texture, setTexture] = useState<THREE.Texture | null>(() => getPreloadedTexture(path) ?? null);

	useEffect(() => {
		let cancelled = false;
		if (!path) {
			setTexture(null);
			return;
		}

		const cached = getPreloadedTexture(path);
		if (cached !== undefined) {
			setTexture(cached ?? null);
			return;
		}

		loadTexture(path, options).then((tex) => {
			if (!cancelled) setTexture(tex);
		});

		return () => {
			cancelled = true;
		};
	}, [path, options.anisotropy, options.colorMode, options.wrapS, options.wrapT]);

	return texture;
}

export function usePlanetTexturePreload(paths: string[], options: TextureLoadOptions = {}) {
	const stablePaths = useMemo(() => Array.from(new Set(paths.filter(Boolean))).sort(), [paths]);

	useEffect(() => {
		void preloadPlanetTextures(stablePaths, options);
	}, [stablePaths, options.anisotropy, options.colorMode, options.wrapS, options.wrapT]);
}
