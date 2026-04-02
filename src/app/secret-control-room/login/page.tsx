"use client";

/**
 * Secret Control Room — Login Gate
 *
 * Simple token-based login. Sets an HttpOnly cookie.
 */

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/secret-control-room";

  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (res.ok) {
          router.push(redirect);
        } else {
          setError("Invalid access token.");
        }
      } catch {
        setError("Network error. Try again.");
      } finally {
        setLoading(false);
      }
    },
    [token, redirect, router],
  );

  return (
    <div className="min-h-screen bg-[#050508] text-white flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
          <span className="text-xs tracking-[0.3em] text-gray-600 uppercase">
            Authentication Required
          </span>
        </div>

        <h1 className="text-2xl font-black mb-6">Access Control</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter admin token"
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
            autoFocus
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={!token || loading}
            className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Enter Control Room"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050508] text-white flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
