# Gutsphere Landing Page — Persona Review

**Last updated:** 2026-07-03  
**Variants reviewed:** Record (`/`), You (`/navigators`), Clarity (`/clarity`)  
**Method:** Each persona is evaluated across all three variants before moving to the next persona. Scores are relative (1–5) for that persona’s needs, not absolute quality.

**How to use this file:** Update after every review pass. Add a changelog entry at the bottom. V2 work should reference open items here before copy or structure changes.

---

## Variant snapshot

| Variant | Route | Core promise | Sections | Best guess audience |
|---------|-------|--------------|----------|-------------------|
| **Record** | `/` | The missing record between symptoms and answers | 14 + founder story | High-intent, wants depth and proof |
| **You** | `/navigators` | Direct “you” address + validation + peer stories | 8 | Mixed traffic, emotional connection fast |
| **Clarity** | `/clarity` | Know what’s wrong. Know what to do. | 10 + condition hub + content | Older readers, lower cognitive load |

---

## Persona 1: The Uncertain Explorer

**Who they are:** Recurring digestive symptoms, confused by conflicting online info, wonders if symptoms connect but can’t see patterns.

**Core need:** Clarity · Understanding · Validation · A starting point

**Inner monologue:** *"Something isn't right, but I don't know what's causing it."*

### Record (`/`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | 3/5 | Strong concept (“missing record”) but jargon-heavy for someone who doesn’t have a framework yet. |
| Validation | 4/5 | `UndiagnosedSection` speaks directly to “no label yet.” `HighSeveritySection` names real symptoms. |
| Starting point | 2/5 | CTA is “Start free” with no “start here if you’re confused” path. Founder story at #2 delays problem-solution. |
| Conflicting-info anxiety | 2/5 | Long page adds more concepts (hidden labor, not a tracker, etc.) before answering “what do I do first?” |

**What works**
- Eyebrow: “symptoms are no longer background noise” — matches their felt experience.
- `UndiagnosedSection` lists symptoms without requiring IBS/IBD label.
- `MissingRecordSection` visual (care sees vs you live) makes the “gap” tangible.

