---
name: writing-plans
description: Use when you have an approved design or clear requirements for a multi-step task, before touching implementation code
---

# Writing plans

Produce a thin, executable plan a junior agent can follow without inventing scope.

## Output

Save to `docs/tight-ship/plans/YYYY-MM-DD-<feature>.md` when non-trivial.

Structure:

```markdown
# Plan: <title>

## Goal
<one paragraph>

## Constraints
- ...

## Tasks

### Task 1: <name>
- **Do:** ...
- **Files:** ...
- **Check:** <one command or assertion that fails if incomplete>
- **Done when:** ...

### Task 2: ...
```

## Rules

- Fewest tasks that deliver the goal.
- Each task: one acceptance check.
- No "future-proof", "phase 2 polish", or speculative infrastructure.
- Steps assume TDD: failing check → minimal code → pass.
- Reference `tight-ship` for size ladder during implementation.
- End with execution choice:
  - same session → `task-driven-development`
  - new session → `executing-plans`

## Anti-patterns

- Essay plans
- Tasks without checks
- Coupling unrelated subsystems in one task
