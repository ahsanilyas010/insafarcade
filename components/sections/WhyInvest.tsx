'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { whyInvestPoints } from '@/content'
import { fadeUp, staggerContainer, viewport, ease } from '@/lib/animation'

export default function WhyInvest() {
  return (
    <section
      id="why-invest"
      data-section="why-invest"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeader
            eyebrow="Investment case"
            headline="Why invest"
            sub="Eight reasons Insaf Arcade 2 is positioned for lasting commercial and residential value."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ border: '1px solid var(--border-gold)' }}
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {whyInvestPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              whileHover={{ background: 'rgba(200,148,52,0.07)', transition: { duration: 0.2 } }}
              className="px-8 py-7 gold-card cursor-default"
              style={{
                borderRight:  '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div className="flex items-start gap-4">
                <motion.span
                  className="font-display font-semibold tabular-nums shrink-0 mt-0.5"
                  style={{ color: 'var(--gold)', fontSize: '20px', lineHeight: 1, minWidth: '28px' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </motion.span>
                <div>
                  <p className="font-semibold text-f-sm mb-1" style={{ color: 'var(--stone)' }}>{point.title}</p>
                  <p className="text-f-sm leading-relaxed" style={{ color: 'var(--slate)' }}>{point.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
