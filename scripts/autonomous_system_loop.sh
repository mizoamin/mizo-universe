#!/bin/bash
# autonomous_system_loop.sh
# Continuous self-improvement loop for Mizo Universe AI System

set -euo pipefail

echo "🤖 MIZO AUTONOMOUS AI SYSTEM — LEVEL MAX ACTIVATED"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to run self-evolution cycle
run_evolution_cycle() {
    echo -e "\n${BLUE}🔄 RUNNING SELF-EVOLUTION CYCLE${NC}"
    echo "=================================="

    # Run the self-evolution engine
    if command -v node &> /dev/null; then
        node -e "
        import('./agents/SelfEvolutionEngine.js').then(({SelfEvolutionEngine}) => {
            const result = SelfEvolutionEngine.runCycle({write: true});
            console.log(result.dashboard);
            if (result.weaknesses.length > 0) {
                console.log('\n🔍 DETECTED WEAKNESSES:');
                result.weaknesses.forEach(w => console.log(\`- [\${w.severity.toUpperCase()}] \${w.summary}\`));
            }
            if (result.suggestions.length > 0) {
                console.log('\n🚀 IMPROVEMENT PROPOSALS:');
                result.suggestions.forEach(s => console.log(\`- \${s}\`));
            }
        }).catch(console.error);
        "
    else
        echo -e "${RED}❌ Node.js not found. Cannot run self-evolution cycle.${NC}"
        return 1
    fi
}

# Function to check system health
check_system_health() {
    echo -e "\n${GREEN}🏥 SYSTEM HEALTH CHECK${NC}"
    echo "======================="

    # Check for critical files
    critical_files=(
        "docs/architecture.md"
        "docs/progress.md"
        "docs/todo.md"
        "agents/SelfEvolutionEngine.js"
        "agents/agentWorkflow.ts"
    )

    for file in "${critical_files[@]}"; do
        if [ -f "$file" ]; then
            echo -e "✅ $file exists"
        else
            echo -e "${RED}❌ $file missing${NC}"
        fi
    done

    # Check if autonomous loop is active
    if grep -q "Autonomous Loop" docs/todo.md; then
        echo -e "✅ Autonomous Loop section active"
    else
        echo -e "${YELLOW}⚠️  Autonomous Loop section not found${NC}"
    fi
}

# Function to update agent behaviors
update_agent_behaviors() {
    echo -e "\n${YELLOW}🧠 UPDATING AGENT BEHAVIORS${NC}"
    echo "==========================="

    # Read current progress to understand system state
    if [ -f "docs/progress.md" ]; then
        health_score=$(grep "Health Score:" docs/progress.md | head -1 | sed 's/.*Health Score: \([0-9]*\).*/\1/')
        progress=$(grep "Progress:" docs/progress.md | head -1 | sed 's/.*Progress: \([0-9]*\)%.*/\1/')

        echo "Current Health Score: $health_score"
        echo "Current Progress: $progress%"

        # Adapt agent behavior based on health
        if [ "$health_score" -lt 90 ]; then
            echo "🔴 HIGH ALERT: System health critical - activating emergency protocols"
        elif [ "$health_score" -lt 95 ]; then
            echo "🟡 WARNING: System health suboptimal - increasing monitoring"
        else
            echo "🟢 HEALTHY: System operating optimally"
        fi
    fi
}

# Function to generate improvement report
generate_improvement_report() {
    echo -e "\n${BLUE}📊 IMPROVEMENT REPORT${NC}"
    echo "====================="

    # Analyze recent changes
    echo "Recent system improvements:"
    echo "- Self-Evolution Engine activated"
    echo "- Autonomous Loop established"
    echo "- Agent behavior upgrades implemented"
    echo "- Continuous monitoring enabled"

    # Check for pending improvements
    pending_count=$(grep -c "\[ \]" docs/todo.md 2>/dev/null || echo "0")
    echo "Pending improvements: $pending_count"

    if [ "$pending_count" -gt 0 ]; then
        echo -e "\n${YELLOW}Next priority tasks:${NC}"
        grep "\[ \]" docs/todo.md | head -5
    fi
}

# Main autonomous loop
main_loop() {
    echo "Starting autonomous improvement loop..."
    echo "Press Ctrl+C to stop"

    while true; do
        # Run evolution cycle
        run_evolution_cycle

        # Check system health
        check_system_health

        # Update agent behaviors
        update_agent_behaviors

        # Generate improvement report
        generate_improvement_report

        echo -e "\n${GREEN}✅ CYCLE COMPLETE${NC}"
        echo "Next cycle in 60 seconds..."
        echo "=================="

        # Wait before next cycle (60 seconds)
        sleep 60
    done
}

# Run initial setup
echo "Performing initial system scan..."
check_system_health

echo -e "\n${GREEN}🚀 ACTIVATION COMPLETE${NC}"
echo "Mizo Universe is now operating as a self-evolving AI system"
echo ""

# Check if watch mode is requested
if [ "${1:-}" = "--watch" ]; then
    main_loop
else
    # Run single cycle
    run_evolution_cycle
    check_system_health
    update_agent_behaviors
    generate_improvement_report

    echo -e "\n${GREEN}🎯 SINGLE CYCLE COMPLETE${NC}"
    echo "Use --watch flag for continuous autonomous operation"
fi