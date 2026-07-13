---
name: task-driven-development
description: Use when executing implementation plans with independent tasks in the current session
---

# Task-driven development

Execute a plan by dispatching focused work per task, then reviewing before the next task.

## When

- Plan exists with multiple tasks.
- Working in the **current** session (not a handoff doc only).

## Flow

```
For each task in order:
  1. Brief implementer (goal, files, check, constraints, size ladder)
  2. Implement (subagent if available, else same agent with narrow focus)
  3. Run task check — evidence required
  4. Spec review: matches task? missing? extra scope?
  5. Quality review: lean? root cause? safe?
  6. Fix blockers before next task
Then: verification-before-completion → finish/review skills
```

## Implementer brief (required shape)

1. Task goal (one sentence)  
2. Allowed files / out of scope  
3. Acceptance check command  
4. Design/plan pointers  
5. `tight-ship` size rules apply  
6. TDD: failing check first  

## Rules

- One task at a time unless `dispatching-parallel-agents` applies.
- No "while I'm here" refactors.
- Failed check → fix or report; do not mark done.
- Subagent tools: use host `task` / subagent API; keep prompts short.
