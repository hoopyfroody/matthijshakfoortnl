# Context

Glossary for matthijshakfoort.nl — the professional site of Matthijs Hakfoort, freelance software developer trading as Codecraft.

This file is a glossary and nothing else. Positioning, design and copy decisions live in [docs/positioning.md](./docs/positioning.md), which supersedes [docs/design-brief.md](./docs/design-brief.md) where they disagree; architectural decisions live in [docs/adr/](./docs/adr/).

## Product Engineer

The role that remains when agents write the code: find out from users and customers what software or workflow is actually needed, write the spec, write the gates and evals that define "good", review behaviour before code, and decide which parts of the code still need a human review. In short, the work agents cannot (yet) do. Used in Laurie Voss's sense, not in the startup sense of an engineer who owns product decisions but still writes most of the code, and not in the Dutch industrial sense of a mechanical engineer.

Many Buyers have not met the idea yet, so the site has to explain it, not just name it. The Dutch page bridges it to roles Dutch Buyers know: a senior developer who also does the product owner and informatieanalist work, while agents write the code. Forward deployed engineer, agent orchestrator and similar titles are not used on the site.

## Buyer

The person the site is written for: an engineering or IT leader (CTO, VP Engineering, IT manager, team lead) at a company that has in-house software or IT people, and who can sign a contract. Not an individual developer buying skill, not a non-technical founder buying delivery, and not an operations manager buying an automation directly. [[Process Support]] is pitched to the Buyer as work their own people lack the capacity for. Every sentence on the site is addressed to the Buyer.

Widened 2026-10-25 from "engineering leader at a company with a development team" to include IT managers, so that Process Support has someone to address without adding a second Buyer.

## The site's job

To bring in a few high-quality leads. Availability has grown, so the site may now generate leads, but quality beats volume: it still makes the right opportunity recognise itself and lets everyone else self-select away. This favours a page that is sharp and specific over one that is broad and welcoming.

Revised 2026-10-25. It was "not a lead-generation funnel" while availability was low.

## Process Support

Software that automates part of a client's business process, which used to cost too much or take too long to build. It pays back now because agents write most of the code, while Matthijs does the work around it: finding out what the process needs, the spec, the checks. Some of it also uses an LLM inside the product for the limited judgement and text comprehension LLMs are good at, but that is the smaller part. The main point is software built with AI, not AI built into software.

It covers a client's business processes and also the internal processes of a team, for example a system that checks the patch notes developers write and compiles them into a release list. The line with [[Developer Tooling]]: tooling for the AI coding process itself is Developer Tooling; support for any other way the team or company works is Process Support.

One of the two kinds of work Matthijs delivers when hired as a [[Product Engineer]]. The other is [[Developer Tooling]]. By default the client's own people own the software after handover; running it on a retainer is an option.

## Deterministic first

The design principle for [[Process Support]] that uses an LLM: plain code does everything plain code can do, and the model only gets the part that needs judgement or text comprehension. This keeps the model away from the work it is bad or flaky at. On the page: "Plain code does everything plain code can do. The model only gets the part that needs judgement."

## Developer Tooling

Tooling for the AI coding process: the tools that let a team spend its time on product engineering instead of programming. Automated reviews, quality gates, monitoring, skills, workflows, deployments. Always team-specific; generic products are bought, not built. Part of the work is the decision between a bought tool and an in-house one, and in-house is viable in many more cases than before because agents make tools cheap to build.

The second kind of work Matthijs delivers when hired as a [[Product Engineer]]. It is also how the role keeps working in a team after Matthijs leaves.

## Case sketch

A short, anonymised description of real past work: sector, problem, what was built, result. No client names, no logos, no testimonials. Allowed since 2026-10-25, because buyers of delivered software want to see examples; before that the site had no case material of any kind.

## AI Enablement

Retired 2026-10-25. Was the first pillar: helping a company's existing engineers get better results from AI in their development work. Its content, including the three failure modes ([[Shared understanding]], [[AFK or human-in-the-loop]], [[Dual maintainability]]), still holds and is kept as background material for the new pillars.

## Fullstack Delivery

Retired 2026-10-25. Was the second pillar: fifteen-plus years of production web development as contract work. It survives as evidence of experience, not as an offer.

## Pillar hierarchy

Three pillars, in this order:

