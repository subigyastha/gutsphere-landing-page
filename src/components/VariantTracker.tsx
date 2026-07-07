import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { LandingVariant } from '../constants'

function variantFromPath(pathname: string): LandingVariant {
  if (pathname === '/' || pathname.startsWith('/copilot-v2')) return 'style-13'
  if (pathname.startsWith('/onboard')) return 'style-11'
  if (pathname.startsWith('/scroll-gut')) return 'style-12'
  if (pathname.startsWith('/flow')) return 'style-10'
  if (pathname.startsWith('/discovery')) return 'style-9'
  if (pathname.startsWith('/copilot')) return 'style-8'
  if (pathname.startsWith('/guided')) return 'style-7'
  if (pathname.startsWith('/flight')) return 'style-6'
  if (pathname.startsWith('/journey')) return 'style-5'
  if (pathname.startsWith('/clarity-v4')) return 'style-4'
  if (pathname.startsWith('/navigators')) return 'style-2'
  if (pathname.startsWith('/clarity-v2')) return 'style-3'
  if (pathname.startsWith('/conditions')) {
    try {
      const stored = sessionStorage.getItem('gutsphere:condition-from')
      return stored === 'style-4' ? 'style-4' : 'style-3'
    } catch {
      return 'style-3'
    }
  }
  return 'style-1'
}

export function VariantTracker() {
  const { pathname } = useLocation()

  useEffect(() => {
    const variant = variantFromPath(pathname)
    document.documentElement.dataset.variant = variant
  }, [pathname])

  return null
}
