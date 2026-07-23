---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic debugging

Find root cause before changing code.

## When not

- Known typo / obvious one-line mistake with the fix already in view.
- Failure is a missing dependency or config the message names outright.
- Feature request or refactor — that is `designing`, not a bug.

## Four phases

1. **Reproduce** — reliable steps; capture failing output.
2. **Locate** — narrow to component/layer; read the real path (callers of the function you might touch).
3. **Root cause** — underlying reason, not first symptom.
4. **Fix** — smallest change at the shared point; add a check that fails without the fix; verify.

## Rules

- No shotgun patches across callers when one shared guard fixes all.
- No "try this" stacks without a hypothesis.
- If fix fails: new hypothesis from evidence, not random edits.
- After fix: `verification-before-completion`.

## Red flags

- "Quick patch here should work"
- Editing without reading callers
- Multiple unrelated changes in one "fix"
