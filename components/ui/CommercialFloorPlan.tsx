'use client'

import { motion } from 'framer-motion'

const GOLD   = 'rgba(200,148,52,1)'
const GOLD_D = 'rgba(200,148,52,0.18)'
const SLATE  = 'rgba(245,243,239,0.45)'
const STONE  = 'rgba(245,243,239,0.85)'
const BG2    = '#111210'

type Unit = {
  id: string
  label: string
  area: string
  x: number
  y: number
  w: number
  h: number
  isOffice?: boolean
  isLobby?: boolean
}

const W = 1160
const H = 480
const P = 0  // no padding — full-bleed

// Row 1 — shops (y=0..270)
const SH = 270
// Row 2 — offices + service (y=270..420)
const OH = 150

// Widths for row 1 (total = W):
// 01(large)=155, 02(large)=155, 03=120, 04=120, lobby=140, 05=120, 06=120, 07=120, 08=110
const L350 = 155
const L235 = 120
const LBY  = 130
// Right shops fill remaining: 1160 - 155-155-120-120-130 = 480; split 4 shops: 120+120+120+120=480 ✓

const UNITS: Unit[] = [
  { id:'01', label:'Shop',   area:'350 sqft', x:0,                       y:0,  w:L350,           h:SH },
  { id:'02', label:'Shop',   area:'350 sqft', x:L350,                    y:0,  w:L350,           h:SH },
  { id:'03', label:'Shop',   area:'235 sqft', x:L350*2,                  y:0,  w:L235,           h:SH },
  { id:'04', label:'Shop',   area:'235 sqft', x:L350*2+L235,             y:0,  w:L235,           h:SH },
  // Lobby
  { id:'',   label:'Lobby',  area:'',         x:L350*2+L235*2,           y:0,  w:LBY,            h:SH, isLobby:true },
  { id:'05', label:'Shop',   area:'235 sqft', x:L350*2+L235*2+LBY,      y:0,  w:L235,           h:SH },
  { id:'06', label:'Shop',   area:'235 sqft', x:L350*2+L235*2+LBY+L235,      y:0, w:L235,       h:SH },
  { id:'07', label:'Shop',   area:'235 sqft', x:L350*2+L235*2+LBY+L235*2,    y:0, w:L235,       h:SH },
  { id:'08', label:'Shop',   area:'235 sqft', x:L350*2+L235*2+LBY+L235*3,    y:0, w:W-(L350*2+L235*2+LBY+L235*3), h:SH },
]

// Row 2
const OFF_W = 200
const OFF_X1 = L350*2+L235*2   // align under lobby area roughly
const OFF_X2 = OFF_X1 + OFF_W

const OFFICES: Unit[] = [
  { id:'09', label:'Office', area:'230 sqft', x:0,               y:SH, w:OFF_W,          h:OH, isOffice:true },
  { id:'10', label:'Office', area:'230 sqft', x:OFF_W,           y:SH, w:OFF_W,          h:OH, isOffice:true },
]

const ALL_UNITS = [...UNITS, ...OFFICES]

