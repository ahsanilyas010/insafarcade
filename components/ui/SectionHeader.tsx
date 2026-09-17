'use client'

import { motion } from 'framer-motion'
import { viewport, ease } from '@/lib/animation'

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  sub?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ eyebrow, headline, sub, center }: SectionHeaderProps) {
  const words = headline.split(' ')

  return (
    <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
      <motion.p
        className="eyebrow mb-4"
        style={center ? { justifyContent: 'center' } : {}}
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease }}
      >
        {eyebrow}
      </motion.p>

      <h2
        className="font-display text-fluid-xl font-semibold leading-none tracking-tight"
        style={{ color: 'var(--stone)', overflow: 'hidden' }}
        aria-label={headline}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.22em]"
            initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: i * 0.06, ease }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {sub && (
        <motion.p
          className="mt-4 text-f-base max-w-2xl"
          style={{ color: 'var(--slate)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: words.length * 0.06 + 0.05, ease }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}
