"use client";

/**
 * ExperimentProvider – initialises the Amplitude Experiment client once on
 * mount and exposes the client via React context so any child component can
 * read flag variants without prop-drilling.
 *
 * Security notes:
 *  - The deployment key is a public identifier; it has no secret value.
 *  - No user-supplied data is rendered via dangerouslySetInnerHTML.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ExperimentClient } from "@amplitude/experiment-js-client";
import { initExperiment, getVariant } from "@/lib/experiment";

interface ExperimentContextValue {
  client: ExperimentClient | null;
  /** Returns the string variant value for a flag key, defaulting to "control". */
  getFlag: (flagKey: string) => string;
}

const ExperimentContext = createContext<ExperimentContextValue>({
  client: null,
  getFlag: () => "control",
});

export function ExperimentProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<ExperimentClient | null>(null);

  useEffect(() => {
    initExperiment().then(setClient).catch(() => {
      // If initialisation fails (e.g. no network, no key), keep client null so
      // all flags fall back to "control" – the safe default.
    });
  }, []);

  const getFlag = useCallback(
    (flagKey: string) => getVariant(client, flagKey),
    [client]
  );

  return (
    <ExperimentContext.Provider value={{ client, getFlag }}>
      {children}
    </ExperimentContext.Provider>
  );
}

/** Convenience hook to read a single experiment flag variant. */
export function useExperimentVariant(flagKey: string): string {
  const { getFlag } = useContext(ExperimentContext);
  return getFlag(flagKey);
}
