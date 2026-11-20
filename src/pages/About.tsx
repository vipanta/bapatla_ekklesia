import { BookOpen, Droplets, Flame, Users } from 'lucide-react'
import { useT } from '@/lib/language'

const doctrine = [
  {
    key: 'scripture',
    icon: BookOpen,
    title: { en: 'Scripture', te: 'లేఖనం' },
    body: {
      en: 'The Bible is God speaking, and it is the authority we read everything else against. We teach it plainly, in the languages people actually pray in, and we would rather read a passage slowly than quote it quickly.',
      te: 'బైబిలు దేవుడు మాట్లాడుతున్నది, మిగిలిన ప్రతిదాన్ని దానితో పోల్చి చదువుతాము. దాన్ని సులభంగా, ప్రజలు నిజంగా ప్రార్థన చేసే భాషల్లో బోధిస్తాము, వేగంగా ఉటంకించడం కంటే ఒక భాగాన్ని నెమ్మదిగా చదవడం ఇష్టం.',
    },
  },
  {
    key: 'god',
    icon: Flame,
    title: { en: 'One God, Father, Son and Spirit', te: 'ఒక్క దేవుడు, తండ్రి, కుమారుడు మరియు పరిశుద్ధాత్మ' },
    body: {
      en: 'We confess the God of the creeds: Father, Son and Holy Spirit, three persons, one God. Jesus Christ is fully God and fully human, crucified and raised, and he is the only way a person comes to the Father.',
      te: 'మేము విశ్వాస ప్రకటనల దేవుడిని అంగీకరిస్తాము: తండ్రి, కుమారుడు మరియు పరిశుద్ధాత్మ, మూడు వ్యక్తులు, ఒక్క దేవుడు. యేసుక్రీస్తు పూర్తిగా దేవుడు, పూర్తిగా మనుష్యుడు, సిలువ వేయబడి లేచాడు, తండ్రి దగ్గరకు వెళ్లే ఏకైక మార్గం ఆయనే.',
    },
  },
  {
    key: 'grace',
    icon: Droplets,
    title: { en: 'Grace, received and not earned', te: 'కృప, పొందబడేది కాదు సంపాదించబడేది కాదు' },
    body: {
      en: 'Salvation is God’s gift, received by faith, and nothing we do earns it. Baptism and the Lord’s Supper are the signs he gave his people — baptism once, at the start of the life of faith; the Supper whenever we meet around the table.',
      te: 'రక్షణ దేవుని బహుమతి, విశ్వాసం ద్వారా పొందబడుతుంది, మనం చేసే ఏదీ దాన్ని సంపాదించదు. బాప్తిస్మం మరియు ప్రభువు భోజనం ఆయన ప్రజలకు ఇచ్చిన సూచనలు — బాప్తిస్మం ఒకసారి, విశ్వాస జీవితం ఆరంభంలో; భోజనం మనం బల్ల చుట్టూ కలిసిన ప్రతిసారీ.',
    },
  },
  {
    key: 'people',
    icon: Users,
    title: { en: 'A people, not an audience', te: 'ప్రజలు, ప్రేక్షకులు కాదు' },
    body: {
      en: 'The church is the body of Christ, and every part of it has work. We ordain elders and deacons, we sing together, we eat together, we share what we have, and we look after the households among us before we look after our own programmes.',
      te: 'సంఘం క్రీస్తు శరీరం, దానిలో ప్రతి భాగానికి పని ఉంది. పెద్దలను మరియు సేవకులను నియమిస్తాము, కలిసి పాడతాము, కలిసి భోజనం చేస్తాము, మా దగ్గర ఉన్నది పంచుకుంటాము, మా కార్యక్రమాల కంటే ముందు మధ్యలో ఉన్న కుటుంబాలను చూసుకుంటాము.',
    },
  },
]

