"use client"

import React from "react"
import { motion } from "framer-motion"
import { Monitor, Tablet, Smartphone, Zap, Shield, TrendingUp } from "lucide-react"

const SoftwareShowcaseSection = () => {
  const [activeDevice, setActiveDevice] = React.useState(0)

  const devices = [
    {
      id: 0,
      name: "Desktop Dashboard",
      icon: Monitor,
      description: "Complete management system"
    },
    {
      id: 1,
      name: "Mobile App", 
      icon: Smartphone,
      description: "On-the-go access"
    },
    {
      id: 2,
      name: "Tablet Interface",
      icon: Tablet,
      description: "Touch-optimized experience"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Powerful Software, Any Device
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience MAS9 across all your devices with seamless synchronization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Device Showcase - Matching the uploaded image layout */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-8 h-[500px] overflow-hidden border border-slate-700 shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)
                  `,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Large Desktop Monitor - Center focus like in image */}
              <motion.div
                animate={{ 
                  opacity: activeDevice === 0 ? 1 : 0.3,
                  scale: activeDevice === 0 ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative">
                  {/* Monitor Frame */}
                  <div className="w-72 h-48 bg-slate-800 rounded-xl border-2 border-blue-500/50 shadow-2xl overflow-hidden">
                    {/* Monitor Header */}
                    <div className="bg-slate-900 h-10 border-b border-blue-500/30 flex items-center px-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-blue-400 text-sm font-bold">MAS9 Dashboard</div>
                      </div>
                    </div>
                    {/* Software Interface - Matching image layout */}
                    <div className="p-4 bg-slate-950 h-36">
                      {/* Top navigation bar */}
                      <div className="h-8 bg-slate-800 rounded mb-3 flex items-center px-3">
                        <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                        <div className="h-2 bg-slate-600 rounded flex-1"></div>
                      </div>
                      
                      {/* Main content area with sidebar */}
                      <div className="flex gap-3 h-20">
                        {/* Sidebar */}
                        <div className="w-16 bg-slate-800 rounded flex flex-col gap-1 p-1">
                          <div className="h-3 bg-blue-600 rounded"></div>
                          <div className="h-3 bg-slate-600 rounded"></div>
                          <div className="h-3 bg-slate-600 rounded"></div>
                          <div className="h-3 bg-slate-600 rounded"></div>
                        </div>
                        
                        {/* Main content */}
                        <div className="flex-1 space-y-2">
                          <div className="h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded flex items-center px-2">
                            <div className="w-3 h-3 bg-white rounded mr-2"></div>
                            <div className="h-1.5 bg-white/40 rounded flex-1"></div>
                          </div>
                          <div className="grid grid-cols-3 gap-1">
                            <div className="h-6 bg-purple-600 rounded"></div>
                            <div className="h-6 bg-green-600 rounded"></div>
                            <div className="h-6 bg-orange-600 rounded"></div>
                          </div>
                          <div className="h-4 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Monitor Stand */}
                  <div className="w-24 h-6 bg-slate-700 mx-auto border-t border-blue-500/30"></div>
                  <div className="w-32 h-4 bg-slate-600 rounded-b-lg border border-blue-500/30"></div>
                </div>
              </motion.div>

              {/* Tablet - Right side */}
              <motion.div
                animate={{ 
                  opacity: activeDevice === 2 ? 1 : 0.3,
                  scale: activeDevice === 2 ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className="absolute right-8 top-24 z-10"
              >
                <div className="relative">
                  <div className="w-40 h-52 bg-slate-800 rounded-xl border-2 border-blue-500/50 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-10 border-b border-blue-500/30 flex items-center justify-center">
                      <div className="text-blue-400 text-sm font-bold">MAS9 Mobile</div>
                    </div>
                    {/* Mobile Interface */}
                    <div className="p-3 bg-slate-950 h-42">
                      <div className="space-y-2">
                        <div className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center px-2">
                          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                            <div className="text-white text-xs">�</div>
                          </div>
                          <div className="flex-1 ml-2">
                            <div className="h-1 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/20 rounded w-3/4"></div>
                          </div>
                        </div>
                        <div className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center px-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="text-white text-xs">�</div>
                          </div>
                          <div className="flex-1 ml-2">
                            <div className="h-1 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/20 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded flex items-center justify-center">
                            <div className="text-white text-xs">🎯</div>
                          </div>
                          <div className="h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded flex items-center justify-center">
                            <div className="text-white text-xs">⚡</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Smartphone - Left side */}
              <motion.div
                animate={{ 
                  opacity: activeDevice === 1 ? 1 : 0.3,
                  scale: activeDevice === 1 ? 1 : 0.9
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-12 bottom-16 z-30"
              >
                <div className="relative">
                  <div className="w-28 h-48 bg-slate-800 rounded-2xl border-2 border-blue-500/50 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-8 border-b border-blue-500/30 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                    </div>
                    {/* Phone Interface */}
                    <div className="p-2 bg-slate-950 h-40">
                      <div className="space-y-2">
                        <div className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded flex items-center px-2">
                          <div className="w-5 h-5 bg-white/20 rounded"></div>
                        </div>
                        <div className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded flex items-center px-2">
                          <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded flex items-center justify-center">
                          <div className="text-white text-xs">📊</div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded flex items-center justify-center">
                          <div className="text-white text-xs">🎯</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-900 h-4 border-t border-blue-500/30"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Status Panel - Top right like in image */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-8 right-12 z-10"
              >
                <div className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 shadow-xl">
                  <div className="text-blue-400 text-xs font-mono mb-3">System Status</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">All Systems Operational</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">Real-time Sync Active</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="text-white text-xs">99.9% Uptime</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features & Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Device Selector */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Choose Your Platform
              </h3>
              {devices.map((device, index) => (
                <motion.button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    activeDevice === device.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeDevice === device.id ? 'bg-blue-500' : 'bg-slate-100'
                    }`}>
                      <device.icon className={`w-6 h-6 ${
                        activeDevice === device.id ? 'text-white' : 'text-slate-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        activeDevice === device.id ? 'text-blue-900' : 'text-slate-900'
                      }`}>
                        {device.name}
                      </h4>
                      <p className={`text-sm ${
                        activeDevice === device.id ? 'text-blue-700' : 'text-slate-600'
                      }`}>
                        {device.description}
                      </p>
                    </div>
                    {activeDevice === device.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose MAS9?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lightning Fast</h4>
                    <p className="text-blue-100 text-sm">Optimized for speed and performance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Secure & Reliable</h4>
                    <p className="text-blue-100 text-sm">Bank-level security for your data</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Scale with You</h4>
                    <p className="text-blue-100 text-sm">Grows with your business</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareShowcaseSection
