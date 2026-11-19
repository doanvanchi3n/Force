# Chuyende3 / Force

This repository currently contains an Obsidian research vault and local development
skills. Read `docs/index.md` and `docs/project-context.md` for project facts.
Communicate and write project documents in Vietnamese.

## Skill routing

- BMAD owns the active product workflow: discovery, requirements, UX contracts,
  architecture, specifications, implementation, and review as requested.
- `ui-ux-pro-max` supplies targeted UI/UX research, visual options, accessibility
  and stack guidance inside the active task. It does not start a second planning
  or implementation workflow. A focused UI question can use it directly.
- For UX discovery, capture the user's vision first. Consult the design library
  for a concrete unresolved design question; its results are candidates for the
  user to consider, not decisions to impose.
- For implementation, follow the selected spec and approved UX documents. Use
  design searches to fill a gap or check a UI detail, not to redesign the product.
- Documentation, tooling and non-UI work do not need a design search. Installing
  a design skill does not authorize creating application screens or choosing a stack.

## Design decisions and output locations

- Follow explicit user decisions, the task's accepted spec, and the selected UX
  workspace's `DESIGN.md` / `EXPERIENCE.md`. These documents live under
  `_bmad-output/planning-artifacts/ux-designs/` when created by BMAD UX.
- Read `docs/skills/README.md` when using both skill sets. If multiple UX workspaces
  exist, use the one bound to the task; ask only if the choice is unresolved.
- `scripts/design-search.py` runs the design library and confines persisted
  references to `_bmad-output/design-references/`. A generated `MASTER.md`, page
  override, preview or token file is advisory. It does not override the UX contracts.
- Promote a selected idea through the active UX workflow and record the decision;
  do not keep a competing root-level `design-system/` as a second authority.
- Existing product requirements and research evidence retain their meaning.
  Generic library recommendations are not research findings about VSC.

## Maintaining the integration

- Active skills: `.agents/skills/bmad-*` and `.agents/skills/ui-ux-pro-max`.
- Design skill adapter and source lock: `tools/skills/ui-ux-pro-max/`.
- Run `python3 scripts/install-design-skill.py` to restore the design integration.
  Keep custom instructions in the tracked adapter, not in generated skill copies.
- Keep `_bmad/render/` snapshots and both upstream repos under `.tools/` unchanged.
  Make BMAD customizations through its supported `_bmad/custom/` surfaces when needed.
- After document/path changes, run `python3 scripts/check-doc-links.py`.
