/**
 * Sanity Seed Engine — Automated Category & Persona Seeding
 *
 * Creates the 11 Master Categories and 15+ AI Personas in Sanity.
 * Uses deterministic _id prefixes (category-{slug}, persona-{slug})
 * so references from posts remain stable across environments.
 *
 * Usage:
 *   npx tsx sanity/lib/seed.ts
 *
 * Requires:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET (defaults to "production")
 *   SANITY_API_TOKEN (write-capable)
 */

import { VISION_CATEGORIES } from "../../src/config/visionCategories";
import { PERSONA_SEED } from "../schemas/aiPersona";

// ─── Config ───────────────────────────────────────────────────────────────────

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2024-01-01";
const TOKEN = process.env.SANITY_API_TOKEN ?? "";

const MUTATE_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

if (!PROJECT_ID || !TOKEN) {
  console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

// ─── Mutation Helper ──────────────────────────────────────────────────────────

interface SanityMutation {
  createOrReplace?: Record<string, unknown>;
}

async function executeMutations(
  mutations: SanityMutation[],
  label: string,
): Promise<void> {
  console.log(`\n🚀 Seeding ${label} (${mutations.length} documents)...`);

  const res = await fetch(MUTATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sanity mutation failed for ${label}: ${res.status} — ${err}`);
  }

  const data = await res.json();
  console.log(
    `✅ ${label}: ${data.results?.length ?? 0} documents created/replaced (tx: ${data.transactionId})`,
  );
}

// ─── Seed Categories ──────────────────────────────────────────────────────────

function buildCategoryMutations(): SanityMutation[] {
  return VISION_CATEGORIES.map((cat) => ({
    createOrReplace: {
      _id: `category-${cat.slug}`,
      _type: "category",
      title: cat.title,
      titleAr: cat.titleAr,
      slug: { _type: "slug", current: cat.slug },
      description: cat.description,
      descriptionAr: cat.descriptionAr,
      descriptionFull: cat.descriptionFull,
      descriptionFullAr: cat.descriptionFullAr,
      includes: cat.includes,
      icon: cat.icon,
      helixColor: cat.helixColor,
      sortOrder: cat.sortOrder,
      seo: {
        metaTitle: `${cat.title} — Mizo Universe Blog`,
        metaDescription: cat.description,
      },
    },
  }));
}

// ─── Seed Personas ────────────────────────────────────────────────────────────

function buildPersonaMutations(): SanityMutation[] {
  return PERSONA_SEED.map((p) => ({
    createOrReplace: {
      _id: `persona-${p.slug}`,
      _type: "aiPersona",
      name: p.name,
      slug: { _type: "slug", current: p.slug },
      bio: p.bio,
      bioAr: p.bioAr,
      tone: p.tone,
      signatureColor: p.signatureColor,
      pulsePattern: p.pulsePattern,
      sortOrder: p.sortOrder,
    },
  }));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║   MIZO UNIVERSE — SANITY SEED ENGINE  ║");
  console.log("╚═══════════════════════════════════════╝");
  console.log(`Project: ${PROJECT_ID} | Dataset: ${DATASET}`);

  try {
    // Seed categories first (posts reference them)
    await executeMutations(buildCategoryMutations(), "11 Master Categories");

    // Seed personas
    await executeMutations(buildPersonaMutations(), "AI Personas");

    console.log("\n🎉 Seeding complete! All documents created with deterministic IDs.");
    console.log("   Categories: category-{slug}");
    console.log("   Personas:   persona-{slug}");
  } catch (err) {
    console.error("\n💥 Seed failed:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();
