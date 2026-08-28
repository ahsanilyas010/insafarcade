'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  formatted?: boolean
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({
  target,
  duration = 900,
  prefix = '',
  suffix = '',
  className = '',
  formatted = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isInView || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.round(easeOut(progress) * target)
      setValue(current)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  const display = formatted ? value.toLocaleString('en-PK') : value.toString()

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{display}{suffix}
    </span>
  )
}
