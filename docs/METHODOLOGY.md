# Methodology

tight-ship is a **skill suite**: bootstrap + process skills + lean implementation skill.

## Core rule

| Layer | Skill(s) | Responsibility |
|-------|----------|----------------|
| Bootstrap | `using-tight-ship` | Invoke the right skill first |
| Process | designing, plans, TDD, debug, verify, review, finish | When and how to proceed |
| Parallelism | task-driven, dispatching-parallel | Multi-agent / multi-task |
| Size | `tight-ship` | How little code to write |
| Domain | your stack skills | Language/framework patterns after process |

**Precedence:** user instructions → tight-ship skills → other methodology → default.

## Happy path

```text
designing (approve)
  → writing-plans
  → using-git-worktrees (optional)
  → task-driven-development  or  executing-plans  or  dispatching-parallel-agents
  → per task: test-driven-development + tight-ship
  → verification-before-completion
  → requesting-code-review
  → finishing-a-development-branch
```

## Size ladder (during build)

1. Skip  
2. Reuse repo code  
3. Stdlib  
4. Native platform  
5. Existing dependency  
6. One-liner  
7. Minimum new code  

## Hard gates

- No code before design approval  
- No implementation before failing check (non-trivial)  
- No “done” without verification output  
- Bugs: root cause before patch  

## Multi-agent

- **task-driven-development** — sequential tasks, optional subagent per task, review between tasks  
- **dispatching-parallel-agents** — independent packages in parallel; parent integrates  

Requires a host that can run subagents (e.g. OpenCode `task` tool). Without subagents, the same agent still follows the loops narrowly.

## Artifacts

| Path | Content |
|------|---------|
| `docs/tight-ship/specs/` | Design docs |
| `docs/tight-ship/plans/` | Implementation plans |

## Source of truth

Skill files under [`skills/`](../skills/).
