import { useEffect } from 'react'

const faqs = [
  {
    question: 'I don\u2019t have a diagnosis — is this for me?',
    answer:
      'Yes. You can start with what you feel — bloating, pain, stool changes, fatigue — without needing a label like IBS or IBD first.',
  },
  {
    question: 'Will Gutsphere diagnose me?',
    answer:
      'No. Gutsphere is a self-help companion that helps you track, notice patterns, and prepare for care. It does not diagnose conditions or replace a doctor.',
  },
  {
    question: 'How is this different from a food diary?',
    answer:
      'A diary logs meals. Gutsphere connects meals with symptoms, stool, stress, and medications — and helps you prepare for visits with a full timeline.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Yes. Your health record is yours. Logs stay private by default — you decide what to export or share.',
  },
  {
    question: 'Is this just another symptom tracker?',
    answer:
      'No. Trackers log today. Gutsphere builds a connected record and visit-ready summaries over time.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Gutsphere helps you track and prepare for care. Always talk to your doctor about serious concerns.',
  },
  {
    question: 'Is Gutsphere free?',
    answer:
      'Core features like symptom tracking and basic insights are free. Advanced analytics may require a premium subscription.',
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

export function YouV2FAQ() {
  useEffect(() => {
    const scriptId = 'you-v2-faq-jsonld'
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
    <section id="faq" className="section-pad bg-gs-sand-light" aria-labelledby="you-v2-faq-heading">
      <div className="container-narrow max-w-3xl">
        <h2 id="you-v2-faq-heading" className="section-heading max-w-2xl">
          Questions you might have before starting
        </h2>

        <dl className="mt-8 divide-y divide-gs-border sm:mt-10">
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
      </div>
    </section>
  )
}
