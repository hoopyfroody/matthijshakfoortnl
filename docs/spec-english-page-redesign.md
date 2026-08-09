# Spec — English page redesign

Status: implemented and shipped 2026-08-09. The second failure mode changed while the copy was being written — **Over-reach** became **AFK or human-in-the-loop**; the reasoning is in [CONTEXT.md](../CONTEXT.md) and [the design brief](./design-brief.md), and this spec has been revised to match. Everything else here is as it was specified.

Vocabulary is defined in [CONTEXT.md](../CONTEXT.md); the settled design and copy decisions are in [docs/design-brief.md](./design-brief.md); language handling follows [ADR 0001](./adr/0001-two-static-pages-for-language.md).

Scope: the English page at `/` only. Dutch at `/nl/` is out of scope, but the markup this spec produces must be ready for it. `/nl/` shipped on 2026-08-09 against that readiness; what changed in doing so is recorded in [the design brief](./design-brief.md) and in the language checks below.

The existing `index.html` and `style.css` are legacy. They are not a baseline to extend and they are not a source of requirements — the three documents above are the only inputs. Implementation writes the page from those documents and lets the legacy files be replaced.

## Problem Statement

The site at `/` is a generic freelance developer page: a name, a role line, and four broad services. Nothing on it distinguishes Matthijs from any other developer with fifteen years of experience.

That is the wrong page for the job described in CONTEXT.md. Availability is low, so the site does not need to attract volume; it needs the rare right opportunity to recognise itself and everyone else to self-select away. The page as it stands cannot do either. It does not mention **AI Enablement**, so the **Buyer** has no way to learn the headline offer exists. It has no **Point of view**, so it carries no authority that a generic page could not copy. And it sells breadth, which invites exactly the enquiries that low availability makes unwelcome.

## Solution

Replace the page with a single, type-led, diagnosis-led page addressed to the **Buyer**.

It opens with a claim about the Buyer's team rather than a description of Matthijs: most teams use AI blindly. It then names the three failure modes — **Shared understanding**, **AFK or human-in-the-loop**, **Dual maintainability** — and what Matthijs does about each. Only after the diagnosis has earned it does the page list capabilities, in two labelled groups that make the **Pillar hierarchy** visible: *Working with AI* first, *Fullstack engineering* second. A short background line corroborates the claims. A contact block closes.

No testimonials, no client logos, no case studies, no availability date, no booking link, no GitHub link. Authority rests entirely on the **Point of view**. Strictly monochrome, system fonts only, no external requests, no build step — hand-written HTML and CSS on GitHub Pages, as today.

## User Stories

**Recognising the offer**

1. As a Buyer landing on the page, I want the headline to name a problem I recognise in my own team, so that I keep reading instead of filing the page as another freelancer's CV.
2. As a Buyer, I want to understand within three seconds that AI Enablement is the headline offer, so that I know whether this page is about the thing I came looking for.
3. As a Buyer, I want Fullstack Delivery presented as supporting AI Enablement rather than competing with it, so that the AI work reads as grounded in real delivery experience rather than as opportunism.
4. As a Buyer whose problem this page does not address, I want to work that out quickly, so that I can leave without either of us spending time on a mismatched enquiry.

**The three failure modes**

5. As a Buyer, I want each failure mode stated as a short claim I can agree or disagree with, so that the page reads as a position rather than as marketing copy.
6. As a Buyer, I want each failure mode labelled in plain language rather than with a branded framework name, so that I do not have to learn someone's vocabulary to follow the argument.
7. As a Buyer, I want to read what Matthijs actually does about each failure mode, so that the claim is backed by practice and not just diagnosis.
8. As a Buyer who has watched an agent run for two hours on a wrong turn it took in the first five minutes, I want AFK or human-in-the-loop named explicitly, so that I recognise my own experience on the page.
9. As a Buyer worried that AI-generated code will pass review and still leave the codebase unworkable, I want Dual maintainability addressed, so that I see the risk I actually care about is understood.
10. As a Buyer whose team prompts and hopes, I want Shared understanding described as something reached deliberately, so that I understand there is a method here and not just enthusiasm.

