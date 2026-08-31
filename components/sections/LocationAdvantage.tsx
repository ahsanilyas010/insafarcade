'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { locationAnchors, site, images } from '@/content'

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
}

export default function LocationAdvantage() {
  return (
    <section
      id="location"
      data-section="location"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: copy + anchors */}
          <div>
            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                eyebrow="Location"
                headline="B-17 MPCHS, Islamabad"
                sub="Situated in one of Islamabad's fastest-growing commercial corridors — surrounded by services, brands, and daily footfall that sustains occupancy."
              />
            </motion.div>

            <motion.p
              className="text-f-sm mb-8"
              style={{ color: 'var(--slate)' }}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {site.address}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: '1px solid var(--border-gold)' }}>
              {locationAnchors.map((anchor, i) => (
                <motion.div
                  key={anchor.name}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="px-5 py-4 gold-card"
                  style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
                >
                  <p className="text-f-sm font-medium" style={{ color: 'var(--stone)' }}>
                    {anchor.name}
                  </p>
                  {anchor.note && (
                    <p className="text-f-xs mt-0.5" style={{ color: 'var(--slate)' }}>
                      {anchor.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: map graphic */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="sticky top-24"
          >
            <div className="overflow-hidden" style={{ border: '1px solid var(--border-gold)', borderRadius: '2px' }}>
              <ImagePlaceholder
                src={images.map}
                alt="Location map showing Insaf Arcade 2 in B-17 MPCHS Islamabad"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 flex items-start gap-3 px-1">
              <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: 'var(--gold)' }} />
              <p className="text-f-xs leading-relaxed" style={{ color: 'var(--slate)' }}>
                Plot No. 14, Block B, B-17 (MPCHS), Islamabad — directly adjacent to Multi Club Islamabad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
