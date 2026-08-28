/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:        'var(--ink)',
        stone:      'var(--stone)',
        concrete:   'var(--concrete)',
        gold:       'var(--gold)',
        'gold-deep':'var(--gold-deep)',
        slate:      'var(--slate)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'f-xs':   ['13px', { lineHeight: '1.5' }],
        'f-sm':   ['15px', { lineHeight: '1.5' }],
        'f-base': ['17px', { lineHeight: '1.6' }],
        'f-md':   ['21px', { lineHeight: '1.4' }],
        'f-lg':   ['28px', { lineHeight: '1.25' }],
        'f-xl':   ['40px', { lineHeight: '1.1' }],
        'f-2xl':  ['64px', { lineHeight: '1.0' }],
        'f-3xl':  ['88px', { lineHeight: '0.95' }],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm:      '1px',
        md:      '2px',
        lg:      '2px',
        xl:      '2px',
        full:    '9999px',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
}
