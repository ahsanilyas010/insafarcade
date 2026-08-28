'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { site, heroStats, images } from '@/content'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      {/* Building image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: prefersReduced ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        {/* Concrete placeholder behind the image */}
        <div
          className="absolute inset-0 img-placeholder"
          aria-hidden="true"
          style={{ background: '#1a1d20', color: 'var(--slate)', zIndex: 0 }}
        >
          hero-building.jpg
        </div>
        <Image
          src={images.hero}
          alt="Insaf Arcade 2 building render"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          style={{ zIndex: 1 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(16,18,20,0.95) 0%, rgba(16,18,20,0.45) 55%, rgba(16,18,20,0.2) 100%)',
            zIndex: 2,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative px-6 lg:px-12 pb-16 lg:pb-20 pt-32 max-w-site mx-auto w-full" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow mb-6"
            style={{ color: 'rgba(245,243,239,0.55)' }}
            initial={{ opacity: prefersReduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {site.developer} · B-17 (MPCHS), Islamabad
          </motion.p>

          {/* Gold rule */}
          <motion.div
            className="gold-rule mb-8"
            initial={{ scaleX: prefersReduced ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Headline — per-line clip-path reveal */}
          <h1 className="font-display font-semibold tracking-tight mb-4 text-fluid-hero" style={{ color: 'var(--stone)' }}>
            {['Insaf', 'Arcade 2'].map((line, i) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                initial={prefersReduced ? {} : { clipPath: 'inset(100% 0 0 0)', y: 24 }}
                animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-f-md mb-10"
            style={{ color: 'rgba(245,243,239,0.72)' }}
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease }}
          >
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-14"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease }}
          >
            <a href="#enquiry" className="btn-primary">
              Enquire now
            </a>
            <a href={site.phoneTel} className="btn-outline">
              Call {site.phone}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp
            </a>
          </motion.div>

          {/* Anchor stats */}
          <div className="grid grid-cols-3 gap-px" style={{ borderTop: '1px solid rgba(221,216,208,0.2)' }}>
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="pt-6 pr-6"
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5, ease }}
              >
                <p
                  className="font-display font-semibold tabular-nums"
                  style={{ color: 'var(--gold)', fontSize: 'clamp(22px, 3vw, 40px)', lineHeight: 1.1 }}
                >
                  {stat.value}
                </p>
                <p className="text-f-xs font-medium mt-0.5" style={{ color: 'rgba(245,243,239,0.5)' }}>
                  {stat.unit}
                </p>
                <p className="text-f-xs mt-1" style={{ color: 'rgba(245,243,239,0.45)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
