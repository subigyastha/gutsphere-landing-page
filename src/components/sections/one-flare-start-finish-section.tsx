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
  Bell,
  Calendar,
  Check,
  ChevronRight,
  Heart,
  LineChart,
  MessageCircle,
  PenLine,
  Sparkles,
  Sun,
  Thermometer,
} from 'lucide-react'
import { platformUrl } from '../../constants'

const TOTAL_STATES = 7
const OPENING = 0
const CLOSING = 6

const HEADER_SAFE = 60
const NAV_SAFE = 64
const VIEWPORT = 760

const CHIP_CLASS =
  'inline-flex items-center rounded-full border border-gs-border bg-gs-sand-light px-3 py-1 text-[13px] font-medium text-gs-text-secondary'

const ACCENT_CHIP_CLASS =
  'inline-flex items-center rounded-full bg-gs-coral/12 px-3 py-1 text-[13px] font-semibold text-gs-coral'

const PHONE_TITLE = 'font-display text-[16px] font-semibold leading-snug text-gs-text-primary'
const PHONE_BODY = 'text-[14px] leading-snug text-gs-text-secondary'
const PHONE_META = 'text-[13px] text-gs-text-muted'

const CARD_SHELL =
  'rounded-2xl border border-gs-border bg-gs-card p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'

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
    eyebrow: 'One flare, start to finish',
    headline: 'Here’s what a connected timeline actually looks like.',
    body: 'Follow one flare from the moment it hits to the questions you bring into your next GI appointment.',
    caption: 'Now: start · timeline preview',
  },
  {
    label: 'Tuesday · 9:14 PM',
    headline: 'A rough flare hits.',
    body: 'You’re wiped, but logging it takes fifteen seconds — a tap, a slider, done.',
    caption: 'Now: 1 / 5 · log',
  },
  {
    label: 'The Gutsphere engine',
    headline: 'Gutsphere connects the dots for you.',
    body: 'The Gutsphere engine links this flare to the takeout you logged at lunch and three short nights of sleep in a row.',
    caption: 'Now: 2 / 5 · connect',
  },
  {
    label: 'Wednesday morning',
    headline: 'On a hard day, it keeps things simple.',
    body: 'It doesn’t hand you a to-do list — it surfaces a calmer routine and one small thing to try.',
    caption: 'Now: 3 / 5 · care',
  },
  {
    label: 'Six weeks in',
    headline: 'The pattern becomes clear.',
    body: 'A pattern you couldn’t see on your own becomes visible: dairy plus poor sleep, again and again.',
    caption: 'Now: 4 / 5 · insight',
  },
  {
    label: 'Your next GI appointment',
    headline: 'You walk in more prepared.',
    body: 'You bring a clean timeline and three questions worth asking — so you’re not explaining everything from memory.',
    caption: 'Now: 5 / 5 · appointment ready',
  },
  {
    eyebrow: 'Ready for your next flare',
    headline: 'Turn scattered symptoms into a timeline you can use.',
    body: 'Start with one quick log. Gutsphere helps connect what happened, what may have shaped it, and what to bring into your next care decision.',
    caption: 'Timeline feature preview',
  },
]

const OPENING_CHIPS = [
  'Symptoms',
  'Nutrition',
  'Sleep',
  'Care',
  'Patterns',
  'Visit prep',
] as const

const CHIP_SCATTER = [
  { x: -72, y: -48, r: -8 },
  { x: 64, y: -36, r: 6 },
  { x: -58, y: 12, r: -4 },
  { x: 70, y: 28, r: 10 },
  { x: -40, y: 56, r: -6 },
  { x: 52, y: 64, r: 5 },
] as const

function IconWell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gs-sand-light text-gs-text-secondary ${className}`.trim()}
    >
      {children}
    </span>
  )
}

function ListRow({
  icon,
  title,
  subtitle,
  trailing,
}: {
  icon: ReactNode
  title: string
  subtitle: string
  trailing?: ReactNode
}) {
  return (
    <div className="flex items-start gap-3 border-b border-gs-divider py-3 last:border-b-0 last:pb-0 first:pt-0">
      <IconWell>{icon}</IconWell>
      <div className="min-w-0 flex-1">
        <p className={PHONE_TITLE}>{title}</p>
        <p className={`mt-0.5 ${PHONE_BODY} text-gs-text-secondary`}>{subtitle}</p>
      </div>
      {trailing}
    </div>
  )
}

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 text-[15px] text-gs-text-secondary">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gs-coral/15">
        <Check className="h-3.5 w-3.5 text-gs-coral" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </div>
  )
}

/** Track · symptom log — mirrors Quick Add capture */
const LogCard = memo(function LogCard() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <IconWell>
          <Thermometer className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </IconWell>
        <div className="min-w-0 flex-1">
          <p className={PHONE_TITLE}>Symptom log</p>
          <p className={PHONE_META}>Tue · 9:14 PM</p>
        </div>
        <span className="rounded-full bg-gs-green/12 px-2.5 py-0.5 text-[12px] font-semibold text-gs-green">
          Saved
        </span>
      </div>

      <p className={`mt-3 ${PHONE_META} font-medium`}>Severity</p>
      <div className="mt-1.5 flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-2 flex-1 rounded-full ${i < 4 ? 'bg-gs-coral' : 'bg-gs-border'}`}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className={CHIP_CLASS}>Bloating</span>
        <span className={CHIP_CLASS}>Cramps</span>
      </div>
      <p className={`mt-3 ${PHONE_META}`}>Logged in about 15 seconds</p>
    </div>
  )
})

