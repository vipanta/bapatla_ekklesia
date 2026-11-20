import { Link } from 'react-router'
import { useT } from '@/lib/language'
import { formatDate, type Article } from '@/data/articles'

/** One article in an index: date, headline, its first line, and the read time. */
export function ArticleRow({ article }: { article: Article }) {
  const t = useT()
  return (
    <li className="group border-t border-border first:border-t-0">
      <Link
        to={`/articles/${article.slug}`}
        className="grid gap-1 py-5 transition-colors duration-[var(--motion-fast)] hover:bg-secondary/40 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:px-2"
      >
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground sm:flex-col sm:items-start sm:gap-0.5 sm:pt-1">
          <time dateTime={article.date} className="whitespace-nowrap">
            {formatDate(article.date)}
          </time>
          <span className="whitespace-nowrap">
            {t(`${article.readMinutes} min read`, `${article.readMinutes} నిమి పఠనం`)}
          </span>
        </div>
        <div>
          <h2 className="text-xl text-foreground underline-offset-4 group-hover:underline">
            {t(article.title.en, article.title.te)}
          </h2>
          <p className="mt-1.5 max-w-[76ch] text-sm text-muted-foreground">
            {t(article.summary.en, article.summary.te)}
          </p>
        </div>
      </Link>
    </li>
  )
}
