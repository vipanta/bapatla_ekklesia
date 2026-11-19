# Design brief

**Bapatla Ekklesia** — a community of believers in Bapatla, Andhra Pradesh,
meeting on Church Street. Telugu and English from the first screen. The site is
a reading room and a library: the day's article, the week's teaching, the store
of staff materials, the pictures of the place, and the way to the room.

## Palette and type

Every value lives in `src/theme.css`. One scheme, deliberately light.

- **Ground** `--background` is warm ivory; `--card` is a shade paler for panels.
- **Ink** near-black brown-ink `--foreground`; `--muted-foreground` for the
  second voice only (it sits at 0.46 L, roughly 4.9:1 on the ivory ground).
- **Brand** deep teal `--primary`, used for buttons, links, rules and the mark.
  `--ink-deep` is the darker teal that owns the footer, the doctrine band on
  About and the "three times a week" band on Home.
- **Saffron** `--saffron` is a marker and never body text: the featured label,
  list bullets, the pull-quote rule, the lamp's flame. `--saffron-ink` is the
  only text colour that ever sits on saffron.
- **States** `--destructive` for errors.

Contrast checked against the tokens: primary ink on ivory, ink on deep teal
(`--ink-deep-foreground`), muted on deep teal (`--ink-deep-muted`), saffron-ink
on saffron, and primary on `--primary-foreground` all clear 4.5:1.

Type: **Lora** for headings (`--font-heading`) — a serif with weight and calm —
over **Inter** for body and labels (`--font-body`, `--font-label`). Telugu
renders through `--font-telugu`, Noto Sans Telugu, applied by the `font-telugu`
class and by the `lang="te"` switch. Three faces, all loaded in `src/fonts.css`.

The scale is ratio ~1.33 fluid with `clamp()`: `--hero-size` from 2.4rem to
4.4rem. Body 1rem at 1.7 leading; article measure 68ch.

## Components

`src/components/ui` holds the unstyled primitives and nothing here uses them as
a layout. The comparable pieces are composed for this site: `ArticleRow` (a
dated index row), `HeroPlate` (the drawn centrepiece), `ProductCover` (one
shape per product kind), `CopyLinkButton`, `LanguageSwitch`, `SiteHeader`,
`SiteFooter`.

## Shell

A top bar with the lamp mark and wordmark at the left, six sections — Articles,
Videos, Images, Store, About, Contact — at the right, and the English/తెలుగు
switch beside them. At 360 the sections collapse into one menu button with a
visible close; **the language switch never collapses**, because a Telugu reader
has to be able to find it without reading English. The footer is the deep teal
band carrying the times, the address, the email and phone, the social accounts
and the owner-editing link. Two routes exist beyond the ones asked for: the
per-article address `articles/:slug` (required, so an article can be shared) and
`/edit`, which is the owner-editing page and states plainly what cannot exist
without a server.

## Brand mark

An oil lamp with a flame, drawn as three paths in `src/components/Brand.tsx`,
saffron flame on the teal body, no container. The favicon is the same lamp
alone, 32×32, under 4 KB. **Icons: lucide at `stroke-width: 1.5`** everywhere.

## Imagery

One answer for the whole site: **drawn**, in deep teal, saffron and paper, on
the ivory ground. The hero is an open book with the lamp above it — the site's
own mark made large. Store covers are one geometric motif per product. There
are no stock photographs: a stock photograph chosen for mood is exactly what
this site would have become, and the community's own pictures do not exist in
this build, so nothing pretends to be one. Video stills are the channel's own
thumbnails, pulled from `i.ytimg.com`.

## Voice

Plain, specific, unhurried. The building, the year, the number of families,
what happens on a Tuesday. Telugu is written as the primary voice of a good
part of the congregation, not as a translation label. No invented testimonial,
award or statistic — the figures on About are the ones the brief of the
community gives (founded 1998, 41 families), and where a number is not known
the sentence does not need one.

## What this build cannot do

No server: no member sign-in, no in-browser upload, no download permissions and
no payments. Files are stored in the church's GitHub repository
(`vipanta/bapatla_ekklesia`, branch `main`) — pictures under
`public/images`, store files under `public/files` — and the owner adds
them from GitHub itself; `/edit` links to the repository and its upload page,
names the path and naming rule for each kind of material, and says plainly that
a form here would need a server holding a token. Every page that would need
those says so where the visitor would look for them, and the store and the edit
page hand over to email rather than shipping a form that silently discards a
message.
