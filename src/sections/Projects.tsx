import FlagshipProject from './projects/FlagshipProject.tsx'
import ProgramBlock from './projects/ProgramBlock.tsx'

// The Projects section: one flagship product and the program coursework alongside it, at deliberately
// different weight. Edgebook AI is the independent product — full width, backed by a complete case
// study; the coursework is lighter and shown honestly, including when it is empty. The asymmetry is
// the argument: a portfolio where everything sits at equal weight says nothing about what its author
// would choose to build.
//
// This section owns the `#projects` anchor — moved here from the flagship once Edgebook became one
// project within a category. The hero CTA ("Explore my work") and the Journey coda ("featured
// project") both still resolve here; neither was touched.
export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-wide mx-auto px-gutter pb-section"
    >
      <h2 id="projects-heading" className="text-2xl tracking-tight">
        Projects
      </h2>
      <p className="text-ink-muted mt-stack max-w-text text-lg">
        One product built without a brief, documented in depth &mdash; and the program work being
        completed alongside it.
      </p>

      <div className="mt-section">
        <FlagshipProject />
      </div>

      {/* The lighter category, set off by a rule so the two read as distinct weights, not a grid. */}
      <div className="border-rule mt-section border-t pt-stack">
        <ProgramBlock />
      </div>
    </section>
  )
}
