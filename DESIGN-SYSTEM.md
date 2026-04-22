# Clean Minimal Design System

**Codename:** Clean Minimal
**Last updated:** 2026-04-22
**Applies to:** All Prospector Labs / Glass Energy tools, landing pages, and platform UI

---

## Reference DNA

Derived from: Modo Energy, Electricity Maps, IEA reports, Linear, Stripe, Anduril, Palantir.

What these share: **data density without visual noise.** The interface disappears and the information comes forward. No decoration for decoration's sake.

---

## Core Principles

1. **Data forward, chrome backward.** The UI is a frame for information. Reduce everything that isn't content: smaller nav, thinner borders, less padding between the user and what they came for.

2. **Earned complexity.** Start with the simplest possible presentation. Add layers (filters, toggles, expanded views) only when the user asks for them. Progressive disclosure over upfront overload.

3. **No AI slop markers.** Specifically avoid: centered numbered step sections with rounded badges, gradient hero backgrounds, excessive whitespace between sections, symmetrical 3-column feature grids, generic icons, "How It Works" sections with numbered circles, overly enthusiastic copy with exclamation marks.

4. **Professional gravity.** This is infrastructure software for energy professionals. The tone is Bloomberg Terminal meets Stripe Dashboard, not a consumer SaaS landing page. Users should feel they're looking at a serious tool.

5. **One accent color.** Use color sparingly and with meaning. Color = status, category, or emphasis. Never decoration.

---

## Typography

**Primary:** Inter (system-compatible, widely available, professional)
**Monospace:** Geist Mono (for data, numbers, code, IDs)

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Page title (h1) | 24-28px | 600 | -0.02em |
| Section header (h2) | 18-20px | 600 | -0.01em |
| Subsection (h3) | 15-16px | 600 | normal |
| Body text | 14px | 400 | normal |
| Secondary/meta text | 12-13px | 400 | normal |
| Data values in tables | 13-14px | 500 | normal |
| KPI large numbers | 28-36px | 700 | -0.02em |
| Small labels (uppercase) | 11px | 500 | 0.05em |

**Rules:**
- Left-align everything. Center-alignment only for single KPI values inside their container.
- Numbers are always monospace (Geist Mono). This includes table cells, stats, IDs, dates.
- Titles are sentence case, never ALL CAPS except tiny labels (11px, 500 weight, letter-spaced).
- Line height: 1.5 for body text, 1.2 for headings, 1.0 for large KPI numbers.

---

## Color

### Dark Mode (default)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-0` | `#09090b` | Page background |
| `--bg-1` | `#111113` | Card/panel background |
| `--bg-2` | `#1a1a1e` | Elevated surface, hover states |
| `--bg-3` | `#222226` | Active/selected states |
| `--border` | `#27272a` | All borders — 1px, never thicker |
| `--border-subtle` | `#1e1e22` | Dividers inside cards |
| `--text-1` | `#fafafa` | Primary text |
| `--text-2` | `#a1a1aa` | Secondary text, labels |
| `--text-3` | `#71717a` | Tertiary text, placeholders |
| `--accent` | `#3b82f6` | Primary accent (links, primary buttons, active states) |
| `--accent-subtle` | `rgba(59,130,246,0.1)` | Accent backgrounds |
| `--green` | `#22c55e` | Positive / operational / compliant |
| `--red` | `#ef4444` | Negative / withdrawn / flagged |
| `--amber` | `#f59e0b` | Warning / pending / under review |
| `--purple` | `#a855f7` | Category accent (storage/battery) |

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-0` | `#ffffff` | Page background |
| `--bg-1` | `#fafafa` | Card background |
| `--bg-2` | `#f4f4f5` | Elevated surface |
| `--bg-3` | `#e4e4e7` | Active/selected |
| `--border` | `#e4e4e7` | Borders |
| `--border-subtle` | `#f0f0f2` | Inner dividers |
| `--text-1` | `#09090b` | Primary text |
| `--text-2` | `#52525b` | Secondary |
| `--text-3` | `#a1a1aa` | Tertiary |