**Gaps / criticism**
- Hero assumes they already understand “record” — Explorer may not.
- Founder section (#2) is heavy before validation; feels like brand story, not *their* story.
- `FounderBridge` quotes in problem sections break immersion (“who is Bimal?”).
- No entry quiz, symptom picker, or “I feel bloated / irregular / both” fork in hero.
- Product mockup shows “3 patterns noticed” — implies app already knows; Explorer hasn’t started.

**V2 direction for Record (Explorer)**
- Move validation + undiagnosed content above founder (or founder capsule only).
- Hero subline in plain language: “Log what you notice. See what connects.”
- Add hero secondary path: “Not sure where to start?” → condition hub or 3-symptom chooser.
- Remove or relocate `FounderBridge` lines.

---

### You (`/navigators`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | 4/5 | Appointment-focused H1 is concrete. Validation section names undiagnosed/limbo. |
| Validation | 5/5 | Strongest of three: “you’re not imagining it,” “not broken — record is missing.” |
| Starting point | 3/5 | Better emotional entry; still jumps to “build a record” before “log one symptom.” |
| Conflicting-info anxiety | 4/5 | Shorter page, less concept stacking. Peer stories normalize confusion. |

**What works**
- `ValidationSection` is the best Explorer fit on any variant.
- “No diagnosis required” repeated in hero + validation + FAQ.
- Testimonial at hero (“before your next visit”) is relatable without requiring diagnosis.

**Gaps / criticism**
- H1 centers appointments — Explorer may not have a visit scheduled yet.
- `YourRecordSection` “trackers vs story” is abstract; Explorer doesn’t know what a tracker is yet.
- No free educational content above fold (Clarity has this later).
- `FounderCapsule` still interrupts flow before FAQ.

**V2 direction for You (Explorer)**
- Alternate hero H1 option: “Something feels off. Start making sense of it.”
- Add micro-step CTA: “Log your first symptom (free)” vs generic signup.
- Surface 1–2 content cards (stool color, bloating) before founder.
- Condition/symptom fork link in hero.

---

### Clarity (`/clarity`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Clarity | 5/5 | Tagline + “calm the worry” maps to emotional outcome. Large type helps. |
| Validation | 3/5 | Stakes compare is logical, not deeply empathetic (“you’re not imagining it” missing). |
| Starting point | 5/5 | **Condition hub** (“what feels closest to you?”) is the best Explorer entry on the site. |
| Conflicting-info anxiety | 5/5 | Content library offers free guides without signup; reduces fear of wrong choice. |

**What works**
- Condition hub + “not sure? start anyway” link.
- Free guides & videos section answers “I’ve been googling” behavior.
- 3-step how-it-works is low friction.
- Stats (60–70M) normalize prevalence without clinical tone.

**Gaps / criticism**
- Hero “Know what’s wrong” may overpromise before they’ve logged anything — Explorer could feel skeptical.
- Phone screenshot placeholders weaken trust (“is this real?”).
- Credibility (Bimal) at #2 — same ordering issue as Record for cold Explorer traffic.
- FAQ only 3 questions — Explorer has many basic fears (privacy, “is my data safe,” “will this diagnose me”).

**V2 direction for Clarity (Explorer)**
- Soften hero: “Start understanding your symptoms” with tagline as subline.
- Move condition hub **up** (after hero or integrated in hero).
- Add Explorer FAQ: “I don’t have a diagnosis — is this for me?” (explicit).
- Replace placeholder screenshots or add “app preview” label.

---

### Persona 1 — Variant ranking

1. **Clarity** — condition hub + content + simple structure  
2. **You** — validation and direct address  
3. **Record** — depth but high cognitive load for confused newcomer  

**Cross-variant V2 priority (Explorer):** Symptom/condition entry point in hero on all variants; validation before founder; free content teaser above fold on Record and You.

---

## Persona 2: The Pattern Seeker

**Who they are:** Suspects triggers, has tried diet/routine changes, notices possible connections but lacks confidence, tired of guessing.

**Core need:** Trigger identification · Pattern recognition · Better decisions · Confidence

**Inner monologue:** *"I know there are patterns. I just need help finding them."*

### Record (`/`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pattern recognition | 5/5 | `MissingRecordSection`, `ProductProofSection`, mockup “patterns noticed” — strongest product story. |
| Trigger identification | 4/5 | `NotATrackerSection`, food experiments mockup, daily value “try/ask.” |
| Confidence | 3/5 | Proof is there but buried under 14 sections. |
| Decision support | 4/5 | `DailyValueSection` (understand / ask / try) matches Pattern Seeker loop. |

**What works**
- Product mockups (timeline, food experiments, visit brief) show *pattern output*.
- `HowItWorksSection` step 2: “connect what keeps happening.”
- Contrast sections explain why scattered notes fail pattern-finding.

**Gaps / criticism**
- Pattern value not in hero — must scroll past founder + social proof.
- `HiddenLaborSection` resonates but doesn’t show “here’s a pattern we found.”
- No example insight card in hero (e.g. “coffee → bloating 3 of 5 days”).
- Mid-page CTAs use “navigators” language on Record — wrong frame for this persona.

**V2 direction for Record (Pattern Seeker)**
- Hero: add one concrete pattern example or animated mockup insight.
- Collapse or merge problem sections; elevate `ProductProof` + `DailyValue` higher.
- CTA copy: “Find your patterns” not only “Start free.”

---

### You (`/navigators`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pattern recognition | 4/5 | `YourRecordSection` pillar “what connects over time” — clear but text-only. |
| Trigger identification | 3/5 | Validation beats don’t mention food/stress experiments. |
| Confidence | 4/5 | Peer stories (“coffee in the morning and bloating later”) — perfect Pattern Seeker quote. |
| Decision support | 3/5 | How-it-works mentions patterns; no product visual of a trigger map. |

**What works**
- Christopher Hall testimonial is literal Pattern Seeker voice.
- Three pillars map to feel → connect → doctor.

**Gaps / criticism**
- Hero prioritizes appointment memory over pattern-finding.
- Product mockup under testimonial — small secondary placement.
- No “food experiment” or “trigger map” language in hero.

**V2 direction for You (Pattern Seeker)**
- Hero subline: “Connect meals, stress, and symptoms — see what keeps repeating.”
- Feature peer quote that mentions pattern discovery prominently.
- Add one product screenshot slot showing pattern/insight UI.

---

### Clarity (`/clarity`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pattern recognition | 3/5 | App showcase mentions patterns; placeholders hurt credibility. |
| Trigger identification | 4/5 | Content library (yellow poop, mucus, stool color) supports self-education while tracking. |
| Confidence | 4/5 | Stakes “with Gutsphere: clear next step” speaks to decision fatigue. |
| Decision support | 4/5 | “Daily guidance” feature + guides bridge learn → act. |

**What works**
- Content feed aligns with “I’ve been researching” behavior.
- 3 feature showcase: track → patterns → visit brief is correct arc.

**Gaps / criticism**
- No live product proof of pattern UI (mockup or screenshot).
- Condition hub helps entry but not ongoing pattern workflow.
- Proof stats section is social, not “here’s what patterns look like.”

**V2 direction for Clarity (Pattern Seeker)**
- One “sample insight” card in App Showcase (real copy from mockup).
- Link content cards to in-app tracking CTA (“track this in Gutsphere”).
- Add FAQ: “How is this different from a food diary?”

---

### Persona 2 — Variant ranking

1. **Record** — deepest product/pattern proof (if they reach it)  
2. **Clarity** — content + simple product arc  
3. **You** — strong empathy, weaker pattern demonstration  

**Cross-variant V2 priority (Pattern Seeker):** Show one real pattern insight above fold on every variant; move product proof earlier on Record; align CTAs with “find patterns.”

---

## Persona 3: The Control Reclaimer

**Who they are:** Symptoms affect work, social life, travel, mental health; wants preparedness, organized info, better doctor conversations.

**Core need:** Confidence · Preparedness · Organized health info · Better healthcare conversations

**Inner monologue:** *"I want to stop guessing and start feeling in control."*

### Record (`/`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Preparedness | 5/5 | Visit brief mockup, `HighSeveritySection`, hidden labor — full control narrative. |
| Doctor conversations | 5/5 | “Ask your GI” in mockup; undiagnosed “what you meant to mention.” |
| Organized info | 4/5 | Missing record framing is exactly “one place for everything.” |
| Confidence / control | 4/5 | Long page builds case but may feel overwhelming when they’re already depleted. |

**What works**
- Rachel Adams testimonial (doctor visit prep) — ideal Control Reclaimer quote.
- `ProductProofSection` + doctor mockup = visit-ready summary.
- `HighSeveritySection` acknowledges stakes without fake urgency.

**Gaps / criticism**
- Control narrative starts late (after founder + social proof).
- `FounderBridge` in prep-related sections feels off-topic when they need tools now.
- Page length fights “low energy” state of this persona.
- CTA doesn’t say “walk into your next visit prepared.”

**V2 direction for Record (Control Reclaimer)**
- Hero variant line: “Walk into your next appointment with the full story.”
- Move visit brief / doctor mockup into first screen or hero column.
- Trim to 8–9 sections for v2; keep severity + product proof + FAQ.
- Sticky CTA on mobile: “Prepare for your visit.”

---

### You (`/navigators`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Preparedness | 5/5 | Hero H1 is appointment-rebuild — perfect Control Reclaimer hook. |
| Doctor conversations | 4/5 | Hero testimonial + pillar “what you bring to your doctor.” |
| Organized info | 4/5 | Shorter path to how-it-works step 3 “walk in prepared.” |
| Confidence / control | 4/5 | Direct “you” voice restores agency; less clutter than Record. |

**What works**
- Best hero for this persona across all variants.
- `YourRecordSection` third pillar is visit-focused.
- Shorter scroll to CTA.

**Gaps / criticism**
- No visit brief visual above fold (testimonial text only on desktop right).
- `FounderCapsule` before FAQ delays action when they’re ready to sign up.
- Missing severity acknowledgment (Record’s dark band) — they may feel unseen in crisis moments.

**V2 direction for You (Control Reclaimer)**
- Keep appointment hero; add visit brief mockup beside testimonial.
- One line on flare/urgency: “Especially before a visit or after a bad week.”
- Final CTA: “Prepare for your next visit — start free.”

---

### Clarity (`/clarity`)

| Dimension | Score | Notes |
|-----------|-------|-------|
| Preparedness | 4/5 | Feature 3 “visit-ready summary”; how-it-works step 3. |
| Doctor conversations | 3/5 | Content guides help education; less emphasis on visit export/brief. |
| Organized info | 5/5 | Stakes compare “one record” + app showcase clarity. |
| Confidence / control | 5/5 | “Know what’s wrong / what to do” = control in one line; calm tone. |

**What works**
- Emotional positioning (calm worry) matches control-through-clarity.
- Larger type and 3-item sections respect low-energy users.
- Proof stats + single testimonial (Rachel) without wall of quotes.

**Gaps / criticism**
- No dedicated “prepare for your visit” section or colonoscopy/prep content link.
- Condition hub helps identity but not appointment countdown urgency.
- Placeholder phones undermine “I need something that works now.”

**V2 direction for Clarity (Control Reclaimer)**
- Add “Prepare” content card (colonoscopy prep, questions for GI) featured in content row.
- Visit brief screenshot as priority asset in App Showcase.
- Optional urgency band (calm, not alarmist): “Next appointment in the next few weeks?”

---

### Persona 3 — Variant ranking

1. **You** — hero + direct agency + shorter path  
2. **Record** — richest visit-prep proof (if they endure length)  
3. **Clarity** — strong calm/control framing; needs visit-prep visual proof  

**Cross-variant V2 priority (Control Reclaimer):** Visit-brief visual above fold; appointment-oriented CTA copy; trim Record length; add calm severity acknowledgment on You and Clarity.

---

## Persona × variant matrix (summary)

| Persona | 1st choice | 2nd | 3rd | Single biggest site-wide gap |
|---------|------------|-----|-----|------------------------------|
| **Uncertain Explorer** | Clarity | You | Record | No symptom/condition entry in hero (Record/You) |
| **Pattern Seeker** | Record | Clarity | You | Pattern insight not shown early enough |
| **Control Reclaimer** | You | Record | Clarity | Visit-prep proof buried or placeholder |

---

## Recommended V2 strategy (persona-led)

Do **not** build one generic v2. Build three v2 branches from current winners:

| Variant | V2 codename | Primary persona | Secondary | Core change |
|---------|-------------|-----------------|-----------|-------------|
| Record v2 | **Record** | Pattern Seeker | Control Reclaimer | Shorten; pattern insight in hero; founder demoted |
| You v2 | **You** | Control Reclaimer | Uncertain Explorer | Keep appointment hero; add visit mockup + symptom fork |
| Clarity v2 | **Clarity** | Uncertain Explorer | Pattern Seeker | Condition hub up; soften hero promise; real screenshots |

**Optional fourth route:** Persona picker in preview bar (“I’m exploring / finding patterns / preparing for care”) routing to best v2 — only after individual v2s ship.

---

## Open questions for next review pass

- [ ] Should hero H1 differ by traffic source (ads → Explorer, GI forums → Control Reclaimer)?
- [ ] Is “navigators” language retired everywhere including Record mid-page CTAs?
- [ ] Do condition stub pages get enough depth to retain Explorer after hub click?
- [ ] Persona self-selection: ethical/UX test before implementing?

---

## Changelog

| Date | Change |
|------|--------|
| 2026-07-03 | **V2 shipped** at `/record-v2`, `/navigators-v2`, `/clarity-v2` — persona-led rewrites per plan; v1 routes unchanged; 6-tab preview switcher (dev-only). |
| 2026-07-03 | Initial review: all 3 personas × 3 variants. V2 directions drafted, not implemented. |
