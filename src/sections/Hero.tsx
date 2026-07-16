import profilePicture from '../assets/profile-pic.webp'

// Builder Journal's opening: who Amina is, why she builds, and an invitation to keep reading.
//
// The hero owns its own two-column layout rather than borrowing the margin rail. The rail is sized
// for orientation — dates, status, revision notes — and a portrait squeezed into it reads as an
// afterthought rather than as the person. The rail stays reserved for the sections where it earns
// its place (docs/design-system.md).
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="max-w-feature mx-auto px-gutter py-section">
      {/*
        The eyebrow, headline and supporting copy are separate rows so the portrait can begin on the
        headline's row and align with it structurally — the alignment is the grid's job, not a
        nudge. Vertical rhythm comes from row gaps rather than margins for the same reason: a margin
        would sit inside the grid area and push the portrait out of alignment by its own height.
        Below lg the placement drops away and everything stacks in source order.
      */}
      <div className="lg:gap-x-flow gap-y-flow grid lg:grid-cols-[auto_1fr]">
        {/*
          The person, beside the claim rather than above it. Spanning to the copy's row keeps the
          portrait from setting the headline's row height, so tightening the copy stays possible.
          The source is twice the rendered width so it stays sharp on high-density screens.
        */}
        <img
          src={profilePicture}
          alt="Portrait of Amina Moufakkir"
          width={512}
          height={512}
          className="aspect-square w-32 rounded-lg object-cover lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:w-56 lg:self-start"
        />

        {/* Identity: the name still reads first, in both source order and on screen. */}
        <p className="text-ink-faint font-display text-xs tracking-wide uppercase lg:col-start-2 lg:row-start-1">
          Amina Moufakkir
        </p>

        {/* The thesis, and the page's focal point. */}
        <h1
          id="hero-heading"
          className="max-w-text text-3xl tracking-tightest lg:col-start-2 lg:row-start-2"
        >
          I build products by understanding people before writing code.
        </h1>

        {/* The reason and the invitation: a stance, not a résumé. */}
        <div className="lg:col-start-2 lg:row-start-3">
          <p className="text-ink-muted max-w-text text-lg">
            I&rsquo;m a software engineer moving into AI engineering &mdash; and already building in
            it. Right now, that&rsquo;s Edgebook AI.
          </p>

          <p className="text-ink-muted mt-flow max-w-text text-lg">
            What matters to me isn&rsquo;t producing more code &mdash; it&rsquo;s understanding
            messy problems, making decisions I can explain, and learning from the ones I get wrong.
          </p>

          <p className="text-ink-muted mt-flow max-w-text text-lg">
            This is a record of that thinking &mdash; the decisions, the tradeoffs, and what each
            one taught me.
          </p>

          {/*
            One call to action. A second link to the journey would only mean "scroll down", since
            the journey is the next thing on the page — and a view with two primary actions has not
            decided what it is for.
          */}
          <div className="mt-stack">
            <a
              href="#projects"
              className="bg-accent text-paper-raised hover:bg-accent-strong ease-out-quiet inline-block rounded-md px-6 py-3 font-display text-sm tracking-wide transition-colors duration-(--duration-quick)"
            >
              Explore my work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
