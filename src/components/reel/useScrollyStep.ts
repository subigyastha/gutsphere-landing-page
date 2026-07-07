import { useEffect, useRef, useState } from 'react'

/**
 * Scrollama-style step tracking: sentinel markers inside a tall section
 * intersect a centered root band as the user scrolls the viewport.
 */
export function useScrollyStep(stepCount: number, viewportEl: HTMLElement | null) {
  const sectionRef = useRef<HTMLElement>(null)
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !viewportEl || stepCount < 1) return

    if (stepCount === 1) {
      setActiveStep(0)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const best = visible[0]
        if (!best) return

        const step = Number((best.target as HTMLElement).dataset.step)
        if (!Number.isNaN(step)) setActiveStep(step)
      },
      {
        root: viewportEl,
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sentinelRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [viewportEl, stepCount])

  return { sectionRef, sentinelRefs, activeStep }
}
