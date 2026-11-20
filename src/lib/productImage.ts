import type { Product } from '@/data/products'

/* Covers the owner uploads themselves. Every title in the store has its own
   picture file in this folder named after its slug, which is what makes the
   shelf editable without touching a component: upload a new file with the same
   name and that title's cover changes. A photograph or a scan (.webp, .jpg,
   .png) wins over the starting drawing (.svg) that arrived with the site. */
const uploads = import.meta.glob<string>('../covers/*.{webp,jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
})

type Cover = { url: string; drawn: boolean }

/* ../covers/payhip-uwasp.svg → payhip-uwasp */
const bySlug: Record<string, Cover> = {}
for (const [path, url] of Object.entries(uploads)) {
  const file = path.split('/').pop() ?? ''
  const slug = file.replace(/\.(webp|jpe?g|png|svg)$/i, '')
  if (!slug) continue
  const drawn = /\.svg$/i.test(file)
  const current = bySlug[slug]
  // A picture the owner put here beats the drawing it replaced, whatever
  // order the files come back in.
  if (!current || (current.drawn && !drawn)) bySlug[slug] = { url, drawn }
}

/** The picture file a title already has in src/covers, if any. */
export function uploadedCover(slug: string) {
  return bySlug[slug]?.url
}

/** The picture a title shows. A file in src/covers always wins, so replacing
    one is the whole job; an `image:` line on the product is the fallback for a
    cover kept in public/images, and the drawn motif is the last stand. */
export function productImage(p: Product) {
  return bySlug[p.slug]?.url ?? p.image
}
