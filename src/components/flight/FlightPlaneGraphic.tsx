const PLANE_SRC = '/assets/flight-plane.png'

interface FlightPlaneGraphicProps {
  size?: number
  className?: string
  /** Use pixel-crisp rendering for the sprite asset */
  pixelated?: boolean
}

/**
 * Top-down flight craft sprite (nose points up at 0° rotation).
 */
export function FlightPlaneGraphic({
  size = 48,
  className = '',
  pixelated = true,
}: FlightPlaneGraphicProps) {
  return (
    <img
      src={PLANE_SRC}
      alt=""
      width={size}
      height={size}
      draggable={false}
      className={`flight-plane-graphic ${pixelated ? 'flight-plane-graphic--pixel' : ''} ${className}`.trim()}
    />
  )
}
