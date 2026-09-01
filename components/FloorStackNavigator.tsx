'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

export type FloorId = 'ground' | 'first' | 'residential'

const floors: { id: FloorId; label: string; sub: string; sections: string[] }[] = [
  { id: 'ground',      label: 'G',   sub: 'Parking',    sections: ['hero', 'glance', 'location'] },
  { id: 'first',       label: '1',   sub: 'Commercial', sections: ['commercial'] },
  { id: 'residential', label: '2–4', sub: 'Apartments', sections: ['apartments', 'payment'] },
]

interface FloorStackNavigatorProps {
  initialDraw?: boolean
}

export default function FloorStackNavigator({ initialDraw }: FloorStackNavigatorProps) {
  const [active, setActive] = useState<FloorId | null>(null)
  const [drawn, setDrawn] = useState(!initialDraw)

  useEffect(() => {
    if (!initialDraw) return
    const t = setTimeout(() => setDrawn(true), 200)
    return () => clearTimeout(t)
  }, [initialDraw])

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const sid = entry.target.getAttribute('data-section')
      if (!sid) continue
      const floor = floors.find(f => f.sections.includes(sid))
      if (floor) setActive(floor.id)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    })
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [handleIntersect])

  const scrollTo = (id: FloorId) => {
    const f = floors.find(fl => fl.id === id)
    if (!f) return
    const el = document.querySelector(`[data-section="${f.sections[0]}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Desktop — right-edge vertical stack */}
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1"
        aria-label="Floor navigator"
        style={{ pointerEvents: 'auto' }}
      >
        <div
          className="text-f-xs font-medium mb-2 text-center"
          style={{ color: 'rgba(200,148,52,0.4)', writingMode: 'vertical-lr', transform: 'rotate(180deg)', letterSpacing: '0.12em', fontSize: '9px' }}
        >
          FLOORS
        </div>
        {floors.map((floor, i) => {
          const isActive = active === floor.id
          return (
            <motion.button
              key={floor.id}
              onClick={() => scrollTo(floor.id)}
              initial={{ opacity: 0, x: 8 }}
              animate={drawn ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
              transition={{ delay: i * 0.09, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              aria-label={`Go to ${floor.sub} floor`}
              aria-current={isActive ? 'location' : undefined}
              className="group relative flex flex-col items-center gap-0.5"
              title={floor.sub}
            >
              <div
                className="w-10 h-10 flex flex-col items-center justify-center border transition-all duration-[250ms]"
                style={{
                  borderRadius: '2px',
                  background:   isActive ? 'var(--gold)'           : 'rgba(17,19,22,0.9)',
                  borderColor:  isActive ? 'var(--gold)'           : 'rgba(200,148,52,0.2)',
                  color:        isActive ? 'var(--ink)'            : 'rgba(245,243,239,0.45)',
                  boxShadow:    isActive ? '0 0 16px rgba(200,148,52,0.4)' : 'none',
                }}
              >
                <span className="font-display font-semibold text-f-xs leading-none">{floor.label}</span>
              </div>
              {i < floors.length - 1 && (
                <div className="w-px h-3" style={{ background: 'rgba(200,148,52,0.15)' }} />
              )}
            </motion.button>
          )
        })}
      </nav>

      {/* Mobile — horizontal segmented control above content */}
      <div
        className="lg:hidden sticky z-30 px-4 py-2"
        style={{
          top: '64px',
          background: 'rgba(12,13,15,0.93)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(200,148,52,0.12)',
        }}
      >
        <div className="flex rounded" style={{ border: '1px solid rgba(200,148,52,0.15)', overflow: 'hidden' }}>
          {floors.map((floor) => {
            const isActive = active === floor.id
            return (
              <button
                key={floor.id}
                onClick={() => scrollTo(floor.id)}
                aria-current={isActive ? 'location' : undefined}
                className="flex-1 py-2 text-f-xs font-medium transition-all duration-[250ms]"
                style={{
                  background: isActive ? 'var(--gold)'                 : 'transparent',
                  color:      isActive ? 'var(--ink)'                  : 'rgba(245,243,239,0.45)',
                  fontSize:   '11px',
                }}
              >
                <span className="font-display font-semibold">{floor.label}</span>
                <span className="block" style={{ fontSize: '10px', opacity: 0.8 }}>{floor.sub}</span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
