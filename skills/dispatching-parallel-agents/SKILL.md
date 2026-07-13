---
name: dispatching-parallel-agents
description: Use when facing 2 or more independent tasks that can proceed without shared state or sequential dependencies
---

# Dispatching parallel agents

Run independent work concurrently to cut wall-clock time.

## When

- Tasks do not edit the same files.
- No ordering dependency (A does not need B's output).
- Host supports multiple agents/subagents.

## When not

- Shared mutable state / same module rewrite.
- Unclear boundaries — sequence instead.
- Single small task — overhead not worth it.

## Flow

1. Split into independent work packages (goal, files, check each).
2. Dispatch in parallel with the same brief shape as task-driven-development.
3. Wait for all; collect check outputs.
4. Integrate only at agreed seams; resolve conflicts deliberately.
5. Run a combined verification before claiming done.

## Rules

- Prefer fewer, clearer packages over many tiny agents.
- Each package still follows TDD + size ladder.
- Parent agent owns integration and final verify.
