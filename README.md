# tight-ship

**Disciplined process + lean code** — one methodology for coding agents.

Process stays: design → plan → check → verify → finish.  
Code stays small: skip unused work, reuse, stdlib, shortest correct diff.

> Process owns **when**. Lean owns **how much**.

| | Heavy process only | Code-thin only | **tight-ship** |
|--|--|--|--|
| Design before code | Yes (often heavy) | Often skipped | Yes, **short** |
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
FAQ: [docs/FAQ.md](docs/FAQ.md)

## What the agent does

1. **Scope** — skip work that doesn’t need to exist  
2. **Design** — short design; no code until you approve  
3. **Plan** — thin tasks, one acceptance check each  
4. **Build** — failing check → minimal code → pass  
5. **Verify** — run commands; claim done only with output  
6. **Finish** — merge / PR / stop  

Full rules live in [`skills/tight-ship/SKILL.md`](skills/tight-ship/SKILL.md).

## With other agent plugins

tight-ship works alone or next to other skills/plugins.

- Bootstrap marker: `TIGHT_SHIP_ACTIVE`  
- Agent is told: **prefer tight-ship** for methodology on coding work  
- Domain skills (Go, React, etc.) still apply after design/plan  

## Session controls

| Say | Effect |
|-----|--------|
| `stop tight-ship` / `normal mode` | Drop this methodology for the session |

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

Maintained by [anaknegeri](https://github.com/anaknegeri).
