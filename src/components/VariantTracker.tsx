import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { LandingVariant } from '../constants'

/** Production surface is style-13 (Copilot v2). Legacy lab paths redirect home. */
function variantFromPath(pathname: string): LandingVariant {
  if (
    pathname === '/' ||
    pathname.startsWith('/for') ||
    pathname.startsWith('/about') ||
    pathname.startsWith('/faq') ||
    pathname.startsWith('/journey') ||
    pathname.startsWith('/compare') ||
    pathname.startsWith('/features') ||
    pathname.startsWith('/conditions')
  ) {
    return 'style-13'
  }
  return 'style-13'
}

export function VariantTracker() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.dataset.variant = variantFromPath(pathname)
  }, [pathname])

  return null
}
