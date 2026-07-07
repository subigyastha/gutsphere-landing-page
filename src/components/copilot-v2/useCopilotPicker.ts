import { useCallback, useMemo, useState } from 'react'
import { SYMPTOM_KB } from './constants'

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
      const single = symKeys[0] ? SYMPTOM_KB[symKeys[0]]?.connect ?? [] : []
      return uniq(single).slice(0, 3)
    }
    const sets = symKeys.map((k) => SYMPTOM_KB[k]?.connect ?? [])
    const shared = sets.reduce<string[]>((acc, cur, i) => {
      if (i === 0) return [...cur]
      return acc.filter((v) => cur.some((c) => c.includes(v.split(' ')[0]) || v.includes(c.split(' ')[0])))
    }, [])
    // Fallback: pick the most common connect themes across all selected
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

  const isSelected = useCallback(
    (chip: SelectedChip) => selected.some((c) => c.kind === chip.kind && c.label === chip.label),
    [selected],
  )

  return { selected, toggleChip, threadLabels, sharedLinks, preview, isSelected }
}
