# FAQ

## Why not just install Superpowers and Ponytail?

They optimize different axes. Superpowers pushes process depth; Ponytail pushes code thinness. Agents often:

- skip design because Ponytail said YAGNI, or  
- ship large plans/abstractions because Superpowers said be thorough  

tight-ship is the **resolution policy**: short process, tiny code, hard verify.

## Do I need Superpowers or Ponytail installed?

No. tight-ship is self-contained.

Optional: keep them for extra skills/tools (parallel agents, ponytail-review, etc.). Methodology conflicts → follow tight-ship.

## Will bootstrap fight Superpowers inject?

No. Superpowers uses `EXTREMELY_IMPORTANT`; tight-ship uses `TIGHT_SHIP_ACTIVE`. Both can inject. The skill text tells the agent which methodology wins on conflict.

## Is design required for a one-line fix?

Yes, but design can be **two sentences** + approve. The gate is approval, not ceremony length.

## How is this different from “just be a senior dev”?

It is explicit, loadable, and **testable as process**: design approve, one check, verify output. Agents under pressure skip unwritten norms; written gates hold better.

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

Teams and individuals who want agents that:

1. do not code before a shared design, and  
2. do not invent frameworks for a 10-line fix, and  
3. do not claim “done” without command output  

## License / attribution

MIT. Inspired by Superpowers and Ponytail; not affiliated with either project.
