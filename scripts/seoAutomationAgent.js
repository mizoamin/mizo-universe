// SEO Automation Agent — Node.js version
// Scans for missing SEO entries for planets/assets and logs results.

const { PLANET_SEO } = require("../src/config/seoConfig");
const { planetsData } = require("../src/config/planetMetadata");

function scanAssets() {
  // Stub: Extend to scan public/models, public/audio, public/images, etc.
  return [];
}

function checkPlanetSEO() {
  const planetIds = Object.keys(planetsData);
  const missing = planetIds.filter((id) => !(id in PLANET_SEO));
  return missing;
}

function runSEOAutomation() {
  const missingPlanets = checkPlanetSEO();
  const missingAssets = scanAssets();

  let report = "";
  if (missingPlanets.length === 0 && missingAssets.length === 0) {
    report += "✅ All planets and assets have SEO entries.\n";
  } else {
    if (missingPlanets.length > 0) {
      report += `❌ Missing SEO for planets: ${missingPlanets.join(", ")}\n`;
    }
    if (missingAssets.length > 0) {
      report += `❌ Missing SEO for assets: ${missingAssets.join(", ")}\n`;
    }
  }
  return report;
}

if (require.main === module) {
  const result = runSEOAutomation();
  console.log(result);
}
