# Prompt 004 — Build the Journey Narrative

## Goal

Build the Journey section of Builder Journal.

This section should explain the experiences that shaped how I think as an engineer rather than present a chronological biography.

## Context

Builder Journal communicates the person before the engineer.

Before making any changes:

1. Read `SPEC.md`.
2. Read `CLAUDE.md`.
3. Read `docs/design-system.md`.
4. Read `docs/content-strategy.md`.

Follow these documents as the project's source of truth.

The technical foundation, design system, and hero have already been completed.

## Instruction

Build the Journey section using the established design system and content strategy.

The section should feel like the next chapter after the hero.

It should answer:

- How did I become this kind of builder?
- Which experiences shaped my thinking?
- Why do I approach engineering differently today?

Focus on transformation rather than chronology.

## Content Requirements

Use the existing story already developed for Builder Journal.

Do not invent new experiences.

Do not exaggerate accomplishments.

Avoid writing a résumé.

Every paragraph should reveal something about how I think today.

The section should communicate:

- My journey into engineering.
- The importance of understanding people.
- Why I value judgment over technical ability.
- How setbacks became part of my learning process.
- Why I believe engineering is ultimately about solving human problems.

If any wording is revised, explain why the revision improves clarity while preserving authenticity.

## Layout

The section should prioritize reading.

Use the existing typography, spacing, and design tokens.

Support the narrative with thoughtful layout rather than visual effects.

If the margin rail helps orientation or reflection, use it intentionally.

Do not add decorative elements simply because space is available.

## Accessibility

Ensure:

- Semantic HTML.
- Proper heading hierarchy.
- Responsive layout.
- Accessible color contrast.
- Keyboard accessibility.

## Commenting

Add concise comments describing the purpose of each major section.

Comment custom functions by explaining intent rather than implementation.

## Verification

Before finishing, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Verify:

- The section follows the design system.
- The content follows the content strategy.
- The layout is responsive.
- Accessibility has not regressed.
- No unnecessary dependencies were introduced.

## Output

Provide:

1. Summary of changes.
2. Files created or modified.
3. Design decisions.
4. Content decisions.
5. Tradeoffs considered.
6. Recommendations before building the next section.

Do not commit any changes.

## Why This Prompt Is Structured This Way

The Journey section explains why I think the way I do today.

Rather than listing milestones, it demonstrates how experiences shaped my approach to engineering and product thinking.

It reinforces the Builder Journal principle:

> Learning over ego.

## Claude Code Output

Claude Code implemented the Journey section as the second chapter of Builder Journal.

The section is structured as a narrative rather than a chronological timeline. It introduces the experiences that shaped how I think as an engineer through four movements: my entry into engineering, what customer-facing work taught me, a significant setback, and the shift in how I approach building today.

The implementation introduced the project's first use of the editorial margin rail. Rather than carrying lessons, the rail provides orientation while allowing the narrative to remain uninterrupted.

The layout was built with semantic HTML, responsive behavior, and accessibility in mind. No additional dependencies were introduced, and the implementation passes type checking, linting, and the production build.

---

## Review

### Accepted

- Journey organized as a narrative instead of a résumé.
- Four movements reflecting the content strategy.
- Editorial margin rail used for orientation rather than decoration.
- Semantic heading hierarchy.
- Responsive implementation.
- No unnecessary dependencies.
- Edgebook AI introduced only as a transition to the Featured Project section.

### Modified

- Refined the opening heading and supporting introduction for stronger readability.
- Tightened several paragraphs by removing filler while preserving meaning.
- Added an introductory bridge to establish the section before the first movement.
- Introduced subtle structural elements to improve continuity between movements.
- Accepted that the current portrait and overall visual styling remain temporary until the complete portfolio is built.

### Rejected

- Turning the Journey into a chronological timeline with dates.
- Decorative animations or visual effects that distract from the narrative.
- Pull quotes that repeat ideas already expressed in the story.
- Explaining Edgebook AI in detail before its dedicated project section.

---

## Manual Verification

- [x] Journey follows the design system.
- [x] Journey reflects the content strategy.
- [x] Semantic heading hierarchy verified.
- [x] Responsive layout verified.
- [x] Accessibility verified.
- [x] No unnecessary dependencies introduced.
- [ ] Editorial design fully validated — deferred until all portfolio sections have been implemented.

---

## Lessons Learned

Building a complete narrative requires more than good writing. Layout, hierarchy, and visual rhythm determine whether readers experience the story as a connected journey or as isolated blocks of text.

Rather than continuing to polish one section in isolation, I decided to establish the complete information architecture first. The portfolio will receive a dedicated editorial design pass once every major section has been implemented.

---

## Reflection

If I approached this section again, I would separate structural implementation from editorial refinement from the beginning.

The implementation now provides a solid foundation, but evaluating visual rhythm without the surrounding sections proved difficult. Completing the portfolio first will make it easier to judge transitions, pacing, and hierarchy across the entire experience rather than within a single chapter.

---

## Related Commit

`tell the story behind the builder`