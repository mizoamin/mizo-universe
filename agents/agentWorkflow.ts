// agentWorkflow.ts
// Runtime entrypoint for autonomous self-evolution cycles.

type CycleOptions = {
  watch?: boolean;
  intervalMs?: number;
  dryRun?: boolean;
};

function parseArgs(argv: string[]): CycleOptions {
  return {
    watch: argv.includes('--watch'),
    dryRun: argv.includes('--dry-run'),
    intervalMs: (() => {
      const token = argv.find((item) => item.startsWith('--interval='));
      if (!token) return 60000;
      const value = Number(token.split('=')[1]);
      return Number.isFinite(value) && value >= 5000 ? value : 60000;
    })(),
  };
}

function printCycleReport(result: {
  dashboard: string;
  weaknesses: Array<{ severity: string; summary: string; code: string }>;
  suggestions: string[];
  addedTodoTasks: string[];
  memoryPath: string;
}) {
  console.log(result.dashboard);

  if (result.weaknesses.length > 0) {
    console.log('\n🔍 DETECTED WEAKNESSES:');
    result.weaknesses.forEach((item) => {
      console.log(`- [${item.severity.toUpperCase()}] ${item.summary} (${item.code})`);
    });
  }

  if (result.suggestions.length > 0) {
    console.log('\n🚀 IMPROVEMENT PROPOSALS:');
    result.suggestions.forEach((item) => console.log(`- ${item}`));
  }

  if (result.addedTodoTasks.length > 0) {
    console.log('\n📝 TODO TASKS ADDED:');
    result.addedTodoTasks.forEach((item) => console.log(`- ${item}`));
  }

  console.log(`\n🧠 MEMORY: ${result.memoryPath}`);
}

export async function runSelfEvolutionCycle(options: CycleOptions = {}) {
  const { SelfEvolutionEngine } = await import('./SelfEvolutionEngine.js');
  const cycleResult = SelfEvolutionEngine.runCycle({ write: !options.dryRun });
  printCycleReport(cycleResult);
  return cycleResult;
}

async function start() {
  const options = parseArgs(process.argv.slice(2));

  await runSelfEvolutionCycle(options);

  if (!options.watch) {
    return;
  }

  const interval = options.intervalMs ?? 60000;
  console.log(`\n⏱️ Watch mode active: running every ${interval}ms`);

  setInterval(async () => {
    try {
      await runSelfEvolutionCycle(options);
    } catch (error) {
      console.error('Self-evolution cycle failed:', error);
    }
  }, interval);
}

start().catch((error) => {
  console.error('Failed to start self-evolution workflow:', error);
  process.exitCode = 1;
});
