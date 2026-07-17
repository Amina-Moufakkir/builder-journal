// The four honesty labels the manuscript uses throughout the case study. Rendered as one uniform,
// quiet pill differentiated by its text alone — never by colour. Colour-coding four states would
// introduce a second palette into a page with one voice of contrast, and would fail any reader who
// can't distinguish the hues; the word carries the meaning instead.
export type Status = 'Implemented' | 'Designed' | 'Planned' | 'Needs validation'

export default function StatusLabel({ status }: { status: Status }) {
  return (
    <span className="text-ink-faint border-rule-strong inline-flex items-center rounded-full border px-2.5 py-0.5 font-display text-2xs tracking-wide uppercase">
      {status}
    </span>
  )
}
