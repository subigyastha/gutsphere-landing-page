# Cloudflare Pages — Gutsphere marketing launch plan

**Decision:** Host this React SPA on **Cloudflare Pages** (DNS already on Cloudflare).  
**Date:** 2026-07-13  
**Companion:** `docs/deployment-readiness-report.html`

---

## Part A — Complete Cloudflare Pages steps

### A1. Repo prep (do before connecting Pages)

1. Commit and push all production assets (`public/images/**`, `og-image.jpg` / `images/web-image.png`, `robots.txt`, `sitemap.xml`).
2. Confirm build locally:
   ```bash
   npm install
   npm run build
   npm run preview
   ```
3. Cloudflare-specific files (in this repo):
   - `public/_redirects` — Webflow URL → SPA redirects (301)
   - `public/_headers` — optional cache headers
   - `public/llms.txt` — AI crawler overview
4. **Do not** add a root `public/404.html` — without it, Pages treats the project as an SPA and serves `index.html` for client routes.
5. Optional: add `.nvmrc` with `20` (or set `NODE_VERSION=20` in Pages).

### A2. Create the Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select this landing repo.
3. Build settings:

   | Field | Value |
   |-------|--------|
   | Production branch | `main` (or your default) |
   | Framework preset | Vite (or None) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (repo root) |
   | Environment variable | `NODE_VERSION` = `20` |

4. Deploy → note the preview URL: `https://<project>.pages.dev`.

### A3. QA on `*.pages.dev` (before touching `www`)

Use `docs/deployment-readiness-report.html` plus:

- [ ] `/` — NameNoName images, hero demo iframe (`demo.gutsphere.com`)
- [ ] Deep refresh: `/about`, `/conditions/ibs`, `/compare/symptom-trackers`, `/privacy`, `/terms`
- [ ] Unknown path → in-app 404
- [ ] Legacy Webflow paths via `_redirects` (e.g. `/about-us` → `/about`)
- [ ] CTAs → `app.gutsphere.com` with UTMs
- [ ] Footer newsletter form posts to Substack subscribe endpoint
- [ ] `/robots.txt`, `/sitemap.xml`, `/llms.txt`

Optional: bind `staging.gutsphere.com` to this Pages project for team review.

### A4. Custom domain cutover (from Webflow)

1. Pages project → **Custom domains** → add `www.gutsphere.com`.
2. Cloudflare (same zone) will usually create/update the DNS record. Confirm:
   - `www` → Pages target (CNAME), proxied (orange cloud) recommended.
3. Add apex rule: `gutsphere.com` → `https://www.gutsphere.com` (301) via **Redirect Rules**.
4. SSL/TLS: **Full (strict)**.
5. Lower TTL on `www` to ~300s one day before cutover (if currently high).
6. Cutover day:
   - Ensure latest production deploy on Pages is green.
   - Point `www` at Pages (remove Webflow CNAME).
   - **Do not change** `app`, `demo`, `newsletter` records.
7. Keep Webflow project live 1–2 weeks for rollback.
8. If assets look stale: Caching → **Purge Everything**.

### A5. Post-cutover

- [ ] Search Console: submit `https://www.gutsphere.com/sitemap.xml`
- [ ] Re-scrape OG image (Facebook / LinkedIn / Twitter card tools)
- [ ] Spot-check Webflow redirects from the matrix in Part B
- [ ] Wire analytics (Part C) if not already in `index.html`
- [ ] Downgrade/cancel Webflow when stable

---

## Part B — Extracted Webflow site map vs this SPA

Source: live `https://www.gutsphere.com/sitemap.xml` (2026-07-13).

### B1. Covered by SPA (same or better path)

| Webflow URL | SPA target | Action |
|-------------|------------|--------|
| `/` | `/` | Direct |
| `/about-us` | `/about` | **301** |
| `/privacy` | `/privacy` | Direct |
| `/terms-and-conditions` | `/terms` | **301** |
| `/ibs` | `/conditions/ibs` | **301** |
| `/ibd` | `/conditions/ibd` | **301** |
| `/gerd` | `/conditions/gerd` | **301** |
| `/constipation` | `/conditions/constipation` | **301** |
| `/bloating` | `/conditions/bloating` | **301** |
| `/diarrhea` | `/conditions/diarrhea` | **301** |
| `/pricing` | `/#pricing` | **301** (until `/pricing` page exists) |
| `/gi-health-copilot` | `/` | **301** |
| `/copilot-demo` | `/` (hero demo) | **301** |

