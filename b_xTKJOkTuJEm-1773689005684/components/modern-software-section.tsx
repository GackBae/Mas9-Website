"use client"

import React from "react"
import { motion } from "framer-motion"
import { Monitor, Smartphone, Settings, Zap, Shield, TrendingUp, Layers, Eye, Users, Calendar, CheckCircle } from "lucide-react"

const ModernSoftwareSection = () => {
  const [activeDemo, setActiveDemo] = React.useState(0)

  const demos = [
    { 
      id: 0, 
      title: "Desktop Dashboard", 
      subtitle: "Complete business management",
      icon: Monitor,
      color: "from-[#E11D1D] to-red-700"
    },
    { 
      id: 1, 
      title: "Mobile App", 
      subtitle: "Business on the go",
      icon: Smartphone,
      color: "from-slate-800 to-slate-900"
    },
    { 
      id: 2, 
      title: "Admin App", 
      subtitle: "Administrative control",
      icon: Settings,
      color: "from-blue-600 to-blue-800"
    },
  ]

  React.useEffect(() => {
    if (activeDemo >= demos.length) {
      setActiveDemo(0)
    }
  }, [activeDemo, demos.length])

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:2rem_2rem]" />
      {/* Single soft red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#E11D1D]/8 rounded-full blur-[150px]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E11D1D]/10 border border-[#E11D1D]/30 rounded-full text-sm font-medium text-red-400 mb-6"
          >
            <div className="w-2 h-2 bg-[#E11D1D] rounded-full animate-pulse"></div>
            <span>Live demos available</span>
          </motion.div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            A complete platform for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E11D1D] to-red-600">
              martial arts schools
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From student management to payment processing, everything you need to run your martial arts business efficiently.
          </p>
          
        </motion.div>

        {/* Demo Showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Demo Selector */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all ${
                  activeDemo === demo.id 
                    ? 'bg-[#E11D1D] text-white shadow-lg shadow-red-500/20' 
                    : 'bg-transparent text-white border border-white/20 hover:border-[#E11D1D] hover:text-[#E11D1D]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <demo.icon className="w-4 h-4" />
                  {demo.title}
                </span>
                {activeDemo === demo.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#E11D1D] rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Device Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`relative bg-white/[0.03] border shadow-2xl overflow-hidden ${activeDemo === 1 || activeDemo === 2 ? "rounded-2xl border-white/10 p-6" : "rounded-3xl border-white/10"}`}>
              {/* Device Frame */}
              <div className={`relative ${activeDemo === 0 ? "aspect-[2430/1564]" : activeDemo === 1 || activeDemo === 2 ? "aspect-[9/16] max-w-[360px] mx-auto rounded-[2.25rem] border-[10px] border-[#1a1a1a] overflow-hidden" : "aspect-[16/10] lg:aspect-[21/9]"} bg-[#111]`}>
                {/* Browser/Device Chrome */}
                <div className={`absolute top-0 left-0 right-0 h-12 bg-slate-800 border-b border-slate-700 items-center px-6 z-10 ${activeDemo === 0 || activeDemo === 1 || activeDemo === 2 ? "hidden" : "flex"}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-8 text-slate-400 text-sm font-mono">
                      {demos[activeDemo].title.toLowerCase().replace(' ', '-')}.mas9.com
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className={`absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 ${activeDemo === 0 || activeDemo === 1 || activeDemo === 2 ? "pt-0" : "pt-12"}`}>
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`h-full w-full ${activeDemo === 0 || activeDemo === 1 || activeDemo === 2 ? "p-0" : "p-4 lg:p-6"}`}
                  >
                    {activeDemo === 1 ? (
                      <div className="h-full w-full overflow-y-auto rounded-[2rem] bg-white">
                        <img
                          src="/mobile-app.png"
                          alt={demos[activeDemo].title}
                          className="w-full h-auto block"
                        />
                      </div>
                    ) : activeDemo === 2 ? (
                      <div className="h-full w-full overflow-y-auto rounded-[2rem] bg-white">
                        <img
                          src="/admin-app-image.png"
                          alt={demos[activeDemo].title}
                          className="w-full h-auto block"
                        />
                      </div>
                    ) : (
                      <img
                        src="/desktop-dashboard.png"
                        alt={demos[activeDemo].title}
                        className="h-full w-full bg-white object-contain"
                      />
                    )}
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-16"
          >
            {[
              "Student Management",
              "Class Scheduling", 
              "Payment Processing",
              "Attendance Tracking",
              "Progress Reports",
              "Parent Portal"
            ].map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-sm font-medium text-white/60 hover:border-[#E11D1D]/30 hover:text-white/80 transition-all duration-300"
              >
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernSoftwareSection
