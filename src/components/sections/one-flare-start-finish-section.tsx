import {
  memo,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import {
  ArrowLeft,
  Calendar,
  Check,
  LineChart,
  Sparkles,
  Stethoscope,
  Utensils,
} from 'lucide-react'

const TOTAL_STATES = 7
const OPENING = 0
const CLOSING = 6

const HEADER_SAFE = 80
const NAV_SAFE = 60
const VIEWPORT = 608

const CHIP_CLASS =
  'inline-flex items-center rounded-full border border-ploy-neutral-inverse-200 bg-ploy-neutral-primary-s2 px-2.5 py-1 text-[11px] font-medium text-ploy-text-secondary'

const ACCENT_CHIP_CLASS =
  'inline-flex items-center rounded-full bg-ploy-background-accent-primary/10 px-2.5 py-1 text-[11px] font-semibold text-ploy-coral-tint'

type StepKey = 'log' | 'connect' | 'care' | 'insight' | 'appointment'

type Story = {
  eyebrow?: string
  label?: string
  headline: string
  body: string
  caption: string
}

type Step = {
  key: StepKey
  month: string
  day: string
  node: string
  cardTitle: string
  card: ReactNode
}

const STORIES: Story[] = [
  {
    eyebrow: 'ONE FLARE, START TO FINISH',
    headline: 'Here\u2019s what a connected timeline actually looks like.',
    body: 'Follow one flare from the moment it hits to the questions you bring into your next GI appointment.',
    caption: 'NOW: START · TIMELINE PREVIEW',
  },
  {
    label: 'Tuesday · 9:14 PM',
    headline: 'A rough flare hits.',
    body: 'You\u2019re wiped, but logging it takes fifteen seconds — a tap, a slider, done.',
    caption: 'NOW: 1 / 5 · LOG',
  },
  {
    label: 'The Gutsphere engine',
    headline: 'Gutsphere connects the dots for you.',
    body: 'The Gutsphere engine links this flare to the takeout you logged at lunch and three short nights of sleep in a row.',
    caption: 'NOW: 2 / 5 · CONNECT',
  },
  {
    label: 'Wednesday morning',
    headline: 'On a hard day, it keeps things simple.',
    body: 'It doesn\u2019t hand you a to-do list — it surfaces a calmer routine and one small thing to try.',
    caption: 'NOW: 3 / 5 · CARE',
  },
  {
    label: 'Six weeks in',
    headline: 'The pattern becomes clear.',
    body: 'A pattern you couldn\u2019t see on your own becomes visible: dairy plus poor sleep, again and again.',
    caption: 'NOW: 4 / 5 · INSIGHT',
  },
  {
    label: 'Your next GI appointment',
    headline: 'You walk in more prepared.',
    body: 'You bring a clean timeline and three questions worth asking — so you\u2019re not explaining everything from memory.',
    caption: 'NOW: 5 / 5 · APPOINTMENT READY',
  },
  {
    eyebrow: 'READY FOR YOUR NEXT FLARE',
    headline: 'Turn scattered symptoms into a timeline you can use.',
    body: 'Start with one quick log. Gutsphere helps connect what happened, what may have shaped it, and what to bring into your next care decision.',
    caption: 'TIMELINE FEATURE PREVIEW',
  },
]

const OPENING_CHIPS = [
  'Symptom log',
  'Meals',
  'Sleep',
  'Care',
  'Patterns',
  'Appointment prep',
] as const

const CHIP_SCATTER = [
  { x: -72, y: -48, r: -8 },
  { x: 64, y: -36, r: 6 },
  { x: -58, y: 12, r: -4 },
  { x: 70, y: 28, r: 10 },
  { x: -40, y: 56, r: -6 },
  { x: 52, y: 64, r: 5 },
] as const

function StatRow({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 flex items-center gap-2 text-[13px] text-ploy-text-secondary">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ploy-background-accent-primary/70" />
      {children}
    </div>
  )
}

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 text-[13px] text-ploy-text-secondary">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ploy-background-accent-primary/12">
        <Check className="h-3 w-3 text-ploy-coral-tint" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </div>
  )
}

