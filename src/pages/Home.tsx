import { Link } from 'react-router'
import { ArrowRight, BookOpen, CalendarDays, Clock, MapPin, Play } from 'lucide-react'
import { articles, formatDate } from '@/data/articles'
import { videos, youtubeChannel } from '@/data/videos'
import { serviceTimes } from '@/data/site'
import { HeroPlate } from '@/components/HeroPlate'
import { ArticleRow } from '@/components/ArticleRow'
import { SectionHeading } from '@/components/SectionHeading'
import { VideoStill } from '@/components/VideoStill'
import { useT } from '@/lib/language'

const featured = articles[0]
const latest = articles.slice(1, 4)

export default function Home() {
  const t = useT()

  return (
    <div>
      {/* The first screen: the day's article with the plate beside it. */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-content items-start gap-8 px-gutter pb-10 pt-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pb-12 lg:pt-8">
          <div className="order-2 lg:order-1">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-saffron px-2 py-1 font-semibold uppercase tracking-[0.1em] text-saffron-ink">
                <CalendarDays className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                {t('Featured today', 'నేటి ప్రత్యేకం')}
              </span>
              <time dateTime={featured.date} className="text-muted-foreground">
                {formatDate(featured.date)}
              </time>
            </p>

            <h1 className="mt-4 font-display text-[var(--hero-size)] leading-[1.05] tracking-[var(--heading-tracking)]">
              {t(featured.title.en, featured.title.te)}
            </h1>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] text-muted-foreground">
              {t(featured.summary.en, featured.summary.te)}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={`/articles/${featured.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity duration-[var(--motion-fast)] hover:opacity-90"
              >
                <BookOpen className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {t('Read the article', 'వ్యాసం చదవండి')}
              </Link>
              <Link
                to="/videos"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 text-sm text-foreground transition-colors duration-[var(--motion-fast)] hover:bg-secondary"
              >
                <Play className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {t('Watch the latest teaching', 'తాజా బోధ చూడండి')}
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                {t(`${featured.readMinutes} minute read`, `${featured.readMinutes} నిమిషాల పఠనం`)}
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pt-1">
            <HeroPlate className="w-full rounded-lg shadow-raised" />
          </div>
        </div>
      </section>

      {/* Latest articles: an index, in date order, on the raised ground. */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-content px-gutter py-section">
          <SectionHeading
            title="Latest from the community"
            te="సమాజం నుండి తాజా"
            action={
              <Link
                to="/articles"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {t('All articles', 'అన్ని వ్యాసాలు')}
                <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            }
          />
          <ul className="mt-6">
            {latest.map((a) => (
              <ArticleRow key={a.slug} article={a} />
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            {t('Writing is added by the office: the ', 'రచనలను కార్యాలయం చేర్చుతుంది: ')}
            <Link to="/edit" className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
              {t('article form on the edit page', 'ఎడిట్ పేజీలోని వ్యాస ఫారం')}
            </Link>
            {t(' writes the block, then it is pasted into the article file.', ' బ్లాక్‌ను రాస్తుంది, తర్వాత దాన్ని వ్యాస ఫైల్‌లో అతికిస్తారు.')}
          </p>
        </div>
      </section>

      {/* The week: a dark band, and the one place the times are stated. */}
      <section className="bg-ink-deep text-ink-deep-foreground">
        <div className="mx-auto grid max-w-content gap-8 px-gutter py-12 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <h2 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.35rem)]">
              {t('Three times a week, on Church Street', 'వారానికి మూడుసార్లు, చర్చి వీధిలో')}
            </h2>
            <p className="mt-2 max-w-[40ch] text-sm text-ink-deep-muted">
              {t(
                'Visitors are welcome at any of them. Telugu and English are both spoken, and there is tea afterwards.',
                'వచ్చే వారికి ఈ మూడింటిలో ఏదైనా స్వాగతం. తెలుగు మరియు ఇంగ్లీషు రెండూ మాట్లాడతారు, తర్వాత టీ ఉంటుంది.',
              )}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {serviceTimes.map((s) => (
              <li key={s.time + s.name.en} className="rounded-lg border border-ink-deep-muted/30 p-4">
                <p className="font-telugu text-2xl tabular-nums text-saffron">{s.time}</p>
                <p className="mt-1 text-sm font-medium">{t(s.day.en, s.day.te)}</p>
                <p className="text-sm text-ink-deep-muted">{t(s.name.en, s.name.te)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video library: thumbnails from the channel, in a row that scrolls on a phone. */}
      <section>
        <div className="mx-auto max-w-content px-gutter py-section">
          <SectionHeading
            title="From the video library"
            te="వీడియో లైబ్రరీ నుండి"
            action={
              <a
                href={youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                {t('The YouTube channel', 'యూట్యూబ్ ఛానెల్')}
                <span className="sr-only">{t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
                <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            }
          />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.slice(0, 3).map((v) => (
              <li key={v.id}>
                <Link to="/videos" className="group block">
                  <span className="relative block overflow-hidden rounded-md bg-ink-deep">
                    <VideoStill
                      video={v}
                      className="opacity-95 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid size-11 place-items-center rounded-full bg-background/90 text-primary">
                        <Play className="size-5" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                    </span>
                  </span>
                  <span className="mt-3 flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-muted-foreground">
                    <span className="uppercase tracking-[0.08em]">{t(v.series.en, v.series.te)}</span>
                    <span>{t(`${v.minutes} min`, `${v.minutes} నిమి`)}</span>
                  </span>
                  <span className="mt-1 block font-display text-lg leading-snug text-foreground">
                    {t(v.title.en, v.title.te)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where to find us, and the way in for a visitor. */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-content gap-8 px-gutter pb-10 pt-section md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-[clamp(1.5rem,1.2rem+1.2vw,2rem)]">
              {t('Come and see, or write to us first', 'వచ్చి చూడండి, లేదా మొదట మాకు రాయండి')}
            </h2>
            <p className="mt-3 max-w-[54ch] text-muted-foreground">
              {t(
                'Member subscriptions, the download library and the store are not open on this site yet — there is no server behind them in this build. Email is the way to reach anyone today, and we answer it.',
                'సభ్యత్వాలు, డౌన్‌లోడ్ లైబ్రరీ మరియు స్టోర్ ఇంకా ఈ సైట్‌లో అందుబాటులో లేవు — ఈ నిర్మాణంలో వాటి వెనుక సర్వర్ లేదు. ఈ రోజు ఎవరినైనా చేరుకోవడానికి ఇమెయిల్ మార్గం, మేము జవాబు ఇస్తాము.',
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <MapPin className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {t('Contact and map', 'సంప్రదింపు మరియు మ్యాప్')}
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm hover:bg-secondary"
              >
                {t('What we believe', 'మేము నమ్మేది')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
