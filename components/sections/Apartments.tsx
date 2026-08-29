'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { apartmentUnits, paymentPlan, images } from '@/content'

function fmt(n: number) {
  return n.toLocaleString('en-PK')
}

const fade = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0  },
}

export default function Apartments() {
  return (
    <section
      id="apartments"
      data-section="apartments"
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
            eyebrow="2nd–4th Floor · Residential"
            headline="2-Bed apartments"
            sub="Four units per floor across three floors — 12 apartments total. Two sizes: 750 sqft and 780 sqft gross. Each includes bedroom, lounge, kitchen, bath, and balcony."
          />
        </motion.div>

        {/* Floor plan + 3D layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
          <motion.div
            className="lg:col-span-2 overflow-hidden"
            style={{ border: '1px solid var(--concrete)', borderRadius: '2px' }}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ImagePlaceholder
              src={images.planApartments}
              alt="Residential floor plan showing apartments 01–04 with 7 ft central lobby and lift/stair core"
              width={900}
              height={560}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="px-5 py-4" style={{ borderTop: '1px solid var(--concrete)' }}>
              <p className="text-f-xs font-medium" style={{ color: 'var(--slate)' }}>Typical floor plan (2nd, 3rd & 4th identical) — 7′-0″ central lobby, lift & stairs at rear</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {([
              { src: images.plan3d750, alt: '750 sqft 3D apartment layout — Flats 01 & 02', label: '750 sqft gross · 647 sqft net' },
              { src: images.plan3d780, alt: '780 sqft 3D apartment layout — Flats 03 & 04', label: '780 sqft gross · 678 sqft net' },
            ] as const).map((plan) => (
              <motion.div
                key={plan.src}
                className="overflow-hidden flex-1"
                style={{ border: '1px solid var(--concrete)', borderRadius: '2px' }}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <ImagePlaceholder
                  src={plan.src}
                  alt={plan.alt}
                  width={420}
                  height={300}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="px-4 py-3" style={{ borderTop: '1px solid var(--concrete)' }}>
                  <p className="text-f-xs font-medium tabular-nums" style={{ color: 'var(--slate)' }}>{plan.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing table */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="table-scroll">
            {/* NOTE FOR CLIENT: The possession column was labelled "20%" in the
                source brochure, but the actual figures are ~14% of the total price.
                We have printed "On possession" with no percentage. Please confirm
                the correct label with your sales team before launch. */}
            <table className="pricing-table" aria-label="Apartment unit pricing">
              <caption className="text-f-xs text-left mb-3 pb-3" style={{ color: 'var(--slate)', captionSide: 'top' }}>
                2nd–4th floor — 2-bed apartments · All figures in PKR
              </caption>
              <thead>
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Type</th>
                  <th scope="col">Area gross</th>
                  <th scope="col">Area net</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Booking 30%</th>
                  <th scope="col">Monthly ×30</th>
                  <th scope="col">On possession</th>
                  <th scope="col">Lump-sum (−10%)</th>
                </tr>
              </thead>
              <tbody>
                {apartmentUnits.map((u, i) => (
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
                    <td className="price-cell">{fmt(u.areaGross)} sqft</td>
                    <td className="price-cell">{fmt(u.areaNet)} sqft</td>
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
          {[
            { label: 'Units 01–06', area: '750', net: '647', price: 12750000, monthly: 238000, lumpSum: 11602500 },
            { label: 'Units 07–12', area: '780', net: '678', price: 13260000, monthly: 247520, lumpSum: 11934000 },
          ].map((g) => (
            <div key={g.label} className="unit-card">
              <p className="text-f-xs font-medium" style={{ color: 'var(--slate)' }}>{g.label} · 2 Bed</p>
              <p className="font-display font-semibold text-f-md mt-1 tabular-nums" style={{ color: 'var(--ink)' }}>
                {(g.price / 10000000).toFixed(3)} Cr
              </p>
              <p className="text-f-xs mt-1 tabular-nums" style={{ color: 'var(--slate)' }}>{g.area} sqft gross</p>
              <p className="text-f-xs mt-2 tabular-nums" style={{ color: 'var(--gold-deep)', fontWeight: 600 }}>
                PKR {fmt(g.monthly)}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