### Color Rules

- **Status colors carry meaning.** Green = good/operational/compliant. Red = bad/withdrawn/flagged. Amber = caution/pending. Never use these colors decoratively.
- **Accent blue is for interaction.** Links, focused inputs, primary buttons, active tabs. Not for decorating headings or backgrounds.
- **Charts use a restrained palette.** Maximum 6 colors. Prefer: blue, green, amber, red, purple, zinc. IEA-style: clear, distinct, not rainbow.
- **No gradients.** Flat colors only. Exception: subtle gradient on hover states or loading skeletons.

---

## Layout

### Page Structure

```
┌─────────────────────────────────────────────┐
│ Sidebar (180px, collapsible)  │  Main Content│
│                               │              │
│ Logo                          │  Page Title  │
│ ─────                         │  ─────────── │
│ Nav items                     │              │
│  ○ Explorer                   │  Content     │
│  ○ Developers                 │              │
│  ○ Compare                    │              │
│  ○ FEOC                       │              │
│                               │              │
│                               │              │
│ ─────                         │              │
│ Theme toggle                  │              │
│ User / Settings               │              │
└─────────────────────────────────────────────┘
```

**Sidebar navigation (Modo/Electricity Maps pattern):**
- Fixed left sidebar, 180-200px wide
- Collapsible to icon-only (48px) on smaller screens
- Logo at top, nav items below, utilities at bottom
- Active item: subtle background fill (`--bg-3`), left border accent or font weight change
- Icons: 16px, monoline, left of label. Use simple geometric icons, not emoji or illustrated icons.

**Landing pages (FEOC, marketing):**
- No sidebar. Top nav bar only: logo left, links right.
- Max content width: 720px for text-heavy pages (IEA blog style), 1200px for tool/data pages.
- Generous but not wasteful vertical spacing: 48-64px between major sections, 24-32px within.

### Spacing Scale

Use multiples of 4px: 4, 8, 12, 16, 20, 24, 32, 48, 64.

| Context | Spacing |
|---------|---------|
| Inside a table cell | 8-12px padding |
| Between items in a row | 8-12px gap |
| Card internal padding | 16-20px |
| Between cards/sections | 16-24px |
| Page margin (side) | 24-32px |
| Between major page sections | 48-64px |

### Grid

- Platform data tables: full width within content area
- Card grids: `repeat(auto-fill, minmax(280px, 1fr))` with 16px gap
- Dashboard KPIs: flexible row, wrapping, 12px gap
- Chart layouts: 2-column at desktop, 1-column at mobile, 16px gap

---

## Components

### Tables (primary data display)

Reference: Modo Energy's indices table.

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.data-table th {
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg-1);
}
.data-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-subtle);
  color: var(--text-1);
}
.data-table tr:hover td {
  background: var(--bg-2);
}
.data-table td.numeric {
  font-family: 'Geist Mono', monospace;
  text-align: right;
}
```

**Rules:**
- Numeric columns right-aligned, text columns left-aligned
- Header row is sticky on scroll
- Row height: 40-44px (comfortable but dense)
- Clickable rows get `cursor: pointer` and hover background
- Sparklines in table cells (Modo pattern): tiny inline SVG, 60x20px, no axes, just the line
- Pagination at bottom: "1-20 of 560" with page numbers, not infinite scroll

### Cards

```css
.card {
  background: var(--bg-1);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
```

- Border radius: 8px. Never more. No 16px, no 24px.
- No shadow in dark mode. In light mode: `0 1px 2px rgba(0,0,0,0.04)` only.
- No inner border-radius on sub-elements (avoids the nested-rounded-corners look).

### Buttons

```css
.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.btn-secondary {
  background: transparent;
  color: var(--text-1);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
}
.btn-ghost {
  background: transparent;
  color: var(--text-2);
  border: none;
  padding: 6px 12px;
  font-size: 13px;
}
```

- Buttons are small. 32-36px height max for standard, 28px for compact/table contexts.
- Primary button: one per visible area. Don't scatter blue buttons everywhere.
- Icon buttons: 32x32px, no border, icon centered, hover shows `--bg-2`.

### Inputs & Filters

```css
.input {
  background: var(--bg-0);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--text-1);
}
.input:focus {
  border-color: var(--accent);
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-subtle);
}
```

- Filter bars: horizontal row of dropdowns/selects, compact, left-aligned
- Active filters shown as subtle chips (Modo pattern): `background: var(--bg-2)`, small x to clear
- Search: left-aligned magnifying glass icon, placeholder in `--text-3`

### Badges & Status Indicators

```css
/* Status dots - not badges */
.status-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
.status-dot.active { background: var(--accent); }
.status-dot.operational { background: var(--green); }
.status-dot.withdrawn { background: var(--red); }

