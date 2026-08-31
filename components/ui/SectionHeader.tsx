'use client'

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  sub?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ eyebrow, headline, sub, center }: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
      <p className="eyebrow mb-4" style={center ? { justifyContent: 'center' } : {}}>
        {eyebrow}
      </p>
      <h2 className="font-display text-fluid-xl font-semibold leading-none tracking-tight" style={{ color: 'var(--stone)' }}>
        {headline}
      </h2>
      {sub && (
        <p className="mt-4 text-f-base max-w-2xl" style={{ color: 'var(--slate)' }}>
          {sub}
        </p>
      )}
    </div>
  )
}
