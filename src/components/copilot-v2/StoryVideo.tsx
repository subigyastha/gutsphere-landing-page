import { useCallback, useState } from 'react'
import { youtubeEmbedUrl, youtubeThumbnail, type StoryVideoConfig } from '../../constants'

type StoryVideoProps = StoryVideoConfig & {
  badgeLabel?: string
}

export function StoryVideo({ youtubeId, title, badgeLabel }: StoryVideoProps) {
  const [playing, setPlaying] = useState(false)
  const poster = youtubeThumbnail(youtubeId)

  const onPlay = useCallback(() => setPlaying(true), [])

  const badge = badgeLabel ?? 'Watch story'

  return (
    <div className="cp2-proof-video">
      <div className="cp2-proof-video-ph">
        {playing ? (
          <iframe
            className="cp2-proof-video-embed"
            src={youtubeEmbedUrl(youtubeId, { autoplay: true })}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="cp2-proof-video-poster"
            onClick={onPlay}
            aria-label={`Play video: ${title}`}
            style={{ backgroundImage: `url(${poster})` }}
          >
            <span className="cp2-proof-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="cp2-proof-video-badge">
              <span className="cp2-proof-video-dot" aria-hidden="true" />
              {badge}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
