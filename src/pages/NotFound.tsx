import { Link } from 'react-router'
import { useT } from '@/lib/language'

export default function NotFound() {
  const t = useT()
  return (
    <div className="mx-auto grid min-h-[62vh] max-w-content place-items-center px-gutter text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-saffron-deep">404</p>
        <h1 className="mt-3 text-[clamp(2rem,1.4rem+2.5vw,3rem)]">{t('This page does not exist', 'ఈ పేజీ లేదు')}</h1>
        <p className="mx-auto mt-3 max-w-prose text-muted-foreground">
          {t(
            'The address may be mistyped, or the page may have moved. The articles and the video library are both a click away.',
            'చిరునామా తప్పుగా ఉండవచ్చు, లేదా పేజీ మారి ఉండవచ్చు. వ్యాసాలు మరియు వీడియోలు ఒక క్లిక్ దూరంలో ఉన్నాయి.',
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t('Back to home', 'ముఖ్య పేజీకి')}
          </Link>
          <Link
            to="/articles"
            className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm hover:bg-secondary"
          >
            {t('Read the articles', 'వ్యాసాలు చదవండి')}
          </Link>
        </div>
      </div>
    </div>
  )
}
