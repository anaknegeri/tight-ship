# tight-ship

**Superpowers process gates + Ponytail minimal code** — one methodology for coding agents.

Process stays: design → plan → check → verify → finish.  
Code stays small: YAGNI, reuse, stdlib, shortest correct diff.

> Process wins on **when**. Ponytail wins on **how much**.

| | Superpowers alone | Ponytail alone | **tight-ship** |
|--|--|--|--|
| Design before code | Yes (often heavy) | Optional / skip | Yes, **short** |
| Implementation size | Can grow with plan | Minimal | Minimal |
| “Done” without proof | Discouraged | Easy to skip | **Forbidden** |
| Speculative abstractions | Sometimes | No | No |

## Quick install (OpenCode)

Add to `~/.config/opencode/opencode.json` or `opencode.jsonc`:

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git"
  ]
}
```

Restart OpenCode. Ask: **“Tell me about tight-ship”**

Pin a version:

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v1.0.0"
  ]
}
```

More harnesses: [docs/INSTALL.md](docs/INSTALL.md)  
How it works: [docs/METHODOLOGY.md](docs/METHODOLOGY.md)  
FAQ / conflicts: [docs/FAQ.md](docs/FAQ.md)

## What the agent does

1. **Scope** — skip work that doesn’t need to exist  
2. **Design** — short design; no code until you approve  
3. **Plan** — thin tasks, one acceptance check each  
4. **Build** — failing check → minimal code → pass  
5. **Verify** — run commands; claim done only with output  
6. **Finish** — merge / PR / stop  

Full rules live in [`skills/tight-ship/SKILL.md`](skills/tight-ship/SKILL.md).

## With Superpowers and/or Ponytail

You can install tight-ship **alongside** [Superpowers](https://github.com/obra/superpowers) and [Ponytail](https://github.com/DietrichGebert/ponytail).

- Bootstrap marker: `TIGHT_SHIP_ACTIVE` (does not collide with Superpowers’ inject)  
- Agent is told: **prefer tight-ship** when process vs bulk conflict  
- Domain skills (Go, React, etc.) still apply after design/plan  

To run **only** tight-ship, remove the other methodology plugins from config.

## Session controls

| Say | Effect |
|-----|--------|
| `stop tight-ship` / `normal mode` | Drop this methodology for the session |
| `stop ponytail` | Independent; only if Ponytail plugin is active |

## Verify install

```text
Tell me about tight-ship
```

or load the skill explicitly in your agent.

## Layout

```text
tight-ship/
  package.json
  skills/tight-ship/SKILL.md      # methodology (agent-facing)
  .opencode/plugins/tight-ship.js # OpenCode: skills path + bootstrap
  hooks/session-start             # Claude Code / Cursor / Copilot-style
  docs/                           # human-facing guides
  README.md
  LICENSE
```

## Local development

```bash
git clone git@github.com:anaknegeri/tight-ship.git
```

```jsonc
{
  "plugin": [
    "file:///absolute/path/to/tight-ship"
  ]
}
```

## License

MIT — see [LICENSE](LICENSE).

## Credits

- Process discipline inspired by [obra/superpowers](https://github.com/obra/superpowers)  
- Minimal-code ladder inspired by [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)  
- Combined into one installable methodology by [anaknegeri](https://github.com/anaknegeri)
