# 006 — Portfolio Architecture Update

## Context

The portfolio architecture has evolved since Prompt 001.

Originally, Edgebook AI existed as its own standalone homepage section because it was the only significant project.

That is no longer the desired structure.

The homepage now introduces a dedicated **Projects** section.

Edgebook AI remains the flagship project, but it now lives inside that section alongside a second category for AI-Native program coursework.

This is an architectural reorganization, not a content rewrite.

## Decisions

- Create a top-level `Projects` section.
- Move the existing Edgebook feature into the new section.
- Edgebook remains the flagship and visually dominates the section.
- Coursework appears beneath it as a lightweight list.
- Coursework begins with zero projects.
- No placeholder cards.
- No "coming soon."
- The empty state must be truthful and disappear automatically once projects exist.

## Constraints

This change must preserve existing work wherever practical.

Prefer moving and reusing components over rebuilding them.

Do not change Edgebook's messaging, manuscript, diagrams, or case study.

Only reorganize the homepage architecture to accommodate future coursework.

## Next

Prompt 007 contains the complete implementation specification for the new Projects section.

This document exists only to establish the architectural change before implementation.