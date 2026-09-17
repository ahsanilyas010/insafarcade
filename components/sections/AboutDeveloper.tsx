'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import { developer, images } from '@/content'
import { fadeUp, slideRight, staggerContainer, viewport, ease } from '@/lib/animation'

export default function AboutDeveloper() {
  return (
    <section
      id="about"
      data-section="about"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: brand + logo + prior projects */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }}>
              <Image
                src={images.logo}
                alt={developer.name}
                width={180}
                height={60}
                className="h-12 w-auto object-contain mb-10"
                onError={() => {}}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className="text-f-base leading-relaxed mb-8"
              style={{ color: 'var(--slate)' }}
            >
              {developer.about}
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease }}>
              <p className="text-f-xs font-medium mb-3" style={{ color: 'rgba(200,148,52,0.6)' }}>Prior projects</p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.06, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {developer.priorProjects.map((p) => (
                <motion.div
                  key={p}
                  variants={slideRight}
                  transition={{ duration: 0.4, ease }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 py-2.5 cursor-default"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                  <span className="text-f-sm" style={{ color: 'var(--slate)' }}>{p}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: philosophy / mission / vision */}
          <motion.div
            className="space-y-0"
            variants={staggerContainer(0.12, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[
              { label: 'Philosophy', text: developer.philosophy },
              { label: 'Mission',    text: developer.mission    },
              { label: 'Vision',     text: developer.vision     },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                transition={{ duration: 0.55, ease }}
                className="pt-8 pb-8"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <p className="eyebrow mb-4">{item.label}</p>
                <p className="text-f-base leading-relaxed" style={{ color: 'var(--slate)' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
