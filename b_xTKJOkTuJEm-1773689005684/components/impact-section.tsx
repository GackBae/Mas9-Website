"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import { geoAlbersUsa, geoPath } from "d3-geo"
import { feature } from "topojson-client"

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const SCHOOL_PINS = [
  { id: 1,  city: "Los Angeles",    state: "CA", coords: [-118.24, 34.05] as [number,number] },
  { id: 2,  city: "San Francisco",  state: "CA", coords: [-122.42, 37.77] as [number,number] },
  { id: 3,  city: "San Diego",      state: "CA", coords: [-117.16, 32.72] as [number,number] },
  { id: 4,  city: "Sacramento",     state: "CA", coords: [-121.49, 38.58] as [number,number] },
  { id: 5,  city: "Houston",        state: "TX", coords: [-95.37,  29.76] as [number,number] },
  { id: 6,  city: "Dallas",         state: "TX", coords: [-96.80,  32.78] as [number,number] },
  { id: 7,  city: "Austin",         state: "TX", coords: [-97.74,  30.27] as [number,number] },
  { id: 8,  city: "San Antonio",    state: "TX", coords: [-98.49,  29.42] as [number,number] },
  { id: 9,  city: "New York City",  state: "NY", coords: [-74.01,  40.71] as [number,number] },
  { id: 10, city: "Buffalo",        state: "NY", coords: [-78.88,  42.89] as [number,number] },
  { id: 11, city: "Miami",          state: "FL", coords: [-80.19,  25.76] as [number,number] },
  { id: 12, city: "Orlando",        state: "FL", coords: [-81.38,  28.54] as [number,number] },
  { id: 13, city: "Tampa",          state: "FL", coords: [-82.46,  27.95] as [number,number] },
  { id: 14, city: "Jacksonville",   state: "FL", coords: [-81.66,  30.33] as [number,number] },
  { id: 15, city: "Chicago",        state: "IL", coords: [-87.63,  41.88] as [number,number] },
  { id: 16, city: "Seattle",        state: "WA", coords: [-122.33, 47.61] as [number,number] },
  { id: 17, city: "Phoenix",        state: "AZ", coords: [-112.07, 33.45] as [number,number] },
  { id: 18, city: "Tucson",         state: "AZ", coords: [-110.97, 32.22] as [number,number] },
  { id: 19, city: "Atlanta",        state: "GA", coords: [-84.39,  33.75] as [number,number] },
  { id: 20, city: "Columbus",       state: "OH", coords: [-82.99,  39.96] as [number,number] },
  { id: 21, city: "Cleveland",      state: "OH", coords: [-81.69,  41.50] as [number,number] },
  { id: 22, city: "Philadelphia",   state: "PA", coords: [-75.17,  39.95] as [number,number] },
  { id: 23, city: "Pittsburgh",     state: "PA", coords: [-79.99,  40.44] as [number,number] },
  { id: 24, city: "Detroit",        state: "MI", coords: [-83.05,  42.33] as [number,number] },
  { id: 25, city: "Denver",         state: "CO", coords: [-104.99, 39.74] as [number,number] },
  { id: 26, city: "Las Vegas",      state: "NV", coords: [-115.14, 36.17] as [number,number] },
  { id: 27, city: "Portland",       state: "OR", coords: [-122.68, 45.52] as [number,number] },
  { id: 28, city: "Minneapolis",    state: "MN", coords: [-93.27,  44.98] as [number,number] },
  { id: 29, city: "Kansas City",    state: "MO", coords: [-94.58,  39.10] as [number,number] },
  { id: 30, city: "St. Louis",      state: "MO", coords: [-90.20,  38.63] as [number,number] },
  { id: 31, city: "Charlotte",      state: "NC", coords: [-80.84,  35.23] as [number,number] },
  { id: 32, city: "Raleigh",        state: "NC", coords: [-78.64,  35.78] as [number,number] },
  { id: 33, city: "Nashville",      state: "TN", coords: [-86.78,  36.16] as [number,number] },
  { id: 34, city: "Memphis",        state: "TN", coords: [-90.05,  35.15] as [number,number] },
  { id: 35, city: "Boston",         state: "MA", coords: [-71.06,  42.36] as [number,number] },
  { id: 36, city: "Indianapolis",   state: "IN", coords: [-86.16,  39.77] as [number,number] },
  { id: 37, city: "Milwaukee",      state: "WI", coords: [-87.91,  43.04] as [number,number] },
  { id: 38, city: "Salt Lake City", state: "UT", coords: [-111.89, 40.76] as [number,number] },
  { id: 39, city: "Baltimore",      state: "MD", coords: [-76.61,  39.29] as [number,number] },
  { id: 40, city: "Albuquerque",    state: "NM", coords: [-106.65, 35.08] as [number,number] },
  { id: 41, city: "New Orleans",    state: "LA", coords: [-90.07,  29.95] as [number,number] },
  { id: 42, city: "Oklahoma City",  state: "OK", coords: [-97.52,  35.47] as [number,number] },
  { id: 43, city: "Omaha",          state: "NE", coords: [-95.93,  41.26] as [number,number] },
  { id: 44, city: "Louisville",     state: "KY", coords: [-85.76,  38.25] as [number,number] },
  { id: 45, city: "Birmingham",     state: "AL", coords: [-86.80,  33.52] as [number,number] },
  { id: 46, city: "Richmond",       state: "VA", coords: [-77.43,  37.54] as [number,number] },
  { id: 47, city: "Hartford",       state: "CT", coords: [-72.69,  41.76] as [number,number] },
  { id: 48, city: "Boise",          state: "ID", coords: [-116.20, 43.62] as [number,number] },
]

