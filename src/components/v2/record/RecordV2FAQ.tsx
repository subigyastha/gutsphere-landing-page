import { useEffect } from 'react'

const faqs = [
  {
    question: 'How is this different from a food diary?',
    answer:
      'A food diary logs meals. Gutsphere connects meals with stool changes, symptoms, stress, sleep, and medications over time — and surfaces patterns and visit-ready questions, not just a list of what you ate.',
  },
  {
    question: 'Is this just another symptom tracker?',
    answer:
      'No. Trackers log what happened today. Gutsphere builds a connected record over time — linking symptoms with stool, food, stress, medications, and flare patterns.',
  },
  {
    question: 'Do I need a diagnosis to start?',
    answer:
      'No. You can start with what you observe — bloating, pain, stool changes, fatigue — without needing a label like IBS, IBD, or GERD first.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Gutsphere is a self-help digestive health companion. It helps you track what\u2019s happening, notice patterns, and prepare for care — but it does not replace medical professionals.',
  },
  {
    question: 'Do I need to track every day for this to work?',
    answer:
      'No. Light tracking still helps, and missed days don\u2019t break anything. No streak pressure. No shame.',
  },
  {
    question: 'Is Gutsphere free?',
    answer:
      'Gutsphere offers a freemium model. Core features like symptom tracking, bowel logging, and basic insights are free.',
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

export function RecordV2FAQ() {
  useEffect(() => {
    const scriptId = 'record-v2-faq-jsonld'
    if (document.getElementById(scriptId)) return

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
    <section id="faq" className="section-pad bg-gs-sand-light" aria-labelledby="record-v2-faq-heading">
      <div className="container-narrow max-w-3xl">
        <h2 id="record-v2-faq-heading" className="section-heading">
          Frequently asked questions
        </h2>

        <dl className="mt-10 divide-y divide-gs-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 font-medium text-gs-text-primary">
                {faq.question}
                <span
                  className="shrink-0 text-gs-text-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  &#9662;
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gs-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}
