import { articles } from '@/data/articles'
import { ArticleRow } from '@/components/ArticleRow'
import { useT } from '@/lib/language'

export default function Articles() {
  const t = useT()
  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <header className="max-w-[56ch]">
        <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3.1rem)]">{t('Articles', 'వ్యాసాలు')}</h1>
        <p className="mt-3 text-muted-foreground">
          {t(
            'Writing from the community at Bapatla Ekklesia: the Thursday study, the Sunday teaching, and notes from members. Every article has its own address, so one can be sent to anyone.',
            'బాపట్ల ఎక్లేసియా సమాజం నుండి రచనలు: గురువారం అధ్యయనం, ఆదివారం బోధ, సభ్యుల నోట్స్. ప్రతి వ్యాసానికి దాని స్వంత చిరునామా ఉంది, కాబట్టి ఎవరికైనా పంపవచ్చు.',
          )}
        </p>
      </header>

      <ul className="mt-8 border-b border-border">
        {articles.map((a) => (
          <ArticleRow key={a.slug} article={a} />
        ))}
      </ul>

      <p className="mt-8 max-w-[62ch] text-sm text-muted-foreground">
        {t(
          'The newest is read first. Writing is published by the office; the edit page explains how to send a new piece.',
          'కొత్తది మొదట చదవబడుతుంది. రచనలను కార్యాలయం ప్రచురిస్తుంది; కొత్త రచన పంపడం ఎలా అనేది ఎడిట్ పేజీలో ఉంది.',
        )}
      </p>
    </div>
  )
}
