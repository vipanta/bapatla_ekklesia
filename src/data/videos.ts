import type { Bilingual } from './articles'

export type Video = {
  id: string
  /* Always empty for now: the two id fields below are filled in by the owner
     when a recording is published, so until then the thumbnail frame is drawn
     from the series name rather than fetched from another host. */
  youtubeId: string
  title: Bilingual
  series: Bilingual
  minutes: number
  date: string
}

export const youtubeChannel = 'https://www.youtube.com/@bapatlaekklesia'

export const videos: Video[] = [
  {
    id: 'sunday-zephaniah',
    youtubeId: '',
    title: { en: 'Sunday teaching: the whole book of Zephaniah', te: 'ఆదివారం బోధ: జెఫన్యా గ్రంథమంతా' },
    series: { en: 'Sunday teaching', te: 'ఆదివారం బోధ' },
    minutes: 48,
    date: '2026-02-01',
  },
  {
    id: 'thursday-study-psalm-13',
    youtubeId: '',
    title: { en: 'Thursday study, Psalm 13 in Telugu and English', te: 'గురువారం అధ్యయనం, కీర్తన 13 తెలుగు మరియు ఇంగ్లీషులో' },
    series: { en: 'Thursday study', te: 'గురువారం అధ్యయనం' },
    minutes: 32,
    date: '2026-01-29',
  },
  {
    id: 'faithfulness-journey',
    youtubeId: '',
    title: { en: 'Faithfulness over a long journey — the community in conversation', te: 'దీర్ఘ ప్రయాణంలో నమ్మకత్వం — సమాజం మాట్లాడుకుంటోంది' },
    series: { en: 'Testimony', te: 'సాక్ష్యం' },
    minutes: 21,
    date: '2026-01-18',
  },
  {
    id: 'candlelight-advent',
    youtubeId: '',
    title: { en: 'Candlelight service, the four Advent readings', te: 'దీపపు ఆరాధన, నాలుగు ఆగమన పఠనాలు' },
    series: { en: 'Service', te: 'ఆరాధన' },
    minutes: 56,
    date: '2025-12-24',
  },
  {
    id: 'psalm-119-morning',
    youtubeId: '',
    title: { en: 'Morning prayer: Psalm 119 sung in Telugu', te: 'ఉదయ ప్రార్థన: కీర్తన 119 తెలుగులో ఆలపించబడింది' },
    series: { en: 'Prayer', te: 'ప్రార్థన' },
    minutes: 14,
    date: '2025-12-10',
  },
  {
    id: 'study-habakkuk',
    youtubeId: '',
    title: { en: 'Study: Habakkuk asks the hard question', te: 'అధ్యయనం: హబక్కూకు కఠిన ప్రశ్న అడుగుతాడు' },
    series: { en: 'Thursday study', te: 'గురువారం అధ్యయనం' },
    minutes: 39,
    date: '2025-11-27',
  },
]
