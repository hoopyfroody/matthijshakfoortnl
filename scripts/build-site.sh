#!/usr/bin/env bash
# Copies the files the live site needs into _site/, the folder the Pages
# workflow publishes. Everything else in the repo (docs, glossary,
# prototypes, social assets) stays off matthijshakfoort.nl.
#
# A new page or asset is private until it is added to SITE_FILES. The
# check at the end fails the build if a page links to a local file that
# is not in the list, so a forgotten entry breaks the deploy, not the site.
set -euo pipefail

SITE_FILES=(
  index.html
  nl/index.html
  style.css
  background.js
  photo-matthijs-hakfoort.jpg
  logo/codecraft-favicon.svg
)

cd "$(dirname "$0")/.."
rm -rf _site
for file in "${SITE_FILES[@]}"; do
  mkdir -p "_site/$(dirname "$file")"
  cp "$file" "_site/$file"
done

missing=0
while IFS= read -r page; do
  dir=$(dirname "$page")
  while IFS= read -r ref; do
    case "$ref" in
      http:* | https:* | mailto:* | data:* | "#"* | "") continue ;;
    esac
    path=${ref%%[?#]*}
    case "$path" in
      /*) target="_site$path" ;;
      *) target="$dir/$path" ;;
    esac
    case "$target" in */) target="${target}index.html" ;; esac
    if [ ! -e "$target" ]; then
      echo "Missing from SITE_FILES: $ref (linked from ${page#_site/})" >&2
      missing=1
    fi
  done < <(grep -oE '(src|href)="[^"]*"' "$page" | sed -E 's/^(src|href)="//; s/"$//')
done < <(find _site -name '*.html')

if [ "$missing" -ne 0 ]; then
  exit 1
fi
echo "Built _site/ with ${#SITE_FILES[@]} files."
