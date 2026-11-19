import type { Bilingual } from './articles'

export type GalleryImage = {
  id: string
  file: string
  w: number
  h: number
  caption: Bilingual
  /** A tall picture — a book cover — sits inside its tile instead of being
      cropped by it. Everything else fills the frame. */
  fit?: 'cover' | 'contain'
}

/* The five pictures the library holds: the cover of the community's book, the
   service photograph of the room as it is, and three drawings in the site's
   own colours, so their captions describe what the drawing shows. */
export const gallery: GalleryImage[] = [
  {
    id: 'eden-our-lost-home',
    file: '/images/eden-our-lost-home.webp',
    w: 864,
    h: 1232,
    fit: 'contain',
    caption: {
      en: 'The cover of Eden: Our Lost Home by Vijaya Kumar Panta',
      te: 'విజయ కుమార్ పంతా రాసిన “ఈడెన్: మన కోల్పోయిన ఇల్లు” ముఖచిత్రం',
    },
  },
  {
    id: 'Sabbath-service',
    file: '/images/church-service-11.webp',
    w: 1200,
    h: 800,
    caption: { en: 'Sabbath service', te: 'ఆదివారం ఆరాధన' },
  },
  {
    id: 'room-in-the-morning',
    file: '/images/gallery-room-in-the-morning.webp',
    w: 1200,
    h: 900,
    caption: { en: 'The room at the start of a Sunday, chairs out, windows open', te: 'ఆదివారం మొదట్లో గది, కుర్చీలు వేసి, కిటికీలు తెరిచి' },
  },
  {
    id: 'the-lamp',
    file: '/images/gallery-the-lamp.webp',
    w: 900,
    h: 1200,
    caption: { en: 'The brass lamp at the front of the room, kept alight through the year', te: 'గది ముందు భాగంలో కంచు దీపం, సంవత్సరమంతా వెలుగుతూ' },
  },
  {
    id: 'church-street',
    file: '/images/gallery-church-street.webp',
    w: 1200,
    h: 900,
    caption: { en: 'The building on Church Street, which forty-one families bought in 1998', te: 'చర్చి వీధిలో భవనం, 1998లో నలభై ఒక్క కుటుంబాలు కొన్నది' },
  },
]
