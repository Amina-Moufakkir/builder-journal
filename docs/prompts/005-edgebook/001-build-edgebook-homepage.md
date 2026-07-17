# 001 — Build the Edgebook AI Homepage Feature

## Goal

Build the **Edgebook AI flagship project section** on the Builder Journal homepage.

The section should establish Edgebook AI as the strongest example of Amina’s product thinking, engineering judgment, architecture work, and approach to responsible AI.

Its purpose is to make visitors curious enough to continue to the dedicated Edgebook AI case study.

This prompt does **not** include building the full case-study page.

---

## Context

You are working inside **Builder Journal**, Amina Moufakkir’s engineering portfolio.

Builder Journal is not a conventional project gallery. It presents Amina’s work as a sequence of product and engineering stories.

The homepage currently introduces:

- Amina
- her personal journey
- her approach to building

The next section should answer:

> What is the strongest example of that approach in practice?

That answer is **Edgebook AI**.

### What Edgebook AI is

Edgebook AI is an AI coaching platform for traders.

It helps traders evaluate the quality of their decisions, recognize recurring patterns, and reflect on process—not merely record trades or chase outcomes.

Its product philosophy includes:

- AI is a coach, not a guru.
- It does not predict the market.
- It does not replace trader judgment.
- Process should be evaluated separately from outcome.
- A profitable trade can still be poorly executed.
- A losing trade can still follow a sound process.
- Structural mistakes and psychological patterns should be evaluated independently.
- AI interpretation must remain downstream from verified facts and deterministic calculations.
- The product should help traders understand their own behavior rather than imitate someone else.

---

## Design Intent Checkpoint

Before writing code, inspect the repository and summarize your understanding of the feature in 5–10 concise bullet points.

Explain:

- what the section should communicate
- who the section is for
- the primary user action
- how it should connect the Journey section to the future case study
- what existing design and component patterns should be reused
- what content is verified
- what content is still unresolved
- any assumptions you are making

Do not begin implementation until you have articulated this understanding.

---

## Repository Review

Before changing code, inspect:

- `README.md`
- `SPEC.md`
- `CLAUDE.md`
- `docs/design-system.md`
- `docs/content-strategy.md`
- the current homepage structure
- the Hero section
- the Journey section
- existing shared components
- existing routing
- existing prompt records
- any Edgebook AI documentation available in the repository

Treat the repository as the source of truth.

Do not invent:

- product claims
- research findings
- metrics
- screenshots
- links
- implementation status
- technology choices
- roadmap commitments

Determine the minimum new structure needed before implementation.

---

## Feature Purpose

The section has one job:

> Introduce Edgebook AI as the portfolio’s flagship project and motivate the visitor to open the case study.

It should not attempt to explain the entire product.

The homepage should create interest.

The case-study page will provide the depth.

---

## Required Content

Include:

- a restrained `Flagship project` label
- the project name `Edgebook AI`
- a concise value proposition
- a short explanation of the product problem
- a prominent product visual or clearly intentional placeholder
- a truthful project-status indicator
- one primary call to action leading to the case study

### Suggested positioning

A strong starting point is:

> An AI trading coach that helps traders improve the quality of their decisions—not just record their trades.

Refine the wording only when it remains consistent with:

- `docs/content-strategy.md`
- the documented Edgebook AI philosophy
- the current state of the product

---

## Information Hierarchy

The section should communicate, in this order:

1. This is the flagship project.
2. This is Edgebook AI.
3. This is the problem it addresses.
4. This is why the product is different.
5. This is the current project status.
6. This is where to explore the full case study.

Do not overwhelm the section with architecture, roadmap, or implementation detail.

Those belong on the case-study page.

---

## Product Visual

The product visual should be the dominant evidence in the section.

Prefer one meaningful visual over several decorative mockups.

The visual should communicate:

> Edgebook AI helps traders understand their decisions.

It should not merely communicate:

> Edgebook AI contains dashboards and charts.

The visual may be:

- an implemented product screen
- a documented design concept
- an exploratory mockup
- a clearly intentional placeholder

Its status must be honest.

Do not fabricate a finished product screen.

Do not imply that a design concept is implemented.

If no verified product visual exists, create an intentional placeholder that reflects the Builder Journal visual system and clearly indicates that the product interface is still being developed.

---

## Project Status

Edgebook AI is still in progress.

Use a project-status label supported by the repository, such as:

- `In development`
- `Design and architecture`
- `Product definition`

Choose the most accurate wording based on the current documentation.

Do not label the product:

- `Live`
- `Shipped`
- `Production`
- `Available now`

unless the repository confirms that status.

---

## Case-Study Navigation

Add one primary call to action leading to the Edgebook AI case-study route.

Use clear language such as:

- `Read the case study`
- `Explore the case study`

Follow the repository’s routing conventions.