### B2. Not in SPA yet — keep redirects or build later (Part E)

| Webflow URL | Role | Interim redirect | Phase 2 page |
|-------------|------|------------------|--------------|
| `/contact-us` | Contact form | Keep Webflow **or** build `/contact` | **Build `/contact`** |
| `/advisory` | Advisory form | Keep Webflow **or** build `/advisory` | **Build `/advisory`** |
| `/resources` | Resources hub | `/` or `/resources` stub | **Build `/resources`** |
| `/downloadable-resources` | Downloads | → `/resources` later | Build under resources |
| `/gut-health-baseline-quiz` | Quiz | Soft 301 → `/` or keep | Decide keep vs rebuild |
| `/roadmap` | Product roadmap | Soft 301 → `/` or `/about` | Optional page |
| `/colonoscopy-preparation-sms-reminders` | Feature/content | → `/features/colonoscopy-prep` | Already have feature page |
| Content/guides (many) | SEO articles | Soft 301 → `/resources` or Substack | Resources + newsletter |
| `/test1` | Junk | **410 or 301 → /** | Delete |

### B3. Content / guide URLs on Webflow (SEO — do not drop silently)

These are **not** in the React SPA yet. Plan: redirect to closest SPA page **or** rebuild under `/resources` / Substack:

- `/thanksgiving-checklist`
- `/bowel-movement-tracking-esophagus-to-anus`
- `/generative-ai-resources`
- `/ai-agents-in-healthcare`
- `/children-gut-health-guide`
- `/bacteria-gut-microbiome`
- `/bacteria-gastrointestinal-diseases`
- `/gut-loving-chia-breakfast-delight`
- `/how-the-food-you-eat-affects-your-gut`
- `/how-to-poop-fast`
- `/boost-your-gut-health-with-fiber`
- `/the-5-essential-pillars-of-a-healthy-gut`
- `/know-your-poop-guide`
- `/fix-your-gut-bacteria-fast`
- `/seven-day-gut-repair-plan`
- `/probiotic-cheat-sheet`
- `/gut-brain-food-guide`
- `/laxative-ladder-protocol`

**Rule:** Prefer **301 to a real destination** (resources hub, matching condition, or Substack post) over soft 404 after cutover.

---

## Part C — Analytics & tools extracted from live Webflow

Detected on homepage HTML (2026-07-13):

| Tool | ID / signal | Status in React SPA | Action |
|------|-------------|---------------------|--------|
| **Google Tag Manager** | `GTM-5ZCP7TNW` | Not wired | Add GTM snippet to `index.html` (preferred — loads GA etc.) |
| **Google Analytics 4** | `G-FLM2GR9L49` (via GTM likely) | Placeholder removed earlier | Prefer via GTM; or direct gtag |
| **Mixpanel** | `76c3a63f60575cde28d455570ccba13d` | Not wired | Add Mixpanel init + map CTA events from `analytics.ts` |
| **Hotjar** | `6484334` | Not wired | Add Hotjar script (or via GTM) |
| **Microsoft Clarity** | Referenced in page markup | Confirm ID in Webflow/GTM | Add via GTM or Clarity script |
| **Bing Webmaster / UET** | Not clearly found in HTML | Unknown | Check Bing Webmaster dashboard; add UET if ads use Bing |
| **ShareThis** | property `66fbd6eb0661ee0019d47aea` | Not needed | Skip unless marketing wants share buttons |
| **Segment** | Keyword hit (verify if live) | Not wired | Confirm in GTM; only add if still used |

### Recommended analytics approach

1. **Install GTM `GTM-5ZCP7TNW`** in `index.html` (same container as Webflow if possible — preserves history).
2. Keep existing SPA helper `src/analytics.ts` for `cta_click` — push to `dataLayer` and/or Mixpanel.
3. Move Hotjar / Clarity / Mixpanel into **GTM** where possible (marketing can edit without deploys).
4. After cutover: verify in GTM Preview + Mixpanel Live View + Hotjar recordings.

### Newsletter / Substack (already partially wired)

| Item | Current |
|------|---------|
| Newsletter site | `https://newsletter.gutsphere.com/` |
| Footer form | POST to `https://newsletter.gutsphere.com/subscribe` (CopilotFooter) |
| Goal | Embed Substack subscribe **inline** (no redirect) — see Part E |

---

## Part D — `llms.txt`

File: `public/llms.txt` (served at `https://www.gutsphere.com/llms.txt`).

Purpose: help AI crawlers understand the product, key URLs, and what not to invent. Update when major pages ship (resources, contact, advisory).

Also consider later: `llms-full.txt` with longer product copy if you want richer LLM context.

---

## Part E — Post-deployment backlog (remaining Webflow work)

### E1. Priority pages to build in the SPA

| Priority | Page | Why | Notes |
|----------|------|-----|--------|
| P0 | `/contact` | Footer still points at Webflow `/contact-us` | Replace Webflow form; update `CONTACT_URL` |
| P0 | `/advisory` | Live Webflow advisory form | Same UX as Webflow; capture leads |
| P1 | `/resources` | Many SEO URLs + downloads hub | Index of guides + downloadable PDFs |
| P1 | Inline Substack subscribe | Footer already posts to Substack; improve UX | Embed official Substack form / API; avoid leaving site |
| P2 | Guide articles | Preserve SEO from Webflow content URLs | MD/CMS or static pages under `/resources/:slug` |
| P2 | `/pricing` standalone | Optional; homepage `#pricing` exists | Redirect `/pricing` already planned |

### E2. Contact form

**Webflow today:** native Webflow form (`wf-form-Contact-05-form`) — submissions stay in Webflow until you leave.

**SPA options (pick one):**

1. **Formspree / Getform / Basin** — POST from React form (fastest).
2. **Cloudflare Workers + email** (Resend/SendGrid) — stays on Cloudflare.
3. **Web3Forms / similar** — no backend.

Fields to match Webflow: name, email, message (+ optional topic). Success state + spam honeypot.

Update `CONTACT_URL` in `src/constants.ts` from  
`https://www.gutsphere.com/contact-us` → `/contact`.

### E3. Advisory form

**Webflow today:** `wf-form-Advisory-Form` on `/advisory`.

Rebuild `/advisory` in SPA with same fields; submit to same provider as contact (or CRM).  
Add `_redirects`: `/advisory` stays `/advisory` once built; until then either keep Webflow path via **Cloudflare Split** (hard) or soft-launch advisory after contact.

**Practical cutover:** Build `/contact` + `/advisory` **before** or **immediately after** DNS flip so forms never break.

### E4. Substack — direct subscribe (no redirect)

Current footer:

```text
action = https://newsletter.gutsphere.com/subscribe
```

Improve to:

1. Keep POST-to-Substack subscribe (works cross-origin if Substack accepts it), **or**
2. Embed Substack’s official embed iframe / custom form for `newsletter.gutsphere.com`, **or**
3. Use Substack API if available for your publication.

Goal: user stays on `www.gutsphere.com`; confirmation message in-page.

Also link archive: `NEWSLETTER_ARCHIVE_URL` already in constants.

### E5. Resources hub

Ship `/resources` that lists:

- Downloadable PDFs (from `/downloadable-resources`)
- Guide links (migrate high-traffic Webflow articles first)
- Newsletter / YouTube / Instagram (already in `constants.ts` curated content)

Then 301 old guide URLs → new `/resources/...` slugs.

---

## Part F — Suggested timeline

| Week | Work |
|------|------|
| **0** | Pages project + `*.pages.dev` QA; finalize `_redirects`; GTM + Mixpanel on preview |
| **1** | Build `/contact` + `/advisory` + Substack inline; staging domain QA |
| **2** | DNS cutover `www` → Pages; monitor 404s & analytics |
| **3–4** | `/resources` hub + top SEO article redirects |
| **5+** | Remaining guides; retire Webflow |

---

## Part G — Quick reference commands

```bash
# Local
npm install
npm run build
npm run preview

# After push: Cloudflare builds automatically
# Manual deploy (optional): wrangler pages deploy dist --project-name=gutsphere-landing
```

---

## Decision summary

| Topic | Choice |
|-------|--------|
| Host | **Cloudflare Pages** |
| Domain | One-time `www` DNS flip in Cloudflare (already your DNS) |
| SPA routing | Automatic (no root `404.html`) |
| Webflow URLs | `_redirects` + post-launch pages for gaps |
| Analytics | Restore **GTM** (+ Mixpanel / Hotjar via GTM) |
| Forms | Rebuild contact + advisory in SPA; Substack inline subscribe |
| AI | `llms.txt` at site root |
