export type WhoForPhaseId =
  | 'finding-answers'
  | 'in-treatment'
  | 'living-with-it'
  | 'getting-ahead'
  | 'caregiver'

export interface WhoForSituation {
  id: string
  number: number
  title: string
  mayBeHereIf: string
  helps: string
  /** Shorter outcome used in compact chapter layouts */
  outcome?: string
}

export interface WhoForPhase {
  id: WhoForPhaseId
  title: string
  /** User-language prompt on phase cards */
  prompt: string
  outcome: string
  cta: string
  /** Editorial chapter heading on /for */
  chapterHeading: string
  chapterSupport: string
  chapterCta: string
  situations: readonly WhoForSituation[]
  /** Journey hub preview copy */
  journeyExplore: string
  hardNow: string
  helpsBuild: string
  becomesEasier: string
  /** Track / Care / Navigate / Understand examples when this phase is selected */
  systemExamples: readonly [string, string, string, string]
}

export const WHO_FOR_HERO = {
  eyebrow: 'Who Gutsphere is for',
  title: 'There is no wrong place to start.',
  lead: 'One symptom, no diagnosis, a treatment that is not working, or years into managing a condition—Gutsphere meets you where you are now and keeps the history as things change.',
  primaryCta: 'Find my starting point',
  secondaryCta: 'Browse every situation',
} as const

export const WHO_FOR_PHASE_SELECTOR = {
  heading: 'What feels most like today?',
  support: 'You do not need to choose your permanent identity—just the place that feels closest right now.',
} as const

export const WHO_FOR_BRIDGE = {
  heading: 'The need changes. Your history does not restart.',
  copy: 'A symptom can become a diagnosis. A working treatment can stop working. Remission can become a flare. Gutsphere keeps the context connected as your needs change.',
  path: ['Symptoms', 'Questions', 'Diagnosis', 'Treatment', 'Daily life', 'Stability'] as const,
  layers: ['What you experienced', 'What you tried', 'What helped', 'What needs attention next'] as const,
} as const

export const WHO_FOR_PERSONALIZATION = {
  heading: 'Your phase is only the beginning.',
  copy: 'Gutsphere also adapts to the condition, severity, life stage, routines, goals and history surrounding your current situation.',
  chips: [
    'Condition',
    'Current symptoms',
    'Severity',
    'Life stage',
    'Treatment',
    'Time since onset',
    'Daily routines',
    'Goals',
  ] as const,
} as const

export const WHO_FOR_SYSTEM = {
  heading: 'Different situations. The same connected system.',
  columns: ['Track', 'Care', 'Navigate', 'Understand'] as const,
  defaults: [
    'Keep the right history',
    'Support routines and difficult days',
    'Prepare for care and next steps',
    'Find patterns and clearer questions',
  ] as const,
} as const

export const WHO_FOR_ALSO = {
  title: 'Gutsphere may be right for you if:',
  items: [
    'You want one place for symptoms, routines, treatment and care questions.',
    'You need support between appointments.',
    'You are still finding answers or managing an established condition.',
    'You want clearer context—not another isolated tracker.',
  ],
} as const

export const WHO_FOR_NOT = {
  title: 'Gutsphere is not:',
  items: [
    'A replacement for emergency or professional medical care',
    'A diagnosis',
    'A telehealth clinic',
    'A single diet, test or treatment program',
  ],
} as const

export const WHO_FOR_FINAL = {
  title: 'Start from where you are. Keep everything that comes next.',
  lead: 'You do not need the perfect diagnosis, plan or routine before beginning.',
  primaryCta: 'Find my starting point',
  secondaryCta: 'Explore the journey',
} as const

export const JOURNEY_HUB = {
  eyebrow: 'Your journey',
  title: 'Where are you today?',
  lead: 'Your gut journey may move forward, loop back or change suddenly. Choose the place that feels closest right now—not where you think you should be.',
  primaryCta: 'Show me the five starting points',
  nonLinear: {
    heading: 'You can move forward, back—or be in two places at once.',
    copy: 'A person can be in remission and still need treatment support. Someone with a diagnosis can still be searching for answers. A flare can temporarily change everything.',
    closing: 'Wherever you move, your history comes with you.',
  },
  travels: {
    heading: 'Gutsphere does not reset when your situation changes.',
    objects: ['Your history', 'Your patterns', 'Your routines', 'Your care questions'] as const,
  },
  bridge: {
    heading: 'Found the broad phase? Now find the situation that sounds like you.',
    copy: 'Explore the full guide to see the specific starting points within each phase.',
    cta: 'See all 18 situations',
  },
} as const

