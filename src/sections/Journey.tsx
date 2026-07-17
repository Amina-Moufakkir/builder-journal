// Builder Journal's second chapter: how Amina became this kind of builder.
//
// The section answers three questions in sequence — how did I get here, what shaped how I think,
// and why do I build differently now — and it answers them through transformation rather than a
// timeline (docs/content-strategy.md). The arc is four movements plus a short coda that hands off
// to the featured project.
//
// Reading hierarchy carries the narrative. Each movement is built on three typographic levels so
// the eye is guided rather than handed a wall of prose:
//   1. Rail marker — a quiet sans eyebrow. Orientation: "where am I in the arc."
//   2. Lead — a large serif line stating the movement's one idea. This is the focal point, the
//      scannable claim that invites the reader in. Each lead is drawn from the movement's own prose
//      and promoted to the top, never repeated below, so it earns its size by opening the argument
//      rather than decorating it (docs/design-system.md on not enlarging a sentence twice).
//   3. Body — the base-size story that backs the claim up.
//
// Two structural devices sit around that hierarchy: the margin rail holds the marker, and a vertical
// spine threads a node through every movement to say these experiences are one transformation, not
// five separate blocks. The spine is a hairline and small rings — an editorial through-line, never a
// résumé timeline. Below lg the rail marker relocates above its block and the spine moves to the
// left edge, so both stay legible on a narrow screen.

// The chapter header sits above the arc and is not on the spine, so it keeps the plain two-column
// rail grid. Its heading aligns to the same reading-column left edge the movements use.
const headerGrid =
  'grid gap-y-flow lg:grid-cols-[var(--spacing-rail)_1fr] lg:gap-x-stack lg:items-start'

// A movement's three-track grid: rail marker, spine, prose. The gaps are tuned so the prose lands on
// the same left edge as the header's heading (rail + gaps + spine = the header's single gap). Below
// lg it folds to [spine | content], marker stacked above the lead and prose in the content column.
const movementGrid =
  'grid grid-cols-[auto_1fr] gap-x-4 gap-y-flow lg:grid-cols-[var(--spacing-rail)_auto_1fr] lg:gap-x-5 lg:items-start'

// The vertical spine for one movement: a small ring on a hairline thread, aligned to the marker.
// The thread is split around the node so it runs continuously between movements — the first node
// hides the thread above it and the last hides the thread below it, so the line begins and ends on
// a node and marks nothing beyond the arc. Purely decorative: the meaning is carried by the prose
// and the rail, so the whole element is hidden from assistive technology.
function Spine({ first, last }: { first?: boolean; last?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="col-start-1 row-span-2 row-start-1 flex flex-col items-center self-stretch lg:col-start-2 lg:row-span-1"
    >
      {/* Upstream stub — kept for consistent node position, made invisible on the first node. */}
      <span className={`h-1 w-px ${first ? 'bg-transparent' : 'bg-rule'}`} />
      <span className="bg-paper border-rule-strong size-2 shrink-0 rounded-full border" />
      {/* Downstream thread — fills the space the prose padding opens up, invisible past the last node. */}
      <span className={`w-px flex-1 ${last ? 'bg-transparent' : 'bg-rule'}`} />
    </div>
  )
}

