import type { Bilingual } from './articles'

export type Product = {
  slug: string
  /** The title exactly as the owner wrote it against its Payhip listing,
      including the "(PDF)" that ends each one. A title given in only one
      language carries that same string in both fields: nothing here translates
      a Telugu title into English or the other way round. */
  title?: Bilingual
  format?: Bilingual
  blurb?: Bilingual
  contents?: Bilingual[]
  /** Rupees, as Payhip shows them. Left out while the price is unknown, and the
      card says the price is on Payhip rather than guessing at one. */
  priceInr?: number
  cover: 'study' | 'songs' | 'telugu' | 'catechism'
  /** A cover picture kept in public/images rather than src/covers. Left out,
      the drawn cover is shown. A file in src/covers named after the slug wins
      over this line, so the owner's uploads are always the ones that show. */
  image?: string
  /** The PDF in public/files, named after the slug. Only for titles the church
      delivers itself; every title here is sold on Payhip. */
  file?: string
  /** The Payhip product page: the payment is taken there and the download is
      delivered there. */
  url: string
}

/** The shop every title is sold through. One address, written here once. */
export const shopUrl = 'https://payhip.com/BAPATLAEKKLESIA'

/* The twelve listings in the community's Payhip shop, in the order the owner
   set them down: title verbatim, then price. Telugu titles stay in Telugu —
   the same string in both language fields, with no English rendering invented
   beside them. Six are ₹100, four ₹1,000, two ₹200. */
