---
name: using-tight-ship
description: Use when starting any conversation — establishes how to find and use tight-ship skills before any response or action
---

# Using tight-ship

If dispatched as a subagent for a narrow task, skip this skill and do only the assigned work.

## The rule

**Invoke relevant skills BEFORE any response or action** — including clarifying questions, exploring the codebase, or checking files. Wrong skill is fine; skipping the check is not.

Announce: `Using [skill] to [purpose]`. Follow the skill exactly. If it has a checklist, track items.

## Priority

Process skills first (set approach), then implementation / domain skills.

| User intent | First skill |
|-------------|-------------|
| Build / add / change behavior | `designing` |
| Have a plan, implement it (this session) | `task-driven-development` |
| Have a plan, separate session | `executing-plans` |
| Bug / test failure / weird behavior | `systematic-debugging` |
| About to say done / fixed / passing | `verification-before-completion` |
| Writing code for a task | `test-driven-development` then `tight-ship` (size) |
| 2+ independent tasks | `dispatching-parallel-agents` |
| Async wait (server / file / job ready) | `condition-based-waiting` |
| Need isolated branch workspace | `using-git-worktrees` |
| Implementation complete | `finishing-a-development-branch` |
| Got review feedback | `receiving-code-review` |
| Major feature done / pre-merge | `requesting-code-review` |

## Dormancy — when to skip the check

The check fires on **work**, not on **talking**. A turn with no factual claim, number, decision, code change, or third party relying on the output — casual chat, a quick lookup, an opinion, claim-free brainstorming — is answered directly: no skill-check, no announce.

Discipline that triggers on everything gets ignored. Reserve the ceremony for turns where being wrong is expensive.

## Red flags — STOP

| Thought | Reality |
|---------|---------|
| "Simple question" | Drives code or a decision? Check. Pure chat / lookup? Dormancy applies. |
| "Need context first" | Skill check before explore. |
| "I'll just start coding" | `designing` first for creative work. |
| "Skill is overkill" | Use it; scale depth down, don't skip. |
| "I remember the skill" | Load current version. |
| "Done, tests probably pass" | `verification-before-completion`. |

## Precedence

User instructions > tight-ship skills > other methodology > default.

## Platform notes

Map skill actions to host tools (OpenCode: `skill`, `task`, `todowrite`, `read`, `edit`, `bash`, `grep`, `glob`).

Claude Code: skills are invoked via the Skill tool under the `tight-ship:` prefix — e.g. `tight-ship:designing`, `tight-ship:systematic-debugging`. Bare names in these docs map to that qualified id.
