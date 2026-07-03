export function HighSeveritySection() {
  return (
    <section
      className="section-pad bg-gs-text-primary text-gs-sand"
      aria-labelledby="severity-heading"
    >
      <div className="container-narrow">
        <div className="max-w-3xl">
          <h2 id="severity-heading" className="section-heading text-gs-sand">
            For the moments when symptoms are no longer background noise.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gs-sand/80">
            Recurring flare-ups. Blood on toilet paper. Severe constipation. Diarrhea that
            disrupts your day. Reflux that keeps coming back. Pain that makes you question
            what is normal. Test results you do not fully understand. A doctor visit you cannot
            afford to waste.
          </p>
        </div>

        <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm leading-relaxed text-gs-sand/70">
          Gutsphere does not replace urgent or professional medical care. It helps you keep a
          clearer record, prepare better questions, and know what to bring into the conversation.
        </div>
      </div>
    </section>
  )
}
