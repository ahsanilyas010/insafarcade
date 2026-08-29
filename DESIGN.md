# Design System — Insaf Arcade 2

## Token system

All tokens are CSS custom properties defined in `app/globals.css` and referenced via Tailwind's `colors` config.

| Token         | Value     | Role                                              |
|---------------|-----------|---------------------------------------------------|
| `--ink`       | `#101214` | Near-black. Primary text, dark section backgrounds |
| `--stone`     | `#F5F3EF` | Warm off-white. Page base — matches the facade     |
| `--concrete`  | `#DDD8D0` | Borders, dividers, card fills, table structure     |
| `--gold`      | `#C89434` | Brand accent. Matches the building's gold signage  |
| `--gold-deep` | `#8F6A1E` | Hover and pressed state for gold elements          |
| `--slate`     | `#4A5058` | Secondary text, labels, eyebrows                  |

### Gold usage rule

Gold is for numbers, active states, and the single hero accent line — never for large fills or full-width bands. If more than ~5% of any viewport is gold, it has been overused. All gold-on-stone small text uses `--gold-deep` (#8F6A1E) to pass WCAG AA contrast.

## Typography

| Face           | Weights   | Use                                          |
|----------------|-----------|----------------------------------------------|
| **Fraunces**   | 400 / 600 | Headlines, price figures, floor-stack labels  |
| **Inter Tight**| 400 / 500 / 600 | Body copy, UI labels, table text         |

Both fonts are self-hosted via `next/font/google` — no render-blocking external link.

All price, area, and installment figures use `font-variant-numeric: tabular-nums` so columns align and digits don't reflow during count-up animations.

Type scale: **13 / 15 / 17 / 21 / 28 / 40 / 64 / 88 px**, clamped fluidly with CSS `clamp()`.

## Layout

- 12-column editorial grid with generous left margin
- Max site width: **1440 px**
- Border radius: **2 px maximum** — this is architecture, not a SaaS dashboard
- Structure comes from 1 px `--concrete` hairline borders, not shadows or fills
- Section eyebrows: 11 px small-caps + thin gold rule (via `.eyebrow` utility class)

## Signature element — Floor-stack navigator

The one memorable thing on the page. On desktop it appears as a sticky vertical stack pinned to the right edge at viewport midpoint, showing:

```
FLOORS
┌────┐
│ G  │  ← Ground (Parking)
├────┤
│ 1  │  ← 1st floor (Shops & Offices)
├────┤
│2–4 │  ← Residential (Apartments)
└────┘
```

Each floor is a small labelled tile. As the user scrolls, an `IntersectionObserver` detects which section crosses the viewport midpoint and the corresponding tile's background transitions to `--gold` over 250 ms.

The tiles are also buttons — clicking any floor smooth-scrolls to that section's first `[data-section]` element.

On mobile (< 1024 px), the navigator collapses to a horizontal segmented control that sticks just below the main nav bar. Same scroll-spy, same jump-nav behaviour.

### Section–floor mapping

| Section            | Active floor |
|--------------------|-------------|
| Hero               | G           |
| Building at a glance | G         |
| Location           | G           |
| Commercial units   | 1           |
| Apartments         | 2–4         |
| Payment plan       | 2–4         |
| Why invest         | (none)      |
| About              | (none)      |
| Enquiry            | (none)      |

## Animation rationale

Motion should feel like construction and settling — things arriving into alignment. Nothing decorative; everything purposeful.

- **Hero load sequence** (~1.4 s total): image scales down → gold rule draws → headline lines reveal → stats rise → floor navigator draws floor by floor.
- **Scroll reveals**: `whileInView`, `once: true`, `margin: "-80px"` — 16 px rise + fade, 500 ms. Sections never animate height or padding.
- **Table rows**: 30 ms stagger, capped so the last row never waits > 400 ms.
- **Count-up**: 900 ms ease-out on number entry; tabular figures prevent layout shift.
- **Floor navigator active state**: 250 ms fill transition, IntersectionObserver not scroll position.

All animation is guarded by `prefers-reduced-motion: reduce` — it reduces to instant opacity fades.

**Banned patterns:** bounce/spring overshoot on structure, scroll-jacking, full-page transitions, autoplaying carousels, parallax on text, animated gradient meshes, typewriter effects.
