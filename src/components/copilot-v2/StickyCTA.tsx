import { useEffect, useState } from 'react'
import { SIGNUP_URL } from '../../constants'

/**
 * Mobile-only bottom CTA bar.
 * Shows after the visitor leaves the hero/start zone, and hides when the
 * final CTA (or marketing final band) is on screen — so it never competes
 * with the real close.
 *
 * Layout space for the bar is always reserved on mobile (see CSS). Visibility
 * is visual-only so showing/hiding cannot change document height and thrash
 * IntersectionObservers near the footer.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const start =
      document.getElementById('start') ??
      document.querySelector('.cp2-hero, .mp-hero, .wf-hero')
    const end =
      document.getElementById('cta') ??
      document.querySelector('.mp-final, .cp2-bottom-band, .cp2-final')

    let pastStart = false
    let nearEnd = false

    const sync = () => {
      setVisible(pastStart && !nearEnd)
    }

    const observers: IntersectionObserver[] = []

    if (start) {
      const startObs = new IntersectionObserver(
        ([entry]) => {
          pastStart = !entry.isIntersecting || entry.boundingClientRect.bottom < 80
          sync()
        },
        { rootMargin: '0px 0px -40% 0px', threshold: [0, 0.1, 0.4] },
      )
      startObs.observe(start)
      observers.push(startObs)
    } else {
      pastStart = window.scrollY > 480
    }

    if (end) {
      const endObs = new IntersectionObserver(
        ([entry]) => {
          // Enter near-end early; leave only once the band is well clear —
          // hysteresis prevents show/hide oscillation at the footer edge.
          if (entry.isIntersecting) {
            nearEnd = true
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.35) {
            nearEnd = false
          }
          sync()
        },
        { rootMargin: '80px 0px 0px 0px', threshold: [0, 0.05, 0.15, 0.35] },
      )
      endObs.observe(end)
      observers.push(endObs)
    }

    if (!start || !end) {
      const onScroll = () => {
        if (!start) pastStart = window.scrollY > 480
        if (!end) {
          nearEnd =
            window.innerHeight + window.scrollY > document.documentElement.scrollHeight - 520
        }
        sync()
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => {
        window.removeEventListener('scroll', onScroll)
        observers.forEach((o) => o.disconnect())
      }
    }

    sync()
    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <div
      className={`cp2-sticky-cta${visible ? ' is-visible' : ''}`}
      role="complementary"
      aria-label="Start Gutsphere"
      aria-hidden={!visible}
    >
      <div className="cp2-sticky-cta-copy">
        <b>Ready when you are</b>
        <small>Free to start · no card</small>
      </div>
      <a
        href={SIGNUP_URL}
        className="cp2-btn cp2-sticky-cta-btn"
        data-cta="primary"
        tabIndex={visible ? 0 : -1}
      >
        Start free
      </a>
    </div>
  )
}