/** Engine result — insight emphasis, non-diagnostic */
const ConnectCard = memo(function ConnectCard({ active }: { active: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className={`${ACCENT_CHIP_CLASS} gap-1.5`}>
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Gutsphere engine
        </span>
        <span className={PHONE_META}>Tue · 11:02 PM</span>
      </div>

      <p className={`mt-3 ${PHONE_TITLE}`}>Possible thread found</p>
      <p className={`mt-1 ${PHONE_BODY}`}>
        Your data suggests this flare may link to what you logged earlier.
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className={CHIP_CLASS}>Late meal</span>
        <span className={CHIP_CLASS}>Short sleep ×3</span>
      </div>

      <motion.div
        className="mt-3 rounded-xl border border-gs-insight-border bg-gs-insight-bg px-3 py-2.5"
        initial={false}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0.9, scale: 0.98 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <p className={PHONE_BODY}>
          <span className="font-semibold text-gs-text-primary">Signal:</span> flare after takeout +
          three short nights
        </p>
      </motion.div>
    </div>
  )
})

/** Care · self-care habit rows */
const CareCard = memo(function CareCard() {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <div>
          <p className={PHONE_TITLE}>Flare support</p>
          <p className={PHONE_META}>Today · gentle</p>
        </div>
        <span className={`${ACCENT_CHIP_CLASS} gap-1.5 shrink-0`}>
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          Recommended now
        </span>
      </div>

      <ListRow
        icon={<Heart className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />}
        title="Warm, simple breakfast"
        subtitle="Easy on digestion — no pressure to be perfect"
      />
      <ListRow
        icon={<Sun className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />}
        title="10-min walk"
        subtitle="One small thing when energy is low"
        trailing={<ChevronRight className="mt-2.5 h-5 w-5 text-gs-text-hint" aria-hidden="true" />}
      />
    </div>
  )
})

/** Patterns · signal → meaning → confidence */
const InsightCard = memo(function InsightCard() {
  const heights = [38, 86, 30, 74, 46, 22, 68, 34, 80]
  const highlights = [1, 3, 6, 8]

  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        <p className={`${PHONE_TITLE} leading-snug`}>Dairy + poor sleep → flare</p>
        <span className="shrink-0 rounded-full bg-gs-green/12 px-2.5 py-0.5 text-[12px] font-semibold text-gs-green">
          Moderate evidence
        </span>
      </div>
      <p className={`mt-1.5 ${PHONE_BODY}`}>
        This pattern appears to show up after dairy on short-sleep nights.
      </p>

      <div className="mt-3 flex h-14 items-end gap-1">
        {heights.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${highlights.includes(i) ? 'bg-gs-coral' : 'bg-gs-coral/25'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-3">
        <div className="h-2 overflow-hidden rounded-full bg-gs-border">
          <div className="h-full w-[62%] rounded-full bg-gs-green" />
        </div>
        <p className={`mt-1.5 ${PHONE_META}`}>62% confidence · 6-week window</p>
      </div>
    </div>
  )
})

/** Care · visit prep / navigation */
const AppointmentCard = memo(function AppointmentCard() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <IconWell>
          <Calendar className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </IconWell>
        <div className="min-w-0 flex-1">
          <p className={PHONE_TITLE}>Visit summary</p>
          <p className={PHONE_META}>Ready for your GI appointment</p>
        </div>
      </div>

      <div className="mt-3 space-y-2 rounded-xl bg-gs-sand-light p-3">
        <CheckRow>Timeline ready</CheckRow>
        <CheckRow>Pattern notes included</CheckRow>
        <CheckRow>3 questions to ask</CheckRow>
      </div>

      <span className={`${ACCENT_CHIP_CLASS} mt-3`}>Prepare for visit</span>
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

const NAV_TABS = [
  { label: 'Today', icon: Sun },
  { label: 'Track', icon: PenLine },
  { label: 'Patterns', icon: LineChart },
  { label: 'Care', icon: Heart },
  { label: 'Chat', icon: MessageCircle },
] as const

function PhoneHeader() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 border-b border-gs-border bg-gs-sand px-3 py-3">
      <div className="flex items-center justify-between">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gs-sand-light text-[12px] font-semibold text-gs-coral"
          aria-hidden="true"
        >
          SC
        </span>
        <p className="font-display text-[17px] font-semibold text-gs-text-primary">Care</p>
        <span
          className="relative flex h-9 w-9 items-center justify-center text-gs-text-secondary"
          aria-hidden="true"
        >
          <Bell className="h-5 w-5" strokeWidth={1.8} />
          <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gs-coral px-0.5 text-[9px] font-semibold text-white">
            2
          </span>
        </span>
      </div>
    </div>
  )
}

