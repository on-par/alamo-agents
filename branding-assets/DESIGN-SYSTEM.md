# Alamo Agents — Design System

Source: brand board reference (provided 2026-08-06). This doc captures the design
language to build alamoagents.org against, plus where the extracted logo assets live.

## Brand idea
"The AI builders shaping what's next." A private community for engineers, founders,
researchers, and technical leaders building intelligent systems — named for the arch
of the Alamo (San Antonio landmark), signaling craftsmanship, permanence, and a home base.
Tone: architectural, editorial, quietly confident. Not startup-neon, not corporate-blue-SaaS.

## Logo
Mark: a flattened mission-arch silhouette (Alamo facade, simplified to a geometric
stepped arch). Reads as both a building and an "A".

Picked as primary lockup: **icon + serif-style wordmark "ALAMO AGENTS"**, wide
letter-spacing, small caps on "AGENTS" beneath the full-caps "ALAMO". This is the
most versatile and complete mark — use it as the default.
Secondary: the arch **monogram alone** — best for favicon, app icon, social avatar,
watermarks, and anywhere the full wordmark won't fit.

Alternate marks explored on the board (kept as options, not primary):
- Triangular "A" arch
- Twin-peak "AA" mark
- Thin arch line mark

### Files (in this folder)
For every mark (`primary_logo`, `monogram`, `horiz_wordmark`, `favicon`,
`alt_mark_A`, `alt_mark_AA`, `alt_mark_arch_line`, `alt_mark_arch_flat`) there are 5 exports:
- `<name>_on_obsidian.png` — flat dark background, ivory mark (primary "dark mode" lockup)
- `<name>_on_white.png` — flat white background, obsidian mark (primary "light mode" lockup)
- `<name>_on_brass.png` — brand-accent background version
- `<name>_transparent_ivory.png` — transparent PNG, ivory mark → drop onto any dark surface
- `<name>_transparent_dark.png` — transparent PNG, obsidian mark → drop onto any light surface

`alamo_agents_logo_showcase.png` is a contact sheet of the recommended set.
`alamo_agents_color_palette.png` is the palette swatch card.

### Clear space & minimum size
Keep clear space around the mark equal to the height of the arch icon on all sides.
Don't shrink the full lockup below ~120px wide; below that, switch to the monogram alone.

## Color palette

| Name | Hex | Use |
|---|---|---|
| Obsidian | `#111315` | Primary background (dark-mode-first brand), body text on light |
| Slate | `#2B3137` | Secondary dark surface, cards on obsidian |
| Graphite | `#4A5561` | Muted UI elements, borders, secondary text |
| Ivory | `#F8F8F5` | Primary text/mark on dark, light surface alternative to pure white |
| White | `#FFFFFF` | Light backgrounds, high-contrast surfaces |
| Burnished Brass | `#B08D57` | Primary accent — CTAs, highlights, active states |
| Texas Sky | `#7BA8C7` | Secondary accent — links, info states, data viz |

Brand is dark-mode-first: Obsidian background, Ivory type, Burnished Brass for
primary actions (buttons like "Apply to Join"), Texas Sky used sparingly for
secondary emphasis. White/Ivory-background pages are the light-mode inverse,
with Obsidian type.

## Typography
- **Display / Headings:** Canela (serif) — used for hero statements, section titles.
  If Canela licensing isn't available, closest free alternatives: Fraunces, GT Sectra, or Freight Display.
- **Body / UI:** Inter (Regular) — all body copy, nav, buttons, form fields.

Voice pairing: serif display for gravitas + geometric sans for utility — mirrors
"craftsmanship + engineering."

## Layout language (from the hero mockup)
- Wide-margin, editorial grid. Generous negative space, especially on dark surfaces.
- Hero illustration motif: layered geometric arches/monoliths in Obsidian/Slate/Ivory
  with a winding brass-edged path and floating spheres — abstract "systems/journey"
  imagery. Reuse this illustration style (flat geometric forms, one metallic accent
  line, floating orbs) for section dividers and empty states.
- Nav: simple text links, all-caps, wide tracking, right-aligned CTA button in brass.
- CTA buttons: solid Burnished Brass fill, obsidian text, no border-radius or very
  slight radius — matches the architectural squareness of the arch mark.
- Footer/tagline pattern: short all-caps triplet ("INSIGHT. COMMUNITY. EXCELLENCE.")
  as a recurring rhythm device — consider reusing for section kickers.

## Next steps to wire into the site
1. Swap in `primary_logo_transparent_ivory.png` in the dark nav header, `favicon_on_obsidian.png` (or a proper multi-size .ico export) as the site favicon.
2. Load Canela + Inter (or the Fraunces/Inter fallback pairing) as the two site fonts.
3. Set CSS variables from the palette table above; default to dark theme.
4. Recreate the hero illustration as an SVG/Lottie using the same flat-arch + winding-path motif for a real (non-mockup) hero section.