type Pin = { id: number; x: number; y: number; city: string; state: string }

const CONNECTIONS: [number, number][] = [
  [1, 2],   [2, 27],  [27, 16], [16, 48],
  [1, 26],  [26, 17], [17, 25], [25, 38],
  [3, 17],  [17, 40], [40, 8],
  [5, 6],   [6, 7],   [6, 42],  [42, 29], [29, 30],
  [15, 28], [15, 37], [15, 36], [15, 24],
  [36, 20], [20, 22], [22, 9],  [9, 35],  [9, 47],
  [39, 22], [23, 24], [24, 37],
  [19, 33], [33, 34], [34, 41], [19, 45],
  [11, 12], [12, 13], [13, 14], [14, 19],
  [30, 43], [43, 28], [28, 37],
  [25, 29], [29, 15], [30, 19],
  [35, 47], [44, 33], [46, 31], [31, 32],
]

export function ImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [statePaths, setStatePaths] = useState<string[]>([])
  const [nationPath, setNationPath] = useState("")
  const [pins, setPins] = useState<Pin[]>([])
  const [mapWidth, setMapWidth] = useState(960)
  const [hoveredPin, setHoveredPin] = useState<number | null>(null)
  const mapHeight = Math.round(mapWidth * 0.58)

  const buildMap = useCallback(async (w: number) => {
    if (w < 100) return
    const h = Math.round(w * 0.58)
    try {
      const us = await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then(r => r.json())
      const projection = geoAlbersUsa().scale(w * 1.3).translate([w / 2, h / 2])
      const pathGen = geoPath().projection(projection)
      const states = feature(us as any, (us as any).objects.states) as any
      const nation = feature(us as any, (us as any).objects.nation) as any
      setStatePaths(states.features.map((f: any) => pathGen(f) ?? ""))
      setNationPath(pathGen(nation) ?? "")
      const projected: Pin[] = SCHOOL_PINS.map(loc => {
        const p = projection(loc.coords)
        if (!p) return null
        return { id: loc.id, x: p[0], y: p[1], city: loc.city, state: loc.state }
      }).filter(Boolean) as Pin[]
      setPins(projected)
    } catch (e) {
      console.error("Failed to load map", e)
    }
  }, [])

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      const w = containerRef.current.offsetWidth
      setMapWidth(w)
    }
    update()
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    buildMap(mapWidth)
  }, [mapWidth, buildMap])

  return (
    <section id="impact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_20%_15%,rgba(225,29,29,0.08)_0%,transparent_70%)]" />
      <div className="absolute -bottom-28 -right-20 w-[560px] h-[360px] bg-[radial-gradient(ellipse,rgba(148,163,184,0.18)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.25fr] gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm p-7 md:p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/20 bg-[#E11D1D]/8 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#E11D1D] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D1D] animate-pulse" />
              Live Network Metrics
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-950 leading-[0.98] tracking-tight mb-5">
              Powering Schools
              <br />
              <span className="text-[#E11D1D]">Across America</span>
            </h2>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-9 max-w-md">
              From coast to coast, MAS9 helps martial arts schools grow, automate operations, and connect students at scale.
            </p>

            <div className="space-y-3">
              {[
                { end: 30,  suffix: "+",  label: "States",   sub: "Active operational coverage", pct: 63, tag: "63% of U.S." },
                { end: 500, suffix: "+",  label: "Schools",  sub: "Growing with MAS9",            pct: 82, tag: "+120 this quarter" },
                { end: 50,  suffix: "K+", label: "Students", sub: "Managed every month",          pct: 91, tag: "+8K this month" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-4 hover:border-[#E11D1D]/30 hover:shadow-[0_6px_28px_rgba(225,29,29,0.09)] transition-all duration-300 cursor-default"
                >
                  {/* Top row: label + tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-gray-500">
                      {stat.label}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-500 font-semibold tracking-tight">
                      ↑ {stat.tag}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="text-[2.8rem] font-black tabular-nums text-gray-950 leading-none tracking-tight mb-2 font-mono">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>

                  {/* Sub label */}
                  <div className="text-[11px] text-gray-400 mb-3">{stat.sub}</div>

                  {/* Animated progress bar */}
                  <div className="h-[3px] bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#E11D1D] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 1.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.08)] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[11px] font-mono text-gray-400 tracking-widest">mas9-map.live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-gray-400 tracking-widest">LIVE</span>
              </div>
            </div>

            <div className="relative flex-1 flex items-center p-4 md:p-6" ref={containerRef}>
            <svg
              viewBox={`0 0 ${mapWidth} ${mapHeight}`}
              width={mapWidth}
              height={mapHeight}
              className="w-full h-auto"
            >
              {nationPath && (
                <path
                  d={nationPath}
                  fill="rgba(225,29,29,0.03)"
                  stroke="rgba(0,0,0,0.13)"
                  strokeWidth={1.5}
                />
              )}
              {statePaths.map((d, i) => d && (
                <path
                  key={i}
                  d={d}
                  fill="rgba(225,29,29,0.02)"
                  stroke="rgba(0,0,0,0.07)"
                  strokeWidth={0.5}
                />
              ))}
              {/* Static arc tracks */}
              {CONNECTIONS.map(([fromId, toId], i) => {
                const from = pins.find(p => p.id === fromId)
                const to   = pins.find(p => p.id === toId)
                if (!from || !to) return null
                const mx = (from.x + to.x) / 2
                const my = (from.y + to.y) / 2
                const dx = to.x - from.x, dy = to.y - from.y
                const curve = Math.sqrt(dx*dx + dy*dy) * 0.22
                return (
                  <path
                    key={`track-${i}`}
                    d={`M ${from.x},${from.y} Q ${mx},${my - curve} ${to.x},${to.y}`}
                    stroke="rgba(225,29,29,0.12)"
                    strokeWidth={0.6}
                    fill="none"
                  />
                )
              })}

              {/* Traveling arc segments */}
              {CONNECTIONS.map(([fromId, toId], i) => {
                const from = pins.find(p => p.id === fromId)
                const to   = pins.find(p => p.id === toId)
                if (!from || !to) return null
                const mx = (from.x + to.x) / 2
                const my = (from.y + to.y) / 2
                const dx = to.x - from.x, dy = to.y - from.y
                const curve = Math.sqrt(dx*dx + dy*dy) * 0.22
                return (
                  <motion.path
                    key={`seg-${i}`}
                    d={`M ${from.x},${from.y} Q ${mx},${my - curve} ${to.x},${to.y}`}
                    stroke="#E11D1D"
                    strokeWidth={1.5}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.25, pathOffset: -0.25 } as any}
                    animate={{ pathLength: 0.25, pathOffset: [-0.25, 1.0] } as any}
                    transition={{
                      duration: 2.2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: "easeInOut",
                    }}
                  />
                )
              })}

              {/* Interactive pin groups */}
              {pins.map((pin, i) => (
                <g
                  key={`pin-${pin.id}`}
                  onMouseEnter={() => setHoveredPin(pin.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                  style={{ cursor: "pointer" }}
                >
                  {hoveredPin === pin.id && (
                    <>
                      <circle cx={pin.x} cy={pin.y} r={18} fill="rgba(225,29,29,0.06)" />
                      <circle cx={pin.x} cy={pin.y} r={10} fill="rgba(225,29,29,0.12)" stroke="rgba(225,29,29,0.35)" strokeWidth={1} />
                      {/* Tooltip */}
                      <rect
                        x={pin.x - 36}
                        y={pin.y - 44}
                        width={72}
                        height={26}
                        fill="rgba(255,255,255,0.97)"
                        stroke="rgba(0,0,0,0.12)"
                        strokeWidth={0.5}
                        rx={4}
                      />
                      <text x={pin.x} y={pin.y - 34} textAnchor="middle" fill="#111" fontSize={7} fontWeight="700" fontFamily="monospace">{pin.city}</text>
                      <text x={pin.x} y={pin.y - 24} textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize={6} fontFamily="monospace">{pin.state}</text>
                    </>
                  )}
                  <motion.circle
                    cx={pin.x}
                    cy={pin.y}
                    r={hoveredPin === pin.id ? 4 : 2.5}
                    fill={hoveredPin === pin.id ? "#E11D1D" : "#E11D1D"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: hoveredPin === pin.id ? 1 : 0.7 }}
                    transition={{ delay: 0.3 + i * 0.03, duration: 0.3, type: "spring" }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  )
}
