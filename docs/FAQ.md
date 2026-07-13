# FAQ

## Why a methodology skill at all?

Agents under pressure skip unwritten norms. Written gates hold better:

1. do not code before a shared design  
2. do not invent frameworks for a 10-line fix  
3. do not claim “done” without command output  

## Why not only “be thorough” or only “be minimal”?

Those pull opposite ways. Thorough process can bloat plans and abstractions. Minimal code alone can skip design and verification. tight-ship is the **resolution policy**: short process, tiny code, hard verify.

## Do I need other methodology plugins?

No. tight-ship is self-contained.

Optional: keep other plugins for extra tools. For coding methodology, follow tight-ship.

## Will bootstrap collide with other injects?

tight-ship uses its own marker: `TIGHT_SHIP_ACTIVE`. It does not rely on other plugins’ markers. The skill text tells the agent which methodology wins on conflict.

## Is design required for a one-line fix?

Yes, but design can be **two sentences** + approve. The gate is approval, not ceremony length.

## Can I use this only in one project?

Yes. Project skill:

```bash
mkdir -p .opencode/skills/tight-ship
# copy SKILL.md there
```

Or add the plugin only in that project’s `opencode.json`.

## How do I turn it off for one session?

Say: `stop tight-ship` or `normal mode`.

## npm publish?

Not required. OpenCode installs from git:

```text
tight-ship@git+https://github.com/anaknegeri/tight-ship.git
```

npm publish is optional for non-OpenCode consumers.

## Who is this for?

Teams and individuals who want agents that ship **small, correct diffs** with **visible process**.

## License

MIT. See [LICENSE](../LICENSE).
