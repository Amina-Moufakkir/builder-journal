# Prompt 002 — Define the Design System

## Goal

Establish the visual design system for Builder Journal before implementing any portfolio sections.

## Context

Builder Journal is a product-focused portfolio designed to communicate who I am as a builder, how I think, and how I approach engineering.

Before making any changes:

1. Read `SPEC.md`.
2. Read `CLAUDE.md`.
3. Review the existing project structure.
4. Follow the project's core principles and non-negotiable requirements.

The technical foundation has already been completed and verified.

Do not begin implementing the hero or any other page section.

## Instruction

Design a complete visual design system that reflects the personality and purpose of Builder Journal.

The visual language should feel:

- Calm
- Thoughtful
- Human
- Confident
- Product-focused
- Timeless

Avoid visual trends that could distract from the content.

### Define

Create a design system covering:

- Color palette
- Typography
- Spacing scale
- Border radius
- Shadows
- Layout container widths
- Grid system
- Vertical rhythm
- Icon philosophy
- Motion philosophy
- Component principles
- Accessibility considerations

### Design Principles

Every visual decision should reinforce:

- Identity before technology.
- Story before decoration.
- Clarity before visual effects.
- Simplicity before complexity.

### Tokens

Implement the design using reusable design tokens.

Avoid hardcoded values whenever practical.

### Requirements

Do not build:

- Hero
- Navigation
- About section
- Projects
- Contact section

Do not write portfolio content.

Do not introduce animation libraries or UI component libraries.

Focus only on the design language and reusable styling foundation.

### Output

When finished, provide:

1. The design decisions made.
2. Why each decision supports the Builder Journal vision.
3. Files created or modified.
4. Design tokens introduced.
5. Recommendations for implementing the first UI section.

Do not commit any changes.

## Why This Prompt Is Structured This Way

A consistent design system should exist before individual interface sections are built.

This ensures future implementation remains visually coherent and maintainable.

It follows the Builder Journal principle:

> Understanding before action.

## Follow-up Instruction

Sent after reviewing the first proposal, before the design system was accepted.

Your design rationale is strong, but I have a few open questions before I accept the design system.

Please refine the design system by addressing the following:

### 1. Motion Philosophy

Define the motion principles for Builder Journal.

Focus on:

- When motion should be used.
- When motion should be avoided.
- How motion supports readability and storytelling.
- Accessibility considerations.
- Examples of interactions that deserve animation.

The goal is for motion to communicate structure rather than decoration.

### 2. Component Philosophy

Define reusable design principles for the core interface elements.

Include guidance for:

- Buttons
- Links
- Cards
- Lists
- Quotes
- Callouts
- Forms
- Code snippets (if applicable)

Do not build the components.

Instead, define the principles each component should follow so future implementation remains consistent.

### 3. Margin Rail

Expand on the reasoning behind the margin rail.

Explain:

- Why it improves comprehension.
- What information belongs there.
- When it should disappear.
- Why it supports the Builder Journal experience beyond simply resembling a physical journal.

Focus on product reasoning rather than visual metaphor.

## Claude Code Output

Claude Code established a design system grounded in the Builder Journal vision rather than current portfolio trends. It introduced reusable design tokens for color, typography, spacing, layout, shadows, motion, and accessibility while documenting the reasoning behind each decision in `docs/design-system.md`.

The design system was validated through build verification, accessibility contrast testing, and token generation. Follow-up review expanded the motion philosophy, component philosophy, and margin rail rationale without introducing any portfolio sections.

No UI components or page sections were implemented.

## Review

### Accepted

- Design direction of "ink on paper with revisions in the margin."
- Design tokens for color, typography, spacing, layout, shadows, and motion.
- Accessibility-first approach with WCAG contrast validation.
- Self-hosted fonts to avoid third-party requests.
- Motion philosophy focused on communicating structure rather than decoration.
- Component philosophy defining behavior before appearance.
- Margin rail justified as a solution for separating orientation from narrative.
- Documenting design rationale in `docs/design-system.md` instead of CSS comments.

### Modified

- Nothing. The follow-up expanded the reasoning behind the design system rather than changing any of its decisions.

### Rejected

- Scroll-triggered reveal animations, because they delay requested content and conflict with the project's emphasis on clarity and readability.
- A monospace font as part of the primary typography system, because it emphasizes technology over identity.
- Building portfolio sections before the design language was fully established.

### Manual Verification

- [x] Design tokens are reusable.
- [x] Colors meet accessibility guidelines.
- [ ] Typography establishes a clear hierarchy — deferred until real content is implemented.
- [x] No portfolio sections were implemented.
- [x] No unnecessary dependencies were added.

## Lessons Learned

A design system is more than a collection of colors, fonts, and spacing values—it is a set of product decisions.

Every visual choice should solve a communication problem before it expresses a visual style. The strongest design decisions were those supported by clear reasoning, measurable accessibility, and alignment with the project's principles rather than current design trends.

## Reflection

If I wrote this prompt again, what would I change?

If I wrote this prompt again, I would ask Claude Code to explain the product reasoning behind major design decisions from the beginning instead of requesting it during the review.

That would make the initial proposal easier to evaluate and reduce the need for follow-up clarification.

## Related Commit

`define the visual design system for builder journal`