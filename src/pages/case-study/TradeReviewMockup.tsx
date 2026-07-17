// The single screen that carries the whole idea (manuscript §09): recorded facts beside the trader's
// own note, with the coach pointing at the gap between them. This is a `Designed` concept, and the
// figcaption says so plainly — it is rendered as a static illustration, not interactive controls, so no
// one mistakes it for a shipped product. The response options are shown but inert; the figures are
// illustrative, exactly as the manuscript labels them.
const RECORD: [string, string][] = [
  ['Planned stop', '20 pips'],
  ['Actual stop', '32 pips'],
  ['Hold time', '27 min'],
  ['Rule adherence', '2 of 4'],
]

const RESPONSES = ['Yes — plan was right', 'No — I broke the rule', 'Not sure yet']

export default function TradeReviewMockup() {
  return (
    <figure>
      <div className="border-rule-strong bg-paper-raised overflow-hidden rounded-lg border">
        {/* The trade and its result */}
        <div className="border-rule flex items-start justify-between gap-4 border-b px-4 py-3">
          <div>
            <p className="text-ink font-display font-semibold">EURUSD · 12 Mar · 09:47</p>
            <p className="text-ink-faint text-sm">Trade 3 of 4 · session review</p>
          </div>
          <div className="text-right">
            <p className="text-ink font-display font-semibold">−0.6R</p>
            <p className="text-ink-faint text-sm">planned +3.0R</p>
          </div>
        </div>

        {/* Record beside reflection */}
        <div className="grid sm:grid-cols-2">
          <dl className="border-rule border-b p-4 sm:border-r sm:border-b-0">
            <p className="text-ink-faint font-display text-2xs tracking-wide uppercase">Recorded</p>
            <div className="mt-2 space-y-1">
              {RECORD.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </div>
          </dl>
          <div className="p-4">
            <p className="text-ink-faint font-display text-2xs tracking-wide uppercase">Your note</p>
            <p className="text-ink-muted mt-2 italic">
              “Setup was clean. Price got heavy so I gave it room. Would take it again.”
            </p>
          </div>
        </div>

        {/* The coach: a question built from cited evidence, with judgment handed back to the trader */}
        <div className="border-rule border-t px-4 py-3">
          <p className="text-ink-faint font-display inline-flex items-center gap-2 text-2xs tracking-wide uppercase">
            <span className="bg-rule-strong size-1.5 rounded-full" aria-hidden="true" />
            Coach
          </p>
          <p className="text-ink mt-2">
            You’ve widened a stop on 6 of your last 9 losing trades, and on 0 of your winners. Your note says
            you’d take it again — would you take it again with the 20-pip stop you planned?
          </p>
          <p className="sr-only">Illustrative response options:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {RESPONSES.map((response) => (
              <span
                key={response}
                className="border-rule-strong text-ink-muted rounded-md border px-3 py-1 text-sm"
              >
                {response}
              </span>
            ))}
          </div>
          <p className="text-ink-faint mt-3 text-2xs">
            evidence: 9 trades · stop_delta · rule_adherence — no price prediction
          </p>
        </div>
      </div>

      <figcaption className="text-ink-faint mt-flow text-sm">
        <span className="text-ink font-medium">Designed</span> — the interaction model, not a live screenshot.
        The figures are illustrative.
      </figcaption>
    </figure>
  )
}
