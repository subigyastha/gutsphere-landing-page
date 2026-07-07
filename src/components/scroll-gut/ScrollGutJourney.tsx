import { useRef } from 'react'
import { GutMapSvg } from './GutMapSvg'
import { ScrollGutStopMarker } from './ScrollGutStop'
import { SCROLL_GUT_STOPS } from './constants'
import { useScrollGutJourney } from './useScrollGutJourney'

export function ScrollGutJourney() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  const { plane, positions, stopVisibilities, scrollToProgress } = useScrollGutJourney(
    canvasRef,
    svgRef,
    pathRef,
    SCROLL_GUT_STOPS,
  )

  return (
    <section
      className="scroll-gut-journey"
      id="scroll-gut-journey"
      aria-labelledby="scroll-gut-journey-title"
    >
      <p className="scroll-gut-section-kicker">Guided digestive journey</p>
      <h2 id="scroll-gut-journey-title" className="scroll-gut-section-title">
        Scroll the path. Reveal what GutSphere helps you understand.
      </h2>
      <p className="scroll-gut-section-intro">
        The plane follows the S-shaped digestive path as you scroll. Each stop unlocks floating cards
        from the GutSphere copilot journey — from scattered clues to clearer care.
      </p>

      <div className="scroll-gut-canvas" ref={canvasRef}>
        <div className="scroll-gut-ambient scroll-gut-ambient--a" />
        <div className="scroll-gut-ambient scroll-gut-ambient--b" />
        <div className="scroll-gut-ambient scroll-gut-ambient--c" />

        <GutMapSvg ref={svgRef} pathRef={pathRef} plane={plane} />

        <div className="scroll-gut-checkpoint-layer" aria-hidden="false">
          {SCROLL_GUT_STOPS.map((stop, index) => (
            <ScrollGutStopMarker
              key={stop.id}
              stop={stop}
              position={positions[index]}
              visibility={
                stopVisibilities[index] ?? {
                  stopIndex: index,
                  isReached: false,
                  isActive: false,
                  visibleCardCount: 0,
                  activeCardIndex: -1,
                }
              }
              onSelect={() => scrollToProgress(stop.progress)}
            />
          ))}
        </div>

        <div className="scroll-gut-scroll-note" aria-hidden="true">
          <span>13 stops ahead</span>
          <svg viewBox="0 0 80 80">
            <path
              d="M18 22c13 29 27 38 44 31"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 5"
            />
            <path
              d="M57 42l8 12-14 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