If the full case-study page has not yet been built:

- create only the minimum route or destination needed to support valid navigation
- do not populate it with fabricated case-study content
- clearly keep the full case-study implementation outside this prompt’s scope

Do not create fake:

- demo links
- GitHub links
- external product links

---

## Visual Direction

The section should feel like a natural continuation of Builder Journal.

Reuse the existing:

- typography
- spacing system
- layout conventions
- design tokens
- shared components
- border and surface language
- motion language
- responsive patterns

The section should feel editorial and product-focused—not like a separate SaaS landing page inserted into the portfolio.

Preserve:

- calm visual hierarchy
- generous whitespace
- strong typography
- restrained motion
- accessible contrast
- meaningful section labels

Do not:

- introduce a competing visual identity
- create a new accent palette
- hardcode values that should use existing tokens
- introduce a new framework
- introduce a new component library
- add animation merely to make the section feel impressive
- add tabs, carousels, or complex interaction without a clear information need

Motion may clarify:

- entry
- hierarchy
- relationship
- state

Motion must never become performance.

---

## Content Architecture

Keep content separate from presentation wherever that matches the repository’s existing conventions.

Structure the implementation so the section can evolve as Edgebook AI progresses without requiring a full layout rewrite.

For unknown content:

- do not invent it
- do not show internal `TODO` text as public copy
- omit unsupported details
- preserve a clear path for adding them later

Use descriptive component names based on purpose rather than appearance.

Examples:

- `FeaturedProject`
- `ProjectStatus`
- `ProjectVisual`
- `CaseStudyLink`

Reuse existing components before creating new abstractions.

Do not create a generic abstraction for a single use unless it clearly improves consistency or readability.

---

## Editorial Requirements

Keep the copy:

- direct
- human
- calm
- specific
- confident without pretending certainty
- accessible to technical and non-technical visitors

Avoid:

- startup marketing language
- generic AI claims
- framework lists
- invented achievements
- technical detail that belongs in the case study
- presenting AI as the hero of the product

The section should center:

- the trader’s problem
- the product’s purpose
- Amina’s judgment
- the invitation to learn more

---

## Accessibility and Responsiveness

The section must:

- work on mobile, tablet, and desktop
- preserve a logical heading hierarchy
- support keyboard navigation
- provide visible focus states
- use accessible labels
- maintain sufficient color contrast
- respect reduced-motion preferences
- provide appropriate alternative text or accessible treatment for the product visual
- preserve readable line lengths
- avoid layout shifts caused by the visual

---

## Prompt Documentation

Create or update this prompt record at:

```text
docs/prompts/005-edgebook/001-build-edgebook-homepage.md
```

Use the repository’s established prompt-record format.

Include:

- Goal
- Context
- Instruction
- Output
- Review
- Accepted
- Modified
- Rejected
- Manual Verification
- Lessons Learned
- Reflection
- Related Commit

Place this complete prompt in the appropriate prompt section of that record.

Update:

```text
docs/prompts/README.md
```

Add this prompt to the prompt index with an in-progress status.

The prompt record, prompt-index update, and homepage feature belong to the same future feature commit.

Do not create a separate indexing commit.

Do not make a Git commit unless explicitly instructed.

---

## Output

When implementation is complete, report:

### 1. Repository Assessment

Briefly explain:

- which existing patterns were reused
- which existing components were reused
- which new components were introduced
- which content was verified
- which content was omitted because it remains unresolved

### 2. Files Changed

List every created or modified file.

Explain each file’s responsibility in one sentence.

### 3. Design Reasoning

Explain how the implementation:

- makes Edgebook AI the homepage centerpiece
- creates curiosity without trying to tell the full case study
- connects naturally to the Hero and Journey sections
- keeps the product status truthful
- preserves Builder Journal’s visual language

### 4. Verification

Run every applicable repository quality check.

Use the repository’s actual scripts.

Report the exact command and result for each check.

Also manually verify:

- homepage placement
- case-study navigation
- browser refresh on the destination route
- mobile layout
- tablet layout
- desktop layout
- keyboard navigation
- heading hierarchy
- focus states
- accessible labels
- color contrast
- reduced-motion behavior
- product-status accuracy
- no fake links
- no unsupported metrics
- no fabricated research
- no implication that placeholders are completed product screens
- no regressions to the Hero section
- no regressions to the Journey section
- no new console errors

### 5. Remaining Questions

List only decisions that genuinely require Amina’s product judgment.

For each question, include:

- why the decision matters
- your recommendation
- what remains uncertain

Do not use questions as a substitute for making safe implementation decisions.

---

## Definition of Done

The feature is complete when:

