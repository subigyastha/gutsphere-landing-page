# Landing Page Improvement Backlog

Audit of the copilot-v2 landing page (`/`) against ploy.ai patterns and the
landing-page conversion checklist. Run: 2026-07-07. Updated: 2026-07-13.

Work through these top to bottom. Check items off as they ship.

---

## Shipped since launch (2026-07-13)

- [x] Fix name-no-name images missing in production (root cause: `.gitignore` `Images/` matched `public/images/` on Windows case-insensitive git)
- [x] Fix mojibake titles (`Gutsphere â€” …` → proper UTF-8 em dashes in `index.html`)
- [x] OG/Twitter card with logo + hero message (`public/og-image.jpg`, meta width/height/alt)
- [x] Mobile footer flicker from sticky CTA layout thrash (always-reserve padding; no backdrop-filter; hysteresis)
- [x] Delete unrouted lab trees (`flight/`, `guided/`, `v2/`, `style4/`, etc.) + `LandingLayout`
- [x] Split legacy lab CSS out of global `index.css` (tokens/base only; styles live in `copilot-v2.css` / `marketing-pages.css` / `who-for.css`)
- [x] Convert problem GIFs to WebM/MP4 + poster frames (GIF kept as fallback)
- [x] Privacy + Terms pages on-site (`/privacy`, `/terms`)

---

## P0 — Conversion & accessibility blockers

### 1. No CTA above the fold (desktop + mobile)
- [x] Add primary CTA + secondary "See how it works →" pair under the hero subhead (2026-07-07)
- [x] Add a sticky mobile CTA bar (`src/components/copilot-v2/StickyCTA.tsx`) (2026-07-07)

### 2. Zero proof on the page — real testimonials sit unused
- [x] Add a testimonial strip (3-card grid) under the hero — `ProofSection` (2026-07-07)
- [ ] Reconcile wording in the honesty section ("no fake testimonials" → point at the real ones)

### 3. Body text fails WCAG AA contrast
- [x] Switch card body copy to `--gs-text-secondary` (2026-07-07)

### 4. No FAQ section
- [x] Add native `<details>` FAQ section (7 questions) — `FAQSection` (2026-07-07)
- [x] Add matching FAQPage JSON-LD to `index.html` (2026-07-07)

---

## P1 — Ploy-style engagement upgrades

### 5. Restyle walkthrough as a "copilot never sleeps" activity feed
Direct analog of Ploy's overnight agent feed.

### 6. Journey map is dead until clicked
- [ ] When the section enters the viewport, fly the plane a teaser distance or auto-advance to stage 1

### 7. Phone mockup has a large empty band mid-screen
- [ ] Add 2–3 more mock rows, or cycle through 2–3 screens

### 8. Desktop layout is heavily left-weighted
- [ ] Widen the picker to full container width
- [ ] Pair walkthrough/honesty with a right-side visual or pull-quote

---

## P2 — Structure, performance, polish

### 9. Bundle / code splitting
- [x] Route-level code splitting with `React.lazy` in `src/App.tsx` (active marketing routes)
- [x] Removed unrouted lab landings from the bundle (2026-07-13)

### 10. Persona strip ("Who it's for")
- [x] Dedicated `/for` + `/journey` hubs cover this better than an on-page strip

### 11. Final CTA lacks risk reversal and concreteness
- [ ] Add fineprint under final CTA ("Free to start · no card") if not already visible on mobile band
- [ ] Make the promise concrete ("Log your first day in 12 seconds — free")

### 12. Announcement banner
- [ ] Thin bar: "Founding pricing — $69/yr locked for good for early members"

---

## P3 — SEO / infrastructure (follow-up)

### 13. Prerender / SSR for marketing URLs
SPA meta works for crawlers that execute JS, but social/link previews and some bots still prefer HTML-in-response.

Options (pick one):
1. **Vite SSR / Vite plugin SSR** for key routes (`/`, `/for`, `/about`, `/faq`, `/privacy`, `/terms`, hubs)
2. **`vite-plugin-prerender` / `react-snap`-style** static HTML generation at build for listed paths
3. **Vercel Edge middleware** that injects route-specific `<title>` / OG tags into `index.html` for bots

Recommended next step: prerender the static marketing path list already in `public/sitemap.xml` at build time so OG + H1 exist without waiting on hydration.

### 14. Remaining conversion polish
- Honesty-section copy reconciliation (see §2)
- Journey map auto-teaser (§6)
- Founding pricing banner (§12)
- Procedure-prep pages: audience-specific variants (colonoscopy / endoscopy) — see content brief from 2026-07-13

---

## Notes

- CTA labels: hero picker CTA is dynamic ("Start free & make this yours") while
  nav/pricing say "Start free" — acceptable as a feature, but keep the base
  label consistent everywhere else.
- JSON-LD (SoftwareApplication + FAQPage) present in `index.html`.
- Fonts already load with `display=swap`; analytics hooks (`data-cta="primary"`)
  already in place.
- After deploy: re-scrape OG with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) / Twitter card validator so caches pick up the new `og-image.jpg`.
