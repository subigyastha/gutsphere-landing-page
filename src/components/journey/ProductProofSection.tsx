import type { ReactNode } from 'react'

function MockPatternView({ bars }: { bars: readonly number[] }) {
  return (
    <div className="flex h-20 items-end justify-center gap-1.5 px-2">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-4 rounded-t bg-gradient-to-t from-gs-green/60 to-gs-green/25"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function MockVisitPrep({ lines }: { lines: readonly string[] }) {
  return (
    <ul className="journey-compact-list">
      {lines.map((line) => (
        <li key={line} className="journey-compact-list-item">
          <span className="h-3 w-3 shrink-0 rounded border border-gs-coral/40" aria-hidden="true" />
          {line}
        </li>
      ))}
    </ul>
  )
}

function MockTreatment({ progress }: { progress: number }) {
  return (
    <div className="px-1 py-1">
      <div className="mb-1 flex justify-between text-[10px] text-gs-text-muted">
        <span>Plan adherence</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gs-sand-light">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gs-green to-[#6B8F9E]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function MockFlareReview({ phases }: { phases: readonly string[] }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      {phases.map((phase, i) => (
        <span key={phase} className="flex items-center gap-2">
          <span
            className={`rounded-lg px-2.5 py-1.5 text-[10px] font-medium ${
              i === 1 ? 'bg-gs-coral/15 text-gs-coral' : 'bg-gs-card-elevated text-gs-text-secondary'
            }`}
          >
            {phase}
          </span>
          {i < phases.length - 1 && (
            <span className="text-[10px] text-gs-text-hint" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

function ProductMockCard({
  title,
  caption,
  children,
  compact = false,
}: {
  title: string
  caption: string
  children: ReactNode
  compact?: boolean
}) {
  if (compact) {
    return (
      <article className="journey-compact-mock h-full">
        <div className="journey-compact-mock-header">{title}</div>
        <div className="journey-compact-mock-body">{children}</div>
        <p className="shrink-0 border-t border-gs-border px-3 py-1.5 text-[10px] leading-snug text-gs-text-secondary">
          {caption}
        </p>
      </article>
    )
  }

  return (
    <article className="card-surface overflow-hidden">
      <div className="border-b border-gs-border bg-gs-card-elevated">{children}</div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-gs-text-primary">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-gs-text-secondary">{caption}</p>
      </div>
    </article>
  )
}

export function ProductProofPatterns({ compact = false }: { compact?: boolean }) {
  return (
    <ProductMockCard
      compact={compact}
      title="Before Diagnosis"
      caption="When you do not yet know what is going on — organize symptoms, stool changes, food reactions, flare-ups, and daily context."
    >
      <MockPatternView bars={[40, 65, 45, 80, 55]} />
    </ProductMockCard>
  )
}

export function ProductProofVisitPrep({ compact = false }: { compact?: boolean }) {
  return (
    <ProductMockCard
      compact={compact}
      title="Between Visits"
      caption="When your symptoms continue after the appointment ends — track what changed, what you tried, and what needs follow-up."
    >
      <MockVisitPrep
        lines={['Symptom timeline', 'Treatment changes', 'Questions to discuss']}
      />
    </ProductMockCard>
  )
}

export function ProductProofTreatment({ compact = false }: { compact?: boolean }) {
  return (
    <ProductMockCard
      compact={compact}
      title="During Treatment"
      caption="Track adherence, medication changes, supplements, symptoms, and flare-ups together."
    >
      <MockTreatment progress={72} />
    </ProductMockCard>
  )
}

export function ProductProofFlare({ compact = false }: { compact?: boolean }) {
  return (
    <ProductMockCard
      compact={compact}
      title="During a Flare-Up"
      caption="Look back at recent signals to understand context around the flare-up — not panic, pattern review."
    >
      <MockFlareReview phases={['Before', 'During', 'After']} />
    </ProductMockCard>
  )
}

export function ProductProofSection() {
  return (
    <section className="section-pad bg-gs-sand-light" aria-labelledby="product-proof-heading">
      <div className="container-narrow">
        <h2 id="product-proof-heading" className="section-heading mx-auto max-w-3xl text-center">
          Built for every stage of the digestive-health journey.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gs-text-secondary">
          Digestive health is not one moment. It is a journey through symptoms, appointments,
          treatment changes, flare-ups, and long-term management.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ProductProofPatterns />
          <ProductProofVisitPrep />
          <ProductProofTreatment />
          <ProductProofFlare />
        </div>
      </div>
    </section>
  )
}
