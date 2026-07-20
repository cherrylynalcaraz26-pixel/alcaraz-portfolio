# Executive Portfolio — React + Tailwind

A single-page implementation of the executive portfolio, built on the content and design system in `../content/` and `../assets/`.

## Design decisions

- **Typography:** Newsreader (display serif, used italic for role lines and pull quotes) paired with Inter (body) and IBM Plex Mono (data — stat values, dates, labels, tabular numbers).
- **Color:** CSS custom properties in `src/index.css`, consumed through Tailwind's `darkMode: "class"` — the accent is a refined brass/gold pulled from the CHEM Tourist and Transport logo (`#7A5F22` light / `#CBA352` dark), with CDSC Industrial Supply's orange (`#E0480A`) scoped to its own card in the Business Portfolio section only.
- **No headshot:** the cover is fully typographic by design (see `../content/design-guidelines.md`), not a placeholder.
- **Theme toggle:** respects `prefers-color-scheme` on first load, remembers the visitor's explicit choice in `localStorage`, and applies before paint (inline script in `index.html`) to avoid a flash.
- **Data:** all real content lives in `src/data/portfolio.ts` as a single typed source of truth — no content is hardcoded into components.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Still open

Same gaps as the markdown package: LinkedIn/website URL (`profile.linkedin` in `src/data/portfolio.ts`), corporate client count, and revenue managed. Update `src/data/portfolio.ts` directly — every component reads from there.
