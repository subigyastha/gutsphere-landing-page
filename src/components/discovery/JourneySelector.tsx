import { useState } from 'react'
import { Button } from '../Button'
import { SIGNUP_URL } from '../../constants'
import { JOURNEY_OPTIONS } from './constants'
import { useDiscovery } from './DiscoveryContext'

const STAGE_BY_SECTION: Record<string, number> = {
  'self-care': 4,
  'clinical-navigation': 5,
  'clinical-intelligence': 6,
  guidance: 7,
}

export function JourneySelector() {
  const [selected, setSelected] = useState<string | null>(null)
  const { goToStage } = useDiscovery()

  const selectedOption = JOURNEY_OPTIONS.find((o) => o.id === selected)

  const scrollToSection = (sectionId: string) => {
    const stage = STAGE_BY_SECTION[sectionId]
    if (stage != null) goToStage(stage)
  }

  return (
    <div className="discovery-journey-selector">
      <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
        Choose what feels closest. GutSphere will show how it can help from there.
      </p>
      <ul className="discovery-journey-cards mt-3" role="list">
        {JOURNEY_OPTIONS.map((option) => {
          const isSelected = selected === option.id
          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => setSelected(option.id)}
                className={`discovery-journey-card ${isSelected ? 'discovery-journey-card--selected' : ''}`}
                aria-pressed={isSelected}
              >
                <span className="discovery-journey-card-title">{option.title}</span>
                <span className="discovery-journey-card-desc">{option.description}</span>
              </button>
            </li>
          )
        })}
      </ul>
      {selectedOption && (
        <div className="discovery-journey-response mt-3 rounded-xl border border-gs-coral/25 bg-gs-insight-section-bg px-3 py-3">
          <p className="text-xs leading-relaxed text-gs-text-secondary sm:text-sm">
            {selectedOption.message}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <Button href={SIGNUP_URL} data-cta="primary" className="w-full sm:w-auto">
              Start Your Gut Check-In
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection(selectedOption.sectionId)}
              className="w-full sm:w-auto"
            >
              See relevant section
            </Button>
          </div>
        </div>
      )}
      <p className="mt-3 text-xs font-medium text-gs-coral sm:text-sm">
        No diagnosis needed to begin. Start with where you are today.
      </p>
    </div>
  )
}
