import { NavLink } from 'react-router-dom'
import type { LandingVariant } from '../constants'

const tabs: { label: string; to: string; variant: LandingVariant }[] = [
  { label: 'Style 4', to: '/clarity-v4', variant: 'style-4' },
  { label: 'Style 6', to: '/flight', variant: 'style-6' },
  { label: 'Style 7', to: '/guided', variant: 'style-7' },
  { label: 'Style 8', to: '/copilot', variant: 'style-8' },
  { label: 'Style 10', to: '/flow', variant: 'style-10' },
  { label: 'Style 11', to: '/onboard', variant: 'style-11' },
  { label: 'Style 12', to: '/scroll-gut', variant: 'style-12' },
]

export function VariantSwitcher() {
  return (
    <div
      className="variant-switcher"
      role="navigation"
      aria-label="Landing page style switcher"
    >
      <div className="container-wide flex flex-wrap items-center justify-center gap-1 px-4 py-2 text-white sm:px-8 lg:px-12">
        <span className="mr-3 hidden text-xs font-semibold uppercase tracking-wider text-white/60 sm:inline">
          Styles
        </span>
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
