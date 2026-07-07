# Landing Page Improvement Backlog

Audit of the copilot-v2 landing page (`/`) against ploy.ai patterns and the
landing-page conversion checklist. Run: 2026-07-07.

Work through these top to bottom. Check items off as they ship.

---

## P0 — Conversion & accessibility blockers

### 1. No CTA above the fold (desktop + mobile)
The hero shows headline, subhead, and phone mockup, but the only "Start free"
button is in the nav. The picker (the real conversion widget) is a full scroll
away. Ploy shows Start Free + Get Demo immediately under its H1.

- [x] Add primary CTA + secondary "See how it works →" pair under the hero subhead (2026-07-07)
- [x] Add a sticky mobile CTA bar (`src/components/copilot-v2/StickyCTA.tsx`) (2026-07-07)

### 2. Zero proof on the page — real testimonials sit unused
`src/constants.ts` holds 12 real testimonials from gutsphere.com's carousel.
The "radical honesty" section says "no fake testimonials" — which makes the
real ones stronger, not weaker.

- [x] Add a testimonial strip (3-card grid) under the hero — `ProofSection` (2026-07-07)
- [ ] Reconcile wording in the honesty section ("no fake testimonials" → point at the real ones)

### 3. Body text fails WCAG AA contrast
Card copy in Problem, Difference, and Pricing sections uses `--gs-text-muted`
(#a8a29e on white ≈ 2.2:1; AA needs 4.5:1).

- [x] Switch card body copy (`.cp2-pain p`, `.cp2-diff p`, `.cp2-desc`, `.cp2-fnode p`,
      `.cp2-cmp td.stack`, `.cp2-co span`, `.cp2-dx-more`) to `--gs-text-secondary` (2026-07-07)

### 4. No FAQ section
Obvious objections unanswered: "Is this medical advice?", "Will it work for my
condition?", "What happens to my data?", "Can I cancel anytime?".

- [x] Add native `<details>` FAQ section (7 questions) — `FAQSection` (2026-07-07)
- [x] Add matching FAQPage JSON-LD to `index.html` (2026-07-07)

---

## P1 — Ploy-style engagement upgrades

### 5. Restyle walkthrough as a "copilot never sleeps" activity feed
Direct analog of Ploy's overnight agent feed ("An employee that never sleeps").
Same content, timestamped feed framing:
`2:14am · flare logged in 15s` → `2:15am · linked to late meal + short sleep`
→ `7:00am · gentler morning plan ready`.

### 6. Journey map is dead until clicked
Ploy animates everything on scroll-into-view.

- [ ] When the section enters the viewport, fly the plane a teaser distance or
      auto-advance to stage 1

### 7. Phone mockup has a large empty band mid-screen
Content ends at the insight card; "Log today" is pushed to the bottom.

- [ ] Add 2–3 more mock rows (sleep, meals, streak), or
- [ ] Cycle through 2–3 screens (log → pattern → visit summary)

### 8. Desktop layout is heavily left-weighted
Picker (640px), walkthrough (620px), honesty (680px) leave the right half of
the 1080px container empty for several viewports.

- [ ] Widen the picker to full container width
- [ ] Pair walkthrough/honesty with a right-side visual or pull-quote

---

## P2 — Structure, performance, polish

### 9. Bundle is 621KB (163KB gzip)
All 13 landing variants load on every route.

- [ ] Route-level code splitting with `React.lazy` in `src/App.tsx`

### 10. Persona strip ("Who it's for")
Ploy's Enterprise/Agencies/Startups section. Our cohorts are buried in the
journey map preflight card.

- [ ] Standalone strip: Still finding answers / Newly diagnosed / Living with it /
      Staying ahead — each linking into the journey map at that stage

### 11. Final CTA lacks risk reversal and concreteness
Ploy: "Plug in your URL and watch it slurp your whole site in 60 seconds.
Free tier · No card."

- [ ] Add fineprint under final CTA ("Free to start · no card")
- [ ] Make the promise concrete ("Log your first day in 12 seconds — free")

### 12. Announcement banner
Ploy tops the page with its funding note.

- [ ] Thin bar: "Founding pricing — $69/yr locked for good for early members"
      (anchors to #pricing)

---

## Notes

- CTA labels: hero picker CTA is dynamic ("Start free & make this yours") while
  nav/pricing say "Start free" — acceptable as a feature, but keep the base
  label consistent everywhere else.
- JSON-LD (SoftwareApplication) already present in `index.html`; add FAQPage
  when the FAQ section ships.
- Fonts already load with `display=swap`; analytics hooks (`data-cta="primary"`)
  already in place.
