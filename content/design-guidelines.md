# Design Guidelines — Executive Portfolio Visual System

*Current direction (as implemented on the live site): premium modern corporate — rounded cards, soft shadows, subtle glassmorphism, gradient accents, dark/light mode. This replaced an earlier bold-industrial exploration; this file reflects what's actually live.*

## Typography
- **Headings:** Manrope (extrabold/bold weights) — a modern geometric sans with real presence at large sizes without tipping into "creative resume" territory.
- **Body text:** Inter — clean, highly legible, the standard for premium SaaS/corporate product UI.
- **Data/labels:** IBM Plex Mono for dates, stat values, and tag-like metadata — gives numbers a technical, engineered feel appropriate for someone positioning as an ERP/systems builder.
- **Hierarchy:** Manrope extrabold for headline moments, bold for section headers, Inter regular/medium for body — weight and size both carry hierarchy.

## Color Palette

As specified: a teal-blue and gold system, distinct from both your company logos (CHEM Tourist's gold and CDSC's orange stay scoped to their own contexts — see below).

**Light mode:**
- Background: `#F8FAFC`
- Text: `#0F172A` (slate-900 — doubles as the dark-mode background value, used here as ink)
- Primary: `#0B5D7A` (teal-blue — headings, primary buttons, links)
- Secondary: `#0F766E` (teal — gradient partner to primary, secondary accents)
- Accent (gold): `#D4A017` — used for the CTA button, dashboard stat highlights, and client-relationship badges
- Neutral gray: `#64748B` — captions, metadata, muted text

**Dark mode:**
- Background: `#0F172A`
- Text: `#F1F5F9`
- Primary: brightened to `#29A7D1` for contrast on dark
- Secondary: brightened to `#17B8A6`
- Accent (gold): brightened to `#F0B429`

**CHEM Tourist logo (gold) and CDSC logo (orange/black):** used only as small marks next to their own entries in the Business Portfolio section — not blended into the primary palette, so the personal executive brand stays the primary identity.

Avoid: mixing the CDSC orange with the primary teal/gold system outside its own card; pure saturated blue as a large background (use it as an accent/gradient, not a flat fill); red as a general accent.

## Layout Principles (Digital)
- Rounded corners (`rounded-2xl` equivalent, ~16px) on all cards — signals "modern product," not "printed document"
- Soft shadows on interactive/data elements, not hard borders as the primary structural device
- Gradient (primary → secondary) used sparingly and deliberately: section icon badges, CTA buttons, project card headers, the closing contact band — never as a full-page background
- Glassmorphism reserved for the sticky navigation bar only (translucent + blur) — using it everywhere would cancel out its "premium" signal
- Section labels: icon badge (gradient-filled) + bold heading + thin rule, not heavy boxes

## Layout Principles (Print Documents — resume, CV)
- Generous margins (minimum 0.85in / 22mm)
- Left-aligned text throughout
- Section breaks marked by a bold heading + thin rule
- Timeline sections: left-aligned year + title + description, chronological
- Stat/dashboard tiles: equal-width grid, number in large weight, label below

## Brand Assets Received
Both company logos are in `/assets` (source) and `/site/public/logos` (deployed): `chem-logo.png` (CHEM Tourist and Transport Services OPC) and `cdsc-logo.jpg` (CDSC Industrial Supply). Displayed as small marks on their respective Business Portfolio cards only.

## Icon Style
Lucide icons (thin-line, consistent stroke weight) — used for section markers, stat categories, and the light/dark toggle. No filled/glyph icons, no multi-color icon packs, no emoji.

## Photography Style
Professional headshot: neutral or softly blurred background, direct eye contact, business-appropriate attire. **No headshot yet** — the hero works without one (name + title + tagline + gradient glow background), so this isn't blocking. Swap one in later without changing the layout.

## Page Structure (Live Site, Single-Page)
1. Hero (name, title, positioning tags, tagline, CTA buttons, contact line)
2. Executive Dashboard (stat grid)
3. Core Competencies (three categories)
4. Professional Experience (three roles)
5. Professional Timeline (horizontal scroll)
6. Business Portfolio (five entity cards)
7. Featured Projects (four case studies)
8. Leadership Philosophy (pull quote + values)
9. Education & Professional Development
10. Contact / closing band

## Print & Digital Specs (for PDF resume/CV exports)
- **Print:** A4 (standard for Philippine institutional/government use), 300 DPI, CMYK, 0.125in bleed for full-bleed color blocks
- **Digital PDF:** RGB, embedded fonts, live hyperlinks, under 5MB
- **File naming:** `Alcaraz_Cherrylyn_Executive_Resume_2026.pdf`

## Production Notes
The live implementation is the source of truth for the digital design system (`/site`, React + Tailwind). For a PDF/print resume matching this system, use the same Manrope/Inter pairing and teal/gold palette in Canva, Figma, or InDesign — the markdown content in this folder is the copy source.
