# Builder Journal — Design System

The tokens live in `src/styles/design-system.css`. This document holds the reasoning behind them: what each rule is for, and when it should be broken.

---

## Motion

**Motion explains structure. It never performs.**

The page's job is to be read, and reading is linear and fragile. Anything that moves while the eye is working competes with the sentence it is trying to finish. So motion is confined to interaction boundaries: the moments a reader acts and the interface has to answer.

### When motion is used

Motion earns its place when it answers a question the reader would otherwise have to work out for themselves.

| Interaction                             | Question it answers                     | Token                   |
| --------------------------------------- | --------------------------------------- | ----------------------- |
| Disclosure opening (a decision log)     | "Where did this content come from?"     | `--duration-considered` |
| Link underline on hover                 | "Is this the thing I'm about to click?" | `--duration-quick`      |
| Button press                            | "Did it hear me?"                       | `--duration-quick`      |
| Sticky header changing state            | "Am I still where I was?"               | `--duration-moderate`   |
| An item leaving a list                  | "Did that go, or did I misread?"        | `--duration-moderate`   |

The common thread: each is a change the reader *caused* and now has to keep track of. Motion is the continuity between two states. Without it things teleport, and the reader spends attention re-orienting that they should be spending on the argument.

Entering uses `--ease-out-quiet` — decelerating into place, the way objects arrive. Things that move between two known points use `--ease-in-out-quiet`.

### When motion is avoided

- **Scroll-triggered reveals.** The standard portfolio move, and it fails on its own terms: it delays content the reader explicitly asked for, punishes anyone returning a second time, and breaks in-page search. SPEC lists "an animation showcase" as out of scope — this is where that line actually gets held.
- **Entrance animation on load.** The reader came to read. Fading the page in adds latency and communicates nothing.
- **Anything in the reading plane.** Body text, headings, and quotes never move.
- **Parallax, zoom, large-area transforms.** Vestibular risk with no informational payload.
- **Motion as emphasis.** If something needs attention, that is a hierarchy problem — solve it with type, space, or the accent. Movement is not a substitute for a decision about importance.
- **Loops and autoplay.** Motion that repeats without input is decoration by definition.

### How this supports readability and storytelling

The journal's argument is sequential: a claim, what it cost, what was learned. That sequence is carried by **structure** — order, spacing, the rail. If motion carried it instead, comprehension would depend on catching an animation at the right moment, and any reader who scrolls quickly, prints the page, or arrives from a search result would lose the thread.

Keeping motion at interaction boundaries leaves the narrative legible at any speed. The story has to survive with animation switched off. That is the test, and it is not a metaphor — it is literally how the reduced-motion path renders.

### Accessibility

- `prefers-reduced-motion: reduce` **disables** motion globally (`src/styles/index.css`) — not reduces. The reduced-motion path is the same page minus the movement, with nothing lost.
- **Motion is never the only signal.** Any state a transition communicates must also be readable from colour, text, or position.
- **Focus is never animated.** Focus feedback is instant; a delayed focus ring is a broken focus ring.
- 280ms is the ceiling. Past that, the interface is making the reader wait for a decision they already made.
- Nothing is triggered by scroll position, so no meaning depends on a viewport position the reader cannot control.

---

## Components

Rules that apply before any specifics:

- **Semantic element first.** A button is `<button>`, a link is `<a>`. Correct elements are how the page works for keyboards and screen readers.
- One responsibility per component, named after the job it does.
- **Compose with utilities.** A component exists when markup has repeated, not in anticipation of it.
- No component hardcodes a value that a token already names.
- Every interactive element has a visible focus state and a real accessible name.

### Buttons

A button *does* something. If it navigates, it is a link. This is the most common and most damaging confusion in interface work, because it silently breaks middle-click, right-click, and Cmd-click for everyone who expects a link.

- **One primary action per view**, in `accent`. Two primaries means the view has not decided what it is for.
- Secondary actions are quiet: ink text, rule border, no fill.
- Labels are verb-first and specific — "Send message", never "Submit". The word survives the whole flow: a "Send message" button produces "Message sent", not "Success".
- Target ≥44px. This is not a mobile concession; it is for anyone whose hands are not steady.
- No icon-only buttons without an accessible name.

### Links

Links are the connective tissue of a journal, because the argument cross-references itself.

- **Inline links in prose are always underlined.** Colour alone fails WCAG 1.4.1 and fails anyone with a colour vision deficiency. The accent confirms a link; it never signals one.
- Underline offset clears the descenders — a serif needs the room.
- Link text describes its destination. Never "click here", never a bare URL.
- External destinations are named in the text ("on GitHub"), not delegated to an icon.
- Rail navigation may drop underlines: in a list of links, the underline carries no information the context has not already given.

### Cards

A card is a boundary, and a boundary is a claim that the things inside it are parallel.

- Use only when items are genuinely comparable and meant to be scanned. A single card is a box for no reason.
- Defined by `rule` and space, **not shadow**. Elevation is for things that float, and a project summary does not float.
- **The heading is the link, not the whole card.** A fully clickable card makes text unselectable and the target ambiguous.
- DOM order matches reading order. No visual reshuffling a screen reader cannot follow.

### Lists

- Lists are for genuinely enumerable things. Prose chopped into bullets is still prose, and it reads worse.
- **Numbered only when order carries meaning** — a sequence, a process, a chronology. Numbering for texture is decoration wearing a structural costume.
- Lists stay inside the reading measure.
- Term and description pairs — project metadata — use `<dl>`.

### Quotes

