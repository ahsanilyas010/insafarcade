'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { site, images } from '@/content'

const navLinks = [
  { label: 'Commercial', href: '#commercial' },
  { label: 'Apartments',  href: '#apartments' },
  { label: 'Payment',     href: '#payment' },
  { label: 'Location',    href: '#location' },
  { label: 'About',       href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(12,13,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,148,52,0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src={images.logo}
            alt={site.developer}
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            onError={() => {}}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-f-sm font-medium"
              style={{ color: 'rgba(245,243,239,0.75)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#enquiry" className="btn-primary text-f-sm py-2.5 px-5">
            Enquire
          </a>
          <a href={site.phoneTel} className="btn-ghost text-f-sm py-2.5 px-5">
            {site.phone}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ color: 'var(--stone)' }}
        >
          <span className="block w-5 h-0.5 mb-1.5 transition-all" style={{ background: 'currentColor', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
          <span className="block w-5 h-0.5 mb-1.5 transition-all" style={{ background: 'currentColor', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all" style={{ background: 'currentColor', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ background: 'rgba(12,13,15,0.97)', backdropFilter: 'blur(16px)', borderColor: 'rgba(200,148,52,0.15)' }}>
          <nav className="px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-f-base font-medium nav-link"
                style={{ color: 'rgba(245,243,239,0.8)' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              <a href="#enquiry" className="btn-primary flex-1 justify-center text-f-sm py-3" onClick={() => setMenuOpen(false)}>
                Enquire
              </a>
              <a href={site.phoneTel} className="btn-ghost flex-1 justify-center text-f-sm py-3">
                Call now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