function PhoneBottomNav() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-gs-border bg-gs-card px-1.5 pb-2.5 pt-2">
      <div className="flex items-center justify-between">
        {NAV_TABS.map((tab) => {
          const Icon = tab.icon
          const active = tab.label === 'Care'
          return (
            <div
              key={tab.label}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 py-0.5 ${
                active ? 'text-gs-coral' : 'text-gs-text-secondary'
              }`}
            >
              <span
                className={`flex h-8 w-11 items-center justify-center rounded-full ${
                  active ? 'bg-gs-coral/16 ring-1 ring-gs-coral/30' : ''
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
              </span>
              <span className={`text-[11px] ${active ? 'font-bold' : 'font-semibold'}`}>
                {tab.label}
              </span>
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
      <div className="relative h-full bg-gs-sand px-4 pt-[4.5rem] pb-[5rem]">
        <div className="mx-auto flex max-w-[15rem] flex-col items-center gap-2">
          {OPENING_CHIPS.map((chip) => (
            <span key={chip} className={CHIP_CLASS}>
              {chip}
            </span>
          ))}
          <div className={`mt-4 w-full ${CARD_SHELL}`}>
            <p className={PHONE_TITLE}>Building your timeline</p>
            <p className={`mt-1 ${PHONE_BODY} text-gs-text-muted`}>
              Connecting symptoms, food, sleep, care notes, and patterns.
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-gs-coral" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full bg-gs-sand pt-[4.5rem] pb-[5rem]">
      <div className="relative mx-auto flex h-full max-w-[15rem] items-center justify-center">
        {OPENING_CHIPS.map((chip, i) => (
          <OpeningChip key={chip} label={chip} index={i} organize={organize} />
        ))}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-px -translate-x-1/2 bg-gs-border"
          style={{ opacity: lineOpacity }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-[18%] bottom-[22%] w-px -translate-x-1/2 border-l border-dashed border-gs-border"
          style={{ opacity: railOpacity }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute left-1/2 top-1/2 z-10 w-[13.5rem] -translate-x-1/2 -translate-y-1/2"
          style={{ scale: coreScale, opacity: coreOpacity }}
        >
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gs-coral/12 ring-4 ring-gs-coral/10">
            <Sparkles className="h-6 w-6 text-gs-coral" aria-hidden="true" />
          </div>
          <div className={CARD_SHELL}>
            <p className={PHONE_TITLE}>Building your timeline</p>
            <p className={`mt-1 ${PHONE_BODY} text-gs-text-muted`}>
              Connecting symptoms, food, sleep, care notes, and patterns.
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gs-border">
              <motion.div
                className="h-full origin-left rounded-full bg-gs-coral"
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
    <div className="relative h-full overflow-hidden bg-gs-sand">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-gs-sand to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-gs-sand to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-0 px-3"
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
              className="relative mb-8 flex gap-2.5"
            >
              <div className="flex w-9 shrink-0 flex-col items-center pt-1">
                <span className="text-[10px] font-semibold tracking-wide text-gs-text-muted">
                  {step.month}
                </span>
                <span className="font-display text-[17px] font-semibold leading-none text-gs-text-primary">
                  {step.day}
                </span>
                {isActive ? (
                  <span className="mt-2 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-2 ring-gs-coral">
                    <span className="h-2 w-2 rounded-full bg-gs-coral" />
                  </span>
                ) : (
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-gs-border" />
                )}
              </div>

              <motion.div
                className={`min-w-0 flex-1 rounded-2xl border bg-gs-card p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                  isActive
                    ? 'border-gs-coral/40 opacity-100'
                    : 'border-gs-border opacity-45'
                }`}
                animate={{ scale: isActive ? 1 : 0.97 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {step.key === 'connect' ? <ConnectCard active={isActive} /> : step.card}
              </motion.div>
            </div>
          )
        })}

        <div className="h-[14rem]" aria-hidden="true" />
      </motion.div>

      <div
        className="pointer-events-none absolute left-[1.15rem] top-[14rem] bottom-[14rem] w-px border-l border-dashed border-gs-border"
        aria-hidden="true"
      />
    </div>
  )
}

function ClosingScreen() {
  return (
    <div className="flex h-full flex-col bg-gs-sand px-4 pt-[4.5rem] pb-[5rem]">
      <div className="flex items-center gap-3">
        <IconWell>
          <Check className="h-5 w-5 text-gs-coral" strokeWidth={2.2} aria-hidden="true" />
        </IconWell>
        <div>
          <p className="font-display text-[17px] font-semibold text-gs-text-primary">
            Timeline ready
          </p>
          <p className={PHONE_META}>One flare, connected end to end</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-gs-insight-border bg-gs-insight-bg p-4">
        <div className="space-y-2.5">
          <CheckRow>5 moments connected</CheckRow>
          <CheckRow>1 pattern identified</CheckRow>
          <CheckRow>1 care path tracked</CheckRow>
          <CheckRow>3 questions prepared</CheckRow>
        </div>
      </div>

      <a
        href={platformUrl('web', 'one-flare-phone')}
        className="cp2-btn mt-auto w-full text-[16px]"
        data-cta="primary"
      >
        Start tracking
      </a>
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
      className="relative w-[min(360px,88vw)] aspect-[9/19.2] rounded-[44px] border border-gs-border bg-gs-card p-[3px] shadow-[0_46px_90px_-46px_rgba(28,25,23,0.35),0_18px_40px_-28px_rgba(28,25,23,0.12)]"
      aria-hidden="true"
    >
      <div className="relative h-full overflow-hidden rounded-[41px] bg-gs-sand">
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
          <p className="text-[12px] font-semibold uppercase tracking-widest text-gs-coral">
            {story.eyebrow}
          </p>
        )}
        {story.label && (
          <p className="mt-3 text-[13px] font-medium text-gs-text-muted">{story.label}</p>
        )}
        <h2
          className={`font-display text-[clamp(1.75rem,3.2vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-gs-text-primary ${
            story.eyebrow && !story.label ? 'mt-3' : story.label ? 'mt-2' : 'mt-3'
          }`}
        >
          {story.headline}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-gs-text-secondary">{story.body}</p>
        <p className="mt-5 text-[12px] font-medium text-gs-text-muted">{story.caption}</p>

        {showClosingCtas && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#start" className="cp2-btn">
              Start free
            </a>
            <a href="#journey" className="cp2-btn ghost">
              Explore your journey
            </a>
            <p className="w-full text-[12px] text-gs-text-muted">Timeline feature preview</p>
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
      <div className="sticky top-0 flex h-screen items-center bg-gs-sand">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-10 px-6 lg:gap-16 lg:px-10">
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-2" aria-hidden="true">
              {Array.from({ length: TOTAL_STATES }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= state ? 'bg-gs-coral' : 'bg-gs-border'
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
    <div className="bg-gs-sand px-5 pb-10 pt-8">
      <p className="text-[12px] font-semibold uppercase tracking-widest text-gs-coral">
        One flare, start to finish
      </p>
      <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight text-gs-text-primary">
        Here&apos;s what a connected timeline actually looks like.
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-gs-text-secondary">
        Follow one flare from the moment it hits to the questions you bring into your next GI
        appointment.
      </p>

      <ol className="relative mt-8 space-y-8 border-l-2 border-gs-coral/25 pl-6">
        {STORIES.slice(1, 6).map((story, i) => (
          <motion.li
            key={story.caption}
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="absolute -left-[1.62rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gs-sand ring-2 ring-gs-coral">
              <span className="h-1.5 w-1.5 rounded-full bg-gs-coral" />
            </span>
            {story.label && (
              <p className="text-[12px] font-medium text-gs-text-muted">{story.label}</p>
            )}
            <h3 className="mt-1 font-display text-[1.15rem] font-semibold text-gs-text-primary">
              {story.headline}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gs-text-secondary">{story.body}</p>
            <div className={`mt-4 ${CARD_SHELL}`}>
              {STEPS[i].key === 'connect' ? <ConnectCard active /> : STEPS[i].card}
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="mt-10 rounded-2xl border border-gs-insight-border bg-gs-insight-bg p-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p className="text-[12px] font-semibold uppercase tracking-widest text-gs-coral">
          Ready for your next flare
        </p>
        <h3 className="mt-2 font-display text-[1.35rem] font-semibold text-gs-text-primary">
          Turn scattered symptoms into a timeline you can use.
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#start" className="cp2-btn">
            Start free
          </a>
          <a href="#journey" className="cp2-btn ghost">
            Explore your journey
          </a>
        </div>
        <p className="mt-3 text-[12px] text-gs-text-muted">Timeline feature preview</p>
      </motion.div>
    </div>
  )
}

export default function OneFlareStartFinishSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="walkthrough"
        className="bg-gs-sand"
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
