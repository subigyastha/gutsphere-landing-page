import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ClipboardList, Heart, Compass, Lightbulb } from 'lucide-react'

const stages = [
  {
    id: 'track',
    title: 'Track',
    icon: ClipboardList,
    color: 'bg-pink-500',
    description: 'Symptoms, food, sleep & stress in seconds.',
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-br from-pink-50 to-white p-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
            Today • Mild bloating
          </div>
        </div>
        <div className="space-y-4">
          {['Abdominal Pain', 'Energy Level', 'Meals'].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl bg-white p-4 shadow"
            >
              <span>{item}</span>
              <div className="text-pink-500">✓</div>
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
    color: 'bg-rose-500',
    description: 'Gentle, responsive self-care recommendations.',
    screen: (
      <div className="h-full bg-gradient-to-br from-rose-50 to-white p-6">
        <div className="py-8 text-center">
          <Heart className="mx-auto mb-6 h-16 w-16 text-rose-500" />
          <h3 className="mb-2 text-xl font-semibold">Gentle Suggestion</h3>
          <p className="text-gray-600">Try ginger tea + 10 min walk for your logged symptoms.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'navigate',
    title: 'Navigate',
    icon: Compass,
    color: 'bg-teal-500',
    description: 'Know when to see a doctor and how to prepare.',
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-br from-teal-50 to-white p-6">
        <div className="mb-6 rounded-3xl bg-white p-5 shadow">
          <div className="mb-4 flex justify-between text-sm">
            <span>Next Appointment</span>
            <span className="font-medium text-teal-600">In 6 days</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-teal-100">
            <div className="h-full w-2/3 rounded-full bg-teal-500" />
          </div>
        </div>
        <div className="space-y-3 text-xs text-gray-600">
          <div>• Questions to ask your GI</div>
          <div>• Symptom history summary ready</div>
        </div>
      </div>
    ),
  },
  {
    id: 'understand',
    title: 'Understand',
    icon: Lightbulb,
    color: 'bg-amber-500',
    description: 'Patterns become clear evidence.',
    screen: (
      <div className="h-full bg-gradient-to-br from-amber-50 to-white p-6">
        <div className="mb-8 text-center">
          <div className="mb-4 text-5xl">📈</div>
          <h3 className="font-semibold">Your Pattern</h3>
          <p className="text-amber-600">Bloating peaks after dairy</p>
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight">An Operating System for Your Gut</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Four connected stages that work together as one intelligent system.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-20">
          <div className="relative shrink-0">
            <div className="h-[640px] w-[320px] rounded-[52px] bg-black p-3 shadow-2xl ring-1 ring-gray-900/10">
              <div className="relative h-full w-full overflow-hidden rounded-[42px] border border-zinc-800 bg-zinc-950">
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

                <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-3xl bg-black" />
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
                  className={`group cursor-pointer rounded-3xl border-2 bg-white p-8 transition-all duration-300 ${
                    isActive
                      ? 'border-pink-500 shadow-xl shadow-pink-100'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                  style={{ marginTop: index % 2 === 1 ? '40px' : '0px' }}
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${stage.color}`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mb-3 text-3xl font-semibold">{stage.title}</h3>
                  <p className="leading-relaxed text-gray-600">{stage.description}</p>

                  <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-400">
                    {isActive ? (
                      <>Tap again to pause • Live demo</>
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
          <p className="text-2xl font-medium text-gray-800">
            You pilot your health. <span className="text-pink-600">Gutsphere keeps the map.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default GutsphereSystemSection
