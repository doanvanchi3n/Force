---
name: ui-ux-pro-max
description: "Support an active UI/UX task with local searches for visual styles, color, typography, component patterns, accessibility, motion and stack guidance. Use for concrete interface design choices or UI quality checks, including inside BMAD UX or Build. BMAD retains workflow ownership; this skill supplies recommendations. Skip non-UI work and product planning without a design question."
---

# UI UX Pro Max — Chuyende3 integration

Use the upstream design database and Python tools as a supporting resource for
the user's active UI task. Read `{project-root}/docs/skills/README.md` for the
project's workflow ownership and artifact conventions. `{project-root}` is the
Chuyende3 repository root, not this skill directory.

## Context and decisions

Read the current task, accepted spec and selected `DESIGN.md` / `EXPERIENCE.md`
when present. Match the existing design system and user's choices. During BMAD
UX discovery, capture the user's vision before proposing visual directions.
Generated recommendations remain candidates until selected through the active task.
If no UX contract exists, label proposals as drafts; do not create a PRD, change
scope, choose a technology stack or restart discovery to answer a focused UI question.

## Search

Run the project wrapper by its absolute path; it locates this skill regardless
of the shell's working directory. Python 3 is already available in this project.

```bash
python3 "{project-root}/scripts/design-search.py" "keyboard focus modal" --domain ux
```

Choose the smallest search that answers the question:

- Targeted concern: `--domain ux|style|color|typography|product|landing|icons|chart|gsap|react|web|google-fonts`.
- Implementation detail: `--stack <detected-stack>`. Detect the application's
  actual stack; this repository currently has no application stack. Tooling under
  `.tools/` is not evidence that the product uses that stack.
- New visual direction requested by the user: `--design-system -p "Chuyende3" -f markdown`.
  With an approved design system, search only the missing detail; do not generate
  a replacement merely because a new page is being built.

Use one dominant intent, 2–5 useful terms, and an explicit domain or stack when
applicable. English queries usually match the database labels best; explain the
results in Vietnamese. Verify the returned category and relevance. Retry an empty
or off-topic search once with narrower terms. If it still fails, disclose that no
verified match was found and distinguish general advice from database results.

For accessibility, search the observable outcome first, such as
`"error summary validation" --domain ux`, then stack details if needed.
Read [quick-reference.md](references/quick-reference.md) for the relevant UX rule
category; read [pro-rules.md](references/pro-rules.md) for native/mobile UI checks.
Results are guidance to evaluate in context, not automatic proof of accessibility.

## Optional reference artifacts

Prefer stdout for a quick lookup. When the task needs a saved candidate, use:

```bash
python3 "{project-root}/scripts/design-search.py" "student event registration" --design-system --persist -p "Chuyende3"
```

The wrapper controls `--output-dir`: saved files go under
`_bmad-output/design-references/design-system/<project-slug>/`. `--page <name>`
adds a candidate page variant; `--preview` creates a preview; `--tokens css|dtcg`
exports candidate tokens. Use `--help` for upstream query options, but route output
through the wrapper. Do not pass `--output-dir` directly or use `--force` unless
replacing that saved candidate is part of the user's request.

Even when named `MASTER.md`, generated files are **advisory references**. Their
internal page-over-master rules apply only within the candidate set. They do not
override the active spec, `DESIGN.md`, `EXPERIENCE.md`, or implemented design tokens.
Record accepted changes in the active UX workspace before implementing them.

Return the relevant findings and remaining uncertainty to the active workflow.
Do not start a separate build, review process, package install or external action.
