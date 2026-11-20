import { useId, useState } from 'react'
import { AlertCircle, Check, ClipboardCopy } from 'lucide-react'
import { articles } from '@/data/articles'
import { check, readMinutes, toBlock, type Draft } from '@/lib/articleForm'
import { useT } from '@/lib/language'

const empty: Draft = {
  titleEn: '',
  titleTe: '',
  date: new Date().toISOString().slice(0, 10),
  summaryEn: '',
  summaryTe: '',
  bodyEn: '',
  bodyTe: '',
}

/* Writing an article: the form produces the exact block for
   src/data/articles.ts. Nothing here publishes — there is no server — so the
   owner copies the block into the file on GitHub, which does publish. */
export function ArticleComposer() {
  const t = useT()
  const uid = useId()
  const [draft, setDraft] = useState<Draft>(empty)
  const [showBlock, setShowBlock] = useState(false)
  const [copied, setCopied] = useState(false)

  const field = (key: keyof Draft) => ({
    id: `${uid}-${key}`,
    value: String(draft[key] ?? ''),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDraft((d) => ({ ...d, [key]: e.target.value })),
  })

  const result = check(draft, articles.map((a) => a.slug))
  const block = toBlock(draft, result.slug)
  const englishLines = draft.bodyEn.split(/\r?\n/).filter((l) => l.trim()).length
  const teluguLines = draft.bodyTe.split(/\r?\n/).filter((l) => l.trim()).length

  async function copy() {
    try {
      await navigator.clipboard.writeText(block)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2600)
    } catch {
      setShowBlock(true)
    }
  }

  const label = 'mt-1 block text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'
  const input =
    'mt-1.5 w-full min-h-11 rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

  return (
    <div className="mt-8 rounded-lg border border-border bg-card p-5">
      <h2 className="text-lg">{t('Write an article here, then paste it in', 'ఇక్కడ వ్యాసం రాయండి, తర్వాత అతికించండి')}</h2>
      <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
        {t(
          'Fill this in and it writes the exact block for src/data/articles.ts, with the address, the date and both languages already in place. Copy it, paste it at the top of the list on GitHub, commit, and the article is live in a minute or two. It cannot publish by itself: publishing needs a server, and this site has none.',
          'దీన్ని నింపండి, అది src/data/articles.ts కోసం సరిగ్గా కావలసిన బ్లాక్‌ను రాస్తుంది — చిరునామా, తేదీ, రెండు భాషలు సిద్ధంగా ఉంటాయి. కాపీ చేసి, గిట్‌హబ్‌లో జాబితా మొదట్లో అతికించి, కమిట్ చేయండి — ఒకటి రెండు నిమిషాల్లో వ్యాసం కనిపిస్తుంది. ఇది తనంతట తాను ప్రచురించలేదు: ప్రచురణకు సర్వర్ కావాలి, ఈ సైట్‌లో అలాంటిది లేదు.',
        )}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-titleEn`} className={label}>
            {t('Title in English', 'ఇంగ్లీషులో శీర్షిక')}
          </label>
          <input {...field('titleEn')} className={input} placeholder="The lamp that was kept burning" />
        </div>
        <div>
          <label htmlFor={`${uid}-titleTe`} className={label}>
            {t('Title in Telugu', 'తెలుగులో శీర్షిక')}
          </label>
          <input {...field('titleTe')} className={`${input} font-telugu`} lang="te" />
        </div>
        <div>
          <label htmlFor={`${uid}-date`} className={label}>
            {t('Published on', 'ప్రచురణ తేదీ')}
          </label>
          <input {...field('date')} type="date" className={input} />
        </div>
        <div>
          <span className={label}>{t('Its address', 'దాని చిరునామా')}</span>
          <p className="mt-1.5 break-all font-mono text-[0.8125rem] text-primary">
            /articles/{result.slug || '…'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t(
              'Made from the English title. Change that to change the address; never change it after the link has been shared.',
              'ఇంగ్లీషు శీర్షిక నుండి తయారవుతుంది. దాన్ని మార్చితే చిరునామా మారుతుంది; లింక్ పంచిన తర్వాత మాత్రం ఎప్పుడూ మార్చవద్దు.',
            )}
          </p>
        </div>
        <div>
          <label htmlFor={`${uid}-summaryEn`} className={label}>
            {t('Summary in English', 'ఇంగ్లీషులో సారాంశం')}
          </label>
          <textarea {...field('summaryEn')} rows={3} className={input} />
        </div>
        <div>
          <label htmlFor={`${uid}-summaryTe`} className={label}>
            {t('Summary in Telugu', 'తెలుగులో సారాంశం')}
          </label>
          <textarea {...field('summaryTe')} rows={3} lang="te" className={`${input} font-telugu`} />
        </div>
        <div>
          <label htmlFor={`${uid}-bodyEn`} className={label}>
            {t('The article in English', 'ఇంగ్లీషులో వ్యాసం')}
          </label>
          <textarea {...field('bodyEn')} rows={10} className={input} />
          <p className="mt-1 text-xs text-muted-foreground">
            {t(
              'One paragraph a line. Start a line with ## to make it a heading.',
              'ఒక వరుసకు ఒక పేరా. వరుస మొదట ## పెడితే అది ఉపశీర్షిక అవుతుంది.',
            )}
          </p>
        </div>
        <div>
          <label htmlFor={`${uid}-bodyTe`} className={label}>
            {t('The article in Telugu', 'తెలుగులో వ్యాసం')}
          </label>
          <textarea {...field('bodyTe')} rows={10} lang="te" className={`${input} font-telugu`} />
          <p className="mt-1 text-xs text-muted-foreground">
            {t(
              'Line 3 here is the Telugu of line 3 above, so keep the two in the same order. Leave a line empty only if that paragraph is not translated yet — the block then carries an empty Telugu string, which shows as nothing rather than as English.',
              'ఇక్కడ 3వ వరుస పైన 3వ వరుస తెలుగు, కాబట్టి రెండింటినీ అదే క్రమంలో ఉంచండి. ఏ పేరా ఇంకా అనువాదం కాలేదో దానికి మాత్రమే వరుస ఖాళీగా వదలండి — అప్పుడు బ్లాక్‌లో తెలుగు ఖాళీగా ఉంటుంది, ఇంగ్లీషు కనిపించదు.',
            )}
          </p>
        </div>
      </div>

      {/* What is wrong, before the block is copied anywhere. */}
      <div aria-live="polite" className="mt-5">
        {result.ok ? (
          <p className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">
            <Check className="size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
            {t(
              `Ready — ${englishLines} paragraphs, about ${readMinutes(draft.bodyEn.split(/\r?\n/).filter((l) => l.trim()))} minute read.`,
              `సిద్ధం — ${teluguLines} పేరాలు, దాదాపు ${readMinutes(draft.bodyEn.split(/\r?\n/).filter((l) => l.trim()))} నిమిషాల పఠనం.`,
            )}
          </p>
        ) : (
          <div className="rounded-md border border-border bg-background p-3">
            <p className="inline-flex items-center gap-2 text-sm font-medium">
              <AlertCircle className="size-4 shrink-0 text-destructive" strokeWidth={1.5} aria-hidden="true" />
              {t('Still needed before this can be published', 'ప్రచురించే ముందు ఇంకా కావాల్సినవి')}
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {result.problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copy}
          disabled={!result.ok}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity duration-[var(--motion-fast)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? (
            <Check className="size-4" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <ClipboardCopy className="size-4" strokeWidth={1.5} aria-hidden="true" />
          )}
          {copied ? t('Block copied', 'బ్లాక్ కాపీ అయింది') : t('Copy the block to paste', 'అతికించడానికి బ్లాక్ కాపీ చేయండి')}
        </button>
        <button
          type="button"
          onClick={() => setShowBlock((s) => !s)}
          aria-expanded={showBlock}
          aria-controls={`${uid}-block`}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm font-medium hover:bg-secondary"
        >
          {showBlock ? t('Hide the block', 'బ్లాక్ దాచండి') : t('Show the block', 'బ్లాక్ చూపండి')}
        </button>
      </div>

      {showBlock ? (
        <pre
          id={`${uid}-block`}
          tabIndex={0}
          className="mt-4 max-h-96 overflow-auto rounded-md border border-border bg-background p-4 font-mono text-[0.75rem] leading-relaxed text-foreground"
        >
          {block}
        </pre>
      ) : null}
    </div>
  )
}
