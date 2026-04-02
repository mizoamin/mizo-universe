// createGithubIssuesFromTodo.cjs
// CommonJS variant for duplicate-safe autonomous TODO issue creation.

const fs = require('fs');
const { execSync } = require('child_process');

const TODO_PATH = 'docs/todo.md';

function extractTodos(text) {
  const lines = text.split('\n');
  return lines
    .map((line) => {
      const match = line.match(/^\s*-\s\[\s\]\s+(.+)$/);
      return match ? match[1].trim() : null;
    })
    .filter(Boolean)
    .filter((title) =>
      /self-evolution|autonomous|optimiz|alignment|performance|seo|risk|dashboard|synchron/i.test(title),
    );
}

function getExistingIssueTitles() {
  try {
    const output = execSync('gh issue list --limit 200 --state open --json title', {
      stdio: ['ignore', 'pipe', 'ignore'],
    }).toString();
    const parsed = JSON.parse(output);
    return new Set(parsed.map((item) => item.title.trim().toLowerCase()));
  } catch {
    return new Set();
  }
}

function createGithubIssue(title) {
  const safeTitle = title.replace(/"/g, '\\"');
  try {
    execSync(
      `gh issue create --title "[AUTO] ${safeTitle}" --body "Auto-generated from docs/todo.md by Self-Evolution Engine." --label "automation"`,
      { stdio: ['ignore', 'pipe', 'pipe'] },
    );
    console.log(`Created issue: ${title}`);
  } catch {
    console.error(`Failed to create issue: ${title}`);
  }
}

function main() {
  const todoText = fs.readFileSync(TODO_PATH, 'utf-8');
  const todos = extractTodos(todoText);
  const existing = getExistingIssueTitles();

  todos.forEach((title) => {
    const prefixed = `[AUTO] ${title}`.toLowerCase();
    if (existing.has(prefixed) || existing.has(title.toLowerCase())) {
      console.log(`Skipping existing issue: ${title}`);
      return;
    }
    createGithubIssue(title);
  });
}

main();
