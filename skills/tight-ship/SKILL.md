---
name: tight-ship
description: Use when starting coding work, building features, fixing bugs, or deciding how much process and code is enough — especially when Superpowers process and Ponytail minimalism both apply or conflict.
---

# Tight Ship

**Process from Superpowers. Bulk from Ponytail.**  
Gates stay; solution size is the minimum that passes the gates.

User instructions > this skill > other methodology skills > default.

## Roles

| Layer | Owns | Does not own |
|-------|------|--------------|
| Process (Superpowers-shaped) | when to design / plan / TDD / verify / finish | how big the code is |
| Size (Ponytail-shaped) | YAGNI, ladder, shortest correct diff | skipping gates |
| Domain skills | Go/React/etc. patterns | process order |

When Superpowers and Ponytail conflict: **process wins on gates, Ponytail wins on bulk.**

## Pipeline

Run in order. Scale depth to task size (tiny task → tiny design; never zero gates).

1. **Scope** — Does this need to exist? Speculative → refuse in one line (YAGNI).
2. **Design** — Short design (2–10 sentences). No code until user approves. Hard gate.
3. **Plan** — Thin task list; one acceptance check per task. No essay plans.
4. **Build** — Per task: one failing check → minimal code (ladder) → pass → next.
5. **Debug** — Root cause in the shared path; not a patch on one caller.
6. **Verify** — Run proof commands; claim done only with output.
7. **Review** — Diff vs plan; delete over-engineering.
8. **Finish** — Ask: merge / PR / stop.

Optional worktree isolation for non-trivial features.

## Size ladder (stop at first that works)

1. Skip (YAGNI)
2. Reuse existing code in this repo
3. Stdlib / language built-in
4. Native platform feature
5. Already-installed dependency
6. One-liner
7. Minimum new code

No speculative abstractions, factories-for-one, config-for-constants, scaffolding "for later".

Mark deliberate shortcuts: `// ponytail: <why>, upgrade when <trigger>`.

## Never skip (even when lazy)

- Input validation at trust boundaries
- Error handling that prevents data loss
- Security basics
- Accessibility basics
- Anything the user explicitly requested
- Understanding the problem before the ladder (read flow first)

## Hard gates

| Gate | Rule |
|------|------|
| Design | No implementation skill, scaffold, or production code before design approval |
| TDD | One failing check before implementation for non-trivial logic |
| Done | No "fixed/done/passing" without verification command output |
| Bugs | Root cause first; fix once where callers route through |

## Design scale

- Trivial (typo, one-liner config): 2–3 sentences + approve
- Small feature: short design + 2–3 approaches only if trade-offs matter
- Large / multi-subsystem: decompose first, then one subproject at a time

Do **not** invoke full Superpowers `brainstorming` ceremony unless user asks or scope is large.

## Plan scale

- Tasks junior-executable, each with one check
- Prefer few tasks over speculative phases
- YAGNI in the plan: no "future-proof" tasks

## Build scale

- One acceptance check that fails if logic breaks (assert/demo/small test)
- No full test framework suite unless project already uses it or user asks
- Domain skills (golang-clean-architecture, react-tanstack, etc.) apply **after** design/plan

## Output shape

Code first. Then at most three short lines: what was skipped, when to add it.  
Pattern: `[code] → skipped: [X], add when [Y].`

## Red flags — STOP

| Thought | Reality |
|---------|---------|
| "Too simple for design" | Design can be 2 sentences. Still get approve. |
| "Skip verify, I know it works" | Evidence before claims. |
| "Patch this caller only" | Fix root path; sibling callers still broken. |
| "Build CacheManager for later" | YAGNI. Ladder first. |
| "Full Superpowers plan + full Ponytail ultra" | Use this skill; don't double-load both extremes. |
| "I'll explore then maybe skill" | Skill check before action. |

## Relation to installed packages

- Superpowers / Ponytail may remain installed for their sub-skills and tools.
- For methodology on coding work, **follow tight-ship first**.
- Invoke domain or specialist skills when their trigger matches; do not re-run full parallel methodologies.

## Commands

- `stop tight-ship` / `normal mode` — drop this methodology for the session (user request)
- User can still say `stop ponytail` independently if Ponytail plugin is active
