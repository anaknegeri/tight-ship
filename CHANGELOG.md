# Changelog

## [2.2.0] — 2026-07-24

### Added
- `condition-based-waiting` skill — poll a real async condition with a bounded timeout instead of a fixed `sleep` (16 skills total)
- Dormancy clause in `using-tight-ship`: trivial / claim-free turns skip the skill-check ceremony
- Claude Code `tight-ship:` Skill-tool prefix documented in `using-tight-ship`
- "When not" section in `systematic-debugging`

### Changed
- `hooks/session-start` escapes injected content with `jq -Rs` (robust for control chars / unicode); hand-rolled escaper kept as fallback
- `designing` / `writing-plans` note gitignoring `docs/tight-ship/` when a repo shouldn't track process docs

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
