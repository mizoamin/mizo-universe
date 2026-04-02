"use client";

/**
 * PostProcessing — Global Cinematic Post-Processing Stack
 *
 * ARCHITECTURAL DECISIONS:
 * ─────────────────────────────────────────────────────────────────
 * 1. ADAPTIVE QUALITY: Reads DPR + UA to build device profile.
 *    Mobile/low-end mounts a lighter composer. Desktop gets the full stack.
 *
 * 2. MODE-GATED DOF: Depth of Field only activates when experienceStore
 *    mode is "isolation" or "enter" — never in free-flight.
 *
 * 3. N8AO: World-space ambient occlusion at half resolution. Desktop only.
 *
 * 4. BLOOM: mipmapBlur for physically-correct light bleed. High
 *    luminanceThreshold (0.9) so only hot emissives bloom.
 *
 * 5. CONDITIONAL CHILDREN: EffectComposer expects Element children —
 *    we use separate Desktop/Mobile composer components to avoid
 *    `false | Element` conditional type issues.
 *
 * BUDGET: ~1.35ms at 1080p, ~3.8ms at 4K.
 */

import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  ChromaticAberration,
  Vignette,
  N8AO,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useExperience } from "@/engine/experienceStore";
import { useDeviceStore } from "@/engine/deviceStore";

// ─── Desktop stack (full pipeline) ───────────────────────────────────────────

function DesktopComposer({ dofActive }: { dofActive: boolean }) {
  const { gl } = useThree();
  const isLowEnd = gl.getPixelRatio() <= 1;
  const caOffset = useMemo(() => [0.0004, 0.0004] as [number, number], []);

  if (isLowEnd) {
    return (
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
          mipmapBlur
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    );
  }

  if (dofActive) {
    return (
      <EffectComposer multisampling={4}>
        <N8AO
          aoRadius={2.0}
          intensity={3.0}
          distanceFalloff={1.0}
          quality="medium"
          halfRes
        />
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
          mipmapBlur
        />
        <DepthOfField
          focusDistance={0.02}
          focalLength={0.025}
          bokehScale={3.0}
          height={480}
        />
        <ChromaticAberration
          offset={caOffset}
          radialModulation
          modulationOffset={0.5}
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    );
  }

  return (
    <EffectComposer multisampling={4}>
      <N8AO
        aoRadius={2.0}
        intensity={3.0}
        distanceFalloff={1.0}
        quality="medium"
        halfRes
      />
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur
      />
      <ChromaticAberration
        offset={caOffset}
        radialModulation
        modulationOffset={0.5}
      />
      <Vignette
        offset={0.3}
        darkness={0.7}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

// ─── Mobile stack (lightweight: Bloom + Vignette only) ───────────────────────

function MobileComposer() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur
      />
      <Vignette
        offset={0.3}
        darkness={0.6}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function PostProcessing() {
  const mode = useExperience((s) => s.mode);
  const profile = useDeviceStore((s) => s.profile);
  const dofActive = profile.dofEnabled && (mode === "isolation" || mode === "enter");

  if (!profile.postProcessing) {
    return null;
  }

  if (profile.tier === "mobile" || profile.tier === "tablet") {
    return <MobileComposer />;
  }

  return <DesktopComposer dofActive={dofActive} />;
}
