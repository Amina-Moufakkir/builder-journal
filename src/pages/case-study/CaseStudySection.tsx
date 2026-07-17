import type { ReactNode } from 'react'

// One numbered chapter of the Edgebook case study. The number sits in the margin rail as a quiet
// orientation marker — "where am I in the sequence" — while the title, standfirst, and prose own the
// reading column. This is the same rail pattern the Journey section uses, scaled to a long document:
// a rule tops each section so the fifteen chapters read as a continuous, sectioned whole. Below lg the
// rail marker relocates above the title, preserving reading order for narrow screens and screen readers.
export default function CaseStudySection({
  id,
  number,
  title,
  standfirst,
  children,
}: {
  id: string
  number: string
  title: string
  standfirst?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-rule mt-stack scroll-mt-8 border-t pt-stack"
    >
      <div className="grid gap-y-flow lg:grid-cols-[var(--spacing-rail)_1fr] lg:gap-x-stack lg:items-start">
        <p className="text-ink-faint font-display text-xs tracking-wide uppercase lg:pt-1">{number}</p>
        <div className="max-w-text">
          <h2 id={`${id}-title`} className="text-2xl tracking-tight">
            {title}
          </h2>
          {standfirst ? <p className="text-ink-faint mt-flow text-lg italic">{standfirst}</p> : null}
          <div className="text-ink-muted mt-stack space-y-flow text-lg">{children}</div>
        </div>
      </div>
    </section>
  )
}
