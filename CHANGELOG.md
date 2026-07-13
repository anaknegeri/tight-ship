# Changelog

## [2.1.0] — 2026-07-13

### Added
- Multi-harness plugin manifests: Claude Code (`.claude-plugin/`), Codex (`.codex-plugin/`), Cursor (`.cursor-plugin/`)
- Claude Code hooks config (`hooks/hooks.json`) + Cursor hooks config (`hooks/hooks-cursor.json`)
- Cross-platform hook wrapper (`hooks/run-hook.cmd`)
- `writing-skills` skill (15 skills total)
- "Supported harnesses" section in README

## [2.0.2] — 2026-07-13

### Added
- GitHub Actions smoke workflow (`scripts/smoke.sh`)
- `examples/sample-plan.md` — example plan shape for onboarding
- This changelog

### Notes
- Methodology suite unchanged (14 skills, slash commands from 2.0.1)

## [2.0.1] — 2026-07-13

### Added
- Slash commands: `/tight-ship`, `/tight-ship-help`, `/tight-ship-status`
- `scripts/smoke.sh` + `npm test`
- Issue templates (bug, feature)
- Plugin registers OpenCode commands from `.opencode/command/`

### Changed
- README install pin to `#v2.0.1`
- Docs polish for standalone branding

## [2.0.0] — 2026-07-13

### Added
- Full skill suite (14 skills)
- Bootstrap `using-tight-ship` via OpenCode plugin + `hooks/session-start`
- Process: designing, writing-plans, executing-plans, task-driven-development, dispatching-parallel-agents
- Quality: test-driven-development, systematic-debugging, verification-before-completion
- Review/finish: requesting/receiving-code-review, using-git-worktrees, finishing-a-development-branch
- Size ladder skill: `tight-ship`
- Multi-harness docs under `docs/`

## [1.0.0] — 2026-07-13

### Added
- Initial mono-skill plugin + install docs
