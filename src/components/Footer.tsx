import { GutsphereLogo } from './GutsphereLogo'
import { PRIVACY_URL, SIGNUP_URL, TERMS_URL } from '../constants'

export function Footer() {
  return (
    <footer className="border-t border-gs-border bg-gs-sand-light px-4 py-12 sm:px-8 lg:px-12">
      <div className="container-wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <GutsphereLogo height={32} />
            <p className="mt-3 max-w-xs text-sm text-gs-text-secondary">
              Your copilot from the first confusing symptom to long-term confidence.
            </p>
            <p className="mt-2 text-xs text-gs-text-muted">
              Patient-built &middot; Research-informed &middot; Doctor-supportive
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="mb-3 font-semibold text-gs-text-primary">Product</p>
              <ul className="space-y-2 text-gs-text-secondary">
                <li>
                  <a href="/#system" className="hover:text-gs-coral">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-gs-coral">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gs-coral">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-gs-text-primary">Company</p>
              <ul className="space-y-2 text-gs-text-secondary">
                <li>
                  <a href="/about" className="hover:text-gs-coral">
                    About
                  </a>
                </li>
                <li>
                  <a href="/for" className="hover:text-gs-coral">
                    Who it&apos;s for
                  </a>
                </li>
                <li>
                  <a href={SIGNUP_URL} className="hover:text-gs-coral">
                    Open app
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-gs-text-primary">Legal</p>
              <ul className="space-y-2 text-gs-text-secondary">
                <li>
                  <a href={PRIVACY_URL} className="hover:text-gs-coral">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href={TERMS_URL} className="hover:text-gs-coral">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gs-border pt-8 text-xs text-gs-text-muted">
          <p>
            Gutsphere is a self-help digestive health companion. It does not provide medical
            advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare
            provider for medical concerns.
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Gutsphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
