# Edgebook AI Workstream

This folder contains the implementation prompts for **Edgebook AI**, the flagship project featured in Builder Journal.

Unlike the earlier prompts in this repository, which focused on building the portfolio itself, this workstream documents how a single product is introduced, explained, and refined within the portfolio.

The goal is not simply to build pages.

The goal is to tell a truthful engineering story.

This README is the **workstream index**: the master prompt library at `../README.md` carries Edgebook AI as a single entry (`005`), and the individual prompts below are tracked here.

---

## Purpose

Edgebook AI represents the strongest example of how product thinking, engineering judgment, system design, and responsible AI come together in my work.

Every prompt in this folder should strengthen that story.

Each prompt represents **one meaningful product milestone**, not an arbitrary coding task.

Together they should create a clear narrative that visitors experience naturally as they move through Builder Journal.

---

## Execution Order

Prompts should normally be completed in order.

| Prompt | Purpose | Status |
|---------|---------|--------|
| 001 | Introduce Edgebook AI on the homepage as the flagship project. | Complete |
| 002 | Build the dedicated Edgebook AI case study. | Planned |
| 003 | Reserved | — |
| 004 | Reserved | — |

Status is one of **Planned**, **In Progress**, or **Complete**. A `—` marks a reserved slot whose milestone has not yet been defined.

Future prompts should extend the product naturally rather than expanding existing prompts indefinitely.

---

## Working Philosophy

Every prompt in this folder should represent **one clear story**.

Good examples:

- Introduce the flagship project.
- Build the case study.
- Visualize the architecture.
- Build the simulator experience.

Poor examples:

- Homepage + case study + animations + roadmap + product redesign.

Prompts should stay focused enough that the implementation can reasonably become a single feature commit.

---

## Source of Truth

When information conflicts, use this priority:

1. Repository documentation
2. Project documentation
3. Current prompt
4. External reference material

External references exist only to inspire design thinking.

They never replace the repository as the source of truth.

---

## Truthfulness

Builder Journal documents real engineering work.

Never fabricate:

- screenshots
- research
- interviews
- metrics
- product maturity
- implementation status
- technical decisions
- architecture
- roadmap commitments

Always distinguish between work that is:

- Implemented
- Designed
- Planned
- Exploratory

If something has not yet been built, present it honestly.

---

## Design Philosophy

Edgebook AI should feel like a natural continuation of Builder Journal.

Reuse existing:

- design tokens
- typography
- spacing
- components
- motion language
- accessibility patterns

Do not create a competing visual identity.

The portfolio should feel like one cohesive editorial experience.

---

## Product Philosophy

Edgebook AI is an AI coaching platform.

It is not a prediction engine.

Its purpose is to help traders improve the quality of their decisions.

Core principles include:

- AI is a coach, not a guru.
- Process is evaluated separately from outcome.
- Structure and psychology are independent dimensions.
- Human judgment remains final.
- AI interpretation is always downstream from verified facts and deterministic calculations.

These principles should remain consistent throughout every implementation.

---

## Prompt Structure

Implementation prompts in this workstream share a common foundation:

1. Goal
2. Context
3. Design Intent
4. Repository Review
5. Requirements
6. Editorial Guidance
7. Technical Constraints
8. Output
9. Definition of Done

This is a **common foundation, not a rigid template**. A prompt may add, merge, reorder, or rename sections when the milestone calls for it — `001`, for example, expands *Requirements* into dedicated *Required Content*, *Product Visual*, and *Project Status* sections. What matters is that each prompt communicates intent clearly, not that it matches this outline section for section.

Prompts should describe **what success looks like**, not prescribe unnecessary implementation details.

---

## Design Intent Before Code

Before writing code, Claude should first demonstrate understanding.

Every implementation prompt should begin by summarizing:

- the feature's purpose
- the visitor's journey
- existing repository patterns to reuse
- verified content
- assumptions
- potential risks

Understanding should come before implementation.

---

## External References

Some prompts may be accompanied by temporary reference material.

Reference material may help communicate:

- visual rhythm
- information hierarchy
- editorial pacing
- interaction patterns

Reference material should never determine:

- implementation
- architecture
- product truth
- design system
- repository structure

After reviewing a reference, Claude should discard it and continue using only the repository and the current prompt.

---

## Definition of Success

This work-stream is successful when Edgebook AI becomes the strongest demonstration of my engineering process—not because it is the largest project, but because it best communicates how I think, make decisions, and build products.

Every prompt should make that story clearer.
