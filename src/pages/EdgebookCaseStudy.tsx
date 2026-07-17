import { useEffect, useRef } from 'react'
import CaseStudySection from './case-study/CaseStudySection.tsx'
import StatusLabel from './case-study/StatusLabel.tsx'
import type { Status } from './case-study/StatusLabel.tsx'
import DecisionShift from './case-study/DecisionShift.tsx'
import ArchitectureStack from './case-study/ArchitectureStack.tsx'
import RecordVsReflection from './case-study/RecordVsReflection.tsx'
import EvidenceFlow from './case-study/EvidenceFlow.tsx'
import TradeReviewMockup from './case-study/TradeReviewMockup.tsx'

// The Edgebook AI case study — the destination the homepage flagship links to at #/projects/edgebook-ai.
// Its content is a faithful rendering of the approved manuscript
// (docs/prompts/005-edgebook/002-edgebook-case-study-manuscript.md): the words, the decisions, and the
// narrative are the manuscript's; this file owns only how they are presented in Builder Journal's design
// system. The five manuscript diagrams live as focused components under ./case-study, and honesty labels
// (Implemented / Designed / Planned / Needs validation) are surfaced wherever the manuscript uses them.
//
// The page is code-split (React.lazy in App.tsx) so its weight never touches the homepage's first load.

const META: [string, string][] = [
  ['Role', 'Product & engineering — Amina'],
  ['Stage', 'Active development'],
  ['Updated', 'This page tracks the build'],
]

const PRINCIPLES: [string, string][] = [
  [
    'AI as coach, not guru',
    'It asks questions and surfaces evidence. It does not issue verdicts, and it does not know better than you.',
  ],
  [
    'Process before outcome',
    'A losing trade that followed the plan is a success worth reinforcing. The product must be able to say that.',
  ],
  [
    'Structure and psychology are separate',
    'A bad setup and a good setup traded badly are different failures. Collapsing them hides the lesson.',
  ],
  [
    'Evidence before interpretation',
    'No feedback is generated without citable facts behind it. If the evidence is thin, the product stays quiet.',
  ],
  [
    'No market prediction',
    'Edgebook never forecasts price. The moment it does, it becomes a signal service and the trust is gone.',
  ],
  [
    'No replacement of trader judgment',
    'The trader decides. The product’s job is to make that decision better informed, not to make it for them.',
  ],
]

const BUILD_STATUS: { status: Status; feature: string; note: string }[] = [
  {
    status: 'Implemented',
    feature: 'Trade record capture & storage',
    note: 'Facts written once, immutable thereafter.',
  },
  {
    status: 'Implemented',
    feature: 'Deterministic metrics engine',
    note: 'P&L, R-multiple, expectancy — pure, tested, no model involved.',
  },
  {
    status: 'Designed',
    feature: 'Reflection capture as structured data',
    note: 'Not a free-text box. Typed fields that can be reasoned over.',
  },
  {
    status: 'Designed',
    feature: 'Trade review screen',
    note: 'The screen above. Interaction model settled, build pending.',
  },
  {
    status: 'Planned',
    feature: 'Evidence-cited coaching responses',
    note: 'Blocked on the confidence-threshold question in section 05.',
  },
  {
    status: 'Planned',
    feature: 'Weekly coaching session',
    note: 'Depends on pattern recognition landing first.',
  },
]

