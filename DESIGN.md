---
name: "Portafolio Matías Felissia"
description: "Nocturno night-edition newspaper portfolio — warm near-black stock, one signal-red spot, Source Serif 4 + Archivo Narrow"
colors:
  ground: "#121110"
  ground-raised: "#1b1a17"
  ink: "#ece8df"
  ink-soft: "#9b958a"
  rule: "#4a473f"
  rule-soft: "#2b2925"
  red: "#e5473f"
  red-deep: "#f2564d"
  on-red: "#160b0a"
  paper-light: "#f2efe7"
typography:
  display:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(2.6rem, 9vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(1.7rem, 4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  row:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(1.05rem, 2vw, 1.3rem)"
    fontWeight: 600
    letterSpacing: "-0.01em"
  deck:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: '"Archivo Narrow", "Arial Narrow", sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "Archivo Narrow 700, 0.8125rem, uppercase, 0.1em"
    rounded: "{rounded.none}"
    padding: "9px 18px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-red}"
  button-accent:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "Archivo Narrow 700, 0.8125rem, uppercase, 0.1em"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  button-accent-hover:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ground}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "Archivo Narrow 700, 0.8125rem, uppercase, 0.1em"
    rounded: "{rounded.none}"
    padding: "9px 18px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "Archivo Narrow 600, 0.75rem, uppercase, 0.1em"
    rounded: "{rounded.none}"
    padding: "3px 8px"
  chip-live:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.none}"
    padding: "3px 8px"
  tag:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink-soft}"
    typography: "Archivo Narrow 600, 0.8125rem, uppercase, 0.08em"
    rounded: "{rounded.none}"
    padding: "7px 13px"
  field:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    typography: "Source Serif 4 400, 1rem"
    rounded: "{rounded.none}"
    padding: "10px 12px"
---
# Design System: Portafolio Matías Felissia

## Overview

**Creative North Star: "Nocturno — The Night Edition"**

Nocturno prints the portfolio as the night edition of a paper of record: warm near-black stock instead of newsprint grey, warm off-white ink, one signal-red spot, and hairline rules doing the structural work that boxes and shadows do elsewhere. Projects are reported stories — folio lines, datelines, bylines, decks, fichas and plates carry the furniture — and the whole paper is set in two faces: Source Serif 4 for every display and reading line, Archivo Narrow for every label, key, chip and control.

Density is editorial rather than app-like: sections meet on 1px rules, rows pad 12–17px, corners are square everywhere, and the page answers touch with inversion or a warm tint instead of lift. The system is deliberately flat and deliberately dark; the only chroma is red, and it only ever means something — live, focus, current, one CTA. It refuses the category default of a centered hero over a grid of rounded cards, and it refuses elevation theatre: no radius, no shadow, no glow.

