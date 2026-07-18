# Prompt Library

This folder documents every significant prompt used to build **Builder Journal** with Claude Code.

Its purpose is to demonstrate a structured and intentional AI-assisted development workflow. Rather than treating AI as an automatic code generator, each interaction is planned, reviewed, and evaluated before changes are accepted.

## Purpose

Each prompt captures:

- The goal of the task
- The context provided to Claude Code
- The exact prompt used
- Why the prompt was structured that way
- A summary of Claude Code's response
- What was accepted, modified, or rejected
- Lessons learned
- The related Git commit

## Workflow

For every significant AI-assisted task:

1. Define the objective.
2. Write and document the prompt.
3. Review Claude Code's output.
4. Verify the implementation manually.
5. Record decisions and lessons learned.
6. Commit the completed work with a meaningful commit message.

## Prompt Index

| #   | Prompt                         | Purpose                                                        | Status |
| --- | ------------------------------ | -------------------------------------------------------------- | ------ |
| 001 | Establish Technical Foundation | Scaffold the project and configure the development environment | ✅     |
| 002 | Define the Design System | Establish the visual language and reusable design tokens | ✅ |
| 003 | Build the Hero Experience      | Introduce the builder before the engineer through the hero     | ✅     |
| 004 | Build the Journey Narrative    | Tell the story behind the builder through a narrative journey  | ✅ |
| **005** | **[Edgebook AI Workstream](005-edgebook/README.md)** | Build and continuously document Edgebook AI across the portfolio, including the homepage, engineering case study, and supporting implementation records. | **In progress** |
| 006 | Update Portfolio Architecture | Establish the portfolio architecture for a dedicated Projects section, with Edgebook as the flagship project | Complete |
| 007 | Build Projects Section | Implement the flagship and program-work structure without placeholders or unsupported claims | In progress |

Additional prompts will be added as the project evolves.

Prompt 005 is a multi-part workstream. Its individual prompts (homepage, case study, and beyond) are tracked in its own [workstream index](005-edgebook/README.md) rather than as separate rows here.

## Guiding Principle

AI is a development partner—not the decision maker.

Every generated solution should be reviewed, questioned, and validated before it becomes part of the project.
