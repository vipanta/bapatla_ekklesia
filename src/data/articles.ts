export type Bilingual = { en: string; te: string }

export type Block =
  | { kind: 'p'; en: string; te: string }
  | { kind: 'h'; en: string; te: string }
  | { kind: 'quote'; en: string; te: string; ref: Bilingual }

export type Article = {
  slug: string
  date: string
  title: Bilingual
  summary: Bilingual
  readMinutes: number
  body: Block[]
}

export const articles: Article[] = [
  
  {
    slug: 'వ్రాయబడియున్నది',
    date: '2026-20-11',
    title: { en: 'It was written', te: 'వ్రాయబడియున్నది' },
    summary: {
      en: 'It was written means that it was commanded in the law of God. It's a commandment of God',
      te: 'ఇది దేవుని ధర్మశాస్త్రంలో ఆజ్ఞాపించబడిందని దీని అర్థం. ఇది దేవుని ఆజ్ఞ',
    },
}
  
  {
    slug: 'the-lamp-kept-burning',
    date: '2026-02-08',
    title: { en: 'The lamp that was kept burning', te: 'ఆరని దీపం' },
    summary: {
      en: 'Exodus 27 asks for oil brought by the people, not by the priests alone. A short look at what that says about the ordinary week.',
      te: 'నిర్గమకాండము 27లో నూనెను ప్రజలే తెచ్చాలని చెప్పబడింది, యాజకులు మాత్రమే కాదు. సాధారణ వారం గురించి అది ఏమి చెబుతుంది.',
    },
    readMinutes: 4,
    body: [
      {
        kind: 'p',
        en: 'The instruction in the wilderness is surprisingly plain: the people of Israel were to bring clear oil of beaten olives so that the lamp might burn continually. It was not bought from a treasury and it was not pressed by one appointed family. It came from households, a little at a time, brought to the door of the tent.',
        te: 'అరణ్యంలో ఇచ్చిన ఆజ్ఞ చాలా సులభంగా ఉంది: దీపం ఎల్లప్పుడూ వెలుగుతూ ఉండేందుకు ఇశ్రాయేలీయులు దంచిన ఒలీవ పచ్చని నూనెను తీసుకురావాలి. అది నిధి నుండి కొన్నది కాదు, ఒకే కుటుంబం దంచినదీ కాదు. అది ఇళ్ల నుండి, కొంచెం కొంచెంగా, గుడారపు ద్వారం వద్దకు వచ్చింది.',
      },
      {
        kind: 'p',
        en: 'We talk about ministry as though it happens in a building on a Sunday morning. The picture here is quieter and more demanding than that. Oil is what you have at the end of a day when the work was real. Bringing it means noticing a neighbour, keeping a promise, opening a house, feeding someone who did not expect it.',
        te: 'పరిచర్య ఆదివారం ఉదయం ఒక భవనంలో జరుగుతుందని మనం మాట్లాడుతాము. ఇక్కడ చిత్రం దానికంటే నిశ్శబ్దంగా, ఎక్కువ కోరుతుంది. పని నిజంగా జరిగిన రోజు చివరిలో మీ దగ్గర ఉండేది నూనె. దాన్ని తీసుకురావడం అంటే పొరుగువారిని గమనించడం, మాట నిలబెట్టుకోవడం, ఇల్లు తెరవడం, ఊహించని వారికి భోజనం పెట్టడం.',
      },
      {
        kind: 'quote',
        en: 'Command the people of Israel that they bring you pure oil from beaten olives for the lamp, that a light may be kept burning regularly.',
        te: 'ఇశ్రాయేలీయులు దంచిన ఒలీవల నుండి స్వచ్ఛమైన నూనెను దీపం కొరకు నీకు తీసుకురావలెనని వారికి ఆజ్ఞాపించుము, దీపం ఎల్లప్పుడూ వెలుగుతూ ఉండును.',
        ref: { en: 'Exodus 27:20', te: 'నిర్గమకాండము 27:20' },
      },
      {
        kind: 'p',
        en: 'Notice what the passage does not ask for. It does not ask for a spectacular flame. It asks for a light that does not go out — which is a matter of supply, of people remembering to bring what they have, week after week, when nothing about it feels remarkable.',
        te: 'ఈ వాక్యం ఏమి కోరలేదో గమనించండి. అద్భుతమైన జ్వాలను కోరలేదు. ఆరిపోని వెలుగును కోరింది — అది సరఫరా విషయం, ఏమీ విశేషంగా అనిపించని వారాల తర్వాత వారాల తర్వాత తమ దగ్గర ఉన్నది తీసుకురావడం గుర్తుంచుకోవడం.',
      },
      {
        kind: 'p',
        en: 'At Bapatla Ekklesia the shape of the week is small on purpose. Tuesday prayer, Thursday study, Sunday morning. None of it is designed to impress a visitor. All of it is designed so that the light is still burning when someone finally comes in looking for it.',
        te: 'బాపట్ల ఎక్లేసియాలో వారం ఆకారం ఉద్దేశపూర్వకంగా చిన్నది. మంగళవారం ప్రార్థన, గురువారం అధ్యయనం, ఆదివారం ఉదయం. ఇది సందర్శకులను ఆకర్షించడానికి కాదు. ఎవరైనా వెలుగు కోసం వచ్చినప్పుడు అది ఇంకా వెలుగుతూ ఉండేలా.',
      },
    ],
  },
  {
    slug: 'what-we-mean-by-ekklesia',
    date: '2026-01-25',
    title: { en: 'What we mean by ekklesia', te: 'ఎక్లేసియా అంటే మనం ఏమి అర్థం చేసుకుంటాము' },
    summary: {
      en: 'The word in the New Testament is not a building and not a service. It is an assembly called out, and the name was chosen on purpose.',
      te: 'కొత్త నిబంధనలో ఆ పదం భవనం కాదు, కార్యక్రమం కాదు. అది పిలువబడిన సమాజం — ఆ పేరు ఉద్దేశపూర్వకంగా ఎంపిక చేయబడింది.',
    },
    readMinutes: 3,
    body: [
      {
        kind: 'p',
        en: 'When the New Testament writers wanted a word for the people gathered by the gospel, they used ekklesia — the ordinary word for an assembly called together for a purpose. It had been used in Greek cities for centuries before a single church existed.',
        te: 'సువార్త ద్వారా సమకూరిన ప్రజలను సూచించడానికి కొత్త నిబంధన రచయితలు ఎక్లేసియా అనే పదాన్ని ఉపయోగించారు — ఒక లక్ష్యం కోసం పిలువబడిన సభకు వాడే సాధారణ పదం. ఒక్క సంఘం ఏర్పడకముందే శతాబ్దాలుగా గ్రీకు నగరాల్లో ఇది వాడుకలో ఉంది.',
      },
      {
        kind: 'p',
        en: 'So the name of this community is a small statement. We are not a hall in Bapatla that people attend. We are people in Bapatla who have been called out of the ordinary into something together, and who meet in a hall because that is where the floor is level and the fans work.',
        te: 'కాబట్టి ఈ సమాజం పేరు ఒక చిన్న ప్రకటన. మేము బాపట్లలో ప్రజలు వచ్చి కూర్చునే ఒక హాలు కాదు. మేము బాపట్లలో సాధారణం నుండి ఒకటిగా పిలువబడిన ప్రజలం, హాలులో కలుస్తాము ఎందుకంటే అక్కడ నేల సమంగా ఉంటుంది, ఫ్యాన్లు పనిచేస్తాయి.',
      },
      {
        kind: 'p',
        en: 'That distinction changes how we read the word "member" on this site. Membership is not a subscription tier. It is a way of saying: this is where I have been placed, these are the people I am accountable to, this is the work I turn up for.',
        te: 'ఆ భేదం ఈ సైట్‌లో "సభ్యత్వం" అనే పదాన్ని ఎలా చదవాలో మారుస్తుంది. సభ్యత్వం ఒక చందా స్థాయి కాదు. ఇది ఇలా చెప్పడం: నేను ఇక్కడ ఉంచబడ్డాను, వీరికి నేను జవాబు చెప్పాలి, ఇది నేను హాజరయ్యే పని.',
      },
    ],
  },
  {
    slug: 'reading-the-sermon-on-the-mount-slowly',
    date: '2026-01-11',
    title: { en: 'Reading the Sermon on the Mount slowly', te: 'పర్వత ప్రసంగాన్ని నెమ్మదిగా చదవడం' },
    summary: {
      en: 'Our Thursday study is working through Matthew 5–7 a paragraph at a time. Here is the schedule and the notes from week one.',
      te: 'మా గురువారం అధ్యయనం మత్తయి 5–7ను పేరాగ్రాఫ్ పేరాగ్రాఫ్‌గా చదువుతోంది. ఇది షెడ్యూల్ మరియు మొదటి వారపు నోట్స్.',
    },
    readMinutes: 5,
    body: [
      {
        kind: 'p',
        en: 'Three chapters. In a group of twenty, reading them aloud twice takes nine minutes. We are spending twelve weeks on them because we have found that the speed is the whole exercise — the passages we thought we knew are the ones that say something new when nobody is hurrying.',
        te: 'మూడు అధ్యాయాలు. ఇరవై మంది గుంపులో రెండుసార్లు బిగ్గరగా చదివితే తొమ్మిది నిమిషాలు పడుతుంది. మేము వాటికి పన్నెండు వారాలు కేటాయిస్తున్నాము ఎందుకంటే వేగమే మొత్తం వ్యాయామం అని కనుగొన్నాము — మనకు తెలుసనుకున్న భాగాలే ఎవరూ తొందరపడనప్పుడు కొత్తగా మాట్లాడతాయి.',
      },
      {
        kind: 'h',
        en: 'How a Thursday runs',
        te: 'గురువారం ఎలా జరుగుతుంది',
      },
      {
        kind: 'p',
        en: 'We meet at 6.30 pm. The first fifteen minutes are silent reading of the passage, in Telugu or English, whichever you brought. Then three questions, worked through in pairs before the room discusses them. We close by 8 pm. Tea after, which is the part most people stay for.',
        te: 'సాయంత్రం 6.30కి కలుస్తాము. మొదటి పదిహేను నిమిషాలు భాగాన్ని నిశ్శబ్దంగా చదవడం, తెలుగులో లేదా ఇంగ్లీషులో, మీరు తెచ్చినది. తర్వాత మూడు ప్రశ్నలు, జంటలుగా ఆలోచించి తర్వాత గది చర్చిస్తుంది. రాత్రి 8కి ముగిస్తాము. తర్వాత టీ — చాలామంది దాని కోసమే ఉంటారు.',
      },
      {
        kind: 'p',
        en: 'Notes from week one are in the download library for members. If you have not subscribed and want the notes, write to us and we will send you the first set without a subscription — the reading is the point, not the sign-up.',
        te: 'మొదటి వారపు నోట్స్ సభ్యుల కోసం డౌన్‌లోడ్ లైబ్రరీలో ఉన్నాయి. మీరు సభ్యత్వం తీసుకోకుండా నోట్స్ కావాలంటే మాకు రాయండి — మొదటి సెట్ సభ్యత్వం లేకుండా పంపిస్తాము — చదవడమే ముఖ్యం, నమోదు కాదు.',
      },
    ],
  },
  {
    slug: 'a-house-on-church-street',
    date: '2025-12-21',
    title: { en: 'A house on Church Street', te: 'చర్చి వీధిలో ఒక ఇల్లు' },
    summary: {
      en: 'The story of the room we meet in, from a rented hall to the building the community bought in 1998.',
      te: 'మేము కలుసుకునే గది కథ — అద్దె హాలు నుండి 1998లో సమాజం కొన్న భవనం వరకు.',
    },
    readMinutes: 4,
    body: [
      {
        kind: 'p',
        en: 'For eleven years the community met in a rented hall above a rice mill. The agreement was verbal and renewed each season. When the mill changed hands, the hall went with it, and the congregation spent a year in four different houses before the building on Church Street came up for sale.',
        te: 'పదకొండు సంవత్సరాలు సమాజం బియ్యం మిల్లు పైన అద్దె హాలులో కలుసుకుంది. ఒప్పందం మాటలతోనే, ప్రతి సీజన్‌లో పునరుద్ధరించబడేది. మిల్లు యాజమాన్యం మారినప్పుడు హాలు కూడా మారింది, చర్చి వీధి భవనం అమ్మకానికి వచ్చే ముందు సంఘం ఒక సంవత్సరం నాలుగు వేర్వేరు ఇళ్లలో గడిపింది.',
      },
      {
        kind: 'p',
        en: 'It was bought in 1998 by forty-one families, most of them contributing in instalments over three years. The register of those contributions is still in the church office. We read it aloud at the anniversary, which is a long and slightly awkward thing to do, and we keep doing it.',
        te: '1998లో నలభై ఒక్క కుటుంబాలు కొన్నారు, చాలామంది మూడు సంవత్సరాల వాయిదాలలో సహకారం అందించారు. ఆ సహకారాల రిజిస్టర్ ఇప్పటికీ చర్చి కార్యాలయంలో ఉంది. వార్షికోత్సవంలో దాన్ని బిగ్గరగా చదువుతాము — అది పొడవైన, కొంచెం ఇబ్బందికరమైన పని, అయినా కొనసాగిస్తాము.',
      },
      {
        kind: 'quote',
        en: 'Unless the Lord builds the house, those who build it labour in vain.',
        te: 'యెహోవా ఇల్లు కట్టించని యెడల దానిని కట్టించువారు శ్రమపడుట వ్యర్థము.',
        ref: { en: 'Psalm 127:1', te: 'కీర్తనలు 127:1' },
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
