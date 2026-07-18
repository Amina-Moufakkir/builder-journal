import type { ProjectLifecycle } from '../../content/work.ts'

// The Projects section's own lightweight status tag, for the PROJECT LIFECYCLE axis
// (in-development / in-progress / complete). This is deliberately NOT the case study's StatusLabel,
// which speaks to implementation evidence (Implemented / Designed / Planned / Needs validation) — a
// different question. Kept quiet (a dot and a label, no pill) so lifecycle never reads as evidence,
// and monochrome so it introduces no second accent.
const LABELS: Record<ProjectLifecycle, string> = {
  'in-development': 'In development',
  'in-progress': 'In progress',
  complete: 'Complete',
}

export default function LifecycleTag({ status }: { status: ProjectLifecycle }) {
  return (
    <p className="text-ink-faint font-display inline-flex items-center gap-2 text-xs tracking-wide uppercase">
      <span className="bg-rule-strong size-1.5 rounded-full" aria-hidden="true" />
      {LABELS[status]}
    </p>
  )
}
