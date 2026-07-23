---
name: condition-based-waiting
description: Use when code or a test must wait for an async condition — server ready, port open, file appears, job finishes — instead of sleeping a fixed duration
---

# Condition-based waiting

Wait for the condition, not the clock. A fixed `sleep` is flaky both ways: too short races, too long wastes time — and it hides the real signal.

## When

- A test or setup step needs a server, port, file, row, or job state before proceeding.
- Polling a check that becomes true within an unknown but bounded time.

## When not

- Genuinely time-based behavior (rate-limit windows, debounce, animations).
- The condition is already synchronous — just call it and assert.

## Pattern

Poll the real condition with a bounded deadline and a small interval:

```bash
deadline=$((SECONDS + 30))
until curl -sf localhost:8080/health >/dev/null; do
  [ "$SECONDS" -ge "$deadline" ] && { echo "timeout waiting for health" >&2; exit 1; }
  sleep 0.5
done
```

- Bounded deadline → fail loud on timeout; never wait forever.
- Poll the **actual** signal (health endpoint, PID gone, row exists), not a proxy like a log line when a state check exists.
- Small interval (0.1–1s local) so the happy path stays fast.

## Red flags

- `sleep 5` "to be safe" before an assertion
- No timeout → hangs forever when the condition never comes
- Waiting on a log line when a real state check is available
- Retrying without a hypothesis for why the first attempt was too early
