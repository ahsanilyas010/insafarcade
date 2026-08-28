import type { Metadata } from 'next'
import { Fraunces, Inter_Tight } from 'next/font/google'
import './globals.css'
import { site } from '@/content'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-fraunces',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://insafarcade2.com'),
  title:        site.seo.title,
  description: site.seo.description,
  openGraph: {
    title:       site.seo.title,
    description: site.seo.description,
    images:      [{ url: site.seo.ogImage, width: 1200, height: 630 }],
    type:        'website',
    locale:      'en_PK',
    siteName:    site.developer,
  },
  twitter: {
    card:        'summary_large_image',
    title:       site.seo.title,
    description: site.seo.description,
    images:      [site.seo.ogImage],
  },
  other: {
    'application/ld+json': JSON.stringify([
      {
        '@context':   'https://schema.org',
        '@type':      'Residence',
        name:         site.name,
        description:  site.seo.description,
        address: {
          '@type':          'PostalAddress',
          streetAddress:    'Plot No. 14, Block B',
          addressLocality:  'B-17 (MPCHS)',
          addressRegion:    'Islamabad',
          addressCountry:   'PK',
        },
        telephone: site.phone,
      },
      {
        '@context':   'https://schema.org',
        '@type':      'Organization',
        name:         site.developer,
        url:          '',
        telephone:    site.phone,
        address: {
          '@type':          'PostalAddress',
          streetAddress:    'Plot No. 14, Block B',
          addressLocality:  'B-17 (MPCHS)',
          addressRegion:    'Islamabad',
          addressCountry:   'PK',
        },
      },
    ]),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body className="font-sans bg-stone text-ink">
        {children}
      </body>
    </html>
  )
}
