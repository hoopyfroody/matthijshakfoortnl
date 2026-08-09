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
2. Keeping it in its lane — **Over-reach**
3. Code people and agents can both maintain — **Dual maintainability**

**Capability groups.** Two labelled groups. Four items each; the drafts below carry five, so drop the weakest of each during implementation.

*Working with AI* — establishing shared understanding between developer and agent; setting limits on what an agent may touch; review practice for AI-generated changes; keeping AI-written code maintainable for both people and agents; tool and model choice. No specific tool or model names anywhere on the page — they date it.

*Fullstack engineering* — TypeScript and Node.js across the stack; React front-ends; build and release automation; infrastructure as code; architecture and technical direction for small teams.

Mentoring and coaching is not a standalone bullet; it lives inside the AI group.

**Background.** Corroboration, placed after the claims rather than as a CV up front. Publishable facts: 15+ years; TypeScript, Node.js, React, build automation, infrastructure as code; agriculture, logistics, e-commerce, consultancy; small, agile, motivated teams. Two or three of these, as prose — "15 years, mostly TypeScript, mostly in teams of 5–15" is evidence where "15 years" alone is a claim.

**Not on the page.** No availability line or date (availability is low and a stale date does damage), no booking link, no testimonials, no GitHub link.

## Structure

Hero → three problems → two capability groups → background → contact.

Diagnosis before catalogue: the problems earn the right to the service list.

## Contact and footer

Email `codecraft@matthijshakfoort.nl` and LinkedIn (URL still needed from Matthijs). Trading name Codecraft and KvK 42120215. No GitHub.

A photo slot sits low on the page, near the contact block, built with a neutral placeholder so a real photo is a file drop rather than a redesign. Photo still needed from Matthijs.

## Visual direction

Type-led. Drop the current bordered frame. Large editorial headline, generous whitespace, monospace for labels, section markers and the background line — the mono is what carries the technical edge, so it should do real work rather than decorate.

Strictly monochrome: near-black on warm off-white, inverted for dark mode via `prefers-color-scheme`, no toggle, no accent colour.

System font stacks only — a system sans for prose, `ui-monospace` for labels. No webfonts, no external requests of any kind.

## Build

Hand-written HTML and CSS on GitHub Pages. No build step, no framework, no dependencies. The `CNAME` stays as is.

Language handling follows [ADR 0001](./adr/0001-two-static-pages-for-language.md): two real pages, plain-link toggle, browser-language redirect for first-time visitors with an explicit choice always winning. Build the redirect and toggle markup now but keep them inert until `/nl/` exists — a toggle that 404s is worse than no toggle.

English ships first. Dutch is drafted only once the English copy has settled, then rewritten by Matthijs until the tone survives translation.

## Still open

- LinkedIn URL.
- A usable photo.
- Whether to keep or drop the "Software Development and Architecture" role line from the current site (implementation-time call; the headline may make it redundant).
- A writing/blog section, deferred. The page should be structured so adding one does not force a redesign.
