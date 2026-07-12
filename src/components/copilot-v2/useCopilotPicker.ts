import { useCallback, useMemo, useState } from 'react'
import {
  EXPERT_PERSPECTIVES,
  SYMPTOM_KB,
  SYSTEM_LENSES,
  type ExpertPerspectiveId,
  type SystemLens,
  type SystemPillarId,
} from './constants'

export type ChipKind = 'symptom' | 'figuring' | 'dx' | 'flag'

export interface SelectedChip {
  kind: ChipKind
  key?: string
  label: string
}

function uniq(a: string[]) {
  return a.filter((v, i) => a.indexOf(v) === i)
}

function join(a: string[]) {
  const u = uniq(a)
  if (u.length <= 1) return u.join('')
  if (u.length === 2) return `${u[0]} and ${u[1]}`
  return `${u.slice(0, -1).join(', ')} and ${u[u.length - 1]}`
}

export interface CopilotPreview {
  care: boolean
  intro: string
  track: string
  connect: string
  ask: string
  foot: string
  note: string
  ctaLabel: string
}

export interface SystemPillarLine {
  id: SystemPillarId
  /** Uppercase product-stage name shown above the action phrase */
  stage: string
  /** Classic-style action phrase, e.g. "I'd track" */
  label: string
  body: string
  primary: boolean
}

export interface SystemPreview {
  care: boolean
  intro: string
  /** Short bridge under the live context pills */
  bridge: string
  /** Supporting line under the intro headline */
  support: string
  pillars: SystemPillarLine[]
  lenses: SystemLens[]
  lensesNote: string
  foot: string
  note: string
  ctaLabel: string
}

const STAGE_META: Record<
  SystemPillarId,
  { stage: string; label: string }
> = {
  track: { stage: 'Track', label: "I'd track" },
  understand: { stage: 'Understand', label: "I'd connect it to" },
  care: { stage: 'Care', label: "I'd support your daily care" },
  navigate: { stage: 'Navigate', label: "I'd help you prepare and ask" },
}

function asStatement(s: string): string {
  const t = s.trim().replace(/\.+$/, '')
  if (!t) return t
  return t.charAt(0).toUpperCase() + t.slice(1)
}

function pillar(
  id: SystemPillarId,
  body: string,
  primary: boolean,
  labelOverride?: string,
): SystemPillarLine {
  const meta = STAGE_META[id]
  return {
    id,
    stage: meta.stage,
    label: labelOverride ?? meta.label,
    body: asStatement(body),
    primary,
  }
}

/** Outcome-focused CTA — completes the preview promise; friction lives in fine print below. */
function ctaForSelection(
  flags: SelectedChip[],
  dx: SelectedChip[],
  symptoms: SelectedChip[],
  hasFiguring: boolean,
): string {
  if (flags.length) return 'Build my record for the visit'
  if (dx.length && symptoms.length) return 'One copilot for all of this'
  if (dx.length) return 'Turn this into my daily plan'
  if (symptoms.length > 1) return 'Connect these into one story'
  if (symptoms.length) return 'Build my connected story'
  if (hasFiguring) return 'Help me find the pattern'
  return 'Meet my copilot'
}

function primaryPillarFor(
  flags: SelectedChip[],
  dx: SelectedChip[],
  symptoms: SelectedChip[],
  hasFiguring: boolean,
): SystemPillarId {
  if (flags.length) return 'navigate'
  if (hasFiguring) return 'understand'
  if (dx.length) return 'care'
  if (symptoms.length > 1) return 'understand'
  return 'track'
}

function lensToExpert(lens: SystemLens): ExpertPerspectiveId | null {
  switch (lens) {
    case 'GI':
      return 'gi'
    case 'Nutrition':
      return 'nutrition'
    case 'Gut–brain':
      return 'gut-brain'
    case 'Holistic':
      return 'whole-person'
    default:
      return null
  }
}

function sortExperts(scores: Map<ExpertPerspectiveId, number>): ExpertPerspectiveId[] {
  const hasSignal = [...scores.values()].some((n) => n > 0)
  if (!hasSignal) return EXPERT_PERSPECTIVES.map((e) => e.id)

  return [...scores.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1]
      return (
        EXPERT_PERSPECTIVES.findIndex((e) => e.id === a[0]) -
        EXPERT_PERSPECTIVES.findIndex((e) => e.id === b[0])
      )
    })
    .map(([id]) => id)
}

