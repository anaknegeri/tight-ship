---
name: designing
description: Use before any creative work — creating features, building components, adding functionality, or changing behavior
---

# Designing

Turn ideas into a short, approved design before implementation.

## Hard gate

**No code, scaffold, or implementation skill** until the user approves the design. Applies even when the task feels small. Design may be 2–3 sentences; approval is mandatory.

## Flow

1. **Context** — skim relevant files/docs; flag multi-subsystem scope for decompose.
2. **Questions** — one at a time; prefer multiple choice; purpose, constraints, success.
3. **Approaches** — 2–3 options with trade-offs; lead with recommendation (skip if truly one obvious path).
4. **Design** — present in short sections; get approval (section-by-section if large).
5. **Write** — save to `docs/tight-ship/specs/YYYY-MM-DD-<topic>-design.md` when non-trivial; skip file for tiny fixes if user agrees. If the repo shouldn't track process docs, gitignore `docs/tight-ship/` (ask once).
6. **Self-check** — no TBD, no contradictions, scoped to one plan.
7. **Next** — invoke `writing-plans` (only next process skill).

## Scale

| Size | Design depth |
|------|----------------|
| Typo / one-liner | 2 sentences + approve |
| Small feature | Short design, optional approaches |
| Large / multi-system | Decompose; design first subproject only |

## Principles

- One question per message when clarifying.
- Ruthless scope cut: drop unused features from the design.
- Prefer existing patterns in the repo.
- Do not start `test-driven-development` or coding from this skill.
