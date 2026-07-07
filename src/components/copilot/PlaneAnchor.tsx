import { PlaneCraft } from '../guided/PlaneCraft'
import { useCopilot } from './CopilotContext'
import type { ChapterTheme, PlanePosition } from './constants'

interface PlaneAnchorProps {
  theme: ChapterTheme
  planePosition: PlanePosition
}

export function PlaneAnchor({ theme, planePosition }: PlaneAnchorProps) {
  const { heroTakeoff, reducedMotion, chapterIndex } = useCopilot()
  const isHero = planePosition === 'center' && chapterIndex === 0
  const showPlane = planePosition !== 'none'

  if (!showPlane) return null

  return (
    <div
      className={`copilot-plane-anchor copilot-plane-anchor--${theme} ${isHero ? 'copilot-plane-anchor--hero' : 'copilot-plane-anchor--bottom'} ${reducedMotion ? 'copilot-plane-anchor--static' : ''}`}
      aria-hidden="true"
    >
      {isHero ? (
        <PlaneCraft variant={heroTakeoff ? 'takeoff' : 'hero'} takeoffProgress={heroTakeoff ? 1 : 0} />
      ) : (
        <PlaneCraft variant="enter" />
      )}
    </div>
  )
}
