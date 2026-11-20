import { Link, useParams } from 'react-router'
import { ArrowLeft, ExternalLink, Mail } from 'lucide-react'
import { getProduct, productTitle, shopUrl } from '@/data/products'
import { priceLabel } from './Store'
import { ProductCover } from '@/components/ProductCover'
import { productImage } from '@/lib/productImage'
import { contact } from '@/data/site'
import { useLangClass, useT } from '@/lib/language'
import NotFound from './NotFound'

export default function Product() {
  const { slug = '' } = useParams()
  const t = useT()
  const teluguClass = useLangClass()
  const product = getProduct(slug)

  if (!product) return <NotFound />

  const name = product.title
    ? productTitle(product, t)
    : `${t('Title', 'శీర్షిక')} ${product.url.split('/').pop() ?? ''}`
  const subject = encodeURIComponent(`Order: ${name}`)
  const body = encodeURIComponent(
    `Hello,\n\nI would like to order the title sold at ${product.url}${product.title ? ` ("${product.title.en}")` : ''}.\n\nName:\n\nThank you.`,
  )

  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <Link
        to="/store"
        className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
        {t('All products', 'అన్ని ఉత్పత్తులు')}
      </Link>

      <div className="mt-4 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
        <ProductCover
          kind={product.cover}
          image={productImage(product)}
          title={name}
          eager
          className="rounded-lg"
        />

        <div>
          <h1 className={`text-[clamp(1.8rem,1.4rem+2.2vw,2.6rem)] ${teluguClass(name) ?? ''}`}>{name}</h1>
          {product.title ? null : (
            <p className="mt-2 break-all text-sm text-muted-foreground">{product.url.replace('https://', '')}</p>
          )}
          {product.format ? (
            <p className="mt-2 text-sm text-muted-foreground">{t(product.format.en, product.format.te)}</p>
          ) : null}
          <p className="mt-4 text-muted-foreground">
            {product.blurb
              ? t(product.blurb.en, product.blurb.te)
              : t(
                  'This title is sold from our Payhip shop. Open it there to read the full description, the price and what the file contains — Payhip takes the payment and sends the download.',
                  'ఈ శీర్షిక మా Payhip షాప్‌లో అమ్మబడుతుంది. పూర్తి వివరణ, ధర మరియు ఫైల్‌లో ఏమి ఉందో చదవడానికి అక్కడ తెరవండి — చెల్లింపు తీసుకోవడం, డౌన్‌లోడ్ పంపడం Payhip చేస్తుంది.',
                )}
          </p>

          {product.contents ? (
            <>
              <h2 className="mt-8 font-label text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {t('What is inside', 'లోపల ఏమి ఉంది')}
              </h2>
              <ul className="mt-3 space-y-2">
                {product.contents.map((c) => (
                  <li key={c.en} className="flex gap-2.5 text-sm">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-saffron" />
                    {t(c.en, c.te)}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <div className="mt-8 rounded-lg border border-border bg-card p-5">
            <p className="font-display text-2xl tabular-nums">{priceLabel(product.priceInr, t)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.url
                ? t(
                    'Paying happens on Payhip and the download link reaches your email the moment the payment clears. Nothing is charged here on this site.',
                    'చెల్లింపు Payhip లో జరుగుతుంది, చెల్లింపు పూర్తయిన వెంటనే డౌన్‌లోడ్ లింక్ మీ ఇమెయిల్‌కు చేరుతుంది. ఈ సైట్‌లో ఏమీ వసూలు చేయబడదు.',
                  )
                : product.file
                ? t('One payment, the file is yours to keep.', 'ఒక్క చెల్లింపు, ఫైల్ మీదే ఉంటుంది.')
                : t(
                    'The office has not finished preparing the file for this title yet, so it is shown here but cannot be sent today. Write to us and we will tell you when it is ready.',
                    'ఈ శీర్షిక కోసం ఫైల్ ఇంకా సిద్ధం కాలేదు, కాబట్టి ఇది ఇక్కడ కనిపిస్తుంది కానీ ఈ రోజు పంపలేము. మాకు రాయండి, సిద్ధమైనప్పుడు చెబుతాము.',
                  )}
            </p>
            {product.url ? (
              <>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {product.url === shopUrl
                    ? t('Buy in our shop', 'మా షాప్‌లో కొనండి')
                    : t('Buy on Payhip', 'Payhip లో కొనండి')}
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  {product.url === shopUrl
                    ? t(
                        'Opens our Payhip shop in a new tab; find this title there, and the payment and the download are both handled by Payhip.',
                        'కొత్త ట్యాబ్‌లో మా Payhip షాప్ తెరుచుకుంటుంది; ఈ శీర్షికను అక్కడ కనుగొనండి, చెల్లింపు మరియు డౌన్‌లోడ్ రెండూ Payhip నిర్వహిస్తుంది.',
                      )
                    : t(
                        'Opens this title’s page on Payhip in a new tab. Payhip takes the payment and sends the file.',
                        'కొత్త ట్యాబ్‌లో Payhip లో ఈ శీర్షిక పేజీ తెరుచుకుంటుంది. చెల్లింపు తీసుకోవడం, ఫైల్ పంపడం Payhip చేస్తుంది.',
                      )}
                </p>
                {product.url === shopUrl ? null : (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t('Every title, in one place:', 'అన్ని శీర్షికలు, ఒకే చోట:')}{' '}
                    <a
                      href={shopUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                    >
                      payhip.com/BAPATLAEKKLESIA
                      <span className="sr-only"> {t('(opens in a new tab)', '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)')}</span>
                    </a>
                  </p>
                )}
                <a
                  href={`mailto:${contact.email}?subject=${subject}&body=${body}`}
                  className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {t('Ask the office first', 'ముందు కార్యాలయాన్ని అడగండి')}
                </a>
              </>
            ) : (
              <>
                <a
                  href={`mailto:${contact.email}?subject=${subject}&body=${body}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {t('Order by email', 'ఇమెయిల్ ద్వారా ఆర్డర్ చేయండి')}
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t(
                    'There is no checkout on this site — no payments are taken and nothing is delivered automatically. This button opens your mail app with the order written out; the staff reply with the file and how to pay.',
                    'ఈ సైట్‌లో చెక్అవుట్ లేదు — చెల్లింపులు తీసుకోబడవు, ఏదీ స్వయంచాలకంగా పంపబడదు. ఈ బటన్ ఆర్డర్‌తో మీ మెయిల్ యాప్‌ను తెరుస్తుంది; సిబ్బంది ఫైల్ మరియు చెల్లింపు విధానంతో జవాబు ఇస్తారు.',
                  )}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
