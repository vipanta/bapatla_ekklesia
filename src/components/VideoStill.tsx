import type { Video } from '@/data/videos'
import { cx } from '@/lib/cx'

/* The still for a video. Where the owner has recorded a YouTube id,
   i.ytimg.com serves that video's own frame; until then each series gets its
   own drawn motif, so a row of stills is not a row of identical rectangles.
   The series name is never printed here — the card states it once. */

const motifs: Record<string, string[]> = {
  /* A closed book under a lamp: the Sunday teaching. */
  'Sunday teaching': [
    'M14 62h40v28H14z',
    'M54 62h40v28H54z',
    'M54 62v28',
    'M52 34c0-8 6-12 6-20 0 8 6 12 6 20a6 6 0 0 1-12 0Z',
    'M40 86h48',
  ],
  /* An open scroll with ruled lines: the Thursday study. */
  'Thursday study': [
    'M22 30c0-6 4-8 10-8h62v76c-6 0-10 2-10 8',
    'M22 30v64c0 8 6 12 14 12h48',
    'M38 44h34',
    'M38 56h34',
    'M38 68h22',
  ],
  /* Two arcs meeting: a conversation, the testimony. */
  Testimony: [
    'M26 34h34a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10H44l-14 12V68h-4a10 10 0 0 1-10-10V44a10 10 0 0 1 10-10Z',
    'M70 46h22a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10h-2v12l-14-12H70',
  ],
  /* Four flames: the Advent readings. */
  Service: [
    'M40 26c0 6 5 9 5 16a5 5 0 0 1-10 0c0-7 5-10 5-16Z',
    'M64 26c0 6 5 9 5 16a5 5 0 0 1-10 0c0-7 5-10 5-16Z',
    'M88 26c0 6 5 9 5 16a5 5 0 0 1-10 0c0-7 5-10 5-16Z',
    'M22 78h84',
    'M30 78V62h68v16',
  ],
  /* Sun over a rising line: morning prayer. */
  Prayer: [
    'M60 30v10',
    'M38 46l7 7',
    'M82 46l-7 7',
    'M28 62h14',
    'M78 62h14',
    'M44 74a16 16 0 0 1 32 0',
    'M24 82h72',
  ],
  /* A question mark inside a frame: the hard question. */
  Study: [
    'M32 28h56v64H32z',
    'M50 48c0-6 4-10 10-10s10 4 10 9c0 8-10 9-10 17',
    'M60 74v2',
  ],
}

export function VideoStill({
  video,
  className,
  big = false,
}: {
  video: Video
  className?: string
  big?: boolean
}) {
  if (video.youtubeId) {
    return (
      <img
        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        className={cx('aspect-[4/3] w-full object-cover', className)}
      />
    )
  }

  const paths = motifs[video.series.en] ?? motifs.Study

  return (
    <div className={cx('relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-ink-deep', className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--saffron)_22%,transparent),transparent)]"
      />
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cx('relative text-saffron', big ? 'size-28' : 'size-20')}
      >
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </div>
  )
}
