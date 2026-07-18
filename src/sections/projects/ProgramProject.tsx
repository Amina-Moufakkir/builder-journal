import { flagship, type ProgramProject as ProgramProjectData } from '../../content/work.ts'

// One compact coursework row — intentionally lighter than the flagship. A month marker, the name, the
// one specific thing learned, an optional link, and (only when true) a marker showing the work fed the
// flagship. If a row starts looking like a miniature case study, it has gone too far — simplify it.
export default function ProgramProject({ name, month, learned, href, relatedTo }: ProgramProjectData) {
  return (
    <li>
      <p className="font-display">
        <span className="text-ink-faint">M{month}</span>
        <span className="text-ink-faint"> · </span>
        <span className="text-ink">{name}</span>
      </p>
      <p className="text-ink-muted mt-1 max-w-text text-base">{learned}</p>
      {href ? (
        <a
          href={href}
          className="text-accent underline-offset-4 decoration-rule-strong ease-out-quiet hover:decoration-accent mt-1 inline-block text-sm underline transition-colors duration-(--duration-quick)"
        >
          View project
        </a>
      ) : null}
      {/* Explanatory, not decorative — rendered only when the work genuinely informed the flagship. */}
      {relatedTo === flagship.slug ? (
        <p className="text-ink-faint font-display mt-1 text-2xs tracking-wide uppercase">
          → fed into {flagship.name}
        </p>
      ) : null}
    </li>
  )
}
