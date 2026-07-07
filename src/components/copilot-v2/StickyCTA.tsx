import { useEffect, useState } from 'react'
import { SIGNUP_URL } from '../../constants'

/** Mobile-only bottom CTA bar, shown after the visitor scrolls past the hero picker. */
export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let threshold = 900
    const measure = () => {
      const picker = document.getElementById('start')
      if (picker) threshold = picker.offsetTop + picker.offsetHeight
    }
    measure()
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.scrollHeight - 600
      setVisible(window.scrollY > threshold && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <div className={`cp2-sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <div>
        <b>Ready when you are</b>
        <small>Free to start · no card</small>
      </div>
      <a href={SIGNUP_URL} className="cp2-btn" data-cta="primary" tabIndex={visible ? 0 : -1}>
        Start free
      </a>
    </div>
  )
}
