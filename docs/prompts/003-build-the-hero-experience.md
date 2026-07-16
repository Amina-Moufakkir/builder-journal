# Prompt 003 — Build the Hero Experience

## Goal

Build the hero section for Builder Journal.

The hero should establish trust by introducing the person before the engineer.

## Context

Builder Journal is a product-focused portfolio that communicates how I think, make decisions, and grow through building software.

Before making any changes:

1. Read `SPEC.md`.
2. Read `CLAUDE.md`.
3. Read `docs/design-system.md`.
4. Read `docs/content-strategy.md`.

Treat these documents as the source of truth.

The technical foundation and design system have already been established.

This is the first visible section of the portfolio.

## Instruction

Build the hero section using the existing design system and content strategy.

Do not invent a new story.

Translate the existing content strategy into a compelling hero experience that feels authentic, calm, and human.

The implementation should prioritize communication over decoration.

## Hero Requirements

The hero should answer three questions within a few seconds:

- Who am I?
- Why do I build?
- Why should someone continue reading?

The visitor should leave curious to explore the rest of the portfolio.

## Layout

Include:

- Name
- Hero headline
- Supporting paragraph
- Primary call-to-action
- Secondary call-to-action (if justified)

Use the spacing, typography, and color tokens from the design system.

Do not hardcode visual values that already exist as tokens.

## Content Requirements

The copy should reflect the content strategy.

Do not:

- Invent personal experiences.
- Exaggerate accomplishments.
- Use generic portfolio language.
- Add technology logo clouds.
- Add skills matrices.
- Add counters.
- Add rotating text.
- Add carousels.
- Add background videos.

If any wording is adjusted, explain why the revision improves clarity or communication.

## Implementation Requirements

- Follow semantic HTML.
- Follow accessibility best practices.
- Keep the component structure simple.
- Use meaningful comments for each major section.
- Comment custom functions by explaining their purpose rather than their implementation.
- Keep the hero responsive across common breakpoints.

## Verification

Before finishing, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Verify that:

- The hero follows the design system.
- The implementation follows the content strategy.
- The layout remains responsive.
- Accessibility has not regressed.
- No unnecessary dependencies were introduced.

## Output

When complete, provide:

1. Summary of changes.
2. Files created or modified.
3. Design decisions.
4. Content decisions.
5. Tradeoffs considered.
6. Recommendations before building the next section.

Do not commit any changes.

## Why This Prompt Is Structured This Way

The hero is the visitor's first impression of Builder Journal.

Its purpose is not to showcase technical ability.

Its purpose is to establish trust, communicate identity, and invite the visitor to continue exploring.

This follows the project's principle:

> Identity before technology.

## Claude Code Output

Claude Code implemented the first visible section of Builder Journal using the established design system and content strategy.

The hero includes my name, a headline, supporting copy, a portrait, and a primary call to action. The initial implementation required several visual iterations, and two of them were outright mistakes: a stretched portrait caused by an unconstrained image height, and a mobile overflow that was diagnosed from a cropped screenshot and turned out not to exist. Both passed the automated checks; both were only caught, or corrected, by looking at the actual rendered layout.

The final structure uses explicit grid rows so the portrait aligns with the headline without relying on offsets or one-off spacing values. Grid gaps control vertical rhythm across breakpoints, and the portrait spans the headline and copy rows so the text determines the layout instead of the image forcing extra space.

The implementation was verified at 390px, 768px, 1024px, and 1440px. Type checking, linting, and the production build all pass.

## Review

### Accepted

- Hero copy that introduces how I think before presenting technical skills.
- A strong headline centered on understanding people before writing code.
- The portrait and headline treated as one visual unit.
- Structural grid alignment instead of manual offsets.
- Grid gaps used to control spacing across breakpoints.
- Responsive behavior verified at multiple viewport widths.
- Existing design tokens reused instead of introducing arbitrary values.
- A single primary call to action that invites visitors to explore the work.

### Modified

- Enlarged the portrait to give it presence — which then exposed the detachment between it and the text, rather than resolving it.
- Reworked the layout from a basic two-column composition into explicit grid rows.
- Reduced the horizontal gap between the portrait and the text.
- Tightened the spacing between the headline and supporting copy.
- Removed a mobile margin that duplicated the grid gap and created excessive spacing.
- Kept the current portrait as a temporary asset until a professional photo is available.

### Rejected

- Forcing the portrait into the margin rail, because the hero needs a different composition from later editorial sections.
- Fixing alignment with magic offsets, because the relationship should come from the layout structure.
- Continuing to resize the portrait as the main solution after it became clear that composition was the deeper issue.
- Adding decorative animation or interactive effects that would compete with the introduction.

## Manual Verification

- [x] Hero follows the design system.
- [x] Hero reflects the content strategy.
- [x] Typography establishes a clear hierarchy.
- [x] Responsive layout verified at 390px, 768px, 1024px, and 1440px.
- [x] Accessibility verified — audited against the rendered page: one h1, honest image alt text, keyboard-focusable CTA showing a 2px focus-visible ring on real Tab, and rendered-color contrast passing AA (eyebrow 4.92:1, headline 14.1:1, body 6.79:1, CTA 8.71:1).
- [x] No unnecessary visual effects.
- [ ] Final portrait verified — deferred until the temporary avatar is replaced with a professional photo.

## Lessons Learned

Automated checks can confirm that a layout builds correctly, but they cannot confirm that the composition feels connected.

The portrait first appeared to be a sizing problem, but enlarging it revealed that the real issue was the relationship between the portrait, headline, and copy. The solution came from changing the structure rather than continuing to adjust dimensions.

Grid gaps also proved more reliable than margins for shared rhythm. When spacing belongs between structural rows, defining it as a gap keeps alignment consistent across elements and breakpoints.

## Reflection

If I wrote this prompt again, I would explicitly require visual review at several viewport sizes before considering the hero complete.

I would also identify the portrait as a temporary asset from the beginning. That would help prevent the layout from being over-optimized around an image that will later be replaced.

The strongest improvement came from questioning the composition instead of continuing to adjust isolated values.

## Related Commit

`introduce the builder before the portfolio`