export default function About() {
  const t = useT()

  return (
    <div>
      <section className="mx-auto max-w-content px-gutter py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h1 className="text-[clamp(2rem,1.5rem+2.8vw,3.3rem)]">
              {t('A community in Bapatla since 1998', '1998 నుండి బాపట్లలో ఒక సమాజం')}
            </h1>
            <p className="mt-4 max-w-[58ch] text-[1.0625rem] text-muted-foreground">
              {t(
                'Forty-one families bought the building on Church Street in 1998, after eleven years in a rented hall above a rice mill. We are still here, and we still read the register of those contributions aloud at the anniversary.',
                '1998లో నలభై ఒక్క కుటుంబాలు చర్చి వీధిలో భవనాన్ని కొన్నాయి, బియ్యం మిల్లు పైన అద్దె హాలులో పదకొండు సంవత్సరాల తర్వాత. మేము ఇప్పటికీ ఇక్కడే ఉన్నాము, వార్షికోత్సవంలో ఆ సహకారాల రిజిస్టర్‌ను ఇప్పటికీ బిగ్గరగా చదువుతాము.',
              )}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 border-l-2 border-saffron pl-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{t('Families in 1998', '1998లో కుటుంబాలు')}</dt>
              <dd className="font-display text-3xl tabular-nums">41</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{t('Years in this room', 'ఈ గదిలో సంవత్సరాలు')}</dt>
              <dd className="font-display text-3xl tabular-nums">28</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{t('Gatherings a week', 'వారానికి సమావేశాలు')}</dt>
              <dd className="font-display text-3xl tabular-nums">3</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{t('Languages', 'భాషలు')}</dt>
              <dd className="font-telugu text-3xl">తెలుగు · EN</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-ink-deep text-ink-deep-foreground">
        <div className="mx-auto max-w-content px-gutter py-section">
          <h2 className="text-[clamp(1.7rem,1.3rem+1.8vw,2.5rem)]">{t('What we believe', 'మేము నమ్మేది')}</h2>
          <p className="mt-2 max-w-[56ch] text-sm text-ink-deep-muted">
            {t(
              'Four short statements, in the order we would say them to someone visiting for the first time.',
              'నాలుగు చిన్న ప్రకటనలు, మొదటిసారి వచ్చేవారికి మేము చెప్పే క్రమంలో.',
            )}
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2">
            {doctrine.map((d) => {
              const Icon = d.icon
              return (
                <article key={d.key} className="border-t border-ink-deep-muted/30 pt-4">
                  <Icon className="size-6 text-saffron" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-3 text-xl text-ink-deep-foreground">{t(d.title.en, d.title.te)}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-deep-muted">{t(d.body.en, d.body.te)}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-gutter py-section">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <h2 className="text-[clamp(1.5rem,1.2rem+1.4vw,2.1rem)]">{t('How the week is kept', 'వారం ఎలా జరుగుతుంది')}</h2>
          <div className="max-w-[62ch] space-y-3 text-muted-foreground">
            <p>
              {t(
                'Sunday morning is the whole community together: singing, a long reading, and a teaching that works through a book rather than a topic. Thursday is smaller and slower, working through three chapters a paragraph at a time. Tuesday is prayer, and is the meeting people come to when they do not know what else to do.',
                'ఆదివారం ఉదయం మొత్తం సమాజం కలిసి: ఆలాపన, పొడవైన పఠనం, మరియు ఒక అంశం కాకుండా ఒక గ్రంథాన్ని తీసుకునే బోధ. గురువారం చిన్నది, నెమ్మదైనది, మూడు అధ్యాయాలను పేరాగ్రాఫ్ పేరాగ్రాఫ్‌గా. మంగళవారం ప్రార్థన, ఏమి చేయాలో తెలియని వారు వచ్చే సమావేశం.',
              )}
            </p>
            <p>
              {t(
                'There is no membership roll with a fee. If you have been coming and want to be counted as part of this, speak to one of the elders — that is the whole of the process.',
                'రుసుముతో సభ్యత్వ జాబితా లేదు. మీరు వస్తూ ఉండి దీనిలో భాగంగా లెక్కించబడాలనుకుంటే పెద్దలలో ఒకరితో మాట్లాడండి — ప్రక్రియ అంతే.',
              )}
            </p>
            <p>
              {t(
                'The online subscription, the member downloads and the store on this site are not open yet. When they are, they will serve the room, not replace it.',
                'ఈ సైట్‌లో ఆన్‌లైన్ సభ్యత్వం, సభ్యుల డౌన్‌లోడ్లు మరియు స్టోర్ ఇంకా తెరవలేదు. తెరిచినప్పుడు అవి గదికి సేవ చేస్తాయి, దాన్ని భర్తీ చేయవు.',
              )}
            </p>
          </div>
        </div>
      </section>
  </div>
)
}
