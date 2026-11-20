import { Link } from 'react-router'
import { ExternalLink } from 'lucide-react'
import { productTitle, products, shopUrl } from '@/data/products'
import { ProductCover } from '@/components/ProductCover'
import { productImage } from '@/lib/productImage'
import { useLangClass, useT } from '@/lib/language'

export function formatPrice(inr: number) {
  return `₹${inr.toLocaleString('en-IN')}`
}

/** The price a card shows. A title whose price has not been written down says
    so instead of carrying a number nobody confirmed. */
export function priceLabel(inr: number | undefined, t: (en: string, te: string) => string) {
  return inr === undefined ? t('See the price on Payhip', 'ధర Payhip లో చూడండి') : formatPrice(inr)
}

const primaryButton =
  'inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90'

export default function Store() {
  const t = useT()
  const teluguClass = useLangClass()
  return (
    <div>
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-content px-gutter py-10">
          <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3.1rem)]">{t('Digital store', 'డిజిటల్ స్టోర్')}</h1>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t(
                     'Every title the community sells is listed here. Each one is paid for at checkout on Payhip, which takes the money and emails the file — no price is guessed at here.',
                     'సమాజం అమ్మే ప్రతి శీర్షిక ఇక్కడ ఉంది. ప్రతి దానికి చెల్లింపు Payhip చెక్అవుట్‌లో జరుగుతుంది — డబ్బు అక్కడే తీసుకోబడి, ఫైల్ ఇమెయిల్‌లో చేరుతుంది. ఇక్కడ ధర ఊహించబడదు.',
                  )}
                </p>
          <p className="mt-4 max-w-[62ch] rounded-sm bg-saffron/25 px-3 py-2 text-sm text-foreground">
            {t(
              'Every title here is sold through our own shop on Payhip, which takes the payment and emails you the download. Choose a title below, or open the shop and see everything in one place:',
              'ఇక్కడ ఉన్న ప్రతి శీర్షిక Payhip లోని మా సొంత షాప్ ద్వారా అమ్మబడుతుంది — చెల్లింపు అక్కడే జరుగుతుంది, డౌన్‌లోడ్ లింక్ ఇమెయిల్ ద్వారా మీకు చేరుతుంది. కింద శీర్షికను ఎంచుకోండి, లేదా షాప్ తెరిచి అన్నీ ఒకే చోట చూడండి:',
            )}{' '}
            <a
              href={shopUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              payhip.com/BAPATLAEKKLESIA
              <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">{t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
            </a>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-content px-gutter py-section">
        <ul className="grid gap-8 sm:grid-cols-2">
          {products.map((p) => (
            <li key={p.slug}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-4 transition-shadow duration-[var(--motion-fast)] hover:shadow-raised">
                <ProductCover
                  kind={p.cover}
                  image={productImage(p)}
                  title={productTitle(p, t)}
                  className="block w-full"
                />
                <h2 className={`mt-4 font-display text-lg leading-snug ${teluguClass(productTitle(p, t)) ?? ''}`}>
                  <Link
                    to={`/store/${p.slug}`}
                    className="underline-offset-4 decoration-primary/40 hover:underline hover:decoration-primary"
                  >
                    {productTitle(p, t)}
                  </Link>
                </h2>
                {p.title ? null : (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t(
                      'Name and price have not reached the office for this one yet. See it on Payhip:',
                      'ఈ శీర్షిక పేరు, ధర ఇంకా కార్యాలయానికి అందలేదు. Payhip లో చూడండి:',
                    )}{' '}
                      <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="break-all font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                    >
                      {p.url.replace('https://', '')}
                      <span className="sr-only"> {t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
                    </a>
                  </p>
                )}
                {p.format ? (
                  <p className="mt-1 text-xs text-muted-foreground">{t(p.format.en, p.format.te)}</p>
                ) : null}
                {p.blurb ? (
                  <p className="mt-3 text-sm text-muted-foreground">{t(p.blurb.en, p.blurb.te)}</p>
                ) : null}

                {p.contents ? (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.contents.map((c) => (
                      <li key={c.en} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-saffron" />
                        {t(c.en, c.te)}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <p className="font-display text-lg tabular-nums">{priceLabel(p.priceInr, t)}</p>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={primaryButton}
                        aria-label={`${t('Buy', 'కొనండి')}: ${productTitle(p, t)}`}
                      >
                        <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden="true" />
                        {t('Buy on Payhip', 'Payhip లో కొనండి')}
                      </a>
                    ) : (
                      <Link to={`/store/${p.slug}`} className={primaryButton}>
                        {t('Read it and order', 'చదివి ఆర్డర్ చేయండి')}
                      </Link>
                    )}
                  </div>
                  {p.url === shopUrl ? (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {t(
                        'Opens our Payhip shop in a new tab; the payment and the download are both handled there.',
                        'కొత్త ట్యాబ్‌లో మా Payhip షాప్ తెరుచుకుంటుంది; చెల్లింపు మరియు డౌన్‌లోడ్ రెండూ అక్కడే జరుగుతాయి.',
                      )}
                    </p>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>

          <p className="mb-4 max-w-[62ch] rounded-sm bg-saffron/25 px-3 py-2 text-sm text-foreground">
            {t(
              'Every cover here has its own file already — src/covers, named after the title\u2019s own address. Upload your picture over that name and this shelf shows it after the rebuild. The twelve file names are listed on /edit.',
              'ఇక్కడి ప్రతి ముఖచిత్రానికి సొంత ఫైల్ ఇప్పటికే ఉంది — src/covers లో, శీర్షిక చిరునామా పేరుతో. అదే పేరుతో మీ చిత్రాన్ని అప్‌లోడ్ చేస్తే, మళ్లీ నిర్మించిన వెంటనే ఈ షెల్ఫ్‌లో కనిపిస్తుంది. పన్నెండు ఫైల్ పేర్లు /edit పేజీలో ఉన్నాయి.',
            )}
          </p>

          <p className="mt-10 max-w-[62ch] border-t border-border pt-5 text-sm text-muted-foreground">
          {t(
            'Nothing is charged on this page: each Buy button opens that title on Payhip, where an account or a card is enough and the file is delivered at once. A new title is one entry in src/data/products.ts with its own copy, its price and its Payhip address. Where every kind of file goes:',
            'ఈ పేజీలో ఏమీ వసూలు చేయబడదు: ప్రతి కొనండి బటన్ ఆ శీర్షికను Payhip లో తెరుస్తుంది — అక్కడ ఖాతా లేదా కార్డు సరిపోతుంది, ఫైల్ వెంటనే చేరుతుంది. కొత్త శీర్షిక కావాలంటే src/data/products.ts లో దాని వివరాలు, ధర, Payhip చిరునామాతో ఒక ఎంట్రీ చేర్చండి. ప్రతి రకమైన ఫైల్ ఎక్కడికి వెళ్తుందో:',
          )}{' '}
          <Link
            to="/edit"
            className="inline-block underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            {t('where every kind of file goes, with examples', 'ప్రతి రకమైన ఫైల్ ఎక్కడికి వెళ్తుందో, ఉదాహరణలతో')}
          </Link>
        </p>
      </div>
    </div>
  )
}
