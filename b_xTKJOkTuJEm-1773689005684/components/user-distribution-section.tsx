"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, Users, TrendingUp } from "lucide-react"

const UserDistributionSection = () => {
  const [userCount, setUserCount] = React.useState(0)
  const [activePins, setActivePins] = React.useState<number[]>([])

  // User locations across the US
  const locations = [
    { id: 1, name: "New York, NY", x: "75%", y: "40%", delay: 0.2 },
    { id: 2, name: "Los Angeles, CA", x: "15%", y: "55%", delay: 0.4 },
    { id: 3, name: "Chicago, IL", x: "60%", y: "35%", delay: 0.6 },
    { id: 4, name: "Houston, TX", x: "50%", y: "65%", delay: 0.8 },
    { id: 5, name: "Phoenix, AZ", x: "25%", y: "60%", delay: 1.0 },
    { id: 6, name: "Philadelphia, PA", x: "72%", y: "42%", delay: 1.2 },
    { id: 7, name: "San Antonio, TX", x: "48%", y: "68%", delay: 1.4 },
    { id: 8, name: "San Diego, CA", x: "12%", y: "58%", delay: 1.6 },
    { id: 9, name: "Dallas, TX", x: "52%", y: "62%", delay: 1.8 },
    { id: 10, name: "San Jose, CA", x: "10%", y: "48%", delay: 2.0 },
    { id: 11, name: "Austin, TX", x: "49%", y: "70%", delay: 2.2 },
    { id: 12, name: "Jacksonville, FL", x: "68%", y: "70%", delay: 2.4 },
    { id: 13, name: "Fort Worth, TX", x: "53%", y: "60%", delay: 2.6 },
    { id: 14, name: "Columbus, OH", x: "65%", y: "38%", delay: 2.8 },
    { id: 15, name: "Charlotte, NC", x: "70%", y: "55%", delay: 3.0 },
  ]

  React.useEffect(() => {
    // Animate user count
    const targetCount = 15420
    const duration = 3000
    const steps = 60
    const increment = targetCount / steps
    let current = 0

    const counter = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setUserCount(targetCount)
        clearInterval(counter)
      } else {
        setUserCount(Math.floor(current))
      }
    }, duration / steps)

    // Animate pins appearing
    const pinTimer = setTimeout(() => {
      locations.forEach((location, index) => {
        setTimeout(() => {
          setActivePins(prev => [...prev, location.id])
        }, index * 200)
      })
    }, 1000)

    return () => {
      clearInterval(counter)
      clearTimeout(pinTimer)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Schools Across America
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of martial arts schools transforming their business with MAS9
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Software Showcase with Devices */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 h-[500px] overflow-hidden border border-cyan-500/30 shadow-2xl">
              {/* Cyber grid background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)
                  `,
                  backgroundSize: '50px 50px'
                }} />
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
              
              {/* Desktop Computer */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-8 top-16 z-20"
              >
                <div className="relative">
                  {/* Monitor */}
                  <div className="w-48 h-32 bg-slate-800 rounded-lg border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-6 border-b border-cyan-500/30 flex items-center px-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-cyan-400 text-xs font-mono">MAS9 Dashboard</div>
                      </div>
                    </div>
                    {/* Software Interface */}
                    <div className="p-2 bg-slate-950 h-24">
                      <div className="grid grid-cols-3 gap-1 mb-2">
                        <div className="h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded"></div>
                        <div className="h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
                        <div className="h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-cyan-500/30 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                          />
                        </div>
                        <div className="h-2 bg-purple-500/30 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            transition={{ duration: 2, delay: 1.7 }}
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Monitor Stand */}
                  <div className="w-16 h-4 bg-slate-700 mx-auto border-t border-cyan-500/30"></div>
                  <div className="w-20 h-2 bg-slate-600 rounded-b-lg border border-cyan-500/30"></div>
                </div>
              </motion.div>

              {/* Tablet */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute right-12 top-24 z-10"
              >
                <div className="relative">
                  <div className="w-32 h-44 bg-slate-800 rounded-xl border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-8 border-b border-cyan-500/30 flex items-center justify-center">
                      <div className="text-cyan-400 text-xs font-mono">Mobile App</div>
                    </div>
                    {/* Mobile Interface */}
                    <div className="p-2 bg-slate-950 h-36">
                      <div className="space-y-2">
                        <div className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center px-2">
                          <div className="w-6 h-6 bg-white/20 rounded"></div>
                          <div className="flex-1 ml-2">
                            <div className="h-1 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/20 rounded w-3/4"></div>
                          </div>
                        </div>
                        <div className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center px-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                          <div className="flex-1 ml-2">
                            <div className="h-1 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/20 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
                          <div className="h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smartphone */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="absolute left-32 bottom-16 z-30"
              >
                <div className="relative">
                  <div className="w-20 h-36 bg-slate-800 rounded-2xl border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-6 border-b border-cyan-500/30 flex items-center justify-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    </div>
                    {/* Phone Interface */}
                    <div className="p-1 bg-slate-950 h-30">
                      <div className="space-y-1">
                        <div className="h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded flex items-center px-1">
                          <div className="w-3 h-3 bg-white/20 rounded"></div>
                        </div>
                        <div className="h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded flex items-center px-1">
                          <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded"></div>
                        <div className="h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-slate-900 h-2 border-t border-cyan-500/30"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Data Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute top-12 right-8 z-10"
              >
                <div className="bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 shadow-xl">
                  <div className="text-cyan-400 text-xs font-mono mb-2">Live Analytics</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">1,247 Active Users</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">98.5% Uptime</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">2.3ms Response</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.line
                  x1="120" y1="200" x2="180" y2="150"
                  stroke="#00ffff"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.line
                  x1="180" y1="150" x2="260" y2="180"
                  stroke="#00ffff"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.7 }}
                />
                <motion.line
                  x1="260" y1="180" x2="320" y2="120"
                  stroke="#00ffff"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.9 }}
                />
              </svg>

              {/* Tech corner decorations */}
              <div className="absolute top-4 left-4 text-cyan-400 text-xs font-mono opacity-60">
                <div>SYSTEM ONLINE</div>
                <div>DEVICES: 3/3</div>
              </div>
              
              <div className="absolute bottom-4 right-4 text-cyan-400 text-xs font-mono opacity-60">
                <div>SYNC ACTIVE</div>
                <div>Status: Connected</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main User Count */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <Users className="w-8 h-8 text-[#E11D1D]" />
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  Active Users
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-6xl md:text-7xl font-black text-slate-900 mb-2"
              >
                {userCount.toLocaleString()}
              </motion.div>
              
              <p className="text-lg text-slate-600">
                Martial arts schools nationwide
              </p>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">Growth</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">+47%</div>
                <p className="text-sm text-slate-600 mt-1">This year</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">Coverage</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <p className="text-sm text-slate-600 mt-1">States</p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#E11D1D] to-red-600 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-3">
                Join the MAS9 Community
              </h3>
              <p className="text-red-100 mb-6">
                See why thousands of school owners trust MAS9 to grow their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-[#E11D1D] font-semibold rounded-lg hover:bg-red-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors">
                  View Success Stories
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UserDistributionSection
