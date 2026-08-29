'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { commercialUnits, paymentPlan, images } from '@/content'

function fmt(n: number) {
  return n.toLocaleString('en-PK')
}

const fade = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
}

export default function CommercialUnits() {
  return (
    <section
      id="commercial"
      data-section="commercial"
      className="py-20 lg:py-28"
      style={{ background: 'var(--stone)', borderTop: '1px solid var(--concrete)' }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="1st Floor · Commercial"
            headline="Shops & offices"
            sub="10 units across 230–350 sqft. Central lobby with lift and staircase access. Dedicated commercial parking on one side, Multi Club Islamabad on the other."
          />
        </motion.div>

        {/* Floor plan */}
        <motion.div
          className="mb-12 overflow-hidden"
          style={{ border: '1px solid var(--concrete)', borderRadius: '2px' }}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ImagePlaceholder
            src={images.planCommercial}
            alt="First floor commercial layout plan showing shops 01–08 and offices 09–10"
            width={1200}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </motion.div>

        {/* Pricing table */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="table-scroll">
            {/* NOTE FOR CLIENT: The possession column was labelled "20%" in the
                source brochure, but the actual figures are ~14% of the total price.
                We have printed "On possession" with no percentage. Please confirm
                the correct label with your sales team before launch. */}
            <table className="pricing-table" aria-label="Commercial unit pricing">
              <caption className="text-f-xs text-left mb-3 pb-3" style={{ color: 'var(--slate)', captionSide: 'top' }}>
                First floor — shops and offices · All figures in PKR
              </caption>
              <thead>
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Type</th>
                  <th scope="col">Area (sqft)</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Booking 30%</th>
                  <th scope="col">Monthly ×30</th>
                  <th scope="col">On possession</th>
                  <th scope="col">Lump-sum (−10%)</th>
                </tr>
              </thead>
              <tbody>
                {commercialUnits.map((u, i) => (
                  <motion.tr
                    key={u.id}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.4) }}
                  >
                    <td style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'var(--font-fraunces)' }}>{u.id.toString().padStart(2, '0')}</td>
                    <td>{u.type}</td>
                    <td className="price-cell">{fmt(u.area)}</td>
                    <td className="price-cell">{fmt(u.rate)}</td>
                    <td className="price-cell" style={{ fontWeight: 600 }}>{fmt(u.price)}</td>
                    <td className="price-cell">{fmt(u.booking)}</td>
                    <td className="price-cell">{fmt(u.monthly)}</td>
                    <td className="price-cell">{fmt(u.possession)}</td>
                    <td className="price-cell" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>{fmt(u.lumpSum)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-f-xs mt-4 italic" style={{ color: 'var(--slate)' }}>
            {paymentPlan.note}
          </p>
        </motion.div>

        {/* Mobile summary cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:hidden">
          {commercialUnits.map((u) => (
            <div key={u.id} className="unit-card">
              <p className="text-f-xs font-medium" style={{ color: 'var(--slate)' }}>Unit {u.id.toString().padStart(2, '0')} · {u.type}</p>
              <p className="font-display font-semibold text-f-md mt-1 tabular-nums" style={{ color: 'var(--ink)' }}>
                {(u.price / 10000000).toFixed(2)} Cr
              </p>
              <p className="text-f-xs mt-1 tabular-nums" style={{ color: 'var(--slate)' }}>{u.area} sqft</p>
              <p className="text-f-xs mt-2 tabular-nums" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>
                PKR {fmt(u.monthly)}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
