# 2. Publish an allowlist of files, not the whole branch

Date: 2026-10-26

## Status

Accepted

## Context

GitHub Pages served the `main` branch as it is. Every file in the repo was public on matthijshakfoort.nl: the glossary, the design brief, the positioning document with its notes that are for internal use only, the research, and the social banner sources. Jekyll also rendered the Markdown files as HTML pages.

The repo holds more than the site, and that will grow: docs, prototypes, and later the material for the restructure in [positioning.md](../positioning.md).

## Decision

A GitHub Actions workflow (`.github/workflows/pages.yml`) runs `scripts/build-site.sh`, which copies an explicit list of files into `_site/`, and publishes only that folder. The Pages source is set to "GitHub Actions", not to a branch.

The script also checks every local `src` and `href` in the published pages. If a page links to a file that is not on the list, the build fails and the live site stays as it was.

## Consequences

A new page or asset is private until it is added to the list. Forgetting it fails the deploy, not the site.

There is no Jekyll step any more. The files are published byte for byte.

This is the build step that [ADR 0001](./0001-two-static-pages-for-language.md) names as the escape hatch. A generator for more pages can replace the copy step later, and the workflow stays the same.

The repo itself is still public on GitHub. This decision controls what the website serves, not who can read the repo.
