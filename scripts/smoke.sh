#!/usr/bin/env bash
# Smoke checks for the tight-ship package layout
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
fail=0

need() {
  if [[ ! -e "$1" ]]; then
    echo "MISSING: $1"
    fail=1
  fi
}

need "$ROOT/package.json"
need "$ROOT/.opencode/plugins/tight-ship.js"
need "$ROOT/hooks/session-start"
need "$ROOT/skills/using-tight-ship/SKILL.md"
need "$ROOT/skills/tight-ship/SKILL.md"
need "$ROOT/skills/designing/SKILL.md"
need "$ROOT/skills/task-driven-development/SKILL.md"
need "$ROOT/skills/dispatching-parallel-agents/SKILL.md"
need "$ROOT/docs/SKILLS.md"

# Every skills/* dir must have SKILL.md
while IFS= read -r d; do
  need "$d/SKILL.md"
done < <(find "$ROOT/skills" -mindepth 1 -maxdepth 1 -type d)

# Frontmatter name matches folder
while IFS= read -r f; do
  dir=$(basename "$(dirname "$f")")
  name=$(awk '/^name:/{print $2; exit}' "$f")
  if [[ "$name" != "$dir" ]]; then
    echo "NAME MISMATCH: $f name=$name dir=$dir"
    fail=1
  fi
done < <(find "$ROOT/skills" -name SKILL.md)

# Plugin syntax
node --check "$ROOT/.opencode/plugins/tight-ship.js"

# No forbidden brand strings in published content
if rg -n 'superpower|ponytail|Superpowers|Ponytail|obra/superpowers|DietrichGebert' \
  "$ROOT/skills" "$ROOT/docs" "$ROOT/README.md" "$ROOT/package.json" \
  "$ROOT/.opencode" "$ROOT/hooks" 2>/dev/null; then
  echo "BRAND LEAK"
  fail=1
fi

if [[ $fail -ne 0 ]]; then
  echo "SMOKE FAIL"
  exit 1
fi
echo "SMOKE OK ($(find "$ROOT/skills" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ') skills)"
