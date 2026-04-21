import { promises as fs } from "fs";
import path from "path";
import { getAssetUrl } from "@/data/hostinger-registry/assetHelper";

export type VoiceContentType = "Podcast" | "Interview" | "Audio Note";

export interface VoiceRegistryItem {
  id: string;
  type: VoiceContentType;
  typeAr: string;
  titleEn: string;
  titleAr: string;
  imageUrl: string;
  sourceDir: string;
}

export interface VoiceRegistryPayload {
  taxonomy: Array<{ en: string; ar: string }>;
  items: VoiceRegistryItem[];
}

const REGISTRY_DIR = path.join(process.cwd(), "src/data/hostinger-registry");
const SEO_FILE = path.join(REGISTRY_DIR, "seo-v8.txt");
const PLAN_FILE = path.join(REGISTRY_DIR, "folder_structure_plan.txt");
const MANIFEST_FILE = path.join(REGISTRY_DIR, "assets_manifest_v8.json");

let cache: VoiceRegistryPayload | null = null;

function classifyType(seed: string): { type: VoiceContentType; typeAr: string } {
  const s = seed.toLowerCase();
  if (s.includes("podcast") || s.includes("radio") || s.includes("fm")) {
    return { type: "Podcast", typeAr: "بودكاست" };
  }
  if (s.includes("interview") || s.includes("press-conference") || s.includes("tv")) {
    return { type: "Interview", typeAr: "مقابلة" };
  }
  return { type: "Audio Note", typeAr: "ملاحظة صوتية" };
}

function normalizeManifestPath(rawPath: string): string {
  const marker = "mizo_production_assets/";
  const idx = rawPath.indexOf(marker);
  if (idx === -1) return rawPath.replace(/^\/+/, "");
  return rawPath.slice(idx + marker.length).replace(/^\/+/, "");
}

function parseTaxonomy(planText: string): Array<{ en: string; ar: string }> {
  const matched = new Set<string>();
  const lines = planText.split(/\r?\n/);
  for (const line of lines) {
    if (
      /interview|podcast|radio|press-conference|media-appearances/i.test(line) &&
      line.includes("[DIR]")
    ) {
      const m = line.match(/\[DIR\]\s+([^/]+)\//i);
      if (m?.[1]) matched.add(m[1]);
    }
  }

  const mapAr: Record<string, string> = {
    "press-conference-and-media-interviews": "مؤتمرات صحفية ومقابلات إعلامية",
    "alkass-sports-tv-interviews": "مقابلات تلفزيون الكأس",
    "beinsports-tv-interviews": "مقابلات بي إن سبورتس",
    "euronews-interview-qatar-fiba-world-cup-2027": "مقابلة يورونيوز - كأس العالم 2027",
    "egyptian-satellite-channel-maspero-interview": "مقابلة قناة ماسبيرو الفضائية",
    "olyx-fm-radio-interview-feature": "لقاء إذاعي Olyx FM",
    "97-5-fm-live-radio-interview-podcast": "بودكاست إذاعي مباشر 97.5 FM",
    "media-appearances": "الظهور الإعلامي",
  };

  return Array.from(matched)
    .slice(0, 8)
    .map((en) => ({
      en,
      ar: mapAr[en] ?? "وسائط صوتية",
    }));
}

export async function getVoiceRegistryData(limit = 12): Promise<VoiceRegistryPayload> {
  if (cache) return cache;

  const [seoText, planText, manifestText] = await Promise.all([
    fs.readFile(SEO_FILE, "utf8"),
    fs.readFile(PLAN_FILE, "utf8"),
    fs.readFile(MANIFEST_FILE, "utf8"),
  ]);

  const manifest = JSON.parse(manifestText) as Record<string, { path?: string }>;
  const taxonomy = parseTaxonomy(planText);

  const blocks = seoText.split("----------------------------------------");
  const items: VoiceRegistryItem[] = [];

  for (const block of blocks) {
    const imgMatch = block.match(/IMG:\s*([^\n\r]+)/i);
    const titleMatch = block.match(/TITLE:\s*([^\n\r]+)/i);
    const arMatch = block.match(/ARABIC:\s*([^\n\r]+)/i);
    if (!imgMatch || !titleMatch) continue;

    const filename = imgMatch[1].trim();
    const titleEn = titleMatch[1].trim();
    const titleAr = (arMatch?.[1] ?? "محتوى صوتي وإعلامي").trim();
    const seed = `${filename} ${titleEn}`;

    if (!/interview|podcast|radio|voice|press-conference|fm|media/i.test(seed)) {
      continue;
    }

    const pathFromManifest = manifest[filename]?.path;
    if (!pathFromManifest) continue;

    const sourceDir = normalizeManifestPath(pathFromManifest)
      .split("/")
      .slice(0, -1)
      .join("/");

    const { type, typeAr } = classifyType(seed);
    items.push({
      id: filename,
      type,
      typeAr,
      titleEn,
      titleAr,
      imageUrl: getAssetUrl(normalizeManifestPath(pathFromManifest)),
      sourceDir,
    });

    if (items.length >= limit) break;
  }

  cache = { taxonomy, items };
  return cache;
}
