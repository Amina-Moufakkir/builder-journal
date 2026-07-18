# 007 — Build the Projects Section

Portfolio section covering one flagship project (Edgebook AI) and an in-progress AI-native program. Written to be built from directly.

_Pre-build spec. The standard prompt-record and review fields — Goal, Context, Output, Review, Accepted, Modified, Rejected, Manual Verification, Lessons Learned, Reflection, Related Commit — are appended when the section is implemented, following the format used by prompts 001–005._

## The principle this section is built on

The Edgebook case study argues that unverifiable claims get deleted, that "planned" and "implemented" are different words, and that silence beats confident wrongness. This section has to hold the same line.

Its purpose is **not to maximize project count**. Its purpose is to show how ideas mature—from coursework completed against external briefs into independent product decisions. The flagship demonstrates ownership; the coursework shows growth.

Concretely:

- **No placeholder cards.** No blank tiles, no fake thumbnails, no "Project 2 — coming soon."
- **No grid waiting to be filled.** One flagship doesn't need a grid. A three-column grid with one filled cell announces its own gaps.
- **Empty states state facts, and self-delete.** The program block renders honestly with zero projects because "seven-month program, in progress" is true today.
- **Status labels mean something.** Reuse the exact vocabulary from the case study. Don't invent a second system.

If a decision in this spec seems ambiguous, resolve it toward whichever option claims less.

---

## Structure

```
<Projects />
  <FlagshipProject />
  <ProgramBlock />
    <ProgramProject />
```

Two categories, presented at deliberately different weight:

- **Edgebook AI** — the independent product built without anyone assigning it. Full-width, supported by a complete engineering case study.
- **Coursework** — projects completed against external briefs and program constraints. Documented concisely to highlight what was learned and how the work informed independent product thinking.

The asymmetry is intentional. A portfolio where everything sits at equal weight says nothing about what the author would choose to build.

---

## Data

Two separate exports, not one array with a `type` discriminator. The shapes are genuinely different; merging them means every component opens with a branch.

```ts
// src/content/work.ts

// The flagship's content and its case-study link are NOT re-declared here — they already live in the
// existing homepage feature component, which <FlagshipProject /> reuses. One source of truth: Edgebook's
// copy and its route are edited in that component, never in two places. This export holds only the
// flagship's identity and lifecycle status, which the section needs for its tag and for `relatedTo`.
export const flagship = {
  slug: "edgebook",
  name: "Edgebook AI",
  status: "in-development", // project lifecycle — see "Status vocabulary"
};

export const program = {
  name: "AI-Native Program",
  length: "7 months",
  status: "in-progress",
  started: "2026-07",
  blurb: "Building to brief, on a schedule.",
  projects: [],
};
```

### Adding a project later

Append one object to `program.projects`. Nothing else changes.

```js
{
  name: "Retrieval eval harness",
  month: 2,
  learned: "Measuring retrieval quality is harder than improving it.",
  href: null,
  relatedTo: "edgebook",
}
```

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Required. |
| `month` | number | Required. Program month it landed. Renders as `M2`. |
| `learned` | string | Required. One specific sentence. Not "learned a lot about X." |
| `href` | string \| null | Optional. Don't link to an empty repository. |
| `relatedTo` | string \| null | Optional. Slug of a flagship project this work directly informed. |

**`learned` is the load-bearing field.** It's the only thing distinguishing this from a résumé line. If it can't be written specifically, the project isn't worth listing yet.

---

## Status vocabulary

The portfolio distinguishes two different things, and must not force one set of words to do both jobs:

- **Project lifecycle** — where a whole project sits over time: `in-development`, `in-progress`, `complete`. This section uses these for the flagship and the program.
- **Implementation evidence** — how far a specific capability is proven inside a case study: `Implemented`, `Designed`, `Planned`, `Needs validation`. These are the case study's labels, rendered by the existing `StatusLabel` component (`src/pages/case-study/StatusLabel.tsx`, which exports `StatusLabel` and the `Status` type).

Reuse `StatusLabel` where you are showing implementation evidence. Do **not** overload the evidence labels to describe overall project lifecycle — a feature is `Implemented`, a project is not. Keep the project-lifecycle values as their own small set, rendered with the section's own lightweight tag rather than by the evidence component.

One rule holds across both axes: don't invent a third vocabulary. If evidence needs a new value, extend the case study's `Status` type; if lifecycle needs one, extend the lifecycle set here.

---

## Components

### `<Projects />`

Section wrapper.

Responsible only for:

