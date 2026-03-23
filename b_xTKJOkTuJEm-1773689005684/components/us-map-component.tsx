"use client"

import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { geoAlbersUsa } from "d3"

interface UserPin {
  id: number
  coordinates: [number, number] // [longitude, latitude]
  city: string
  state: string
  activeUsers: number
  growth: number
}

const USER_PINS: UserPin[] = [
  { id: 1, coordinates: [-87.6298, 41.8781], city: "Chicago", state: "IL", activeUsers: 1247, growth: 12.5 },
  { id: 2, coordinates: [-118.2437, 34.0522], city: "Los Angeles", state: "CA", activeUsers: 892, growth: 8.3 },
  { id: 3, coordinates: [-74.0060, 40.7128], city: "New York", state: "NY", activeUsers: 2156, growth: 15.7 },
  { id: 4, coordinates: [-95.3698, 29.7604], city: "Houston", state: "TX", activeUsers: 678, growth: 6.2 },
  { id: 5, coordinates: [-112.0740, 33.4484], city: "Phoenix", state: "AZ", activeUsers: 445, growth: 9.8 },
  { id: 6, coordinates: [-77.0369, 38.9072], city: "Washington", state: "DC", activeUsers: 934, growth: 11.2 },
  { id: 7, coordinates: [-122.4194, 37.7749], city: "San Francisco", state: "CA", activeUsers: 1567, growth: 14.3 },
  { id: 8, coordinates: [-71.0589, 42.3601], city: "Boston", state: "MA", activeUsers: 723, growth: 7.9 },
  { id: 9, coordinates: [-87.9073, 43.0389], city: "Milwaukee", state: "WI", activeUsers: 389, growth: 5.4 },
  { id: 10, coordinates: [-96.7970, 32.7767], city: "Dallas", state: "TX", activeUsers: 1123, growth: 10.1 },
  { id: 11, coordinates: [-86.1581, 39.7684], city: "Indianapolis", state: "IN", activeUsers: 456, growth: 8.7 },
  { id: 12, coordinates: [-90.0490, 35.1495], city: "Memphis", state: "TN", activeUsers: 298, growth: 4.2 },
  { id: 13, coordinates: [-122.3321, 47.6062], city: "Seattle", state: "WA", activeUsers: 1345, growth: 13.6 },
  { id: 14, coordinates: [-80.1918, 25.7617], city: "Miami", state: "FL", activeUsers: 667, growth: 9.1 },
  { id: 15, coordinates: [-105.2705, 40.0150], city: "Denver", state: "CO", activeUsers: 534, growth: 7.8 }
]