/** Rank expert perspectives for the One story band — most relevant first. */
function rankRelevantExperts(selected: SelectedChip[]): ExpertPerspectiveId[] {
  const scores = new Map<ExpertPerspectiveId, number>(
    EXPERT_PERSPECTIVES.map((e) => [e.id, 0]),
  )

  const flags = selected.filter((c) => c.kind === 'flag')
  const dx = selected.filter((c) => c.kind === 'dx')
  const symptoms = selected.filter((c) => c.kind === 'symptom')
  const hasFiguring = selected.some((c) => c.kind === 'figuring')

  if (flags.length) {
    scores.set('gi', (scores.get('gi') ?? 0) + 5)
    return sortExperts(scores)
  }

  for (const s of symptoms) {
    const k = s.key
    if (!k) continue

    if (['bloating', 'constipation', 'diarrhea', 'pain', 'reflux', 'nausea'].includes(k)) {
      scores.set('gi', (scores.get('gi') ?? 0) + 2)
    }
    if (k === 'food' || k === 'bloating') {
      scores.set('nutrition', (scores.get('nutrition') ?? 0) + 3)
    }
    if (k === 'fatigue') {
      scores.set('gut-brain', (scores.get('gut-brain') ?? 0) + 3)
      scores.set('sleep', (scores.get('sleep') ?? 0) + 2)
    }
    if (k === 'constipation') {
      scores.set('pelvic', (scores.get('pelvic') ?? 0) + 2)
      scores.set('movement', (scores.get('movement') ?? 0) + 1)
    }
    if (k === 'pain') {
      scores.set('pelvic', (scores.get('pelvic') ?? 0) + 1)
    }

    const kb = SYMPTOM_KB[k]
    if (kb) {
      for (const lens of kb.lenses) {
        const id = lensToExpert(lens)
        if (id) scores.set(id, (scores.get(id) ?? 0) + 2)
      }
    }
  }

  if (dx.length) {
    scores.set('gi', (scores.get('gi') ?? 0) + 3)
    scores.set('pharmacy', (scores.get('pharmacy') ?? 0) + 2)
    scores.set('nutrition', (scores.get('nutrition') ?? 0) + 1)
    scores.set('whole-person', (scores.get('whole-person') ?? 0) + 1)
  }

  if (hasFiguring) {
    scores.set('gi', (scores.get('gi') ?? 0) + 2)
    scores.set('gut-brain', (scores.get('gut-brain') ?? 0) + 2)
    scores.set('whole-person', (scores.get('whole-person') ?? 0) + 1)
  }

  return sortExperts(scores)
}

function buildLenses(
  _symKeys: string[],
  _dx: SelectedChip[],
  _hasFiguring: boolean,
): { lenses: SystemLens[]; note: string } {
  return {
    lenses: [...SYSTEM_LENSES],
    note: 'Your copilots work together from the same context, so nothing important gets missed.',
  }
}

