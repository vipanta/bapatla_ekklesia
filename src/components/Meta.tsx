import { useEffect } from 'react'

function set(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

// Per-route title, description and canonical URL. The crawler-visible copy is in
// index.html; this keeps the tab, the share card and the copied link correct as
// the visitor moves between pages — an article sent to someone carries its own.
export function Meta({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path?: string
}) {
  useEffect(() => {
    document.title = title
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    if (path) {
      const url = `${window.location.origin}${path}`
      set('link[rel="canonical"]', 'href', url)
      set('meta[property="og:url"]', 'content', url)
    }
  }, [title, description, path])
  return null
}
