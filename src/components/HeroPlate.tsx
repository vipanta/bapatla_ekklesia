/* The first screen's centrepiece: an open book with the lamp above it, drawn in
   the site's two colours on the ivory ground. Every paint is a theme token —
   the SVG reads them directly, so changing a token repaints the drawing. */
const TEAL = 'var(--ink-deep)'
const GOLD = 'var(--saffron)'
const PAGE = 'var(--background)'
const PAGE_FAR = 'var(--secondary)'
const EMBER = 'var(--saffron-ink)'
const GROUND = 'var(--card)'

export function HeroPlate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 460"
      role="img"
      aria-label="An open book with an oil lamp burning above it, drawn in deep teal and saffron"
      className={className}
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="38%" r="52%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.34" />
          <stop offset="60%" stopColor={GOLD} stopOpacity="0.08" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-page-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={PAGE} />
          <stop offset="100%" stopColor={PAGE_FAR} />
        </linearGradient>
        <linearGradient id="hero-page-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor={PAGE} />
          <stop offset="100%" stopColor={PAGE_FAR} />
        </linearGradient>
      </defs>

      <rect width="640" height="460" fill={GROUND} />
      <circle cx="320" cy="196" r="200" fill="url(#hero-glow)" />

      {/* ruled texture behind the book */}
      <g stroke={TEAL} strokeOpacity="0.07" strokeWidth="1">
        {Array.from({ length: 14 }, (_, i) => (
          <line key={i} x1="40" y1={300 + i * 12} x2="600" y2={300 + i * 12} />
        ))}
      </g>

      {/* the flame */}
      <path d="M320 96c14-9 18-27 7-44-9 15-16 24-7 44Z" fill={GOLD} />
      <path d="M320 96c6-5 8-13 4-21-4 7-8 12-4 21Z" fill={EMBER} />

      {/* lamp */}
      <g fill="none" stroke={TEAL} strokeWidth="6" strokeLinecap="round">
        <path d="M298 118c0-9 10-12 22-12s22 3 22 12" />
        <path
          d="M290 140c0-13 13-22 30-22s30 9 30 22-13 22-30 22-30-9-30-22Z"
          fill={TEAL}
          fillOpacity="0.08"
        />
        <path d="M320 162v16" />
        <path d="M300 184h40" />
      </g>

      {/* book */}
      <g>
        <path
          d="M320 250c-38-26-96-38-152-32-8 1-14 7-14 15v112c0 9 8 15 17 14 52-5 110 6 149 30V250Z"
          fill="url(#hero-page-l)"
          stroke={TEAL}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M320 250c38-26 96-38 152-32 8 1 14 7 14 15v112c0 9-8 15-17 14-52-5-110 6-149 30V250Z"
          fill="url(#hero-page-r)"
          stroke={TEAL}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M320 250v139" stroke={TEAL} strokeWidth="4" strokeLinecap="round" />
        <g stroke={TEAL} strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 7 }, (_, i) => (
            <g key={i}>
              <line x1="188" y1={272 + i * 16} x2="296" y2={266 + i * 16} />
              <line x1="344" y1={266 + i * 16} x2="452" y2={272 + i * 16} />
            </g>
          ))}
        </g>
      </g>

      {/* saffron ribbon marker */}
      <path d="M414 232l14 4-6 66-8-10-8 8 4-68Z" fill={GOLD} />
    </svg>
  )
}
