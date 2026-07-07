import { JourneyRouteMap } from './JourneyRouteMap'
import { JourneyRouteMapMobile } from './JourneyRouteMapMobile'
import { JOURNEY_STAGES } from './constants'
import { useJourney } from './JourneyContext'

export function JourneyRail() {
  const { activeStage } = useJourney()
  const stage = JOURNEY_STAGES[activeStage]

  return (
    <>
      <aside className="journey-rail hidden lg:flex" aria-label="Flight route map">
        <div className="journey-rail-inner">
          <p className="journey-rail-label">Your route</p>
          <div className="journey-rail-map-wrap">
            <JourneyRouteMap variant="rail" />
          </div>
          <div className="journey-rail-meta">
            <p className="font-display text-xs font-semibold text-gs-text-primary">{stage?.name}</p>
            <p className="text-[10px] text-gs-coral">{stage?.metaphor}</p>
            <p className="mt-0.5 text-[10px] text-gs-text-muted">
              Waypoint {activeStage + 1} of {JOURNEY_STAGES.length}
            </p>
          </div>
        </div>
      </aside>

      <div
        className="journey-rail-mobile border-b border-gs-border bg-gs-card/95 backdrop-blur-md lg:hidden"
        role="navigation"
        aria-label="Flight route map"
      >
        <JourneyRouteMapMobile />
      </div>
    </>
  )
}
