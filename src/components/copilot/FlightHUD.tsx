import { COPILOT_ROUTE } from './constants'
import { useCopilot } from './CopilotContext'

export function FlightHUD() {
  const { activeChapter, cardIndex } = useCopilot()
  const card = activeChapter.cards[cardIndex]

  const hudMessages: Record<string, string> = {
    boarding: COPILOT_ROUTE,
    confusion: 'Scattered signals — organizing your flight path.',
    'self-care': 'Your first check-in is the first signal.',
    'clinical-navigation': 'Less scattered memory. More useful context.',
    'clinical-intelligence': 'From scattered clues to clearer clinical context.',
    trust: 'Patient-sided. Medically responsible.',
    clarity: COPILOT_ROUTE,
  }

  return (
    <div className="copilot-flight-hud" role="status" aria-live="polite" aria-atomic="true">
      <span className="copilot-flight-hud-label">GutSphere Copilot</span>
      <p className="copilot-flight-hud-message">{hudMessages[activeChapter.theme]}</p>
      {card.eyebrow && <span className="copilot-flight-hud-eyebrow">{card.eyebrow}</span>}
    </div>
  )
}
