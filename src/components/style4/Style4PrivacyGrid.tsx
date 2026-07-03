import { Button } from '../Button'
import { Style4Eyebrow } from './Style4Eyebrow'
import { Style4Reveal } from './Style4Reveal'
import { CONTACT_URL, PRIVACY_URL } from '../../constants'

const privacyValues = [
  {
    title: 'You control your data',
    body: 'You choose what to log, export, or share with your care team.',
  },
  {
    title: 'We protect your records',
    body: 'Encrypted handling with strict confidentiality by default.',
  },
  {
    title: 'HIPAA aligned',
    body: 'Designed with HIPAA-aligned practices for health information.',
  },
  {
    title: 'GDPR compliant',
    body: 'Built to respect data rights for users in the EU and beyond.',
  },
  {
    title: 'Never sold',
    body: 'We do not sell your information to third parties or advertisers.',
  },
  {
    title: 'Export anytime',
    body: 'Request access, correction, deletion, or a portable copy of your data.',
  },
]

export function Style4PrivacyGrid() {
  return (
    <section
      id="privacy"
      className="section-pad relative overflow-hidden bg-gs-text-primary"
      aria-labelledby="style4-privacy-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Style4Reveal>
            <Style4Eyebrow>Privacy</Style4Eyebrow>
            <h2 id="style4-privacy-heading" className="section-heading mt-3 !text-white">
              Our values lead the way
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              Gutsphere is trusted to track, manage, and prepare your health journey. Here is why
              your record stays yours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="secondary"
                href={PRIVACY_URL}
                className="w-full !border-white/20 !bg-white !text-gs-text-primary sm:w-auto"
              >
                Read full privacy policy
              </Button>
              <Button
                variant="ghost"
                href={CONTACT_URL}
                className="w-full !text-white hover:!bg-white/10 sm:w-auto"
              >
                Privacy questions
              </Button>
            </div>
          </Style4Reveal>

          <div className="grid style4-cell-gap sm:grid-cols-2">
            {privacyValues.map((item, index) => (
              <Style4Reveal key={item.title} delay={index * 50} as="article">
                <div className="style4-privacy-card rounded-3xl p-4 sm:p-5">
                  <h3 className="font-display text-base font-semibold text-gs-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gs-text-secondary">{item.body}</p>
                </div>
              </Style4Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
