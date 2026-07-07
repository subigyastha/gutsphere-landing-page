# Gutsphere Site Plan — Navigation, Landing Content, Footer

Model: ploy.ai's IA (few top-level items, dropdowns for depth, one primary CTA,
inset dark footer as a site index). Context: gutsphere.com's real content
(testimonials, FAQ, trust pillars, conditions, pricing).

Run: 2026-07-07. Companion doc: `improvement-backlog.md`.

---

## 1. Site map

### Live now
| Route | Role |
|---|---|
| `/` | Landing — the single conversion page |
| `/conditions/:slug` | Condition stubs: ibs, ibd, gerd, constipation, bloating, diarrhea |
| External | gutsphere.com/about-us, /privacy, /contact-us, newsletter.gutsphere.com, YouTube, Instagram |

### Phase 2 (when content is ready)
| Route | Role | Ploy analog |
|---|---|---|
| `/pricing` | Standalone pricing + plan FAQ | Pricing |
| `/conditions` | Conditions hub index | Solutions |
| `/inside-the-system` | Deep dive: the 12 problems → 12 solutions → twelve moves (gutsphere.com's long-form content) | Product pages |
| `/vs/:competitor` | Gutsphere vs symptom trackers / ChatGPT / telehealth / test kits — SEO comparison pages seeded from the landing compare table | "Ploy vs X" pages |
| `/guides` | Curated content library (newsletter + YouTube items already in `constants.ts`) | Resources/Library |

Principle (from ploy): the landing page sells the system; depth lives on
dedicated pages that the nav and footer index. Don't stuff depth into `/`.

---

## 2. Fixed navbar plan

Keep the current floating-pill chrome. Content changes by phase.

### Phase 1 — now (anchors + existing routes only)

```
[● Gutsphere]  Explore ▾   Conditions ▾   Your journey   Pricing        [Log in] [Start free]
```

| Item | Type | Target |
|---|---|---|
| Explore ▾ | dropdown | How it works `#system` · One flare, start to finish `#walkthrough` · Our promise `#honest` · Compare group (`#compare`, `#difference`) |
| Conditions ▾ | dropdown | IBS · IBD · GERD · Constipation · Bloating · Diarrhea (`/conditions/:slug`) + "Not sure? Start here" → `#start` |
| Your journey | direct link | `#journey` — the signature interactive; ploy gives its signature ("The Ploy Effect") a top-level slot, we do the same |
| Pricing | direct link | `#pricing` |
| Log in | ghost pill | app login URL |
| Start free | coral pill | `#start` (picker), later signup URL |

Rules:
- Max 4 nav items + 2 actions. Ploy holds to ~6 slots; more kills the pill layout.
- One primary CTA everywhere: **Start free**. "Log in" is the only secondary.
- Active-section highlight via IntersectionObserver (shipped). The nav stays
  full at all scroll depths — collapse-on-scroll was tried and removed
  (decision 2026-07-07: always display the full navbar).
- Comparisons live as a labeled "Compare" group inside the Explore dropdown
  (Why one system `#compare` · The difference `#difference`) rather than a
  5th top-level item — keeps the pill within budget. Same group repeats in
  the mobile sheet and as a footer column seeding future `/vs/*` pages.
- Mobile: brand + hamburger + Start free (already shipped). Dropdowns become
  grouped sections inside the sheet.

### Phase 2 — when pages exist
- Explore ▾ gains: Inside the system, Guides
- Explore ▾ Compare group items point to `/vs/:competitor` pages instead of `#compare`
- Conditions ▾ gains: "All conditions" hub link
- Pricing points to `/pricing`
- Optional 5th item: Resources ▾ (Guides · Newsletter · YouTube · FAQ)
- Footer Integrations column (currently "coming soon" placeholders: Apple
  Health, Google Fit, Oura & wearables, lab import, EHR export) becomes real
  links when integrations ship

---

## 3. Landing page content plan

### Keep on `/` (in order)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Hero + copilot picker | built | Add above-fold CTA (backlog #1) |
| 2 | **Proof strip** | NEW | Real gutsphere.com testimonials — "Trusted by 2,341 navigators" + 3 rotating quotes (backlog #2). Ploy puts proof directly under the hero |
| 3 | Problem (3 pains) | built | Keep 3 of gutsphere.com's 12 pains; full 12 → `/inside-the-system` later |
| 4 | Journey map | built | Add scroll-into-view teaser animation (backlog #6) |
| 5 | Name or no name | built | — |
| 6 | System (4 stages) | built | — |
| 7 | Walkthrough | built | Restyle as timestamped "copilot never sleeps" feed (backlog #5) |
| 8 | Compare table | built | Seeds future `/vs/*` pages |
| 9 | The difference | built | — |
| 10 | **Trust band** | NEW | From gutsphere.com: Clinician validation · Privacy (private by default, you control export) · Safety language (red-flag guidance). Sits before pricing — trust at the moment of purchase |
| 11 | Honesty | built | Reword "no fake testimonials" → "every quote on this page is from a real user" once proof strip ships |
| 12 | Pricing | built | ⚠ see pricing decision below |
| 13 | **FAQ** | NEW | 6–8 questions from gutsphere.com's real FAQ (medical advice, data/privacy, daily tracking, works with my doctor, which conditions, cancel) + FAQPage JSON-LD (backlog #4) |
| 14 | Final CTA + app badges | built | Add risk-reversal fineprint (backlog #11) |

### Keep off `/`
- Per-condition depth → `/conditions/:slug`
- 12 problems / 12 solutions / twelve moves → `/inside-the-system` (phase 2)
- Guides/content library → external newsletter/YouTube links, later `/guides`

### ✅ Pricing decision — RESOLVED (2026-07-07)
Source of truth: the new landing pricing — Free / **$9 mo** / **$69 yr**
(founding annual, locked in). gutsphere.com should be updated to match.

---

## 4. Footer plan

Keep the inset dark shell. Content grid:

```
[● Gutsphere]  tagline                          [newsletter email capture]  → Contact us
─────────────────────────────────────────────────────────────────────────────
Conditions        Compare           Your journey        Integrations        Company
IBS               Why one system    Finding answers     (coming soon)       Pricing
IBD               vs Trackers       In treatment                            FAQ
GERD              vs ChatGPT        Living with it                          Our promise
Constipation      vs Telehealth     Getting ahead                           About
Bloating          vs Test kits                                              Contact
Diarrhea          The difference                                            Newsletter
                                                                                  YouTube · Instagram
                 All conditions →
─────────────────────────────────────────────────────────────────────────────
Works alongside: IBS · IBD · GERD · … · celiac, SIBO, gastroparesis & more
Medical disclaimer (keep verbatim)
─────────────────────────────────────────────────────────────────────────────
© 2026 Gutsphere        Privacy · Terms        [social icons]
```

Changes vs current footer:
- Add **newsletter email capture** in the top row (real asset:
  newsletter.gutsphere.com) — ploy's footer email field is its second
  conversion path
- Product column gains FAQ link
- New Conditions column (footer = SEO index, like ploy's integrations list)
- Company column gains Newsletter / YouTube / Instagram (real channels from
  `constants.ts`)
- Bottom row gains social icons

---

## 5. Build order

1. ~~Navbar Phase 1: Product + Conditions dropdowns, active-section highlight,
   collapse-on-scroll~~ ✅ shipped 2026-07-07
2. ~~Footer: newsletter capture + Conditions column + social row~~ ✅ shipped 2026-07-07
3. ~~Landing: proof strip (#2), trust band (#10), FAQ (#13)~~ ✅ shipped 2026-07-07
4. ~~Resolve pricing discrepancy, then P0 backlog items (hero CTA, sticky mobile
   CTA, contrast)~~ ✅ shipped 2026-07-07 ($69/yr confirmed as source of truth)
5. Phase 2 pages as content becomes available
