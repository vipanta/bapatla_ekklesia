import { ArrowUpRight, Play } from 'lucide-react'
import { formatDate } from '@/data/articles'
import { videos, youtubeChannel } from '@/data/videos'
import { useT } from '@/lib/language'
import { VideoStill } from '@/components/VideoStill'

export default function Videos() {
  const t = useT()

  return (
    <div>
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-content px-gutter py-10">
          <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3.1rem)]">{t('Video library', 'వీడియో లైబ్రరీ')}</h1>
          <p className="mt-3 max-w-[58ch] text-muted-foreground">
            {t(
              'Teaching, study and prayer, recorded in the room on Church Street. The same videos are on the channel, where new ones appear first.',
              'బోధ, అధ్యయనం మరియు ప్రార్థన, చర్చి వీధి గదిలో రికార్డ్ చేయబడినవి. ఇవే వీడియోలు ఛానెల్‌లో కూడా ఉన్నాయి, అక్కడ కొత్తవి మొదట వస్తాయి.',
            )}
          </p>
          <a
            href={youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Play className="size-4" strokeWidth={1.5} aria-hidden="true" />
            {t('Open the YouTube channel', 'యూట్యూబ్ ఛానెల్ తెరవండి')}
            <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="sr-only">{t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-content px-gutter py-section">
        <ul className="grid gap-6 md:grid-cols-2">
          {videos.map((v) => (
            <li key={v.id}>
              <article>
                <div className="relative overflow-hidden rounded-lg bg-ink-deep">
                  {v.youtubeId ? (
                    <iframe
                      title={t(v.title.en, v.title.te)}
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="aspect-video w-full border-0"
                    />
                  ) : (
                    <a
                      href={youtubeChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block w-full"
                    >
                      <VideoStill video={v} big className="transition-transform duration-300 group-hover:scale-[1.02]" />
                      <span className="absolute inset-0 grid place-items-center">
                        <span className="grid size-14 place-items-center rounded-full bg-background/90 text-primary shadow-raised">
                          <Play className="size-6" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                      </span>
                      <span className="sr-only">
                        {t(`Open the recording: ${v.title.en}`, `రికార్డింగ్ తెరవండి: ${v.title.te}`)}
                        {' '}
                        {t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}
                      </span>
                    </a>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <p className="uppercase tracking-[0.08em]">{t(v.series.en, v.series.te)}</p>
                  <p>
                    <time dateTime={v.date}>{formatDate(v.date)}</time>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    {t(`${v.minutes} min`, `${v.minutes} నిమి`)}
                  </p>
                </div>
                <h2 className="mt-1 font-display text-xl leading-snug">{t(v.title.en, v.title.te)}</h2>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[62ch] text-sm text-muted-foreground">
          {t(
            'This build embeds the channel rather than hosting files. Uploading video to the site itself needs storage the owner controls, which comes with the backend.',
            'ఈ నిర్మాణం ఫైళ్లను హోస్ట్ చేయడం కాదు, ఛానెల్‌ను ఎంబెడ్ చేస్తుంది. సైట్‌లోనే వీడియో అప్‌లోడ్ చేయడానికి యజమాని నియంత్రణలో ఉన్న స్టోరేజ్ కావాలి, అది బ్యాకెండ్‌తో వస్తుంది.',
          )}
        </p>
      </div>
    </div>
  )
}
