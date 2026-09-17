// Shared animation variants and easing curves
export const ease = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)' },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleReveal = {
  hidden:  { opacity: 0, scale: 0.94, y: 16 },
  visible: { opacity: 1, scale: 1,    y: 0  },
}

export const slideLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0   },
}

export const slideRight = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0  },
}

export const lineReveal = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0 },
}

// Container that staggers its children
export const staggerContainer = (stagger = 0.07, delayChildren = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

// Viewport settings
export const viewport = { once: true, margin: '-80px' as const }
