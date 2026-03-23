"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Target, Shield, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: { staggerChildren: 0.1 }
 }
}

const itemVariants = {
 hidden: { y: 20, opacity: 0 },
 visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as any } }
}

export default function AboutPage() {
 return (
  <div className="flex flex-col">
   {/* Hero Section */}
   <section className="py-24 md:py-36 bg-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/2" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid lg:grid-cols-2 gap-20 items-center"
     >
      <div>
       <motion.div 
        variants={itemVariants}
        className="inline-flex items-center gap-2 bg-[#E11D1D]/10 text-[#E11D1D] px-4 py-1.5 rounded-full text-sm font-bold mb-8 uppercase tracking-wider"
       >
        Our Origin Story
       </motion.div>
       <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 tracking-tighter leading-[1.05]"
       >
        Engineered for <span className="text-gradient-red">Masters.</span>
       </motion.h1>
       <motion.p 
        variants={itemVariants}
        className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium"
       >
        We didn't just build another software. We built a high-performance OS 
        to eliminate the technical debt that holds martial arts pioneers back.
       </motion.p>
       <motion.div variants={itemVariants}>
        <Button size="lg" className="bg-[#E11D1D] hover:bg-black text-white px-10 h-14 text-lg font-black rounded-full shadow-premium transition-all hover:scale-105 active:scale-95">
         Begin Your Journey
         <ArrowRight className="ml-2 size-5" />
        </Button>
       </motion.div>
      </div>
      
      <motion.div 
       initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
       whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 1, ease: "easeOut" }}
       className="relative group"
      >
       <div className="absolute -inset-10 bg-gradient-to-tr from-[#E11D1D]/20 to-transparent rounded-full blur-[80px] -z-10 animate-pulse" />
       <motion.div 
        whileHover={{ rotateY: -15, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-[2.5rem] shadow-premium border border-black/5 p-4 relative overflow-hidden preserve-3d"
       >
         <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-slate-100">
          <Image 
           src="/dashboard-3d.png" 
           alt="MAS9 Elite Dashboard" 
           fill
           className="object-cover"
          />
         </div>
       </motion.div>
      </motion.div>
     </motion.div>
    </div>
   </section>

   {/* Mission & Values */}
   <section className="py-20 md:py-28 bg-[#f8f9fa]">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission And Values</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
       Built by martial artists, for martial artists. We understand the unique challenges of running a school.
      </p>
     </div>

     <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-border/50">
       <div className="size-12 rounded-2xl bg-[#E11D1D]/10 flex items-center justify-center mb-6">
        <Target className="size-6 text-[#E11D1D]" />
       </div>
       <h3 className="text-2xl font-bold mb-4">MAS9 Mission</h3>
       <p className="text-muted-foreground leading-relaxed">
        Our mission is to empower martial arts school owners with the world's most intuitive and powerful management platform. We strive to handle the "business side" so you can focus on the "martial arts side".
       </p>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-border/50">
       <div className="size-12 rounded-2xl bg-black/10 flex items-center justify-center mb-6">
        <Shield className="size-6 text-black" />
       </div>
       <h3 className="text-2xl font-bold mb-4">MAS9 Values</h3>
       <ul className="space-y-4">
        {[
         "Designed by School Owners",
         "Obsessed with User Experience",
         "AI-First Innovation",
         "Radical Transparency",
        ].map((value) => (
         <li key={value} className="flex items-center gap-3">
          <Check className="size-5 text-[#E11D1D]" />
          <span className="font-medium">{value}</span>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
     <div className="bg-[#E11D1D] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 size-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="relative z-10">
       <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Level Up Your School Starting Today</h2>
       <Button size="lg" className="bg-white text-[#E11D1D] hover:bg-white/90 px-10 h-14 text-lg font-bold">
        Get Started Free
        <ArrowRight className="ml-2 size-5" />
       </Button>
      </div>
     </div>
    </div>
   </section>
  </div>
 )
}