const DECISIONS: { title: string; rows: [string, string][] }[] = [
  {
    title: 'AI has no write access',
    rows: [
      [
        'Problem',
        'A language model with write access to trading records could corrupt the trader’s source of truth — and they’d have no way to know.',
      ],
      [
        'Approach',
        'AI is strictly downstream of the trust boundary. It reads computed evidence and returns language. It cannot write facts or perform calculations.',
      ],
      [
        'Reason',
        'A trader who cannot trust their own numbers has nothing. Trust in the record has to be absolute before interpretation is worth anything.',
      ],
      [
        'Tradeoff',
        'The coach can only discuss what the deterministic layer already computes. New kinds of insight require engineering work first — the model can’t reach for data on its own.',
      ],
    ],
  },
  {
    title: 'Reflection is structured, not free text',
    rows: [
      [
        'Problem',
        'Reflections are subjective and messy. The easy path is a free-text field, which is unstructured and hard to reason over.',
      ],
      [
        'Approach',
        'Reflection is typed and structured — separate dimensions for setup quality, rule adherence, and emotional state, alongside free text.',
      ],
      [
        'Reason',
        'If reflection is structured, it can be compared against the record programmatically. The gap becomes computable rather than requiring a model to read prose and guess.',
      ],
      [
        'Tradeoff',
        'More friction at entry. Traders may abandon journaling if logging feels like paperwork. This is a real risk and it isn’t resolved — see section 11.',
      ],
    ],
  },
  {
    title: 'Feedback requires an evidence threshold',
    rows: [
      [
        'Problem',
        'AI coaching that speaks with false confidence on thin data is worse than no coaching. It teaches the wrong lesson convincingly.',
      ],
      [
        'Approach',
        'Feedback requires an evidence threshold. Below it, the product says it doesn’t know yet rather than generating something plausible.',
      ],
      [
        'Reason',
        'One confidently wrong insight destroys trust permanently. Silence is recoverable; being wrong isn’t.',
      ],
      [
        'Tradeoff',
        'Early users get a quiet product. The first weeks are less impressive, and the threshold value itself is still unvalidated.',
      ],
    ],
  },
  {
    title: 'Market prediction is architecturally excluded',
    rows: [
      [
        'Problem',
        'Every competitor eventually adds signals or predictions — it’s what users ask for and it’s what sells.',
      ],
      [
        'Approach',
        'Market prediction is architecturally excluded, not just declined. The model has no market data access at all.',
      ],
      [
        'Reason',
        'A coach that also predicts becomes a guru. The trader stops interrogating their own process and starts outsourcing it, which is the exact failure the product exists to fix.',
      ],
      ['Tradeoff', 'Loses the segment that wants signals. Harder to sell. This narrows the market on purpose.'],
    ],
  },
]

const CHALLENGES: [string, string][] = [
  [
    'The honesty problem',
    'The product depends on traders writing truthfully about their own mistakes — in a domain where ego is expensive. If reflections become performance, the coach reasons over fiction. I don’t have a design solution for this yet.',
  ],
  [
    'Friction vs. structure',
    'Structured reflection makes coaching possible and makes logging tedious. Every field I add improves the analysis and increases the chance the trader quits. I don’t know where the line is.',
  ],
  [
    'The confidence threshold',
    'How many trades before a pattern is real and not noise? Too low and the coach is confidently wrong. Too high and the product is silent for months. Currently unresolved.',
  ],
  [
    'Coaching that lands',
    'There’s a narrow band between a question that provokes reflection and one that feels like an accusation. Getting a model to sit in that band consistently is unproven.',
  ],
  [
    'Sample size of one',
    'The core insight comes from my own journal. It’s a strong hypothesis, not a validated finding, and I’m aware of the risk of building a product that only solves my problem.',
  ],
]

const NON_GOALS: [string, string][] = [
  [
    'Predict the market',
    'No signals, no forecasts, no entries. The model has no market data. This is enforced by architecture, not policy.',
  ],
  [
    'Replace trader judgment',
    'The coach never says take this or skip that. It shows you your own evidence and asks. The decision stays yours.',
  ],
  [
    'Auto-trade or copy-trade',
    'Execution is out of scope permanently. The moment the product touches an order, its incentives stop being aligned with the trader’s learning.',
  ],
  [
    'Gamify discipline',
    'No streaks, no badges for logging. Rewarding the appearance of process corrupts the data the product depends on.',
  ],
]

const CHANGED_THINKING: [string, string][] = [
  [
    'I was building the wrong half.',
    'I spent real time on cleaner input and better charts. None of it addressed why I was journaling in the first place. The data was never the bottleneck — the confrontation was.',
  ],
  [
    'Constraining AI made it more useful, not less.',
    'My instinct was to give the model more access and more freedom. Locking it behind a trust boundary with read-only evidence made its output something a trader could actually rely on. The constraint is the feature.',
  ],
  [
    'Subjective data isn’t second-class.',
    'I first treated the trader’s note as decoration around the real data. It’s the opposite: the note is the only place intent lives, and intent is what you’re trying to improve. The numbers are just what happened afterward.',
  ],
  [
    'Deleting unverifiable claims was harder than writing them.',
    'An earlier version of this case study had confident numbers in it. Removing them left obvious gaps. Keeping them would have made a product about honest self-assessment start with a lie.',
  ],
]

