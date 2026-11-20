import { useId, useState } from 'react'
import { Check, ExternalLink, FileText, FolderTree, Mail, Play, Upload } from 'lucide-react'

const uploadUrl = `${repoUrl}/upload/${repo.branch}/public`

/* One worked example per kind of material: the real file that is on the site
   now, and the text to copy. An owner matches their new thing to a row here
   instead of reading a rule and translating it. */
const examples = [
  {
    what: { en: 'A book’s front cover picture', te: 'పుస్తక ముఖచిత్ర చిత్రం' },
     file: 'src/covers/why-jesus-cannot-be-god.webp',
     line: 'the file name is the product’s own address: ',
     after: 'why-jesus-cannot-be-god',
     note: {
       en: 'This works for every title in the store, today and for a title added next year. Upload the cover picture into src/covers and name it exactly after the product’s slug — .webp, .jpg or .png, any shape, no wider than about 800px. Nothing else is edited: the shelf and the product page pick it up on the rebuild, and deleting the file puts the drawn cover back. A picture already in public/images can be pointed at instead with an image line in src/data/products.ts, which wins over the folder.',
       te: 'ఇది స్టోర్‌లోని ప్రతి శీర్షికకు పనిచేస్తుంది — ఈ రోజు ఉన్నవాటికీ, వచ్చే సంవత్సరం చేర్చే దానికీ. ముఖచిత్ర చిత్రాన్ని src/covers లోకి అప్‌లోడ్ చేసి, ఉత్పత్తి స్లగ్ పేరే పెట్టండి — .webp, .jpg లేదా .png, ఏ ఆకారమైనా సరే, దాదాపు 800px వెడల్పు దాకా. మరేదీ మార్చాల్సిన అవసరం లేదు: మళ్లీ నిర్మించినప్పుడు షెల్ఫ్, ఉత్పత్తి పేజీ దాన్ని తీసుకుంటాయి; ఫైల్ తొలగిస్తే గీసిన ముఖచిత్రం తిరిగి వస్తుంది. public/images లో ఇప్పటికే ఉన్న చిత్రాన్ని src/data/products.ts లోని image వరుసతో చూపించవచ్చు — అది ఫోల్డర్ కంటే ముందు తీసుకోబడుతుంది.',
     },

  },
  {
    what: { en: 'A product download link', te: 'ఉత్పత్తి డౌన్‌లోడ్ లింక్' },
    file: { en: 'no file — the PDF stays where it already is', te: 'ఫైల్ లేదు — PDF ఉన్న చోటే ఉంటుంది' },
    line: 'src/data/products.ts → url: ',
    after: "'https://drive.google.com/file/d/…'",
    note: {
      en: 'Already have the PDF in Google Drive or Dropbox? Paste that share link here and the product page shows an Open the file button. Paste the link so that anyone with it can view — not a link that asks for a sign-in.',
      te: 'PDF ఇప్పటికే Google Drive లేదా Dropbox లో ఉందా? ఆ షేర్ లింక్‌ను ఇక్కడ అతికించండి, ఉత్పత్తి పేజీలో “ఫైల్ తెరవండి” బటన్ కనిపిస్తుంది. లింక్ ఉన్న ఎవరైనా చూడగలిగేలా పంచండి — సైన్-ఇన్ అడిగే లింక్ కాదు.',
    },
  },
  {
    what: { en: 'A store PDF', te: 'స్టోర్ PDF' },
    file: 'public/files/twelve-weeks-matthew.pdf',
    line: 'src/data/products.ts → slug: ',
    after: "'twelve-weeks-matthew'",
    extra: 'src/data/products.ts → file:',
    note: {
      en: 'The file name and the slug are the same word. If you type it as Twelve Weeks.pdf it will not be found.',
      te: 'ఫైల్ పేరు, స్లగ్ ఒకటే పదం. Twelve Weeks.pdf అని ఖాళీలతో రాస్తే అది కనిపించదు.',    },
  },
  {
    what: { en: 'A picture of the room', te: 'గది చిత్రం' },
    file: 'public/images/gallery-church-street.webp',
    line: 'src/data/gallery.ts → file: ',
    after: "'/images/gallery-church-street.webp'",
    note: {
      en: 'Saved as .webp, 1200px wide. The address in gallery.ts drops the word public — that part is not part of the link.',
      te: '.webp గా, 1200px వెడల్పుతో సేవ్ చేయండి. gallery.ts లో చిరునామాలో public అనే పదం ఉండదు — అది లింక్‌లో భాగం కాదు.',
    },
  },
  {
    what: { en: 'A teaching video', te: 'బోధన వీడియో' },
    file: { en: 'no file — it stays on YouTube', te: 'ఫైల్ లేదు — యూట్యూబ్‌లోనే ఉంటుంది' },
    line: 'src/data/videos.ts → youtubeId: ',
    after: "'dQw4w9WgXcQ'",
    note: {
      en: 'Eleven characters copied from the video’s address. Nothing is uploaded to the repository for a video.',
      te: 'వీడియో చిరునామా నుండి కాపీ చేసిన పదకొండు అక్షరాలు. వీడియో కోసం రిపాజిటరీలో ఏదీ అప్‌లోడ్ అవ్వదు.',
    },
  },
  {
    what: { en: 'An article', te: 'ఒక వ్యాసం' },
    file: { en: 'no file — the text is the article', te: 'ఫైల్ లేదు — పాఠమే వ్యాసం' },
    line: 'src/data/articles.ts → slug: ',
    after: "'church-street-renovation'",
    note: {
      en: 'That slug becomes the address /articles/church-street-renovation. The newest date is the one on the home page.',
      te: 'ఆ స్లగ్ చిరునామా అవుతుంది: /articles/church-street-renovation. అత్యంత కొత్త తేదీ ముఖ్య పేజీలో కనిపిస్తుంది.',
    },
  },
]