/* Minimal text badges */
.badge {
  font-size: 11px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--bg-2);
  color: var(--text-2);
}
.badge.green { background: rgba(34,197,94,0.1); color: #22c55e; }
.badge.red { background: rgba(239,68,68,0.1); color: #ef4444; }
```

- Prefer status dots (6px circles) over full badges for inline status.
- Badges are small, understated. Never large or colorful enough to dominate a row.
- Score displays: plain number with color, no circular progress rings, no star ratings.

### Charts

Reference: IEA style.

**Rules:**
- Chart titles: left-aligned, 14px, semibold. Below the card header, not inside the chart.
- Axis labels: 11px, `--text-3` color, no bold.
- Grid lines: `rgba(255,255,255,0.04)` in dark mode, `rgba(0,0,0,0.06)` in light mode. Horizontal only. No vertical grid.
- Legend: below chart, horizontal, small dots + 11px labels. Not inside the chart area.
- Tooltips: clean white/dark card with 1px border, no arrow, 12px text, appears on hover.
- Bar charts: border-radius 2px on top corners only. Not 8px. Not fully rounded.
- Donut charts: 65% inner radius. Center text optional.
- Colors: use the defined palette in order. No random colors.
- Always include a source/attribution line below charts: 11px, `--text-3`, italic.
- "Open" link in top-right of chart cards (IEA pattern) for expandable view.

### Navigation

**Platform sidebar (Electricity Maps pattern):**
```css
.sidebar {
  width: 200px;
  background: var(--bg-0);
  border-right: 1px solid var(--border);
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
}
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  font-size: 14px;
  color: var(--text-2);
  text-decoration: none;
  border-radius: 6px;
  margin: 0 8px;
}
.sidebar-item:hover { background: var(--bg-2); color: var(--text-1); }
.sidebar-item.active { background: var(--bg-3); color: var(--text-1); font-weight: 500; }
```

**Landing page top nav:**
```css
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 52px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-0);
}
```
- Logo: text-only or small mark + text, 16px, semibold. No large logos.
- Nav links: 14px, `--text-2`, no underline, hover to `--text-1`.
- Max 4-5 top-level nav items. Don't clutter.

---

## Landing Pages (FEOC, Marketing)

### What to avoid (current FEOC problems)

- Centered "How It Works" with numbered circle badges
- Generic "Three steps to verify..." copy
- Pricing section that looks like every SaaS template
- Too much vertical space between sections
- "IRA Compliance - FEOC Verification" chip badge at top

### What to do instead

**Hero section:**
- Left-aligned or asymmetric layout (IEA report style: big heading left, supporting text right)
- Heading should be specific and direct: "FEOC compliance status for 35 energy manufacturers" not "Is your supplier FEOC compliant?"
- Show real data immediately. The search bar IS the hero. No decorative elements above it.
- Stats row below search: compact, left-aligned, no cards around them

**Social proof / credibility:**
- Data source badges: small, inline, gray. "Data from BIS, OFAC, SEC, DOE" as a line of text, not a feature section.
- Number of manufacturers, last updated date. Factual, not promotional.

**Below the fold:**
- Jump straight to a sample result or the manufacturer directory
- If explaining the product, use a 2-column layout (text left, screenshot/example right) not centered blocks
- Pricing: simple table or two inline options, not giant cards with checkmarks

### Content Tone

- Factual, not promotional. "35 manufacturers screened against 6 federal lists" not "The most comprehensive FEOC tool!!!"
- Write like the IEA writes: declarative, data-backed, confident without being salesy
- No exclamation marks. No "powerful." No "seamless." No "cutting-edge."
- Specific numbers > vague claims. "Updated weekly from BIS Entity List" > "Always up to date"

---

## Responsive Behavior

| Breakpoint | Sidebar | Content | Tables | Charts |
|------------|---------|---------|--------|--------|
| > 1200px | 200px, expanded | Full | Full width | 2-col grid |
| 768-1200px | 48px, icons only | Expanded | Horizontal scroll | 1-col |
| < 768px | Hidden (hamburger) | Full width, 16px margin | Horizontal scroll | 1-col, full width |

- Tables always scroll horizontally on mobile, never stack/card-ify
- Sidebar collapses to hamburger on mobile, overlays content
- Charts go single column but maintain minimum height (200px)

---

## Interactions

- **Transitions:** 150ms ease for hovers, 200ms for panel open/close. Never bouncy or springy.
- **Loading states:** Skeleton screens with `--bg-2` shimmer, not spinners. Spinners only for inline actions (button loading).
- **Empty states:** Single line of text + one action button. No illustrations. No sad-face icons.
- **Errors:** Red text inline, never modal alerts. "Failed to load project data" not "Oops! Something went wrong!"
- **Tooltips:** Appear on hover after 300ms delay, no animation, positioned above by default.

---

## Anti-Patterns (never do these)

1. Gradient backgrounds or gradient text
2. Rounded badges with numbers inside (the "step 1, 2, 3" pattern)
3. Large hero images or illustrations
4. Testimonial carousels
5. "Trusted by" logo bars (unless we actually have recognizable logos)
6. Feature grids with icons and equal-width columns
7. Animated counters or number tickers
8. Decorative SVG backgrounds or patterns
9. Cards with more than 8px border-radius
10. Drop shadows deeper than `0 1px 2px`
11. Multiple accent colors competing for attention
12. Hamburger menus on desktop
13. Modal dialogs for non-critical actions
14. Toast notifications that auto-dismiss before reading
15. "Learn more" links that go nowhere useful

---

## File Organization

```
platform/
  styles.css          ← Canonical design system CSS (update to match this doc)
  api.js              ← API client
  utils.js            ← Shared helpers
  index.html          ← Explorer
  project.html        ← Project detail
  developer.html      ← Developer profile
  compare.html        ← Comparison

feoc/
  index.html          ← FEOC landing + tool
  manufacturer.html   ← Individual manufacturer pages
```

All pages import `styles.css` from `platform/`. FEOC pages can add FEOC-specific styles inline or in a small `feoc/styles.css` that layers on top.

---

## Implementation Priority

When redesigning existing pages, apply this system in order:

1. **Typography + spacing** — Swap fonts, fix sizes, adjust padding. Biggest visual impact, smallest code change.
2. **Color tokens** — Ensure all colors come from CSS variables, not hardcoded hex values.
3. **Navigation** — Add sidebar to platform pages, fix top nav on landing pages.
4. **Table styling** — Apply dense, professional table design (Modo reference).
5. **Remove slop** — Delete numbered steps, generic icons, excessive whitespace, promotional copy.
6. **Charts** — Restyle to IEA standard: restrained colors, proper typography, source attribution.
7. **Responsive** — Test and fix mobile breakpoints last.
