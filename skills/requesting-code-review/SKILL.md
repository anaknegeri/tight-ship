---
name: requesting-code-review
description: Use when completing tasks, implementing major features, or before merging to verify work meets requirements
---

# Requesting code review

Review the diff against the plan/design before merge.

## When

- Major feature complete
- Before opening/merging PR
- After a multi-task plan

## Checklist

1. **Spec** — does diff match design/plan? Extra scope? Missing pieces?
2. **Correctness** — edge cases, error paths, data loss risks
3. **Lean** — dead code, speculative abstraction, unused deps (`tight-ship` ladder)
4. **Checks** — verification output present and green
5. **Security** — secrets, trust boundaries, authz

## How

- Prefer a fresh subagent/reviewer with plan + diff summary.
- Or self-review with the checklist written out.
- Fix blockers before `finishing-a-development-branch`.
