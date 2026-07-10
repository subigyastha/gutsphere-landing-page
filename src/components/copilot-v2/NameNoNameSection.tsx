import { useState } from 'react'
import { BothSection } from './SystemSection'
import { NameNoNameInteractiveSection } from './NameNoNameInteractiveSection'

type NameNoNameVersion = 'original' | 'interactive'

/**
 * Name or no name — keeps the live original alongside the new interactive
 * Quiz / Flip discovery section so both can be compared on the landing page.
 */
export function NameNoNameSection() {
  const [version, setVersion] = useState<NameNoNameVersion>('interactive')

  return (
    <div className="nnn-version-root">
      <div className="nnn-version-bar" role="group" aria-label="Name or no name section version">
        <span className="nnn-version-label">Section version</span>
        <div className="nnn-version-toggle">
          <button
            type="button"
            className={`nnn-version-btn${version === 'original' ? ' is-active' : ''}`}
            aria-pressed={version === 'original'}
            onClick={() => setVersion('original')}
          >
            Original
          </button>
          <button
            type="button"
            className={`nnn-version-btn${version === 'interactive' ? ' is-active' : ''}`}
            aria-pressed={version === 'interactive'}
            onClick={() => setVersion('interactive')}
          >
            Interactive
          </button>
        </div>
      </div>

      {version === 'original' ? <BothSection /> : <NameNoNameInteractiveSection />}
    </div>
  )
}