export const WHO_FOR_PHASES: readonly WhoForPhase[] = [
  {
    id: 'finding-answers',
    title: 'Finding answers',
    prompt: 'I know something is happening. I do not know what it means yet.',
    outcome: 'Turn scattered symptoms, appointments and unanswered questions into a clearer story.',
    cta: 'Start with what is happening',
    chapterHeading: 'Turn “something is wrong” into a story you can act on.',
    chapterSupport:
      'You may have one symptom, several symptoms, pending tests or a diagnosis that does not explain everything. You do not need a final label to begin building useful context.',
    chapterCta: 'Build a clearer history',
    journeyExplore: 'Explore finding answers →',
    hardNow:
      'Symptoms feel disconnected, appointments are far apart and every new search creates another possibility.',
    helpsBuild: 'One history that connects symptoms, context, tests and what you have already tried.',
    becomesEasier: 'Knowing what to monitor, what to ask and what deserves attention next.',
    systemExamples: [
      'Track symptoms, context and what you have already tried',
      'Support calm triage on uncertain days',
      'Prepare appointment questions and timelines',
      'Understand patterns forming across disconnected notes',
    ],
    situations: [
      {
        id: 'early-single-symptom',
        number: 1,
        title: 'One symptom, no context',
        mayBeHereIf: 'Something feels different, but you do not know whether it matters.',
        helps: 'Capture when it happens and see whether it remains isolated or begins forming a pattern.',
      },
      {
        id: 'early-multiple-symptoms',
        number: 2,
        title: 'Several symptoms, nobody connecting them',
        mayBeHereIf: 'Each symptom has been discussed separately, but they feel connected to you.',
        helps: 'Bring them into one timeline and look at what repeatedly appears around them.',
      },
      {
        id: 'diagnostic-limbo',
        number: 3,
        title: 'Waiting for answers',
        mayBeHereIf: 'You are waiting for a specialist, biopsy, scan, test result or follow-up.',
        helps: 'Keep the history moving while the healthcare system moves slowly.',
      },
      {
        id: 'undiagnosed',
        number: 4,
        title: 'No diagnosis yet',
        mayBeHereIf: 'You feel unwell but still do not have an explanation that fits.',
        helps: 'Build a clearer record of symptoms, changes and what you have already tried.',
      },
      {
        id: 'misdiagnosed',
        number: 5,
        title: 'The diagnosis does not fit',
        mayBeHereIf:
          'You have a label, but the treatment is not helping or important symptoms remain unexplained.',
        helps: 'Revisit the story without losing the history that led to the original diagnosis.',
      },
      {
        id: 'underdiagnosed',
        number: 6,
        title: 'Only part of the picture has been explained',
        mayBeHereIf:
          'Some symptoms make sense, while others are still being dismissed or treated separately.',
        helps: 'Keep the unexplained pieces visible alongside the confirmed diagnosis.',
      },
      {
        id: 'post-infectious-onset',
        number: 7,
        title: 'Things changed after an infection, illness or antibiotics',
        mayBeHereIf: 'Your gut has not felt the same since a clear triggering event.',
        helps: 'Compare before and after, find the new pattern and work toward a more stable baseline.',
      },
    ],
  },
  {
    id: 'in-treatment',
    title: 'In treatment',
    prompt: 'I have a plan. I need to know whether it is actually working.',
    outcome: 'See what is improving, what is not, and what deserves a change.',
    cta: 'Review my treatment journey',
    chapterHeading: 'Know what is working, what is not, and what should change.',
    chapterSupport:
      'Starting treatment is not the end of uncertainty. The real questions appear between appointments: Is this helping? Is this a side effect? Am I giving it enough time? Why is the plan so difficult to maintain?',
    chapterCta: 'Make treatment easier to evaluate',
    journeyExplore: 'Explore treatment support →',
    hardNow:
      'Good days and bad days blur together. You are not sure what the plan is actually doing between visits.',
    helpsBuild: 'A clear view of response, side effects, routines and what has already been tried.',
    becomesEasier: 'Knowing what is improving, what is not, and what to bring to follow-up.',
    systemExamples: [
      'Track treatment response and side effects',
      'Support medication and care routines',
      'Prepare progress updates for follow-up',
      'Understand what is improving or not',
    ],
    situations: [
      {
        id: 'treatment-working',
        number: 8,
        title: 'Treatment is working',
        mayBeHereIf: 'Things are improving, but maintenance still feels fragile.',
        helps: 'Protect what is helping and notice early drift without living on constant alert.',
        outcome: 'Protect what is helping and notice early drift without living on constant alert.',
      },
      {
        id: 'treatment-not-working',
        number: 9,
        title: 'Treatment is not working',
        mayBeHereIf: 'You are doing what was prescribed and still suffering.',
        helps: 'Show clearly what has not improved, what has worsened and what has already been tried.',
        outcome: 'Show clearly what has not improved, what has worsened and what has already been tried.',
      },
      {
        id: 'adherence-difficulty',
        number: 10,
        title: 'The plan is hard to sustain',
        mayBeHereIf: 'You know what to do, but real life keeps interrupting the protocol.',
        helps: 'Rebuild medication, nutrition and care routines around real life—not guilt or perfect adherence.',
        outcome: 'Rebuild medication, nutrition and care routines around real life—not guilt or perfect adherence.',
      },
    ],
  },
  {
    id: 'living-with-it',
    title: 'Living with it',
    prompt: 'I know the condition. I need help with the day-to-day.',
    outcome: 'Build routines, manage difficult days and make ongoing care feel less fragile.',
    cta: 'Support daily life',
    chapterHeading: 'Make the long middle feel less fragile.',
    chapterSupport:
      'Once the initial appointments and treatment decisions are over, most of life happens between visits. Gutsphere helps with the routines, disruptions and decisions that make up daily life with a digestive condition.',
    chapterCta: 'Support the day-to-day',
    journeyExplore: 'Explore daily support →',
    hardNow: 'Life does not pause for flares, routines slip, and you still need calm support on hard days.',
    helpsBuild: 'Connected routines for meals, medication, rest and flare protocols in one place.',
    becomesEasier: 'Catching drift early and getting through difficult days without starting from scratch.',
    systemExamples: [
      'Track daily signals and flare patterns',
      'Support routines and difficult days',
      'Prepare ongoing care conversations',
      'Understand triggers and what shortens recovery',
    ],
    situations: [
      {
        id: 'in-remission',
        number: 11,
        title: 'In remission or stable',
        mayBeHereIf: 'You are stable, but the condition stays in the background.',
        helps: 'Stay aware without making the condition the center of every day.',
        outcome: 'Stay aware without making the condition the center of every day.',
      },
      {
        id: 'post-surgical',
        number: 12,
        title: 'Living with a post-surgical body',
        mayBeHereIf: 'Surgery changed your anatomy permanently, and daily life needs to adapt.',
        helps: 'Adapt routines, nutrition and self-care to the body you have now—not the one you had before surgery.',
        outcome: 'Adapt routines, nutrition and self-care to the body you have now—not the one you had before surgery.',
      },
      {
        id: 'system-disengaged',
        number: 13,
        title: 'Managing mostly on your own',
        mayBeHereIf: 'You are self-managing through diet, supplements, forums and your own research.',
        helps: 'Organize self-directed care, understand what is helping and recognize when it may be time to re-engage professional care.',
        outcome: 'Organize self-directed care, understand what is helping and recognize when it may be time to re-engage professional care.',
      },
    ],
  },
  {
    id: 'getting-ahead',
    title: 'Getting ahead of it',
    prompt: 'Things are stable—or improving—and I want to protect that progress.',
    outcome: 'Monitor quietly, rebuild your baseline and notice drift before it becomes disruption.',
    cta: 'Protect my progress',
    chapterHeading: 'Protect progress. Build a stronger baseline.',
    chapterSupport:
      'Not everyone is in crisis. Gutsphere can also help you monitor risk, recover after disruption and improve gut health without turning wellness into another full-time project.',
    chapterCta: 'Protect and build on my progress',
    journeyExplore: 'Explore long-term support →',
    hardNow: 'Stability can feel fragile. You want quiet monitoring without living in constant vigilance.',
    helpsBuild: 'A personal baseline with early signals, milestones and a practical monitoring plan.',
    becomesEasier: 'Noticing drift early and protecting progress without making gut health a second job.',
    systemExamples: [
      'Track baseline trends and early drift',
      'Support rebuilding and prevention routines',
      'Prepare surveillance and follow-up timing',
      'Understand what strengthens your personal range',
    ],
    situations: [
      {
        id: 'surveillance',
        number: 14,
        title: 'Ongoing surveillance',
        mayBeHereIf: 'You are in a monitoring program even when you do not feel sick.',
        helps: 'Keep test timing, results, follow-ups and questions in one reliable place.',
        outcome: 'Keep test timing, results, follow-ups and questions in one reliable place.',
      },
      {
        id: 'preventing',
        number: 15,
        title: 'Preventing future problems',
        mayBeHereIf: 'Family history, a prior episode or known risks keep you watching carefully.',
        helps: 'Turn family history, previous episodes or known risks into a practical monitoring plan.',
        outcome: 'Turn family history, previous episodes or known risks into a practical monitoring plan.',
      },
      {
        id: 'rebuilding-gut',
        number: 16,
        title: 'Rebuilding after disruption',
        mayBeHereIf: 'You are recovering after a flare, antibiotics, treatment or illness.',
        helps: 'Understand the new baseline after a flare, antibiotics, treatment or illness.',
        outcome: 'Understand the new baseline after a flare, antibiotics, treatment or illness.',
      },
      {
        id: 'elevating-gut',
        number: 17,
        title: 'Elevating gut health',
        mayBeHereIf: 'You want more than symptom control—energy, resilience and daily functioning.',
        helps: 'Move beyond symptom control toward better energy, resilience and daily functioning.',
        outcome: 'Move beyond symptom control toward better energy, resilience and daily functioning.',
      },
    ],
  },
  {
    id: 'caregiver',
    title: 'Caring for someone',
    prompt: 'I am helping someone else manage all of this.',
    outcome: 'Keep symptoms, routines, appointments and questions organized without holding everything in your head.',
    cta: 'Support someone I care for',
    chapterHeading: 'Help carry the details—not the whole burden alone.',
    chapterSupport:
      'Parents, partners and adult children often become the memory, organizer and advocate for someone else’s GI care.',
    chapterCta: 'Organize care together',
    journeyExplore: 'Explore caregiver support →',
    hardNow: 'You are holding the timeline, the questions and the logistics while trying not to miss anything.',
    helpsBuild: 'One shared context for symptoms, routines, treatments, appointments and care questions.',
    becomesEasier: 'Knowing what they experience and what you need to manage—without holding it all in your head.',
    systemExamples: [
      'Track what they experience and what you manage',
      'Support shared routines and hard days',
      'Prepare appointments and care questions together',
      'Understand patterns across both perspectives',
    ],
    situations: [
      {
        id: 'caregiver-child',
        number: 18,
        title: 'Supporting a child',
        mayBeHereIf: 'You are a parent organizing a child’s symptoms, care and appointments.',
        helps: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
        outcome: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
      },
      {
        id: 'caregiver-partner',
        number: 18,
        title: 'Supporting a partner',
        mayBeHereIf: 'You are helping a partner navigate flares, treatments and visits.',
        helps: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
        outcome: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
      },
      {
        id: 'caregiver-parent',
        number: 18,
        title: 'Supporting an older parent',
        mayBeHereIf: 'You are an adult child coordinating care for a parent with a GI condition.',
        helps: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
        outcome: 'Keep symptoms, routines, treatments, appointments and care questions organized in one shared context.',
      },
    ],
  },
] as const

export function getWhoForPhase(id: string | null | undefined): WhoForPhase | undefined {
  if (!id) return undefined
  return WHO_FOR_PHASES.find((phase) => phase.id === id)
}

/** @deprecated Prefer WHO_FOR_PHASES */
export const WHO_FOR_AUDIENCES = WHO_FOR_PHASES
