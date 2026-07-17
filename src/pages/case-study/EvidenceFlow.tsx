// Why AI becomes useful here (manuscript §15) — the payoff, shown as a sum. Three inputs add up to one
// result: the model is only ever handed evidence that is already trustworthy, already computed, and
// already paired with the trader's own reasoning. The operators are decorative (aria-hidden); the
// figcaption states the relationship in words so nothing depends on reading the layout.
const INPUTS = [
  { operator: '', term: 'Trustworthy facts', note: 'immutable, server-owned' },
  { operator: '+', term: 'Deterministic analytics', note: 'reproducible, explainable' },
  { operator: '+', term: 'The trader’s own reasoning', note: 'structured, first-class' },
]

export default function EvidenceFlow() {
  return (
    <figure className="border-rule bg-paper-raised rounded-md border px-6 py-5">
      <ul className="space-y-2">
        {INPUTS.map((input) => (
          <li key={input.term} className="grid grid-cols-[1.5rem_1fr] items-baseline gap-x-2">
            <span className="text-ink-faint font-display text-center" aria-hidden="true">
              {input.operator}
            </span>
            <span>
              <span className="text-ink">{input.term}</span>{' '}
              <span className="text-ink-faint">— {input.note}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="bg-rule-strong my-3 h-px" />

      <div className="grid grid-cols-[1.5rem_1fr] items-baseline gap-x-2">
        <span className="text-ink-faint font-display text-center" aria-hidden="true">
          =
        </span>
        <span className="text-ink font-display font-semibold">Evidence AI can interpret responsibly</span>
      </div>

      <figcaption className="text-ink-faint mt-flow text-sm">
        Trustworthy facts, deterministic analytics, and the trader’s own structured reasoning together form
        the evidence the AI is allowed to interpret — and nothing beyond it.
      </figcaption>
    </figure>
  )
}
