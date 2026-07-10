import { platformUrl, type PlatformLinkPlacement } from '../../constants'

export function PlatformFineprint({
  className = '',
  placement = 'hero',
}: {
  className?: string
  placement?: PlatformLinkPlacement
}) {
  return (
    <p className={`cp2-platform-line ${className}`.trim()}>
      <span className="cp2-platform-lead">Free to start · no card ·</span>
      <a
        href={platformUrl('web', placement)}
        className="cp2-platform-shimmer"
        target="_blank"
        rel="noopener noreferrer"
      >
        web
      </a>
      <span className="cp2-platform-sep" aria-hidden="true">
        ,{' '}
      </span>
      <a
        href={platformUrl('ios', placement)}
        className="cp2-platform-shimmer"
        target="_blank"
        rel="noopener noreferrer"
      >
        iOS
      </a>
      <span className="cp2-platform-sep" aria-hidden="true">
        {' '}
        or{' '}
      </span>
      <a
        href={platformUrl('android', placement)}
        className="cp2-platform-shimmer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Android
      </a>
    </p>
  )
}
