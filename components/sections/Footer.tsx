'use client'

import Image from 'next/image'
import { site, images } from '@/content'

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
      style={{ background: 'var(--ink)', borderTop: '1px solid rgba(221,216,208,0.1)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(221,216,208,0.1)' }}>
          {/* Brand */}
          <div>
            <Image
              src={images.logo}
              alt={site.developer}
              width={140}
              height={48}
              className="h-10 w-auto object-contain mb-5"
              onError={() => {}}
            />
            <p className="text-f-xs leading-relaxed" style={{ color: 'rgba(245,243,239,0.45)' }}>
              {site.developer}<br />
              {site.address}
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-f-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(245,243,239,0.35)', letterSpacing: '0.1em' }}>
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {quickNav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-f-sm nav-link"
                      style={{ color: 'rgba(245,243,239,0.55)' }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-f-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(245,243,239,0.35)', letterSpacing: '0.1em' }}>
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
              style={{ color: 'rgba(245,243,239,0.55)' }}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8">
          <p className="text-f-xs" style={{ color: 'rgba(245,243,239,0.3)' }}>
            © 2026 {site.developer}. All rights reserved.
          </p>
          <p className="text-f-xs italic" style={{ color: 'rgba(245,243,239,0.2)' }}>
            Prices and availability subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  )
}