export function useCopilotPicker() {
  const [selected, setSelected] = useState<SelectedChip[]>([])

  const toggleChip = useCallback((chip: SelectedChip) => {
    setSelected((prev) => {
      const exists = prev.some((c) => c.kind === chip.kind && c.label === chip.label)
      if (chip.kind === 'figuring') {
        return exists ? [] : [chip]
      }
      const withoutFiguring = prev.filter((c) => c.kind !== 'figuring')
      if (exists) {
        return withoutFiguring.filter((c) => !(c.kind === chip.kind && c.label === chip.label))
      }
      return [...withoutFiguring, chip]
    })
  }, [])

  const threadLabels = useMemo(() => {
    const flags = selected.filter((c) => c.kind === 'flag')
    if (flags.length) {
      return flags.slice(0, 7).map((c) => c.label)
    }
    return selected.slice(0, 7).map((c) => {
      if (c.kind === 'symptom' && c.key && SYMPTOM_KB[c.key]) return SYMPTOM_KB[c.key].s
      if (c.kind === 'figuring') return 'Figuring it out'
      if (c.kind === 'dx') return c.label.split(/[·/]/)[0].trim()
      return c.label
    })
  }, [selected])

  /** Shared connect themes across selected symptoms — powers the link bridge UI. */
  const sharedLinks = useMemo(() => {
    const symKeys = selected
      .filter((c) => c.kind === 'symptom' && c.key)
      .map((c) => c.key!) as string[]
    if (symKeys.length < 2) {
      const single = symKeys[0] ? (SYMPTOM_KB[symKeys[0]]?.connect ?? []) : []
      return uniq(single).slice(0, 3)
    }
    const sets = symKeys.map((k) => SYMPTOM_KB[k]?.connect ?? [])
    const shared = sets.reduce<string[]>((acc, cur, i) => {
      if (i === 0) return [...cur]
      return acc.filter((v) => cur.some((c) => c.includes(v.split(' ')[0]) || v.includes(c.split(' ')[0])))
    }, [])
    if (shared.length) return uniq(shared).slice(0, 3)
    const all = symKeys.flatMap((k) => SYMPTOM_KB[k]?.connect ?? [])
    const freq = new Map<string, number>()
    all.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1))
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .filter(([, n]) => n > 1)
      .map(([t]) => t)
      .slice(0, 3)
  }, [selected])

  const preview = useMemo((): CopilotPreview | null => {
    if (!selected.length) return null

    const flags = selected.filter((c) => c.kind === 'flag')
    if (flags.length) {
      const flagText = join(flags.map((f) => f.label.toLowerCase()))
      const cap = flagText.charAt(0).toUpperCase() + flagText.slice(1)
      return {
        care: true,
        intro: `${cap} can be a sign that needs a clinician’s eyes soon — not something to just track.`,
        track: '',
        connect: '',
        ask: '',
        foot: 'Your health comes first. Gutsphere is here for everything around the visit — never a replacement for it.',
        note: 'Not medical advice.',
        ctaLabel: ctaForSelection(flags, [], [], false),
      }
    }

    const dx = selected.filter((c) => c.kind === 'dx')
    const symptoms = selected.filter((c) => c.kind === 'symptom')
    const hasFiguring = selected.some((c) => c.kind === 'figuring')
    const symKeys = symptoms.map((s) => s.key).filter(Boolean) as string[]

    let track: string[] = []
    let connect: string[] = []
    let asks: string[] = []
    let intro: string
    let foot: string

    symKeys.forEach((k) => {
      const kb = SYMPTOM_KB[k]
      if (kb) {
        track = track.concat(kb.track)
        connect = connect.concat(kb.connect)
        asks.push(kb.ask)
      }
    })

    if (dx.length) {
      const names = dx.map((d) => d.label)
      intro = `Managing ${join(names)}? A name isn’t a plan — here’s the day-to-day I’d run with you:`
      if (!track.length) {
        track = ['your triggers, and what a flare tends to follow', 'what you eat, and how you sleep']
      }
      if (!connect.length) {
        connect = ['your triggers', 'how you respond to treatment']
      }
      asks = ['Here’s what’s working and what isn’t since our last visit — what should change?']
      foot = 'It turns “living with it” into a plan you drive — and a clear update for every specialist.'
    } else if (symKeys.length) {
      const names = symKeys.map((k) => SYMPTOM_KB[k].n)
      intro = `For ${join(names)}, here’s how I’d start:`
      foot = 'This builds into a clean, connected story you bring to your doctor — and it’s yours to keep.'
    } else {
      intro = 'Not sure yet? That’s the most common place to start. Here’s how I’d help you find the thread:'
      track = ['the two or three symptoms that bother you most', 'what you eat, plus sleep and stress']
      connect = ['everything you log', 'to surface the pattern underneath']
      asks = ['Here’s a clear timeline of what’s been happening — what stands out to you?']
      foot = 'Piece by piece, the guessing turns into something you can actually act on.'
    }

    return {
      care: false,
      intro,
      track: join(uniq(track).slice(0, 3)),
      connect: join(uniq(connect).slice(0, 3)),
      ask: asks[0] ?? '',
      foot,
      note: 'A preview of how your copilot works — not medical advice.',
      ctaLabel: ctaForSelection([], dx, symptoms, hasFiguring),
    }
  }, [selected])

  const systemPreview = useMemo((): SystemPreview | null => {
    if (!selected.length) return null

    const flags = selected.filter((c) => c.kind === 'flag')
    const dx = selected.filter((c) => c.kind === 'dx')
    const symptoms = selected.filter((c) => c.kind === 'symptom')
    const hasFiguring = selected.some((c) => c.kind === 'figuring')
    const symKeys = symptoms.map((s) => s.key).filter(Boolean) as string[]
    const ctaLabel = ctaForSelection(flags, dx, symptoms, hasFiguring)
    const primary = primaryPillarFor(flags, dx, symptoms, hasFiguring)
    const support = 'Here’s how your connected copilots would support the day-to-day.'

    if (flags.length) {
      const flagText = join(flags.map((f) => f.label.toLowerCase()))
      const cap = flagText.charAt(0).toUpperCase() + flagText.slice(1)
      return {
        care: true,
        intro: `${cap} can be a sign that needs a clinician’s eyes soon — not something to just track.`,
        bridge:
          'This concern deserves clinical attention — your copilots help you prepare for that visit.',
        support: 'Here’s how your copilots stay beside you around the visit — not instead of it.',
        pillars: [
          pillar(
            'navigate',
            'Please reach out to a doctor or clinic about this. If it’s severe, heavy, or came on suddenly, use urgent or emergency care.',
            true,
            "I'd help you prepare and ask",
          ),
          pillar(
            'track',
            'a clear, dated record of what you’re noticing — so you can hand it straight to whoever you see',
            false,
          ),
          pillar(
            'care',
            'by staying beside the visit — never replacing clinical care',
            false,
          ),
        ],
        lenses: ['GI'],
        lensesNote: 'Right now the priority is getting clinical eyes on this — not exploring every lens.',
        foot: 'Your health comes first. Gutsphere is here for everything around the visit — never a replacement for it.',
        note: 'Not medical advice.',
        ctaLabel,
      }
    }

    const { lenses, note: lensesNote } = buildLenses(symKeys, dx, hasFiguring)

    let intro: string
    let trackBody: string
    let careBody: string
    let navigateBody: string
    let askBody: string
    let foot: string
    let connectBody: string
    let bridge: string

    if (dx.length) {
      const names = dx.map((d) => d.label)
      intro = `Managing ${join(names)}? A name isn’t a plan.`
      bridge =
        'Your copilots see one connected story — diagnosis and day-to-day, together.'
      trackBody = symKeys.length
        ? join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k]?.track ?? [])).slice(0, 3))
        : 'your triggers, what a flare tends to follow, what you eat, and how you sleep'
      connectBody = symKeys.length
        ? join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k]?.connect ?? [])).slice(0, 3))
        : 'your triggers, treatment changes, and how you respond over time'
      careBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.care).filter(Boolean)).slice(0, 1)[0] ??
          'Practical routines around nutrition, hydration, movement, stress support, and habits that fit real life'
        : 'Practical routines around nutrition, hydration, movement, stress support, and habits that fit real life'
      navigateBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.navigate).filter(Boolean)).slice(0, 1)[0] ??
          'Organize what’s working, what has changed, and the questions worth bringing to your next care conversation'
        : 'Organize what’s working, what has changed, and the questions worth bringing to your next care conversation'
      askBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.understand).filter(Boolean)).slice(0, 1)[0] ??
          'Here’s what’s working and what isn’t since our last visit — what should change?'
        : 'Here’s what’s working and what isn’t since our last visit — what should change?'
      foot =
        'A clearer day-to-day plan, better pattern recognition, and stronger care conversations.'
    } else if (symKeys.length) {
      const names = symKeys.map((k) => SYMPTOM_KB[k].n)
      intro =
        symKeys.length > 1
          ? `${join(names)} — connected, not separate.`
          : `For ${join(names)}, here’s how I’d start.`
      bridge =
        symKeys.length > 1
          ? 'Your copilots see one connected story — not separate problems.'
          : 'Your copilots see the full picture around this — not an isolated symptom.'
      trackBody = join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k].track)).slice(0, 3))
      connectBody = join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k].connect)).slice(0, 3))
      careBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].care)).slice(0, 1)[0] ??
        'Gentle next steps that react to what you logged — not a generic checklist'
      navigateBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].navigate)).slice(0, 1)[0] ??
        'When to act, who to see, and how to prepare for the visit'
      askBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].understand)).slice(0, 1)[0] ??
        'The pattern and the question worth asking'
      foot =
        'A clearer day-to-day plan, better pattern recognition, and stronger care conversations.'
    } else {
      intro = 'Not sure yet? That’s the most common place to start.'
      bridge = 'Your copilots help you find the thread — one story at a time.'
      trackBody = 'the two or three symptoms that bother you most, what you eat, plus sleep and stress'
      connectBody = 'everything you log — meals, timing, sleep, stress — to surface the pattern underneath'
      careBody = 'Calm, low-pressure routines while you figure things out — no streak guilt'
      navigateBody = 'When a visit is worth it, who to see, and how to walk in with a timeline'
      askBody = 'Here’s a clear timeline of what’s been happening — what stands out to you?'
      foot = 'Piece by piece, the guessing turns into something you can actually act on.'
    }

    // Prefer navigate guidance; fall back to the ask prompt when navigate is thin.
    const navigateLine =
      navigateBody.length > 40 || !askBody ? navigateBody : askBody

    const pillars: SystemPillarLine[] = [
      pillar('track', trackBody, primary === 'track'),
      pillar('understand', connectBody, primary === 'understand'),
      pillar('care', careBody, primary === 'care'),
      pillar('navigate', navigateLine, primary === 'navigate'),
    ]

    return {
      care: false,
      intro,
      bridge,
      support,
      pillars,
      lenses,
      lensesNote,
      foot,
      note: 'A preview of how your copilots work — not medical advice.',
      ctaLabel,
    }
  }, [selected])

  const isSelected = useCallback(
    (chip: SelectedChip) => selected.some((c) => c.kind === chip.kind && c.label === chip.label),
    [selected],
  )

  const relevantExperts = useMemo(() => rankRelevantExperts(selected), [selected])

  return { selected, toggleChip, threadLabels, sharedLinks, preview, systemPreview, relevantExperts, isSelected }
}
