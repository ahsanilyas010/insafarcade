// content.ts — single source of truth for all copy, prices, and strings.
// Edit here to update any visible text or figure on the site.

export const site = {
  name:      'Insaf Arcade 2',
  tagline:   'Prime commercial & residential in B-17, Islamabad',
  developer: 'Insaf Arcadia Developers',
  address:   'Plot No. 14, Block B, B-17 (MPCHS), Islamabad',
  phone:     '0341 3223344',
  phoneTel:  'tel:+923413223344',
  whatsapp:  'https://wa.me/923413223344',
  email:     '',

  seo: {
    title:       'Insaf Arcade 2 — Shops, Offices & 2-Bed Apartments in B-17 Islamabad',
    description: 'Buy a shop, office, or 2-bed apartment in Insaf Arcade 2, B-17 MPCHS Islamabad. 30-month installment plan. Developed by Insaf Arcadia Developers.',
    ogImage:     '/images/hero-building.jpg',
  },
}

// ─── Hero stats ──────────────────────────────────────────────────────────────
export const heroStats = [
  { value: '50,000', unit: 'PKR/sqft', label: 'Commercial rate' },
  { value: '17,000', unit: 'PKR/sqft', label: 'Residential rate' },
  { value: '30',     unit: 'months',   label: 'Installment plan' },
]

// ─── Building overview ────────────────────────────────────────────────────────
export const building = {
  floors:           4,
  commercialUnits:  10,
  apartmentsPerFloor: 4,
  residentialFloors: 3,
  lift:             true,
  parking:          'Dedicated commercial parking area',
  adjacentLandmark: 'Multi Club Islamabad',
}

// ─── Location anchors ─────────────────────────────────────────────────────────
// logo: Clearbit CDN URL — loaded client-side by the browser.
// initials: shown if the logo fails to load.
export const locationAnchors = [
  { name: 'D. Watson Pharmacy',            note: 'Two branches nearby',   logo: 'https://logo.clearbit.com/dwatson.com.pk',        initials: 'DW' },
  { name: 'Broadway Pizza',                note: 'Active F&B footfall',   logo: 'https://logo.clearbit.com/broadwaypizza.com.pk',  initials: 'BP' },
  { name: 'Pizza Montana',                 note: '',                       logo: 'https://logo.clearbit.com/pizzamontana.pk',       initials: 'PM' },
  { name: 'Pasta la Vita',                 note: '',                       logo: '',                                                initials: 'PV' },
  { name: 'Karachi Al-Noorani Biryani & Pulao', note: '',                 logo: '',                                                initials: 'KA' },
  { name: 'Al Baraka Bank',                note: 'Financial services',    logo: 'https://logo.clearbit.com/albaraka.com.pk',       initials: 'AB' },
  { name: 'Multi Club Islamabad',          note: 'Directly adjacent',     logo: 'https://logo.clearbit.com/multiclub.com.pk',      initials: 'MC' },
  { name: 'Jamia Masjid Abu Bakar',        note: '',                       logo: '',                                                initials: 'JM' },
]

// ─── Commercial units (1st floor) ────────────────────────────────────────────
// Prices printed verbatim from sales brochure — do not recompute.
// NOTE FOR CLIENT: The brochure labels the possession column "20%" but the
// actual figures are ~14% of the total price. We have labelled it "On possession"
// with no percentage. Please confirm the correct label with your sales team.
export type CommercialUnit = {
  id:         number
  type:       'Shop' | 'Office'
  area:       number  // sqft
  rate:       number  // PKR/sqft
  price:      number  // PKR
  booking:    number  // 30%
  monthly:    number  // × 30
  possession: number  // on possession
  lumpSum:    number  // 10% discount
}

export const commercialUnits: CommercialUnit[] = [
  { id:  1, type: 'Shop',   area: 350, rate: 50000, price: 17500000, booking: 5250000, monthly: 326666, possession: 2450000, lumpSum: 15750000 },
  { id:  2, type: 'Shop',   area: 350, rate: 50000, price: 17500000, booking: 5250000, monthly: 326666, possession: 2450000, lumpSum: 15750000 },
  { id:  3, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  4, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  5, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  6, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  7, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  8, type: 'Shop',   area: 235, rate: 50000, price: 11750000, booking: 3525000, monthly: 219333, possession: 1645000, lumpSum: 10575000 },
  { id:  9, type: 'Office', area: 230, rate: 50000, price: 11500000, booking: 3450000, monthly: 214666, possession: 1610000, lumpSum: 10350000 },
  { id: 10, type: 'Office', area: 230, rate: 50000, price: 11500000, booking: 3450000, monthly: 214666, possession: 1610000, lumpSum: 10350000 },
]

