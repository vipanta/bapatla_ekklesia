/* Drawn covers for the store: one shape per product kind, in the site's teal
   and saffron, so a shelf of products reads as one series rather than four
   icons from four sets. */
const palette = { teal: 'var(--ink-deep)', gold: 'var(--saffron)', paper: 'var(--background)' }

/* A title whose own picture is in src/covers shows that picture — every one of
    the twelve has its own file there now, so the shelf is the owner's pictures.
    The drawn motif stays as the fallback for a title that has no file yet. */
export function ProductCover({
  kind,
  title,
  image,
  className,
  eager,
}: {
  kind: string
  title: string
  image?: string
  className?: string
  /** The picture on a product's own page is the first thing a visitor waits
      for; on the shelf it is one of many and waits its turn. */
  eager?: boolean
}) {
  if (image) {
    return (
      <span className={`block aspect-[5/7] w-full overflow-hidden rounded-md border border-border bg-muted ${className ?? ''}`}>
        <img
          src={image}
          alt={`Cover of ${title}`}
          width={800}
          height={1120}
          loading={eager ? 'eager' : 'lazy'}
          className="size-full object-contain"
        />
      </span>
    )
  }

  const motif = {
    study: (
      <g stroke={palette.paper} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M28 52h44M28 62h44M28 72h30" />
        <path d="M92 28v40" />
        <circle cx="92" cy="24" r="4" fill={palette.gold} stroke="none" />
      </g>
    ),
    songs: (
      <g stroke={palette.paper} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M40 74V34l24-6v34" />
        <circle cx="34" cy="76" r="6" />
        <circle cx="58" cy="62" r="6" />
        <path d="M78 34v6M86 30v10M94 26v14" stroke={palette.gold} />
      </g>
    ),
    telugu: (
      <g fill={palette.paper}>
        <path d="M34 40h10v6H34zM48 40h18v6H48zM34 52h32v6H34zM34 64h22v6H34z" />
        <path d="M84 34c8 0 12 6 12 13s-4 13-12 13c6-3 8-8 8-13s-2-10-8-13Z" fill={palette.gold} />
        <path d="M34 76h14v4H34z" />
      </g>
    ),
    catechism: (
      <g stroke={palette.paper} strokeWidth="2" fill="none">
        <rect x="38" y="28" width="44" height="48" rx="3" />
        <path d="M38 40h44" />
        <path d="M92 34v10M87 39h10" stroke={palette.gold} strokeLinecap="round" />
      </g>
    ),
  }[kind] ?? null

  return (
    <span className={className}>
      <svg viewBox="0 0 144 100" role="img" aria-label={`Cover of ${title}`} className="w-full rounded-md">
        <rect width="144" height="100" fill={palette.teal} />
        <rect x="6" y="6" width="132" height="88" fill="none" stroke={palette.gold} strokeOpacity="0.5" strokeWidth="1" />
        {motif}
      </svg>
    </span>
  )
}
