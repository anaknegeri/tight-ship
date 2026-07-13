---
name: verification-before-completion
description: Use when about to claim work is complete, fixed, or passing — before commits or PRs; evidence before assertions
---

# Verification before completion

**No success claims without fresh command output.**

## Required

Before saying done / fixed / passing / ready:

1. Run the relevant checks (tests, build, lint, or the task's stated check).
2. Read the output.
3. Only then claim status — quote what passed.

## Forbidden

- "Should be fine"
- "Tests probably pass"
- "I fixed it" without re-run
- Relying on earlier green from before the last edit

## Output shape

```text
Verified:
- <command> → <pass/fail summary>
Status: <done | blocked>
```
