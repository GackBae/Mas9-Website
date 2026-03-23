"use client"

import { Button } from "@/components/ui/button"
import { Settings, Globe, Megaphone, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
 {
  icon: Settings,
  title: "Core Infrastructure",
  description: "The foundational Protocol_01 for elite martial arts schools. A unified OS that eliminates operational friction.",
  features: ["Unified Admin Hub", "Automated Testing Sync", "Real-time Attendance", "Staff Productivity suite"],
  className: "md:col-span-2 bg-white",
  iconBg: "bg-red-50",
  iconColor: "text-[#E11D1D]",
  image: "/dojang.png",
  id: "INFRA"
 },
 {
  icon: Globe,
  title: "Digital Presence",
  description: "Protocol_02: High-performance school websites engineered for #1 rankings and maximum student conversion.",
  features: ["V2.2 Custom Design", "SEO Architecture", "Lead Capture Engine", "Integrated Chatbot"],
  className: "md:col-span-1 bg-black text-white",
  iconBg: "bg-white/10",
  iconColor: "text-white",
  id: "WEB"
 },
 {
  icon: Megaphone,
  title: "Growth Protocols",
  description: "Advanced marketing architectures (Protocol_03) that automate lead generation and trial student acquisition.",
  features: ["Precision Ads", "Behavioral Automation", "Nurture Sequences", "Enrollment Funnels"],
  className: "md:col-span-1 bg-white",
  iconBg: "bg-red-50",
  iconColor: "text-[#E11D1D]",
  image: "/action.png",
  id: "GROWTH"
 },
 {
  icon: Zap,
  title: "Migration & Scaling",
  description: "Protocol_04: Seamless data transition into the MAS9 ecosystem. Shift your dynasty to our V2.2 core with zero downtime.",
  features: ["White-glove Migration", "Elite Staff Training", "24/7 Priority Support", "Architecture Setup"],
  className: "md:col-span-2 bg-slate-50",
  iconBg: "bg-black/5",
  iconColor: "text-black",
  id: "SCALE"
 },
]

export function ServicesSection() {
 return (
  <section className="py-20 md:py-32 bg-white overflow-hidden relative">
   {/* Background Decor */}
   <div className="absolute inset-0 bg-v-grid opacity-50 pointer-events-none" />
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-soft-red opacity-20 pointer-events-none" />

   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20 max-w-3xl mx-auto">
     <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E11D1D]/20 text-[#E11D1D] text-xs font-bold mb-6 tracking-widest uppercase"
     >
      GROWTH SOLUTIONS
     </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-black mb-12 uppercase tracking-tight leading-[1.2] py-4"
          >
            Unified Ecosystem. <span className="inline-block text-gradient-red drop-shadow-[0_0_10px_rgba(225,29,29,0.2)] pr-4">Unrivaled Growth.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed text-center text-balance"
          >
            From custom school websites to AI-driven marketing, we handle the technology so you can focus on what truly matters: delivering world-class martial arts. No more tech headaches.
          </motion.p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {services.map((service, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.1 }}
       transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
       className={`${service.className} group relative overflow-hidden rounded-[2.5rem] border border-slate-100 p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-all`}
      >
       <div className="relative z-10 flex flex-col h-full">
        <div className={`size-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 shadow-sm`}>
         <service.icon className={`size-8 ${service.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-[#0f172a]">
         {service.title}
        </h3>
        <p className={`mb-8 leading-relaxed font-medium ${service.className.includes('bg-black') ? 'text-white/70' : 'text-[#64748b]'}`}>
         {service.description}
        </p>
        <ul className="space-y-4 mb-10 flex-grow">
         {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-80">
           <CheckCircle2 className={`size-5 ${service.className.includes('bg-black') ? 'text-primary' : 'text-[#E11D1D]'}`} />
           <span className={service.className.includes('bg-black') ? 'text-white/90' : 'text-foreground'}>{feature}</span>
          </li>
         ))}
        </ul>
        <Button 
          className={`w-full h-14 rounded-full font-bold text-sm uppercase tracking-widest transition-all active:scale-95 ${
          service.className.includes('bg-black') 
          ? 'bg-white text-black hover:bg-slate-100 shadow-lg' 
          : 'bg-[#E11D1D] text-white hover:bg-[#C11818] shadow-lg shadow-red-500/20'
         }`}
        >
         Learn More
         <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
        </Button>
       </div>

       {service.image && (
        <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
         <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover"
         />
        </div>
       )}
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 )
}
