import { useState } from 'react'
import { X } from 'lucide-react'
import { gallery } from '@/data/gallery'
import { cx } from '@/lib/cx'
import { useT } from '@/lib/language'

/* A mosaic of pictures. Each opens in place: a dialog is more code than this
   owes, and an inline expanded frame keeps the grid's position. A tall cover
   sits inside its tile; a wide photograph fills it. */
export default function Images() {
  const t = useT()
  const [open, setOpen] = useState<string | null>(null)
  const active = gallery.find((g) => g.id === open)

  return (
    <div className="mx-auto max-w-content px-gutter py-10">
      <header className="max-w-[56ch]">
        <h1 className="text-[clamp(2rem,1.5rem+2.4vw,3.1rem)]">{t('Image library', 'చిత్రాల లైబ్రరీ')}</h1>
        <p className="mt-3 text-muted-foreground">
          {t(
            'The book the community published, the room on a Sunday, the street, the lamp. Photographs as they were taken, drawings in the community colours.',
            'సమాజం ప్రచురించిన పుస్తకం, ఆదివారం గది, వీధి, దీపం. తీసినట్లుగానే ఫోటోలు, సమాజపు రంగులలో చిత్రాలు.',
          )}
        </p>
      </header>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g) => (
          <li key={g.id} className="group">
            <button
              type="button"
              onClick={() => setOpen(g.id)}
              aria-expanded={open === g.id}
              className="block w-full overflow-hidden rounded-lg border border-border bg-card text-left"
            >
              <img
                src={g.file}
                alt=""
                width={g.w}
                height={g.h}
                loading="lazy"
                className={cx(
                  'aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.02]',
                  g.fit === 'contain' ? 'bg-secondary object-contain' : 'object-cover',
                )}
              />
              <span className="block p-3 text-sm text-muted-foreground">{t(g.caption.en, g.caption.te)}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(active.caption.en, active.caption.te)}
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-4"
          onClick={() => setOpen(null)}
        >
          <div className="max-h-full w-full max-w-3xl overflow-auto rounded-lg bg-background p-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 pb-2">
              <p className="text-sm">{t(active.caption.en, active.caption.te)}</p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="grid size-11 shrink-0 place-items-center rounded-md border border-border hover:bg-secondary"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">{t('Close', 'మూసివేయండి')}</span>
              </button>
            </div>
            <img
              src={active.file}
              alt={t(active.caption.en, active.caption.te)}
              width={active.w}
              height={active.h}
              className="mx-auto w-full rounded-md"
            />
          </div>
        </div>
      )}

      <p className="mt-10 max-w-[62ch] text-sm text-muted-foreground">
        {t(
          'Pictures are added by the owner. Uploading to a public gallery from this page is part of the editing system, which needs a server this build does not have.',
          'చిత్రాలను యజమాని జోడిస్తారు. ఈ పేజీ నుండి పబ్లిక్ గ్యాలరీకి అప్‌లోడ్ చేయడం ఎడిటింగ్ వ్యవస్థలో భాగం, దానికి ఈ నిర్మాణంలో లేని సర్వర్ కావాలి.',
        )}
      </p>
    </div>
  )
}
