# 1. Two static pages for language, not client-side string swapping

Date: 2026-08-08

## Status

Accepted

## Context

The site must be available in English and Dutch, with a visible toggle, defaulting to the visitor's browser language and falling back to English. It is a hand-written static site served by GitHub Pages, with no build step and no framework.

Three options were considered:

1. **Two static pages** — `/` (English) and `/nl/` (Dutch), each real HTML, the toggle being a plain link. A small script redirects first-time visitors whose browser prefers Dutch, and records an explicit choice.
2. **One page, client-side string swapping** — a single HTML file with `data-i18n` attributes, swapped by JavaScript on load.
3. **A build step** — a static site generator producing both pages from one source.

## Decision

Two static pages.

## Consequences

Both languages are real HTML: crawlable, indexable under distinct URLs, and readable with JavaScript disabled. No flash of the wrong language on load. The cost is duplicated markup — a copy change must be made in two files, which is acceptable at one page and would not be at ten.

The language redirect must never trap a visitor: an explicit choice is recorded and always wins over browser preference, and the toggle is a real link that works without script.

A build step remains the escape hatch if the site grows past a handful of pages; moving to one later does not change the URLs, so this decision is reversible in the ways that matter.
