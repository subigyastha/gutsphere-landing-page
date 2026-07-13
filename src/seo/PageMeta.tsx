import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { resolvePageMeta, SITE_ORIGIN } from './pageMetaConfig'

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolvePageMeta(pathname)
    const canonical = `${SITE_ORIGIN}${meta.path === '/' ? '/' : meta.path}`

    document.title = meta.title
    upsertMeta('meta[name="description"]', 'name', 'description', meta.description)
    upsertCanonical(canonical)

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
  }, [pathname])

  return null
}
