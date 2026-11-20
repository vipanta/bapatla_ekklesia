import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Check, Link2 } from 'lucide-react'
import { Link } from 'react-router'
import { useT } from '@/lib/language'

/** Copies the article's own address. Falls back to selecting the text where the
    clipboard API is refused, and says which of the three states it is in. */
export function CopyLinkButton({ slug }: { slug: string }) {
  const t = useT()
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    const url = `${window.location.origin}/articles/${slug}`
    try {
      await navigator.clipboard.writeText(url)
      setState('copied')
    } catch {
      setState('failed')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 2600)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm transition-colors duration-[var(--motion-fast)] hover:bg-secondary"
      >
        {state === 'copied' ? (
          <Check className="size-4 text-primary" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <Link2 className="size-4" strokeWidth={1.5} aria-hidden="true" />
        )}
        {state === 'copied' ? t('Link copied', 'లింక్ కాపీ అయింది') : t('Copy this article’s link', 'ఈ వ్యాసం లింక్ కాపీ చేయండి')}
      </button>
      <Link to="/articles" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
        {t('All articles', 'అన్ని వ్యాసాలు')}
      </Link>
      <span aria-live="polite" className="text-xs text-muted-foreground">
        {state === 'failed' && t('Could not copy — the address is in your browser bar.', 'కాపీ చేయలేకపోయాం — చిరునామా మీ బ్రౌజర్ బార్‌లో ఉంది.')}
      </span>
    </div>
  )
}
