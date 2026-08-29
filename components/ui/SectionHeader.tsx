'use client'

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  sub?: string
  light?: boolean
}

export default function SectionHeader({ eyebrow, headline, sub, light }: SectionHeaderProps) {
  return (
    <div className="mb-10 lg:mb-14">
      <p className="eyebrow mb-4" style={{ color: light ? 'rgba(245,243,239,0.6)' : undefined }}>
        {eyebrow}
      </p>
      <h2
        className="font-display text-fluid-xl font-semibold leading-none tracking-tight"
        style={{ color: light ? 'var(--stone)' : 'var(--ink)' }}
      >
        {headline}
      </h2>
      {sub && (
        <p className="mt-4 text-f-base max-w-2xl" style={{ color: light ? 'rgba(245,243,239,0.7)' : 'var(--slate)' }}>
          {sub}
        </p>
      )}
    </div>
  )
}