export default function CommercialFloorPlan() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      style={{ background: BG2, position: 'relative', overflow: 'hidden' }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="First floor commercial layout — 8 shops and 2 offices"
        style={{ display: 'block' }}
      >
        {/* Background */}
        <rect width={W} height={H} fill={BG2} />

        {/* Outer building border */}
        <rect x={0} y={0} width={W} height={SH+OH} fill="none" stroke={GOLD} strokeWidth="1.5" />

        {/* Row-divider line */}
        <line x1={0} y1={SH} x2={W} y2={SH} stroke={GOLD_D} strokeWidth="1" />

        {/* All units */}
        {ALL_UNITS.map((u) => (
          <g key={u.id || u.label + u.x}>
            {/* Cell fill */}
            <rect
              x={u.x} y={u.y} width={u.w} height={u.h}
              fill={u.isLobby ? 'rgba(200,148,52,0.06)' : u.isOffice ? 'rgba(200,148,52,0.04)' : 'transparent'}
            />
            {/* Cell border */}
            <rect
              x={u.x} y={u.y} width={u.w} height={u.h}
              fill="none" stroke={u.isLobby ? GOLD : GOLD_D} strokeWidth={u.isLobby ? 1 : 1}
            />

            {u.isLobby ? (
              <>
                {/* Lobby label */}
                <text x={u.x + u.w/2} y={u.y + 44} textAnchor="middle" fill={GOLD} fontSize="11" fontWeight="600" letterSpacing="1.5" style={{ fontFamily: 'var(--font-geist-mono, monospace)', textTransform: 'uppercase' }}>LOBBY</text>
                {/* Lift box */}
                <rect x={u.x + u.w/2 - 22} y={u.y + 56} width={44} height={52} fill="rgba(200,148,52,0.12)" stroke={GOLD} strokeWidth="1" />
                <text x={u.x + u.w/2} y={u.y + 87} textAnchor="middle" fill={GOLD} fontSize="10" fontWeight="500" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>LIFT</text>
                {/* Stair hatch */}
                <rect x={u.x + u.w/2 - 22} y={u.y + 118} width={44} height={36} fill="none" stroke={GOLD_D} strokeWidth="1" />
                {[0,1,2,3,4,5].map(i => (
                  <line key={i} x1={u.x + u.w/2 - 22} y1={u.y + 118 + i*6} x2={u.x + u.w/2 + 22} y2={u.y + 118 + i*6} stroke={GOLD_D} strokeWidth="0.8" />
                ))}
                <text x={u.x + u.w/2} y={u.y + 170} textAnchor="middle" fill={SLATE} fontSize="9" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>STAIRS</text>

                {/* Parking label below lobby */}
                <text x={u.x + u.w/2} y={SH + OH/2 - 8} textAnchor="middle" fill={SLATE} fontSize="10" letterSpacing="1" style={{ fontFamily: 'var(--font-geist-mono, monospace)', textTransform:'uppercase' }}>ENTRANCE</text>
                <text x={u.x + u.w/2} y={SH + OH/2 + 10} textAnchor="middle" fill={GOLD} fontSize="9" style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>↓ Main Access</text>
              </>
            ) : u.id ? (
              <>
                {/* Unit number */}
                <text
                  x={u.x + 14} y={u.y + 28}
                  fill={GOLD} fontSize="13" fontWeight="700"
                  style={{ fontFamily: 'var(--font-fraunces, Georgia, serif)' }}
                >
                  {u.id}
                </text>
                {/* Type */}
                <text
                  x={u.x + u.w/2} y={u.y + u.h/2 - 14}
                  textAnchor="middle" fill={u.isOffice ? 'rgba(200,148,52,0.7)' : SLATE}
                  fontSize="10" letterSpacing="1.5"
                  style={{ fontFamily: 'var(--font-geist-mono, monospace)', textTransform:'uppercase' }}
                >
                  {u.label}
                </text>
                {/* Area */}
                <text
                  x={u.x + u.w/2} y={u.y + u.h/2 + 8}
                  textAnchor="middle" fill={STONE} fontSize="12" fontWeight="600"
                  style={{ fontFamily: 'var(--font-fraunces, Georgia, serif)' }}
                >
                  {u.area}
                </text>
              </>
            ) : null}
          </g>
        ))}

        {/* Road label */}
        <text x={W/2} y={H - 14} textAnchor="middle" fill={SLATE} fontSize="10" letterSpacing="2" style={{ fontFamily: 'var(--font-geist-mono, monospace)', textTransform:'uppercase' }}>
          ↓  ROAD FRONTAGE  ↓
        </text>

        {/* Multi Club label on right */}
        <text
          x={W - 8} y={SH/2}
          textAnchor="middle" fill={SLATE} fontSize="9" letterSpacing="1.5"
          transform={`rotate(90, ${W - 8}, ${SH/2})`}
          style={{ fontFamily: 'var(--font-geist-mono, monospace)', textTransform:'uppercase' }}
        >
          Multi Club Islamabad →
        </text>
      </svg>

      {/* Legend */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(200,148,52,0.18)', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { color: GOLD,              label: 'Lobby / Lift' },
          { color: 'rgba(245,243,239,0.45)', label: '8 Shops (230–350 sqft)' },
          { color: 'rgba(200,148,52,0.5)',   label: '2 Offices (230 sqft)' },
        ].map(l => (
          <div key={l.label} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <div style={{ width:10, height:10, background:l.color, borderRadius:1 }} />
            <span style={{ fontSize:10, color:SLATE, fontFamily:'var(--font-geist-mono, monospace)', letterSpacing:'0.05em', textTransform:'uppercase' }}>{l.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
