import { useEffect, useRef, type ReactNode } from 'react'
import { useDiscovery } from './DiscoveryContext'

export function DiscoveryScrollContainer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerScrollContainer } = useDiscovery()

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
