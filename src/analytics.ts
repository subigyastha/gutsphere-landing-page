/**
 * Fires a conversion event when primary CTAs are clicked.
 * Calls window.gtag when a measurement script is present.
 */
import { variantVersion, type LandingVariant } from './constants'

function getVariant(): LandingVariant {
  const variant = document.documentElement.dataset.variant as LandingVariant | undefined
  if (variant?.startsWith('style-')) return variant
  return 'style-13'
}

export function initAnalytics() {
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest('[data-cta="primary"]')
    if (!target) return

    const variant = getVariant()
    const payload = {
      event: 'cta_click',
      variant,
      version: variantVersion(variant),
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
