import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { VariantSwitcher } from '../components/VariantSwitcher'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { LandingAudioWidget } from '../components/LandingAudioWidget'

const IMMERSIVE_PATHS = ['/journey', '/flight', '/guided', '/copilot', '/discovery', '/onboard', '/scroll-gut'] as const
const REEL_PATHS = ['/copilot'] as const
const ONBOARD_PATHS = ['/onboard'] as const

export function LandingLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const isImmersive = IMMERSIVE_PATHS.some((path) => pathname.startsWith(path))
  const isReelLanding = REEL_PATHS.some((path) => pathname.startsWith(path))
  const isOnboardLanding = ONBOARD_PATHS.some((path) => pathname.startsWith(path))

  return (
    <>
      <div className="landing-chrome">
        <VariantSwitcher />
        {!isOnboardLanding && <Header />}
      </div>
      <main
        className={
          isOnboardLanding
            ? 'onboard-landing-main'
            : isReelLanding
              ? 'reel-landing-main'
              : isImmersive
                ? 'immersive-landing-main'
                : undefined
        }
      >
        {children}
      </main>
      {!isImmersive && <Footer />}
      <LandingAudioWidget />
    </>
  )
}
