---
name: writing-skills
description: Use when creating new skills, editing existing skills, or verifying skills work before deployment
---

# Writing skills

Creating skills is TDD applied to process documentation.

## When to create

- Technique you'd reference across projects
- Pattern that wasn't intuitively obvious
- Judgment call worth documenting

**Don't create for:** one-off solutions, project-specific conventions, things automatable with regex.

## SKILL.md structure

```markdown
---
name: skill-name-with-hyphens
description: Use when [specific triggering conditions]
---

# Skill Name

## Overview
Core principle in 1-2 sentences.

## When to use
Symptoms + situations. When NOT to use.

## Core pattern
Before/after or steps.

## Common mistakes
What goes wrong + fixes.
```

## Rules

- `description` = **when to use only** (no workflow summary — agents skip the body otherwise)
- Name: verb-first, hyphens, no special chars (`designing`, not `design-process`)
- One excellent example beats five mediocre ones
- Keep under 500 words for non-bootstrap skills
- No `@` file links in skill cross-refs (force-loads burn context)

## Testing

1. **Baseline (RED):** run a task without the skill; document what the agent does wrong
2. **Write skill (GREEN):** address those specific failures
3. **Refactor:** close loopholes found in testing

## Iron law

**No skill without a failing test first.** Applies to new skills AND edits.

## File organization

```
skills/
  skill-name/
    SKILL.md          # required
    supporting-file.*  # only if needed
```

Flat namespace. Heavy reference (>100 lines) goes in a separate file linked from SKILL.md.
