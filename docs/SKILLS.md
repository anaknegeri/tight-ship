# Skills reference

All skills live under `skills/<name>/SKILL.md`. Descriptions are **triggers only** (when to load), not workflow summaries.

## Bootstrap

### using-tight-ship
Injected at session start. Forces skill selection before actions. Maps intents → skills. Includes red-flag table against skipping process.

## Process

### designing
Hard gate: approve design before any implementation. Scales from 2 sentences to multi-section specs under `docs/tight-ship/specs/`.

### writing-plans
Thin plans with one check per task under `docs/tight-ship/plans/`. Ends with task-driven vs executing-plans choice.

### executing-plans
Sequential plan execution with checkpoints in one session.

### task-driven-development
Per-task implement → check → review loop; supports subagents.

### dispatching-parallel-agents
Concurrent packages when tasks do not share files/state.

### condition-based-waiting
Poll a real async condition with a bounded timeout instead of a fixed `sleep`.

### test-driven-development
RED-GREEN-REFACTOR; delete code written before a failing check.

### systematic-debugging
Reproduce → locate → root cause → fix; shared path over shotgun patches.

### verification-before-completion
Fresh command output required before success claims.

### requesting-code-review
Spec + correctness + lean + security checklist before merge.

### receiving-code-review
Verify feedback; classify; implement with evidence.

### using-git-worktrees
`git worktree` isolation for feature work.

### finishing-a-development-branch
Offer merge / PR / keep / discard after verified completion.

## Maintenance

### writing-skills
Create or edit skills. Description = when-to-use only. TDD for documentation: baseline failure → write → verify.

## Implementation size

### tight-ship
Size ladder only (skip → reuse → stdlib → … → min code). Used during build, not instead of process skills.

## Examples

- Plan shape: [`examples/sample-plan.md`](../examples/sample-plan.md)

## Typical flows

**Feature**
`designing` → `writing-plans` → `using-git-worktrees`? → `task-driven-development` → `verification-before-completion` → `requesting-code-review` → `finishing-a-development-branch`

**Bug**
`systematic-debugging` → `test-driven-development` → `tight-ship` → `verification-before-completion`

**Parallel work**
`writing-plans` → `dispatching-parallel-agents` → integrate → verify
