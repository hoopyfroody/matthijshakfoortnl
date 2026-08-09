# Design brief — matthijshakfoort.nl redesign

Settled in a grilling session on 2026-08-08. Vocabulary is defined in [CONTEXT.md](../CONTEXT.md); terms in bold below are defined there. This brief is the input for implementation, which happens in a later session.

## What the page is

A single page, English at `/`, Dutch at `/nl/` later. It leads with **AI Enablement** and supports it with **Fullstack Delivery**. It is addressed to the **Buyer** and it filters rather than sells — see *the site's job* in CONTEXT.md.

There are no testimonials, no client names, no logos and no case studies. Authority rests entirely on the **Point of view**: the three named failure modes and one concrete background line. This is a deliberate choice and the reason the copy has to stay specific — a generic version of this page is indistinguishable from any other freelancer's.

## Copy

**Voice.** Plain first person with a little edge. Short declarative sentences, concrete nouns, no adjectives doing sales work. Not the measured-professional register of the current site; not blunt-provocateur either.

**Headline.** Diagnosis-led, not service-led. Working text:

> Most teams use AI blindly.
>
> I help them stop — shared understanding with the agent, limits on what it touches, code that stays maintainable by people and machines.

**Three problems.** Each gets a block: the failure in a sentence or two, then what Matthijs does about it. On-page labels are plain, not framework-branded:

1. Getting the agent to understand — **Shared understanding**
2. AFK or Human-in-the-loop? — **AFK or human-in-the-loop**
3. Maintainability for humans and agents — **Dual maintainability**

Revised 2026-08-09, while the copy was being written. The second mode was
**Over-reach**, labelled *keeping it in its lane*. Over-reach turned out to be one
way an unattended run goes wrong rather than the whole failure, so the mode is now
the judgement of which work an agent can be left alone with — both mistakes cost,
the two-hour wrong turn and the hour spent approving a task the agent would have
got right in one pass. The third keeps its term; its label is shorter and its
scope now includes a person breaking a convention the agent invented.

**Capability groups.** Two labelled groups, four items each. No specific tool or model names anywhere on the page — they date it. As shipped:

*Training and coaching on using AI agents effectively* — how to establish a shared understanding between developer and agent; how to avoid an agent doing unintended (or dangerous) things; how to get humans and agents working together, doing what each is best at; how to set up effective AI development workflows in practice.

*Fullstack engineering* — TypeScript and Node.js across the stack; frontends in all major frameworks; infrastructure as code and DevOps practices; architecture and technical direction for agile teams.

Mentoring and coaching is not a standalone bullet; it is the frame of the whole AI group, which is why that group's heading names it.

Revised 2026-08-09. The drafts here carried five items each to be cut to four during implementation. What happened instead was a rewrite: the AI bullets became "how to" phrasings and the group took a heading naming training and coaching, which is what makes the mentoring requirement legible. Build and release automation dropped out of the engineering group; the background line carries it instead.

**Background.** Corroboration, placed after the claims rather than as a CV up front. Publishable facts: 15+ years; TypeScript, Node.js, React, build automation, infrastructure as code; agriculture, logistics, e-commerce, consultancy; small, agile, motivated teams. Two or three of these, as prose — "15 years, mostly TypeScript, mostly in teams of 5–15" is evidence where "15 years" alone is a claim.

**Not on the page.** No availability line or date (availability is low and a stale date does damage), no booking link, no testimonials, no GitHub link.

## Structure

Hero → three problems → two capability groups → background → contact.

Diagnosis before catalogue: the problems earn the right to the service list.

## Contact and footer

Email `codecraft@matthijshakfoort.nl` and LinkedIn. Trading name Codecraft and KvK 42120215. No GitHub.

A photo sits low on the page, in the contact block.

Revised 2026-08-09. KvK moved out of the footer and in with the contact details, where someone checking the business before a contract conversation looks for it; the footer keeps Codecraft as the closing mark. The photo slot did its job — it shipped as a neutral placeholder at 4:5, and the real file dropped into the same box without moving anything. The photograph is not monochrome, so it is desaturated in CSS to hold the palette.

## Visual direction

Type-led. Drop the current bordered frame. Large editorial headline, generous whitespace, monospace for labels, section markers and the background line — the mono is what carries the technical edge, so it should do real work rather than decorate.

Strictly monochrome: warm off-white on near-black, no toggle, no accent colour.

Revised 2026-08-09. The palette was originally near-black on warm off-white, inverted under `prefers-color-scheme: dark`. It is now dark in every environment: the page is dark by design rather than in sympathy with the visitor's OS, and one palette is one thing to keep legible instead of two. `color-scheme: dark` is declared so the browser's own UI matches.

System font stacks only — a system sans for prose, `ui-monospace` for labels. No webfonts, no external requests of any kind.

## Build

Hand-written HTML and CSS on GitHub Pages. No build step, no framework, no dependencies. The `CNAME` stays as is.

Language handling follows [ADR 0001](./adr/0001-two-static-pages-for-language.md): two real pages, plain-link toggle, browser-language redirect for first-time visitors with an explicit choice always winning. Build the redirect and toggle markup now but keep them inert until `/nl/` exists — a toggle that 404s is worse than no toggle.

English ships first. Dutch is drafted only once the English copy has settled, then rewritten by Matthijs until the tone survives translation.

Revised 2026-08-09. Dutch shipped at `/nl/`, and the switch flipped: the redirect is live, the toggle renders on both pages, and the two carry reciprocal `hreflang` links. Three things were decided while building it.

The redirect runs on `/` only and one way — browser prefers Dutch → `/nl/`. There is no mirror on the Dutch page sending English-preferring visitors back. Someone who follows a shared `/nl/` link has made a choice closer to explicit than a browser setting is, and bouncing them out of it would be the trap ADR 0001 warns about.

The toggle sits in the identity row, right-aligned opposite the Codecraft mark, rather than on its own line below it. On its own line it cost a full line of vertical space in the one place the page can least afford it — see the fold warning at the end of the spec.

The Dutch is Matthijs's, not a translation left as drafted. The draft used *je* throughout, kept *AFK of Human-in-the-loop?* in English, and rendered **Shared understanding** as *een gedeeld beeld*; the revision keeps those and rewrites most of the rest.

## Still open

- A writing/blog section, deferred. The page is structured so adding one does not force a redesign.

Closed 2026-08-09: the LinkedIn URL and the photo were supplied and shipped, and the "Software Development and Architecture" role line was dropped — the diagnosis-led headline states the offer, and a generic role line under it weakens the specificity the page depends on.
