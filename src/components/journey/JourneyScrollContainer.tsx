import { useEffect, useRef, type ReactNode } from 'react'
import { useJourney } from './JourneyContext'

export function JourneyScrollContainer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerScrollContainer } = useJourney()

  useEffect(() => {
    registerScrollContainer(ref.current)
    return () => registerScrollContainer(null)
  }, [registerScrollContainer])

  return (
    <div ref={ref} className="journey-scroll-container journey-main">
      {children}
    </div>
  )
}
