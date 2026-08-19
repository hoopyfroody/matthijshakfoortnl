# Codecraft logo assets

Three SVG assets. The wordmark is traced to paths, so no font is loaded at
runtime.

## Files

- **`codecraft-logo.svg`** — the full lockup: mark plus wordmark.
- **`codecraft-logo-light.svg`** — the same lockup, recoloured for light paper.
- **`codecraft-mark.svg`** — the two C's on their own. Use this as the favicon.
- **`codecraft-mark-light.svg`** — the two C's, recoloured for light paper.
- **`codecraft-wordmark.svg`** — the wordmark on its own. One file serves both
  backgrounds, because it uses `currentColor`.

Each file's ink sits flush to its `viewBox` on all four edges. Add your own
padding in CSS.

## Colour

The mark carries two fixed ambers. Each palette is measured against its own
background.

| Role | Dark paper `#14120f` | Ratio | Light paper `#f7f4ee` | Ratio |
|------|----------------------|-------|-----------------------|-------|
| Back C | `#8a5a24` | 3.18:1 | `#b8791a` | 3.31:1 |
| Front C | `#e0a03c` | 8.25:1 | `#6b3f0d` | 8.17:1 |

Pick the file that matches the background. The dark palette on light paper drops
the front C to 2.07:1, below the 3:1 guideline for graphics.

The front C is the dominant one. On dark paper it is the brighter of the pair;
on light paper it must be the darker. Reusing the dark palette's lightness
order on light paper inverts the hierarchy.

The wordmark uses `currentColor`. It inherits the surrounding text colour, so it
needs no per-background variant.

```html
<img src="/logo/codecraft-mark.svg" alt="Codecraft" width="49">
<img src="/logo/codecraft-mark-light.svg" alt="Codecraft" width="49">

<!-- inline, so currentColor applies to the wordmark -->
<span style="color: var(--ink)">…contents of codecraft-logo.svg…</span>
```

An `<img>` tag renders `currentColor` as black. Inline the SVG whenever the
wordmark must follow the text colour.

## Construction

The mark is built on a 10-unit grid. Each square is 9 units wide, leaving a
1-unit gutter. Each C occupies a 3×3 grid of cells.

Two measurements fix the wordmark against the mark:

- **Clear space:** exactly one square (9 units) between the mark's right ink
  edge and the word's left ink edge.
- **Vertical position:** the word's x-height band is centred on the front C's
  middle.

Keep at least one square of clear space around the whole lockup.

## Regenerating the wordmark

The wordmark is Manrope SemiBold (600) at 36 units, with `letter-spacing`
of `-0.8`. Manrope is licensed under the SIL Open Font License.

Outlines were traced with `fontTools`, shaped through HarfBuzz so kerning
matches the browser. Retrace only if the word itself changes.
