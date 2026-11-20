import { Link } from 'react-router'
import { contact, repoUrl, serviceTimes, socials } from '@/data/site'
import { Brand } from '@/components/Brand'
import { PhotoCredits } from '@/components/PhotoCredits'
import { useT } from '@/lib/language'

export function SiteFooter() {
  const t = useT()

  return (
    <footer className="bg-ink-deep text-ink-deep-foreground">
      <div className="mx-auto max-w-content px-gutter py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand tone="light" />
            <p className="mt-4 max-w-[34ch] text-sm text-ink-deep-muted">
              {t(
                'A community of believers in Bapatla, meeting on Church Street since 1998. Services and study in Telugu and English.',
                'బాపట్లలో విశ్వాసుల సమాజం, 1998 నుండి చర్చి వీధిలో కలుస్తోంది. ఆరాధన మరియు అధ్యయనం తెలుగు మరియు ఇంగ్లీషులో.',
              )}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-ink-deep-muted/50 underline-offset-4 hover:decoration-ink-deep-foreground"
                  >
                    {s.label}
                    <span className="sr-only"> {t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
                  </a>
                  <span className="text-ink-deep-muted"> — {t(s.note.en, s.note.te)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-deep-muted">
              {t('Meeting', 'కలుసుకునే సమయాలు')}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceTimes.map((s) => (
                <li key={s.time + s.name.en}>
                  <span className="tabular-nums text-ink-deep-muted">{s.time}</span>{' '}
                  {t(s.day.en, s.day.te)} · {t(s.name.en, s.name.te)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-deep-muted">
              {t('Find us', 'మమ్మల్ని చేరుకోండి')}
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed">
              {t(contact.address.en.join(', '), contact.address.te.join(', '))}
            </address>
            <p className="mt-2 text-sm">
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
                {contact.email}
              </a>
            </p>
            <p className="text-sm">
              <a href={`tel:${contact.phoneHref}`} className="underline underline-offset-4">
                {contact.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-ink-deep-muted/25 pt-6 text-xs text-ink-deep-muted">
          <p>
            © {new Date().getFullYear()} {t('Bapatla Ekklesia', 'బాపట్ల ఎక్లేసియా')}
          </p>
          <PhotoCredits className="text-xs text-ink-deep-muted" />
          <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-ink-deep-foreground"
            >
              {t('The site’s files on GitHub', 'సైట్ ఫైళ్లు గిట్‌హబ్‌లో')}
              <span className="sr-only"> {t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
            </a>
            <Link to="/edit" className="underline underline-offset-4 hover:text-ink-deep-foreground">
              {t('Owner: adding files and articles', 'యజమాని: ఫైళ్లు, వ్యాసాలు చేర్చడం')}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
