'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { site } from '@/content'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const interestOptions = ['Shop', 'Office', 'Apartment'] as const
const sizeOptions = {
  Shop:      ['350 sqft', '235 sqft'],
  Office:    ['230 sqft'],
  Apartment: ['750 sqft (2 Bed)', '780 sqft (2 Bed)'],
}

const fade = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
}

export default function EnquiryForm() {
  const [interest, setInterest] = useState<typeof interestOptions[number]>('Shop')
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    if (!data.get('name'))  errs.name  = 'Please enter your name.'
    if (!data.get('phone')) errs.phone = 'Please enter a contact number.'
    if (!data.get('email')) errs.email = 'Please enter your email address.'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setState('submitting')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        body:   JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setState('success')
        formRef.current?.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <section
      id="enquiry"
      data-section="enquiry"
      className="py-20 lg:py-28"
      style={{ background: 'var(--stone)', borderTop: '1px solid var(--concrete)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: form */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Get in touch"
              headline="Enquire now"
              sub="Submit your interest and a member of our sales team will contact you within 24 hours."
            />

            {state === 'success' ? (
              <div className="p-6" style={{ background: 'var(--concrete)', borderRadius: '2px' }}>
                <p className="font-semibold text-f-base" style={{ color: 'var(--ink)' }}>Enquiry received</p>
                <p className="text-f-sm mt-2" style={{ color: 'var(--slate)' }}>Thank you. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div className="field-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    className="field-input"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  <label htmlFor="name" className="field-label">Full name *</label>
                  {errors.name && <p id="name-error" role="alert" className="text-f-xs mt-1" style={{ color: '#c0392b' }}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="field-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder=" "
                    inputMode="tel"
                    className="field-input"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  <label htmlFor="phone" className="field-label">Phone number *</label>
                  {errors.phone && <p id="phone-error" role="alert" className="text-f-xs mt-1" style={{ color: '#c0392b' }}>{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="field-wrapper">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    className="field-input"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  <label htmlFor="email" className="field-label">Email address *</label>
                  {errors.email && <p id="email-error" role="alert" className="text-f-xs mt-1" style={{ color: '#c0392b' }}>{errors.email}</p>}
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" className="text-f-xs font-medium block mb-2" style={{ color: 'var(--slate)' }}>
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value as typeof interestOptions[number])}
                    className="w-full px-4 py-3 text-f-sm field-input"
                    style={{ paddingTop: '12px' }}
                  >
                    {interestOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Unit size */}
                <div>
                  <label htmlFor="size" className="text-f-xs font-medium block mb-2" style={{ color: 'var(--slate)' }}>
                    Unit size
                  </label>
                  <select
                    id="size"
                    name="size"
                    className="w-full px-4 py-3 text-f-sm field-input"
                    style={{ paddingTop: '12px' }}
                  >
                    {sizeOptions[interest].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div className="field-wrapper">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder=" "
                    className="field-input resize-none"
                    style={{ paddingTop: '22px' }}
                  />
                  <label htmlFor="message" className="field-label">Message (optional)</label>
                </div>

                {state === 'error' && (
                  <p role="alert" className="text-f-xs" style={{ color: '#c0392b' }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="btn-primary w-full justify-center py-4"
                >
                  {state === 'submitting' ? 'Sending…' : 'Send enquiry'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8 pt-2 lg:pt-20"
          >
            <div>
              <p className="eyebrow mb-4">Sales office</p>
              <p className="text-f-base font-medium" style={{ color: 'var(--ink)' }}>{site.developer}</p>
              <p className="text-f-sm mt-2" style={{ color: 'var(--slate)' }}>{site.address}</p>
            </div>

            <div style={{ borderTop: '1px solid var(--concrete)', paddingTop: '24px' }}>
              <p className="eyebrow mb-4">Contact</p>
              <a href={site.phoneTel} className="block text-f-md font-display font-semibold mb-2" style={{ color: 'var(--ink)', textDecoration: 'none' }}>
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex mt-3"
              >
                WhatsApp us
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--concrete)', paddingTop: '24px' }}>
              <p className="eyebrow mb-4">Hours</p>
              <p className="text-f-sm" style={{ color: 'var(--slate)' }}>Mon–Sat, 9:00 AM – 7:00 PM</p>
              <p className="text-f-sm" style={{ color: 'var(--slate)' }}>Sunday, 11:00 AM – 5:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
