import { useEffect, useState } from 'react'
import { PRIMARY_CTA_LABEL, SIGNUP_URL } from '../../constants'

interface StickyMobileCTAProps {
  label?: string
}

export function StickyMobileCTA({ label = PRIMARY_CTA_LABEL }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gs-border bg-gs-card/95 p-4 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick action"
    >
      <div className="flex items-center gap-3">
        <a
          href={SIGNUP_URL}
          className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-gs-coral px-4 text-sm font-semibold text-white"
          data-cta="primary"
        >
          {label}
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="min-h-12 min-w-12 rounded-xl border border-gs-border px-3 text-sm text-gs-text-muted"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