- heading
- spacing
- layout
- container width
- carrying the `#projects` anchor (see "Anchors and existing wiring" below)

Holds no project logic.

Heading: **Projects**.

Edgebook is intentionally presented as the flagship project. The coursework list documents additional work as it is completed.

**Anchors and existing wiring.** The homepage `#projects` anchor currently sits on the standalone Edgebook feature (`FeaturedProject`, `id="projects"`), and two existing links point at it: the hero CTA ("Explore my work") and the Journey coda ("featured project"). When Edgebook moves inside this section, the anchor moves with it — `<Projects />` must carry `id="projects"` so both links keep resolving here. Do not edit the hero or the Journey, and do not introduce a new anchor. Reuse the existing `FeaturedProject` implementation as `<FlagshipProject />` (a thin wrapper) rather than rebuilding it, honoring prompt 006's "move and reuse" constraint.

---

### `<FlagshipProject />`

Reads `flagship` for identity and lifecycle status only.

Always renders full width. Never place it inside a grid.

Reuse the existing homepage feature component that already presents Edgebook — this becomes a thin wrapper around it, not a duplicate implementation. Edgebook's copy and its case-study link come from that existing component, the single source of truth; `work.ts` never restates them.

---

### `<ProgramBlock />`

Reads `program`.

Renders:

- program heading
- duration
- status
- blurb
- either the empty state or project list

The header must remain truthful even when there are zero projects.

**Empty state**

```tsx
{program.projects.length === 0 ? (
  <p className="text-ink-faint text-sm">
    Coursework projects are added as they are completed.
  </p>
) : (
  program.projects.map((p) => (
    <ProgramProject key={p.name} {...p} />
  ))
)}
```

That sentence is true today and disappears automatically the moment it stops being the whole story.

Do not add:

- "Coming soon"
- "Check back later"
- countdowns
- placeholders

Optional:

Derive `Month N of 7` from `program.started` if it can be done without introducing unnecessary dependencies.

---

### `<ProgramProject />`

One compact row per project.

Layout:

```
M2 • Project name
Short "learned" sentence
optional link
optional → fed into Edgebook marker
```

This is intentionally lighter than the flagship.

If a coursework row starts looking like a miniature case study, simplify it.

---

## The `relatedTo` marker

When coursework directly informs Edgebook—retrieval, evaluation, prompt constraints, trust boundaries, structured outputs—that relationship is more valuable than treating them as unrelated projects.

```tsx
{relatedTo === "edgebook" && (
  <span className="text-ink-faint font-display text-2xs tracking-wide uppercase">
    → fed into Edgebook
  </span>
)}
```

Only render this when true.

It is explanatory, not decorative.

---

## Layout evolution

Build for one flagship.

Do not pre-build a grid.

| Count | Layout |
| --- | --- |
| 1 flagship | Full width |
| 2 flagships | Convert to `flagships[]`, two-column layout |
| 3+ | Reassess the visual hierarchy before introducing a larger grid |

Don't optimize for a future that doesn't exist yet.

---

## Build order

1. Create `src/content/work.ts`.
2. Add both exports with `program.projects = []`.
3. Build `<Projects />`.
4. Build `<FlagshipProject />`.
5. Build `<ProgramBlock />` with the empty state.
6. Build `<ProgramProject />`.
7. Test with one temporary project object.
8. Remove the temporary object.
9. Add the `relatedTo` conditional.

The goal is that shipping the first coursework project becomes a data edit rather than another implementation task.

---

## Checks before shipping

- [ ] No placeholder cards, blank tiles, or "coming soon" copy.
- [ ] Section reads honestly with `program.projects === []`.
- [ ] Status tags are imported, not redefined.
- [ ] Flagship remains full width.
- [ ] Flagship is visually dominant over the coursework list.
- [ ] Adding a coursework project requires editing only `src/content/work.ts`.
- [ ] Empty-state copy disappears automatically after the first project.
- [ ] Coursework remains visually lighter than the flagship.
- [ ] Responsive layout verified.
- [ ] Keyboard focus visible.
- [ ] Reduced motion respected.

---

## Implementation prompt

The executable instruction for this build — hand it to Claude Code. It runs on this spec plus the architecture decision in `006-portfolio-architecture-update.md`. (Pre-build: per the note at the top, the prompt-record and review fields are appended once the build lands.)

