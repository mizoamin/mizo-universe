// SelfEvolutionEngine.js
// Autonomous evolution loop for docs-driven self-improvement and alignment.

import fs from 'node:fs';
import path from 'node:path';

const DOCS = ['docs/architecture.md', 'docs/progress.md', 'docs/todo.md'];
const MEMORY_PATH = '.mizo/self-evolution-memory.json';

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf-8');
  } catch {
    return '';
  }
}

function writeFileSafe(filePath, content) {
  const absolute = path.resolve(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, content, 'utf-8');
}

function uniq(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function nowIso() {
  return new Date().toISOString();
}

export class SelfEvolutionEngine {
  static scanDocs() {
    const result = {};
    for (const doc of DOCS) {
      result[doc] = readFileSafe(doc);
    }
    return result;
  }

  static loadMemory() {
    const raw = readFileSafe(MEMORY_PATH);
    if (!raw) {
      return {
        runs: 0,
        unresolvedBySuggestion: {},
        recurringWeaknesses: {},
        recentReports: [],
        lastHealthScore: null,
      };
    }

    try {
      return JSON.parse(raw);
    } catch {
      return {
        runs: 0,
        unresolvedBySuggestion: {},
        recurringWeaknesses: {},
        recentReports: [],
        lastHealthScore: null,
      };
    }
  }

  static saveMemory(memory) {
    writeFileSafe(MEMORY_PATH, `${JSON.stringify(memory, null, 2)}\n`);
  }

  static parseStatus(progressDoc) {
    const healthScore = parseInt((progressDoc.match(/Health Score:\s*(\d+)/i) || [])[1] || '0', 10);
    const progress = parseInt((progressDoc.match(/Progress:\s*(\d+)%/i) || [])[1] || '0', 10);
    const currentPhase = (progressDoc.match(/Current Phase:\s*(.+)/i) || [])[1]?.trim() || 'Unknown';
    // Strip leading markdown bold markers (e.g. "** value" → "value")
    const nextPriorityRaw = (progressDoc.match(/Next Priority:\s*(.+)/i) || [])[1]?.trim() || 'Unknown';
    const nextPriority = nextPriorityRaw.replace(/^\*+\s*/, '');
    const riskLevelRaw = (progressDoc.match(/Risk Level:\s*(.+)/i) || [])[1]?.trim() || 'Unknown';
    const riskLevel = riskLevelRaw.replace(/^\*+\s*/, '');

    const bottleneckSectionMatch = progressDoc.match(/Bottlenecks:\s*([\s\S]*?)(?=\n-\s+(?:Risk Level|Next Priority|Health Score|Progress|Current Phase)|\n\n|\n##\s)/i);
    const bottlenecks = bottleneckSectionMatch
      ? uniq(
          bottleneckSectionMatch[1]
            .split(/;|\n/)
            .map((item) => item.replace(/^\s*-?\s*\**/g, '').replace(/\*+$/, '').trim())
            .filter((item) => item && !/^Risk Level/i.test(item)),
        )
      : [];

    return { healthScore, progress, currentPhase, nextPriority, bottlenecks, riskLevel };
  }

  static detectWeaknesses(docs) {
    const architecture = docs['docs/architecture.md'] || '';
    const progress = docs['docs/progress.md'] || '';
    const todo = docs['docs/todo.md'] || '';

    const weaknesses = [];

    if ((todo.match(/##\s+Phase\s+12\s+—\s+Self-Evolution Engine Activation/gi) || []).length > 1) {
      weaknesses.push({
        code: 'DUPLICATE_PHASE_12',
        severity: 'high',
        summary: 'Duplicate Phase 12 blocks create roadmap drift and confusion.',
      });
    }

    if (/Overall Progress[\s\S]*100%/i.test(progress) && /Overall\s*\|\s*\*\*~?75%\*\*/i.test(progress)) {
      weaknesses.push({
        code: 'PROGRESS_CONTRADICTION',
        severity: 'high',
        summary: 'Progress dashboard and summary table are contradictory.',
      });
    }

    // Per-target check: only flag if the ⚠️/❌ marker appears on the SAME line as the target filename
    const partialTargets = [
      'seoConfig.ts',
      'performance.ts',
      'mathUtils.ts',
      'usePlanetTextures.ts',
      'ShootingStars.tsx',
    ];
    for (const target of partialTargets) {
      const linePattern = new RegExp(`${target.replace('.', '\\.')}[^\\n]*(?:⚠️\\s*Partial|⚠️\\s*Placeholder|❌)`, 'i');
      if (linePattern.test(progress)) {
        weaknesses.push({
          code: `INCOMPLETE_${target}`,
          severity: 'medium',
          summary: `Incomplete implementation still detected for ${target}.`,
        });
      }
    }

    if (!/##\s+Autonomous Loop\s+—\s+Continuous Improvement/i.test(todo)) {
      weaknesses.push({
        code: 'MISSING_AUTONOMOUS_LOOP',
        severity: 'high',
        summary: 'No explicit continuous-improvement loop section in TODO.',
      });
    }

    if (/Model:\s*Claude/i.test(readFileSafe('docs/agents.md')) && !/GPT-5.3 Codex/i.test(readFileSafe('docs/agents.md'))) {
      weaknesses.push({
        code: 'MODEL_ALIGNMENT_GAP',
        severity: 'low',
        summary: 'Agent model metadata is inconsistent and may reduce reproducibility.',
      });
    }

    if (/TheSolarSystem\.tsx\s+Orchestrates all planet orbits\s*\(7\/10 wired\)/i.test(architecture)) {
      weaknesses.push({
        code: 'ARCH_DOC_STALE_WIRING',
        severity: 'medium',
        summary: 'Architecture references stale solar-system wiring state.',
      });
    }

    // Detect unresolved SEO blockers in todo
    if (/- \[ \].*Dynamic meta tags for 20k\+/i.test(todo)) {
      weaknesses.push({
        code: 'MISSING_DYNAMIC_ASSET_META',
        severity: 'medium',
        summary: 'Dynamic meta tags for 20k+ asset pages are not yet implemented.',
      });
    }

    // Detect if ShootingStars Phase 5 work is still open in todo
    if (/- \[ \].*ShootingStars/i.test(todo)) {
      weaknesses.push({
        code: 'TODO_SHOOTINGSTARS_OPEN',
        severity: 'low',
        summary: 'ShootingStars particle system still listed as open in todo.md.',
      });
    }

    // Detect if summary table shows stale overall percentage
    const overallMatch = progress.match(/\*\*Overall\*\*\s*\|\s*\*\*~?(\d+)%\*\*/i);
    if (overallMatch) {
      const overallPct = parseInt(overallMatch[1], 10);
      const dashboardProgress = parseInt((progress.match(/Progress:\s*(\d+)%/i) || [])[1] || '0', 10);
      if (Math.abs(overallPct - dashboardProgress) > 15) {
        weaknesses.push({
          code: 'PROGRESS_SUMMARY_DRIFT',
          severity: 'medium',
          summary: `Summary table shows ${overallPct}% but dashboard reports ${dashboardProgress}% — synchronize docs.`,
        });
      }
    }

    return weaknesses;
  }

  static generateSuggestions({ weaknesses, status, memory }) {
    const suggestions = [];

    for (const weakness of weaknesses) {
      if (weakness.code === 'DUPLICATE_PHASE_12') {
        suggestions.push('Consolidate duplicate Phase 12 sections in docs/todo.md into a single source of truth.');
      }
      if (weakness.code === 'PROGRESS_CONTRADICTION') {
        suggestions.push('Synchronize docs/progress.md dashboard percentages with module summary tables.');
      }
      if (weakness.code.startsWith('INCOMPLETE_')) {
        suggestions.push('Prioritize stub completion for SEO and runtime performance utilities before new feature expansion.');
      }
      if (weakness.code === 'ARCH_DOC_STALE_WIRING') {
        suggestions.push('Update docs/architecture.md to reflect current solar system wiring and active planet count.');
      }
      if (weakness.code === 'MISSING_AUTONOMOUS_LOOP') {
        suggestions.push('Add Autonomous Loop section enforcing analyze -> detect -> suggest -> update docs after every cycle.');
      }
      if (weakness.code === 'MISSING_DYNAMIC_ASSET_META') {
        suggestions.push('Implement dynamic meta tags for 20k+ asset pages — required for full Google 2026 indexing coverage.');
      }
      if (weakness.code === 'TODO_SHOOTINGSTARS_OPEN') {
        suggestions.push('Mark ShootingStars.tsx as complete in docs/todo.md — particle trail system has been implemented.');
      }
      if (weakness.code === 'PROGRESS_SUMMARY_DRIFT') {
        suggestions.push('Synchronize docs/progress.md summary table percentage with dashboard progress percentage.');
      }
    }

    if (status.riskLevel.toLowerCase().includes('low') && weaknesses.length > 3) {
      suggestions.push('Raise risk level from Low while high-severity documentation drift remains unresolved.');
    }

    for (const [text, unresolvedCount] of Object.entries(memory.unresolvedBySuggestion || {})) {
      if (unresolvedCount >= 2) {
        suggestions.push(`Escalate recurring item: ${text}`);
      }
    }

    return uniq(suggestions);
  }

  static buildDashboard({ score, progressPercent, currentPhase, nextPriority, bottlenecks, riskLevel }) {
    return [
      '📊 SYSTEM STATUS UPDATE:',
      `- Health Score: ${score}`,
      `- Progress: ${progressPercent}%`,
      `- Current Phase: ${currentPhase}`,
      `- Next Priority: ${nextPriority}`,
      `- Bottlenecks: ${bottlenecks.length ? bottlenecks.join('; ') : 'None currently detected'}`,
      `- Risk Level: ${riskLevel}`,
    ].join('\n');
  }

  static computeHealth(status, weaknesses) {
    const severityPenalty = weaknesses.reduce((acc, weakness) => {
      if (weakness.severity === 'high') return acc + 7;
      if (weakness.severity === 'medium') return acc + 4;
      return acc + 2;
    }, 0);

    const baseline = status.healthScore || 90;
    return clamp(baseline - severityPenalty, 0, 100);
  }

  static estimateProgress(status, weaknesses) {
    const baseline = status.progress || 75;
    const penalty = weaknesses.length * 2;
    return clamp(baseline - penalty, 0, 100);
  }

  static deriveRiskLevel(weaknesses) {
    if (weaknesses.some((w) => w.severity === 'high')) return 'Medium';
    if (weaknesses.some((w) => w.severity === 'medium')) return 'Low-Medium';
    return 'Low';
  }

  static deriveNextPriority(weaknesses, suggestions, status) {
    if (weaknesses.some((w) => w.code === 'PROGRESS_CONTRADICTION')) {
      return 'Stabilize docs truth model: progress.md + todo.md synchronization';
    }
    if (suggestions.length > 0) {
      return suggestions[0];
    }
    return status.nextPriority || 'Continue performance and SEO hardening';
  }

  static updateProgressDoc(progressDoc, dashboardBlock, summaryLine) {
    let next = progressDoc;

    const heading = '## System Status Update';
    if (!next.includes(heading)) {
      next += `\n\n${heading}\n\n${dashboardBlock}\n`;
    } else {
      next = next.replace(
        /## System Status Update[\s\S]*?(?=\n## |$)/i,
        `${heading}\n\n${dashboardBlock}\n\n${summaryLine}\n`,
      );
    }

    if (!next.includes(summaryLine)) {
      next = next.replace(/## System Status Update\n\n/, `## System Status Update\n\n${summaryLine}\n\n`);
    }

    return next;
  }

  static addTodoTasks(todoDoc, suggestions) {
    if (!suggestions.length) return { content: todoDoc, added: [] };

    const insertionAnchor = '## Autonomous Loop — Continuous Improvement';
    if (!todoDoc.includes(insertionAnchor)) {
      return { content: todoDoc, added: [] };
    }

    const newTasks = suggestions
      .map((suggestion) => `- [ ] ${suggestion}`)
      .filter((line) => !todoDoc.includes(line));

    if (!newTasks.length) {
      return { content: todoDoc, added: [] };
    }

    const lines = todoDoc.split('\n');
    const anchorIndex = lines.findIndex((line) => line.trim() === insertionAnchor);
    const insertIndex = anchorIndex >= 0 ? anchorIndex + 1 : lines.length;
    lines.splice(insertIndex, 0, '', ...newTasks);
    return { content: lines.join('\n'), added: newTasks };
  }

  static dedupePhase12(todoDoc) {
    const marker = '## Phase 12 — Self-Evolution Engine Activation';
    const first = todoDoc.indexOf(marker);
    if (first === -1) return todoDoc;
    const second = todoDoc.indexOf(marker, first + marker.length);
    if (second === -1) return todoDoc;

    const third = todoDoc.indexOf(marker, second + marker.length);
    if (third === -1) {
      return `${todoDoc.slice(0, second)}\n${todoDoc.slice(second).replace(/^[\s\S]*?(?=##\s+Autonomous Loop|##\s+Phase\s+4|$)/, '')}`
        .replace(/\n{3,}/g, '\n\n')
        .trimEnd()
        .concat('\n');
    }

    return `${todoDoc.slice(0, second)}${todoDoc.slice(third)}`;
  }

  static updateMemory(memory, weaknesses, suggestions, score) {
    const next = {
      ...memory,
      runs: (memory.runs || 0) + 1,
      lastHealthScore: score,
      unresolvedBySuggestion: { ...(memory.unresolvedBySuggestion || {}) },
      recurringWeaknesses: { ...(memory.recurringWeaknesses || {}) },
      recentReports: Array.isArray(memory.recentReports) ? [...memory.recentReports] : [],
    };

    for (const weakness of weaknesses) {
      next.recurringWeaknesses[weakness.code] = (next.recurringWeaknesses[weakness.code] || 0) + 1;
    }

    for (const suggestion of suggestions) {
      next.unresolvedBySuggestion[suggestion] = (next.unresolvedBySuggestion[suggestion] || 0) + 1;
    }

    next.recentReports.push({
      at: nowIso(),
      weaknesses: weaknesses.map((item) => item.code),
      suggestions,
      score,
    });
    next.recentReports = next.recentReports.slice(-20);

    return next;
  }

  static runCycle(options = {}) {
    const { write = true } = options;
    const docs = SelfEvolutionEngine.scanDocs();
    const memory = SelfEvolutionEngine.loadMemory();
    const status = SelfEvolutionEngine.parseStatus(docs['docs/progress.md']);
    const weaknesses = SelfEvolutionEngine.detectWeaknesses(docs);
    const suggestions = SelfEvolutionEngine.generateSuggestions({ weaknesses, status, memory });

    const healthScore = SelfEvolutionEngine.computeHealth(status, weaknesses);
    const progressPercent = SelfEvolutionEngine.estimateProgress(status, weaknesses);
    const riskLevel = SelfEvolutionEngine.deriveRiskLevel(weaknesses);
    const nextPriority = SelfEvolutionEngine.deriveNextPriority(weaknesses, suggestions, status);

    const dashboard = SelfEvolutionEngine.buildDashboard({
      score: healthScore,
      progressPercent,
      currentPhase: 'Phase 12 — Self-Evolution Engine Activation',
      nextPriority,
      bottlenecks: uniq([...status.bottlenecks, ...weaknesses.map((w) => w.summary)]),
      riskLevel,
    });

    let updatedProgress = docs['docs/progress.md'];
    let updatedTodo = docs['docs/todo.md'];
    const progressSummary = `_Auto-updated: ${new Date().toUTCString()} · Run #${(memory.runs || 0) + 1}_`;

    updatedTodo = SelfEvolutionEngine.dedupePhase12(updatedTodo);
    const todoResult = SelfEvolutionEngine.addTodoTasks(updatedTodo, suggestions);
    updatedTodo = todoResult.content;
    updatedProgress = SelfEvolutionEngine.updateProgressDoc(updatedProgress, dashboard, progressSummary);

    const nextMemory = SelfEvolutionEngine.updateMemory(memory, weaknesses, suggestions, healthScore);

    if (write) {
      writeFileSafe('docs/progress.md', updatedProgress);
      writeFileSafe('docs/todo.md', updatedTodo);
      SelfEvolutionEngine.saveMemory(nextMemory);
    }

    return {
      dashboard,
      healthScore,
      progressPercent,
      riskLevel,
      currentPhase: 'Phase 12 — Self-Evolution Engine Activation',
      nextPriority,
      weaknesses,
      suggestions,
      addedTodoTasks: todoResult.added,
      memoryPath: MEMORY_PATH,
    };
  }

  static dashboard(status) {
    return SelfEvolutionEngine.buildDashboard({
      score: status.healthScore,
      progressPercent: status.progress,
      currentPhase: status.currentPhase,
      nextPriority: status.nextPriority,
      bottlenecks: status.bottlenecks,
      riskLevel: status.riskLevel,
    });
  }
}
