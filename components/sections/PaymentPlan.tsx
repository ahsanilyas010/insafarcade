'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { commercialUnits, apartmentUnits, paymentPlan } from '@/content'

type UnitOption = {
  id: string
  label: string
  price: number
  booking: number
  monthly: number
  possession: number
  lumpSum: number
}

const allUnits: UnitOption[] = [
  ...commercialUnits.map((u) => ({
    id:         `commercial-${u.id}`,
    label:      `Unit ${u.id.toString().padStart(2, '0')} · ${u.type} · ${u.area} sqft (1st floor)`,
    price:      u.price,
    booking:    u.booking,
    monthly:    u.monthly,
    possession: u.possession,
    lumpSum:    u.lumpSum,
  })),
  ...apartmentUnits.map((u) => ({
    id:         `apt-${u.id}`,
    label:      `Apt ${u.id.toString().padStart(2, '0')} · 2 Bed · ${u.areaGross} sqft (Residential)`,
    price:      u.price,
    booking:    u.booking,
    monthly:    u.monthly,
    possession: u.possession,
    lumpSum:    u.lumpSum,
  })),
]

function fmt(n: number) {
  return n.toLocaleString('en-PK')
}

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
}

export default function PaymentPlan() {
  const [selectedId, setSelectedId] = useState(allUnits[0].id)
  const [mode, setMode] = useState<'installment' | 'lumpsum'>('installment')

  const unit = allUnits.find((u) => u.id === selectedId) ?? allUnits[0]

  const rows = mode === 'installment'
    ? [
        { label: 'Booking (30%)',            value: unit.booking    },
        { label: 'Monthly installment',      value: unit.monthly    },
        { label: 'Months remaining',         value: paymentPlan.installments, isBare: true },
        { label: 'On possession',            value: unit.possession },
        { label: 'Total (installment plan)', value: unit.price      },
      ]
    : [
        { label: 'Lump-sum price (−10%)',    value: unit.lumpSum    },
        { label: 'Amount saved',             value: unit.price - unit.lumpSum },
        { label: 'Full list price',          value: unit.price      },
      ]

  return (
    <section
      id="payment"
      data-section="payment"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="Payment plan"
            headline="How it works"
            sub="30% booking secures your unit. Spread the balance over 30 monthly installments and pay the balance on possession — or take 10% off with a lump sum."
          />
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-14"
          style={{ border: '1px solid var(--border-gold)' }}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { step: '01', title: '30% booking',             desc: 'Secure your unit with a booking amount of 30% of the total price.' },
            { step: '02', title: '30 monthly installments', desc: 'Pay the balance in equal monthly installments over 30 months.' },
            { step: '03', title: 'Possession payment',      desc: 'Pay the final balance on handover. Or choose lump-sum for 10% off.' },
          ].map((s) => (
            <div
              key={s.step}
              className="px-6 py-8 gold-card"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <p className="font-display font-semibold text-f-lg tabular-nums" style={{ color: 'var(--gold)' }}>{s.step}</p>
              <p className="text-f-sm font-semibold mt-3 mb-2" style={{ color: 'var(--stone)' }}>{s.title}</p>
              <p className="text-f-sm" style={{ color: 'var(--slate)' }}>{s.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Interactive calculator */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-6">Payment calculator</p>

          {/* Unit selector */}
          <div className="mb-5">
            <label htmlFor="unit-select" className="text-f-xs font-medium block mb-2" style={{ color: 'var(--slate)' }}>
              Select unit
            </label>
            <select
              id="unit-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full px-4 py-3 text-f-sm font-medium"
              style={{
                background: 'var(--bg-3)',
                border: '1px solid var(--border)',
                color: 'var(--stone)',
                borderRadius: '2px',
                outline: 'none',
              }}
            >
              <optgroup label="Commercial (1st floor)">
                {allUnits.slice(0, 10).map((u) => (
                  <option key={u.id} value={u.id} style={{ background: 'var(--bg-2)' }}>{u.label}</option>
                ))}
              </optgroup>
              <optgroup label="Apartments (2nd–4th floor)">
                {allUnits.slice(10).map((u) => (
                  <option key={u.id} value={u.id} style={{ background: 'var(--bg-2)' }}>{u.label}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Toggle */}
          <div className="flex mb-8" style={{ border: '1px solid var(--border-gold)', borderRadius: '2px', overflow: 'hidden' }}>
            {(['installment', 'lumpsum'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="flex-1 py-2.5 text-f-xs font-semibold uppercase tracking-widest transition-all duration-200"
                style={{
                  background: mode === m ? 'var(--gold)' : 'transparent',
                  color:      mode === m ? 'var(--ink)'  : 'var(--slate)',
                  letterSpacing: '0.1em',
                }}
              >
                {m === 'installment' ? 'Installment plan' : 'Lump-sum (−10%)'}
              </button>
            ))}
          </div>

          {/* Output rows */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedId}-${mode}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex justify-between items-baseline py-4"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <span className="text-f-sm" style={{ color: 'var(--slate)' }}>{row.label}</span>
                  <span
                    className="font-display font-semibold tabular-nums text-f-md"
                    style={{ color: i === rows.length - 1 ? 'var(--gold)' : 'var(--stone)' }}
                  >
                    {(row as { isBare?: boolean }).isBare ? row.value : `PKR ${fmt(row.value as number)}`}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-f-xs mt-6 italic" style={{ color: 'rgba(245,243,239,0.25)' }}>
            {paymentPlan.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
