# 002 — Build the Edgebook AI Case Study

## Goal

Build the dedicated **Edgebook AI case-study page** for Builder Journal.

The homepage introduces Edgebook AI.

This page earns the visitor's attention by documenting how the product evolved, how engineering decisions were made, and how responsible AI shaped the architecture.

The objective is not to market Edgebook AI.

The objective is to truthfully document its evolution.

---

## Context

You are working inside **Builder Journal**, Amina Moufakkir's engineering portfolio.

The homepage already establishes Edgebook AI as the flagship project.

This prompt builds the page visitors reach after selecting:

> Read the case study

The page should feel like the natural continuation of the homepage—not a separate marketing site.

The approved Edgebook AI case-study manuscript lives in the repository at `docs/prompts/005-edgebook/002-edgebook-case-study-manuscript.md`, versioned by git as Edgebook AI progresses.

Treat that manuscript as the canonical source for all page content.

---

## Repository Review

Before implementing the page, review the existing Builder Journal project to understand its patterns, architecture, and design language.

Review:

- `SPEC.md`
- `CLAUDE.md`
- `README.md`
- `docs/design-system.md`
- `docs/content-strategy.md`
- Existing Builder Journal components
- Homepage implementation
- `FeaturedProject`
- Current case-study stub
- Existing prompt records

Use this review to understand **how the page should be implemented**, not **what it should say**.

`docs/content-strategy.md` is a guide for the editorial pass only: it governs the voice and tone of any readability improvements, never the case study's content, which remains the manuscript's.

---

## Design Intent

Before writing code, summarize your understanding of the page.

Explain:

- what the visitor should learn
- how this differs from the homepage
- what emotional journey the reader should experience
- which Builder Journal patterns should be reused
- what information remains uncertain

Do not begin implementation until this understanding is complete.

---

## Instruction

Implement the approved manuscript as a dedicated Builder Journal case study.

Render it at the existing case-study route `#/projects/edgebook-ai`, replacing the current placeholder stub and preserving that URL.

Preserve the manuscript's meaning, engineering decisions, and narrative.

You may improve:

- readability
- pacing
- transitions
- visual hierarchy
- typography
- diagram presentation
- editorial rhythm

Do not:

- invent content
- rewrite history
- change engineering decisions
- fabricate research
- fabricate implementation
- strengthen unsupported claims
- introduce marketing language

Unknowns should remain unknown.

Distinguish clearly between:

- Implemented
- Designed
- Planned
- Needs validation

---

## Visual Design

The case study should feel editorial.

Prefer:

- generous whitespace
- diagrams
- decision callouts
- architecture illustrations
- comparison layouts
- restrained motion

Avoid:

- marketing layouts
- decorative dashboards
- unnecessary cards
- feature grids
- visual noise

The writing should remain the primary content.

---

## Diagrams

Treat diagrams as first-class content.

Where appropriate, convert manuscript diagrams into Builder Journal visuals while preserving their meaning.

Do not alter engineering concepts for visual effect.

---

## Navigation

Integrate naturally with Builder Journal.

Provide:

- Back to homepage

Reuse existing navigation patterns.

Do not introduce a new navigation model.

---

## Accessibility

Maintain:

- semantic headings
- keyboard navigation
- reduced motion
- accessible diagrams
- sufficient contrast
- readable line lengths

---

## Performance

Prioritize:

- component reuse
- efficient rendering
- responsive typography

Avoid unnecessary client-side complexity.

---

## Prompt Documentation

Update:

- `docs/prompts/005-edgebook/002-build-edgebook-case-study.md`
- `docs/prompts/005-edgebook/README.md`

Record:

- Goal
- Context
- Claude Code Output
- Review
- Accepted
- Modified
- Rejected
- Manual Verification
- Lessons Learned
- Reflection
- Related Commit

Mark:

- 001 — Complete
- 002 — In Progress

Do not mark the workstream complete.

Do not create a Git commit unless explicitly instructed.

---

## Output

Report:

### Repository Assessment

Explain:

- Builder Journal patterns reused
- diagrams introduced
- editorial improvements
- content intentionally left unchanged

### Files Changed

List every modified file.

### Editorial Decisions

Explain:

- sections refined
- repeated ideas consolidated
- diagrams improved
- readability improvements

### Verification

Run all applicable project checks.

Verify:

- navigation
- responsiveness
- accessibility
- typography
- diagram rendering
- code quality

Record any remaining manual verification.

### Remaining Questions

List only genuine product questions requiring Amina's judgment.

---

## Definition of Done

The case study is complete when:

- the approved manuscript has been faithfully implemented
- engineering decisions remain truthful
- Builder Journal's visual language is preserved
- diagrams are fully integrated
- accessibility checks pass
- prompt documentation is complete
- workstream status reflects reality

Do not create a Git commit unless explicitly instructed.

---

## Claude Code Output

Claude Code built the Edgebook AI case study as a dedicated view rendering the approved manuscript (`002-edgebook-case-study-manuscript.md`) faithfully in Builder Journal's design system, replacing the placeholder stub at the same route `#/projects/edgebook-ai`.

