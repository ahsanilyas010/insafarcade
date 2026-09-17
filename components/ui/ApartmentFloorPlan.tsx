'use client'

import { motion } from 'framer-motion'

const GOLD   = 'rgba(200,148,52,1)'
const GOLD_D = 'rgba(200,148,52,0.18)'
const SLATE  = 'rgba(245,243,239,0.45)'
const STONE  = 'rgba(245,243,239,0.85)'
const BG     = '#0C0D0F'

const W = 900
const H = 480

// Layout:
// Left column: APT 01 (top) + APT 02 (bottom) — 750 sqft each
// Centre: lobby + lift/stairs corridor
// Right column: APT 03 (top) + APT 04 (bottom) — 780 sqft each

const APT_W   = 340
const LOBBY_W = 220
const APT_H   = 220

const LEFT_X  = 0
const LOBBY_X = APT_W
const RIGHT_X = APT_W + LOBBY_W

const TOP_Y    = 0
const BOTTOM_Y = APT_H

export default function ApartmentFloorPlan() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      style={{ background: BG, overflow: 'hidden' }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Typical residential floor plan showing 4 apartments with central lobby and lift"
        style={{ display: 'block' }}
      >
        <rect width={W} height={H} fill={BG} />

        {/* Building outline */}
        <rect x={0} y={0} width={APT_W*2+LOBBY_W} height={APT_H*2} fill="none" stroke={GOLD} strokeWidth="1.5" />

        {/* Internal walls */}
        {/* Horizontal midline */}
        <line x1={0} y1={APT_H} x2={APT_W*2+LOBBY_W} y2={APT_H} stroke={GOLD_D} strokeWidth="1" />
        {/* Left vertical (left col / lobby divide) */}
        <line x1={APT_W} y1={0} x2={APT_W} y2={APT_H*2} stroke={GOLD_D} strokeWidth="1" />
        {/* Right vertical (lobby / right col divide) */}
        <line x1={APT_W+LOBBY_W} y1={0} x2={APT_W+LOBBY_W} y2={APT_H*2} stroke={GOLD_D} strokeWidth="1" />

        {/* APT 01 — top left — 750 sqft */}
        <AptCell x={LEFT_X} y={TOP_Y} w={APT_W} h={APT_H} id="01" area="750 sqft gross" net="647 sqft net" />

        {/* APT 02 — bottom left — 750 sqft */}
        <AptCell x={LEFT_X} y={BOTTOM_Y} w={APT_W} h={APT_H} id="02" area="750 sqft gross" net="647 sqft net" />

        {/* APT 03 — top right — 780 sqft */}
        <AptCell x={RIGHT_X} y={TOP_Y} w={W-RIGHT_X} h={APT_H} id="03" area="780 sqft gross" net="678 sqft net" />

        {/* APT 04 — bottom right — 780 sqft */}
        <AptCell x={RIGHT_X} y={BOTTOM_Y} w={W-RIGHT_X} h={APT_H} id="04" area="780 sqft gross" net="678 sqft net" />

        {/* Central lobby column */}
        <rect x={LOBBY_X} y={0} width={LOBBY_W} height={APT_H*2} fill="rgba(200,148,52,0.05)" />

        {/* Lobby label */}
        <text x={LOBBY_X + LOBBY_W/2} y={24} textAnchor="middle" fill={GOLD} fontSize="10" letterSpacing="2" style={{ fontFamily:'var(--font-geist-mono,monospace)', textTransform:'uppercase' }}>Central Lobby</text>
        <text x={LOBBY_X + LOBBY_W/2} y={38} textAnchor="middle" fill={SLATE} fontSize="9" style={{ fontFamily:'var(--font-geist-mono,monospace)' }}>7′-0″ wide</text>

        {/* Lift box — top half of lobby */}
        <rect x={LOBBY_X + LOBBY_W/2 - 32} y={52} width={64} height={70} fill="rgba(200,148,52,0.12)" stroke={GOLD} strokeWidth="1" />
        <text x={LOBBY_X + LOBBY_W/2} y={82} textAnchor="middle" fill={GOLD} fontSize="11" fontWeight="600" style={{ fontFamily:'var(--font-geist-mono,monospace)' }}>LIFT</text>
        <text x={LOBBY_X + LOBBY_W/2} y={96} textAnchor="middle" fill={SLATE} fontSize="8" style={{ fontFamily:'var(--font-geist-mono,monospace)' }}>PASSENGER</text>

        {/* Staircase — mid */}
        <rect x={LOBBY_X + LOBBY_W/2 - 32} y={132} width={64} height={86} fill="none" stroke={GOLD_D} strokeWidth="1" />
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
          <line key={i} x1={LOBBY_X+LOBBY_W/2-32} y1={132+i*7} x2={LOBBY_X+LOBBY_W/2+32} y2={132+i*7} stroke={GOLD_D} strokeWidth="0.7" />
        ))}
        <text x={LOBBY_X + LOBBY_W/2} y={234} textAnchor="middle" fill={SLATE} fontSize="9" style={{ fontFamily:'var(--font-geist-mono,monospace)', textTransform:'uppercase' }}>Staircase</text>

        {/* Bottom lobby — fire exit */}
        <text x={LOBBY_X + LOBBY_W/2} y={APT_H*2 - 40} textAnchor="middle" fill={SLATE} fontSize="9" letterSpacing="1" style={{ fontFamily:'var(--font-geist-mono,monospace)', textTransform:'uppercase' }}>Fire Exit</text>
        <text x={LOBBY_X + LOBBY_W/2} y={APT_H*2 - 26} textAnchor="middle" fill={GOLD} fontSize="12">↓</text>

        {/* Floor label */}
        <text x={W/2} y={H - 14} textAnchor="middle" fill={SLATE} fontSize="10" letterSpacing="2" style={{ fontFamily:'var(--font-geist-mono,monospace)', textTransform:'uppercase' }}>
          Typical floor — 2nd, 3rd &amp; 4th identical
        </text>
      </svg>

      {/* Legend */}
      <div style={{ padding:'10px 16px', borderTop:'1px solid rgba(200,148,52,0.18)', display:'flex', gap:'20px', flexWrap:'wrap' }}>
        {[
          { color: GOLD,                      label: 'Lobby / Lift / Stairs' },
          { color: 'rgba(245,243,239,0.45)',   label: 'Units 01–02 · 750 sqft gross' },
          { color: 'rgba(200,148,52,0.45)',    label: 'Units 03–04 · 780 sqft gross' },
        ].map(l => (
          <div key={l.label} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <div style={{ width:10, height:10, background:l.color, borderRadius:1 }} />
            <span style={{ fontSize:10, color:SLATE, fontFamily:'var(--font-geist-mono,monospace)', letterSpacing:'0.05em', textTransform:'uppercase' }}>{l.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function AptCell({ x, y, w, h, id, area, net }: { x:number; y:number; w:number; h:number; id:string; area:string; net:string }) {
  const isLarger = id === '03' || id === '04'
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={isLarger ? 'rgba(200,148,52,0.025)' : 'transparent'} />
      {/* Unit number */}
      <text x={x+14} y={y+26} fill={GOLD} fontSize="14" fontWeight="700" style={{ fontFamily:'var(--font-fraunces,Georgia,serif)' }}>
        {id}
      </text>
      {/* 2 Bed label */}
      <text x={x+w/2} y={y+h/2-20} textAnchor="middle" fill={SLATE} fontSize="10" letterSpacing="2" style={{ fontFamily:'var(--font-geist-mono,monospace)', textTransform:'uppercase' }}>
        2 Bed
      </text>
      {/* Area */}
      <text x={x+w/2} y={y+h/2} textAnchor="middle" fill={STONE} fontSize="14" fontWeight="600" style={{ fontFamily:'var(--font-fraunces,Georgia,serif)' }}>
        {area}
      </text>
      {/* Net area */}
      <text x={x+w/2} y={y+h/2+18} textAnchor="middle" fill={SLATE} fontSize="11" style={{ fontFamily:'var(--font-geist-mono,monospace)' }}>
        {net}
      </text>
      {/* Door arc suggestion */}
      <path d={`M ${x+18} ${y+h-4} Q ${x+18} ${y+h-24} ${x+36} ${y+h-4}`} fill="none" stroke={GOLD_D} strokeWidth="0.8" />
    </g>
  )
}
