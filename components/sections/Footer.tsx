'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { site, images } from '@/content'
import { fadeUp, slideRight, staggerContainer, viewport, ease } from '@/lib/animation'

const quickNav = [
  { label: 'Commercial',  href: '#commercial'  },
  { label: 'Apartments',  href: '#apartments'  },
  { label: 'Payment',     href: '#payment'     },
  { label: 'Location',    href: '#location'    },
  { label: 'Why invest',  href: '#why-invest'  },
  { label: 'About',       href: '#about'       },
  { label: 'Enquire',     href: '#enquiry'     },
]

export default function Footer() {
  return (
    <footer
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-gold)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12"
          style={{ borderBottom: '1px solid var(--border)' }}
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }}>
            <Image
              src={images.logo}
              alt={site.developer}
              width={140}
              height={48}
              className="h-10 w-auto object-contain mb-5"
              onError={() => {}}
            />
            <p className="text-f-xs leading-relaxed" style={{ color: 'rgba(245,243,239,0.35)' }}>
              {site.developer}<br />
              {site.address}
            </p>
          </motion.div>

          {/* Quick nav */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }}>
            <p className="text-f-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(200,148,52,0.5)', letterSpacing: '0.12em' }}>
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <motion.ul
                className="space-y-2.5"
                variants={staggerContainer(0.05, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {quickNav.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={slideRight}
                    transition={{ duration: 0.35, ease }}
                  >
                    <a
                      href={l.href}
                      className="text-f-sm nav-link"
                      style={{ color: 'rgba(245,243,239,0.45)' }}
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }}>
            <p className="text-f-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(200,148,52,0.5)', letterSpacing: '0.12em' }}>
              Contact
            </p>
            <a
              href={site.phoneTel}
              className="block font-display font-semibold text-f-lg mb-3"
              style={{ color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.2 }}
            >
              {site.phone}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-f-sm nav-link"
              style={{ color: 'rgba(245,243,239,0.45)' }}
            >
              WhatsApp ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-f-xs" style={{ color: 'rgba(245,243,239,0.2)' }}>
            © 2026 {site.developer}. All rights reserved.
          </p>
          <p className="text-f-xs italic" style={{ color: 'rgba(245,243,239,0.15)' }}>
            Prices and availability subject to change without notice.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
