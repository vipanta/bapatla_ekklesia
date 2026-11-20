import { useLang, useT } from '@/lib/language'
import { cx } from '@/lib/cx'

/* The mark is the lamp: a monogram-free symbol drawn in the brand teal, with
   the name set beside it in the heading face — except in Telugu, where the
   name is drawn, and in both cases the symbol carries the identity. */
export function LampMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cx('shrink-0', className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* flame */}
      <g className="text-saffron">
        <path d="M16 3.2c1.5 1.9 2.3 3.3 2.3 4.6a2.3 2.3 0 0 1-4.6 0c0-1.3.8-2.7 2.3-4.6Z" fill="currentColor" stroke="none" opacity="0.85" />
      </g>
      {/* lamp body */}
      <path d="M9.5 12.5h13l-1.6 9.5a3 3 0 0 1-3 2.5h-3.8a3 3 0 0 1-3-2.5L9.5 12.5Z" />
      {/* base */}
      <path d="M12 28.5h8" />
      <path d="M16 24.5v4" />
      <path d="M9.5 12.5h13" />
      <path d="M16 9.5v3" />
    </svg>
  )
}

export function Brand({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const { lang } = useLang()
  const t = useT()
  return (
    <span className={cx('inline-flex items-center gap-2.5', className)}>
      <span
        className={cx(
          'grid size-9 place-items-center rounded-[--radius] ',
          tone === 'light'
            ? 'bg-ink-deep-foreground/10 text-ink-deep-foreground'
            : 'bg-primary/6 text-primary',
        )}
      >
        <LampMark className="size-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          lang={lang}
          className={cx(
            'text-[1.5rem] font-bold tracking-[-0.015em] sm:text-[1.6rem]',
            lang === 'te' ? 'font-telugu' : 'font-display',
            tone === 'light' ? 'text-ink-deep-foreground' : 'text-foreground',
          )}
        >
          {t('Bapatla Ekklesia', 'బాపట్ల ఎక్లేసియా')}
        </span>
        <span
          className={cx(
            'mt-1 font-label text-[0.6rem] font-bold uppercase tracking-[0.16em]',
            tone === 'light' ? 'text-ink-deep-muted' : 'text-muted-foreground',
          )}
        >
          {t('Bapatla, India', 'బాపట్ల, భారతదేశం')}
        </span>
      </span>
    </span>
  )
}
