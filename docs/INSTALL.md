# Install tight-ship

Install once per agent harness. Config does not transfer automatically between tools.

## OpenCode (recommended)

### From GitHub

`~/.config/opencode/opencode.json` or `opencode.jsonc`:

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git"
  ]
}
```

Restart OpenCode.

### Pin a tag / commit

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v1.0.0"
  ]
}
```

### Local clone (development)

```jsonc
{
  "plugin": [
    "file:///absolute/path/to/tight-ship"
  ]
}
```

### Skill only (no bootstrap inject)

```bash
mkdir -p ~/.config/opencode/skills/tight-ship
curl -fsSL https://raw.githubusercontent.com/anaknegeri/tight-ship/main/skills/tight-ship/SKILL.md \
  -o ~/.config/opencode/skills/tight-ship/SKILL.md
```

Or project-local:

```bash
mkdir -p .opencode/skills/tight-ship
cp skills/tight-ship/SKILL.md .opencode/skills/tight-ship/
```

Plugin install is preferred: auto-registers the skill path and injects bootstrap on the first user message.

### With other plugins

```jsonc
{
  "plugin": [
    "tight-ship@git+https://github.com/anaknegeri/tight-ship.git"
    // …other plugins if you want them
  ]
}
```

For coding methodology, prefer tight-ship (see [FAQ](FAQ.md)).

---

## Claude Code

### Option A — clone + skill path

```bash
git clone https://github.com/anaknegeri/tight-ship.git ~/.tight-ship
```

Point Claude skills at:

```text
~/.tight-ship/skills
```

(Exact config depends on your Claude Code skills setup.)

### Option B — SessionStart hook

```bash
git clone https://github.com/anaknegeri/tight-ship.git ~/.tight-ship
chmod +x ~/.tight-ship/hooks/session-start
```

Register `hooks/session-start` as a SessionStart hook so each session gets `TIGHT_SHIP_ACTIVE` context.

### Option C — copy skill only

```bash
mkdir -p ~/.claude/skills/tight-ship
curl -fsSL https://raw.githubusercontent.com/anaknegeri/tight-ship/main/skills/tight-ship/SKILL.md \
  -o ~/.claude/skills/tight-ship/SKILL.md
```

---

## Cursor

1. Clone the repo (or add as a plugin if you use a marketplace).  
2. Ensure `skills/tight-ship` is on the agent skills path.  
3. Optionally wire `hooks/session-start` if your Cursor plugin root supports SessionStart hooks (`CURSOR_PLUGIN_ROOT`).

Skill-only:

```bash
# adjust to your Cursor skills directory
mkdir -p ~/.cursor/skills/tight-ship
curl -fsSL https://raw.githubusercontent.com/anaknegeri/tight-ship/main/skills/tight-ship/SKILL.md \
  -o ~/.cursor/skills/tight-ship/SKILL.md
```

---

## Codex / other agents

1. Clone or submodule this repo.  
2. Load `skills/tight-ship/SKILL.md` as an agent skill / instruction file.  
3. Prefer injecting the skill body once per session (bootstrap) so the agent does not skip methodology.

Minimal agent instruction:

```text
Follow the tight-ship skill at skills/tight-ship/SKILL.md for all coding work.
Disciplined process gates; lean implementation size.
```

---

## AGENTS.md / CLAUDE.md (any project)

Add:

```markdown
## Methodology
Primary: **tight-ship** (https://github.com/anaknegeri/tight-ship)
- Process gates: design → plan → check → verify → finish
- Code bulk: skip unused work, shortest correct diff
```

---

## Verify

In a new session:

```text
Tell me about tight-ship
```

Expected: agent summarizes process gates + size ladder, mentions design approve and verify-before-done.

---

## Update

**OpenCode git plugin:** clear package cache or reinstall if the pin does not move (OpenCode/Bun may cache git deps).

**Clone install:**

```bash
cd ~/.tight-ship && git pull
```

**Skill copy install:** re-download `SKILL.md`.

---

## Uninstall

1. Remove the plugin entry from agent config.  
2. Remove skill copies under skills directories.  
3. Remove any SessionStart hook registration.  
4. Restart the agent.
