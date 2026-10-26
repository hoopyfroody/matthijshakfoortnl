# 3. One page per language, no site generator yet

Date: 2026-10-26

## Status

Accepted

## Context

[positioning.md](../positioning.md) section 10 planned a home page plus one deeper page per pillar, in two languages: four or five pages each. At that size the duplicated markup that [ADR 0001](./0001-two-static-pages-for-language.md) accepted "at one page" would stop being acceptable, so section 10 asked for a decision on a build step.

The prototype round (`prototype/product-engineer-home`, variant F, "Rail, revised") chose a different shape. A fixed rail holds the claim and the question "Who should do the work?"; the flow beside it carries the point of view and the three pillars, each with its argument, engagement, case sketch and call to action. That covers the argument section 10 put on the pillar pages, in a shorter form, so the pillar pages are deferred.

## Decision

Keep one hand-written HTML page per language: `/` and `/nl/`. No site generator.

Behaviour that both pages share lives in `site.js`, and every text that script shows comes from the page's own markup, so the script holds no copy.

## Consequences

ADR 0001 still holds as written. A copy change is still made in two files.

The allowlist in `scripts/build-site.sh` ([ADR 0002](./0002-publish-an-allowlist-of-files.md)) gains `site.js`.

A blog, or pillar pages for a longer form of the argument, would bring the page count past the point ADR 0001 names. That is when to add a generator, in the copy step of `scripts/build-site.sh`. The URLs and the language rules do not change.
