# Builder Journal — Product Specification

## Source of Truth

This specification defines what Builder Journal is and why it exists.

If implementation decisions conflict with this document, this specification takes precedence.

Every prompt sent to Claude Code should assume this document has already been read.

---

## Vision

Builder Journal is more than a portfolio.

Its purpose is to communicate who I am as a builder, how I think, and how I make engineering decisions.

The website should help visitors understand the person before the engineer.

The website should leave visitors understanding the person before the engineer.

---

# Problem

Most developer portfolios focus on technologies, project counts, and visual effects.

They answer:

- What did I build?
- What technologies do I know?

They rarely answer:

- Why do I build?
- How do I think?
- How do I make decisions?
- What kind of teammate would I be?

Builder Journal exists to answer those questions.

---

# Audience

## Primary Audience

- Hiring managers
- Product-focused engineering leaders
- Software engineers
- Technical recruiters

## Secondary Audience

- Developers interested in product thinking
- People interested in my work

---

# Success Criteria

### After 30 seconds

A visitor should understand:

- Who I am.
- Why I became an engineer.
- What kind of problems I enjoy solving.

### After exploring the portfolio

A visitor should understand:

- How I approach engineering decisions.
- How I think about products.
- How I learn from experience.
- Why I'd be a valuable teammate.

---

# Design Principles

The portfolio should prioritize:

1. Identity before projects.
2. Story before technology.
3. Clarity before decoration.
4. Simplicity before complexity.
5. Product thinking over feature lists.

Every design decision should reinforce these principles.

---

# Core Principles

Every section of the portfolio should reflect these ideas:

- Understanding before action.
- People before technology.
- Judgment over capability.
- Learning over ego.
- Every setback carries a lesson.

---

# Information Architecture

The homepage should follow this flow:

1. Hero
2. My Journey
3. Principles
4. Featured Project (Edgebook AI)
5. Selected Projects
6. About
7. Contact

Each section should naturally lead to the next.

---

# Hero Goals

The hero should answer:

- Who am I?
- Why do I build?
- What makes my journey meaningful?

Avoid generic engineering buzzwords.

---

# Project Presentation

Projects should not simply describe features.

Each project should explain:

- The problem
- The motivation
- The approach
- Important engineering decisions
- Tradeoffs
- Lessons learned
- Outcome

---

# Technical Requirements

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Requirements

- Responsive
- Accessible
- Semantic HTML
- Mobile-first
- Fast loading
- Clean component architecture

---

## Non-Negotiable Requirements

- Accessibility is required.
- Mobile-first.
- Semantic HTML.
- Keep the architecture simple.
- Every component must have a clear purpose.
- Avoid unnecessary abstractions.

---

## Decision-Making

When multiple solutions are possible, prefer the one that:

1. Improves clarity.
2. Improves maintainability.
3. Supports the user's understanding.
4. Introduces the least unnecessary complexity.

If a requested implementation conflicts with these principles, explain the tradeoffs before implementing it.

---

# AI Collaboration

Claude Code will be used as a development partner.

Every prompt sent to Claude Code will be documented.

Each documented prompt should include:

- Goal
- Context
- Prompt
- Outcome
- Review
- Lessons learned

AI suggestions should always be reviewed before acceptance.

The repository should demonstrate thoughtful collaboration with AI rather than blind acceptance.

---

## Implementation Success

Every implementation should:

- Match this specification.
- Be easy to understand.
- Be maintainable.
- Be tested manually.
- Avoid unnecessary complexity.

---

# Definition of Done

Builder Journal is complete when:

- Every section fulfills its intended purpose.
- The experience is responsive and accessible.
- The content reflects the project's core principles.
- The implementation aligns with this specification.
- Visitors leave understanding the builder before the technology.

---

# Out of Scope

This project is not intended to be:

- An animation showcase
- A technology badge collection
- A gallery of every project I've ever built
- A personal blog
- A resume copied into a website

---
