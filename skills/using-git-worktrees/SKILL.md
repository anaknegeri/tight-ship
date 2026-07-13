---
name: using-git-worktrees
description: Use when starting feature work that needs isolation from the current workspace or before executing implementation plans
---

# Using git worktrees

Isolate feature work so main workspace stays clean.

## When

- Multi-file feature
- Plan execution that should not dirty current branch mid-other-work
- User asks for a branch/worktree

## When not

- Tiny one-file fix on current branch (user OK)
- Non-git directory

## Flow

1. Ensure clean enough state (or note dirty files).
2. Create branch + worktree (or host-native isolation if documented).
   ```bash
   git fetch 2>/dev/null || true
   git worktree add ../<repo>-<feature> -b <feature-branch>
   ```
3. Do all plan work inside that path.
4. On finish: merge/PR from that branch; remove worktree when done.

## Rules

- Prefer worktree over stashing chaos.
- Tell the user the worktree path.
- Do not delete worktrees with unpushed needed work without asking.
