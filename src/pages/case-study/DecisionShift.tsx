// The one documented pivot (manuscript §06), promoted from prose to a compact before→after transform.
// It uses the accent-soft ground — the colour of a correction in the margin — because a pivot is
// exactly what that accent is reserved for. Only the shift itself becomes a visual; the explanation of
// what caused it stays as prose in the section, so this reads as emphasis, not decoration.
export default function DecisionShift() {
  return (
    <figure className="bg-accent-soft border-rule rounded-md border px-6 py-5">
      <figcaption className="text-ink-faint font-display text-xs tracking-wide uppercase">
        Decision shift
      </figcaption>
      <p className="mt-flow flex flex-wrap items-center gap-x-3 gap-y-2 text-xl leading-snug tracking-tight">
        <del className="text-ink-faint decoration-rule-strong">Generic trade tracker</del>
        <span className="sr-only">became</span>
        <svg
          viewBox="0 0 24 24"
          className="text-ink-faint size-5 shrink-0"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-ink font-display font-semibold">AI coaching platform</span>
      </p>
    </figure>
  )
}