export function USMapComponent() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredPin, setHoveredPin] = useState<UserPin | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const width = 800
    const height = 500

    // Clear existing content
    d3.select(svg).selectAll("*").remove()

    const g = d3.select(svg)
      .attr("width", width)
      .attr("height", height)
      .append("g")

    // Create projection
    const projection = geoAlbersUsa()
      .scale(1200)
      .translate([width / 2, height / 2])

    const path = d3.geoPath().projection(projection)

    // Add subtle gradient background
    const defs = g.append("defs")
    
    const gradient = defs.append("radialGradient")
      .attr("id", "map-gradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")
    
    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#f8fafc")
    
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#e2e8f0")

    g.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#map-gradient)")

    // Draw US states (simplified paths)
    const states = [
      // Simplified state boundaries - in production, use actual topojson data
      { name: "California", path: "M-120,150 L-110,160 L-105,180 L-110,200 L-125,190 L-130,170 Z" },
      { name: "Texas", path: "M-100,280 L-80,290 L-75,320 L-90,330 L-105,310 L-110,290 Z" },
      { name: "Florida", path: "M-80,380 L-70,385 L-65,400 L-75,395 L-80,385 Z" },
      { name: "New York", path: "M-70,180 L-60,185 L-65,200 L-75,195 L-75,185 Z" },
      { name: "Illinois", path: "M-90,220 L-85,225 L-87,240 L-92,235 L-93,225 Z" }
    ]

    // Draw state boundaries
    g.selectAll(".state")
      .data(states)
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", (d: any) => d.path)
      .attr("fill", "#f1f5f9")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 0.5)

    // Add connection lines between major cities
    const connections = [
      [0, 1], [0, 2], [1, 6], [2, 7], [3, 9], [5, 2], [6, 12], [8, 0], [10, 0], [13, 3]
    ]

    const lines = g.selectAll(".connection")
      .data(connections)
      .enter()
      .append("line")
      .attr("class", "connection")
      .attr("x1", (d: any) => {
        const coords = projection(USER_PINS[d[0]].coordinates)
        return coords?.[0] || 0
      })
      .attr("y1", (d: any) => {
        const coords = projection(USER_PINS[d[0]].coordinates)
        return coords?.[1] || 0
      })
      .attr("x2", (d: any) => {
        const coords = projection(USER_PINS[d[1]].coordinates)
        return coords?.[0] || 0
      })
      .attr("y2", (d: any) => {
        const coords = projection(USER_PINS[d[1]].coordinates)
        return coords?.[1] || 0
      })
      .attr("stroke", "#e11d1d")
      .attr("stroke-width", 1)
      .attr("opacity", 0.2)

    // Animate connection lines
    const animateLines = () => {
      lines
        .transition()
        .duration(2000)
        .attr("opacity", 0.6)
        .transition()
        .duration(2000)
        .attr("opacity", 0.2)
        .on("end", function repeat() {
          d3.select(this)
            .transition()
            .duration(2000)
            .attr("opacity", 0.6)
            .transition()
            .duration(2000)
            .attr("opacity", 0.2)
            .on("end", repeat)
        })
    }

    // Draw user pins
    const pins = g.selectAll(".pin")
      .data(USER_PINS)
      .enter()
      .append("g")
      .attr("class", "pin")
      .attr("transform", (d) => {
        const coords = projection(d.coordinates)
        return `translate(${coords?.[0] || 0}, ${coords?.[1] || 0})`
      })

    // Add pulsing circles for pins
    pins.append("circle")
      .attr("r", 0)
      .attr("fill", "#e11d1d")
      .attr("opacity", 0.3)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .attr("r", 15)
      .attr("opacity", 0)
      .transition()
      .duration(1000)
      .attr("r", 15)
      .attr("opacity", 0.3)
      .on("end", function repeat() {
        d3.select(this)
          .transition()
          .duration(2000)
          .attr("r", 20)
          .attr("opacity", 0)
          .transition()
          .duration(1000)
          .attr("r", 15)
          .attr("opacity", 0.3)
          .on("end", repeat)
      })

    // Add pin markers
    pins.append("circle")
      .attr("r", 0)
      .attr("fill", "#e11d1d")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr("r", 6)
      .ease(d3.easeBounceOut)

    // Add hover effects
    pins
      .on("mouseenter", function(event, d) {
        setHoveredPin(d)
        d3.select(this)
          .select("circle:last-of-type")
          .transition()
          .duration(200)
          .attr("r", 8)
      })
      .on("mouseleave", function() {
        setHoveredPin(null)
        d3.select(this)
          .select("circle:last-of-type")
          .transition()
          .duration(200)
          .attr("r", 6)
      })

    // Start animations
    setTimeout(animateLines, 1000)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center">
      <svg
        ref={svgRef}
        className="w-full h-full relative z-10"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
      />
      
      {/* Tooltip for hovered pin */}
      {hoveredPin && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-red-100 z-20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <h3 className="font-bold text-slate-900">
              {hoveredPin.city}, {hoveredPin.state}
            </h3>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-slate-600">Active Users:</span>
              <span className="font-bold text-slate-900">{hoveredPin.activeUsers.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-600">Growth:</span>
              <span className="font-bold text-green-600">+{hoveredPin.growth}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-slate-200 z-20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm font-semibold text-slate-900">Active Schools</span>
        </div>
        <div className="text-xs text-slate-600">
          {USER_PINS.length} locations nationwide
        </div>
        <div className="text-xs text-green-600 font-medium">
          +{USER_PINS.reduce((sum, pin) => sum + pin.growth, 0).toFixed(1)}% total growth
        </div>
      </div>
    </div>
  )
}
