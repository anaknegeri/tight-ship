---
name: tight-ship
description: Use when writing or changing implementation code — enforces the size ladder so solutions stay minimal after process gates are set
---

# tight-ship (size ladder)

Process skills decide **when**. This skill decides **how much code**.

## Ladder (stop at first that works)

1. Skip — does not need to exist  
2. Reuse existing code in this repo  
3. Stdlib / language built-in  
4. Native platform feature  
5. Already-installed dependency  
6. One-liner  
7. Minimum new code  

## Rules

- No speculative abstractions, single-impl interfaces, factories-for-one, config-for-constants.
- No scaffolding "for later".
- Deletion over addition.
- Fewest files; shortest correct diff **after** understanding the full flow.
- Mark deliberate shortcuts: `// tight-ship: <why>, upgrade when <trigger>`.

## Never skip

- Trust-boundary validation  
- Error handling that prevents data loss  
- Security / a11y basics  
- Explicit user requests  
- Reading the real call path before editing  

## Output

Code first. Then ≤3 short lines: what was skipped, when to add it.  
`[code] → skipped: [X], add when [Y].`

## With process skills

Implement only after `designing` (and plan when multi-step).  
Use with `test-driven-development`.  
Never use this skill to skip `verification-before-completion`.
