/**
 * Amplitude Experiment client initialisation.
 *
 * Uses the Amplitude Experiment JS SDK (client-side evaluation) to fetch and
 * cache flag variants.  The deployment key is a public identifier – it is safe
 * to expose in the browser bundle.
 *
 * Environment variable:
 *   NEXT_PUBLIC_AMPLITUDE_DEPLOYMENT_KEY – Amplitude Experiment deployment key.
 *   When absent (local dev without a key), every flag defaults to "control".
 */

import { Experiment, ExperimentClient, Variant } from "@amplitude/experiment-js-client";

export const EXPERIMENT_FLAG_PLANET_INFO_PANEL = "planet-info-panel";

/** Singleton client, initialised once per browser session. */
let client: ExperimentClient | null = null;

/**
 * Initialise (or return the already-initialised) Amplitude Experiment client.
 * Safe to call multiple times; subsequent calls are no-ops.
 */
export async function initExperiment(): Promise<ExperimentClient> {
  if (client) return client;

  const deploymentKey =
    process.env.NEXT_PUBLIC_AMPLITUDE_DEPLOYMENT_KEY ?? "";

  client = Experiment.initialize(deploymentKey, {
    // Fetch variants on initialisation; use cached values while fetching.
    fetchOnStart: true,
  });

  if (deploymentKey) {
    await client.start();
  }

  return client;
}

/**
 * Return the string value of a variant for a given flag key, or the fallback
 * when the experiment client is uninitialised or the flag is unrecognised.
 */
export function getVariant(
  experimentClient: ExperimentClient | null,
  flagKey: string,
  fallback = "control"
): string {
  if (!experimentClient) return fallback;
  const variant: Variant = experimentClient.variant(flagKey);
  return variant.value ?? fallback;
}
