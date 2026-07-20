# Design Guidelines — Executive Portfolio Visual System

Direction: management-consulting-firm aesthetic — minimalist, high white space, restrained color, premium typography. Not a "creative resume," not corporate-generic either.

## Typography
- **Headings:** A refined serif or high-contrast sans for gravitas — e.g., *Fraunces*, *Playfair Display*, or *Canela* for a serif feel; or *Söhne*, *Inter Tight*, or *General Sans* for a modern sans approach. Pick one direction, not both, and stay consistent across every document.
- **Body text:** A clean, highly legible sans — *Inter*, *Söhne*, or *Public Sans*. 10.5–11pt for print documents, 16px base for digital.
- **Hierarchy:** Maximum 3 type sizes per page (title, section header, body). Use weight and spacing for hierarchy before you reach for size.

## Color Palette

You sent both company logos — CHEM Tourist and Transport (gold/amber, airplane-in-circle mark) and CDSC Industrial Supply (bright orange-red and black wordmark). Neither was designed as a *personal* executive brand, and running both full-saturation logo colors on one portfolio would fight each other, so the system below borrows and refines the CHEM Tourist gold — your flagship, highest-visibility business — as the portfolio's single accent, and reserves the CDSC orange strictly for CDSC's own profile block.

**Primary portfolio palette (personal/executive documents — resume, CV, cover, dashboard):**
- **Primary (text/structure):** Charcoal / near-black — `#1A1D21`
- **Background:** Warm off-white — `#FAFAF8`
- **Accent — refined brass/gold** (desaturated from the CHEM Tourist logo's `#F1C25A` / `#A5600D` for print elegance, so it reads as premium rather than glossy): `#9C7A2E`, with a deeper shade `#6E551F` for small text on light backgrounds
- **Secondary/muted:** Warm gray `#6B6A66` for captions, metadata, page numbers

**CDSC-specific accent (used only within the CDSC Industrial Supply profile block in `business-portfolio.md`, e.g., a small tag or divider):**
- Orange `#E0480A` (refined from the logo's `#FF4000`), paired with black `#000000` — never mixed with the gold accent on the same page

Avoid: bright primary blue, gradient backgrounds, running the gold and orange accents together, red as a general accent (reads as "warning" in a safety-focused transport business — the CDSC orange is the one deliberate exception, confined to its own section).

## Layout Principles
- Generous margins (minimum 0.85in / 22mm on print documents)
- Left-aligned text throughout — centered text reads as amateur at this level
- Section breaks marked by a thin rule + small-caps label, not heavy boxes or shading
- Timeline sections: vertical line with year markers on the left, content indented right
- Stat/dashboard tiles: equal-width grid, generous internal padding, number in large weight, label in small-caps below

## Brand Assets Received
Both company logos are saved in `/assets`: `chem-logo.png` (CHEM Tourist and Transport Services OPC) and `cdsc-logo.jpg` (CDSC Industrial Supply). Use them as small marks next to each company's entry in the business portfolio section — not blown up large, and not both on the same page as a "featured" logo, to keep the personal executive brand (not a specific company's brand) as the primary identity of the overall portfolio.

## Icon Style
Thin-line (1.5px stroke) icon set, single color matching the accent — e.g., Phosphor Icons or Lucide. No filled/glyph icons, no multi-color icon packs, no emoji.

## Photography Style
Professional headshot: neutral or softly blurred background, direct eye contact, business-appropriate attire, natural lighting preferred over harsh studio flash. If a fleet/operations photo is available for the business portfolio pages, use a clean wide shot (not a phone snapshot) — this does more to establish credibility than any stock photo would.

**No headshot yet:** the cover page works without one — a typographic cover (name set large in the display serif, gold rule, tagline) reads as intentional and consulting-firm grade rather than incomplete, and it's the safer choice over a placeholder gray circle. Swap in a headshot later without changing the rest of the layout.

## Page Structure (Full Portfolio)
1. Cover page (name, title, tagline, contact, QR code to portfolio/LinkedIn)
2. Executive summary / dashboard
3. Executive profile (biography)
4. Core competencies
5. Professional timeline
6. Business portfolio (per company)
7. Key achievements
8. Case studies
9. Leadership philosophy & values
10. Education & certifications
11. Testimonials (reserved layout)
12. Contact / closing page

## Print & Digital Specs
- **Print:** US Letter or A4 (confirm which is standard for your intended audience — A4 for most Philippine institutional/government use), 300 DPI, CMYK color profile, 0.125in bleed if full-bleed color blocks are used
- **Digital PDF:** RGB color profile, embedded/subset fonts, hyperlinks live (LinkedIn, website, email), file size optimized under 5MB for easy email distribution
- **File naming:** `Alcaraz_Cherrylyn_Executive_Portfolio_2026.pdf` (professional, dateable, easy to find in an inbox)

## Recommended Production Tools
Given the content is finalized in Markdown here, the fastest path to the final visual document is Canva (business/executive template categories) or a design tool like Figma/Adobe InDesign if you want full custom control. I can also generate an HTML/web preview of the cover page and dashboard for visual reference before you commit to a production tool — let me know if that's useful.