// ─── Apartment units (2nd–4th floor, 4 units × 3 floors = 12 total) ──────────
// Units 1–6 are 750 sqft gross; units 7–12 are 780 sqft gross.
// Render as individual rows in the table.
export type ApartmentUnit = {
  id:         number
  type:       '2 Bed'
  areaGross:  number  // sqft gross
  areaNet:    number  // sqft net
  rate:       number
  price:      number
  booking:    number
  monthly:    number
  possession: number
  lumpSum:    number
}

export const apartmentUnits: ApartmentUnit[] = [
  { id:  1, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  2, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  3, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  4, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  5, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  6, type: '2 Bed', areaGross: 750, areaNet: 647, rate: 17000, price: 12750000, booking: 3825000, monthly: 238000, possession: 1785000, lumpSum: 11602500 },
  { id:  7, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
  { id:  8, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
  { id:  9, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
  { id: 10, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
  { id: 11, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
  { id: 12, type: '2 Bed', areaGross: 780, areaNet: 678, rate: 17000, price: 13260000, booking: 3978000, monthly: 247520, possession: 1856400, lumpSum: 11934000 },
]

// ─── Why invest ───────────────────────────────────────────────────────────────
export const whyInvestPoints = [
  { title: 'Strategic location',        body: 'Active commercial surroundings in one of Islamabad\'s fastest-growing sectors.' },
  { title: 'Consistent footfall',       body: 'Supported by established brands, pharmacies, F&B, and banking services nearby.' },
  { title: 'Practical unit planning',   body: 'Unit sizes and layouts suited to multiple business types and operators.' },
  { title: 'Flexible payment',          body: '30% booking, 30 monthly installments, with a 10% lump-sum discount option.' },
  { title: 'Strong rental yield',       body: 'Commercial occupancy demand driven by active neighbourhood foot traffic.' },
  { title: 'Long-term relevance',       body: 'Designed for lasting commercial utility, not short-cycle speculation.' },
  { title: 'Proven delivery record',    body: 'Backed by Insaf Arcadia Developers with multiple completed projects.' },
  { title: 'Dual-purpose investment',   body: 'Suitable for end users, rental investors, and overseas passive-income buyers.' },
]

// ─── Developer ────────────────────────────────────────────────────────────────
export const developer = {
  name: 'Insaf Arcadia Developers',
  about: `Insaf Arcadia Developers is a real estate development company with a track record in both residential and commercial project execution, including multiple residential units and the commercial project Insaf Plaza in Tarnol, Dokh Abbasi, and Sarai Kharboza. The development approach is rooted in location intelligence, practical design, and return-focused planning.`,
  philosophy: 'Successful developments are defined by location strength, smart planning, and sustainable returns. Every project balances commercial usability with long-term investment value.',
  mission:    'Develop well-planned residential and commercial projects that deliver strong rental yield, capital appreciation, and long-term market relevance through responsible execution.',
  vision:     'Establish Insaf Arcadia Developers as a trusted name in strategic real estate development, recognised for dependable delivery, market insight, and investment-grade projects.',
  priorProjects: [
    'Insaf Plaza, Tarnol',
    'Residential units, Dokh Abbasi',
    'Sarai Kharboza development',
  ],
}

// ─── Payment plan ─────────────────────────────────────────────────────────────
export const paymentPlan = {
  bookingPercent:  30,
  installments:    30,
  lumpSumDiscount: 10,
  note: 'Prices and availability subject to change. Confirm current rates and unit availability with the sales office.',
}

// ─── Floor plan images ────────────────────────────────────────────────────────
export const images = {
  hero:            '/images/hero-building.jpg',
  buildingAngle:   '/images/building-angle.jpg',
  planCommercial:  '/images/plan-commercial-first-floor.jpg',
  planApartments:  '/images/plan-apartments.jpg',
  plan3d750:       '/images/plan-3d-750.jpg',
  plan3d780:       '/images/plan-3d-780.jpg',
  logo:            '/images/logo-insaf-arcadia.png',
  map:             '/images/map-location.jpg',
}
