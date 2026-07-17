// The architecture hierarchy and its trust boundary (manuscript §07) — the centrepiece diagram, and
// the product's spine. Rendered as a semantic ordered list of tiers rather than a picture: the order
// IS the meaning (each layer reads only from the one above), so it must survive as reading order for a
// screen reader. The heavier, labelled divider is the trust boundary; the AI tier sits below it on a
// sunken ground to show it is downstream — able to interpret evidence, never to write a fact.
const UPPER_LAYERS = [
  {
    title: 'Verified facts',
    detail: 'Trade records, timestamps, prices, size, outcome',
    note: 'Immutable once written. Source of truth.',
  },
  {
    title: 'Deterministic calculations',
    detail: 'P&L, R-multiple, exposure, win rate, expectancy',
    note: 'Pure functions. Same input, same output, always.',
  },
  {
    title: 'Analytics',
    detail: 'Aggregations, distributions, groupings, comparisons',
    note: 'Derived, reproducible, explainable without a model.',
  },
]

function DownwardChevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="text-rule-strong my-1 size-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Tier({
  title,
  detail,
  note,
  sunken,
}: {
  title: string
  detail: string
  note: string
  sunken?: boolean
}) {
  return (
    <div
      className={`w-full rounded-md border p-4 ${
        sunken ? 'border-rule-strong bg-paper-sunken' : 'border-rule bg-paper-raised'
      }`}
    >
      <p className="text-ink font-display font-semibold">{title}</p>
      <p className="text-ink-muted mt-1 text-sm">{detail}</p>
      <p className="text-ink-faint mt-1 text-sm">{note}</p>
    </div>
  )
}

export default function ArchitectureStack() {
  return (
    <figure>
      <ol className="flex flex-col items-center">
        {UPPER_LAYERS.map((layer, index) => (
          <li key={layer.title} className="flex w-full flex-col items-center">
            <Tier title={layer.title} detail={layer.detail} note={layer.note} />
            {index < UPPER_LAYERS.length - 1 ? <DownwardChevron /> : null}
          </li>
        ))}
      </ol>

      {/* The trust boundary: a heavier, labelled divider. Nothing below it may write above it. */}
      <div
        className="my-4 flex items-center gap-3"
        role="separator"
        aria-label="Trust boundary — server. Nothing below writes above."
      >
        <span className="bg-rule-strong h-px flex-1" />
        <span className="text-ink-faint font-display shrink-0 text-2xs tracking-wide uppercase">
          Trust boundary — server
        </span>
        <span className="bg-rule-strong h-px flex-1" />
      </div>

      <Tier
        title="AI interpretation"
        detail="Coaching language, pattern narration, questions back"
        note="Reads evidence. Cannot write facts. Cannot compute."
        sunken
      />

      <figcaption className="text-ink-faint mt-flow text-sm">
        Each layer reads only from the one above. The AI layer sits below the boundary — it can phrase an
        insight badly, but it can never write a fact, recompute a number, or reach the market.
      </figcaption>
    </figure>
  )
}
