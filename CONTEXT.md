# Context

Glossary for matthijshakfoort.nl — the professional site of Matthijs Hakfoort, freelance software developer trading as Codecraft.

This file is a glossary and nothing else. Design and copy decisions live in [docs/design-brief.md](./docs/design-brief.md); architectural decisions live in [docs/adr/](./docs/adr/).

## Buyer

The person the site is written for: an engineering leader (CTO, VP Engineering, team lead) at a company that already has a development team, and who can sign a contract. Not an individual developer buying skill, and not a non-technical founder buying delivery. Every sentence on the site is addressed to the Buyer.

## The site's job

Availability is low, so the site is not a lead-generation funnel. Its job is to make the right rare opportunity recognise itself and reach out, and to let everyone else self-select away. This favours a page that is sharp and specific over one that is broad and welcoming.

## AI Enablement

The first pillar. Helping a company's existing engineers get better results from AI in their development work — tools, procedures and ideas. Sold as contractor work alongside the team, not as a training product. Addresses the three failure modes: [[Shared understanding]], [[AFK or human-in-the-loop]], [[Dual maintainability]].

## Fullstack Delivery

The second pillar. Fifteen-plus years of production web development, offered as hands-on contract work with a team. On the page it does double duty: it is a service in its own right, and it is the evidence that makes [[AI Enablement]] credible rather than opportunistic.

## Pillar hierarchy

AI Enablement leads; Fullstack Delivery follows and supports it. The page must make the Buyer understand within three seconds that AI Enablement is the headline offer.

## Engagement

How the work is sold: freelance contractor availability, short-term or long-term, rather than named fixed-shape packages (no "one-day workshop", no "two-week audit"). The site states capabilities and availability; the shape of the work is agreed per client.

## Shared understanding

The state in which a developer and an AI agent are working from the same picture of the codebase, the intent, and the constraints. Most teams never deliberately establish it; they prompt and hope. Reaching it on purpose is the first of the three failure modes.

On the page this is labelled *getting the agent to understand*.

## AFK or human-in-the-loop

Judging which work an agent can be left alone with and which needs a person watching. Both mistakes cost: an unattended agent can take a wrong turn in the first five minutes and spend two hours building on it, while a developer who approves every tool call on a task the agent would have got right in one pass has spent an hour watching. The second failure mode. Getting the judgement right depends on the environment the agent is given and the brief it starts from, not on supervising harder.

This replaces the earlier **Over-reach** — an agent doing more than it was asked. Over-reach is one way an unattended run goes wrong, not the whole failure mode; the term is retired and the page no longer uses it.

On the page this is labelled *AFK or Human-in-the-loop?*.

## Dual maintainability

Code that stays maintainable by both people and agents. AI-generated code can pass review and still leave a codebase that neither a human nor the next agent can work in safely — and it runs the other way too: a convention the agent invented is one a person can break without ever knowing it was there. The third failure mode. The answer is feedback loops tight enough that conventions get written down as they are found.

On the page this is labelled *Maintainability for humans and agents*.

## Point of view

The section carrying the site's authority, in place of testimonials or client logos: the three failure modes above, stated as short falsifiable claims and backed by concrete practice detail. It is the one part of the page a generic freelancer cannot copy. Its content comes from Matthijs, never invented.

## Codecraft

The primary visible mark on the site: the trading name, shown ahead of the person. Matthijs Hakfoort appears as the person behind it, secondary. Matches the `codecraft@` contact address. The mark is a company; the prose is always a person — the page says "I", never "we".
