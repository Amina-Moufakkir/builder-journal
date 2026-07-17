import { useEffect, useRef } from 'react'

// The Edgebook AI case study is its own destination, reached from the flagship section's call to
// action at the stable hash route `#/projects/edgebook-ai`. The full study is the work of prompt
// 005-edgebook/002; until then this is an honest, deliberately minimal stub rather than fabricated
// case-study content, and 002 will replace it while keeping the same URL. It is a standalone page,
// not an in-page section, so the boundary between the homepage feature and the dedicated case study
// stays intact.
export default function EdgebookCaseStudy() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // A route change swaps the whole page, so send the reader to the top and move focus to the new
  // heading — otherwise keyboard and screen-reader users would be stranded wherever the last view
  // left them. Programmatic focus doesn't trigger :focus-visible, so no focus ring flashes on arrival.
  useEffect(() => {
    window.scrollTo(0, 0)
    headingRef.current?.focus()
  }, [])

  return (
    <main className="max-w-content mx-auto px-gutter py-section">
      <h1 ref={headingRef} tabIndex={-1} className="text-3xl tracking-tightest">
        Edgebook AI
      </h1>

      {/* Honest status — the case study is being written, and says so plainly rather than pretending
          to be a finished page. */}
      <p className="text-ink-faint font-display mt-flow inline-flex items-center gap-2 text-xs tracking-wide uppercase">
        <span className="bg-rule-strong size-1.5 rounded-full" aria-hidden="true" />
        Case study in progress
      </p>

      <p className="text-ink-muted mt-stack max-w-text text-lg">
        The full case study will cover the problem Edgebook AI addresses, the product and architecture
        decisions behind it, the tradeoffs I chose, and what building it taught me.
      </p>

      <div className="mt-stack">
        <a
          href="#/"
          className="text-accent underline-offset-4 decoration-rule-strong ease-out-quiet hover:decoration-accent underline transition-colors duration-(--duration-quick)"
        >
          Back to the homepage
        </a>
      </div>
    </main>
  )
}
