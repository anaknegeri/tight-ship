# FAQ

## Is this a full methodology suite?

Yes. Bootstrap + design, plans, TDD, debugging, verification, review, worktrees, finish, task-driven and parallel agents, plus a lean size skill.

## Do I need subagents?

No for single-agent sequential work. Yes for real parallelism (`dispatching-parallel-agents` / implementer subagents in `task-driven-development`). OpenCode exposes this via the `task` tool.

## Where do specs and plans go?

- `docs/tight-ship/specs/`  
- `docs/tight-ship/plans/`  

Override if the project already uses another docs layout (user instructions win).

## Can I use only the size ladder?

Load skill `tight-ship` alone, or say `stop tight-ship` / `normal mode` to drop bootstrap methodology for the session. Not recommended for feature work.

## How do I turn it off for one session?

`stop tight-ship` or `normal mode`.

## Versioning

Tags like `v2.1.0`. Pin in OpenCode:

```text
tight-ship@git+https://github.com/anaknegeri/tight-ship.git#v2.1.0
```

## License

MIT.
