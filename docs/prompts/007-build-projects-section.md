# Projects Section — Implementation Spec

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