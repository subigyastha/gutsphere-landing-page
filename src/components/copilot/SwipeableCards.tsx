import { useRef, useEffect, type ReactNode } from 'react'
import { useCopilot } from './CopilotContext'

interface SwipeableCardsProps {
  children: ReactNode
  cardCount: number
}

const SWIPE_THRESHOLD = 48

export function SwipeableCards({ children, cardCount }: SwipeableCardsProps) {
  const { cardIndex, nextCard, prevCard, nextChapter, prevChapter, isDesktop, chapterIndex } =
    useCopilot()
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (isDesktop) return

    const onTouchStart = (e: Event) => {
      const touch = e as TouchEvent
      const t = touch.touches[0]
      touchStart.current = { x: t.clientX, y: t.clientY }
    }

    const onTouchEnd = (e: Event) => {
      const touch = e as TouchEvent
      if (!touchStart.current) return
      const t = touch.changedTouches[0]
      const dx = t.clientX - touchStart.current.x
      const dy = t.clientY - touchStart.current.y
      touchStart.current = null

      if (Math.abs(dx) < SWIPE_THRESHOLD && Math.abs(dy) < SWIPE_THRESHOLD) return

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          if (cardIndex < cardCount - 1) nextCard()
        } else if (cardIndex > 0) {
          prevCard()
        }
      } else {
        if (dy < 0) {
          if (cardIndex >= cardCount - 1) nextChapter()
          else nextCard()
        } else {
          if (cardIndex <= 0) prevChapter()
          else prevCard()
        }
      }
    }

    const el = document.querySelector('.copilot-stage')
    el?.addEventListener('touchstart', onTouchStart, { passive: true })
    el?.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el?.removeEventListener('touchstart', onTouchStart)
      el?.removeEventListener('touchend', onTouchEnd)
    }
  }, [isDesktop, cardIndex, cardCount, chapterIndex, nextCard, prevCard, nextChapter, prevChapter])

  return (
    <div
      className="copilot-swipe-track"
      style={{ transform: `translateX(-${cardIndex * 100}%)` }}
    >
      {children}
    </div>
  )
}
