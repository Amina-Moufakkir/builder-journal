# Edgebook AI — Case Study Manuscript

<!--
This file holds the approved editorial source for the Edgebook AI case study.

It is the canonical content for prompt 002
(docs/prompts/005-edgebook/002-build-edgebook-case-study.md):
  - This file governs WHAT the case study says.
  - Prompt 002 governs HOW the page is built (Builder Journal's design system, patterns, truthfulness).

Each revision is versioned by git as Edgebook AI progresses, so every committed
state of the case-study page has its editorial source on record.

Paste the approved manuscript below this comment.
-->

# Edgebook AI

**Case study · In development**

Traders can already record what happened. Edgebook is being built to help them understand **why their decisions worked** — and why they didn't.

| | |
|---|---|
| **Role** | Product & engineering — Amina |
| **Stage** | Active development |
| **Updated** | This page tracks the build |

> **A note on honesty.** Edgebook is not finished. This case study marks what is implemented, what is designed, what is planned, and what is still unresolved. Sections without verified research say so rather than filling the gap.

**Status labels used throughout:** `Implemented` · `Designed` · `Planned` · `Needs validation`

---

## 01 — Overview

*What it is, who it's for, and what it promises.*

Edgebook AI is a trading journal being built into a coaching platform. It takes a trader's own records and their own reasoning, turns them into structured evidence, and uses AI to help the trader interrogate their process — not to tell them what the market will do.

It's for the trader who has been journaling for months, has a spreadsheet full of outcomes, and still cannot answer a simple question: **which of my decisions are actually working?**

> **The promise**
>
> Every piece of feedback Edgebook gives you can be traced back to something you recorded and something you said.

---

## 02 — The problem

*Recording results is not the same as learning from them.*

A trading journal answers "what happened." It rarely answers "why." A trader can log two hundred trades, chart their equity curve, and still have no mechanism for separating a good decision that lost from a bad decision that won.

Outcome is noisy. Process is the signal. But process lives in a trader's head — in the reason they widened a stop, in the mood they were in on trade three, in the rule they told themselves they'd follow. Journals don't capture that, and when they do, nothing connects it back to the record.

So traders repeat mistakes with confidence, and abandon good habits after a losing streak. The feedback loop is broken in the middle.

---

## 03 — Why I'm building this

*Personal motivation, kept short.*

I kept a journal. I was disciplined about it. I logged entries, exits, screenshots, and a line or two about what I was thinking.

After a bad month I went back through it looking for the lesson, and realized I couldn't find one. I had a record of **results** and a scattering of **feelings**, and no way to put them next to each other. My worst habit — moving stops when a position felt uncomfortable — had been visible in my own data the whole time. I just had no tool that would put it in front of me.

I didn't want a tool that would tell me what to trade. I wanted the thing a good coach does: show you the tape, ask the question you've been avoiding, and let you answer it yourself.

---

## 04 — Product principles

*These are constraints, not aspirations. Each one rules something out.*

**AI as coach, not guru**
It asks questions and surfaces evidence. It does not issue verdicts, and it does not know better than you.

**Process before outcome**
A losing trade that followed the plan is a success worth reinforcing. The product must be able to say that.

**Structure and psychology are separate**
A bad setup and a good setup traded badly are different failures. Collapsing them hides the lesson.

**Evidence before interpretation**
No feedback is generated without citable facts behind it. If the evidence is thin, the product stays quiet.

**No market prediction**
Edgebook never forecasts price. The moment it does, it becomes a signal service and the trust is gone.

**No replacement of trader judgment**
The trader decides. The product's job is to make that decision better informed, not to make it for them.

---

## 05 — Research and discovery

*Only what has actually been done. The gaps are marked as gaps.*

### What's known

1. **Personal journaling experience** across an extended period, reviewed retrospectively. The stop-widening pattern was found in my own records — this is the origin of the product thesis.

2. **Review of existing journaling tools.** The consistent shape: strong on statistics, weak on reasoning. Almost all treat the trader's note as a free-text field with no relationship to the data beside it.

3. **Established trading-psychology literature** on outcome bias and process discipline. This is where "process before outcome" comes from — it's not an original finding, and I'm not claiming it as one.

### What still needs validation `Needs validation`

- **Does the pattern generalize?** My stop-widening habit is one trader's data. No interviews have been conducted. No cohort has been studied.
- **Will traders write honest reflections?** The entire model depends on it. Untested.
- **How much data before feedback is trustworthy?** Ten trades? Fifty? There is currently no defensible threshold, and shipping one that's too low would make the coach confidently wrong.
- **Does coaching change behavior?** Being shown a pattern and acting on it are different things. Unproven.

> Earlier drafts of this case study carried interview counts, broker audit figures, and adoption statistics. None of it was verifiable, so none of it is here.

---

## 06 — How reflection changed the product

*The most important shift so far.*

Edgebook started as a better tracker. Cleaner input, better charts, nicer tagging. I built toward that for a while.

> ### Decision shift
>
> ~~Generic trade tracker~~ → **AI coaching platform**
>
> **What caused it:** Reviewing my own journal and finding the lesson was already in the data — I just had no mechanism that would confront me with it.
>
> The realization was that better statistics wouldn't have helped me. I already had the statistics. What I lacked was something that would put my **note** next to my **record** and ask why they disagreed.
>
> That reframed everything downstream. The reflection stopped being a nice-to-have text field and became a first-class data type. The architecture had to guarantee that facts stayed clean enough for a model to reason over safely. And AI stopped being a feature I might add and became the only thing that could close the loop.

This is the only major documented pivot to date. As further shifts happen, they'll be recorded here in the same format.

---

## 07 — System architecture

*The hierarchy is the product decision. Everything else follows from it.*

**Status:** the two lower layers — verified facts and deterministic calculations — are `Implemented`. Analytics and the AI-interpretation layer beneath the trust boundary are `Designed` and `Planned` (see §09). The boundary itself is an architectural rule, enforced as each layer is built — not a running system today.

The architecture exists to answer one question: how do you let a language model near a trader's money-adjacent data without it inventing things?

The answer is ordering, and a hard boundary.

```
  Verified facts
  Trade records, timestamps, prices, size, outcome
  Immutable once written. Source of truth.
        │
        ▼
  Deterministic calculations
  P&L, R-multiple, exposure, win rate, expectancy
  Pure functions. Same input, same output, always.
        │
        ▼
  Analytics
  Aggregations, distributions, groupings, comparisons
  Derived, reproducible, explainable without a model.

╌╌╌╌╌╌╌╌╌╌╌╌ TRUST BOUNDARY — SERVER ╌╌╌╌╌╌╌╌╌╌╌╌
             nothing below writes above

  AI interpretation
  Coaching language, pattern narration, questions back
  Reads evidence. Cannot write facts. Cannot compute.
```

Each layer can only read from the one above it. The AI layer sits at the bottom by design — it consumes evidence that has already been established and computed. It has no path to write a fact, recompute a number, or reach the market.

This means a hallucination has a bounded blast radius. The model can phrase an insight badly or draw a weak conclusion, and a trader can disagree with it. What it cannot do is tell you that you made money when you didn't.

The server owns every fact and every calculation. The model receives a read-only view of already-computed evidence. If the model is wrong, it is wrong about **interpretation** — never about what happened.

---

## 08 — Record vs. reflection

*One distinction, stated once.*

**Status:** the record side is `Implemented`; structured reflection is `Designed`, not yet captured (see §09). The distinction below is the model the product is built around — stated as the target it is built toward.

Edgebook holds two kinds of data, and never confuses them. This is the foundation the rest of the product sits on.

| Record — what happened | Reflection — what the trader believes |
|---|---|
| Entry at 09:47, 1.2 lots, EURUSD | "Setup matched my plan" |
| Stop 20 pips, target 60 pips | "I moved the stop because it felt heavy" |
| Exited at 10:14 for −0.6R | "I was already annoyed from trade two" |
| Third trade that session | "I'd take it again" |
| **Objective. Verifiable. Not up for debate.** | **Subjective. Valuable. Sometimes wrong — and that gap is the product.** |

The record is what the market and the broker say. The reflection is what the trader says. Both are stored, neither is edited to match the other, and the space between them is where coaching happens.

---

## 09 — Product experience

*What actually exists right now, labeled honestly.*

Rather than fill this section with dashboard screenshots, here is the one screen that carries the whole idea. If this screen doesn't work, nothing else matters.

### Trade review — record, reflection, and coach in one view `Designed`

```
┌──────────────────────────────────────────────────────────┐
│  EURUSD · 12 Mar · 09:47                        −0.6R    │
│  Trade 3 of 4 · session review              planned +3.0R│
├──────────────────────────────────────────────────────────┤
│  RECORDED                    │  YOUR NOTE                │
│  Planned stop      20 pips   │  "Setup was clean. Price  │
│  Actual stop       32 pips   │   got heavy so I gave it  │
│  Hold time         27 min    │   room. Would take it     │
│  Rule adherence    2 of 4    │   again."                 │
├──────────────────────────────────────────────────────────┤
│  ● COACH                                                 │
│  You've widened a stop on 6 of your last 9 losing        │
│  trades, and on 0 of your winners. Your note says you'd  │
│  take it again — would you take it again with the        │
│  20-pip stop you planned?                                │
│                                                          │
│  [ Yes — plan was right ] [ No — I broke the rule ]      │
│  [ Not sure yet ]                                        │
│                                                          │
│  evidence: 9 trades · stop_delta · rule_adherence        │
│  — no price prediction                                   │
└──────────────────────────────────────────────────────────┘
```

The screen puts the recorded facts and the trader's own note side by side, then lets the coach point at the gap. The coach's question is generated from cited evidence — the trade count, the stop delta, the rule adherence — and every response option hands the judgment back to the trader.

### Build status

| Status | Feature | Note |
|---|---|---|
| `Implemented` | Trade record capture & storage | Facts written once, immutable thereafter. |
| `Implemented` | Deterministic metrics engine | P&L, R-multiple, expectancy — pure, tested, no model involved. |
| `Designed` | Reflection capture as structured data | Not a free-text box. Typed fields that can be reasoned over. |
| `Designed` | Trade review screen | The screen above. Interaction model settled, build pending. |
| `Planned` | Evidence-cited coaching responses | Blocked on the confidence-threshold question in section 05. |
| `Planned` | Weekly coaching session | Depends on pattern recognition landing first. |

---

## 10 — Important decisions

*Each one cost something. The tradeoff column is the honest part.*

### AI has no write access

**Problem** — A language model with write access to trading records could corrupt the trader's source of truth — and they'd have no way to know.

**Approach** — AI is strictly downstream of the trust boundary. It reads computed evidence and returns language. It cannot write facts or perform calculations.

**Reason** — A trader who cannot trust their own numbers has nothing. Trust in the record has to be absolute before interpretation is worth anything.

**Tradeoff** — The coach can only discuss what the deterministic layer already computes. New kinds of insight require engineering work first — the model can't reach for data on its own.

### Reflection is structured, not free text

**Problem** — Reflections are subjective and messy. The easy path is a free-text field, which is unstructured and hard to reason over.

**Approach** — Reflection is typed and structured — separate dimensions for setup quality, rule adherence, and emotional state, alongside free text.

**Reason** — If reflection is structured, it can be compared against the record programmatically. The gap becomes computable rather than requiring a model to read prose and guess.

**Tradeoff** — More friction at entry. Traders may abandon journaling if logging feels like paperwork. This is a real risk and it isn't resolved — see section 11.

### Feedback requires an evidence threshold

**Problem** — AI coaching that speaks with false confidence on thin data is worse than no coaching. It teaches the wrong lesson convincingly.

**Approach** — Feedback requires an evidence threshold. Below it, the product says it doesn't know yet rather than generating something plausible.

**Reason** — One confidently wrong insight destroys trust permanently. Silence is recoverable; being wrong isn't.

**Tradeoff** — Early users get a quiet product. The first weeks are less impressive, and the threshold value itself is still unvalidated.

### Market prediction is architecturally excluded

**Problem** — Every competitor eventually adds signals or predictions — it's what users ask for and it's what sells.

**Approach** — Market prediction is architecturally excluded, not just declined. The model has no market data access at all.

**Reason** — A coach that also predicts becomes a guru. The trader stops interrogating their own process and starts outsourcing it, which is the exact failure the product exists to fix.

**Tradeoff** — Loses the segment that wants signals. Harder to sell. This narrows the market on purpose.

---

## 11 — Challenges and open questions

*Things I don't have answers to yet.*

**The honesty problem**
The product depends on traders writing truthfully about their own mistakes — in a domain where ego is expensive. If reflections become performance, the coach reasons over fiction. I don't have a design solution for this yet.

**Friction vs. structure**
Structured reflection makes coaching possible and makes logging tedious. Every field I add improves the analysis and increases the chance the trader quits. I don't know where the line is.

**The confidence threshold**
How many trades before a pattern is real and not noise? Too low and the coach is confidently wrong. Too high and the product is silent for months. Currently unresolved.

**Coaching that lands**
There's a narrow band between a question that provokes reflection and one that feels like an accusation. Getting a model to sit in that band consistently is unproven.

**Sample size of one**
The core insight comes from my own journal. It's a strong hypothesis, not a validated finding, and I'm aware of the risk of building a product that only solves my problem.

---

## 12 — Deliberate non-goals

*What Edgebook will not do, on purpose.*

**× Predict the market**
No signals, no forecasts, no entries. The model has no market data. This is enforced by architecture, not policy.

**× Replace trader judgment**
The coach never says take this or skip that. It shows you your own evidence and asks. The decision stays yours.

**× Auto-trade or copy-trade**
Execution is out of scope permanently. The moment the product touches an order, its incentives stop being aligned with the trader's learning.

**× Gamify discipline**
No streaks, no badges for logging. Rewarding the appearance of process corrupts the data the product depends on.

---

## 13 — What's changed my thinking

*Specific to this project, not general advice about software.*

**I was building the wrong half.**
I spent real time on cleaner input and better charts. None of it addressed why I was journaling in the first place. The data was never the bottleneck — the confrontation was.

**Constraining AI made it more useful, not less.**
My instinct was to give the model more access and more freedom. Locking it behind a trust boundary with read-only evidence made its output something a trader could actually rely on. The constraint is the feature.

**Subjective data isn't second-class.**
I first treated the trader's note as decoration around the real data. It's the opposite: the note is the only place intent lives, and intent is what you're trying to improve. The numbers are just what happened afterward.

**Deleting unverifiable claims was harder than writing them.**
An earlier version of this case study had confident numbers in it. Removing them left obvious gaps. Keeping them would have made a product about honest self-assessment start with a lie.

---

## 14 — Roadmap

*The evolution from journal to coach. Nothing here is a promise.*

| Status | Theme | Detail |
|---|---|---|
| `Implemented` | **Trustworthy record** | Immutable trade facts and a deterministic metrics engine. The foundation everything else reads from. |
| `Designed` | **Structured trade review** | Record and reflection captured as separate, typed dimensions, presented together. |
| `Planned` | **Evidence-based AI feedback** | Coaching responses that cite the specific trades and metrics behind them. Gated on the confidence-threshold question. |
| `Planned` | **Pattern recognition** | Recurring gaps between stated plan and actual behavior, surfaced across trades rather than within one. |
| `Planned` | **Planned vs. actual comparison** | Systematic measurement of where execution drifts from intent — the stop-widening case, generalized. |
| `Planned` | **Weekly coaching** | A periodic session over the week's evidence. Depends on pattern recognition landing first. |
| `Planned` | **Simulation** | Replaying decisions against the trader's own stated rules. Exploratory — furthest from committed. |

Items move up this list as they're built. Items that don't survive contact with the open questions in section 11 will be removed rather than quietly left here.

---

## 15 — Why AI becomes useful here

*The consequence of everything above — not a feature bolted on.*

AI is not what makes Edgebook interesting. What makes it interesting is that by the time the model is called, the hard problems are already solved.

```
    Trustworthy facts            — immutable, server-owned
  + Deterministic analytics      — reproducible, explainable
  + The trader's own reasoning   — structured, first-class
  ─────────────────────────────────────────────────────────
  = Evidence AI can interpret responsibly
```

The model isn't asked to know anything about markets, or to be correct about the future, or to be trusted with the truth. It's asked to do the one thing it's genuinely good at: read a body of established evidence and a person's own words, notice where they disagree, and put that into a question worth answering.

Every earlier decision — the trust boundary, the deterministic layer, typed reflections, the refusal to predict — exists to make that final step safe. Remove any of them and the AI becomes what I'm trying not to build: **something confident, unaccountable, and pointed at the market instead of at the trader.**

---

*Edgebook AI is in active development. This document is updated as the build progresses.*