- Edgebook AI appears on the homepage as the flagship project.
- The section accurately communicates the product direction.
- The project status is truthful.
- The product visual is meaningful and honestly labeled.
- The primary call to action leads to a valid case-study destination.
- The full case study has not been fabricated or implemented inside this task.
- The section follows Builder Journal’s design system.
- The implementation is responsive and accessible.
- Existing quality checks pass.
- The prompt record is complete.
- The prompt index is updated as part of the same feature work.
- No Git commit is created without explicit instruction.

---

## Claude Code Output

Claude Code implemented the Edgebook AI flagship section as the homepage's featured project, plus the minimal destination its primary action needs.

`FeaturedProject` introduces the product in the established design language: a `Flagship project` label, the name, the value promoted to a single lead line ("an AI trading coach that helps traders improve the quality of their decisions — not just record their trades"), two short paragraphs (the problem, then what makes it different), an honest `In development` status, one product-visual placeholder, and a single accent call to action. It carries the `#projects` anchor the hero and the Journey coda already point at, so the three sections read as one path.

Because the repository has no router and the dedicated case study (prompt `002`) is not yet built, the call to action leads to a standalone stub view at the stable hash route `#/projects/edgebook-ai`. A small hash view-switch in `App.tsx` renders that view — no routing dependency, no in-page scroll stub, and the boundary between the homepage feature and the dedicated case study kept intact. Prompt `002` will replace the stub while preserving the same URL.

No new dependencies, tokens, or colours were introduced. Type checking, linting, and the production build pass.

### Files

- `src/sections/FeaturedProject.tsx` (new) — the flagship section; carries `#projects`, states the value, problem, difference, and status, and holds the single call to action.
- `src/pages/EdgebookCaseStudy.tsx` (new) — the honest case-study stub reached at `#/projects/edgebook-ai`, with focus and scroll handling; prompt `002` fills it in.
- `src/App.tsx` (modified) — a zero-dependency hash view-switch (`#/projects/edgebook-ai` → the stub, otherwise the homepage) plus a post-render scroll so returning to an in-page anchor works.
- `docs/prompts/005-edgebook/README.md` (modified) — workstream index; `001` status advanced to Complete.
- `docs/prompts/README.md` (modified) — master index; single `005 — Edgebook AI Workstream` entry linking to the workstream index.

---

## Review

### Accepted

- Edgebook AI as the homepage flagship, introduced before the case study rather than explained in full.
- Information hierarchy: label → name → value → problem → difference → status → single call to action.
- Truthful `In development` status; no `live` / `shipped` language.
- An honest product-visual placeholder in the paper-and-rule language instead of a fabricated dashboard.
- One accent action, reusing the hero's button treatment.
- A standalone hash-routed stub destination (`#/projects/edgebook-ai`) with no router and no scroll stub.
- `max-w-wide` frame so the flagship reads as more substantial than the hero and Journey, with the narrative column still capped at the reading measure.

### Modified

- Case-study route settled on the stable `#/projects/edgebook-ai` (from an initial `#/edgebook-ai`) so prompt `002` can adopt the same URL.
- Stub view reduced to its essentials: the name, `Case study in progress`, one sentence on what the study will cover, and a clear link back to the homepage.
- Kept the flagship as a single focused `FeaturedProject` component rather than splitting it into `ProjectStatus` / `ProjectVisual` / `CaseStudyLink`, per the repository's "avoid unnecessary abstraction" rule; the suggested names remain available if reuse later justifies them.

### Rejected

- Adding React Router for a single unfinished route.
- An in-page scroll stub, which would blur the deliberate boundary between the homepage feature and the dedicated case study.
- Fabricated screenshots, metrics, research, technology badges, or demo / GitHub links.
- A second call to action competing with "Read the case study".

---

## Manual Verification

- [x] `npm run typecheck` — passes.
- [x] `npm run lint` — passes.
- [x] `npm run build` — passes.
- [x] Dev server serves the app and all new modules transform without error (verified over HTTP).
- [x] Homepage placement and visual appearance confirmed by Amina in the browser.
- [x] Refresh safety holds by construction: a reload on `#/projects/edgebook-ai` re-renders the stub because the fragment never reaches the server, so no single-page fallback is required.
- [ ] Full cross-device and assistive-technology pass (mobile / tablet / desktop, keyboard, focus, contrast, reduced motion) — not automatable in this environment; the implementation follows the design-system rules that govern each, and a formal pass is deferred to the editorial review once more sections exist.

---

## Lessons Learned

Separating the homepage feature from the dedicated case study forced an early routing decision on a single-page site. A hash-routed stub answered it without taking on a router: it gives the case study a real, refresh-safe URL now, keeps the homepage's job contained, and leaves prompt `002` a view to fill in rather than a route to invent.

---

## Reflection

The hardest part was not the section but the honest handling of what does not exist yet — the product screen and the case study. Naming them as in progress, in the site's own language, says more about how I work than a fabricated dashboard ever could.

---

## Related Commit

`introduce Edgebook AI as the flagship project`