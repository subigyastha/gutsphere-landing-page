import { SectionShell } from './SectionShell'

const faqs = [
  {
    question: 'Is this just another symptom tracker?',
    answer:
      'No. Trackers only log today. Gutsphere builds your full story over time — and tells you what to do next.',
  },
  {
    question: 'Do I need a diagnosis to start?',
    answer:
      'No. Start with what you feel — bloating, pain, stool changes. A label can come later.',
  },
  {
    question: 'Is this medical advice?',
    answer:
      'No. Gutsphere helps you track and prepare for care. Always talk to your doctor about serious concerns.',
  },
]

export function ClarityFAQ() {
  return (
    <SectionShell id="faq" background="card" ariaLabelledBy="clarity-faq-heading">
      <h2 id="clarity-faq-heading" className="section-heading text-center">
        Common questions
      </h2>

      <dl className="mx-auto mt-10 max-w-2xl divide-y divide-gs-border">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-6">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-xl font-medium text-gs-text-primary">
              {faq.question}
              <span
                className="shrink-0 text-2xl text-gs-text-muted transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                &#9662;
              </span>
            </summary>
            <p className="mt-4 text-lg leading-relaxed text-gs-text-secondary">{faq.answer}</p>
          </details>
        ))}
      </dl>
    </SectionShell>
  )
}
