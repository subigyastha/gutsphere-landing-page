import { ProductMockup } from './ProductMockup'

const proofs = [
  {
    title: 'Symptom + stool timeline',
    caption: 'See what changed and when.',
    variant: 'timeline' as const,
  },
  {
    title: 'Food experiment history',
    caption: 'Know what you tried and what happened after.',
    variant: 'food' as const,
  },
  {
    title: 'Doctor visit brief',
    caption: 'Bring a clearer story to your gastroenterologist.',
    variant: 'doctor' as const,
  },
]

export function ProductProofSection() {
  return (
    <section id="product-proof" className="section-pad bg-gs-sand" aria-labelledby="product-proof-heading">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 id="product-proof-heading" className="section-heading mb-5">
            What your digestive health story looks like inside Gutsphere.
          </h2>
          <p className="body-lg">
            Record, meaning, and next step — not just a logging form.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {proofs.map((proof) => (
            <article key={proof.title} className="card-surface overflow-hidden">
              <div className="border-b border-gs-border bg-gs-sand-light p-4">
                <ProductMockup variant={proof.variant} compact />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-gs-text-primary">
                  {proof.title}
                </h3>
                <p className="mt-2 text-sm text-gs-text-secondary">{proof.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
