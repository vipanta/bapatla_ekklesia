import type { ReactNode } from 'react'
import { useT } from '@/lib/language'
import { cx } from '@/lib/cx'

/** A section heading with an optional right-hand action. The label line is one
    device used where it names a category, not on every section. */
export function SectionHeading({
  title,
  te,
  action,
  id,
  className,
}: {
  title: string
  te?: string
  action?: ReactNode
  id?: string
  className?: string
}) {
  const t = useT()
  return (
    <div className={cx('flex flex-wrap items-end justify-between gap-4', className)}>
      <h2 id={id} className="text-[clamp(1.6rem,1.2rem+1.6vw,2.35rem)]">
        {t(title, te)}
      </h2>
      {action}
    </div>
  )
}
