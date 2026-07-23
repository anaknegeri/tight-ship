# tight-ship

[![smoke](https://github.com/anaknegeri/tight-ship/actions/workflows/smoke.yml/badge.svg)](https://github.com/anaknegeri/tight-ship/actions/workflows/smoke.yml)
[![version](https://img.shields.io/badge/version-2.2.0-blue)](https://github.com/anaknegeri/tight-ship/blob/main/CHANGELOG.md)
[![license](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

**Full coding-agent methodology suite** — disciplined process, lean implementation, multi-agent ready.

Install once. The agent loads skills automatically for design, planning, TDD, debugging, parallel work, review, and finish.

## Quick install (OpenCode)

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v2.2.0"
  ]
}
```

Restart OpenCode. Ask: **“What tight-ship skills do you have?”**  
Commands: `/tight-ship-help`, `/tight-ship-status`, `/tight-ship`

Example plan shape: [examples/sample-plan.md](examples/sample-plan.md) · Changes: [CHANGELOG.md](CHANGELOG.md)

## Supported harnesses

OpenCode (native plugin), Claude Code (plugin + SessionStart hook), Cursor (plugin), Codex (plugin).

Install per harness: [docs/INSTALL.md](docs/INSTALL.md)

## Skills

| Skill | When |
|-------|------|
| `using-tight-ship` | Bootstrap (auto) — check skills first |
| `designing` | Before creative / feature work |
| `writing-plans` | After design, before code |
| `executing-plans` | Run plan in a focused session |
| `task-driven-development` | Plan tasks this session (subagents OK) |
| `dispatching-parallel-agents` | 2+ independent tasks |
| `test-driven-development` | Before implementation code |
| `tight-ship` | Size ladder while coding |
| `systematic-debugging` | Bugs / failures |
| `verification-before-completion` | Before “done” |
| `requesting-code-review` | Pre-merge / major feature |
| `receiving-code-review` | Handling review feedback |
| `using-git-worktrees` | Isolated feature workspace |
| `finishing-a-development-branch` | Merge / PR / stop |
| `writing-skills` | Create/edit skills |

## Pipeline

```text
designing → writing-plans → [worktree]
  → task-driven | executing-plans | parallel
  → TDD + size ladder per task
  → verify → review → finish
```

Bugs jump to `systematic-debugging` first.

## Docs

- [Install (multi-harness)](docs/INSTALL.md)
- [Methodology](docs/METHODOLOGY.md)
- [Skills reference](docs/SKILLS.md)
- [FAQ](docs/FAQ.md)
- [Contributing](docs/CONTRIBUTING.md)

## Layout

```text
skills/           # agent skills
.opencode/plugins/tight-ship.js
hooks/session-start
docs/
```

## License

MIT — [LICENSE](LICENSE)

Maintained by [anaknegeri](https://github.com/anaknegeri).
