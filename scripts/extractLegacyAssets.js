// Node.js streaming script to extract Legacy planet assets from a massive JSON array
// Place this file in scripts/extractLegacyAssets.js and run with: node scripts/extractLegacyAssets.js
// Output: src/data/hostinger-registry/legacy_assets.json

const fs = require('fs');
const readline = require('readline');

const INPUT_PATH = 'src/data/hostinger-registry/assets_manifest_v8.json';
const OUTPUT_PATH = 'src/data/hostinger-registry/legacy_assets.json';

const legacyKeywords = [
  'legacy', 'basketball', 'championship', 'hall of fame', 'al rayyan', 'qatar cup', 'national team', 'slam dunk', 'trophy', 'career', 'pro baller', 'basketball legend', 'air attack', 'paint', 'dunk', 'athlete', 'sports club', 'fiba', 'asia', 'league', 'scoring', 'captain', 'team', 'court', 'game', 'season', 'highlight', 'mizo amin'
];

function matchesLegacy(entry) {
  const text = JSON.stringify(entry).toLowerCase();
  return legacyKeywords.some(k => text.includes(k));
}

async function extractLegacyAssets() {
  const input = fs.createReadStream(INPUT_PATH);
  const rl = readline.createInterface({ input });
  let buffer = '';
  let insideObject = false;
  let objectBuffer = '';
  let count = 0;
  let output = [];

  for await (const line of rl) {
    const trimmed = line.trim();
    if (trimmed.startsWith('{')) {
      insideObject = true;
      objectBuffer = trimmed;
    } else if (insideObject) {
      objectBuffer += '\n' + trimmed;
      if (trimmed.startsWith('}')) {
        insideObject = false;
        try {
          const entry = JSON.parse(objectBuffer.replace(/,$/,''));
          if (matchesLegacy(entry)) {
            // Only keep relevant fields
            output.push({
              Title: entry.Title,
              Caption: entry.Caption,
              Description: entry.Description,
              Year: entry.Year,
              Location: entry.Location,
              Tags: entry.Tags,
              Image: entry.Image || entry.Image_URL || entry.image_url || null
            });
            count++;
            if (count % 100 === 0) console.log(`Extracted ${count} legacy assets...`);
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`Done! Extracted ${count} legacy assets to ${OUTPUT_PATH}`);
}

extractLegacyAssets();