const ROADMAP: { status: Status; theme: string; detail: string }[] = [
  {
    status: 'Implemented',
    theme: 'Trustworthy record',
    detail: 'Immutable trade facts and a deterministic metrics engine. The foundation everything else reads from.',
  },
  {
    status: 'Designed',
    theme: 'Structured trade review',
    detail: 'Record and reflection captured as separate, typed dimensions, presented together.',
  },
  {
    status: 'Planned',
    theme: 'Evidence-based AI feedback',
    detail:
      'Coaching responses that cite the specific trades and metrics behind them. Gated on the confidence-threshold question.',
  },
  {
    status: 'Planned',
    theme: 'Pattern recognition',
    detail: 'Recurring gaps between stated plan and actual behavior, surfaced across trades rather than within one.',
  },
  {
    status: 'Planned',
    theme: 'Planned vs. actual comparison',
    detail: 'Systematic measurement of where execution drifts from intent — the stop-widening case, generalized.',
  },
  {
    status: 'Planned',
    theme: 'Weekly coaching',
    detail: 'A periodic session over the week’s evidence. Depends on pattern recognition landing first.',
  },
  {
    status: 'Planned',
    theme: 'Simulation',
    detail: 'Replaying decisions against the trader’s own stated rules. Exploratory — furthest from committed.',
  },
]

// A quiet, tagged list item: a status pill beside a titled note. Used for the build-status and roadmap
// sections, which are lists of features carrying a status — not comparison grids — so they stack cleanly
// on narrow screens rather than forcing a wide table to scroll.
function StatusItem({ status, title, detail }: { status: Status; title: string; detail: string }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-x-4">
      <div className="pt-0.5">
        <StatusLabel status={status} />
      </div>
      <div>
        <p className="text-ink font-medium">{title}</p>
        <p className="text-ink-muted mt-0.5 text-base">{detail}</p>
      </div>
    </li>
  )
}

