#!/bin/bash
# run_self_evolution_and_issues.sh
set -euo pipefail

# 1. Run Self-Evolution Engine
npx ts-node agents/agentWorkflow.ts
# 2. Auto-create GitHub issues for new TODOs
node scripts/createGithubIssuesFromTodo.cjs
# 3. Send email notification with dashboard and suggestions
node scripts/notifySelfEvolutionResults.cjs