This file records the shipped Nocturno build (the portada's inline style sheet plus `assets/css/press.css` for every subpage); the earlier light-newsprint and timing-tower editions are superseded.

**Key Characteristics:**
- **Night-edition stock:** warm near-black ground (#121110) with warm off-white ink (#ece8df); `color-scheme: dark` on every page.
- **One spot color:** signal red (#e5473f) marks state, emphasis and the primary CTA — nowhere else.
- **Two faces:** Source Serif 4 (variable, weights 200–900, roman + italic) and Archivo Narrow (400/700), both served as local woff2 from `assets/fonts/`.
- **Rule-built:** sections, rows, frames and masthead bands are 1px hairlines; zero radius, zero shadows.
- **Editorial furniture:** folio, dateline, byline, deck, ficha, plates, colophon and stamp as the component language.
- **Restrained motion:** one staggered rise on the portada, 120–150ms state transitions, `prefers-reduced-motion` honored on both sheets.

## Colors

A warm near-black palette with a single spot red — night newsprint, not broadcast black.

### Primary
- **Signal Red** (#e5473f): the only chroma in the system. Opens the portada above the folio line (`rule--red`), fills the live chip ("En vivo"), the accent CTA, the pressed language cell on the portada, the section marks in meta lines, location labels, portada nav's last item, row-hover titles, list markers and link underlines on hover.
- **Press Red Deep** (#f2564d): the brighter answer red — subpage link hover (`a:hover`), the focus ring on subpages, the stamp's label, "Fig. N" captions, pager positions, caret color, and the ink-button hover fill.

### Neutral
- **Night Ground** (#121110): page background on every surface (token `--bg` on the portada, `--paper` in press.css); also the text color of any inverted surface.
- **Raised Ground** (#1b1a17): the second step of the tint ladder — availability stamp, screenshot frames, client cards, form fields, stack tags, and the portada's row/list hover tint (`--bg-hi` / `--paper-hi`).
- **Warm Ink** (#ece8df): primary text everywhere; also the inversion fill (ink buttons, skip link, hovered rows, selection background, scrollbar thumb).
- **Soft Ink** (#9b958a): secondary text — decks, descriptions, folio notes, resting nav links, captions, placeholders, colophon meta (`--ink-soft` / `--muted`).
- **Rule** (#4a473f): structural hairlines — section bands, masthead bars, directory rows, colophon top edge, pager gap (`--rule`).
- **Rule Soft** (#2b2925): quiet divisions — every portada hairline (`--hair`), ficha inner rows, tag borders, crumb and colophon link underlines.
- **On-Red** (#160b0a): text on any red fill — accent button, live chip, pressed portada toggle, ink-button hover, the "MF" favicon.
- **Paper Light** (#f2efe7): light stock held in reserve — the accent button's hover flips to it (`--paper` on the portada); the superseded light-edition white.

### Named Rules
**The Single-Spot Rule.** One spot color. Red marks state (live, focus, current), emphasis and a single primary CTA; it never fills a section or a page. Its rarity is the point.

## Typography

**Display Font:** Source Serif 4 (variable, weights 200–900, roman + italic; fallback Georgia, serif) — local woff2, latin + latin-ext subsets, preloaded on every page.
**Body Font:** Source Serif 4 (the same family — one serif carries display and reading).
**Label/Mono Font:** Archivo Narrow (400/700; fallback "Arial Narrow", sans-serif). No mono face ships; numerals are serif with tabular or old-style figures.

**Character:** a news serif at night — tight, uppercase nameplates and balanced headlines over calm 17px reading text, with a narrow grotesque doing all the slugs, keys, chips and controls in wide-tracked caps.

### Hierarchy
- **Display / nameplate** (600, clamp(2.6rem, 9vw, 6.5rem), line-height 0.95, -0.03em, uppercase, centered): the portada name between stacked hairlines; the `em` half drops to 400, mixed case, soft ink. Interior nameplate (link home): clamp(2.1rem, 7vw, 3.4rem), weight 400, line-height 0.96, uppercase.
- **Headline / page title** (600, clamp(2rem, 6vw, 4rem), line-height 1.02, -0.015em, uppercase, `text-wrap: balance`): the h1 on contacto and every proyecto page.
- **Feature headline** (600, clamp(1.7rem, 4vw, 2.7rem), line-height 1.15, -0.02em): the portada lead h2; italic emphasis set in red.
- **Title / section head** (600, clamp(1.7rem, 4vw, 2.5rem) on subpages, clamp(1.5rem, 3.2vw, 2.1rem) on the portada, line-height 1.02, -0.015em): section titles; part heads inside stories are uppercase over a rule at clamp(1.5rem, 3.4vw, 2.1rem).
- **Row title** (600, clamp(1.05rem, 2vw, 1.3rem) portada rows, clamp(1.2rem, 2.6vw, 1.55rem) subpage lists, -0.01em).
- **Deck** (400 italic, clamp(1.1rem, 2.2vw, 1.35rem), line-height 1.5, max 60ch): story-head decks; the portada deck runs 1.1rem at body leading, max 56ch.
- **Body** (400, 17px — written 17px on the portada and 1.0625rem in press.css, line-height 1.6): running text, max 58ch on the portada columns; subpage body sets old-style figures (`oldstyle-nums`).
- **Label** (600–700, Archivo Narrow, 0.6875rem–0.8125rem, uppercase): folio, dateline, nav, chips, buttons, field keys, story indices; `tabular-nums` on folios, chips, indices and ficha values.
- **Byline / long meta** (600, 0.75rem, 0.04em, mixed case): bylines, colophon meta, location lines — tracking tightened because the line is long.

### Size ramp (as authored across index.html + press.css)
- **Label scale (Archivo Narrow):** 0.6875rem, 0.75rem, 0.8125rem, 0.875rem.
- **Text scale (Source Serif 4):** 17px, 0.9375rem, 0.95rem, 1rem, 1.0625rem, 1.1rem, 1.125rem, 1.25rem, 1.3rem, 1.5rem, 3.2em (drop-cap step).
- **Responsive heads:** clamp(1.05rem, 2vw, 1.3rem), clamp(1.1rem, 2.2vw, 1.35rem), clamp(1.15rem, 2.4vw, 1.5rem), clamp(1.2rem, 2.6vw, 1.55rem), clamp(1.5rem, 3.2vw, 2.1rem), clamp(1.5rem, 3.4vw, 2.1rem), clamp(1.7rem, 4vw, 2.5rem), clamp(1.7rem, 4vw, 2.7rem), clamp(2rem, 5.5vw, 3.4rem), clamp(2rem, 6vw, 4rem), clamp(2.1rem, 7vw, 3.4rem), clamp(2.4rem, 7.4vw, 5.4rem), clamp(2.6rem, 9vw, 6.5rem), clamp(2.6rem, 11vw, 6rem).

### Named Rules
**The Two-Face Rule.** Two faces ship: Source Serif 4 sets every display and reading line, Archivo Narrow sets every label, key, chip and control. No third face — not for numbers, not for UI; serif tabular/old-style figures carry data instead of a mono.

**The Short-Label Rule.** Uppercase is a voice for short labels only — folios, datelines, nav, chips, keys, buttons — always letter-spaced (0.04em–0.12em; 0.1em is the Nocturno chrome value, 0.12em the portada slugs). Long metadata lines drop to mixed case at 0.04em tracking.

## Layout

One static shell, two stylesheets. Subpages sit in a 1140px centered shell (`--shell`) with clamp(16px, 4vw, 48px) gutters (`--pad`); the portada wraps at 1140px with fixed 22px gutters.

- **Section rhythm:** subpages pad 56px block (40px at ≤720px) and meet the next section on a 1px `--rule`; portada sections pad 46px and open on a 1px `--hair`. Row/control density is 12–17px vertical padding; metadata rows run 6–14px.
- **Portada lead:** grid 1.7fr / 1fr, gap 44px → single column at ≤880px.
- **Portada story rows:** grid 46px / 1.1fr / 1.5fr / auto, gap 18px, padding 17px 10px → 36px / 1fr at ≤880px (description and status stack into column 2).
- **Portada about:** grid 1.4fr / 1fr, gap 40px → 1fr at ≤880px.
- **Subpage contact letters:** grid 1.15fr / 0.85fr, gap 44px → 1fr at ≤980px.
- **Plates:** 3 columns, gap 26px 24px → 2 at ≤980px → 1 at ≤720px.
- **Ficha rows:** 160px key column + value → stacked at ≤720px. Entry/when blocks use 200px + 1fr.
- **Pager:** two cells sharing a 1px `--rule` gap → stacked (left-aligned) at ≤720px.
- **Breakpoints (observed):** 980px, 880px (portada only), 720px, 560px.

## Elevation & Depth

Flat by design: neither stylesheet contains a single `box-shadow`. Depth is carried by three levers — the tint ladder (ground → raised ground for framed panels), 1px rules in three weights (rule-soft, rule, ink), and hover inversion. Focus is a 2px red-deep outline at 2px offset on subpages, 2px signal red at 3px offset on the portada. Selection reverses ink on ground; the subpage scrollbar is a 12px ink thumb on a ground track.

### Shadow Vocabulary
None. No ambient, no hover lift, no elevation stack.

### Named Rules
**The Flat-Print Rule.** Surfaces print flat. Hover flips ink and paper or warms the row one tint step; it never lifts, glows, or blurs.

## Shapes

Square throughout: no `border-radius` appears in either stylesheet, so every button, chip, tag, field, frame, stamp and panel renders at 0px corners. Borders are always 1px — quiet (`--rule-soft`) for secondary divisions and link underlines, structural (`--rule`) for section and masthead bands, framing (`--ink`) for tools and images (chips, fields, plates, stamps, buttons, the language group), with one signal-red hairline opening the portada above the folio line. Silhouettes are rectangular; screenshot plates are unclipped images inside a 1px frame (`overflow: hidden` only on the frame). The only curves in the paper are the serif's own.

### Named Rules
**The Square-Corner Rule.** Radius is 0 everywhere. A rounded corner would break the cut-paper silhouette; framing is done with hairlines, never with soft corners.

## Components

### Masthead & Nameplate
The paper's flag, built from bands and rules — no logo. Interior pages: folio bar (dateline note + language toggle, label face, closed by a 1px rule), the centered nameplate link, then a bar with nav and contact CTA under a top rule. Portada: a signal-red rule, the folio row (meta + nav + toggle), plain rules above and below the nameplate (display, uppercase, lh 0.95).

### Navigation
- **Portada nav:** Archivo Narrow 0.75rem / 600 / uppercase / 0.12em; soft ink at rest → warm ink on hover, 120ms ease-out; the contact item sits red permanently.
- **Subpage nav:** Archivo Narrow 0.8125rem, uppercase (0.1em after the Nocturno label layer); transparent 2px underline → signal red on hover, ink underline when `aria-current="page"`.
- **Language toggle:** 1px-framed square group, two cells split by a 1px rule, 0.6875–0.75rem / 700. Pressed cell fills ink with ground text on subpages, signal red with on-red text on the portada.
- **Skip link:** ink bar with ground text (label face, 0.8125rem, 0.1em, uppercase), parked at top -48px, sliding to 8px on focus over 0.15s.

### Buttons
- **Shape:** square (0), 1px border, label face at 0.8125rem / 700 / uppercase / 0.1em.
- **Primary (ink):** ink fill, ground text, padding 9px 18px; hover → red-deep fill with on-red text (120ms).
- **Accent (red):** signal-red fill, on-red text, padding 12px 16px (the portada's "Hablemos"); hover → paper-light fill with ground text.
- **Ghost:** transparent, ink text, 1px ink border; hover → ink fill, ground text. The portada's ghost variant borders in rule-soft and inverts to ink/paper.
- **Focus:** 2px red outline, 2–3px offset, on every variant.

### Chips & Tags
- **Chip:** square, 1px ink border, transparent, label face 0.75rem / 600 / uppercase / 0.1em, padding 3px 8px, tabular figures. `chip--live` fills signal red with on-red text; `chip--ink` fills ink with ground text.
- **Tag (portada stack):** 1px rule-soft border, soft ink, Archivo Narrow 0.8125rem / 600 / uppercase / 0.08em, padding 7px 13px; hover warms border and text to full ink.

### Rows & Directory Links
Whole-row links are the paper's control surface.
- **Portada story row:** grid 46px / 1.1fr / 1.5fr / auto, 1px rule-soft base, padding 17px 10px; hover warms the row to raised ground, sets the title red, and nudges the trailing mark 5px right (150ms).
- **Subpage directory / contact rows & pager cells:** 1px rule base (pager cells share a 1px rule gap); hover inverts — ink fill, ground text — with `outline-offset: -2px` so focus stays inside the row.

### Story Head & Ficha
- **Story head:** label meta line carrying chips, uppercase h1 (clamp(2rem, 6vw, 4rem)), italic deck to 60ch, closed by a 1px rule.
- **Ficha:** key/value table — 160px uppercase label keys, tabular-figure values — rows split by rule-soft inside a rule frame.

### Panels, Plates & Fields
- **Stamp (availability):** 1px rule-soft frame on raised ground, padding 22px, red-deep label (0.75rem / 700 / 0.12em / uppercase), stacked full-width actions.
- **Plates:** 1px ink frame on raised ground, `overflow: hidden`, label captions with "Fig. N" in red-deep.
- **Client cards:** 1px ink frame, raised ground, padding 18px, red-deep status label.
- **Fields:** raised-ground fill, 1px ink border, warm ink text, serif 1rem, padding 10px 12px, soft-ink placeholders at full opacity; labels uppercase label face 0.8125rem / 700 / 0.05em; focus is the global 2px red-deep ring. No error/disabled states ship — the composer opens a mail client.

### Colophon
Top rule, 30px / 44px block padding, flex space-between: mixed-case label meta at 0.75rem in soft ink beside a link row underlined in rule-soft → signal red on hover (the portada's email link is red and underlines on hover).

### Motion
- **Entrance (portada only):** one authored stagger — elements rise 12px and fade in over 220ms ease-out with 0–240ms delays (`.rise`), pure CSS so content renders with JS off.
- **State:** color/background transitions at 120–150ms ease-out on the portada, 0.12s cubic-bezier(0.16, 1, 0.3, 1) (`--ease`) on subpages; skip link slides 0.15s.
- **Reduced motion:** the portada cancels the rise and all transitions; subpages collapse durations to 0.001s.
- No loops, no parallax, no scroll-linked effects.

### Named Rules
**The Inversion Rule.** Hover answers in stock, not in space: interior rows and buttons flip ink and paper, the portada warms the row to raised ground and sets the title red. Nothing lifts, glows, or rounds.

## Do's and Don'ts

### Do:
- **Do** keep every assignment inside the two-face system: Source Serif 4 for display and reading, Archivo Narrow for labels and controls (0.6875rem–0.8125rem, uppercase, 0.04em–0.12em).
- **Do** keep short labels uppercase and long metadata lines mixed-case at 0.04em — the portada's meta and colophon lines do exactly this.
- **Do** frame tools, images and panels with 1px borders (ink on raised ground; rule/rule-soft for divisions) and separate sections with full-width 1px rules.
- **Do** answer hover with inversion or one warm tint step in 120–150ms, and keep focus visible as the 2px red ring.
- **Do** keep both language states typographically identical — `data-en` swaps words, never styles.
- **Do** use tabular figures for folios, indices, chips and ficha values; subpage running text keeps old-style figures.
- **Do** honor `prefers-reduced-motion` on every surface (both stylesheets implement it).

### Don't:
- **Don't** introduce a third typeface or a mono for numbers — two faces, and serif tabular/old-style figures carry data.
- **Don't** add `border-radius` anywhere; every shipped corner is square (0).
- **Don't** add `box-shadow`, glow or blur to any surface or state — depth is tint, rule and inversion.
- **Don't** set wide-tracked uppercase on sentences or long metadata lines; that tracking belongs to short labels.
- **Don't** use signal red as a section or page fill — it marks state, emphasis and one CTA.
- **Don't** ship looping, parallax or scroll-hijacked motion; the only entrance is the portada's single staggered rise.
