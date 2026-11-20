import { Link, useParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { formatDate, getArticle } from '@/data/articles'
import { CopyLinkButton } from '@/components/CopyLinkButton'
import { cx } from '@/lib/cx'
import { useLang, useT } from '@/lib/language'
import NotFound from './NotFound'

export default function Article() {
  const { slug = '' } = useParams()
  const { lang } = useLang()
  const t = useT()
  const article = getArticle(slug)

  if (!article) return <NotFound />

  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <Link
        to="/articles"
        className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
        {t('All articles', 'అన్ని వ్యాసాలు')}
      </Link>

      <article className="mt-4">
        <header className="max-w-[64ch]">
          <p className="text-xs text-muted-foreground">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            {t(`${article.readMinutes} minute read`, `${article.readMinutes} నిమిషాల పఠనం`)}
          </p>
          <h1 lang={lang} className={cx('mt-3 text-[clamp(1.9rem,1.4rem+2.6vw,3rem)]', lang === 'te' && 'font-telugu leading-[1.35]')}>{t(article.title.en, article.title.te)}</h1>
          <p lang={lang} className={cx('mt-3 text-[1.0625rem] text-muted-foreground', lang === 'te' && 'leading-[1.9]')}>{t(article.summary.en, article.summary.te)}</p>
          <div className="mt-6">
            <CopyLinkButton slug={article.slug} />
          </div>
        </header>

        <div lang={lang} className={cx('mt-10 max-w-[68ch] space-y-5 text-[1.0625rem] leading-[1.75]', lang === 'te' && 'leading-[1.9]')}>
          {article.body.map((block, i) => {
            if (block.kind === 'h') {
              return (
                <h2 key={i} className={cx('pt-4 text-[1.5rem]', lang === 'te' && 'font-telugu leading-[1.5]')}>
                  {t(block.en, block.te)}
                </h2>
              )
            }
            if (block.kind === 'quote') {
              return (
                <blockquote key={i} className="my-8 border-l-2 border-saffron pl-5">
                  <p className="font-display text-[1.35rem] leading-snug text-foreground">{t(block.en, block.te)}</p>
                  <footer className="mt-2 text-sm text-muted-foreground">{t(block.ref.en, block.ref.te)}</footer>
                </blockquote>
              )
            }
            return <p key={i}>{t(block.en, block.te)}</p>
          })}
        </div>
      </article>

      <footer className="mt-12 max-w-[68ch] border-t border-border pt-6">
        <h2 className="text-lg">{t('Read next', 'తర్వాత చదవండి')}</h2>
        <Link
          to="/articles"
          className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {t('More from the article index', 'వ్యాస సూచిక నుండి మరిన్ని')}
        </Link>
      </footer>
    </div>
  )
}