export const products: Product[] = [
  {
    /* The English edition. The Telugu edition of the same study is the
       listing at payhip-t9ox3, and its title stays Telugu there. */
    slug: 'why-jesus-cannot-be-god',
    title: {
      en: 'Why Jesus Cannot be GOD(PDF)',
      te: 'Why Jesus Cannot be GOD(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'A scriptural examination of the words of Jesus, the teaching of the apostles and the Old Testament prophecies, and of the passages usually read as proof that Jesus is God.',
      te: 'యేసు మాటలు, అపొస్తలుల బోధ మరియు పాత నిబంధన ప్రవచనాలను, యేసు దేవుడని నిరూపించడానికి సాధారణంగా చదివే భాగాలను లేఖనాల ఆధారంగా పరిశీలించే పుస్తకం.',
    },
    contents: [
      { en: 'What Jesus said about himself', te: 'తన గురించి యేసు చెప్పిన మాటలు' },
      { en: 'What the apostles taught', te: 'అపొస్తలులు బోధించినది' },
      { en: 'The verses used for the deity of Christ', te: 'క్రీస్తు దైవత్వానికి వాడే వాక్యాలు' },
    ],
    cover: 'telugu',
    /* The office's own front cover, in public/images. Any shape is accepted:
       the frame holds the whole picture rather than cropping it. A file in
       src/covers named after the slug replaces it, as it does for the rest of
       the shelf. */
    image: '/images/why-jesus-cannot-be-god-cover.webp',
    priceInr: 1000,
    url: 'https://payhip.com/b/vqSWJ',
  },
  {
    slug: 'payhip-uwasp',
    title: {
      en: 'ఆదివారం ఆరాధన యొక్క గుట్టు రట్టు(PDF)',
      te: 'ఆదివారం ఆరాధన యొక్క గుట్టు రట్టు(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'Is the day you worship on every week actually a command of the Bible? This book follows the question from Genesis through the Ten Commandments to the practice of the early believers.',
      te: 'మీరు ప్రతి వారం ఆరాధిస్తున్న రోజు నిజంగా బైబిలు ఆజ్ఞేనా? ఆదికాండము నుండి పది ఆజ్ఞల దాకా, ఆరంభకాల విశ్వాసుల ఆచారం దాకా ఈ ప్రశ్నను అనుసరించే పుస్తకం.',
    },
    cover: 'telugu',
    priceInr: 100,
    url: 'https://payhip.com/b/UwasP',
  },
  {
    slug: 'payhip-jr6xl',
    title: {
      en: 'The Mystery of Sunday Worship Unveiled(PDF)',
      te: 'The Mystery of Sunday Worship Unveiled(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'How the first day of the week came to be kept as the day of worship, traced through Scripture, through the history of the church and through the passages quoted on both sides of the question.',
      te: 'వారంలోని మొదటి దినము ఆరాధన దినముగా ఎలా మారిందో లేఖనాల ద్వారా, చర్చి చరిత్ర ద్వారా, ఈ ప్రశ్నకు రెండు వైపులా ఉటంకించే వాక్యాల ద్వారా వివరించే ఆంగ్ల అధ్యయనం.',
    },
    cover: 'catechism',
    priceInr: 1000,
    url: 'https://payhip.com/b/Jr6Xl',
  },
  {
    slug: 'payhip-dhkas',
    title: {
      en: 'దేవుని చేత ఆశీర్వదించబడిన పరిశుద్ధపరచబడిన ఒకే ఒక్క దినము: విశ్రాంతి దినము(PDF)',
      te: 'దేవుని చేత ఆశీర్వదించబడిన పరిశుద్ధపరచబడిన ఒకే ఒక్క దినము: విశ్రాంతి దినము(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'In Genesis, after finishing the work of creation, God blessed the seventh day and set it apart; in the Ten Commandments he commanded it. What that means for a believer now.',
      te: 'సృష్టి కార్యం పూర్తి చేసిన తర్వాత దేవుడు ఏడవ దినమును ఆశీర్వదించి పరిశుద్ధపరచాడు; పది ఆజ్ఞలలో దానిని ఆజ్ఞాపించాడు. ఇప్పుడు విశ్వాసికి దాని అర్థం ఏమిటి.',
    },
    cover: 'telugu',
    priceInr: 100,
    url: 'https://payhip.com/b/DHkas',
  },
  {
    slug: 'payhip-avdog',
    title: {
      en: 'The Only Day Blessed and Sanctified by God: The Sabbath(PDF)',
      te: 'The Only Day Blessed and Sanctified by God: The Sabbath(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'The study on the seventh day: the blessing at creation, the fourth commandment, and the Sabbath as the day God himself set apart.',
      te: 'ఏడవ దినముపై ఉన్న అధ్యయనం: సృష్టిలోని ఆశీర్వాదం, నాల్గవ ఆజ్ఞ, దేవుడే పరిశుద్ధపరచిన విశ్రాంతి దినము.',
    },
    cover: 'study',
    priceInr: 100,
    url: 'https://payhip.com/b/avDoG',
  },
  {
    slug: 'payhip-bmmbf',
    title: {
      en: 'యేసుక్రీస్తు మరియు అపోస్తలులు దేవుని వాక్యము అని దేనిని పిలిచారు?(PDF)',
      te: 'యేసుక్రీస్తు మరియు అపోస్తలులు దేవుని వాక్యము అని దేనిని పిలిచారు?(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'Jesus and the apostles used the phrase “the word of God” for something particular. This study gathers every place they used it, in order, and asks what they were pointing to.',
      te: 'యేసు, అపొస్తలులు “దేవుని వాక్యము” అని ఒక నిర్దిష్ట విషయాన్ని పిలిచారు. వారు ఆ మాటను వాడిన ప్రతి చోటును క్రమంగా సేకరించి, వారు ఏదానిని సూచించారో పరిశీలించే అధ్యయనం.',
    },
    cover: 'songs',
    priceInr: 100,
    url: 'https://payhip.com/b/BMmbF',
  },
  {
    slug: 'payhip-qyr0v',
    title: {
      en: 'The Word of God according to Jesus and Apostles(PDF)',
      te: 'The Word of God according to Jesus and Apostles(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'What Jesus and the apostles meant by “the word of God”, gathered passage by passage and read in the order they said it.',
      te: '“దేవుని వాక్యము” అంటే యేసు, అపొస్తలులు ఏమి అర్థం చేసుకున్నారో, వారు చెప్పిన క్రమంలో వాక్యం వాక్యంగా చదివే ఆంగ్ల అధ్యయనం.',
    },
    cover: 'catechism',
    priceInr: 1000,
    url: 'https://payhip.com/b/qYr0v',
  },
  {
    slug: 'payhip-zifpf',
    title: { en: 'సంపూర్ణ అధికారం(PDF)', te: 'సంపూర్ణ అధికారం(PDF)' },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'Where authority comes from, who was given it, and what it is for — a study of what Scripture says about the authority of God, of his Son and of those he sends.',
      te: 'అధికారం ఎక్కడి నుండి వస్తుంది, ఎవరికి ఇవ్వబడింది, దాని ఉపయోగం ఏమిటి — దేవుని అధికారం, ఆయన కుమారుని అధికారం, ఆయన పంపిన వారి అధికారం గురించి లేఖనం చెప్పే అధ్యయనం.',
    },
    cover: 'telugu',
    priceInr: 100,
    url: 'https://payhip.com/b/zIfpF',
  },
  {
    slug: 'payhip-gdeed',
    title: { en: 'ABSOLUTE AUTHORITY(PDF)', te: 'ABSOLUTE AUTHORITY(PDF)' },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'A study of authority: the verses Jesus used, the claim the apostles made, and what a reader is asked to do with it.',
      te: 'అధికారంపై ఉన్న అధ్యయనం: యేసు వాడిన వాక్యాలు, అపొస్తలుల ప్రకటన, దానితో పాఠకుడు ఏమి చేయాలి.',
    },
    cover: 'study',
    priceInr: 1000,
    url: 'https://payhip.com/b/gdeED',
  },
  {
    slug: 'payhip-t9ox3',
    title: {
      en: 'ఎందుకు యేసు దేవుడు కాదు మరియు కానేరడు(PDF)',
      te: 'ఎందుకు యేసు దేవుడు కాదు మరియు కానేరడు(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'The same study in a second listing: the words of Jesus, the teaching of the apostles and the Old Testament prophecies, set against the passages usually read as proof that Jesus is God.',
      te: 'ఇదే అధ్యయనం మరొక జాబితాలో: యేసు మాటలు, అపొస్తలుల బోధ, పాత నిబంధన ప్రవచనాలు — యేసు దేవుడని నిరూపించడానికి సాధారణంగా చదివే భాగాలతో పాటు.',
    },
    cover: 'telugu',
    priceInr: 100,
    url: 'https://payhip.com/b/t9Ox3',
  },
  {
    slug: 'payhip-0o8ny',
    title: { en: 'Eden: Our Last Home(PDF)', te: 'Eden: Our Last Home(PDF)' },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'The garden lost in Genesis and the city that comes down in Revelation, read as one story — what was given, what was taken away, and what is promised again.',
      te: 'ఆదికాండములో పోగొట్టుకున్న తోట, ప్రకటన గ్రంథములో దిగివచ్చే పట్టణం — ఒకే కథగా చదివి, ఏమి ఇవ్వబడిందో, ఏమి పోయిందో, తిరిగి ఏమి వాగ్దానం చేయబడిందో వివరించే పుస్తకం.',
    },
    cover: 'catechism',
    priceInr: 200,
    url: 'https://payhip.com/b/0O8Ny',
  },
  {
    slug: 'payhip-mtoal',
    title: {
      en: 'ఏదెను తోట: నరులు పోగొట్టుకున్న నివాసము(PDF)',
      te: 'ఏదెను తోట: నరులు పోగొట్టుకున్న నివాసము(PDF)',
    },
    format: { en: 'PDF book', te: 'PDF పుస్తకం' },
    blurb: {
      en: 'The study on Eden in Telugu: the place prepared before man was made, the day he lost it, and why the rest of the Bible keeps returning to a garden.',
      te: 'ఏదెనుపై ఉన్న అధ్యయనం తెలుగులో: మనిషిని సృష్టించక ముందే సిద్ధపరచబడిన స్థలం, అతను దానిని పోగొట్టుకున్న దినం, తర్వాత బైబిలు మొత్తం తోట వైపే ఎందుకు తిరుగుతుంది.',
    },
    cover: 'songs',
    priceInr: 200,
    url: 'https://payhip.com/b/mToAL',
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

/** What a card calls a title that has no name yet: its own shop address, so
    each entry stays distinguishable and nothing is made up. */
export function productTitle(p: Product, t: (en: string, te: string) => string) {
  return p.title ? t(p.title.en, p.title.te) : p.url.replace('https://', '')
}

/** Most of the shelf is Telugu, and a Telugu title is shown in Telugu whatever
    language the visitor has chosen — so the component drawing it asks here
    which face to set it in rather than trusting the switch. */
export function isTelugu(text: string) {
  return /[\u0C00-\u0C7F]/.test(text)
}
