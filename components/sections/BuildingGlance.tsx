'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const facts = [
  { label: '4',         sub: 'Floors'                       },
  { label: '10',        sub: 'Commercial units (1st floor)' },
  { label: '12',        sub: 'Apartments (2nd–4th floors)'  },
  { label: 'Lift',      sub: 'Dedicated passenger lift'     },
  { label: 'Parking',   sub: 'Dedicated commercial area'    },
  { label: 'Multi Club',sub: 'Directly adjacent'            },
]

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
}

export default function BuildingGlance() {
  return (
    <section
      id="glance"
      data-section="glance"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="Overview"
            headline="The building at a glance"
            sub="Mixed-use development across four floors — ground parking, first-floor commercial, residential above."
          />
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ border: '1px solid var(--border-gold)' }}
        >
          {facts.map((f, i) => (
            <motion.div
              key={f.sub}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-6 lg:p-8 gold-card"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <p
                className="font-display font-semibold text-fluid-lg tabular-nums stat-number"
                style={{ lineHeight: 1 }}
              >
                {f.label}
              </p>
              <p className="text-f-xs mt-2 leading-snug" style={{ color: 'var(--slate)' }}>
                {f.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floor breakdown strip */}
        <div className="mt-px grid grid-cols-1 sm:grid-cols-4 gap-px" style={{ border: '1px solid var(--border-gold)', borderTop: 'none' }}>
          {[
            { floor: 'Ground',  desc: 'Parking + commercial entrance' },
            { floor: '1st',     desc: '8 shops · 2 offices (01–10)' },
            { floor: '2nd–4th', desc: '4 apartments per floor · 2-bed' },
            { floor: 'All',     desc: 'Passenger lift · staircase' },
          ].map((r, i) => (
            <motion.div
              key={r.floor}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="px-6 py-5 flex gap-4 items-start gold-card"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <span className="font-display font-semibold text-f-sm shrink-0 w-14" style={{ color: 'var(--gold)' }}>{r.floor}</span>
              <span className="text-f-sm" style={{ color: 'var(--slate)' }}>{r.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
