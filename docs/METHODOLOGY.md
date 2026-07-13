# Methodology

tight-ship is a **mono-skill methodology**: one document agents follow instead of running full Superpowers and full Ponytail in parallel.

## Core rule

| Layer | Source | Responsibility |
|-------|--------|----------------|
| Process | Superpowers-shaped | When to design, plan, test, verify, finish |
| Size | Ponytail-shaped | How little code to write |
| Domain | Your stack skills | Go/React/etc. patterns **after** design/plan |

**Precedence:** user instructions → tight-ship → other methodology skills → model default.

## Pipeline

```text
Scope → Design (approve) → Plan → Build (check→code→pass) → Debug* → Verify → Review → Finish
```

\* Debug only when something fails; root cause in the shared path.

### 1. Scope (YAGNI)

If the request is speculative or unused, refuse in one line. Best code is code not written.

### 2. Design (hard gate)

- Short design (2–10 sentences for small work).  
- No production code, scaffold, or implementation skill until the user approves.  
- Large multi-system asks: decompose first, then design one subproject.

### 3. Plan

- Thin task list.  
- One acceptance check per task.  
- No essay plans or “phase 4: future-proofing”.

### 4. Build

Size ladder — stop at the first that works:

1. Skip  
2. Reuse repo code  
3. Stdlib / built-in  
4. Native platform  
5. Already-installed dependency  
6. One-liner  
7. Minimum new code  

For non-trivial logic: one failing check first, then minimal code, then pass.

### 5. Debug

Symptoms name a path; fix the **shared** function so all callers benefit. Do not sprinkle the same guard in every caller.

### 6. Verify

Run real commands. No “done / fixed / passing” without output.

### 7. Review

Diff vs plan. Delete over-engineering. Prefer deletion over addition.

### 8. Finish

Ask: merge, open PR, or stop.

## Never skip (even when minimal)

- Validation at trust boundaries  
- Error handling that prevents data loss  
- Security basics  
- Accessibility basics  
- Explicit user requests  
- Reading the real flow before the size ladder  

## Output shape

Code first. Then at most three short lines: what was skipped, when to add it.

```text
[code] → skipped: [X], add when [Y].
```

## Intentional shortcuts

```text
// ponytail: global lock; per-account locks if throughput matters
```

Marks deliberate simplicity so the next person does not treat it as ignorance.

## What tight-ship is not

- Not a full replacement of every Superpowers sub-skill (SDD, visual companion, etc.)  
- Not “no process”  
- Not “no tests” — one meaningful check beats a hollow suite  
- Not a framework for your app — it only shapes how the **agent** works  

## Agent-facing source of truth

[`skills/tight-ship/SKILL.md`](../skills/tight-ship/SKILL.md)