export default function EdgebookCaseStudy() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // A route change swaps the whole page, so send the reader to the top and move focus to the new heading —
  // otherwise keyboard and screen-reader users would be stranded wherever the last view left them.
  // Programmatic focus doesn't trigger :focus-visible, so no focus ring flashes on arrival.
  useEffect(() => {
    window.scrollTo(0, 0)
    headingRef.current?.focus()
  }, [])

  return (
    <main className="max-w-content mx-auto px-gutter py-section">
      {/* Header: what this is, the honest framing, and the labels the reader will meet throughout. */}
      <header>
        <p className="text-ink-faint font-display text-xs tracking-wide uppercase">Case study · In development</p>

        <h1 ref={headingRef} tabIndex={-1} className="mt-flow text-3xl tracking-tightest">
          Edgebook AI
        </h1>

        <p className="text-ink-muted mt-stack max-w-text text-xl leading-snug tracking-tight">
          Traders can already record what happened. Edgebook is being built to help them understand{' '}
          <span className="text-ink font-medium">why their decisions worked</span> — and why they didn’t.
        </p>

        <dl className="border-rule mt-stack max-w-text divide-rule divide-y border-y text-sm">
          {META.map(([term, value]) => (
            <div key={term} className="flex justify-between gap-6 py-2">
              <dt className="text-ink-faint font-display text-xs tracking-wide uppercase">{term}</dt>
              <dd className="text-ink-muted text-right">{value}</dd>
            </div>
          ))}
        </dl>

        {/* The one caveat that reframes the whole read — a rare callout, earning the correction accent. */}
        <div className="bg-accent-soft border-rule mt-stack max-w-text rounded-md border p-5">
          <p className="text-ink-faint font-display text-xs tracking-wide uppercase">A note on honesty</p>
          <p className="text-ink-muted mt-flow">
            Edgebook is not finished. This case study marks what is implemented, what is designed, what is
            planned, and what is still unresolved. Sections without verified research say so rather than
            filling the gap.
          </p>
        </div>

        <div className="mt-stack flex flex-wrap items-center gap-2">
          <span className="text-ink-faint text-sm">Status labels used throughout:</span>
          <StatusLabel status="Implemented" />
          <StatusLabel status="Designed" />
          <StatusLabel status="Planned" />
          <StatusLabel status="Needs validation" />
        </div>
      </header>

      <CaseStudySection id="overview" number="01" title="Overview" standfirst="What it is, who it’s for, and what it promises.">
        <p>
          Edgebook AI is a trading journal being built into a coaching platform. It takes a trader’s own
          records and their own reasoning, turns them into structured evidence, and uses AI to help the
          trader interrogate their process — not to tell them what the market will do.
        </p>
        <p>
          It’s for the trader who has been journaling for months, has a spreadsheet full of outcomes, and
          still cannot answer a simple question:{' '}
          <span className="text-ink font-medium">which of my decisions are actually working?</span>
        </p>
        <aside className="border-rule-strong border-l-2 pl-4">
          <p className="text-ink-faint font-display text-xs tracking-wide uppercase">The promise</p>
          <p className="text-ink mt-1">
            Every piece of feedback Edgebook gives you can be traced back to something you recorded and
            something you said.
          </p>
        </aside>
      </CaseStudySection>

      <CaseStudySection id="problem" number="02" title="The problem" standfirst="Recording results is not the same as learning from them.">
        <p>
          A trading journal answers “what happened.” It rarely answers “why.” A trader can log two hundred
          trades, chart their equity curve, and still have no mechanism for separating a good decision that
          lost from a bad decision that won.
        </p>
        <p>
          Outcome is noisy. Process is the signal. But process lives in a trader’s head — in the reason they
          widened a stop, in the mood they were in on trade three, in the rule they told themselves they’d
          follow. Journals don’t capture that, and when they do, nothing connects it back to the record.
        </p>
        <p>
          So traders repeat mistakes with confidence, and abandon good habits after a losing streak. The
          feedback loop is broken in the middle.
        </p>
      </CaseStudySection>

      <CaseStudySection id="why" number="03" title="Why I’m building this" standfirst="Personal motivation, kept short.">
        <p>
          I kept a journal. I was disciplined about it. I logged entries, exits, screenshots, and a line or
          two about what I was thinking.
        </p>
        <p>
          After a bad month I went back through it looking for the lesson, and realized I couldn’t find one. I
          had a record of <span className="text-ink font-medium">results</span> and a scattering of{' '}
          <span className="text-ink font-medium">feelings</span>, and no way to put them next to each other.
          My worst habit — moving stops when a position felt uncomfortable — had been visible in my own data
          the whole time. I just had no tool that would put it in front of me.
        </p>
        <p>
          I didn’t want a tool that would tell me what to trade. I wanted the thing a good coach does: show
          you the tape, ask the question you’ve been avoiding, and let you answer it yourself.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="principles"
        number="04"
        title="Product principles"
        standfirst="These are constraints, not aspirations. Each one rules something out."
      >
        <dl className="space-y-flow">
          {PRINCIPLES.map(([title, body]) => (
            <div key={title}>
              <dt className="text-ink font-display font-semibold">{title}</dt>
              <dd className="mt-1">{body}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection
        id="research"
        number="05"
        title="Research and discovery"
        standfirst="Only what has actually been done. The gaps are marked as gaps."
      >
        <div>
          <h3 className="text-ink text-base">What’s known</h3>
          <ol className="mt-flow list-decimal space-y-flow pl-5">
            <li>
              <span className="text-ink font-medium">Personal journaling experience</span> across an extended
              period, reviewed retrospectively. The stop-widening pattern was found in my own records — this
              is the origin of the product thesis.
            </li>
            <li>
              <span className="text-ink font-medium">Review of existing journaling tools.</span> The
              consistent shape: strong on statistics, weak on reasoning. Almost all treat the trader’s note as
              a free-text field with no relationship to the data beside it.
            </li>
            <li>
              <span className="text-ink font-medium">Established trading-psychology literature</span> on
              outcome bias and process discipline. This is where “process before outcome” comes from — it’s
              not an original finding, and I’m not claiming it as one.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-ink inline-flex flex-wrap items-center gap-2 text-base">
            What still needs validation <StatusLabel status="Needs validation" />
          </h3>
          <ul className="mt-flow list-disc space-y-2 pl-5">
            <li>
              <span className="text-ink font-medium">Does the pattern generalize?</span> My stop-widening
              habit is one trader’s data. No interviews have been conducted. No cohort has been studied.
            </li>
            <li>
              <span className="text-ink font-medium">Will traders write honest reflections?</span> The entire
              model depends on it. Untested.
            </li>
            <li>
              <span className="text-ink font-medium">How much data before feedback is trustworthy?</span> Ten
              trades? Fifty? There is currently no defensible threshold, and shipping one that’s too low would
              make the coach confidently wrong.
            </li>
            <li>
              <span className="text-ink font-medium">Does coaching change behavior?</span> Being shown a
              pattern and acting on it are different things. Unproven.
            </li>
          </ul>
        </div>
        <aside className="border-rule-strong text-ink-faint border-l-2 pl-4 italic">
          Earlier drafts of this case study carried interview counts, broker audit figures, and adoption
          statistics. None of it was verifiable, so none of it is here.
        </aside>
      </CaseStudySection>

      <CaseStudySection
        id="reflection"
        number="06"
        title="How reflection changed the product"
        standfirst="The most important shift so far."
      >
        <p>
          Edgebook started as a better tracker. Cleaner input, better charts, nicer tagging. I built toward
          that for a while.
        </p>
        <DecisionShift />
        <p>
          <span className="text-ink font-medium">What caused it:</span> Reviewing my own journal and finding
          the lesson was already in the data — I just had no mechanism that would confront me with it.
        </p>
        <p>
          The realization was that better statistics wouldn’t have helped me. I already had the statistics.
          What I lacked was something that would put my <span className="text-ink font-medium">note</span>{' '}
          next to my <span className="text-ink font-medium">record</span> and ask why they disagreed.
        </p>
        <p>
          That reframed everything downstream. The reflection stopped being a nice-to-have text field and
          became a first-class data type. The architecture had to guarantee that facts stayed clean enough for
          a model to reason over safely. And AI stopped being a feature I might add and became the only thing
          that could close the loop.
        </p>
        <p>
          This is the only major documented pivot to date. As further shifts happen, they’ll be recorded here
          in the same format.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="architecture"
        number="07"
        title="System architecture"
        standfirst="The hierarchy is the product decision. Everything else follows from it."
      >
        <p className="text-ink-muted">
          <span className="text-ink font-medium">Status:</span> the two lower layers — verified facts and
          deterministic calculations — are <StatusLabel status="Implemented" />. Analytics and the
          AI-interpretation layer beneath the trust boundary are <StatusLabel status="Designed" /> and{' '}
          <StatusLabel status="Planned" /> (see §09). The boundary itself is an architectural rule, enforced
          as each layer is built — not a running system today.
        </p>
        <p>
          The architecture exists to answer one question: how do you let a language model near a trader’s
          money-adjacent data without it inventing things?
        </p>
        <p>The answer is ordering, and a hard boundary.</p>
        <ArchitectureStack />
        <p>
          Each layer can only read from the one above it. The AI layer sits at the bottom by design — it
          consumes evidence that has already been established and computed. It has no path to write a fact,
          recompute a number, or reach the market.
        </p>
        <p>
          This means a hallucination has a bounded blast radius. The model can phrase an insight badly or draw
          a weak conclusion, and a trader can disagree with it. What it cannot do is tell you that you made
          money when you didn’t.
        </p>
        <p>
          The server owns every fact and every calculation. The model receives a read-only view of
          already-computed evidence. If the model is wrong, it is wrong about interpretation — never about
          what happened.
        </p>
      </CaseStudySection>

      <CaseStudySection id="record-reflection" number="08" title="Record vs. reflection" standfirst="One distinction, stated once.">
        <p className="text-ink-muted">
          <span className="text-ink font-medium">Status:</span> the record side is{' '}
          <StatusLabel status="Implemented" />; structured reflection is <StatusLabel status="Designed" />,
          not yet captured (see §09). The distinction below is the model the product is built around — stated
          as the target it is built toward.
        </p>
        <p>
          Edgebook holds two kinds of data, and never confuses them. This is the foundation the rest of the
          product sits on.
        </p>
        <RecordVsReflection />
        <p>
          The record is what the market and the broker say. The reflection is what the trader says. Both are
          stored, neither is edited to match the other, and the space between them is where coaching happens.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="product"
        number="09"
        title="Product experience"
        standfirst="What actually exists right now, labeled honestly."
      >
        <p>
          Rather than fill this section with dashboard screenshots, here is the one screen that carries the
          whole idea. If this screen doesn’t work, nothing else matters.
        </p>
        <div>
          <h3 className="text-ink inline-flex flex-wrap items-center gap-2 text-base">
            Trade review — record, reflection, and coach in one view <StatusLabel status="Designed" />
          </h3>
          <div className="mt-flow">
            <TradeReviewMockup />
          </div>
        </div>
        <p>
          The screen puts the recorded facts and the trader’s own note side by side, then lets the coach point
          at the gap. The coach’s question is generated from cited evidence — the trade count, the stop delta,
          the rule adherence — and every response option hands the judgment back to the trader.
        </p>
        <div>
          <h3 className="text-ink text-base">Build status</h3>
          <ul className="mt-flow space-y-flow">
            {BUILD_STATUS.map((item) => (
              <StatusItem key={item.feature} status={item.status} title={item.feature} detail={item.note} />
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="decisions"
        number="10"
        title="Important decisions"
        standfirst="Each one cost something. The tradeoff is the honest part."
      >
        <div className="space-y-stack">
          {DECISIONS.map((decision) => (
            <div key={decision.title}>
              <h3 className="text-ink text-base">{decision.title}</h3>
              <dl className="mt-flow space-y-2">
                {decision.rows.map(([label, value]) => (
                  <div key={label} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-x-3">
                    <dt className="text-ink-faint font-display text-xs tracking-wide uppercase sm:pt-1">
                      {label}
                    </dt>
                    <dd className="text-ink-muted">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        id="open-questions"
        number="11"
        title="Challenges and open questions"
        standfirst="Things I don’t have answers to yet."
      >
        <dl className="space-y-flow">
          {CHALLENGES.map(([title, body]) => (
            <div key={title}>
              <dt className="text-ink font-display font-semibold">{title}</dt>
              <dd className="mt-1">{body}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection
        id="non-goals"
        number="12"
        title="Deliberate non-goals"
        standfirst="What Edgebook will not do, on purpose."
      >
        <ul className="space-y-flow">
          {NON_GOALS.map(([title, body]) => (
            <li key={title} className="grid grid-cols-[1.25rem_1fr] gap-x-2">
              <span className="text-ink-faint font-display" aria-hidden="true">
                ×
              </span>
              <div>
                <p className="text-ink font-display font-semibold">{title}</p>
                <p className="mt-1">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        id="changed-thinking"
        number="13"
        title="What’s changed my thinking"
        standfirst="Specific to this project, not general advice about software."
      >
        <dl className="space-y-flow">
          {CHANGED_THINKING.map(([title, body]) => (
            <div key={title}>
              <dt className="text-ink font-display font-semibold">{title}</dt>
              <dd className="mt-1">{body}</dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection
        id="roadmap"
        number="14"
        title="Roadmap"
        standfirst="The evolution from journal to coach. Nothing here is a promise."
      >
        <ul className="space-y-flow">
          {ROADMAP.map((item) => (
            <StatusItem key={item.theme} status={item.status} title={item.theme} detail={item.detail} />
          ))}
        </ul>
        <p>
          Items move up this list as they’re built. Items that don’t survive contact with the open questions
          in section 11 will be removed rather than quietly left here.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="why-ai"
        number="15"
        title="Why AI becomes useful here"
        standfirst="The consequence of everything above — not a feature bolted on."
      >
        <p>
          AI is not what makes Edgebook interesting. What makes it interesting is that by the time the model is
          called, the hard problems are already solved.
        </p>
        <EvidenceFlow />
        <p>
          The model isn’t asked to know anything about markets, or to be correct about the future, or to be
          trusted with the truth. It’s asked to do the one thing it’s genuinely good at: read a body of
          established evidence and a person’s own words, notice where they disagree, and put that into a
          question worth answering.
        </p>
        <p>
          Every earlier decision — the trust boundary, the deterministic layer, typed reflections, the refusal
          to predict — exists to make that final step safe. Remove any of them and the AI becomes what I’m
          trying not to build:{' '}
          <span className="text-ink font-medium">
            something confident, unaccountable, and pointed at the market instead of at the trader.
          </span>
        </p>
      </CaseStudySection>

      <footer className="border-rule mt-stack border-t pt-stack">
        <p className="text-ink-faint text-sm italic">
          Edgebook AI is in active development. This document is updated as the build progresses.
        </p>
        <div className="mt-stack">
          <a
            href="#/"
            className="text-accent underline-offset-4 decoration-rule-strong ease-out-quiet hover:decoration-accent underline transition-colors duration-(--duration-quick)"
          >
            Back to the homepage
          </a>
        </div>
      </footer>
    </main>
  )
}
