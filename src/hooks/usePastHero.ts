import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const HERO_SELECTORS = [
  '[data-landing-hero]',
  '#journey-hero',
  '#discovery-hero',
  '#flight-zone-boarding',
  '#hero-heading',
  '#style4-hero-heading',
  '#clarity-v2-hero-heading',
  '#clarity-hero-heading',
  '#community-hero-heading',
  '#record-v2-hero-heading',
  '#you-v2-hero-heading',
]

function resolveHeroElement(): HTMLElement | null {
  const marked = document.querySelector<HTMLElement>('[data-landing-hero]')
  if (marked) return marked

  for (const selector of HERO_SELECTORS) {
    const el = document.querySelector<HTMLElement>(selector)
    if (!el) continue
    if (el.tagName === 'H1') return el.closest('section, header, article') ?? el
    return el
  }

  return null
}

function resolveScrollRoot(): Element | null {
  return (
    document.querySelector('.journey-scroll-container') ??
    document.querySelector('.reel-viewport') ??
    document.querySelector('.onboard-viewport') ??
    null
  )
}

export function usePastHero() {
  const { pathname } = useLocation()
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    setPastHero(false)

    let observer: IntersectionObserver | null = null
    let scrollTarget: Element | Window = window
    let hero: HTMLElement | null = null

    const update = (ratio: number) => {
      setPastHero(ratio < 0.12)
    }

    const measure = () => {
      if (!hero) return
      const rootRect =
        scrollTarget instanceof Element
          ? scrollTarget.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight }
      const heroRect = hero.getBoundingClientRect()
      const visibleTop = Math.max(heroRect.top, rootRect.top)
      const visibleBottom = Math.min(heroRect.bottom, rootRect.bottom)
      const visible = Math.max(0, visibleBottom - visibleTop)
      update(visible / Math.max(heroRect.height, 1))
    }

    const bind = () => {
      observer?.disconnect()

      hero = resolveHeroElement()
      const scrollRoot = resolveScrollRoot()
      scrollTarget = scrollRoot ?? window

      if (!hero) {
        setPastHero(true)
        return
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return
          update(entry.intersectionRatio)
        },
        {
          root: scrollRoot,
          threshold: [0, 0.08, 0.12, 0.2, 0.35, 0.5, 0.75, 1],
        },
      )
      observer.observe(hero)
      measure()
    }

    const onScroll = () => measure()

    bind()
    const t1 = window.setTimeout(bind, 200)
    const t2 = window.setTimeout(bind, 600)
    scrollTarget.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      observer?.disconnect()
      scrollTarget.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return pastHero
}
