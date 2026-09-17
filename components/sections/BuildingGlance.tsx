'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { images } from '@/content'
import { fadeUp, scaleReveal, staggerContainer, viewport, ease } from '@/lib/animation'
import { useCountUp } from '@/lib/useCountUp'

const facts = [
  { label: '4',         num: 4,    sub: 'Floors'                       },
  { label: '10',        num: 10,   sub: 'Commercial units (1st floor)' },
  { label: '12',        num: 12,   sub: 'Apartments (2nd–4th floors)'  },
  { label: 'Lift',      num: null, sub: 'Dedicated passenger lift'     },
  { label: 'Parking',   num: null, sub: 'Dedicated commercial area'    },
  { label: 'Multi Club',num: null, sub: 'Directly adjacent'            },
]

function CountFact({ num, label }: { num: number | null; label: string }) {
  const { value, ref } = useCountUp(num ?? 0, 1.2)
  if (num === null) return <>{label}</>
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{value}</span>
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
        <SectionHeader
          eyebrow="Overview"
          headline="The building at a glance"
          sub="Mixed-use development across four floors — ground parking, first-floor commercial, residential above."
        />

        {/* Stats grid with stagger */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ border: '1px solid var(--border-gold)' }}
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {facts.map((f) => (
            <motion.div
              key={f.sub}
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              whileHover={{ background: 'rgba(200,148,52,0.08)', transition: { duration: 0.2 } }}
              className="p-6 lg:p-8 gold-card cursor-default"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <p
                className="font-display font-semibold text-fluid-lg tabular-nums stat-number"
                style={{ lineHeight: 1 }}
              >
                <CountFact num={f.num} label={f.label} />
              </p>
              <p className="text-f-xs mt-2 leading-snug" style={{ color: 'var(--slate)' }}>
                {f.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floor breakdown strip */}
        <motion.div
          className="mt-px grid grid-cols-1 sm:grid-cols-4 gap-px"
          style={{ border: '1px solid var(--border-gold)', borderTop: 'none' }}
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {[
            { floor: 'Ground',  desc: 'Parking + commercial entrance' },
            { floor: '1st',     desc: '8 shops · 2 offices (01–10)' },
            { floor: '2nd–4th', desc: '4 apartments per floor · 2-bed' },
            { floor: 'All',     desc: 'Passenger lift · staircase' },
          ].map((r) => (
            <motion.div
              key={r.floor}
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              whileHover={{ background: 'rgba(200,148,52,0.06)', transition: { duration: 0.2 } }}
              className="px-6 py-5 flex gap-4 items-start gold-card"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <span className="font-display font-semibold text-f-sm shrink-0 w-14" style={{ color: 'var(--gold)' }}>{r.floor}</span>
              <span className="text-f-sm" style={{ color: 'var(--slate)' }}>{r.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Building renders gallery */}
        <motion.div
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2"
          variants={staggerContainer(0.09, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {[
            { src: images.buildingFrontDay, alt: 'Insaf Arcade 2 — daytime front elevation render', label: 'Front elevation' },
            { src: images.buildingAngle,    alt: 'Insaf Arcade 2 — angled daytime render',           label: 'East angle'      },
            { src: images.buildingAngle2,   alt: 'Insaf Arcade 2 — alternate angled render',          label: 'West angle'      },
            { src: images.hero,             alt: 'Insaf Arcade 2 — illuminated night render',          label: 'Night facade'    },
          ].map((img) => (
            <motion.div
              key={img.src}
              variants={scaleReveal}
              transition={{ duration: 0.5, ease }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="overflow-hidden"
              style={{ border: '1px solid var(--border-gold)', borderRadius: '2px', cursor: 'zoom-in' }}
            >
              <ImagePlaceholder
                src={img.src}
                alt={img.alt}
                width={560}
                height={380}
                className="w-full h-auto"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-f-xs font-medium" style={{ color: 'var(--slate)' }}>{img.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
