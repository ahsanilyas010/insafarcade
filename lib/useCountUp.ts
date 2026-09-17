import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp(target: number, duration = 1.4) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || target === 0) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return { value, ref }
}