/* The everyday uploads: four fixed destinations and nothing else. Each one is
   a folder page on GitHub where a file can be dropped, so a Tuesday's pictures
   take three clicks rather than a decision about the whole site. */
const dailyUploads = [
  {
    what: { en: 'Pictures of the room or the week', te: 'గది లేదా వారం చిత్రాలు' },
    href: `${repoUrl}/upload/${repo.branch}/public/images`,
    name: 'sunday-tea.webp',
    line: 'src/data/gallery.ts',
  },
  {
    what: { en: 'A cover picture for a title in the store', te: 'స్టోర్ శీర్షిక ముఖచిత్రం' },
    href: `${repoUrl}/upload/${repo.branch}/src/covers`,
    name: 'payhip-uwasp.webp',
    line: 'src/covers',
  },
  {
    what: { en: 'A store PDF', te: 'స్టోర్ PDF' },
    href: `${repoUrl}/upload/${repo.branch}/public/files`,
    name: 'twelve-weeks-matthew.pdf',
    line: 'src/data/products.ts',
  },
  {
    what: { en: 'A written article', te: 'రాసిన వ్యాసం' },
    href: `${repoUrl}/edit/${repo.branch}/src/data/articles.ts`,
    name: 'src/data/articles.ts',
    line: 'src/data/articles.ts',
  },
]

/* Every kind of material, where its file lives, and how to name a new one. */
const storage = [
  {
    label: { en: 'Pictures of the room', te: 'గది చిత్రాలు' },
    path: 'public/images/',
    file: 'src/data/gallery.ts',
    rule: { en: 'lowercase-with-hyphens.webp, 1200px wide', te: 'చిన్న అక్షరాలు-హైఫన్.webp, 1200px వెడల్పు' },
  },
  {
    label: { en: 'Product cover pictures, any title', te: 'ఉత్పత్తి ముఖచిత్ర చిత్రాలు, ఏ శీర్షికకైనా' },
    path: 'src/covers/',
    file: 'src/lib/productImage.ts',
    rule: {
      en: 'the product’s slug as the whole file name — payhip-uwasp.webp — .webp, .jpg or .png, about 800px wide',
      te: 'ఉత్పత్తి స్లగ్‌నే ఫైల్ పేరుగా పెట్టండి — payhip-uwasp.webp — .webp, .jpg లేదా .png, దాదాపు 800px వెడల్పు',
    },
  },
  {
    label: { en: 'A cover picture kept in public/images', te: 'public/images లో ఉంచిన ముఖచిత్రం' },
    path: 'public/images/',
    file: 'src/data/products.ts → image',
    rule: {
      en: 'portrait, 800px wide, .webp, then that path on the product — it wins over a file in src/covers',
      te: 'నిలువుగా, 800px వెడల్పు, .webp, తర్వాత ఆ మార్గం ఉత్పత్తిపై — ఇది src/covers లోని ఫైల్ కంటే ముందు తీసుకోబడుతుంది',
    },
  },
  {
    label: { en: 'Product download links', te: 'ఉత్పత్తి డౌన్‌లోడ్ లింకులు' },
    path: 'src/data/products.ts → url',
    file: 'src/data/products.ts',
    rule: {
      en: 'the share link to the file, starting https:// — used instead of uploading the PDF here',
      te: 'ఫైల్ షేర్ లింక్, https:// తో మొదలవుతుంది — PDF ఇక్కడ అప్‌లోడ్ చేయకుండా దీన్ని వాడండి',
    },
  },
  {
    label: { en: 'Store files — guides, songbook', te: 'స్టోర్ ఫైళ్లు — గైడ్లు, పాటల పుస్తకం' },
    path: 'public/files/',
    file: 'src/data/products.ts',
    rule: { en: 'the same name as the product slug, then a matching line in products.ts', te: 'ఉత్పత్తి స్లగ్‌తో అదే పేరు, తర్వాత products.ts లో సరిపోయే వరుస' },
  },
  {
    label: { en: 'Articles, in both languages', te: 'వ్యాసాలు, రెండు భాషల్లో' },
    path: 'src/data/articles.ts',
    file: 'src/data/articles.ts',
    rule: { en: 'the date is the newest-first sort', te: 'తేదీ ప్రకారం కొత్తవి ముందు' },
  },
  {
    label: { en: 'Teaching videos', te: 'బోధన వీడియోలు' },
    path: 'src/data/videos.ts',
    file: 'src/data/videos.ts',
    rule: { en: 'the YouTube id, nothing else', te: 'యూట్యూబ్ ఐడీ మాత్రమే' },
  },
]
import { ArticleComposer } from '@/components/ArticleComposer'
import { contact, repo, repoUrl } from '@/data/site'
import { productTitle, products } from '@/data/products'
import { productImage } from '@/lib/productImage'
import { useLangClass, useT } from '@/lib/language'

