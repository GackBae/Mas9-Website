"use client"

import React from "react"
import { motion } from "framer-motion"
import { Monitor, Tablet, Smartphone, Zap, Shield, TrendingUp, Layers, Eye, ArrowRight, Play, Users, Calendar, CheckCircle } from "lucide-react"

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
      title: "Tablet Interface", 
      subtitle: "Touch-optimized experience",
      icon: Tablet,
      color: "from-slate-700 to-slate-800"
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Dark background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(239_68_68_/_0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
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
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            A complete platform for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E11D1D] to-red-600">
              martial arts schools
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From student management to payment processing, everything you need to run your martial arts business efficiently.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#E11D1D] text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium border border-slate-700 hover:bg-slate-700 transition-colors">
              <Play className="w-4 h-4" />
              Watch demo
            </button>
          </motion.div>
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
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600'
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
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E11D1D]/10 via-slate-800 to-slate-900 rounded-3xl transform scale-105"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Device Frame */}
              <div className="relative aspect-[16/10] lg:aspect-[21/9] bg-slate-900">
                {/* Browser/Device Chrome */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-slate-800 border-b border-slate-700 flex items-center px-6 z-10">
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
                <div className="absolute inset-0 pt-12 bg-gradient-to-br from-slate-50 to-slate-100">
                  {/* Navigation */}
                  <div className="h-16 bg-white border-b border-slate-200 flex items-center px-8">
                    <div className="flex items-center gap-8">
                      <div className="text-xl font-bold text-[#E11D1D]">MAS9</div>
                      <nav className="hidden md:flex items-center gap-6">
                        <div className="text-sm font-medium text-slate-700">Dashboard</div>
                        <div className="text-sm text-slate-500">Students</div>
                        <div className="text-sm text-slate-500">Classes</div>
                        <div className="text-sm text-slate-500">Billing</div>
                      </nav>
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="p-8">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      {/* Stats Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-slate-600">Total Revenue</div>
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">$24,580</div>
                          <div className="text-sm text-green-600 mt-1">+12% from last month</div>
                        </div>
                        
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-slate-600">Active Students</div>
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-[#E11D1D]" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">156</div>
                          <div className="text-sm text-[#E11D1D] mt-1">+8 new this week</div>
                        </div>
                        
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-slate-600">Classes Today</div>
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-[#E11D1D]" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">12</div>
                          <div className="text-sm text-slate-500 mt-1">3 starting soon</div>
                        </div>
                        
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-slate-600">Attendance Rate</div>
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-[#E11D1D]" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-slate-900">94%</div>
                          <div className="text-sm text-[#E11D1D] mt-1">Above average</div>
                        </div>
                      </div>

                      {/* Main Dashboard Area */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Chart Area */}
                        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
                          <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Overview</h3>
                          <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className={`w-16 h-16 bg-gradient-to-br ${demos[activeDemo].color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                {React.createElement(demos[activeDemo].icon, { className: "w-8 h-8 text-white" })}
                              </div>
                              <p className="text-slate-600 font-medium">{demos[activeDemo].title}</p>
                              <p className="text-sm text-slate-500 mt-1">{demos[activeDemo].subtitle}</p>
                            </div>
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-slate-900">New student enrolled</div>
                                <div className="text-xs text-slate-500">2 minutes ago</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#E11D1D] rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-slate-900">Payment received</div>
                                <div className="text-xs text-slate-500">15 minutes ago</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#E11D1D] rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-slate-900">Class completed</div>
                                <div className="text-xs text-slate-500">1 hour ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating action buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 right-8 flex flex-col gap-3"
                >
                  <button className="w-12 h-12 bg-[#E11D1D] rounded-full shadow-lg shadow-red-500/20 flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Play className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-slate-800 rounded-full border border-slate-700 shadow-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
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
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-medium text-slate-300"
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
