import { useState, type ComponentType } from 'react'
import GutsphereSystemSection from '../components/system/GutsphereSystemSection'
import GutsphereSystemSectionHover from '../components/system/GutsphereSystemSectionHover'
import SystemSectionVersion1, {
  SystemSectionVersion2,
  SystemSectionVersion5,
} from '../components/system/SystemSectionVersions'

type VersionId = 'interactive' | 'hover' | 'v1' | 'v2' | 'v5'

const versions: { id: VersionId; label: string; Component: ComponentType }[] = [
  { id: 'interactive', label: 'Interactive · Phone demo', Component: GutsphereSystemSection },
  { id: 'hover', label: 'Hover · Vertical list', Component: GutsphereSystemSectionHover },
  { id: 'v1', label: 'V1 · Emerging cards', Component: SystemSectionVersion1 },
  { id: 'v2', label: 'V2 · Orbiting screens', Component: SystemSectionVersion2 },
  { id: 'v5', label: 'V5 · Spread layout', Component: SystemSectionVersion5 },
]

export function SystemSectionLanding() {
  const [active, setActive] = useState<VersionId>('interactive')
  const Active = versions.find((v) => v.id === active)?.Component ?? GutsphereSystemSection

  return (
    <div className="min-h-screen bg-gs-sand">
      <div className="sticky top-0 z-50 border-b border-gs-border bg-gs-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3">
          <p className="text-sm font-medium text-gs-text-primary">System section concepts</p>
          <div className="flex flex-wrap gap-2">
            {versions.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setActive(v.id)}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition ${
                  active === v.id
                    ? 'bg-gs-coral text-white'
                    : 'bg-gs-sand-light text-gs-text-secondary hover:bg-gs-border/60'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Active />
    </div>
  )
}
