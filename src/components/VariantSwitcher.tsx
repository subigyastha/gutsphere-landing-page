import { NavLink } from 'react-router-dom'
import type { LandingVariant } from '../constants'

const tabs: { label: string; to: string; variant: LandingVariant }[] = [
  { label: 'Style 1', to: '/', variant: 'style-1' },
  { label: 'Style 2', to: '/navigators', variant: 'style-2' },
  { label: 'Style 3', to: '/clarity-v2', variant: 'style-3' },
  { label: 'Style 4', to: '/clarity-v4', variant: 'style-4' },
]

const showSwitcher =
  import.meta.env.DEV || import.meta.env.VITE_SHOW_VARIANT_SWITCHER === 'true'

export function VariantSwitcher() {
  if (!showSwitcher) return null

  return (
    <div
      className="border-b border-white/10 bg-gs-text-primary text-white"
      role="navigation"
      aria-label="Landing page style preview"
    >
      <div className="container-wide flex flex-wrap items-center justify-center gap-1 px-4 py-2 sm:px-8 lg:px-12">
        <span className="mr-3 hidden text-xs text-white/60 sm:inline">Preview:</span>
        {tabs.map((tab) => (
          <NavLink
            key={tab.variant}
            to={tab.to}
            end={tab.to === '/'}
            data-variant={tab.variant}
            className={({ isActive }) =>
              `rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                isActive
                  ? 'bg-white/15 text-white underline decoration-gs-coral decoration-2 underline-offset-4'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('gutsphere:variant_preview', { detail: { variant: tab.variant } }),
              )
            }}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
