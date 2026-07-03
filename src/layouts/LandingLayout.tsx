import type { ReactNode } from 'react'
import { VariantSwitcher } from '../components/VariantSwitcher'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <VariantSwitcher />
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  )
}
