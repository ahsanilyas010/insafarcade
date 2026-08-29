'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import { developer, images } from '@/content'

const fade = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
}

export default function AboutDeveloper() {
  return (
    <section
      id="about"
      data-section="about"
      className="py-20 lg:py-28"
      style={{ background: 'var(--ink)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: brand + logo */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images.logo}
              alt={developer.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain mb-10"
              onError={() => {}}
            />

            <p className="text-f-base leading-relaxed mb-8" style={{ color: 'rgba(245,243,239,0.75)' }}>
              {developer.about}
            </p>

            <div className="space-y-1">
              <p className="text-f-xs font-medium" style={{ color: 'rgba(245,243,239,0.4)' }}>Prior projects</p>
              {developer.priorProjects.map((p) => (
                <div key={p} className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid rgba(221,216,208,0.1)' }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                  <span className="text-f-sm" style={{ color: 'rgba(245,243,239,0.7)' }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: philosophy / mission / vision */}
          <div className="space-y-8">
            {[
              { label: 'Philosophy', text: developer.philosophy },
              { label: 'Mission',    text: developer.mission    },
              { label: 'Vision',     text: developer.vision     },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pt-8"
                style={{ borderTop: '1px solid rgba(221,216,208,0.15)' }}
              >
                <p className="eyebrow mb-4" style={{ color: 'rgba(245,243,239,0.4)' }}>{item.label}</p>
                <p className="text-f-base leading-relaxed" style={{ color: 'rgba(245,243,239,0.75)' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
