import type { Bilingual } from './articles'

/** The community's contact details — one place, used by the footer and contact page. */
export const contact = {
  email: 'vijay.panta@gmail.com',
  phone: '+91 8643 224 019',
  phoneHref: '+918643224019',
  address: {
    en: ['Bapatla Ekklesia', '13-2-7 Church Street', 'Bapatla 522101', 'Andhra Pradesh, India'],
    te: ['బాపట్ల ఎక్లేసియా', '13-2-7 చర్చి వీధి', 'బాపట్ల 522101', 'ఆంధ్రప్రదేశ్, భారతదేశం'],
  } as Bilingual & { en: string[]; te: string[] },
  mapQuery: 'Church Street, Bapatla 522101, Andhra Pradesh, India',
  mapLink: 'https://www.openstreetmap.org/search?query=Bapatla%20Church%20Street%20Andhra%20Pradesh',
}

/* The repository this site is stored in. Every picture, store file and the
   text of every page lives here, and the owner edits it on GitHub itself.
   Change these two values if the repository ever moves. */
export const repo = {
  owner: 'vipanta',
  name: 'bapatla_ekklesia',
  branch: 'main',
} as const

export const repoUrl = `https://github.com/${repo.owner}/${repo.name}`

export type Social = {
  id: string
  label: string
  href: string
  /* What the account is actually for, so a row says more than a bare name. */
  note: Bilingual
}

export const socials: Social[] = [
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@bapatlaekklesia',
    note: { en: 'Thursday and Sunday recordings', te: 'గురువారం మరియు ఆదివారం రికార్డింగులు' },
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/918643224019',
    note: { en: 'The prayer list', te: 'ప్రార్థన జాబితా' },
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/bapatlaekklesia',
    note: { en: 'The youth group', te: 'యువజన బృందం' },
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/bapatlaekklesia',
    note: { en: 'Pictures of the building and the gatherings', te: 'భవనం మరియు సమావేశాల చిత్రాలు' },
  },
]

export const serviceTimes = [
  { day: { en: 'Sunday', te: 'ఆదివారం' }, time: '9:30 am', name: { en: 'Worship and teaching', te: 'ఆరాధన మరియు బోధ' } },
  { day: { en: 'Tuesday', te: 'మంగళవారం' }, time: '6:30 pm', name: { en: 'Prayer', te: 'ప్రార్థన' } },
  { day: { en: 'Thursday', te: 'గురువారం' }, time: '6:30 pm', name: { en: 'Bible study', te: 'బైబిలు అధ్యయనం' } },
]