**Capabilities**

11. As a Buyer, I want the capability list to appear after the diagnosis, so that the problems have earned the right to the catalogue.
12. As a Buyer, I want the AI capabilities grouped and labelled separately from the engineering capabilities, so that the two pillars are legible at a glance.
13. As a Buyer, I want capabilities described without specific tool or model names, so that I can trust the page has not silently gone stale since it was written.
14. As a Buyer, I want mentoring and coaching visible inside the AI group rather than as a standalone service, so that I read it as part of enablement rather than as a separate product.

**Credibility**

15. As a Buyer, I want the background line to give me specifics — years, main stack, team sizes — so that it functions as evidence rather than as a claim.
16. As a Buyer, I want background placed after the claims rather than as a CV up front, so that the page argues first and credentials second.
17. As a Buyer, I want to see a photo of the person I would be hiring, so that the page reads as a person rather than as a shell company.
18. As a Buyer, I want the trading name Codecraft and a KvK number available, so that I can verify I am dealing with a registered business before I start a contract conversation.

**Voice and identity**

19. As a Buyer, I want the prose written in the first person throughout, so that it is clear I would be talking to one person and not an agency.
20. As a Buyer, I want Codecraft shown as the primary mark with Matthijs Hakfoort secondary, so that the business name and the `codecraft@` contact address line up.

**Contact**

21. As a Buyer ready to make contact, I want an email address I can click, so that starting a conversation takes one action.
22. As a Buyer who wants to check someone out before emailing, I want a LinkedIn link, so that I can look at their history in the place I normally look.
23. As a Buyer, I do not want to be asked to book a slot in a calendar, so that first contact stays low-commitment on both sides.

**Language**

24. As a Dutch-speaking first-time visitor, I want to land on the Dutch page automatically once it exists, so that I read the site in my own language without hunting for a toggle.
25. As a visitor who has explicitly chosen a language, I want that choice to win over my browser's preference on every later visit, so that I am never redirected away from the language I picked.
26. As a visitor with JavaScript disabled, I want the page and its language toggle to work, so that the site does not depend on script to be readable or navigable.
27. As a visitor, I do not want to be shown a language toggle that leads to a 404, so that the page never offers something it cannot deliver.
28. As a search engine, I want each language to be a distinct crawlable URL with real HTML, so that both versions can be indexed independently.

**Presentation**

29. As a visitor on a phone, I want the page to read comfortably at a narrow width, so that the editorial layout does not force horizontal scrolling.
30. As a visitor, I want one dark palette whatever my system is set to, so that the page looks the way it was designed rather than the way my OS guessed. (Revised 2026-08-09; this story previously asked the palette to invert under `prefers-color-scheme`.)
31. As a visitor on a slow or metered connection, I want the page to load with no external requests, so that it appears immediately and costs nothing to fetch.
32. As a screen reader user, I want the page structured with real headings and landmarks, so that I can navigate its sections rather than hearing one undifferentiated block.
33. As Matthijs, I want the photo slot built with a neutral placeholder, so that adding a real photo is a file drop and not a redesign.
34. As Matthijs, I want the page structured so a writing section can be added later, so that starting to publish does not force a redesign.

## Implementation Decisions

**Files.** `index.html` and `style.css` are written fresh from the documents and replace the legacy files at the same paths. Nothing in the legacy markup or stylesheet is carried forward for its own sake — where the new page happens to need something the old one had, it is because the documents call for it. `CNAME` is untouched. No `package.json`, no build config, no dependencies — the zero-dependency, zero-build-step constraint from the design brief is a hard constraint, not a starting point.

**Page structure.** In document order: hero, three problems, two capability groups, background, contact and footer. The photo slot sits low, adjacent to the contact block.

**Sectioning.** Each of the five parts is a `<section>` with its own heading, inside a single `<main>`. One `<h1>` in the hero; `<h2>` per section; the three problems and the two capability groups use `<h3>`. Headings must be real headings and not styled paragraphs, and the level order must not skip — this is what carries story 32. The capability groups are `<ul>`, so their length is announced.