const LogCard = memo(function LogCard() {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-ploy-text-muted">
        <span>Log · Tue 9:14 PM</span>
        <span>severity</span>
      </div>
      <div className="mt-3 flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < 4 ? 'bg-ploy-background-accent-primary' : 'bg-ploy-neutral-inverse-200'}`}
          />
        ))}
      </div>
      <StatRow>Bloating · cramps</StatRow>
      <span className={`${ACCENT_CHIP_CLASS} mt-3`}>Saved · 15s</span>
    </div>
  )
})

const ConnectCard = memo(function ConnectCard({ active }: { active: boolean }) {
  return (
    <div>
      <span className={`${ACCENT_CHIP_CLASS} gap-1`}>
        <Sparkles className="h-3 w-3" aria-hidden="true" />
        Gutsphere engine
      </span>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className={CHIP_CLASS}>late meal</span>
        <span className={CHIP_CLASS}>short sleep ×3</span>
      </div>
      <motion.div
        className="mt-3 flex items-center gap-2 rounded-xl border border-ploy-background-accent-primary/35 bg-ploy-background-accent-primary/6 px-3 py-2.5"
        initial={false}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 0.98 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-ploy-background-accent-primary" />
        <span className="text-[13px] font-semibold text-ploy-text-primary">Possible thread found</span>
      </motion.div>
    </div>
  )
})

const CareCard = memo(function CareCard() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-ploy-text-muted">
        <span>Today · gentle</span>
        <span>care</span>
      </div>
      <div className="space-y-2.5 rounded-xl bg-ploy-neutral-primary-s2/80 p-3">
        <CheckRow>Warm, simple breakfast</CheckRow>
        <CheckRow>10-min walk, no pressure</CheckRow>
      </div>
      <span className={ACCENT_CHIP_CLASS}>One small thing</span>
    </div>
  )
})

const InsightCard = memo(function InsightCard() {
  const heights = [38, 86, 30, 74, 46, 22]
  const highlights = [1, 3]
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-ploy-text-muted">
        <span>6-week pattern</span>
        <span>insight</span>
      </div>
      <div className="mt-3 flex h-14 items-end gap-1">
        {heights.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${highlights.includes(i) ? 'bg-ploy-background-accent-primary' : 'bg-ploy-neutral-inverse-200/80'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <StatRow>Dairy + poor sleep</StatRow>
      <StatRow>Repeated flare link</StatRow>
    </div>
  )
})

const AppointmentCard = memo(function AppointmentCard() {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-ploy-text-muted">
        <span>Visit summary</span>
        <span>ready</span>
      </div>
      <div className="relative mt-4 h-1.5 rounded-full bg-ploy-neutral-inverse-200">
        {[0, 33, 66, 100].map((left) => (
          <span
            key={left}
            className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ploy-background-accent-primary"
            style={{ left: `${left}%` }}
          />
        ))}
      </div>
      <StatRow>Timeline ready</StatRow>
      <StatRow>Pattern notes included</StatRow>
      <span className={`${ACCENT_CHIP_CLASS} mt-3`}>3 questions to ask</span>
    </div>
  )
})

const STEPS: Step[] = [
  {
    key: 'log',
    month: 'Apr',
    day: '07',
    node: 'Tue · 9:14 PM',
    cardTitle: 'Log',
    card: <LogCard />,
  },
  {
    key: 'connect',
    month: 'Apr',
    day: '07',
    node: 'Tue · 11:02 PM',
    cardTitle: 'Connected',
    card: <ConnectCard active={false} />,
  },
  {
    key: 'care',
    month: 'Apr',
    day: '08',
    node: 'Wed · 7:30 AM',
    cardTitle: 'Care',
    card: <CareCard />,
  },
  {
    key: 'insight',
    month: 'May',
    day: '20',
    node: 'Wed · May 20',
    cardTitle: 'Insight',
    card: <InsightCard />,
  },
  {
    key: 'appointment',
    month: 'May',
    day: '28',
    node: 'Thu · May 28',
    cardTitle: 'Appointment',
    card: <AppointmentCard />,
  },
]