// A single movement: rail marker, spine node, a lead line, and the supporting story.
// The marker is an <h3> so the four movements are navigable structure for a screen reader, while its
// quiet styling keeps it reading as orientation rather than a section title. The lead is deliberately
// prose (a large opening sentence), not a heading, so the heading order stays h1 → h2 → h3.
// `first`/`last` shape the spine's ends; `last` also drops the trailing padding the thread spans.
function JourneyMovement({
  marker,
  lead,
  first,
  last,
  children,
}: {
  marker: string
  lead: React.ReactNode
  first?: boolean
  last?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={movementGrid}>
      <Spine first={first} last={last} />
      <h3 className="text-ink-faint font-display col-start-2 row-start-1 text-xs font-normal tracking-wide uppercase lg:col-start-1">
        {marker}
      </h3>
      <div
        className={`max-w-text col-start-2 row-start-2 lg:col-start-3 lg:row-start-1 ${
          last ? '' : 'pb-stack'
        }`}
      >
        {/* The focal claim: large, calm, and scannable on its own. */}
        <p className="text-xl leading-snug tracking-tight">{lead}</p>
        {/* The story behind the claim. */}
        <div className="text-ink-muted mt-stack space-y-flow">{children}</div>
      </div>
    </div>
  )
}

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      // Top padding is dropped so the gap to the hero is a single section's rhythm, not the doubled
      // padding of two adjacent sections — which read as "the page ended" and hid the story below.
      className="max-w-content mx-auto px-gutter pb-section"
    >
      {/* Chapter header: eyebrow orients, heading names the arc, standfirst sets the reading voice. */}
      <div className={headerGrid}>
        <p className="text-ink-faint font-display text-xs tracking-wide uppercase">My Journey</p>
        <div className="max-w-text">
          <h2 id="journey-heading" className="text-2xl tracking-tight">
            My path into engineering was never a straight line.
          </h2>
          <p className="mt-stack text-xl leading-snug tracking-tight">
            What shaped how I build wasn&rsquo;t any single job. It was the route between them.
          </p>
        </div>
      </div>

      {/* The arc. Movements carry no gap between them so the spine reads as one continuous thread. */}
      <div className="mt-section">
        {/* Movement 1 — the winding entry: several jobs spent looking for work that fit how I think. */}
        <JourneyMovement
          marker="Before engineering"
          lead="When I discovered software engineering, I realized I had found something that matched how I naturally think."
          first
        >
          <p>
            I moved from Morocco to the United States to build a better future. Along the way, I
            worked as a flight attendant, a head waitress, and later drove for Uber &mdash; all while
            searching for work that challenged me intellectually.
          </p>
          <p>
            I enjoyed understanding systems, solving problems, and continuously learning. Engineering
            became more than a career &mdash; it became the way I wanted to contribute.
          </p>
        </JourneyMovement>

        {/* Movement 2 — where "people before technology" comes from: years of listening to people. */}
        <JourneyMovement
          marker="What service taught me"
          lead="I try to understand the person before I reach for the technology."
        >
          <p>
            Customer-facing roles taught me that. Whether I was helping airline passengers during
            stressful situations or serving customers in a restaurant, I learned that people often
            describe symptoms instead of the real problem. Solving the right problem starts with
            listening, observing, and understanding what people actually need.
          </p>
        </JourneyMovement>

        {/* Movement 3 — the setback: an accident, and the principle recovery left behind. */}
        <JourneyMovement marker="The setback" lead="Every setback carries a lesson.">
          <p>
            A serious car accident forced me to step away from engineering just as I was building
            momentum. Recovery took years. The hardest part wasn&rsquo;t starting over &mdash; it was
            making sure I learned something from the experience instead of simply surviving it.
          </p>
          <p>
            It became one of the principles I build by. When something fails now, my first question
            isn&rsquo;t &ldquo;Why did this happen to me?&rdquo; It&rsquo;s &ldquo;What is this trying
            to teach me?&rdquo;
          </p>
        </JourneyMovement>

        {/* Movement 4 — the shift: from collecting technologies to trusting judgment, and why AI fits. */}
        <JourneyMovement marker="What lasts" lead="Technologies change, but judgment lasts.">
          <p>
            Earlier in my journey, I thought engineering was mostly about learning technologies.
          </p>
          <p>
            Today I spend more time understanding the problem than searching for a solution. I care
            more about whether something should exist than whether I can build it.
          </p>
          <p>
            That&rsquo;s also why I enjoy working with AI. AI can generate code, but it still depends
            on someone who understands people well enough to identify the real problem worth solving.
          </p>
        </JourneyMovement>

        {/*
          Coda — Edgebook AI as the natural result of the journey, not a product pitch. The story
          itself belongs to the featured project, so this only introduces it and hands off. The link
          targets the same #projects anchor the hero already reserves for that section.
        */}
        <JourneyMovement marker="Where it leads" lead="Edgebook AI is where this path leads." last>
          <p>
            Not a break from it, but its natural result &mdash; an example of the kind of builder
            these experiences made me. The full story lives in the{' '}
            <a
              href="#projects"
              className="text-accent underline-offset-4 decoration-rule-strong ease-out-quiet hover:decoration-accent underline transition-colors duration-(--duration-quick)"
            >
              featured project
            </a>
            .
          </p>
        </JourneyMovement>
      </div>
    </section>
  )
}
