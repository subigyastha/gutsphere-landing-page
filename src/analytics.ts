/**
 * Fires a conversion event when primary CTAs are clicked.
 * Wire to GA4/PostHog by replacing the body below or setting window.gtag.
 */
import type { LandingVariant } from './constants'

const VALID_VARIANTS: LandingVariant[] = ['style-1', 'style-2', 'style-3', 'style-4']

function getVariant(): LandingVariant {
  const variant = document.documentElement.dataset.variant as LandingVariant | undefined
  if (variant && VALID_VARIANTS.includes(variant)) return variant
  return 'style-1'
}

export function initAnalytics() {
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest('[data-cta="primary"]')
    if (!target) return

    const variant = getVariant()
    const payload = {
      event: 'cta_click',
      variant,
      version: variant === 'style-3' || variant === 'style-4' ? 'v2' : 'v1',
      cta_label: target.textContent?.trim() ?? 'Start free',
      cta_location: target.closest('header') ? 'header' : target.closest('section')?.id ?? 'unknown',
    }

    window.dispatchEvent(new CustomEvent('gutsphere:conversion', { detail: payload }))

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', payload)
    }
  })

  window.addEventListener('gutsphere:variant_preview', (event) => {
    const detail = (event as CustomEvent<{ variant: LandingVariant }>).detail
    const payload = { event: 'variant_preview', variant: detail.variant }

    window.dispatchEvent(new CustomEvent('gutsphere:analytics', { detail: payload }))

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'variant_preview', payload)
    }
  })
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
