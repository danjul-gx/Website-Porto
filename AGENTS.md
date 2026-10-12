<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Rules

This is a personal portfolio website built with:

- Next.js 16
- TypeScript
- Tailwind CSS v4
- React Bits

## Architecture

- Prefer modifying existing files.
- Do not create new components unless necessary.
- Reuse existing React Bits components.

## Styling

- Preserve dark theme.
- Use existing design tokens.
- Use Tailwind utilities first.

## Components

Before creating:
- component
- hook
- utility
- type

Check if one already exists.

## Output

Before coding:

1. Explain the plan.
2. List files to modify.
3. Keep changes minimal.

# Ponytail Rules

Before writing code:

1. Does this need to exist?
2. Can existing code be reused?
3. Is there a simpler solution?
4. Is there a built-in solution?
5. What is the minimum implementation?

Avoid:

- Premature abstraction
- Over-engineering
- Unused hooks
- Unused utilities
- Duplicate components