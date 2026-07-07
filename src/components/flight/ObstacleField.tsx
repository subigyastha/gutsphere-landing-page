import { useEffect, useRef } from 'react'
import type { FlightZoneTheme } from './constants'
import { useFlight } from './FlightContext'

interface ObstacleFieldProps {
  zoneId: string
  obstacles: readonly string[]
  theme: FlightZoneTheme
}

export function ObstacleField({ zoneId, obstacles, theme }: ObstacleFieldProps) {
  return (
    <div className={`flight-obstacle-field flight-obstacle-field--${theme}`}>
      {obstacles.map((label, i) => (
        <ObstacleChip key={label} id={`${zoneId}-${i}`} label={label} index={i} theme={theme} />
      ))}
    </div>
  )
}

function ObstacleChip({
  id,
  label,
  index,
  theme,
}: {
  id: string
  label: string
  index: number
  theme: FlightZoneTheme
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { registerObstacle, obstacleProximity } = useFlight()
  const prox = obstacleProximity[id] ?? 0
  const organized = prox > 0.35

  useEffect(() => {
    registerObstacle(id, ref.current)
    return () => registerObstacle(id, null)
  }, [id, registerObstacle])

  const angle = (index / 6) * Math.PI * 2
  const scatterX = Math.cos(angle) * (organized ? 8 : 24 + (index % 3) * 12)
  const scatterY = Math.sin(angle) * (organized ? 4 : 18 + (index % 2) * 14)

  return (
    <div
      ref={ref}
      className={`flight-obstacle flight-obstacle--${theme} ${organized ? 'flight-obstacle--organized' : ''}`}
      style={{
        transform: `translate(${scatterX}px, ${scatterY}px) scale(${organized ? 1 : 0.95 + prox * 0.05})`,
        opacity: organized ? 1 : 0.55 + prox * 0.45,
      }}
    >
      <span className="flight-obstacle-label">{label}</span>
    </div>
  )
}
