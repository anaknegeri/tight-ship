---
name: receiving-code-review
description: Use when receiving code review feedback, before implementing suggestions — especially if feedback is unclear or technically questionable
---

# Receiving code review

Technical rigor over performative agreement.

## Flow

1. Read each comment fully.
2. Verify claims (repro, read code, check docs) — do not assume the reviewer is right or wrong.
3. Classify: must-fix / nice-to-have / disagree-with-evidence.
4. Implement must-fixes with TDD + size ladder.
5. Reply with evidence for disagreements; ask clarifying questions when unclear.

## Forbidden

- Blindly applying every suggestion
- "Done" without re-verify
- Ignoring feedback without stated reason
