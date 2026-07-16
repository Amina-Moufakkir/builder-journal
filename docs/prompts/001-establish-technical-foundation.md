# Prompt 001 — Establish the Technical Foundation

## Goal

Establish a clean, working technical foundation for Builder Journal before implementing portfolio content or visual sections.

## Context

You are working inside a new repository named `builder-journal`.

Builder Journal is a product-focused personal website designed to communicate who I am, how I think, how I make decisions, and how I grow through building products.

Before making changes:

1. Read `SPEC.md`.
2. Read `CLAUDE.md`.
3. Follow both documents as the project's source of truth.
4. Use the available frontend development skills to guide the setup and frontend architecture.

The repository currently contains project documentation but no application code.

## Instruction

Scaffold the project in the current repository using:

- React
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

Establish only the technical foundation. Do not build the portfolio sections or invent portfolio content yet.

### Project requirements

- Use a mobile-first approach.
- Use semantic and accessible HTML.
- Keep the architecture simple and maintainable.
- Create only folders and files that are justified at this stage.
- Avoid unnecessary dependencies and abstractions.
- Remove unused Vite starter content.
- Do not add animations, component libraries, icons, or placeholder projects.
- Do not commit any changes.

### Commenting requirements

- Add a short JSX comment identifying the purpose of every major semantic page section when those sections are introduced.

Example:

```tsx
{/* Main page content */}
<main>
  ...
</main>
```

- Add a concise comment above every custom function explaining its purpose.
- Comments should explain intent or responsibility, not repeat what the code already says.
- Do not add comments to generated configuration files unless clarification is genuinely necessary.

Example:

```ts
// Starts the application and mounts it into the root DOM element.
function renderApplication() {
  // ...
}
```

## Expected structure

Create a minimal structure suitable for a single-page portfolio.

Possible responsibilities may include:

```text
src/
├── assets/
├── components/
├── sections/
├── styles/
├── App.tsx
└── main.tsx
```

Do not create empty folders or placeholder components merely to match this example. Create only what the current foundation requires.

## Verification

Before finishing, run and verify:

```bash
npm run lint
npm run build
```

Confirm that:

- The application starts successfully.
- TypeScript reports no errors.
- ESLint passes.
- The production build succeeds.
- No unused starter files or dependencies remain.

## Output

When finished, provide:

1. A summary of what you changed.
2. The files created, removed, or modified.
3. The dependencies added.
4. The architectural decisions you made and why.
5. The commands I should run to verify the setup.
6. Any assumptions you made.
7. Any recommendations for the next implementation step.

Do not begin building the hero or any other portfolio section.

## Why This Prompt Is Structured This Way

This prompt separates technical setup from product implementation.

It gives Claude Code the project context, boundaries, quality requirements, verification steps, and expected output while leaving room for justified technical decisions.

It follows the Builder Journal principle:

> Understanding before action.

## Claude Code Output

Claude Code scaffolded a React + Vite + TypeScript project, configured Tailwind CSS v4, ESLint, and Prettier, established a minimal project structure, and verified that linting, type checking, and production builds succeeded. It intentionally avoided placeholder portfolio content and unnecessary abstractions.

## Review

### Accepted

- React + Vite + TypeScript foundation
- Tailwind CSS v4 configuration
- ESLint and Prettier setup
- Root element safety check in `main.tsx`
- Minimal project structure without unnecessary folders
- Accessibility-first foundation
- Pinning TypeScript to 6.0.x to maintain compatibility with the current `typescript-eslint` release.

### Modified

- Replaced the placeholder text in `App.tsx` with a minimal application shell.

### Rejected

- Creating empty folders before they were needed.
- Adding placeholder portfolio content.
- Formatting project documentation with Prettier, to preserve intentionally authored structure, wording, and examples.

### Manual Verification

- [x] Development server starts
- [x] TypeScript passes
- [x] ESLint passes
- [x] Production build succeeds
- [x] Starter content is removed
- [x] No unnecessary dependencies were added
- [x] Comments explain purpose rather than obvious syntax

## Lessons Learned

Verifying that structure survived is not the same as verifying that meaning survived.

A document can pass a formatting check while still losing the convention it was meant to teach. Likewise, a toolchain can report green while relying on unsupported combinations that weaken the value of those checks.

Whether reviewing AI-generated documentation or configuring development tools, a passing check is only worth what it actually verifies.

## Reflection

If I wrote this prompt again, what would I change?

Next time, I would specify upfront that placeholder user-facing content should not be generated, while still allowing structural comments that explain the application's purpose.

## Related Commit

`establish the technical foundation for builder journal`
