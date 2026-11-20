import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { useT } from '@/lib/language'
import { cx } from '@/lib/cx'

const nav = [
  { to: '/articles', en: 'Articles', te: 'వ్యాసాలు' },
  { to: '/videos', en: 'Videos', te: 'వీడియోలు' },
  { to: '/images', en: 'Images', te: 'చిత్రాలు' },
  { to: '/store', en: 'Store', te: 'స్టోర్' },
  { to: '/about', en: 'About', te: 'పరిచయం' },
  { to: '/contact', en: 'Contact', te: 'సంప్రదించండి' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const t = useT()

  return (
    <header className="sticky top-0 z-40 overflow-x-clip border-b border-border/70 bg-background/92 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center gap-4 px-gutter py-3">
        <Link to="/" className="shrink-0" aria-label={t('Bapatla Ekklesia, home', 'బాపట్ల ఎక్లేసియా, ముఖ్య పేజీ')}>
          <Brand />
        </Link>

        <nav aria-label={t('Main', 'ప్రధాన')} className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(
                  'rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-fast)]',
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {t(item.en, item.te)}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-2 lg:gap-2">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-11 shrink-0 place-items-center rounded-md border border-primary/40 bg-secondary/70 text-primary transition-colors duration-[var(--motion-fast)] hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.5} aria-hidden="true" /> : <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />}
            <span className="sr-only">{open ? t('Close menu', 'మెనూ మూసివేయండి') : t('Open menu', 'మెనూ తెరవండి')}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t('Main', 'ప్రధాన')} className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-content px-gutter py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cx(
                      'flex min-h-11 items-center rounded-md px-2 text-base transition-colors duration-[var(--motion-fast)]',
                      isActive ? 'text-primary font-medium' : 'text-foreground hover:bg-secondary',
                    )
                  }
                >
                  {t(item.en, item.te)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
