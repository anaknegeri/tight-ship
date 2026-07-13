# Contributing

## Principles

- Skill **description** = when to use only (no workflow summary).  
- Keep each SKILL.md short; suite grows by new skills, not essays.  
- Original wording; do not paste third-party skill bodies.  
- Bootstrap stays in `using-tight-ship`; plugin injects that file only.

## Add a skill

1. `skills/<name>/SKILL.md` with YAML `name` + `description`.  
2. Link from `using-tight-ship` priority table if it should auto-trigger.  
3. Document in `docs/SKILLS.md` + README table.  
4. Bump version for release tags.

## Dev

```bash
git clone git@github.com:anaknegeri/tight-ship.git
```

```jsonc
{ "plugin": ["file:///absolute/path/to/tight-ship"] }
```

## Release

```bash
# bump package.json version
git tag v2.0.1 && git push origin v2.0.1
```
