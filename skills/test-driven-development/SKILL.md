---
name: test-driven-development
description: Use when implementing any feature or bugfix, before writing implementation code
---

# Test-driven development

RED → GREEN → REFACTOR. No production code before a failing check.

## Iron law

**No implementation before a failing check.**  
Wrote code first? Delete it. Start over. No "keep as reference".

## Cycle

1. **RED** — write one check for the desired behavior; run it; see fail for the right reason.
2. **GREEN** — minimal code to pass (use `tight-ship` size ladder).
3. **REFACTOR** — clean only with checks green; no new behavior.

## Check scale

| Work | Check |
|------|--------|
| Non-trivial logic | One focused test or assert script |
| Project has suite | Add one test in existing style |
| Trivial one-liner | Skip formal test; still verify manually/command |
| Bugfix | Reproduce failing check first |

## Red flags

- "I'll test after"
- "Too simple to test"
- "Manual test is enough" (for non-trivial logic)
- Implementation committed without RED evidence

## Exceptions

- Pure exploratory spike (throwaway; say so).
- Generated lockfiles / pure formatting.
- User explicitly orders code-first (note the exception).