- `<blockquote>` with attribution in `<cite>`. A quote without a source is just an assertion.
- Quotes carry **someone else's** words. Enlarging your own sentence into a pull quote is decoration: the sentence is either important enough to sit in the argument, or it is not important.
- Set at `text-lg`, aligned to the rail, in `ink-muted`. No oversized quotation marks.

### Callouts

The most easily abused element on any page, so the bar is high.

- A callout exists when information **changes what the reader should do or believe** — a caveat, a correction, a lesson.
- **Always carries a text label.** A coloured box is not a signal. "What I got wrong" is.
- `accent-soft` background, `rule` border, ink text.
- Rare. Three callouts in one section means none of them are special.

For this project the natural callout is the correction: a claim revised by what actually happened. That is the one that earns the accent.

### Forms

Only the contact form — but it is where a visitor's goodwill is easiest to lose.

- **Visible labels, always.** Placeholder-as-label vanishes exactly when the user needs it and fails assistive technology.
- One column. Multi-column forms cause skipped fields.
- Borders use `rule-strong`: an input's boundary is meaningful, so it clears 3:1.
- Errors are specific, adjacent to the field, expressed in text as well as colour, and tied to the input with `aria-describedby`. "Enter an email address so I can reply" beats "Invalid input".
- Required fields are marked in text, not by an asterisk alone.
- **Never disable submit on an incomplete form.** It hides the reason and leaves the visitor guessing.

### Code snippets

Applicable, but narrowly.

- Code appears when a decision is **easier to show than to describe** — never as evidence of skill. SPEC rules out technology badge collections; a snippet used as proof is the same instinct in a different costume.
- `--font-mono` (system stack, no download), on `paper-sunken`, at `text-sm`.
- Snippets stay short enough to read within the measure. Anything needing horizontal scroll should be a link to the repository instead.
- No syntax-highlighting library. If highlighting earns its place later, it is a build-time decision, not a runtime dependency.
- Inline `<code>` for identifiers named in prose.

---

## The margin rail

A second, narrow column beside the reading column (`--spacing-rail`).

### The problem it solves

The page carries two kinds of information:

1. **The argument** — prose. What happened, what was decided, what it cost.
2. **Orientation** — what section this is, when it happened, what it relates to, what was later revised.

In a single column these interleave. Every date, label, and cross-reference sits *in* the reading path and interrupts the flow of the sentence. The usual escapes are all worse: hide metadata behind a disclosure and it effectively stops existing; drop it and the reader loses the thread; inline it and the argument turns choppy.

The rail lets both exist without competing. The prose keeps an uninterrupted column; orientation sits peripheral — available at a glance, invisible while reading. **It defers information rather than hiding it.**

### Why it improves comprehension

- **Uninterrupted measure.** The eye follows one column against a stable left edge. Every interruption costs a re-acquisition of the line, and the rail removes that entire class of interruption.
- **Peripheral availability.** Orientation becomes readable without being read. "Where am I, and when was this?" answers itself on a glance rather than a scroll.
- **Co-location of claim and revision.** The strongest reason. A lesson can sit *beside the claim it revises* instead of in a "Lessons Learned" heap at the bottom of the page. The reader takes in the decision and its correction in one glance — which is precisely what this site exists to demonstrate. In a single column that lesson is either an interruption or a footnote five hundred words away from the thing it is about.
- **Width gets a job.** On a wide screen you have to do something with the space beside a 68-character measure. Stretch the prose (harms reading), centre it in dead space (wasteful), or give the margin work. The rail is the third option, and it is why the layout will not read as a phone page inflated to fill a desktop.

That is the product argument. The resemblance to a physical journal is a **consequence** of solving this problem, not the reason for it — a paper notebook has a margin for the same reason, which is corroboration rather than inspiration. If the metaphor were the point, the rail would be decoration and should be cut.

### What belongs there

- Section eyebrow — what am I reading
- Date or period — a journal is temporal, and when a decision was made changes how it should be read
- Status — shipped, archived, superseded
- Cross-references to related decisions
- **Annotations and corrections**, anchored to the specific claim they revise

### What does not

- **Navigation or primary actions.** The rail is peripheral by design; anything a visitor must do cannot live where the eye is trained to skip.
- Decoration, social icons, badges.
- Anything longer than a couple of lines. Long text in a narrow column is a second reading task, which defeats the entire purpose.

### When it disappears

- **Below `lg`.** There is not enough width for two tracks without crushing the measure below ~68 characters, and the measure wins. Rail content **relocates** above its block as an eyebrow, in reading order. It is never `display: none` — hiding it would let the layout decide which content exists, which is a bug wearing a breakpoint.
- **When a section has no orientation to offer.** The hero *is* the argument; nothing belongs beside it. An empty rail draws nothing: the grid track may exist while the rail stays silent.
- **In dense passages** where annotation would compete with the prose rather than support it.
- **In print and reader modes**, where a single flow is the whole point.

### Implementation constraints

- Built with CSS grid so **source order stays reading order**. The rail is a layout position, not an absolutely positioned overlay: a screen reader must meet the eyebrow before the block it labels.
- Never `aria-hidden`. Peripheral to the eye is not hidden from the reader.
- Rail text uses `ink-faint` at `text-xs`, tracked wide — quiet, but verified at 4.92:1 and never illegible.

---

## Icons

No icon library. An icon earns its place only when it says something faster than a word would, which on a page made of prose is rare.

When one is genuinely needed: inline the SVG so it inherits `currentColor`, draw it on a 24px grid at 1.5px stroke, and give it a `<title>` or `aria-hidden` depending on whether it carries meaning. An icon beside a label that already works is decoration.