function PhoneHeader() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 border-b border-ploy-neutral-inverse-200/60 bg-ploy-background-primary/85 px-4 pb-3 pt-2 backdrop-blur-sm">
      <div className="flex items-center justify-between text-[10px] font-medium text-ploy-text-muted">
        <span>9:41</span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-2.5 w-3.5 rounded-sm border border-current" />
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <ArrowLeft className="h-4 w-4 text-ploy-text-muted" aria-hidden="true" />
        <div>
          <p className="font-display text-[15px] font-semibold text-ploy-text-primary">Your flare</p>
          <p className="text-[11px] text-ploy-text-muted">5 steps · start to finish</p>
        </div>
      </div>
    </div>
  )
}

function PhoneBottomNav() {
  const tabs = [
    { label: 'Today', icon: Calendar, active: false },
    { label: 'Pattern', icon: LineChart, active: false },
    { label: 'Track', icon: Utensils, active: true },
    { label: 'Care', icon: Stethoscope, active: false },
    { label: 'Copilot', icon: Sparkles, active: false },
  ]

  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-ploy-neutral-inverse-200/60 bg-ploy-background-primary/90 px-2 pb-2 pt-1 backdrop-blur-sm">
      <div className="flex items-end justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon
          if (tab.active) {
            return (
              <div key={tab.label} className="-mt-5 flex flex-col items-center gap-0.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ploy-background-accent-primary shadow-lg shadow-ploy-background-accent-primary/30">
                  <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                </span>
                <span className="text-[10px] font-semibold text-ploy-coral-tint">{tab.label}</span>
              </div>
            )
          }
          return (
            <div key={tab.label} className="flex flex-col items-center gap-0.5 px-1 pb-1">
              <Icon className="h-4 w-4 text-ploy-text-muted" strokeWidth={2} />
              <span className="text-[10px] text-ploy-text-muted">{tab.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function OpeningChip({
  label,
  index,
  organize,
}: {
  label: string
  index: number
  organize: MotionValue<number>
}) {
  const scatter = CHIP_SCATTER[index]
  const x = useTransform(organize, [0, 1], [scatter.x, 0])
  const y = useTransform(organize, [0, 0.5, 1], [scatter.y, scatter.y * 0.35, index * 34 - 85])
  const rotate = useTransform(organize, [0, 1], [scatter.r, 0])
  const opacity = useTransform(organize, [0, 0.15, 1], [0.55, 0.85, 1])

  return (
    <motion.span
      className={`${CHIP_CLASS} absolute left-1/2 top-1/2 whitespace-nowrap`}
      style={{ x, y, rotate, opacity, translateX: '-50%', translateY: '-50%' }}
    >
      {label}
    </motion.span>
  )
}

function OpeningScreen({ organize }: { organize: MotionValue<number> }) {
  const reduceMotion = useReducedMotion()
  const lineOpacity = useTransform(organize, [0, 0.35, 0.65, 1], [0, 0.35, 0.15, 0])
  const railOpacity = useTransform(organize, [0.55, 0.85, 1], [0, 0.4, 1])
  const coreScale = useTransform(organize, [0.35, 0.7, 1], [0.7, 1, 1])
  const coreOpacity = useTransform(organize, [0.3, 0.55], [0, 1])
  const barScale = useTransform(organize, [0.4, 1], [0, 1])

  if (reduceMotion) {
    return (
      <div className="relative h-full px-4 pt-[6rem] pb-[5rem]">
        <div className="mx-auto flex max-w-[15rem] flex-col items-center gap-2">
          {OPENING_CHIPS.map((chip) => (
            <span key={chip} className={CHIP_CLASS}>
              {chip}
            </span>
          ))}
          <div className="mt-4 w-full rounded-[1.375rem] border border-ploy-neutral-inverse-200 bg-ploy-background-primary p-4">
            <p className="font-display text-[14px] font-semibold text-ploy-text-primary">Building your timeline</p>
            <p className="mt-1 text-[12px] text-ploy-text-muted">
              Connecting symptoms, food, sleep, care notes, and patterns.
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-ploy-background-accent-primary" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full pt-[6rem] pb-[5rem]">
      <div className="relative mx-auto flex h-full max-w-[15rem] items-center justify-center">
        {OPENING_CHIPS.map((chip, i) => (
          <OpeningChip key={chip} label={chip} index={i} organize={organize} />
        ))}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-px -translate-x-1/2 bg-ploy-neutral-inverse-200"
          style={{ opacity: lineOpacity }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-[18%] bottom-[22%] w-px -translate-x-1/2 border-l border-dashed border-ploy-neutral-inverse-200"
          style={{ opacity: railOpacity }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute left-1/2 top-1/2 z-10 w-[13.5rem] -translate-x-1/2 -translate-y-1/2"
          style={{ scale: coreScale, opacity: coreOpacity }}
        >
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-ploy-background-accent-primary/12 ring-4 ring-ploy-background-accent-primary/10">
            <Sparkles className="h-6 w-6 text-ploy-coral-tint" aria-hidden="true" />
          </div>
          <div className="rounded-[1.375rem] border border-ploy-neutral-inverse-200 bg-ploy-background-primary p-4 shadow-[0_12px_32px_-20px_rgba(28,25,23,0.28)]">
            <p className="font-display text-[14px] font-semibold text-ploy-text-primary">Building your timeline</p>
            <p className="mt-1 text-[12px] leading-snug text-ploy-text-muted">
              Connecting symptoms, food, sleep, care notes, and patterns.
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ploy-neutral-inverse-200">
              <motion.div
                className="h-full origin-left rounded-full bg-ploy-background-accent-primary"
                style={{ scaleX: barScale }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function TimelineFeed({ active }: { active: number }) {
  const [targetY, setTargetY] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active]
      if (!el) return
      const cardCenter = el.offsetTop + el.offsetHeight / 2
      const bandCenter = HEADER_SAFE + (VIEWPORT - HEADER_SAFE - NAV_SAFE) / 2
      setTargetY(bandCenter - cardCenter)
    }

    measure()
    window.addEventListener('resize', measure)
    void document.fonts?.ready?.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-ploy-background-primary to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-ploy-background-primary to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-0 px-4"
        animate={{ y: targetY }}
        initial={false}
        transition={{ type: 'spring', stiffness: 90, damping: 20 }}
      >
        <div className="h-[14rem]" aria-hidden="true" />

        {STEPS.map((step, i) => {
          const isActive = i === active
          return (
            <div
              key={step.key}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              className="relative mb-8 flex gap-3"
            >
              <div className="flex w-10 shrink-0 flex-col items-center pt-1">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-ploy-text-muted">
                  {step.month}
                </span>
                <span className="font-display text-[15px] font-bold leading-none text-ploy-text-primary">
                  {step.day}
                </span>
                {isActive ? (
                  <span className="mt-2 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-2 ring-ploy-background-accent-primary">
                    <span className="h-2 w-2 rounded-full bg-ploy-background-accent-primary" />
                  </span>
                ) : (
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-ploy-neutral-inverse-200" />
                )}
              </div>

              <motion.div
                className={`min-w-0 flex-1 rounded-[1.375rem] border bg-ploy-background-primary p-4 shadow-[0_12px_32px_-20px_rgba(28,25,23,0.28)] ${
                  isActive
                    ? 'border-ploy-background-accent-primary/50 opacity-100 shadow-[0_16px_40px_-18px_rgba(239,83,80,0.22)]'
                    : 'border-ploy-neutral-inverse-200 opacity-45'
                }`}
                animate={{ scale: isActive ? 1 : 0.97 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <p className="mb-2 text-[11px] font-medium text-ploy-text-muted">{step.node}</p>
                {step.key === 'connect' ? <ConnectCard active={isActive} /> : step.card}
              </motion.div>
            </div>
          )
        })}

        <div className="h-[14rem]" aria-hidden="true" />
      </motion.div>

      <div
        className="pointer-events-none absolute left-[1.35rem] top-[14rem] bottom-[14rem] w-px border-l border-dashed border-ploy-neutral-inverse-200"
        aria-hidden="true"
      />
    </div>
  )
}

function ClosingScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-[6rem] pb-[5rem]">
      <div className="flex items-center gap-2">
        <span className={`${ACCENT_CHIP_CLASS} gap-1`}>
          <Check className="h-3 w-3" aria-hidden="true" />
          Timeline ready
        </span>
      </div>
      <div className="mt-4 rounded-[1.375rem] border border-ploy-background-accent-primary/35 bg-ploy-background-accent-primary/6 p-4">
        <div className="space-y-2.5">
          <CheckRow>5 moments connected</CheckRow>
          <CheckRow>1 pattern identified</CheckRow>
          <CheckRow>1 care path tracked</CheckRow>
          <CheckRow>3 questions prepared</CheckRow>
        </div>
      </div>
      <button
        type="button"
        className="mt-auto w-full rounded-full bg-ploy-background-accent-primary py-3.5 text-[15px] font-semibold text-white"
      >
        Start tracking
      </button>
    </div>
  )
}

function Phone({
  state,
  organize,
}: {
  state: number
  organize: MotionValue<number>
}) {
  const phase =
    state === OPENING ? 'opening' : state === CLOSING ? 'closing' : 'timeline'
  const active = Math.max(0, Math.min(4, state - 1))

  return (
    <div
      className="relative w-[19rem] max-w-[84vw] rounded-[2.625rem] bg-ploy-background-primary p-3 shadow-[0_24px_64px_-28px_rgba(28,25,23,0.35),0_8px_24px_-12px_rgba(28,25,23,0.18)]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-16 rounded-t-[2rem] bg-gradient-to-b from-ploy-background-accent-primary/8 to-transparent" />
      <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-stone-900" aria-hidden="true" />

      <div className="relative h-[38rem] overflow-hidden rounded-[1.875rem] bg-ploy-neutral-primary-s2/40">
        <PhoneHeader />
        <PhoneBottomNav />

        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {phase === 'opening' && <OpeningScreen organize={organize} />}
            {phase === 'timeline' && <TimelineFeed active={active} />}
            {phase === 'closing' && <ClosingScreen />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function StoryCopy({ state, showClosingCtas }: { state: number; showClosingCtas?: boolean }) {
  const story = STORIES[state]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={state}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-xl"
      >
        {story.eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ploy-coral-tint">
            {story.eyebrow}
          </p>
        )}
        {story.label && (
          <p className="mt-3 text-[13px] font-medium text-ploy-text-muted">{story.label}</p>
        )}
        <h2
          className={`font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ploy-text-primary ${
            story.eyebrow && !story.label ? 'mt-3' : story.label ? 'mt-2' : 'mt-3'
          }`}
        >
          {story.headline}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-ploy-text-secondary">{story.body}</p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ploy-text-muted">
          {story.caption}
        </p>

        {showClosingCtas && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-ploy-background-accent-primary px-6 py-3 text-[15px] font-semibold text-white"
            >
              Start free
            </a>
            <a
              href="#journey"
              className="inline-flex items-center justify-center rounded-full border border-ploy-neutral-inverse-200 bg-ploy-background-primary px-6 py-3 text-[15px] font-semibold text-ploy-text-primary"
            >
              Explore your journey
            </a>
            <p className="w-full text-[12px] text-ploy-text-muted">Timeline feature preview</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

function DesktopPinnedSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })
  const [state, setState] = useState(0)
  const organize = useTransform(scrollYProgress, [0.01, 0.13], [0, 1])

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(TOTAL_STATES - 1, Math.floor(p * TOTAL_STATES))
    setState((prev) => (prev === next ? prev : next))
  })

  return (
    <div ref={trackRef} className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen items-center bg-ploy-background-primary">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-10 px-6 lg:gap-16 lg:px-10">
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-2" aria-hidden="true">
              {Array.from({ length: TOTAL_STATES }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= state ? 'bg-ploy-background-accent-primary' : 'bg-ploy-neutral-inverse-200'
                  }`}
                />
              ))}
            </div>
            <StoryCopy state={state} showClosingCtas={state === CLOSING} />
          </div>
          <Phone state={state} organize={organize} />
        </div>
      </div>
    </div>
  )
}

function MobileTimeline() {
  return (
    <div className="px-5 pb-10 pt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ploy-coral-tint">
        One flare, start to finish
      </p>
      <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight text-ploy-text-primary">
        Here&apos;s what a connected timeline actually looks like.
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-ploy-text-secondary">
        Follow one flare from the moment it hits to the questions you bring into your next GI appointment.
      </p>

      <ol className="relative mt-8 space-y-8 border-l-2 border-ploy-background-accent-primary/25 pl-6">
        {STORIES.slice(1, 6).map((story, i) => (
          <motion.li
            key={story.caption}
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="absolute -left-[1.62rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ploy-background-primary ring-2 ring-ploy-background-accent-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-ploy-background-accent-primary" />
            </span>
            {story.label && (
              <p className="text-[12px] font-medium uppercase tracking-wide text-ploy-text-muted">{story.label}</p>
            )}
            <h3 className="mt-1 font-display text-[1.15rem] font-semibold text-ploy-text-primary">{story.headline}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ploy-text-secondary">{story.body}</p>
            <div className="mt-4 rounded-[1.375rem] border border-ploy-neutral-inverse-200 bg-ploy-background-primary p-4 shadow-[0_12px_32px_-20px_rgba(28,25,23,0.2)]">
              {STEPS[i].key === 'connect' ? <ConnectCard active /> : STEPS[i].card}
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="mt-10 rounded-[1.375rem] border border-ploy-background-accent-primary/30 bg-ploy-background-accent-primary/6 p-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ploy-coral-tint">
          Ready for your next flare
        </p>
        <h3 className="mt-2 font-display text-[1.35rem] font-semibold text-ploy-text-primary">
          Turn scattered symptoms into a timeline you can use.
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#start"
            className="inline-flex items-center justify-center rounded-full bg-ploy-background-accent-primary px-5 py-2.5 text-[14px] font-semibold text-white"
          >
            Start free
          </a>
          <a
            href="#journey"
            className="inline-flex items-center justify-center rounded-full border border-ploy-neutral-inverse-200 bg-ploy-background-primary px-5 py-2.5 text-[14px] font-semibold text-ploy-text-primary"
          >
            Explore your journey
          </a>
        </div>
        <p className="mt-3 text-[12px] text-ploy-text-muted">Timeline feature preview</p>
      </motion.div>
    </div>
  )
}

export default function OneFlareStartFinishSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="walkthrough"
        className="bg-ploy-background-primary"
        aria-labelledby="one-flare-heading"
      >
        <h2 id="one-flare-heading" className="sr-only">
          One flare, start to finish — timeline feature preview
        </h2>

        <div className="hidden md:block">
          <DesktopPinnedSection />
        </div>
        <div className="md:hidden">
          <MobileTimeline />
        </div>
      </section>
    </MotionConfig>
  )
}
