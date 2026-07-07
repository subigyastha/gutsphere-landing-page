interface SwipeableFeatureCardsProps {
  items: readonly { title: string; detail: string }[]
}

function FeatureCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl border border-gs-border bg-gs-card px-3 py-2.5 h-full">
      <p className="text-sm font-medium text-gs-text-primary">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-gs-text-secondary">{detail}</p>
    </div>
  )
}

export function SwipeableFeatureCards({ items }: SwipeableFeatureCardsProps) {
  return (
    <>
      <ul className="discovery-feature-list hidden gap-2 sm:grid sm:grid-cols-1" role="list">
        {items.map((item) => (
          <li key={item.title}>
            <FeatureCard title={item.title} detail={item.detail} />
          </li>
        ))}
      </ul>
      <div className="discovery-swipe-track sm:hidden" role="list">
        {items.map((item) => (
          <div key={item.title} className="discovery-swipe-card" role="listitem">
            <FeatureCard title={item.title} detail={item.detail} />
          </div>
        ))}
      </div>
    </>
  )
}

export function DiscoveryMockShell({
  label,
  children,
  footer,
}: {
  label: string
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="journey-compact-mock">
      <div className="journey-compact-mock-header">{label}</div>
      <div className="journey-compact-mock-body">{children}</div>
      {footer && (
        <div className="shrink-0 border-t border-gs-border bg-gs-sand-light px-3 py-1.5 text-xs text-gs-text-muted">
          {footer}
        </div>
      )}
    </div>
  )
}
