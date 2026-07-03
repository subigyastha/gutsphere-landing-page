import { useEffect } from 'react'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const faqs = [
  {
    question: 'I don\u2019t have a diagnosis — is this for me?',
    answer:
      'Yes. Start with what you feel — bloating, pain, stool changes, fatigue. A label like IBS or IBD can come later.',
  },
  {
    question: 'Will Gutsphere diagnose me?',
    answer:
      'No. Gutsphere is a self-help companion that helps you track, notice patterns, and prepare for care. It does not diagnose conditions or replace a doctor.',
  },
  {
    question: 'How is this different from a food diary?',
    answer:
      'A diary logs meals. Gutsphere connects meals with symptoms, stool, stress, and medications — and suggests what to try or ask next.',
  },
  {
    question: 'Is this just another symptom tracker?',
    answer:
      'No. Trackers only log today. Gutsphere builds your full story over time and helps you prepare for visits.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Yes. Your data is handled with HIPAA/GDPR-aligned practices — encrypted, never sold to third parties, and yours to export or delete anytime.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Gutsphere helps you track and prepare for care. Always talk to your doctor about serious concerns.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export function Style4FAQ() {
  useEffect(() => {
    const scriptId = 'style4-faq-jsonld'
    const existing = document.getElementById(scriptId)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqJsonLd)
    document.head.appendChild(script)

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [])

  return (
    <Style4Section
      id="faq"
      heading="Common questions"
      headingId="style4-faq-heading"
      background="white"
      centered
    >
      <Style4Reveal>
        <Style4Card interactive className="mx-auto mt-8 max-w-3xl p-5 sm:mt-10 sm:p-8">
        <dl className="divide-y divide-gs-border text-left">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5 sm:py-6">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-gs-text-primary sm:text-lg">
                {faq.question}
                <span
                  className="shrink-0 text-gs-text-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  &#9662;
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gs-text-secondary sm:mt-4 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </dl>
        </Style4Card>
      </Style4Reveal>
    </Style4Section>
  )
}
