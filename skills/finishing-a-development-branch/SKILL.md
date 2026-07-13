---
name: finishing-a-development-branch
description: Use when implementation is complete, checks pass, and you need to decide how to integrate the work
---

# Finishing a development branch

Present structured options; do not force merge or PR.

## Preconditions

- `verification-before-completion` passed (evidence in hand).
- Working tree intentional (no surprise files).

## Offer options

1. **Merge** to base branch (local)  
2. **Open PR** (push + `gh pr create` if remote GitHub)  
3. **Keep branch** — stop here, user continues later  
4. **Discard** — only with explicit user confirm  

## For each chosen path

- Show commands/results.
- PR: include summary of goal + test evidence.
- Worktree: clean up only after user OK or successful integrate.

## Do not

- Force-push unless asked.
- Merge to main without user preference if unclear.