export default function Edit() {
  const t = useT()
  const teluguClass = useLangClass()
  const id = useId()
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [what, setWhat] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Content change request' + (name ? ` from ${name}` : ''))}&body=${encodeURIComponent(`${what}\n\n— ${name} (${email})`)}`

  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <div className="max-w-content">
        <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3rem)]">{t('The owner’s page: how to put something on the site', 'యజమాని పేజీ: సైట్‌లో ఏదైనా ఎలా పెట్టాలి')}</h1>
        <p className="mt-3 max-w-[62ch] text-muted-foreground">
          {t(
            'Every day starts with the same short path — pick the kind of file, drop it in its folder, commit — and the rest of this page is the reference for when something needs more than that. Four things change on this site — pictures, store PDFs, videos, articles — and each one has its own folder and its own line. Nothing here can be done from this page: it needs a server holding a key, and the site has none.',
            'ఈ సైట్‌లో నాలుగు రకాలుగా మార్పులు జరుగుతాయి — చిత్రాలు, స్టోర్ PDFలు, వీడియోలు, వ్యాసాలు — ప్రతి దానికి సొంత ఫోల్డర్, సొంత వరుస ఉన్నాయి. కింద మీ రకాన్ని చూసి, ఉదాహరణను కాపీ చేసి, పదాలను మీవిగా మార్చండి. ఇక్కడి నుండి ఏదీ చేయలేము: కీ ఉంచే సర్వర్ కావాలి, సైట్‌లో అలాంటిది లేదు.',
          )}
        </p>

        {/* The one thing an owner does most days, before the reference below. */}
        <section className="mt-8 rounded-lg border border-primary/25 bg-card p-5">
          <h2 className="text-lg">{t('Adding something today', 'ఈ రోజే ఏదైనా చేర్చడం')}</h2>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'This site is a set of files, not an account. Each picture, PDF and article is a file in the repository, and adding one is uploading that file and pressing Commit. There is no sign-in here and no form that writes: a form that uploaded files would need a server holding the church’s GitHub key, and that server is what this build does not have.',
              'ఈ సైట్ ఖాతా కాదు, ఫైళ్ల సమూహం. ప్రతి చిత్రం, PDF, వ్యాసం రిపాజిటరీలో ఒక ఫైల్; ఒకటి చేర్చడం అంటే ఆ ఫైల్ అప్‌లోడ్ చేసి Commit నొక్కడం. ఇక్కడ సైన్-ఇన్ లేదు, రాసే ఫారం లేదు: ఫైళ్లు అప్‌లోడ్ చేసే ఫారం కోసం చర్చి గిట్‌హబ్ కీ ఉంచే సర్వర్ కావాలి, ఈ బిల్డ్‌లో అది లేదు.',
            )}
          </p>

          {/* Four doors, one per kind of material. Nothing else is opened. */}
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {dailyUploads.map((row) => (
              <li key={row.what.en}>
                <a
                  href={row.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-full min-h-11 items-start gap-3 rounded-md border border-border bg-background p-4 transition-colors duration-[var(--motion-fast)] hover:border-primary/40 hover:bg-secondary"
                >
                  <Upload className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium">{t(row.what.en, row.what.te)}</span>
                    <span className="mt-1 block break-all font-mono text-[0.8125rem] text-primary">{row.name}</span>
                    <span className="sr-only">{t('(opens the upload page in a new tab)', '(అప్‌లోడ్ పేజీని కొత్త ట్యాబ్‌లో తెరుస్తుంది)')}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold tabular-nums text-primary-foreground">1</span>
              <span className="flex-1">
                {t(
                  'Sign in to GitHub once on your own phone or computer, and stay signed in. That account is the only thing that can change the site, which is why nothing on this site needs a password.',
                  'మీ ఫోన్ లేదా కంప్యూటర్‌లో ఒకసారి గిట్‌హబ్‌లో సైన్ ఇన్ అవ్వండి, అలాగే ఉండనివ్వండి. ఆ ఖాతా మాత్రమే సైట్‌ను మార్చగలదు, అందుకే ఈ సైట్‌లో పాస్‌వర్డ్ అవసరం లేదు.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold tabular-nums text-primary-foreground">2</span>
              <span className="flex-1">
                {t(
                  'Choose one of the four doors above — the folder for the kind of thing you are adding — and drop the file on the page, or press choose your files. Name it in lowercase words joined by hyphens, as the example under each door shows.',
                  'పైన ఉన్న నాలుగు ద్వారాల్లో మీరు చేర్చే వస్తువుకు సరిపోయేది ఎంచుకోండి — దాని ఫోల్డర్ — ఫైల్‌ను ఆ పేజీపైకి లాగండి, లేదా choose your files నొక్కండి. ప్రతి ద్వారం కింద ఉన్న ఉదాహరణలాగా, చిన్న అక్షరాలు, హైఫన్‌లతో పేరు పెట్టండి.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold tabular-nums text-primary-foreground">3</span>
              <span className="flex-1">
                {t(
                  'Press Commit changes at the bottom and wait a minute or two. The site rebuilds itself from those files, and the new thing is on the page — nothing else on the site has changed.',
                  'కింద Commit changes నొక్కి ఒకటి రెండు నిమిషాలు ఆగండి. ఆ ఫైళ్ల నుండి సైట్ తనంతట తాను మళ్లీ నిర్మించబడుతుంది, కొత్తది పేజీలో కనిపిస్తుంది — సైట్‌లో మరేదీ మారదు.',
                )}
              </span>
            </li>
          </ol>

          <p className="mt-4 max-w-[62ch] border-t border-border pt-4 text-sm text-muted-foreground">
            {t(
              'A picture needs one line more than the upload: its caption, its width and height, in src/data/gallery.ts. A store cover needs none — the file name alone is the match. The article form below writes that line for an article, so nothing is typed twice.',
              'చిత్రానికి అప్‌లోడ్‌తో పాటు మరో వరుస కావాలి: దాని క్యాప్షన్, వెడల్పు-ఎత్తు, src/data/gallery.ts లో. స్టోర్ ముఖచిత్రానికి ఏమీ అవసరం లేదు — ఫైల్ పేరే సరిపోతుంది. వ్యాసానికి కావలసిన వరుసను కింది ఫారం రాస్తుంది, కాబట్టి ఏదీ రెండుసార్లు టైప్ చేయాల్సిన అవసరం లేదు.',
            )}
          </p>
        </section>

        {/* The whole answer, side by side: folder, file name, the line to copy. */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {examples.map((row) => (
            <li key={row.line} className="rounded-lg border border-border bg-card p-4">
              <h2 className="font-display text-base">{t(row.what.en, row.what.te)}</h2>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{t('File', 'ఫైల్')}</p>
              <p className="mt-1 break-all font-mono text-[0.8125rem] text-primary">{typeof row.file === 'string' ? row.file : t(row.file.en, row.file.te)}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{t('Line to add or change', 'జోడించాల్సిన లేదా మార్చాల్సిన వరుస')}</p>
              <p className="mt-1 break-all font-mono text-[0.8125rem] text-foreground">
                {row.line}
                <span className="rounded-sm bg-saffron/30 px-1">{row.after}</span>
              </p>
              {'extra' in row && row.extra ? (
                <p className="mt-1 break-all font-mono text-[0.8125rem] text-foreground">
                  {row.extra}{' '}
                  <span className="rounded-sm bg-saffron/30 px-1">'twelve-weeks-matthew.pdf'</span>
                </p>
              ) : null}
              <p className="mt-3 text-sm text-muted-foreground">{t(row.note.en, row.note.te)}</p>            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[62ch] text-sm text-muted-foreground">
          {t(
            'Then press Commit changes at the bottom of the GitHub page. The site rebuilds itself from those files in a minute or two. Full walkthroughs are further down.',
            'తర్వాత గిట్‌హబ్ పేజీ కింద Commit changes నొక్కండి. ఒకటి రెండు నిమిషాల్లో ఆ ఫైళ్ల నుండి సైట్ తనంతట తాను మళ్లీ నిర్మించబడుతుంది. పూర్తి విధానాలు కింద ఉన్నాయి.',
          )}
        </p>

        <div className="mt-8 max-w-[74ch]">
        <h2 className="text-lg">{t('Before you start', 'మొదలుపెట్టే ముందు')}</h2>

        <div className="mt-4 rounded-lg border border-border bg-card p-5">
          <h3 className="text-base">{t('What does exist', 'ఇప్పుడు ఉన్నది')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{t('Every article, product, drawing and contact detail is in one file each under src/data, ready to be edited by a developer.', 'ప్రతి వ్యాసం, ఉత్పత్తి, చిత్రం మరియు సంప్రదింపు వివరం src/data కింద ఒక్కో ఫైల్‌లో ఉంది, డెవలపర్ మార్చడానికి సిద్ధం.')}</li>            <li>{t('The featured article is the newest item in the article list, so publishing a dated article changes the home page the same day.', 'ప్రత్యేక వ్యాసం వ్యాస జాబితాలో కొత్తది, కాబట్టి తేదీతో కూడిన వ్యాసం ప్రచురించిన రోజే ముఖ్య పేజీ మారుతుంది.')}</li>
            <li>{t('The site rebuilds and republishes in a minute or two of a saved change.', 'మార్పు సేవ్ అయిన ఒకటి రెండు నిమిషాల్లో సైట్ మళ్లీ నిర్మించి ప్రచురించబడుతుంది.')}</li>
          </ul>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <h3 className="text-base">{t('Your storage is GitHub', 'మీ నిల్వ గిట్‌హబ్')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'Every picture, store file and article on this site is kept in one GitHub repository. Nothing is stored anywhere else, and no file is ever uploaded from a browser — you add it from GitHub itself in three minutes.',
              'ఈ సైట్‌లోని ప్రతి చిత్రం, స్టోర్ ఫైల్ మరియు వ్యాసం ఒకే గిట్‌హబ్ రిపాజిటరీలో ఉంటాయి. మరెక్కడా నిల్వ ఉండదు, బ్రౌజర్ నుండి ఏ ఫైల్ అప్‌లోడ్ అవ్వదు — గిట్‌హబ్‌లోనే మూడు నిమిషాల్లో చేర్చుతారు.',
            )}
          </p>

          {/* The repository itself, so the owner has one obvious way to get there. */}
          <dl className="mt-5 grid gap-px overflow-hidden rounded-md border border-border bg-border text-sm sm:grid-cols-2">
            <div className="bg-background p-4">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t('Repository', 'రిపాజిటరీ')}</dt>
              <dd className="mt-1 break-all font-medium">
                <a href={repoUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                  <FolderTree className="size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  {repo.owner}/{repo.name}
                </a>
              </dd>
            </div>
            <div className="bg-background p-4">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t('Branch that publishes', 'ప్రచురించే బ్రాంచ్')}</dt>
              <dd className="mt-1 font-mono text-[0.8125rem]">{repo.branch}</dd>
            </div>
          </dl>

          {/* Where each kind of material goes. A table, because it is one. */}
          <div className="mt-6 overflow-x-auto" tabIndex={0} role="group" aria-label={t('Where each kind of file is stored in the repository', 'రిపాజిటరీలో ప్రతి రకమైన ఫైల్ ఎక్కడ నిల్వ ఉంటుంది')}>
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <caption className="sr-only">{t('Where each kind of file is stored in the repository', 'రిపాజిటరీలో ప్రతి రకమైన ఫైల్ ఎక్కడ నిల్వ ఉంటుంది')}</caption>
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                  <th scope="col" className="py-2 pr-3 font-medium">{t('What', 'ఏమి')}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t('Path in the repository', 'రిపాజిటరీలో మార్గం')}</th>
                  <th scope="col" className="py-2 font-medium">{t('How to name it', 'పేరు ఎలా పెట్టాలి')}</th>
                </tr>
              </thead>
              <tbody>
                {storage.map((row) => (
                  <tr key={row.path} className="border-b border-border last:border-0">
                    <th scope="row" className="py-3 pr-3 align-top font-medium">{t(row.label.en, row.label.te)}</th>
                    <td className="break-all py-3 pr-3 align-top font-mono text-[0.8125rem] text-primary">{row.path}</td>
                    <td className="py-3 align-top text-muted-foreground">{t(row.rule.en, row.rule.te)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 text-base">{t('Changing a store cover, start to finish', 'స్టోర్ ముఖచిత్రం మార్చడం, మొదలు నుండి చివరి వరకు')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'Every one of the titles on the shelf takes a picture of its own, and the same three steps work for a title added later. The picture is matched to the product by its file name alone, so name it exactly.',
              'షెల్ఫ్‌లోని ప్రతి శీర్షిక తన సొంత చిత్రాన్ని తీసుకుంటుంది, తర్వాత చేర్చే శీర్షికకూ ఇవే మూడు అడుగులు. చిత్రం ఫైల్ పేరు ద్వారానే ఉత్పత్తితో కలుపబడుతుంది, కాబట్టి పేరు సరిగ్గా పెట్టండి.',
            )}
          </p>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">1</span>
              <span className="flex-1">
                {t(
                  'Open src/covers in the repository and use Add file → Upload files. Upload the front cover as a .webp, .jpg or .png, any shape, about 800px wide.',
                  'రిపాజిటరీలో src/covers తెరిచి Add file → Upload files వాడండి. ముఖచిత్రాన్ని .webp, .jpg లేదా .png గా, ఏ ఆకారమైనా సరే, దాదాపు 800px వెడల్పుతో అప్‌లోడ్ చేయండి.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">2</span>
              <span className="flex-1">
                {t(
                  'Name the file after that product’s slug and nothing else — why-jesus-cannot-be-god.webp for the title whose slug is why-jesus-cannot-be-god. Spaces and capitals stop it from being found.',
                  'ఆ ఉత్పత్తి స్లగ్ పేరే ఫైల్‌కు పెట్టండి, మరేమీ కాదు — why-jesus-cannot-be-god అనే స్లగ్ ఉన్న శీర్షికకు why-jesus-cannot-be-god.webp. ఖాళీలు, పెద్ద అక్షరాలు ఉంటే అది కనిపించదు.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">3</span>
              <span className="flex-1">
                {t(
                  'Commit to main. The shelf and that title’s page show the new cover after the rebuild, and the whole picture is kept — it is set inside the frame rather than cropped. Replace the picture by uploading a file of the same name; remove it and the drawn cover returns.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. మళ్లీ నిర్మించిన తర్వాత షెల్ఫ్‌లో, ఆ శీర్షిక పేజీలో కొత్త ముఖచిత్రం కనిపిస్తుంది, చిత్రం మొత్తం ఉంచబడుతుంది — కత్తిరించబడదు. అదే పేరుతో ఫైల్ అప్‌లోడ్ చేసి చిత్రాన్ని మార్చుకోవచ్చు; తొలగిస్తే గీసిన ముఖచిత్రం తిరిగి వస్తుంది.',
                )}
              </span>
            </li>
          </ol>

          <h3 className="mt-6 text-base">{t('Every title, and the exact file name to give its cover', 'ప్రతి శీర్షిక, దాని ముఖచిత్రానికి పెట్టాల్సిన ఫైల్ పేరు')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'All twelve titles already have a picture file of their own, so changing a cover means uploading over it — same name, a .webp, .jpg or .png. Pick the row, copy the name, and upload your picture with exactly that name into src/covers.',
              'పన్నెండు శీర్షికలకూ ఇప్పటికే సొంత చిత్ర ఫైల్ ఉంది, కాబట్టి ముఖచిత్రం మార్చడం అంటే దానిపైనే అప్‌లోడ్ చేయడం — అదే పేరు, .webp, .jpg లేదా .png. మీ వరుసను ఎంచుకోండి, పేరు కాపీ చేసి, అదే పేరుతో మీ చిత్రాన్ని src/covers లోకి అప్‌లోడ్ చేయండి.',
            )}
          </p>

          <div className="mt-4 overflow-x-auto" tabIndex={0} role="group" aria-label={t('The file name of every store cover', 'ప్రతి స్టోర్ ముఖచిత్రపు ఫైల్ పేరు')}>
            <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
              <caption className="sr-only">{t('The file name of every store cover', 'ప్రతి స్టోర్ ముఖచిత్రపు ఫైల్ పేరు')}</caption>
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                  <th scope="col" className="py-2 pr-3 font-medium">{t('Cover now', 'ఇప్పుడున్న ముఖచిత్రం')}</th>
                  <th scope="col" className="py-2 pr-3 font-medium">{t('Title', 'శీర్షిక')}</th>
                  <th scope="col" className="py-2 font-medium">{t('Name your picture', 'మీ చిత్రానికి పేరు')}</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => {
                  const cover = productImage(p)
                  return (
                    <tr key={p.slug} className="border-b border-border last:border-0 align-top">
                      <td className="py-3 pr-3 align-middle">
                        {cover ? (
                          <img
                            src={cover}
                            alt=""
                            width={44}
                            height={62}
                            loading="lazy"
                            className="h-[62px] w-11 rounded-sm border border-border bg-muted object-contain"
                          />
                        ) : (
                          <span aria-hidden="true" className="block h-[62px] w-11 rounded-sm bg-muted" />
                        )}
                      </td>
                      <th scope="row" className={`py-3 pr-3 align-middle font-medium ${teluguClass(productTitle(p, t)) ?? ''}`}>
                        {productTitle(p, t)}
                      </th>
                      <td className="py-3 align-middle">
                        <span className="break-all font-mono text-[0.8125rem] text-primary">{p.slug}.webp</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 text-base">{t('Adding a picture, start to finish', 'చిత్రం చేర్చడం, మొదలు నుండి చివరి వరకు')}</h3>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">1</span>
              <span className="flex-1">
                {t(
                  'Open the public/images folder in the repository and use Add file → Upload files, or drag the picture onto that folder page.',
                  'రిపాజిటరీలో public/images ఫోల్డర్ తెరిచి Add file → Upload files వాడండి, లేదా చిత్రాన్ని ఆ ఫోల్డర్ పేజీపైకి లాగండి.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">2</span>
              <span className="flex-1">
                {t(
                  'Add its line to src/data/gallery.ts with the file name, its width and height, and a caption in English and Telugu. The gallery reads that list and nothing else, so a file with no line does not appear.',
                  'ఫైల్ పేరు, దాని వెడల్పు-ఎత్తు, ఇంగ్లీష్ మరియు తెలుగు క్యాప్షన్‌తో src/data/gallery.ts లో దాని వరుసను జోడించండి. గ్యాలరీ ఆ జాబితాను మాత్రమే చదువుతుంది, కాబట్టి వరుస లేని ఫైల్ కనిపించదు.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">3</span>
              <span className="flex-1">
                {t(
                  'Commit to main. The site rebuilds from those files and the picture is live in a minute or two — no sign-in here, and no password is ever stored in the site.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. ఆ ఫైళ్ల నుండి సైట్ మళ్లీ నిర్మించబడి ఒకటి రెండు నిమిషాల్లో చిత్రం కనిపిస్తుంది — ఇక్కడ సైన్-ఇన్ లేదు, సైట్‌లో పాస్‌వర్డ్ ఎప్పుడూ నిల్వ ఉండదు.',
                )}
              </span>
            </li>
          </ol>

          <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
            <a
              href={uploadUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Upload className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {t('Open the upload page', 'అప్‌లోడ్ పేజీ తెరవండి')}
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium hover:bg-secondary"
            >
              <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden="true" />
              {t('See the repository', 'రిపాజిటరీ చూడండి')}
            </a>
          </div>

          <h3 className="mt-8 text-base">{t('Adding a video, start to finish', 'వీడియో చేర్చడం, మొదలు నుండి చివరి వరకు')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'A video is not uploaded here at all. It goes on the church’s YouTube channel, and the site shows its thumbnail and sends the visitor there to watch.',
              'వీడియో ఇక్కడ అప్‌లోడ్ అవ్వదు. అది చర్చి యూట్యూబ్ ఛానెల్‌లోకి వెళ్తుంది; సైట్ దాని థంబ్‌నెయిల్ చూపించి చూడటానికి అక్కడికి పంపుతుంది.',
            )}
          </p>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Play className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Upload the recording to the channel as usual. Open the finished video on YouTube and copy the id — the eleven characters after watch?v= or after youtu.be/.',
                  'రికార్డింగ్‌ను ఛానెల్‌కు మామూలుగానే అప్‌లోడ్ చేయండి. యూట్యూబ్‌లో పూర్తయిన వీడియో తెరిచి ఐడీ కాపీ చేయండి — watch?v= లేదా youtu.be/ తర్వాత ఉన్న పదకొండు అక్షరాలు.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <FolderTree className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Add a line to src/data/videos.ts: an id of your own (lowercase, hyphens), the youtubeId, the title and series in English and Telugu, the length in minutes and the date. The list sorts itself newest first.',
                  'src/data/videos.ts లో ఒక వరుస జోడించండి: మీ సొంత ఐడీ (చిన్న అక్షరాలు, హైఫన్లు), youtubeId, ఇంగ్లీష్ మరియు తెలుగులో శీర్షిక-సిరీస్, నిమిషాల నిడివి మరియు తేదీ. జాబితా కొత్తవి ముందుగా తనంతట తాను అమర్చుకుంటుంది.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Commit to main. The thumbnail is read from YouTube itself, so nothing is stored here. Until a line has a youtubeId it shows the drawn frame instead, which is what every video on the page does today.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. థంబ్‌నెయిల్ యూట్యూబ్ నుండే తీసుకోబడుతుంది, ఇక్కడ ఏదీ నిల్వ ఉండదు. youtubeId లేని వరుస గీసిన చట్రాన్ని చూపిస్తుంది — ఈ రోజు పేజీలోని ప్రతి వీడియో అలాగే ఉంది.',
                )}
              </span>
            </li>
          </ol>

          <h3 className="mt-8 text-base">{t('Publishing an article, start to finish', 'వ్యాసం ప్రచురించడం, మొదలు నుండి చివరి వరకు')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'Articles live in one file rather than in a database, so writing one is an edit to src/data/articles.ts. The newest dated article becomes the featured one on the home page by itself.',
              'వ్యాసాలు డేటాబేస్‌లో కాకుండా ఒకే ఫైల్‌లో ఉంటాయి, కాబట్టి రాయడం అంటే src/data/articles.ts మార్చడం. తేదీ ప్రకారం కొత్త వ్యాసం దానంతట తానే ముఖ్య పేజీలో ప్రత్యేకంగా కనిపిస్తుంది.',
            )}
          </p>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <FileText className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Open src/data/articles.ts on GitHub and use the pencil to edit it. Copy the block of the article above yours as a model — a slug, a date, a title and summary in English and Telugu, and the body.',
                  'గిట్‌హబ్‌లో src/data/articles.ts తెరిచి పెన్సిల్‌తో మార్చండి. మీ పైన ఉన్న వ్యాసం బ్లాక్‌ను ఆదర్శంగా కాపీ చేయండి — స్లగ్, తేదీ, ఇంగ్లీష్ మరియు తెలుగులో శీర్షిక-సారాంశం, మరియు మూల పాఠం.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <ExternalLink className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'The slug is the article’s address, so church-street-renovation becomes /articles/church-street-renovation. Keep it to lowercase words and hyphens, and never change one after the link has been shared.',
                  'స్లగ్ అనేది వ్యాస చిరునామా; church-street-renovation అంటే /articles/church-street-renovation. చిన్న అక్షరాలు, హైఫన్లు మాత్రమే వాడండి, లింక్ పంచిన తర్వాత దాన్ని ఎప్పుడూ మార్చవద్దు.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true"/>
              <span>
                {t(
                  'Leave both languages filled in. If the Telugu is not ready, ask one of the translators before publishing rather than putting the English in the Telugu field.',
                  'రెండు భాషలు నింపండి. తెలుగు సిద్ధంగా లేకపోతే, తెలుగు స్థానంలో ఇంగ్లీష్ పెట్టకుండా ప్రచురించే ముందు అనువాదకులను అడగండి.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Commit to main. The article, its own address, the Articles index and the home page all update together in a minute or two.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. వ్యాసం, దాని చిరునామా, వ్యాసాల జాబితా మరియు ముఖ్య పేజీ అన్నీ ఒకటి రెండు నిమిషాల్లో కలిసి మారుతాయి.',
                )}
              </span>
            </li>
          </ol>

          <ArticleComposer />

          <h3 className="mt-8 text-base">{t('Adding a store file, start to finish', 'స్టోర్ ఫైల్ చేర్చడం, మొదలు నుండి చివరి వరకు')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'Store files work like the pictures: the PDF sits in the repository, the store reads one line about it, and orders come by email to the church office. Keep the price on the page the price you will ask for — no card is ever entered on this site and nothing is delivered automatically.',
              'స్టోర్ ఫైళ్లు చిత్రాల లాగే పనిచేస్తాయి: PDF రిపాజిటరీలో ఉంటుంది, స్టోర్ దాని గురించి ఒక వరుస చదువుతుంది, ఆర్డర్లు చర్చి కార్యాలయానికి ఇమెయిల్ ద్వారానే వస్తాయి. పేజీలో చూపించిన ధరే మీరు అడిగే ధరగా ఉంచండి — ఈ సైట్‌లో కార్డు ఎప్పుడూ నమోదు చేయబడదు, ఏదీ స్వయంచాలకంగా పంపబడదు.',
            )}
          </p>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Upload className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Open the public/files folder in the repository and use Add file → Upload files. Name the PDF exactly after the product’s slug: twelve-weeks-matthew.pdf, lowercase, hyphens, no spaces.',
                  'రిపాజిటరీలో public/files ఫోల్డర్ తెరిచి Add file → Upload files వాడండి. PDF కు ఉత్పత్తి స్లగ్ పేరే పెట్టండి: twelve-weeks-matthew.pdf, చిన్న అక్షరాలు, హైఫన్లు, ఖాళీలు లేకుండా.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <FileText className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Open src/data/products.ts with the pencil and copy an existing product. Each one needs a slug, a title, a format, a short blurb, three or four lines of what is inside, a price in rupees and one of the four drawn cover shapes — study, songs, telugu or catechism.',
                  'పెన్సిల్‌తో src/data/products.ts తెరిచి ఉన్న ఉత్పత్తిని కాపీ చేయండి. ప్రతి దానికి స్లగ్, శీర్షిక, ఫార్మాట్, చిన్న పరిచయం, లోపల ఏమి ఉంది అనే మూడు నాలుగు వరుసలు, రూపాయల్లో ధర మరియు నాలుగు గీసిన ముఖచిత్ర రూపాలలో ఒకటి — study, songs, telugu లేదా catechism — కావాలి.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <ExternalLink className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'The slug is the product’s address and the file name at once, so a slug of twelve-weeks-matthew points the page at /store/twelve-weeks-matthew and at the PDF of the same name. Lowercase words and hyphens; never change one after the link has been shared.',
                  'స్లగ్ అంటే ఉత్పత్తి చిరునామా మరియు ఫైల్ పేరు రెండూ; twelve-weeks-matthew అంటే పేజీ /store/twelve-weeks-matthew వద్ద, అదే పేరుతో PDF వద్ద. చిన్న అక్షరాలు, హైఫన్లు; లింక్ పంచిన తర్వాత దాన్ని ఎప్పుడూ మార్చవద్దు.',
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t(
                  'Commit to main. The new title appears on the store shelf and its own page in a minute or two. If a product is wrong or finished, delete its line here and the file in public/files, and it leaves the shelf — nothing already sold is affected.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. ఒకటి రెండు నిమిషాల్లో కొత్త శీర్షిక స్టోర్ షెల్ఫ్‌లో, దాని స్వంత పేజీలో కనిపిస్తుంది. ఉత్పత్తి తప్పైతే లేదా అయిపోతే, ఇక్కడ దాని వరుసను, public/files లో ఫైల్‌ను తొలగించండి, అది షెల్ఫ్ నుండి తొలగిపోతుంది — అమ్ముడైనవాటికి ఏమీ జరగదు.',
                )}
              </span>
            </li>
          </ol>

          <h3 className="mt-8 text-base">{t('Linking a product file you already have online', 'ఆన్‌లైన్‌లో ఇప్పటికే ఉన్న ఉత్పత్తి ఫైల్‌ను లింక్ చేయడం')}</h3>
          <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
            {t(
              'A PDF does not have to live in this repository. If it is already in Google Drive, Dropbox or your own storage, the product page can point at it and the visitor opens the file from there. That is the fastest way to put a product on the shelf today.',
              'PDF ఈ రిపాజిటరీలో ఉండాలని లేదు. ఇప్పటికే Google Drive, Dropbox లేదా మీ సొంత నిల్వలో ఉంటే, ఉత్పత్తి పేజీ అక్కడికే చూపించగలదు, సందర్శకుడు అక్కడి నుండి ఫైల్ తెరుస్తారు. ఈ రోజే ఉత్పత్తిని షెల్ఫ్‌లో పెట్టడానికి ఇదే వేగమైన మార్గం.',
            )}
          </p>
          <ol className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">1</span>
              <span className="flex-1">
                {t(
                  'Open the PDF in Google Drive, press Share, and choose Anyone with the link can view. A link that asks the visitor to sign in will not open for them, and the button on the product page would lead nowhere.',
                  'Google Drive లో PDF తెరిచి Share నొక్కి, Anyone with the link can view ఎంచుకోండి. సందర్శకుడిని సైన్-ఇన్ అడిగే లింక్ వారికి తెరుచుకోదు, ఉత్పత్తి పేజీ బటన్ ఎక్కడికీ చేరదు.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">2</span>
              <span className="flex-1">
                {t(
                  'Copy that share link. It starts with https:// and is long; that is normal, and the whole thing has to be copied.',
                  'ఆ షేర్ లింక్ కాపీ చేయండి. అది https:// తో మొదలై పొడవుగా ఉంటుంది; అది సాధారణం, మొత్తం కాపీ కావాలి.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">3</span>
              <span className="flex-1">
                {t(
                  'Open src/data/products.ts on GitHub with the pencil, find that product’s block, and add one line above the cover: url: \'paste the link here\'. A product with no url line keeps saying the file is not ready, which is true.',
                  'గిట్‌హబ్‌లో పెన్సిల్‌తో src/data/products.ts తెరిచి, ఆ ఉత్పత్తి బ్లాక్ చూసి, cover పైన ఒక వరుస జోడించండి: url: \'లింక్ ఇక్కడ అతికించండి\'. url వరుస లేని ఉత్పత్తి ఫైల్ సిద్ధం కాలేదని చెబుతూనే ఉంటుంది, అది నిజమే.',
                )}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-label text-[0.6875rem] font-semibold text-primary-foreground tabular-nums">4</span>
              <span className="flex-1">
                {t(
                  'Commit to main. That product’s page now offers Open the file beside Order by email, and the drive file is served by Google, so nothing large is added to this site.',
                  'main బ్రాంచ్‌కు కమిట్ చేయండి. ఆ ఉత్పత్తి పేజీలో ఇప్పుడు Order by email పక్కన “ఫైల్ తెరవండి” కనిపిస్తుంది, డ్రైవ్ ఫైల్‌ను గూగుల్ అందిస్తుంది, కాబట్టి ఈ సైట్‌కు పెద్ద ఫైల్ చేరదు.',
                )}
              </span>
            </li>
          </ol>

          <p className="mt-4 text-sm text-muted-foreground">
            {t(
              'Uploading from this page would need a server holding a GitHub token, so the buttons above open GitHub instead. Never paste a token into this site: anyone can read a page’s code.',
              'ఈ పేజీ నుండి అప్‌లోడ్ చేయాలంటే గిట్‌హబ్ టోకెన్ ఉంచే సర్వర్ కావాలి, అందుకే పై బటన్లు గిట్‌హబ్‌ను తెరుస్తాయి. ఈ సైట్‌లో టోకెన్ ఎప్పుడూ అతికించవద్దు: పేజీ కోడ్‌ను ఎవరైనా చదవగలరు.',
            )}
          </p>
        </div>

        </div>

        <div className="mt-10">
          <h2 className="text-lg">{t('Request a change', 'మార్పు కోరండి')}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t(
              'This form does not send anything by itself. It checks what you wrote and then opens your email app with the message ready to send to the church office.',
              'ఈ ఫారం తనంతట తాను ఏదీ పంపదు. మీరు రాసినదాన్ని తనిఖీ చేసి, తర్వాత చర్చి కార్యాలయానికి పంపడానికి సిద్ధమైన సందేశంతో మీ ఇమెయిల్ యాప్‌ను తెరుస్తుంది.',
            )}
          </p>

          {sent ? (
            <div className="mt-4 rounded-md border border-border bg-background p-5">
              <p className="flex items-center gap-2 font-medium">
                <Check className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
                {t('Nothing has been sent yet', 'ఇంకా ఏదీ పంపబడలేదు')}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t('One step left: open your email app and press send.', 'ఒక అడుగు మిగిలింది: మీ ఇమెయిల్ యాప్ తెరిచి పంపండి.')}
              </p>
              <a
                href={mailto}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {t('Open the message', 'సందేశం తెరవండి')}
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-4 space-y-4">
              <div>
                <label htmlFor={`${id}-name`} className="block text-sm font-medium">
                  {t('Your name', 'మీ పేరు')}
                </label>
                <input
                  id={`${id}-name`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className="mt-1 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className="block text-sm font-medium">
                  {t('Your email', 'మీ ఇమెయిల్')}
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="mt-1 min-h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor={`${id}-what`} className="block text-sm font-medium">
                  {t('What should change', 'ఏమి మారాలి')}
                </label>
                <textarea
                  id={`${id}-what`}
                  value={what}
                  onChange={(e) => setWhat(e.target.value)}
                  required
                  rows={4}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t('Check and continue', 'తనిఖీ చేసి కొనసాగండి')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
