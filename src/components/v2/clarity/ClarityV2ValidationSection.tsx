import { SectionShell } from '../../clarity/SectionShell'

const beats = [
  {
    title: 'You\u2019re not imagining it.',
    body: 'Bloating, pain, stool changes, and fatigue you live with are real — even without a diagnosis label.',
  },
  {
    title: 'Conflicting advice is exhausting.',
    body: 'Free guides and tracking in one place beat another late-night search spiral.',
  },
  {
    title: 'Start with what feels off.',
    body: 'Pick a condition below or log one symptom. You don\u2019t need the full picture today.',
  },
]

export function ClarityV2ValidationSection() {
  return (
    <SectionShell
      id="validation"
      background="sand-light"
      ariaLabelledBy="clarity-v2-validation-heading"
    >
      <h2 id="clarity-v2-validation-heading" className="section-heading max-w-2xl">
        If something feels off, you deserve clarity — not more guesswork
      </h2>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
        {beats.map((beat) => (
          <div key={beat.title} className="card-surface p-5 sm:p-6">
            <h3 className="font-display text-base font-semibold text-gs-text-primary sm:text-lg">
              {beat.title}
            </h3>
            <p className="mt-2 clarity-body text-base sm:text-lg">{beat.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
