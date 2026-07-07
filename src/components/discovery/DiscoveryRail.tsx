import { DISCOVERY_STAGES } from './constants'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryRail() {
  const { activeStage, maxReachedStage, goToStage } = useDiscovery()
  const stage = DISCOVERY_STAGES[activeStage]

  return (
    <>
      <aside className="discovery-rail hidden lg:flex" aria-label="Page progress">
        <div className="discovery-rail-inner">
          <p className="discovery-rail-label">Your path</p>
          <ol className="discovery-rail-steps" role="list">
            {DISCOVERY_STAGES.map((s, i) => {
              const isActive = i === activeStage
              const isPast = i < activeStage
              const isReachable = i <= maxReachedStage

              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => isReachable && goToStage(i)}
                    disabled={!isReachable}
                    className={`discovery-rail-step ${isActive ? 'discovery-rail-step--active' : ''} ${isPast ? 'discovery-rail-step--past' : ''}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <span className="discovery-rail-step-num">{i + 1}</span>
                    <span className="discovery-rail-step-name">{s.name}</span>
                  </button>
                </li>
              )
            })}
          </ol>
          <div className="discovery-rail-meta">
            <p className="font-display text-xs font-semibold text-gs-text-primary">{stage?.name}</p>
            <p className="text-[10px] text-gs-coral">{stage?.metaphor}</p>
            <p className="mt-0.5 text-[10px] text-gs-text-muted">
              Section {activeStage + 1} of {DISCOVERY_STAGES.length}
            </p>
          </div>
        </div>
      </aside>

      <div
        className="discovery-rail-mobile border-b border-gs-border bg-gs-card/95 backdrop-blur-md lg:hidden"
        role="navigation"
        aria-label="Page progress"
      >
        <div className="flex items-center gap-2 overflow-x-auto px-4 py-2">
          {DISCOVERY_STAGES.map((s, i) => {
            const isActive = i === activeStage
            const isReachable = i <= maxReachedStage
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => isReachable && goToStage(i)}
                disabled={!isReachable}
                className={`discovery-rail-pill shrink-0 ${isActive ? 'discovery-rail-pill--active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {s.name}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
