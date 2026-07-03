import type { ReactNode } from 'react'

type Variant = 'hero' | 'timeline' | 'food' | 'doctor'

interface ProductMockupProps {
  variant?: Variant
  compact?: boolean
}

export function ProductMockup({ variant = 'hero', compact = false }: ProductMockupProps) {
  if (variant === 'timeline') return <TimelineMock compact={compact} />
  if (variant === 'food') return <FoodMock compact={compact} />
  if (variant === 'doctor') return <DoctorMock compact={compact} />
  return <HeroMock compact={compact} />
}

function Shell({
  children,
  compact,
  title,
}: {
  children: ReactNode
  compact?: boolean
  title: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gs-border bg-gs-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${compact ? '' : 'w-full'}`}
    >
      <div className="flex items-center gap-2 border-b border-gs-border bg-gs-sand-light px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-gs-coral/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-gs-amber-bg" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-gs-text-hint" aria-hidden="true" />
        <span className="ml-2 text-xs font-medium text-gs-text-muted">{title}</span>
      </div>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>{children}</div>
    </div>
  )
}

function HeroMock({ compact }: { compact?: boolean }) {
  return (
    <Shell title="Your digestive health record" compact={compact}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gs-text-muted">This week</p>
          <p className="font-display text-lg font-semibold text-gs-text-primary">Symptom timeline</p>
        </div>
        <span className="rounded-full bg-gs-insight-bg px-3 py-1 text-xs font-semibold text-gs-coral">
          3 patterns noticed
        </span>
      </div>

      <div className="mb-5 flex h-24 items-end gap-1.5 rounded-xl bg-gs-sand p-3">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`w-full rounded-t-md ${i === 3 || i === 5 ? 'bg-gs-coral/70' : 'bg-gs-text-hint/40'}`}
              style={{ height: `${h}%` }}
            />
            <span className="text-[10px] text-gs-text-muted">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <InsightRow
          label="Stool pattern"
          value="Looser after dairy — 3 of last 5 days"
          accent="muted"
        />
        <InsightRow
          label="Before last flare"
          value="Late dinner + poor sleep + skipped medication"
          accent="coral"
        />
        <InsightRow
          label="Ask your GI"
          value="Could timing of meals be affecting urgency?"
          accent="primary"
        />
      </div>

      <div className="gs-insight-section mt-4 rounded-xl px-4 py-3">
        <p className="text-xs font-semibold text-gs-coral">Next step</p>
        <p className="text-sm text-gs-text-primary">Try logging meals 3 hours before bed this week.</p>
      </div>
    </Shell>
  )
}

function TimelineMock({ compact }: { compact?: boolean }) {
  return (
    <Shell title="Symptom + stool timeline" compact={compact}>
      <div className="space-y-3">
        {[
          { day: 'Wed', event: 'Bloating after lunch', type: 'symptom' },
          { day: 'Thu', event: 'Stool: Type 6, urgency', type: 'stool' },
          { day: 'Fri', event: 'Flare — pain 7/10', type: 'flare' },
        ].map((item) => (
          <div key={item.day} className="flex gap-3 rounded-lg bg-gs-sand px-3 py-2.5">
            <span className="w-8 shrink-0 text-xs font-semibold text-gs-text-muted">{item.day}</span>
            <span
              className={`h-2 w-2 shrink-0 self-center rounded-full ${
                item.type === 'flare' ? 'bg-gs-coral' : 'bg-gs-text-hint'
              }`}
              aria-hidden="true"
            />
            <span className="text-xs text-gs-text-primary">{item.event}</span>
          </div>
        ))}
      </div>
    </Shell>
  )
}

function FoodMock({ compact }: { compact?: boolean }) {
  return (
    <Shell title="Food experiments" compact={compact}>
      <div className="space-y-3">
        <ExperimentRow name="Low-FODMAP trial" days="Day 12" result="Less bloating" positive />
        <ExperimentRow name="Dairy-free week" days="Day 7" result="Stool still loose" positive={false} />
        <ExperimentRow name="Probiotic added" days="Day 3" result="Too early to tell" positive={null} />
      </div>
    </Shell>
  )
}

function DoctorMock({ compact }: { compact?: boolean }) {
  return (
    <Shell title="Visit brief" compact={compact}>
      <p className="mb-3 text-xs font-semibold text-gs-coral uppercase">For your gastroenterologist</p>
      <ul className="space-y-2">
        {[
          'Urgency increased after evening meals',
          'Blood noticed twice — both after constipation',
          'Current meds: omeprazole, started 3 weeks ago',
          'Question: Should we test for SIBO?',
        ].map((q) => (
          <li key={q} className="flex gap-2 text-xs text-gs-text-primary">
            <span className="text-gs-green" aria-hidden="true">
              ✓
            </span>
            {q}
          </li>
        ))}
      </ul>
    </Shell>
  )
}

function InsightRow({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: 'muted' | 'coral' | 'primary'
}) {
  const dot =
    accent === 'coral'
      ? 'bg-gs-coral'
      : accent === 'primary'
        ? 'bg-gs-text-primary'
        : 'bg-gs-text-hint'
  return (
    <div className="flex gap-3 rounded-xl bg-gs-sand px-4 py-3">
      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
      <div>
        <p className="text-xs font-semibold text-gs-text-muted">{label}</p>
        <p className="text-sm text-gs-text-primary">{value}</p>
      </div>
    </div>
  )
}

function ExperimentRow({
  name,
  days,
  result,
  positive,
}: {
  name: string
  days: string
  result: string
  positive: boolean | null
}) {
  return (
    <div className="rounded-lg border border-gs-border bg-gs-sand px-3 py-2.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gs-text-primary">{name}</span>
        <span className="text-[10px] text-gs-text-muted">{days}</span>
      </div>
      <p
        className={`mt-1 text-xs ${
          positive === true
            ? 'text-gs-green'
            : positive === false
              ? 'text-gs-coral'
              : 'text-gs-text-muted'
        }`}
      >
        {result}
      </p>
    </div>
  )
}
