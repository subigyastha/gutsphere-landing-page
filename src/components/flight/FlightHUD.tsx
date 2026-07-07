import { useFlight } from './FlightContext'

export function FlightHUD() {
  const { hudMessage, activeZoneIndex, planeEnabled } = useFlight()

  return (
    <div className="flight-hud" role="status" aria-live="polite" aria-atomic="true">
      <div className="flight-hud-inner">
        <span className="flight-hud-label">GutSphere Copilot</span>
        <span className="flight-hud-message">{hudMessage}</span>
        {planeEnabled && (
          <span className="flight-hud-zone" aria-hidden="true">
            Zone {activeZoneIndex + 1}/11
          </span>
        )}
      </div>
    </div>
  )
}
