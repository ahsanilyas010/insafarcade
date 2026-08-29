'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { whyInvestPoints } from '@/content'

const fade = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
}

export default function WhyInvest() {
  return (
    <section
      id="why-invest"
      data-section="why-invest"
      className="py-20 lg:py-28"
      style={{ background: 'var(--stone)', borderTop: '1px solid var(--concrete)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Investment case"
            headline="Why invest"
            sub="Eight reasons Insaf Arcade 2 is positioned for lasting commercial and residential value."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: '1px solid var(--concrete)' }}>
          {whyInvestPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-8 py-7"
              style={{
                background:   'var(--stone)',
                borderRight:  '1px solid var(--concrete)',
                borderBottom: '1px solid var(--concrete)',
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-display font-semibold tabular-nums shrink-0 mt-0.5"
                  style={{ color: 'var(--gold)', fontSize: '20px', lineHeight: 1, minWidth: '28px' }}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <p className="font-semibold text-f-sm mb-1" style={{ color: 'var(--ink)' }}>{point.title}</p>
                  <p className="text-f-sm leading-relaxed" style={{ color: 'var(--slate)' }}>{point.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
