"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, Smartphone, Sparkles, ArrowRight, ShieldCheck, Globe, Calendar, Users, Activity, Zap, Target, TrendingUp, BarChart3, Brain, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const features = [
 {
  icon: LayoutDashboard,
  title: "Admin Central",
  description: "The intelligent core of your school. Manage attendance, staff performance, and strategic data from one elite command center.",
  className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-black text-white border-[#E11D1D]/20",
  iconBg: "bg-[#E11D1D]/20",
  iconColor: "text-[#E11D1D]",
  image: "/software_admin.png",
  id: "ADMIN",
  stats: { value: "99.9%", label: "Uptime" },
  highlight: true
 },
 {
  icon: Calendar,
  title: "Smart Scheduling",
  description: "Precision booking with automated waitlists, class confirmations, and resource allocation optimized for high-capacity schools.",
  className: "md:col-span-2 bg-gradient-to-br from-[#E11D1D] to-red-700 text-white",
  iconBg: "bg-white/20",
  iconColor: "text-white",
  image: "/software_schedule.png",
  id: "SCHED",
  stats: { value: "85%", label: "Time Saved" }
 },
 {
  icon: Users,
  title: "Member & Rank System",
  description: "Digital rank tracking and automated testing protocols. Monitor student progress with a comprehensive, multi-layered rank engine.",
  className: "md:col-span-1 bg-gradient-to-br from-slate-50 to-white border-slate-200",
  iconBg: "bg-[#E11D1D]/10",
  iconColor: "text-[#E11D1D]",
  image: "/software_members.png",
  id: "RANK",
  stats: { value: "2.3x", label: "Faster Testing" }
 },
 {
  icon: ShieldCheck,
  title: "Automated Financials",
  description: "Real-time payment summaries and automated reconciliation. Secure, PCI-compliant billing for total financial peace of mind.",
  className: "md:col-span-1 bg-gradient-to-br from-slate-50 to-white border-slate-200",
  iconBg: "bg-[#E11D1D]/10",
  iconColor: "text-[#E11D1D]",
  image: "/software_finance.png",
  id: "FINANCE",
  stats: { value: "100%", label: "Compliant" }
 },
 {
  icon: Smartphone,
  title: "Student Experience App",
  description: "A premium mobile companion for your members. Book classes, track progress, and stay connected with the digital dojang.",
  className: "md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
  iconBg: "bg-blue-500/20",
  iconColor: "text-blue-600",
  id: "APP",
  stats: { value: "4.9★", label: "App Rating" }
 },
 {
  icon: Sparkles,
  title: "Growth Engines",
  description: "AI-driven marketing funnels and automated communication lead to a constant flow of new trial students.",
  className: "md:col-span-2 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200",
  iconBg: "bg-emerald-500/20",
  iconColor: "text-emerald-600",
  id: "GROWTH",
  stats: { value: "312%", label: "ROI" },
  highlight: true
 },
]

const FloatingIcon = ({ icon: Icon, className, delay = 0, duration = 6 }: { icon: any, className: string, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 0.1, scale: 1 }}
    animate={{ 
      y: [0, -30, 0],
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      opacity: { duration: 1, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
      scale: { duration: duration * 2, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute pointer-events-none z-0 ${className}`}
  >
    <Icon className="size-20 text-[#E11D1D]" />
  </motion.div>
);

const GridBackground = () => (
  <div className="absolute inset-0 opacity-30">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    <motion.div
      animate={{
        backgroundPosition: ["0px 0px", "24px 24px", "0px 0px"],
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#E11D1D] rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0
              }}
              animate={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
       )}
      </motion.div>
     ))}
    </div>

    {/* Bottom CTA */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="text-center mt-20"
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(to right, #E11D1D, #DC2626)",
            "linear-gradient(to right, #DC2626, #B91C1C)",
            "linear-gradient(to right, #B91C1C, #E11D1D)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-lg uppercase tracking-widest"
      >
        <Target className="size-5" />
        Experience The Future
      </motion.div>
    </motion.div>
   </div>
  </section>
 )
}
