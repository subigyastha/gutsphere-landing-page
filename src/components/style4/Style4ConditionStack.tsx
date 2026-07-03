import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConditionIcon } from '../v2/ConditionIcon'
import { conditionHub, conditionStubs, setConditionFrom } from '../../constants'
import { Style4Reveal } from './Style4Reveal'

const featuredSlugs = ['ibs', 'ibd', 'gerd'] as const

const featured = featuredSlugs
  .map((slug) => {
    const hub = conditionHub.find((c) => c.slug === slug)
    const stub = conditionStubs[slug]
    if (!hub || !stub) return null
    return { ...hub, bullets: stub.bullets }
  })
  .filter(Boolean)

export function Style4ConditionStack() {
  const [expanded, setExpanded] = useState<string | null>(featured[0]?.slug ?? null)

  return (
    <div className="relative space-y-3 sm:space-y-4">
      {featured.map((item, index) => {
        if (!item) return null
        const isOpen = expanded === item.slug

        return (
          <Style4Reveal key={item.slug} delay={index * 80}>
            <article
              className={`style4-card style4-expandable ${isOpen ? 'is-expanded' : ''}`}
            >
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gs-coral/15 to-gs-sand-light text-gs-coral"
                  aria-hidden="true"
                >
                  <ConditionIcon name={item.icon} className="h-6 w-6" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gs-coral">
                    For patients
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-gs-text-primary sm:text-2xl">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-gs-text-secondary sm:text-base">{item.blurb}</p>

                  <div
                    className="style4-expandable-body grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-4 space-y-2 border-t border-gs-border pt-4 text-sm text-gs-text-secondary sm:text-base">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-gs-coral" aria-hidden="true">
                              &bull;
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/conditions/${item.slug}`}
                        onClick={() => setConditionFrom('style-4')}
                        className="mt-4 inline-flex min-h-11 items-center rounded-full border-2 border-gs-coral px-5 text-sm font-semibold text-gs-coral transition-colors hover:bg-gs-coral hover:text-white"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="style4-open-btn shrink-0"
                  aria-expanded={isOpen}
                  aria-controls={`condition-panel-${item.slug}`}
                  id={`condition-toggle-${item.slug}`}
                  onClick={() => setExpanded(isOpen ? null : item.slug)}
                >
                  <span className="sr-only">{isOpen ? 'Collapse' : 'Expand'} {item.label}</span>
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
              </div>
            </article>
          </Style4Reveal>
        )
      })}
    </div>
  )
}
