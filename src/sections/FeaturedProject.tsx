// Builder Journal's flagship: Edgebook AI, the strongest evidence of how Amina builds. The section
// has one job — make the visitor understand why Edgebook matters and want the full case study — so it
// introduces the product and hands off, and deliberately leaves the depth (architecture, the decision
// log) to the case study itself (docs/prompts/005-edgebook/001-build-edgebook-homepage.md).
//
// It carries the `#projects` anchor the hero CTA and the Journey coda both already point at, so the
// three sections read as one path: who I am, how I got here, and what that produced.
//
// Layout mirrors the hero's own two-column grid rather than borrowing the margin rail: a narrative
// column beside the product visual. The narrative comes first in source order — the claim is
// understood before the evidence is seen — and the visual sits to its right on wide screens; below lg
// the two stack in that same reading order. The rail is left for the case study, where an annotated
// decision narrative will actually need it.
export default function FeaturedProject() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-heading"
      className="max-w-wide mx-auto px-gutter pb-section"
    >
      <div className="lg:gap-x-stack gap-y-stack grid items-center lg:grid-cols-2">
        {/* The narrative: label, name, the value in one line, the problem, and what makes it different. */}
        <div className="max-w-text">
          <p className="text-ink-faint font-display text-xs tracking-wide uppercase">
            Flagship project
          </p>

          <h2 id="featured-heading" className="mt-flow text-2xl tracking-tight">
            Edgebook AI
          </h2>

          {/* The value, promoted to lead size — the scannable claim, and prose rather than a heading so
              the section keeps a clean h2-then-body order. */}
          <p className="mt-stack text-xl leading-snug tracking-tight">
            An AI trading coach that helps traders improve the quality of their decisions &mdash; not
            just record their trades.
          </p>

          <div className="text-ink-muted mt-stack space-y-flow text-lg">
            <p>
              Most trading tools count wins and losses. They can say what happened, but not whether the
              thinking behind a trade was sound &mdash; and a profitable trade can still be a mistake,
              while a losing one can follow a good process.
            </p>
            <p>
              Edgebook AI is built as a coach, not a guru. It doesn&rsquo;t predict the market or
              replace a trader&rsquo;s judgment; it helps them separate the quality of a decision from
              its outcome and see their own patterns. Its interpretation always stays downstream of
              verified facts, never ahead of them.
            </p>
          </div>

          {/* Status: orientation, kept quiet. The product is still being designed and built, and says
              so plainly rather than borrowing the language of something shipped. */}
          <p className="text-ink-faint font-display mt-stack inline-flex items-center gap-2 text-xs tracking-wide uppercase">
            <span className="bg-rule-strong size-1.5 rounded-full" aria-hidden="true" />
            In development
          </p>

          {/* One invitation onward — the single accent action in the section. */}
          <div className="mt-stack">
            <a
              href="#/projects/edgebook-ai"
              className="bg-accent text-paper-raised hover:bg-accent-strong ease-out-quiet inline-block rounded-md px-6 py-3 font-display text-sm tracking-wide transition-colors duration-(--duration-quick)"
            >
              Read the case study
            </a>
          </div>
        </div>

        {/*
          The product visual — the section's evidence. No verified product screen exists yet, so this
          is an intentional placeholder in the notebook's own paper-and-rule language, not a mocked-up
          dashboard: a fabricated interface would be the exact opposite of what this portfolio is for.
          It states plainly that the interface is still being built.
        */}
        <figure>
          <div className="bg-paper-sunken border-rule-strong flex aspect-4/3 flex-col items-center justify-center rounded-lg border px-gutter text-center">
            <p className="text-ink-faint font-display text-xs tracking-wide uppercase">
              Product interface
            </p>
            <p className="text-ink-muted mt-flow max-w-text text-lg">
              A first look at Edgebook AI&rsquo;s decision-review interface is in progress.
            </p>
          </div>
          <figcaption className="text-ink-faint mt-flow text-sm">
            Interface in development &mdash; not a finished product screen.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
