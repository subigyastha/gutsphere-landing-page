import { useCallback, useMemo, useState } from 'react'
import {
  SYMPTOM_KB,
  SYSTEM_LENSES,
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
  label: string
  body: string
  primary: boolean
}

export interface SystemPreview {
  care: boolean
  intro: string
  pillars: SystemPillarLine[]
  lenses: SystemLens[]
  lensesNote: string
  foot: string
  note: string
  ctaLabel: string
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

function buildLenses(
  symKeys: string[],
  dx: SelectedChip[],
  hasFiguring: boolean,
): { lenses: SystemLens[]; note: string } {
  if (dx.length) {
    return {
      lenses: [...SYSTEM_LENSES],
      note: 'Ask once and hear it back from a GI, dietitian, gut–brain, and holistic view — all sharing your full context.',
    }
  }
  if (hasFiguring) {
    return {
      lenses: ['GI', 'Nutrition', 'Gut–brain'],
      note: 'While you find answers, those lenses share one timeline — so you aren’t retelling the same week four times.',
    }
  }
  if (symKeys.length >= 2) {
    const all = symKeys.flatMap((k) => [...(SYMPTOM_KB[k]?.lenses ?? [])])
    const freq = new Map<SystemLens, number>()
    all.forEach((l) => freq.set(l, (freq.get(l) ?? 0) + 1))
    const ranked = [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([l]) => l)
      .slice(0, 3)
    return {
      lenses: ranked.length ? ranked : ['GI', 'Nutrition', 'Gut–brain'],
      note: 'One context across the views that matter for this mix — not four appointments to retell the same week.',
    }
  }
  if (symKeys[0] && SYMPTOM_KB[symKeys[0]]) {
    const lenses = [...SYMPTOM_KB[symKeys[0]].lenses]
    return {
      lenses,
      note: 'The views that usually matter here share your story — so nothing gets stranded in another app.',
    }
  }
  return {
    lenses: ['GI', 'Nutrition', 'Gut–brain'],
    note: 'Ask once — hear it back from the views that matter, sharing your full context.',
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
    if (flags.length) return []
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

    if (flags.length) {
      const flagText = join(flags.map((f) => f.label.toLowerCase()))
      const cap = flagText.charAt(0).toUpperCase() + flagText.slice(1)
      return {
        care: true,
        intro: `${cap} can be a sign that needs a clinician’s eyes soon — not something to just track.`,
        pillars: [
          {
            id: 'navigate',
            label: 'I’d help you navigate',
            body: 'Please reach out to a doctor or clinic about this. If it’s severe, heavy, or came on suddenly, use urgent or emergency care.',
            primary: true,
          },
          {
            id: 'track',
            label: 'I’d track',
            body: 'a clear, dated record of what you’re noticing — so you can hand it straight to whoever you see',
            primary: false,
          },
          {
            id: 'care',
            label: 'I’d care',
            body: 'by staying beside the visit — never replacing it.',
            primary: false,
          },
          {
            id: 'understand',
            label: 'I’d help you ask',
            body: 'After you’re safe, the same record becomes the start of a longer story you can build on.',
            primary: false,
          },
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
    let understandBody: string
    let foot: string
    let connectBody: string

    if (dx.length) {
      const names = dx.map((d) => d.label)
      intro = `Managing ${join(names)}? A name isn’t a plan — here’s the day-to-day I’d run with you:`
      trackBody = symKeys.length
        ? join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k]?.track ?? [])).slice(0, 3))
        : 'your triggers, what a flare tends to follow, what you eat, and how you sleep'
      connectBody = symKeys.length
        ? join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k]?.connect ?? [])).slice(0, 3))
        : 'your triggers and how you respond to treatment'
      careBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.care).filter(Boolean)).slice(0, 1)[0] ??
          'Responsive self-care on hard days — matched to what you logged, not a generic checklist.'
        : 'Responsive self-care on hard days — matched to what you logged, not a generic checklist.'
      navigateBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.navigate).filter(Boolean)).slice(0, 1)[0] ??
          'Visit prep, questions for your team, and a clear update for every specialist.'
        : 'Visit prep, questions for your team, and a clear update for every specialist.'
      understandBody = symKeys.length
        ? uniq(symKeys.map((k) => SYMPTOM_KB[k]?.understand).filter(Boolean)).slice(0, 1)[0] ??
          'Here’s what’s working and what isn’t since our last visit — what should change?'
        : 'Here’s what’s working and what isn’t since our last visit — what should change?'
      foot =
        'It turns “living with it” into a plan you drive — and a clear update for every specialist on your team.'
    } else if (symKeys.length) {
      const names = symKeys.map((k) => SYMPTOM_KB[k].n)
      intro = `For ${join(names)}, here’s how I’d start:`
      trackBody = join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k].track)).slice(0, 3))
      connectBody = join(uniq(symKeys.flatMap((k) => SYMPTOM_KB[k].connect)).slice(0, 3))
      careBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].care)).slice(0, 1)[0] ??
        'Gentle next steps that react to what you logged — not a generic checklist.'
      navigateBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].navigate)).slice(0, 1)[0] ??
        'When to act, who to see, and how to prepare for the visit.'
      understandBody =
        uniq(symKeys.map((k) => SYMPTOM_KB[k].understand)).slice(0, 1)[0] ??
        'The pattern and the question worth asking.'
      foot =
        'This builds into a clean, connected story you bring to your doctor — and it’s yours to keep.'
    } else {
      intro = 'Not sure yet? That’s the most common place to start. Here’s how I’d help you find the thread:'
      trackBody = 'the two or three symptoms that bother you most, what you eat, plus sleep and stress'
      connectBody = 'everything you log — to surface the pattern underneath'
      careBody = 'Calm, low-pressure guidance while you figure things out — no streak guilt.'
      navigateBody = 'When a visit is worth it, who to see, and how to walk in with a timeline.'
      understandBody = 'Here’s a clear timeline of what’s been happening — what stands out to you?'
      foot = 'Piece by piece, the guessing turns into something you can actually act on.'
    }

    // Cover Track + connect context in track line; Care / Navigate / Understand as their own rows
    const trackLine =
      connectBody && symKeys.length
        ? `${trackBody} — and connect it to ${connectBody}`
        : trackBody

    const pillars: SystemPillarLine[] = [
      { id: 'track', label: 'I’d track', body: trackLine, primary: primary === 'track' },
      { id: 'care', label: 'I’d care', body: careBody, primary: primary === 'care' },
      {
        id: 'navigate',
        label: 'I’d help you navigate',
        body: navigateBody,
        primary: primary === 'navigate',
      },
      {
        id: 'understand',
        label: 'I’d help you ask',
        body: understandBody,
        primary: primary === 'understand',
      },
    ]

    return {
      care: false,
      intro,
      pillars,
      lenses,
      lensesNote,
      foot,
      note: 'A preview of how your copilot works — not medical advice.',
      ctaLabel,
    }
  }, [selected])

  const isSelected = useCallback(
    (chip: SelectedChip) => selected.some((c) => c.kind === chip.kind && c.label === chip.label),
    [selected],
  )

  return { selected, toggleChip, threadLabels, sharedLinks, preview, systemPreview, isSelected }
}
