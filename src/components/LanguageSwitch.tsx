import { useLang } from '@/lib/language'
import { cx } from '@/lib/cx'

/** English / తెలుగు. Both labels are always visible so a Telugu reader can find
    it without knowing English, and it never collapses at 360. */
export function LanguageSwitch({ tone = 'ink' }: { tone?: 'ink' | 'light' }) {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language / భాష"
      className={cx(
        'inline-flex items-center rounded-md border p-0.5',
        tone === 'light' ? 'border-ink-deep-muted/40' : 'border-border',
      )}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cx(
          'min-h-11 min-w-11 shrink-0 rounded-sm px-2 text-xs font-medium transition-colors duration-[var(--motion-fast)]',
          lang === 'en'
            ? tone === 'light'
              ? 'bg-ink-deep-foreground text-ink-deep'
              : 'bg-primary text-primary-foreground'
            : tone === 'light'
              ? 'text-ink-deep-muted hover:text-ink-deep-foreground'
              : 'text-muted-foreground hover:text-foreground',
        )}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLang('te')}
        aria-pressed={lang === 'te'}
        lang="te"
        className={cx(
          'font-telugu min-h-11 min-w-11 shrink-0 rounded-sm px-2 text-xs transition-colors duration-[var(--motion-fast)]',
          lang === 'te'
            ? tone === 'light'
              ? 'bg-ink-deep-foreground text-ink-deep'
              : 'bg-primary text-primary-foreground'
            : tone === 'light'
              ? 'text-ink-deep-muted hover:text-ink-deep-foreground'
              : 'text-muted-foreground hover:text-foreground',
        )}
      >
        తెలుగు
      </button>
    </div>
  )
}
