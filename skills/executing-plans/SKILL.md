---
name: executing-plans
description: Use when you have a written implementation plan to execute in a separate session with review checkpoints
---

# Executing plans

Run a written plan task-by-task in this session with checkpoints.

## Flow

1. Read the full plan once.
2. Confirm starting task with the user if ambiguous.
3. For each task:
   - Follow `test-driven-development` and `tight-ship` (size).
   - Implement only that task.
   - Run the task's check; keep output.
   - Brief status: done / blocked / needs decision.
4. After each major task or on failure: pause for user direction if blocked.
5. When all tasks complete: `verification-before-completion`, then `requesting-code-review` or `finishing-a-development-branch`.

## Rules

- Do not expand scope beyond the plan without user OK.
- Do not skip checks.
- Prefer `using-git-worktrees` if the plan expects isolation and none exists.
- Same-session multi-task with subagents → use `task-driven-development` instead.