**Sections are self-contained.** Section styling is scoped to each section rather than to sibling order or `nth-child`, so a writing section can be added between existing ones without touching anything else (story 34).

**No bordered frame.** The design brief drops it explicitly. The page is held together by whitespace and type, with no wrapper box or outline.

**Copy source.** The working headline and capability drafts in the design brief are the input, not the output. Implementation drops the weakest item from each five-item capability draft to reach four. Copy in the **Point of view** comes from Matthijs and is never invented — where the brief leaves a gap, leave a clearly marked placeholder rather than filling it.

**Role line.** The design brief leaves the "Software Development and Architecture" line from the legacy page as an implementation-time call. Decision: drop it. The diagnosis-led headline states what the offer is, and a generic role line directly under it weakens the specificity the page depends on.

**Identity.** Codecraft is the primary mark; "Matthijs Hakfoort" appears secondary. Prose is first person singular throughout — the page says "I", never "we".

**Visual.** Type-led, strictly monochrome: warm off-white on near-black, in every environment. No accent colour, no theme toggle, no `prefers-color-scheme` branch. Colours are defined as custom properties on `:root` and nowhere else, so the palette lives in one place; `color-scheme: dark` is declared alongside them so browser UI matches. (Revised 2026-08-09 — see the design brief.) A system sans stack for prose; `ui-monospace` for labels, section markers and the background line. Monospace does structural work — it marks labels and section boundaries — rather than decorating.

**No external requests.** No webfonts, no analytics, no third-party embeds, no remote images. The photo, when it arrives, is a local file. The placeholder is CSS-only, at the photo's final aspect ratio, so dropping the real file in does not shift the layout.

**Responsive.** Single-column, fluid, with a `max-width` measure on the text so the editorial headline stays readable on a wide screen. Relative units; no fixed pixel widths that can overflow a narrow viewport.

**Language handling** follows ADR 0001 — two real pages, a plain-link toggle, and a redirect for first-time visitors only:

- The toggle is an `<a href="/nl/">`, a real link that works without script.
- Toggle markup and redirect script are both written now and both kept inert until `/nl/` exists. Inert means the toggle is not rendered and the redirect performs no navigation; the mechanism is one commented switch, so enabling Dutch is a single deliberate edit and not a rebuild.
- The redirect runs only when no explicit choice is recorded. An explicit choice always wins over browser preference, permanently. This is the trap-avoidance requirement from the ADR and the reason story 25 exists.
- An explicit choice is recorded when the visitor uses the toggle, persisted in `localStorage` under one key holding a language code.
- Redirect decision, stated as the contract the script implements:

  ```
  stored choice present            → no redirect, ever
  no stored choice, prefers nl     → redirect to /nl/
  no stored choice, anything else  → no redirect (English is the fallback)
  ```

- The script is inline in `<head>`, small enough to be read at a glance, and runs before paint so no wrong-language flash occurs. No external script file — that would be an external request.
- `<html lang>` is set correctly per page. When `/nl/` exists, the two pages carry reciprocal `hreflang` links so story 28 holds.

**Metadata.** `<title>` and `<meta name="description">` are written to match the new positioning; the legacy description sells the broad-services page and is discarded. Description leads with AI Enablement.

**Contact.** `mailto:` link for `codecraft@matthijshakfoort.nl`, plus LinkedIn. Trading name Codecraft and KvK 42120215 in the footer. No GitHub link — the design brief excludes it, and the one in the legacy footer does not carry over.

**Blocked items.** Three inputs were needed from Matthijs and could not be invented: the LinkedIn URL, a usable photo, and the final wording of the Point of view. Each was built as a clearly marked placeholder that failed visibly rather than silently — a LinkedIn link with no URL does not ship as a dead `<a>`. All three arrived on 2026-08-09 and replaced their placeholders; none of the three forced a layout change, which is what the approach was for.

## Testing Decisions

**Decision: no automated tests, and no test tooling added.** The zero-dependency constraint is load-bearing for this project, and the only branching logic on the page is the redirect contract above. Adding a test runner would cost more than it protects at one page. This is the seam decision for this spec; revisit it if the site grows a build step or more script than the redirect.

