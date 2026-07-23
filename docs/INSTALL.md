# Install tight-ship

## OpenCode

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v2.2.0"
  ]
}
```

Local:

```jsonc
{
  "plugin": ["file:///absolute/path/to/tight-ship"]
}
```

Restart OpenCode. The plugin:

1. Registers `skills/` on the skills path  
2. Injects `using-tight-ship` on the first user message  

### Verify

```text
What tight-ship skills do you have?
```

```text
use skill tool to load designing
```

## Claude Code / Cursor / Copilot-style

```bash
git clone https://github.com/anaknegeri/tight-ship.git ~/.tight-ship
chmod +x ~/.tight-ship/hooks/session-start
```

- Point skills path at `~/.tight-ship/skills`  
- Register `hooks/session-start` as SessionStart if supported  

Skill-only (no bootstrap):

```bash
cp -R ~/.tight-ship/skills/* ~/.claude/skills/   # adjust path
```

## AGENTS.md snippet

```markdown
## Methodology
Primary suite: **tight-ship** (https://github.com/anaknegeri/tight-ship)
- Bootstrap: using-tight-ship
- Feature flow: designing → writing-plans → task-driven-development → verify → finish
- Size: tight-ship ladder while coding
```

## Update

```bash
# git pin: reinstall / clear OpenCode package cache
# clone: git -C ~/.tight-ship pull
```

## Uninstall

Remove plugin entry, skill copies, hooks; restart agent.
