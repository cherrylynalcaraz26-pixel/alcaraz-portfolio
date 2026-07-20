# Cherrylyn Alcaraz — Executive Portfolio Package

This folder contains the executive portfolio deliverables. Remaining gaps are marked with bracketed placeholders like `[PLACEHOLDER: ...]`.

## What's confirmed and used throughout

- Full contact details (Calamba, Laguna | phone | email)
- Title: **Founder & President**, CHEM Tourist and Transport Services OPC
- All 5 business entities: CHEM Tourist and Transport Services OPC (Founder & President), Chef David Catering Services (manager, since 2013), CDSC Industrial Supply (manager), RBJ Seat Master Philippines Co. (bookkeeping & compliance **client** — confirmed as a service relationship, not a partnership), BlueScale Integrated Business Support (Procurement & ERP Systems Consultant)
- Full professional experience, responsibilities, and stated achievements for all three roles
- **Four Featured Projects** — CHEM Transport Management System, RBJ ERP System, BlueScale Procurement Platform, Executive Business Dashboard — confirmed as real, coded systems (React/Next.js/Supabase/SQL/Google Apps Script), written up as full case studies
- Expanded technical skills (React, Next.js, PHP, Python, SQL, Supabase, etc.) — confirmed as real proficiencies
- Core competencies, education (City College of Laguna), and professional development

## A note on what changed in this round

A later brief asked for "Managing Partner, RBJ Seat Master Philippines" and described the four Featured Projects as built software. Both were confirmed with you directly before I wrote anything: RBJ stays a **client** relationship (no equity language used anywhere), and the four projects are real, so they're now written up as genuine engineering case studies with an honest stack list. I did not silently adopt either claim without checking — for something going to banks, investors, and government procurement, an unverifiable ownership or engineering claim is a bigger risk than a placeholder.

## What's still a placeholder

- **LinkedIn URL / website / portfolio URL** — needed on every document's contact line
- **Photo** — you sent both company logos, not a headshot. The design works without one (typographic hero) — not blocking.
- **Project results** — each of the four Featured Projects has a `[PLACEHOLDER: quantified outcome]` — this is the single highest-impact gap left. A real number (time saved, error reduction, adoption) for even one project would meaningfully strengthen the whole portfolio.
- **Exact figures** — corporate client count, revenue managed, % reduction in overtime/idle time from the dispatch restructure, CDSC Industrial Supply founding year
- **Skills proficiency self-ratings** (1-5 scale) in `business-portfolio.md`
- **"Lessons learned"** lines in the project case studies
- **Awards, media features, speaking engagements, volunteer work, professional memberships**
- **Testimonials** — reserved layout, populate as available

I did not invent numbers anywhere the source material didn't already state one — estimated figures would be a liability the moment anyone verifies them.

## Files in this package

| File | Purpose |
|---|---|
| `personal-brand.md` | Brand statement, UVP, elevator pitches (30s/60s), LinkedIn headline, speaking intro, email signature, bios, SEO/metadata |
| `executive-resume.md` | Premium one-page executive resume (designed version, achievement-driven) |
| `executive-resume-ats.md` | Plain-text ATS-safe one-page resume (no graphics, for online applications) |
| `curriculum-vitae.md` | Full chronological CV, no page limit, includes full project case studies |
| `executive-profile-bio.md` | Two-page executive biography (narrative form), synced with the Founder & President title and all four Featured Projects |
| `business-portfolio.md` | Company profiles, competencies, technical skills matrix, quantified achievements, 4 project case studies, executive dashboard, leadership philosophy |
| `design-guidelines.md` | Current live design system: Manrope/Inter, teal/gold palette, layout principles |
| `recruiter-evaluation.md` | An honest external read on the portfolio — strengths, risks a skeptical reader will push on, and a prioritized action list |

## Live site

`/site` is a React + Tailwind CSS implementation (Vite, TypeScript) — now redesigned twice: first to a bold industrial direction, then to the premium modern-corporate teal/gold/glassmorphism system specified in the latest brief, including a new **Featured Projects** section. See `site/README.md`. All copy lives in `site/src/data/portfolio.ts`, so updating a fact updates every section at once. A plain-text resume download is served at `/resume.txt`.

## Recommended next step

See `recruiter-evaluation.md` for a prioritized action list — in short: project results, then a live LinkedIn profile, then proof artifacts for the four systems. Everything else outstanding is a low-stakes placeholder.