There is no prior art for tests in this repo — there are no tests, no `package.json`, and no CI.

What replaces them: the page is verified by hand against the checks below before shipping. A check passes on observed behaviour in a browser, not on reading the source.

*English page, `/nl/` absent (the state that ships first):*

1. No language toggle is visible anywhere on the page.
2. No redirect occurs, with browser language set to Dutch and to English, on a first visit with `localStorage` cleared.
3. The page renders completely with JavaScript disabled.
4. The page issues no network requests other than `index.html` and `style.css` — confirmed in the network panel with the cache disabled.
5. The page stays on its one dark palette with the OS set to light and to dark, and is legible in both.
6. The page reads without horizontal scrolling at 320px wide and keeps a comfortable measure at 1920px.
7. Headings form an unbroken outline — one `h1`, `h2` per section, `h3` beneath — checked with an accessibility inspector rather than by eye.
8. The email link opens a mail client with the correct address.
9. The photo placeholder occupies the photo's final aspect ratio, so no layout shift is possible when the real file lands.

*Language handling, re-run when `/nl/` ships (these are deferred, not skipped):*

Run 2026-08-09, when `/nl/` shipped, on a browser preferring Dutch. Check 10 passed as written, and check 14 in the form that browser allows: after choosing EN, a reload of `/` stayed English despite the Dutch preference. The toggle navigated in both directions, but with JavaScript enabled, so check 15 is only half done. Checks 11, 12, 13 and 16 need a browser set to English or to a third language and have not been run.

Check 6 was re-run on both pages at a 303px viewport: the identity row and the toggle share one line without wrapping or horizontal scroll.

10. First visit, browser prefers Dutch, no stored choice → lands on `/nl/`.
11. First visit, browser prefers English → stays on `/`.
12. First visit, browser prefers a third language → stays on `/` (English fallback).
13. Toggle to Dutch, then return with an English-preferring browser → still Dutch. The stored choice wins.
14. Toggle back to English, then return with a Dutch-preferring browser → still English. Confirms the choice is not one-way.
15. With JavaScript disabled, the toggle still navigates between the two pages.
16. No visible flash of the wrong language during the redirect.

Checks 10–14 are the redirect contract. If they ever become tedious enough to automate, that is the signal to revisit the seam decision — and the seam to reach for first is the pure decision function, not a browser driver.

## Out of Scope

- **The Dutch page.** `/nl/` is not built here. Only the markup and script that make it a drop-in addition are. Per the design brief, Dutch copy is drafted after the English copy has settled and is then rewritten by Matthijs until the tone survives translation.
- **A writing or blog section.** Deferred. This spec only requires that adding one later does not force a redesign.
- **Testimonials, client names, logos, case studies.** Excluded by the design brief as a deliberate positioning choice, not for lack of material.
- **An availability line or date.** Excluded: availability is low, and a stale date does active damage.
- **A booking link or contact form.** Email and LinkedIn only.
- **A build step, framework, or dependency of any kind.** ADR 0001 keeps a build step as an escape hatch for when the site outgrows a handful of pages; it is not this change.
- **A GitHub link.** Not on the page.
- **Preserving anything from the legacy page.** No migration, no incremental refactor of the existing markup or stylesheet, and no attempt to keep the current visual identity. The documents are the specification; the legacy files are only what happens to be deployed today.
- **Analytics.** Not part of this spec; it would also break the no-external-requests rule, so adding it later is a decision that reopens that rule.
- **Writing the Point of view copy.** It comes from Matthijs. Implementation places it; it does not author it.

## Further Notes

The hardest part of this change is not the markup — it is keeping the copy specific. The design brief is explicit that a generic version of this page is indistinguishable from any other freelancer's, and generic is the direction the copy will drift under editing. Every adjective that is doing sales work should come out.

The three still-open inputs (LinkedIn URL, photo, final Point of view wording) do not block starting. Build around visible placeholders and shipping is a content edit rather than a second implementation pass.

Watch the ordering in the hero specifically. Codecraft leads as the mark, but the first thing the Buyer should *read* is the diagnosis. If the identity block grows enough to push the headline below the fold on a phone, the identity block is too big.
