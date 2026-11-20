/* Turn a pasted article into the exact block that goes into
   src/data/articles.ts, and check it before it is copied. There is no server,
   so a form here cannot publish anything — it produces the text the owner
   pastes into GitHub, which is what actually publishes. */

export type Draft = {
  titleEn: string
  titleTe: string
  date: string
  summaryEn: string
  summaryTe: string
  bodyEn: string
  bodyTe: string
}

export type Check = { slug: string; problems: string[]; ok: boolean }

/** Lowercase words joined by hyphens — the article's address. */
export function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/** One line of a body is a paragraph; a line beginning with "## " is a heading.
 *  The two languages are paired by position, so line 3 of the Telugu is the
 *  Telugu of line 3 of the English. */
function paragraphs(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
}

const quote = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`

export function check(draft: Draft, existingSlugs: string[]): Check {
  const problems: string[] = []
  const slug = slugify(draft.titleEn)

  if (!draft.titleEn.trim()) problems.push('Give the article an English title.')
  if (!draft.titleTe.trim()) problems.push('Give the article a Telugu title.')
  if (!draft.date) problems.push('Choose the date it is published.')
  else if (Number.isNaN(Date.parse(draft.date))) problems.push('The date is not a real date.')
  if (!draft.summaryEn.trim()) problems.push('Write the English summary — it is the line on the index and the share text.')
  if (!draft.summaryTe.trim()) problems.push('Write the Telugu summary.')
  if (paragraphs(draft.bodyEn).length === 0) problems.push('The English body is empty — the article needs at least one paragraph.')
  if (slug.length < 3) problems.push('The slug comes from the English title, and it is too short to be an address.')
  if (slug.length >= 3 && existingSlugs.includes(slug)) {
    problems.push(`The address /articles/${slug} is already used by another article. Change the English title, or add a word to it.`)
  }

  return { slug, problems, ok: problems.length === 0 }
}

/** The block to paste into src/data/articles.ts, indented to sit in the array. */
export function toBlock(draft: Draft, slug: string) {
  const en = paragraphs(draft.bodyEn)
  const te = paragraphs(draft.bodyTe)
  const lines: string[] = []

  lines.push('  {')
  lines.push(`    slug: ${quote(slug)},`)
  lines.push(`    date: ${quote(draft.date)},`)
  lines.push(`    title: { en: ${quote(draft.titleEn.trim())}, te: ${quote(draft.titleTe.trim())} },`)
  lines.push('    summary: {')
  lines.push(`      en: ${quote(draft.summaryEn.trim())},`)
  lines.push(`      te: ${quote(draft.summaryTe.trim())},`)
  lines.push('    },')
  lines.push(`    readMinutes: ${readMinutes(en)},`)
  lines.push('    body: [')

  en.forEach((line, i) => {
    if (line.startsWith('## ')) {
      lines.push('      {')
      lines.push('        kind: ' + quote('h') + ',')
      lines.push(`        en: ${quote(line.slice(3).trim())},`)
      lines.push(`        te: ${quote(te[i] ?? '')},`)
      lines.push('      },')
      return
    }
    lines.push('      {')
    lines.push('        kind: ' + quote('p') + ',')
    lines.push(`        en: ${quote(line)},`)
    lines.push(`        te: ${quote(te[i] ?? '')},`)
    lines.push('      },')
  })

  lines.push('    ],')
  lines.push('  },')
  return lines.join('\n')
}

/** Two hundred words a minute, and never less than a minute. */
export function readMinutes(paragraphsEn: string[]) {
  const words = paragraphsEn.join(' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
