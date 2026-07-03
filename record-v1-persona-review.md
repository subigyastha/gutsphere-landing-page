# Record v1 — Persona Site Review

**Page:** `/` (Record)  
**Reviewed:** 2026-07-03  
**Method:** Persona walk-through for content, keywords, and UI/UX; fixes applied in code.

---

## Page map (before)

```
Hero → Founder (long) → Social proof → CTA → Missing record → Hidden labor →
Undiagnosed → Not a tracker → CTA → How it works → Product proof →
High severity → Daily value → Privacy → FAQ → Final CTA
```

**Issues:** 14+ sections, founder at #2, `FounderBridge` in 6 places, no content library, 4 testimonial cards, weak Explorer entry.

---

## Persona 1: Uncertain Explorer

| Step | Reaction |
|------|----------|
| Hero | "Missing record" jargon — needs plain language + starting path |
| Founder #2 | Brand story before their story — bounce risk |
| Undiagnosed #7 | Strong but buried |
| No guides | Googling behavior unaddressed |

**Fixes:** Validation after hero; symptom fork in hero; content library; founder demoted to capsule

---

## Persona 2: Pattern Seeker — primary fit

| Step | Reaction |
|------|----------|
| Missing record visual | Strong — care vs you live |
| Product proof | Good — needs earlier pattern cue in hero |
| Hidden labor + tracker | Redundant split — merge |
| Mockup "3 patterns" | Add `PatternInsightCard` for honesty |

**Fixes:** Pattern card in hero; merged problem section; pattern-focused guides

---

## Persona 3: Control Reclaimer

| Step | Reaction |
|------|----------|
| Product proof visit brief | Strong |
| Rachel quote | In social proof — keep |
| How it works step 3 | Visit prep — good |

**Fixes:** Prepare guide in content library; visit testimonial featured in proof strip

---

## Post-fix section order (~12 sections)

```
Hero → Validation → Social proof (3) → Missing record → Scattered tools (merged) →
Mid CTA → How it works → Product proof → High severity → Daily value →
Guides & videos → Privacy → FAQ → Founder capsule → Final CTA
```

---

## Changelog

| Date | Change |
|------|--------|
| 2026-07-03 | Persona + UI/UX polish; validation, content library, section merge, mobile pass |
