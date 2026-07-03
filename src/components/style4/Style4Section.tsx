import type { ReactNode } from 'react'
import { Style4Eyebrow } from './Style4Eyebrow'
import { Style4Reveal } from './Style4Reveal'

type Style4SectionProps = {
  id?: string
  eyebrow?: string
  heading: string
  headingId: string
  intro?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'sand' | 'sand-light'
  centered?: boolean
  gradientHeading?: boolean
}

const bgMap = {
  white: 'bg-white',
  sand: 'bg-gs-sand',
  'sand-light': 'bg-gs-sand-light',
}

export function Style4Section({
  id,
  eyebrow,
  heading,
  headingId,
  intro,
  children,
  className = '',
  background = 'white',
  centered = false,
  gradientHeading = true,
}: Style4SectionProps) {
  return (
    <section
      id={id}
      className={`section-pad relative ${bgMap[background]} ${className}`}
      aria-labelledby={headingId}
    >
      <div className={`container-narrow ${centered ? 'text-center' : ''}`}>
        <Style4Reveal>
          {eyebrow && <Style4Eyebrow>{eyebrow}</Style4Eyebrow>}
          <h2
            id={headingId}
            className={`section-heading mt-3 max-w-3xl ${centered ? 'mx-auto' : ''} ${
              gradientHeading ? 'style4-gradient-text' : ''
            }`}
          >
            {heading}
          </h2>
          {intro && (
            <p className={`body-lg mt-3 max-w-2xl sm:mt-4 ${centered ? 'mx-auto' : ''}`}>
              {intro}
            </p>
          )}
        </Style4Reveal>
        {children}
      </div>
    </section>
  )
}
