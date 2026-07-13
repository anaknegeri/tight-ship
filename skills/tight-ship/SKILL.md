---
name: tight-ship
description: Use when starting coding work, building features, fixing bugs, or deciding how much process and code is enough — when discipline and minimal implementation both matter.
---

# Tight Ship

**Disciplined process. Lean code.**  
Gates stay; solution size is the minimum that passes the gates.

User instructions > this skill > other methodology skills > default.

## Roles

| Layer | Owns | Does not own |
|-------|------|--------------|
| Process | when to design / plan / check / verify / finish | how big the code is |
| Size | skip unused work, reuse, shortest correct diff | skipping gates |
| Domain skills | stack patterns (Go, React, etc.) | process order |

When process depth and code thinness pull opposite ways: **process wins on gates, lean wins on bulk.**

## Pipeline

Run in order. Scale depth to task size (tiny task → tiny design; never zero gates).

1. **Scope** — Does this need to exist? Speculative → refuse in one line.
2. **Design** — Short design (2–10 sentences). No code until user approves. Hard gate.
3. **Plan** — Thin task list; one acceptance check per task. No essay plans.
4. **Build** — Per task: one failing check → minimal code (ladder) → pass → next.
5. **Debug** — Root cause in the shared path; not a patch on one caller.
6. **Verify** — Run proof commands; claim done only with output.
7. **Review** — Diff vs plan; delete over-engineering.
8. **Finish** — Ask: merge / PR / stop.

Optional worktree isolation for non-trivial features.

## Size ladder (stop at first that works)

1. Skip (does not need to exist)
2. Reuse existing code in this repo
3. Stdlib / language built-in
4. Native platform feature
5. Already-installed dependency
6. One-liner
7. Minimum new code

No speculative abstractions, factories-for-one, config-for-constants, scaffolding "for later".

Mark deliberate shortcuts: `// tight-ship: <why>, upgrade when <trigger>`.

## Never skip (even when lean)

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
| Check-first | One failing check before implementation for non-trivial logic |
| Done | No "fixed/done/passing" without verification command output |
| Bugs | Root cause first; fix once where callers route through |

## Design scale

- Trivial (typo, one-liner config): 2–3 sentences + approve
- Small feature: short design + 2–3 approaches only if trade-offs matter
- Large / multi-subsystem: decompose first, then one subproject at a time

Do **not** run a long design ceremony unless user asks or scope is large.

## Plan scale

- Tasks junior-executable, each with one check
- Prefer few tasks over speculative phases
- No "future-proof" tasks in the plan

## Build scale

- One acceptance check that fails if logic breaks (assert/demo/small test)
- No full test framework suite unless project already uses it or user asks
- Domain skills apply **after** design/plan

## Output shape

Code first. Then at most three short lines: what was skipped, when to add it.  
Pattern: `[code] → skipped: [X], add when [Y].`

## Red flags — STOP

| Thought | Reality |
|---------|---------|
| "Too simple for design" | Design can be 2 sentences. Still get approve. |
| "Skip verify, I know it works" | Evidence before claims. |
| "Patch this caller only" | Fix root path; sibling callers still broken. |
| "Build a manager class for later" | Ladder first. Ship the smallest thing. |
| "Max process and max ceremony" | Use this skill; short gates, lean code. |
| "I'll explore then maybe skill" | Skill check before action. |

## Relation to other skills

- Other methodology or domain skills may remain installed.
- For coding work methodology, **follow tight-ship first**.
- Invoke domain or specialist skills when their trigger matches; do not run parallel full methodologies.

## Commands

- `stop tight-ship` / `normal mode` — drop this methodology for the session (user request)
