import { flagship } from '../../content/work.ts'
import LifecycleTag from './LifecycleTag.tsx'

// The flagship inside the Projects section: Edgebook AI, the strongest evidence of how Amina builds.
// This is the reused homepage feature — the same copy, visual, and case-study link as before — now
// nested under <Projects /> rather than owning the #projects anchor itself. Its job is unchanged:
// introduce the product and hand off to the full case study, which holds the depth
// (docs/prompts/005-edgebook/001-build-edgebook-homepage.md).
//
// It reads only identity and lifecycle status from src/content/work.ts; Edgebook's prose and its
// case-study route stay here, the single source of truth. Full width, never inside a grid — the
// asymmetry with the lighter coursework is the argument the section makes.
//
// Layout mirrors the hero's two-column grid: narrative first in source order, product visual beside it
// on wide screens, stacking on narrow. The rail is left for the case study, where it earns its place.
export default function FlagshipProject() {
  return (
    <section aria-labelledby="flagship-heading">
      <div className="lg:gap-x-stack gap-y-stack grid items-center lg:grid-cols-2">
        {/* The narrative: label, name, the value in one line, the problem, and what makes it different. */}
        <div className="max-w-text">
          <p className="text-ink-faint font-display text-xs tracking-wide uppercase">
            Flagship project
          </p>

          <h3 id="flagship-heading" className="mt-flow text-2xl tracking-tight">
            {flagship.name}
          </h3>

          {/* The value, promoted to lead size — the scannable claim, prose rather than a heading. */}
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

          {/* Project lifecycle — a different axis from the case study's implementation-evidence labels. */}
          <div className="mt-stack">
            <LifecycleTag status={flagship.status} />
          </div>

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
          The product visual — the section's evidence. No verified product screen exists yet, so this is
          an intentional placeholder in the notebook's own paper-and-rule language, not a mocked-up
          dashboard: a fabricated interface would be the exact opposite of what this portfolio is for.
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