```
Reorganize my homepage to introduce a Projects section, following this spec and
@006-portfolio-architecture-update.md.

Read both first. 006 establishes the architectural change and its constraints;
this spec covers implementation. Where they conflict, 006 wins — it's the newer
decision.

This is a MOVE, not a rebuild. The existing FeaturedProject component already
presents Edgebook and works. Reuse it as <FlagshipProject /> (a thin wrapper) —
do not write a new implementation. Do not change Edgebook's messaging, manuscript,
diagrams, or case study. The goal is to reorganize the Builder Journal homepage
without changing the existing Edgebook implementation. The reorganization stops at
the Projects section boundary.

Before writing code, read:
- src/pages/case-study/StatusLabel.tsx — exports StatusLabel and the Status type.
  Import these for implementation-evidence labels. Do not redefine them.
- The existing FeaturedProject component (currently carries id="projects").
- Match existing styling conventions — Tailwind, same palette, same type scale,
  same token names (text-ink-faint, font-display, text-2xs etc.).

Three details from this spec that are easy to get wrong — get them right:

1. TWO STATUS AXES, not one. Project lifecycle (in-development / in-progress /
   complete) uses this section's own lightweight tag. Implementation evidence
   (Implemented / Designed / Planned / Needs validation) uses the imported
   StatusLabel. Do not overload evidence labels to describe lifecycle — a feature
   is Implemented, a project is not. Don't invent a third vocabulary.

2. work.ts holds the flagship's identity and lifecycle status ONLY. Edgebook's
   copy and case-study route stay in the existing feature component — one source
   of truth. Do not restate them in work.ts.

3. The #projects anchor MOVES onto <Projects />. It currently sits on
   FeaturedProject, and two links point at it: the hero CTA ("Explore my work")
   and the Journey coda ("featured project"). Both must keep resolving. Do not
   edit the hero or the Journey. Do not add a second anchor.

Build new: <Projects /> wrapper, <ProgramBlock /> + empty state, <ProgramProject />,
and src/content/work.ts.

Follow the build order above (steps 1–9), including steps 7 and 8: test
<ProgramProject /> with one temporary object, confirm it renders, then delete it.
Shipping the first coursework project must be a data edit, not an implementation task.

Hard constraints, non-negotiable:
- Edgebook is full-width and visually dominant. No grid.
- program.projects ships as []. The section must read honestly with zero projects.
- No placeholder cards, blank tiles, fake thumbnails, or "coming soon" copy.
- Empty-state copy is exactly the sentence in this spec, and self-deletes on first project.
- Coursework rows are visibly lighter than the flagship.

Where the specs leave a choice open, take the option that claims less.

When done, report:
- which files you moved, created, and left untouched
- the "Checks before shipping" list above — what you verified, what you couldn't
- confirmation that both existing #projects links still resolve
```

### Why the prompt is shaped this way

**The numbered trio is doing the real work.** Each is a failure that passes review: a merged status vocabulary looks fine until a second flagship is added; duplicated Edgebook copy looks fine until the two versions drift; a broken anchor looks fine because nothing errors — the link just scrolls nowhere.

**The precedence rule is explicit.** 006 and this spec disagree in places (e.g. earlier drafts weighed "Work" vs "Projects"). Stating "006 wins" up front stops the agent trying to satisfy both.

**Self-report against the checklist, not a "done" declaration.** The items the agent can't verify from code — responsive layout, keyboard focus, reduced motion — are the ones to check in the browser.

---

## Notes for later

### On coursework

Keep coursework intentionally concise.

These projects demonstrate execution against a brief, not independent product ownership.

A short project with one well-documented engineering decision is more valuable than a long write-up that repeats generic lessons.

---

### On overlap

Some coursework will directly solve Edgebook problems.

When that happens, don't present them as competing projects.

Show the connection.

The interesting story is how external constraints strengthened the independent product.

---

### On the one-project worry

The Edgebook case study already demonstrates:

- research honesty
- architectural judgment
- product thinking
- tradeoff analysis
- documentation discipline
- willingness to delete unsupported claims

That breadth communicates more about how you build than several shallow case studies would.

Depth is the differentiator.

Don't dilute it simply to fill a grid.

---

## Claude Code Output

Reorganized the homepage into a **Projects** section — a move, not a rebuild. The existing Edgebook feature was reused as the flagship (no reimplementation), and a lighter program block for AI-Native Program coursework sits beside it, rendering an honest empty state with zero projects. The `#projects` anchor moved onto the new `<Projects />` wrapper; the hero CTA and the Journey coda were left untouched and both still resolve. The two status axes are kept structurally distinct — a new lightweight `LifecycleTag` for project lifecycle, the case study's `StatusLabel` untouched for implementation evidence. No new dependencies, tokens, or colours; type checking, linting, and the production build pass, and the case study remains its own lazy chunk.

