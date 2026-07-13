# Contributing

## Principles

- Keep `skills/tight-ship/SKILL.md` short enough to load every session.  
- Description field = **when to use only** (no workflow summary — agents skip the body otherwise).  
- Prefer editing the skill body over adding parallel methodology skills.  
- Docs in `docs/` are for humans; `SKILL.md` is for agents.  
- Stand on its own wording — do not frame the project as a mash-up of other products.

## Dev setup

```bash
git clone git@github.com:anaknegeri/tight-ship.git
cd tight-ship
```

OpenCode local plugin:

```jsonc
{
  "plugin": ["file:///absolute/path/to/tight-ship"]
}
```

## Change checklist

1. Edit `skills/tight-ship/SKILL.md` and/or docs.  
2. Keep README install snippets working.  
3. If plugin behavior changes, update `.opencode/plugins/tight-ship.js` and mention it in README.  
4. Bump `package.json` version for tagged releases.

## Release

```bash
git tag v1.0.1
git push origin v1.0.1
```

Users pin with:

```text
tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v1.0.1
```

## What we will not take

- Large ceremony that bloats every session  
- “Always generate full test suites” without project context  
- Speculative multi-skill frameworks inside this repo  
- Marketing copy that defines tight-ship only by comparing it to other named tools
