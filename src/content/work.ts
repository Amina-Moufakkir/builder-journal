// The Projects section's data. Two separate exports, not one array with a type discriminator: the
// flagship and the program genuinely differ in shape, and merging them would make every component open
// with a branch.
//
// `status` here is PROJECT LIFECYCLE — where a project sits over time. It is a different axis from the
// case study's implementation-evidence labels (Implemented / Designed / Planned / Needs validation),
// and the two must never be conflated: a feature is "Implemented"; a project is "in development".

export type ProjectLifecycle = 'in-development' | 'in-progress' | 'complete'

export type ProgramProject = {
  name: string
  /** Program month the work landed. Renders as `M{month}`. */
  month: number
  /** The one specific thing learned — not "learned a lot about X." */
  learned: string
  /** Optional. Don't link to an empty repository. */
  href?: string | null
  /** Optional. Slug of a flagship project this work directly informed. */
  relatedTo?: string | null
}

// Identity and lifecycle status ONLY. Edgebook's copy and its case-study route live in the flagship
// component (the single source of truth) and are never restated here.
export const flagship: { slug: string; name: string; status: ProjectLifecycle } = {
  slug: 'edgebook',
  name: 'Edgebook AI',
  status: 'in-development',
}

export const program: {
  name: string
  length: string
  status: ProjectLifecycle
  started: string
  blurb: string
  projects: ProgramProject[]
} = {
  name: 'AI-Native Program',
  length: '7 months',
  status: 'in-progress',
  started: '2026-07',
  blurb: 'Building to brief, on a schedule.',
  projects: [],
}
