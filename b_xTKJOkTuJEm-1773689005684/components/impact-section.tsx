"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Users, TrendingUp, DollarSign, Activity, Calendar, ChevronUp, ChevronDown, Minus, Star, Target, Zap, Award, Clock, UserCheck } from "lucide-react"

const DashboardCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color, 
  delay,
  isLarge = false 
}: {
  title: string
  value: string
  change: number
  icon: any
  color: string
  delay: number
  isLarge?: boolean
}) => {
  const [currentValue, setCurrentValue] = useState(0)
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        setCurrentValue(Math.floor(progress * targetValue))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [targetValue, delay])

  const getChangeIcon = () => {
    if (change > 0) return <ChevronUp className="size-4" />
    if (change < 0) return <ChevronDown className="size-4" />
    return <Minus className="size-4" />
  }

  const getChangeColor = () => {
    if (change > 0) return "text-green-500"
    if (change < 0) return "text-red-500"
    return "text-gray-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`${isLarge ? 'col-span-2' : ''} relative group`}
    >
      <div className={`relative ${isLarge ? 'h-32' : 'h-24'} rounded-2xl ${color} p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 flex items-start justify-between h-full">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-white/70 text-sm font-medium mb-1">{title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-white text-3xl font-bold">
                  {value.includes('$') ? '$' : ''}{currentValue.toLocaleString()}{value.includes('K') ? 'K+' : value.includes('%') ? '%' : ''}
                </h3>
                <div className={`flex items-center gap-1 ${getChangeColor()}`}>
                  {getChangeIcon()}
                  <span className="text-sm font-medium">{Math.abs(change)}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
            <Icon className="size-6 text-white" />
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const MemberProgressCard = ({ member, delay }: { member: any, delay: number }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1500
      const startTime = Date.now()
      const targetProgress = member.progress
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progressRatio = Math.min(elapsed / duration, 1)
        
        setProgress(Math.floor(progressRatio * targetProgress))
        
        if (progressRatio < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [member.progress, delay])

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="size-12 rounded-full bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center text-white font-bold">
          {member.name.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div className="flex-grow">
          <h4 className="font-bold text-gray-900">{member.name}</h4>
          <p className="text-sm text-gray-500">{member.id} • {member.rank}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#E11D1D]">{progress}%</div>
          <div className="text-xs text-gray-500">Progress</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Attendances</span>
          <span className="font-medium">{member.attendances}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-[#E11D1D] to-red-500 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${(member.attendances.split('/')[0] / parseInt(member.attendances.split('/')[1])) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5, duration: 1 }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Homeworks</span>
          <span className="font-medium">{member.homeworks}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${(member.homeworks.split('/')[0] / parseInt(member.homeworks.split('/')[1])) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.7, duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

const RevenueCard = ({ title, amount, change, icon: Icon, delay }: { title: string, amount: string, change: number, icon: any, delay: number }) => {
  const [currentAmount, setCurrentAmount] = useState(0)
  const targetAmount = parseInt(amount.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        setCurrentAmount(Math.floor(progress * targetAmount))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [targetAmount, delay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <Icon className="size-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 ${change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
          {change >= 0 ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      
      <h4 className="text-white/80 text-sm font-medium mb-1">{title}</h4>
      <div className="text-3xl font-bold">
        ${currentAmount.toLocaleString()}
      </div>
    </motion.div>
  )
}

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const dashboardData = [
    { title: "Active Members", value: "1000", change: 12, icon: Users, color: "bg-gradient-to-br from-[#E11D1D] to-red-600", delay: 0 },
    { title: "This Month", value: "10", change: 8, icon: TrendingUp, color: "bg-gradient-to-br from-green-500 to-green-600", delay: 0.1 },
    { title: "Current Trials", value: "100", change: -5, icon: UserCheck, color: "bg-gradient-to-br from-blue-500 to-blue-600", delay: 0.2 },
    { title: "New Trials", value: "100", change: 15, icon: Zap, color: "bg-gradient-to-br from-purple-500 to-purple-600", delay: 0.3 },
  ]

  const membersData = [
    { name: "Jacob Williams", id: "AB123456", rank: "Green Belt", progress: 74, attendances: "15/20", homeworks: "2/3" },
    { name: "Sarah Chen", id: "CD789012", rank: "Blue Belt", progress: 68, attendances: "12/18", homeworks: "4/5" },
    { name: "Mike Johnson", id: "EF345678", rank: "Purple Belt", progress: 82, attendances: "18/20", homeworks: "6/7" },
  ]

  const revenueData = [
    { title: "This Month", amount: "35260", change: 2.1, icon: DollarSign, delay: 0.8 },
    { title: "Last Month", amount: "34564", change: -1.2, icon: Activity, delay: 0.9 },
  ]

  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 30px 30px, rgba(225,29,29,0.03) 2px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E11D1D]/10 text-[#E11D1D] text-sm font-bold mb-6 tracking-widest uppercase">
            <Activity className="size-4" />
            LIVE DASHBOARD
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Real-Time <span className="text-gradient-red">School Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your martial arts school's growth with live data insights and member progress tracking
          </p>
        </motion.div>

        {/* Member Overview Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Member Overview</h3>
            <motion.div
              animate={{ rotate: isInView ? 360 : 0 }}
              transition={{ duration: 2, repeat: isInView ? Infinity : 0, ease: "linear" }}
              className="size-8 rounded-full bg-[#E11D1D]/10 flex items-center justify-center"
            >
              <Activity className="size-4 text-[#E11D1D]" />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.map((item, index) => (
              <DashboardCard key={index} {...item} />
            ))}
          </div>
        </motion.div>

        {/* Member Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Student Progress</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="size-4" />
              Last updated: 2 min ago
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {membersData.map((member, index) => (
              <MemberProgressCard key={index} member={member} delay={0.5 + index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Revenue Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Revenue Analytics</h3>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <TrendingUp className="size-3" />
              Growing
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {revenueData.map((item, index) => (
              <RevenueCard key={index} {...item} />
            ))}
          </div>
        </motion.div>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center mt-12 gap-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="size-2 bg-green-500 rounded-full"
          />
          <span className="text-sm text-gray-500">Live data streaming</span>
        </motion.div>
      </div>
    </section>
  )
}
