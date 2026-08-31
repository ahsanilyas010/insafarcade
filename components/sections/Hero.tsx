'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { site, heroStats, images } from '@/content'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4])

  return (
    <section
      ref={ref}
      id="hero"
      data-section="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      {/* Building image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: prefersReduced ? 0 : bgY, opacity: prefersReduced ? 1 : bgOpacity }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: prefersReduced ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        >
          {/* Luxury dark placeholder */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0C0D0F 0%, #1A1205 40%, #0C0D0F 100%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />
          {/* Gold diagonal pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  -55deg,
                  transparent,
                  transparent 60px,
                  rgba(200,148,52,0.03) 60px,
                  rgba(200,148,52,0.03) 61px
                )
              `,
              zIndex: 1,
            }}
            aria-hidden="true"
          />
          <Image
            src={images.hero}
            alt="Insaf Arcade 2 building render"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            style={{ zIndex: 2, opacity: 0.55 }}
          />
        </motion.div>

        {/* Layered gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              'linear-gradient(to top, rgba(12,13,15,0.98) 0%, rgba(12,13,15,0.6) 45%, rgba(12,13,15,0.15) 100%)',
              'linear-gradient(to right, rgba(12,13,15,0.5) 0%, transparent 60%)',
            ].join(', '),
            zIndex: 3,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative px-6 lg:px-12 pb-16 lg:pb-24 pt-32 max-w-site mx-auto w-full"
        style={{ zIndex: 4, y: prefersReduced ? 0 : textY }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: prefersReduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {site.developer} · B-17 (MPCHS), Islamabad
          </motion.p>

          {/* Gold rule */}
          <motion.div
            className="gold-rule mb-8"
            initial={{ scaleX: prefersReduced ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            style={{ transformOrigin: 'left', width: '60px' }}
          />

          {/* Headline — per-line clip-path reveal */}
          <h1 className="font-display font-semibold tracking-tight mb-5 text-fluid-hero" style={{ color: 'var(--stone)', lineHeight: '1.0' }}>
            {['Insaf', 'Arcade 2'].map((line, i) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                initial={prefersReduced ? {} : { clipPath: 'inset(100% 0 0 0)', y: 32 }}
                animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
                transition={{ delay: 0.38 + i * 0.08, duration: 0.75, ease }}
              >
                {i === 1
                  ? <><span style={{ color: 'var(--stone)' }}>Arcade </span><span style={{ color: 'var(--gold)' }}>2</span></>
                  : line
                }
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-f-md mb-10 max-w-lg"
            style={{ color: 'rgba(245,243,239,0.65)' }}
            initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease }}
          >
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-16"
            initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.55, ease }}
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
          <div className="grid grid-cols-3 gap-px" style={{ borderTop: '1px solid rgba(200,148,52,0.2)' }}>
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="pt-6 pr-6"
                initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72 + i * 0.09, duration: 0.5, ease }}
              >
                <p
                  className="font-display font-semibold tabular-nums stat-number"
                  style={{ fontSize: 'clamp(22px, 3vw, 40px)', lineHeight: 1.1 }}
                >
                  {stat.value}
                </p>
                <p className="text-f-xs font-medium mt-0.5" style={{ color: 'rgba(200,148,52,0.65)' }}>
                  {stat.unit}
                </p>
                <p className="text-f-xs mt-1" style={{ color: 'rgba(245,243,239,0.4)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }}
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
