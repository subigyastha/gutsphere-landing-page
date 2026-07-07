import { useFlight } from './FlightContext'
import { FlightPlaneGraphic } from './FlightPlaneGraphic'

export function CursorPlane() {
  const { planeEnabled, plane, hoveringInteractive, reducedMotion, hasMoved } = useFlight()

  if (!planeEnabled || !hasMoved) return null

  const simplified = hoveringInteractive

  return (
    <div
      className="flight-cursor-plane"
      aria-hidden="true"
      style={{
        transform: `translate3d(${plane.x}px, ${plane.y}px, 0) translate(-50%, -50%) rotate(${plane.rotation}deg) scale(${simplified ? 0.75 : 1})`,
        opacity: simplified ? 0.4 : 1,
      }}
    >
      {!reducedMotion && !simplified && <div className="flight-cursor-trail" />}
      <FlightPlaneGraphic size={52} className="flight-cursor-plane-img" />
      {!simplified && <div className="flight-cursor-glow" />}
    </div>
  )
}
