import { useCallback, useEffect, useRef, useState } from 'react'

const AUDIO_SRC = '/audio/landing-page.wav'

export function LandingAudioWidget() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.45)

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC)
    audio.loop = true
    audio.preload = 'metadata'
    audio.volume = volume

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount once
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = muted ? 0 : volume
  }, [volume, muted])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      if (audio.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
        audio.load()
      }
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev)
  }, [])

  return (
    <div
      className="landing-audio-widget"
      role="region"
      aria-label="Background music"
    >
      <button
        type="button"
        className="landing-audio-widget-toggle"
        onClick={togglePlay}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l9.5-6.86a1 1 0 0 0 0-1.72l-9.5-6.86A1 1 0 0 0 8 5.14z" />
          </svg>
        )}
      </button>

      <div className="landing-audio-widget-meta">
        <span className="landing-audio-widget-label">Journey audio</span>
        <span className="landing-audio-widget-status">{playing ? 'Playing' : 'Paused'}</span>
      </div>

      <button
        type="button"
        className="landing-audio-widget-mute"
        onClick={toggleMute}
        aria-pressed={muted}
        aria-label={muted ? 'Unmute music' : 'Mute music'}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>

      <label className="landing-audio-widget-volume">
        <span className="sr-only">Music volume</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(volume * 100)}
          onChange={(e) => {
            const next = Number(e.target.value) / 100
            setVolume(next)
            if (next > 0) setMuted(false)
          }}
          className="landing-audio-widget-slider"
        />
      </label>
    </div>
  )
}