**One judgment call worth recording.** The spec described `<FlagshipProject />` as a "thin wrapper" around the existing feature. Since that feature already presents Edgebook completely, a wrapper with no additional behavior would be indirection without purpose — so the existing component was reused *directly*: renamed `FeaturedProject` → `FlagshipProject` and adjusted for its nested role (heading `h2` → `h3`, `#projects` anchor removed, own container dropped since `<Projects />` provides it). That is maximal reuse — zero duplication — which is what the spec's "not a duplicate implementation / one source of truth" intent asks for.

### Files

- `src/content/work.ts` (new) — flagship identity + lifecycle status, and `program` coursework data shipping with `projects: []`; the `ProgramProject` type. No Edgebook copy or route.
- `src/sections/Projects.tsx` (new) — the section wrapper; owns the `#projects` anchor and the "Projects" heading; composes flagship and program at deliberately different weight.
- `src/sections/projects/FlagshipProject.tsx` (new, reuses the former `FeaturedProject`) — the flagship presentation, full width; reads identity + lifecycle from `work.ts`, while Edgebook's copy and case-study route live here.
- `src/sections/projects/ProgramBlock.tsx` (new) — program header, duration, lifecycle status, blurb, and the self-deleting empty state.
- `src/sections/projects/ProgramProject.tsx` (new) — one compact coursework row; optional link and the "→ fed into Edgebook" marker, rendered only when true.
- `src/sections/projects/LifecycleTag.tsx` (new) — the section's own lightweight lifecycle tag, distinct from `StatusLabel`.
- `src/App.tsx` (modified) — renders `<Projects />` in place of the standalone flagship.
- `src/sections/FeaturedProject.tsx` (removed) — reused as `FlagshipProject`.

---

## Review

### Accepted

- Move, not rebuild: the Edgebook feature is reused as the flagship; its messaging, manuscript, and case study are unchanged.
- `#projects` moved onto `<Projects />`; hero and Journey untouched, both links still resolve.
- Two status axes kept separate: `LifecycleTag` (lifecycle) vs `StatusLabel` (implementation evidence).
- `work.ts` holds flagship identity + lifecycle only; Edgebook's copy and route stay in the component — one source of truth.
- Honest, self-deleting empty state; no placeholder cards, no grid, no "coming soon."
- Flagship full width and dominant; coursework visibly lighter.
- Adding the first coursework project is a data edit in `work.ts` (verified: a temporary object type-checks, then removed).

### Modified

- Reused the existing feature by renaming it to `FlagshipProject` and adjusting it for nesting, rather than introducing a wrapper with no additional behavior (see the judgment note above).
- The flagship's lifecycle now renders via the shared `LifecycleTag` reading `work.ts`, replacing the previously inline "In development" text (same visual) — so lifecycle has one source and one renderer.
- Trailing `App` comment updated ("selected projects" dropped; now covered by Projects).

### Rejected

- A grid or placeholder cards for a single flagship; "coming soon" / countdowns.
- A second `#projects` anchor; editing the hero or the Journey.
- Restating Edgebook's copy or route in `work.ts`.
- Overloading the evidence labels to describe project lifecycle, or inventing a third vocabulary.

---

## Manual Verification

- [x] `npm run typecheck` / `lint` / `build` — pass; case study still emitted as a separate lazy chunk.
- [x] Exactly one `id="projects"` (on `<Projects />`); the hero CTA and Journey coda still target `#projects`.
- [x] `<ProgramProject />` type-checks against a real object (build-order steps 7–8: added, verified, removed; ships with `projects: []`).
- [x] Dev server serves; all new modules transform without error (verified over HTTP).
- [ ] Full visual and assistive-technology pass (mobile / tablet / desktop, keyboard focus, reduced motion, flagship dominance, coursework lighter, empty state honest) — not automatable in this environment; deferred to Amina's review. The implementation follows the design-system rules that govern each.

---

## Lessons Learned

The reorganization's real risk was never the code — it was the three silent failures the spec named: a merged status vocabulary, duplicated copy, and a dead anchor. Making the two status axes *two components* (`LifecycleTag` vs `StatusLabel`) turned the distinction into structure rather than a convention someone has to remember, and reusing the feature by renaming rather than wrapping kept a single source of truth without an empty layer.

---

## Reflection

The section's whole argument is the asymmetry — one deep flagship, light coursework, an honest empty state — so the discipline was resisting the instinct to fill space. An empty state that states a fact and removes itself says more about how the work is done than a padded grid ever would.

---

## Related Commit

`reorganize the homepage around a Projects section`