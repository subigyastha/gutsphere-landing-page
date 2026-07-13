import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    description: 'Symptoms, food, sleep & stress in seconds.',
    screen: (
      <div className="flex h-full flex-col bg-gs-sand p-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gs-border bg-gs-card px-4 py-2 text-sm font-medium text-gs-text-primary shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            Today · Mild bloating
          </div>
        </div>
        <div className="space-y-3">
          {['Abdominal Pain', 'Energy Level', 'Meals'].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-gs-border bg-gs-card p-4"
            >
              <span className="text-gs-text-primary">{item}</span>
              <span className="font-semibold text-gs-coral">✓</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'care',
    title: 'Care',
    icon: Heart,
    description: 'Gentle, responsive self-care recommendations.',
    screen: (
      <div className="flex h-full flex-col justify-center bg-gs-sand p-6 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gs-sand-light text-gs-coral">
          <Heart className="h-7 w-7" strokeWidth={1.8} />
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-gs-text-primary">
          Gentle suggestion
        </h3>
        <p className="text-gs-text-secondary">
          Try ginger tea + 10 min walk for your logged symptoms.
        </p>
      </div>
    ),
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    description: 'Know when to see a doctor and how to prepare.',
    screen: (
      <div className="flex h-full flex-col bg-gs-sand p-6">
        <div className="mb-6 rounded-2xl border border-gs-border bg-gs-card p-5">
          <div className="mb-4 flex justify-between text-sm">
            <span className="text-gs-text-secondary">Next appointment</span>
            <span className="font-medium text-gs-coral">In 6 days</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gs-border">
            <div className="h-full w-2/3 rounded-full bg-gs-coral" />
          </div>
        </div>
        <div className="space-y-3 text-sm text-gs-text-secondary">
          <div>· Questions to ask your GI</div>
          <div>· Symptom history summary ready</div>
        </div>
      </div>
    ),
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    description: 'Patterns become clear evidence.',
    screen: (
      <div className="flex h-full flex-col justify-center bg-gs-sand p-6 text-center">
        <div className="mb-4 rounded-2xl border border-gs-insight-border bg-gs-insight-bg p-5">
          <h3 className="font-display font-semibold text-gs-text-primary">Your pattern</h3>
          <p className="mt-2 text-sm text-gs-text-secondary">
            Bloating appears to peak after dairy
          </p>
        </div>
      </div>
    ),
  },
]

export function GutsphereSystemSection() {
  const [activeStage, setActiveStage] = useState<string | null>(null)
  const [autoIndex, setAutoIndex] = useState(0)

  useEffect(() => {
    if (activeStage) return

    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % stages.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [activeStage])

  const currentStage = activeStage
    ? stages.find((s) => s.id === activeStage)
    : stages[autoIndex]

  return (
    <section className="bg-gs-sand py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl font-semibold tracking-tight text-gs-text-primary">
            An operating system for your gut
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gs-text-secondary">
            Four connected stages that work together as one intelligent system.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-20">
          <div className="relative shrink-0">
            <div className="h-[640px] w-[320px] rounded-[52px] border border-gs-border bg-gs-card p-[3px] shadow-[0_24px_64px_-28px_rgba(28,25,23,0.28)]">
              <div className="relative h-full w-full overflow-hidden rounded-[49px] bg-gs-sand">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStage?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {currentStage?.screen}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-lg grid-cols-1 gap-6 md:grid-cols-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = activeStage === stage.id

              return (
                <motion.div
                  key={stage.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveStage(isActive ? null : stage.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveStage(isActive ? null : stage.id)
                    }
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group cursor-pointer rounded-2xl border-2 bg-gs-card p-8 transition-all duration-300 ${
                    isActive
                      ? 'border-gs-coral shadow-[0_12px_40px_rgba(239,83,80,0.12)]'
                      : 'border-gs-border hover:border-gs-coral/30'
                  }`}
                  style={{ marginTop: index % 2 === 1 ? '40px' : '0px' }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gs-sand-light text-gs-text-secondary">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="mb-3 font-display text-3xl font-semibold text-gs-text-primary">
                    {stage.title}
                  </h3>
                  <p className="leading-relaxed text-gs-text-secondary">{stage.description}</p>

                  <div className="mt-6 flex items-center gap-1.5 text-xs text-gs-text-muted">
                    {isActive ? (
                      <>Tap again to pause · Live demo</>
                    ) : (
                      <>Click to preview in phone</>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="font-display text-2xl font-medium text-gs-text-primary">
            You pilot your health. <span className="text-gs-coral">Gutsphere keeps the map.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default GutsphereSystemSection