1. [[Hands-on Product Engineering]]. Comes first because embedding a freelancer is the easiest first step for a Buyer.
2. [[Forming Product Engineers]]. Follows from the first, because leading by example happens while doing the job.
3. [[Educating Juniors]]. Comes last as the forward look and the most contrarian claim.

On the page the three read as a sequence — me, your team, your next hires — with the headings *I do the work*, *Your team does the work* and *Educating Juniors*.

All three rest on the [[Point of view]]. Settled 2026-10-25; replaces AI Enablement leading Fullstack Delivery.

## Hands-on Product Engineering

The first pillar. Matthijs works in the client's team as its [[Product Engineer]] and delivers [[Process Support]] and [[Developer Tooling]]. Includes the build-or-buy judgement for each tool. On the page: *I do the work*.

## Forming Product Engineers

The second pillar. Training, coaching and leading by example, so that the team's own people grow into [[Product Engineer]]s. The three failure modes ([[Shared understanding]], [[AFK or human-in-the-loop]], [[Dual maintainability]]) are its supporting material. On the page: *Your team does the work*.

## Educating Juniors

The third pillar. Juniors in an agentic team should not start with writing code from strictly defined tickets or with code review, because that trains them for the work agents already do. They start with user and customer contact, writing specs, choosing test seams and judging blast radius: the same work a senior [[Product Engineer]] does. They read and run code from day one, through the spec they wrote and the tests that check it, so that they become good at spotting problems in code without having to be good at writing it. Hand-coding skills for critical parts come later.

The offer: train juniors directly, shape the team environment so this way of working makes sense, and help with hiring juniors who are likely to do well in it. It addresses two Buyer pains, in this order: "I stopped hiring juniors; where do my seniors come from in five years?" and "I have juniors and nothing useful to give them now that agents do the tickets."

## Engagement

How the work is sold: freelance contractor availability, short-term or long-term, rather than named fixed-shape packages (no "one-day workshop", no "two-week audit"). The site states capabilities and availability; the shape of the work is agreed per client. The typical shape is one or two days a week over several months. Each pillar gives one example engagement in that shape so the Buyer can picture the work without being sold a product.

## Shared understanding

The state in which a developer and an AI agent are working from the same picture of the codebase, the intent, and the constraints. Most teams never deliberately establish it; they prompt and hope. Reaching it on purpose is the first of the three failure modes.

Widened 2026-10-25 to the whole chain user → spec → agent. The agent cannot understand what the developer never found out from the user; when that first link fails, the team builds the wrong thing faster.

On the page this is labelled *getting the agent to understand*.

## AFK or human-in-the-loop

Judging which work an agent can be left alone with and which needs a person watching. Both mistakes cost: an unattended agent can take a wrong turn in the first five minutes and spend two hours building on it, while a developer who approves every tool call on a task the agent would have got right in one pass has spent an hour watching. The second failure mode. Getting the judgement right depends on the environment the agent is given and the brief it starts from, not on supervising harder.

Widened 2026-10-25 to cover review after the run as well: deciding which code a human reads, by blast radius, instead of reviewing everything or reviewing nothing.

This replaces the earlier **Over-reach** — an agent doing more than it was asked. Over-reach is one way an unattended run goes wrong, not the whole failure mode; the term is retired and the page no longer uses it.

On the page this is labelled *AFK or Human-in-the-loop?*.

## Dual maintainability

Code that stays maintainable by both people and agents. AI-generated code can pass review and still leave a codebase that neither a human nor the next agent can work in safely — and it runs the other way too: a convention the agent invented is one a person can break without ever knowing it was there. The third failure mode. The answer is feedback loops tight enough that conventions get written down as they are found.

On the page this is labelled *Maintainability for humans and agents*.

## Point of view

The section carrying the site's authority: the explanation of what a [[Product Engineer]] does and why agents make the role necessary — agents write the code, and this is the work that is left. It comes directly after the hero, before the pillars, because all three pillars rest on it. It is the one part of the site a generic freelancer cannot copy. Its content comes from Matthijs, never invented. [[Case sketch]]es support it; they do not replace it.

Revised 2026-10-25. It was the three failure modes ([[Shared understanding]], [[AFK or human-in-the-loop]], [[Dual maintainability]]); those now support the second pillar.

## Codecraft

The primary visible mark on the site: the trading name, shown ahead of the person. Matthijs Hakfoort appears as the person behind it, secondary. Matches the `codecraft@` contact address. The mark is a company; the prose is always a person — the page says "I", never "we".
