import { useEffect, useRef, useState } from 'react'
import { DEMO_EMBED_URL } from '../../constants'

export function HeroDemoEmbed() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div className="cp2-hero-demo" ref={rootRef}>
      <p className="cp2-hero-demo-kicker">
        <span className="cp2-hero-demo-pulse" aria-hidden="true" />
        Interactive app preview
      </p>

      <div className="cp2-phone cp2-phone--demo">
        <span className="cp2-phone-glow" aria-hidden="true" />

        <div className="cp2-screen cp2-screen--embed">
          {!loaded && (
            <div className="cp2-demo-skeleton" aria-hidden="true">
              <span className="cp2-demo-skeleton-bar" />
              <span className="cp2-demo-skeleton-card" />
              <span className="cp2-demo-skeleton-card cp2-demo-skeleton-card--short" />
              <span className="cp2-demo-skeleton-chip-row">
                <span />
                <span />
                <span />
              </span>
            </div>
          )}

          {shouldLoad && (
            <iframe
              className={`cp2-demo-iframe${loaded ? ' is-loaded' : ''}`}
              src={DEMO_EMBED_URL}
              title="Gutsphere app preview — IBS demo"
              loading="lazy"
              allow="clipboard-write; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      </div>

      <a
        href={DEMO_EMBED_URL}
        className="cp2-hero-demo-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open full demo <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}
