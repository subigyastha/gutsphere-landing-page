import { useEffect } from 'react'
import { Style4Section } from './Style4Section'
import { Style4Card } from './Style4Card'
import { Style4Reveal } from './Style4Reveal'

const faqs = [
  {
    question: 'Is Gutsphere just another symptom tracker?',
    answer:
      'No. Trackers record what happened. Gutsphere is your GI health copilot — helping you understand what symptoms mean, what to do next, how to prepare for care, and how to manage treatment and long-term gut health.',
  },
  {
    question: 'I don\u2019t have a diagnosis — is this for me?',
    answer:
      'Yes. Many people start in diagnosis limbo with confusing symptoms. Gutsphere supports you from undiagnosis through treatment and long-term control — no label required to begin.',
  },
  {
    question: 'Will Gutsphere diagnose me or replace my doctor?',
    answer:
      'No. Gutsphere does not diagnose or provide medical advice. It complements clinical care by helping you organize your journey, prepare for visits, and follow treatment with more clarity.',
  },
  {
    question: 'How is this different from a food diary?',
    answer:
      'A diary logs meals. Gutsphere connects meals with symptoms, stool, stress, medications, and routines — then helps you understand patterns, ask better questions, and know what to do next.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Yes. Your data is handled with HIPAA/GDPR-aligned practices — encrypted, never sold to third parties, and yours to export or delete anytime.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Gutsphere helps you navigate and prepare for care. Always talk to your doctor about serious concerns.',
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
