# Plan: Add health endpoint

Example only — copy the shape, not the feature.

## Goal

Expose `GET /health` that returns `{ "ok": true }` with HTTP 200 so load balancers can probe the service.

## Constraints

- No new dependencies
- Match existing HTTP framework patterns in the repo
- One acceptance check

## Tasks

### Task 1: Failing check for /health

- **Do:** Add a test (or request script) that expects `GET /health` → 200 and body `ok: true`. Run it; confirm fail (route missing).
- **Files:** existing test tree or `scripts/check-health.sh`
- **Check:** `npm test -- health` (or project equivalent) — fails before implementation
- **Done when:** RED output captured for the right reason (404/missing route)

### Task 2: Minimal route

- **Do:** Register `GET /health` returning JSON `{ "ok": true }`. Reuse existing server bootstrap; no new framework.
- **Files:** router/handlers only
- **Check:** same command as Task 1 — passes
- **Done when:** GREEN; no extra middleware/config

### Task 3: Verify + finish

- **Do:** Run full relevant suite; prepare merge/PR if needed
- **Files:** none new
- **Check:** project test/lint command
- **Done when:** `verification-before-completion` evidence; choose merge / PR / stop

## Execution

- Same session → `task-driven-development`
- Size while coding → `tight-ship` ladder
- After all tasks → `verification-before-completion` → `finishing-a-development-branch`
