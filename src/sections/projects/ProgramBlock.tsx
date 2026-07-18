import { program } from '../../content/work.ts'
import LifecycleTag from './LifecycleTag.tsx'
import ProgramProject from './ProgramProject.tsx'

// The program block: coursework, presented deliberately lighter than the flagship. It renders honestly
// with zero projects — a seven-month program in progress is true today — and the empty-state line
// self-deletes the moment the first project is added. No placeholder cards, no "coming soon": the
// asymmetry between an owned product and program work is the story, and a padded grid would erase it.
export default function ProgramBlock() {
  return (
    <section aria-labelledby="program-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 id="program-heading" className="text-xl tracking-tight">
          {program.name}
        </h3>
        <LifecycleTag status={program.status} />
      </div>

      <p className="text-ink-faint mt-flow text-sm">
        {program.length} · {program.blurb}
      </p>

      {program.projects.length === 0 ? (
        // True today; it disappears automatically once the first project lands. No "coming soon."
        <p className="text-ink-faint mt-stack text-sm">
          Coursework projects are added as they are completed.
        </p>
      ) : (
        <ul className="mt-stack space-y-stack">
          {program.projects.map((project) => (
            <ProgramProject key={project.name} {...project} />
          ))}
        </ul>
      )}
    </section>
  )
}