The page is a fifteen-chapter document. Each chapter uses a `CaseStudySection` primitive built on the **margin rail** — the numbered marker (01–15) sits in the rail as orientation, the title and prose own the reading column — the rail's first substantial use, deferred from the homepage precisely for this. The manuscript's five diagrams became focused, accessible components rather than images:

- **Decision shift** (§06) — a compact before→after transform on the accent-soft ground (the one turning point that earns the correction accent).
- **Architecture + trust boundary** (§07) — a semantic ordered list of tiers with a heavier labelled divider; the AI tier sits below the boundary on a sunken ground. Order is the meaning, so it survives as reading order.
- **Record vs. reflection** (§08) — a real two-column comparison table.
- **Trade-review mockup** (§09) — a static, clearly labelled `Designed` illustration (not interactive controls, figures illustrative), so it is never mistaken for a shipped screen.
- **Evidence flow** (§15) — a "sum" of three inputs to one result, operators decorative, meaning carried by the figcaption.

The honesty labels (`Implemented` / `Designed` / `Planned` / `Needs validation`) are rendered as one uniform pill differentiated by text, never colour, keeping the page's single-accent discipline and staying legible for colour-blind readers. The view is code-split with `React.lazy` so its bundle loads only on navigation.

No new dependencies, tokens, or colours were introduced. Type checking, linting, and the production build pass; the case study builds into its own chunk (~36 kB, ~11 kB gzipped) separate from the homepage bundle.

### Files

- `src/pages/EdgebookCaseStudy.tsx` (rewritten from the stub) — the full case-study page; composes the header, fifteen sections, and footer, holding the manuscript prose.
- `src/pages/case-study/CaseStudySection.tsx` (new) — the numbered rail-based section primitive.
- `src/pages/case-study/StatusLabel.tsx` (new) — the text-only honesty pill.
- `src/pages/case-study/DecisionShift.tsx`, `ArchitectureStack.tsx`, `RecordVsReflection.tsx`, `EvidenceFlow.tsx`, `TradeReviewMockup.tsx` (new) — the five manuscript diagrams.
- `src/App.tsx` (modified) — lazy-loads the case study behind a Suspense fallback; route unchanged.
- `docs/prompts/005-edgebook/002-edgebook-case-study-manuscript.md` (modified) — spelling normalized to American; status labels added to §07/§08.
- `docs/prompts/005-edgebook/README.md` (modified) — `002` advanced to In Progress.

---

## Review

### Accepted

- Faithful rendering of the manuscript's content, decisions, and narrative; presentation improved (rail hierarchy, diagrams, rhythm) without altering meaning.
- All five diagrams as accessible semantic HTML (lists, table, sums) rather than images.
- The margin rail carrying the numbered chapters — its first real use.
- Honest treatment throughout: the mockup labelled `Designed`, no fabricated screenshots or metrics, status labels differentiated by text not colour.
- `React.lazy` code-splitting; route and refresh behaviour preserved.

### Modified

- Spelling normalized British → American across the manuscript **and** page together, so source and page stay in sync (matches the committed Hero/Journey copy).
- Status labels added to §07 and §08 so the present-tense architecture and record/reflection framing can't be read as fully built.
- Build-status and roadmap rendered as responsive status **lists** rather than wide tables, so they stack cleanly on narrow screens instead of scrolling.
- Accent-soft callouts limited to two on the page (the honesty note and the decision shift) to keep the correction accent rare.

### Rejected

- The reference's `MetricCard` stat row, technology badges, screenshots, and every fabricated figure.
- A second call to action; scroll-triggered reveals; hover-zoom on the visual.
- Colour-coding the status labels, which would introduce a second palette and fail colour-blind readers.

---

## Manual Verification

- [x] `npm run typecheck` — passes.
- [x] `npm run lint` — passes.
- [x] `npm run build` — passes; case study emitted as its own chunk (~36 kB / ~11 kB gzip), separate from the homepage bundle.
- [x] Dev server serves the app and all new modules transform without error (verified over HTTP).
- [x] Refresh safety holds by construction: a reload on `#/projects/edgebook-ai` re-renders the page because the fragment never reaches the server.
- [ ] Full visual and assistive-technology pass (mobile / tablet / desktop, keyboard, focus, contrast, reduced motion, diagram readability) — not automatable in this environment; deferred to Amina's review. The implementation follows the design-system rules that govern each.

---

## Lessons Learned

Rendering the diagrams as semantic structure (ordered lists, a real table, a written-out sum) rather than pictures kept them accessible and on-brand — and forced each diagram's meaning to survive as reading order, which is the honest test. The hardest editorial call was the status labels: keeping them text-only preserved the one-accent discipline, and it turned out the page didn't need colour to make the distinction land.

---

## Reflection

The manuscript did the hard thinking; the build's job was to stay out of its way. The temptation was to dramatize the architecture — the trust boundary especially — but restraint served it better: a quiet, well-ordered document reads as more trustworthy than a decorated one, which is exactly the argument the product itself makes.

---

## Related Commit

`build the Edgebook AI engineering case study`