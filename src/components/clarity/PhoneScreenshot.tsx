import { useState } from 'react'

interface PhoneScreenshotProps {
  src: string
  alt: string
  label?: string
  className?: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function PhoneScreenshot({ src, alt, label, className = '', fetchPriority }: PhoneScreenshotProps) {
  const [failed, setFailed] = useState(false)
  const displayLabel = label ?? alt

  return (
    <div className={`mx-auto w-full max-w-[260px] ${className}`}>
      <div className="relative rounded-[2.5rem] border-[3px] border-gs-text-primary bg-gs-text-primary p-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="absolute right-[-2px] top-24 h-12 w-1 rounded-l bg-gs-coral" aria-hidden="true" />
        <div className="overflow-hidden rounded-[2rem] bg-gs-sand-light">
          {!failed ? (
            <img
              src={src}
              alt={alt}
              className="aspect-[9/19.5] w-full object-cover object-top"
              fetchPriority={fetchPriority}
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex aspect-[9/19.5] w-full flex-col items-center justify-center border-2 border-dashed border-gs-border bg-gs-card p-6 text-center">
              <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gs-insight-bg text-gs-coral">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <p className="text-sm font-medium text-gs-text-primary">[App preview]</p>
              <p className="mt-1 text-xs text-gs-text-muted">{displayLabel}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
