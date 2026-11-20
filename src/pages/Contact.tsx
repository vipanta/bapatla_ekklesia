import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { contact, serviceTimes, socials } from '@/data/site'
import { useT } from '@/lib/language'

export default function Contact() {
  const t = useT()

  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3.1rem)]">{t('Contact and find us', 'సంప్రదింపు మరియు మా చిరునామా')}</h1>
      <p className="mt-3 max-w-[56ch] text-muted-foreground">
        {t(
          'We are on Church Street in the middle of Bapatla, a short walk from the bus stand. Anyone is welcome at any of the meetings below.',
          'మేము బాపట్ల మధ్యలో చర్చి వీధిలో ఉన్నాము, బస్ స్టాండ్ నుండి కొద్ది దూరం. కింద ఉన్న ఏ సమావేశానికైనా ఎవరైనా స్వాగతం.',
        )}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-start">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl text-foreground">
              {t('Reach us', 'మమ్మల్ని చేరుకోండి')}
            </h2>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Email, answered within a day or two', 'ఇమెయిల్, ఒకటి రెండు రోజుల్లో జవాబు')}</p>
                  <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-primary">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Office, 10 am to 5 pm, Monday to Friday', 'కార్యాలయం, సోమ–శుక్ర, 10 నుండి 5')}</p>
                  <a href={`tel:${contact.phoneHref}`} className="tabular-nums underline underline-offset-4 hover:text-primary">
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Address', 'చిరునామా')}</p>
                  <address className="not-italic">
                    {t(contact.address.en.join(', '), contact.address.te.join(', '))}
                  </address>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">
              {t('Meetings this week', 'ఈ వారం సమావేశాలు')}
            </h2>
            <ul className="mt-3 divide-y divide-border border-y border-border">
              {serviceTimes.map((s) => (
                <li key={s.time + s.name.en} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                  <span>
                    {t(s.day.en, s.day.te)} · {t(s.name.en, s.name.te)}
                  </span>
                  <span className="tabular-nums text-muted-foreground">{s.time}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">
              {t('Social', 'సోషల్ మీడియా')}
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between gap-2 rounded-md border border-border px-3 text-sm hover:bg-secondary"
                  >
                    {s.label}
                    <ArrowUpRight className="size-4 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                    <span className="sr-only">{t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="map-heading">
          <h2 id="map-heading" className="font-display text-xl text-foreground">
            {t('On the map', 'మ్యాప్‌లో')}
          </h2>
          <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(color-mix(in_oklch,var(--foreground)_14%,transparent)_1px,transparent_1px)] [background-size:22px_22px]"
            />
            <svg aria-hidden="true" viewBox="0 0 400 250" className="absolute inset-0 size-full" fill="none">
              <path d="M0 96h400M0 178h400M96 0v250M252 0v250M0 40h400M340 0v250" stroke="var(--border)" strokeWidth="6" />
              <path d="M96 96h156" stroke="var(--primary)" strokeWidth="2" strokeDasharray="6 6" opacity="0.35" />
            </svg>
            <div className="absolute left-[46%] top-[36%] -translate-x-1/2 -translate-y-full text-center">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 font-label text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground">
                <MapPin className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                {t('Bapatla Ekklesia', 'బాపట్ల ఎక్లేసియా')}
              </span>
              <span aria-hidden="true" className="mx-auto mt-1 block h-3 w-px bg-primary" />
            </div>
            <p className="absolute bottom-3 left-3 right-3 rounded bg-background/85 px-2.5 py-1.5 font-label text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
              {t('Church Street · off GBC Road', 'చర్చి వీధి · జీబీసీ రోడ్డు దగ్గర')}
            </p>
          </div>
          <a
            href={contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {t('Open the map in full', 'మ్యాప్‌ను పూర్తిగా తెరవండి')}
            <span className="sr-only">{t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
            <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
          <p className="mt-2 max-w-[52ch] text-xs text-muted-foreground">
            {t(
              'The map above is a drawing of the street, not a live map: an embedded map asks the visitor’s browser for tiles from another site, which this build cannot rely on. This link opens the real thing at zero cost to the visitor.',
              'పైన ఉన్న మ్యాప్ ఒక చిత్రం, లైవ్ మ్యాప్ కాదు: ఎంబెడ్ చేసిన మ్యాప్ మరొక సైట్ నుండి టైల్స్ అడుగుతుంది, ఈ నిర్మాణంలో అది నమ్మకమైనది కాదు. ఈ లింక్ నిజమైన మ్యాప్‌ను తెరుస్తుంది.',
            )}
          </p>
        </section>
      </div>
    </div>
  )
}
