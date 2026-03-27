"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Target, Shield, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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

const featuredMedia = [
 {
  name: "Yahoo Finance",
  mark: "Y!",
  sub: "Finance",
  href: "https://finance.yahoo.com/news/mas9-brings-digital-transformation-u-130000564.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMD4iwSNbqJZ_P4mkzjLDrOrf8UodfmdO44UAG8NGQt0Jiwk3pPUJn_mKJizAUSq3Mol1le-FQZlEE44up9q5eWXKAxwGEIsDSB69NYbBAPv1ePamTKAzLemUOto90mfLPhUXl_HiSLS39olrY8ERSDkM-NeAnBM6imQ-FjRUVX7",
 },
 { name: "Online Business Press", mark: "OB", sub: "Business" },
 { name: "Digital News Networks", mark: "DN", sub: "News" },
 { name: "Industry Publications", mark: "IP", sub: "Editorial" },
]

export default function AboutPage() {
 return (
  <div className="flex flex-col">
   {/* Hero Section */}
   <section className="py-16 md:py-20 bg-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/2" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid lg:grid-cols-[1fr_1.18fr] gap-16 items-center"
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
       <motion.p
        variants={itemVariants}
        className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl"
       >
        MAS9 has also been featured across multiple online news outlets, including{" "}
        <Link
         href="https://finance.yahoo.com/news/mas9-brings-digital-transformation-u-130000564.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMD4iwSNbqJZ_P4mkzjLDrOrf8UodfmdO44UAG8NGQt0Jiwk3pPUJn_mKJizAUSq3Mol1le-FQZlEE44up9q5eWXKAxwGEIsDSB69NYbBAPv1ePamTKAzLemUOto90mfLPhUXl_HiSLS39olrY8ERSDkM-NeAnBM6imQ-FjRUVX7"
         target="_blank"
         rel="noreferrer"
         className="font-semibold text-[#E11D1D] hover:text-black transition-colors"
        >
         Yahoo Finance
        </Link>
        .
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
       className="relative group -mr-8 lg:-mr-16"
      >
       {/* Ambient glow background */}
       <div className="absolute -inset-32 bg-gradient-to-tr from-[#E11D1D]/8 via-orange-500/5 to-transparent rounded-full blur-[150px] -z-10 animate-pulse" />
       
       <motion.div 
        whileHover={{ rotateY: -15, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative preserve-3d scale-105 lg:scale-115"
       >
         <div className="aspect-[4/3] relative min-h-[450px] md:min-h-[580px] lg:min-h-[680px]">
          {/* Multiple glow layers behind image */}
          <div className="absolute inset-0 opacity-35">
           <Image 
            src="/about-us.png" 
            alt="Glow layer" 
            fill
            className="object-contain blur-[60px] brightness-125 contrast-110"
           />
          </div>
          <div className="absolute inset-0 opacity-25">
           <Image 
            src="/about-us.png" 
            alt="Glow layer" 
            fill
            className="object-contain blur-[100px] brightness-150 saturate-125"
           />
          </div>
          {/* Main image with enhanced drop shadow */}
          <Image 
           src="/about-us.png" 
           alt="MAS9 Elite Dashboard" 
           fill
           className="object-contain relative z-10"
           style={{
            filter: 'drop-shadow(0 0 60px rgba(225, 29, 29, 0.15)) drop-shadow(0 0 120px rgba(225, 29, 29, 0.1)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.1))'
           }}
          />
         </div>
       </motion.div>
      </motion.div>
     </motion.div>
    </div>
   </section>

   <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200 overflow-hidden relative">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,transparent_15%,transparent_85%,rgba(255,255,255,0.95)_100%)] pointer-events-none z-10" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
     >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E11D1D] mb-3">As Featured In</p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Recognized Across Online Media</h2>
     </motion.div>

     <div className="relative py-4">
      <motion.div
       animate={{ x: [0, -1200] }}
       transition={{
        x: {
         repeat: Infinity,
         repeatType: "loop",
         duration: 25,
         ease: "linear",
        },
       }}
       className="flex gap-5 md:gap-6"
      >
       {[...featuredMedia, ...featuredMedia, ...featuredMedia, ...featuredMedia].map((outlet, index) => {
        const card = (
         <div
          key={`${outlet.name}-${index}`}
          className="group w-[200px] md:w-[240px] h-[170px] md:h-[190px] flex-shrink-0 rounded-2xl border-2 border-slate-200/80 bg-white p-5 md:p-6 shadow-lg hover:shadow-xl hover:border-[#E11D1D]/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center relative overflow-visible"
         >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          <div className="relative z-10 mb-3 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white font-black text-base tracking-wide shadow-md">
           {outlet.mark}
          </div>
          <p className="relative z-10 text-center text-slate-900 font-extrabold text-sm md:text-base tracking-tight mb-1 px-2 leading-tight">{outlet.name}</p>
          <p className="relative z-10 text-center text-slate-500 text-xs font-medium uppercase tracking-wider">{outlet.sub}</p>
         </div>
        )

        if (outlet.href) {
         return (
          <Link key={`${outlet.name}-${index}`} href={outlet.href} target="_blank" rel="noreferrer" className="block">
           {card}
          </Link>
         )
        }

        return card
       })}
      </motion.div>
     </div>
     <p className="text-center text-xs text-slate-400 mt-8">Logos and trademarks are property of their respective owners.</p>
    </div>
   </section>

   {/* Mission & Values */}
  <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50/70">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 mb-10">
     <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
     >
      <div className="inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/20 bg-[#E11D1D]/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#E11D1D]">
       Mission
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-5">
       Built for school owners who want elite systems.
      </h2>
      <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
       MAS9 unifies operations, retention, communication, and growth workflows into one operating system so your team can focus on teaching, not tool juggling.
      </p>
      <div className="relative grid grid-cols-2 gap-4">
       <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <Users className="size-5 text-[#E11D1D] mb-3" />
        <p className="text-2xl font-black tracking-tight text-slate-900">1,000+</p>
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mt-1">Schools Supported</p>
       </div>
       <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <Zap className="size-5 text-[#E11D1D] mb-3" />
        <p className="text-2xl font-black tracking-tight text-slate-900">24/7</p>
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mt-1">Automation Engine</p>
       </div>
      </div>
     </motion.div>

     <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="rounded-3xl border border-[#E11D1D]/15 bg-gradient-to-br from-white to-[#fff7f7] p-8 md:p-10 text-slate-900 relative overflow-hidden"
     >
      <div className="absolute -top-20 -right-12 size-56 rounded-full bg-[#E11D1D]/18 blur-3xl" />
      <div className="relative">
       <div className="size-12 rounded-2xl bg-[#E11D1D]/10 flex items-center justify-center mb-6">
        <Shield className="size-6 text-[#E11D1D]" />
       </div>
       <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">Our Values</h3>
       <p className="text-slate-600 mb-7 leading-relaxed">
        Every feature is shaped by real school operators, tested in real classes, and designed to improve execution at scale.
       </p>
       <ul className="space-y-3">
        {[
         "Designed by school owners",
         "Obsessed with practical UX",
         "AI-first, operator-controlled",
         "Transparent product partnership",
        ].map((value) => (
         <li key={value} className="flex items-center gap-3 text-sm md:text-base text-slate-800">
          <Check className="size-5 text-[#E11D1D]" />
          <span>{value}</span>
         </li>
        ))}
       </ul>
      </div>
     </motion.div>
    </div>

    <div className="grid sm:grid-cols-3 gap-4">
     {[
      { label: "Focus", value: "Train students, not spreadsheets" },
      { label: "Execution", value: "Systems that scale with your team" },
      { label: "Growth", value: "Retention and revenue in one view" },
     ].map((item) => (
      <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-4">
       <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E11D1D] mb-1">{item.label}</p>
       <p className="text-sm md:text-base font-semibold text-slate-900">{item.value}</p>
      </div>
     ))}
    </div>
   </div>
  </section>

  {/* CTA Section */}
  <section className="py-24 bg-white">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="rounded-3xl border border-[#E11D1D]/15 bg-gradient-to-br from-white to-[#fff7f7] p-8 md:p-10 text-slate-900 relative overflow-hidden">
     <div className="absolute -top-20 -right-12 size-56 rounded-full bg-[#E11D1D]/18 blur-3xl" />
     <div className="relative grid lg:grid-cols-[1.2fr_auto] gap-8 lg:gap-10 items-end">
      <div>
       <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E11D1D] mb-4">Next Step</p>
       <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        Build the school experience your members remember.
       </h2>
       <p className="text-slate-600 max-w-2xl leading-relaxed">
        Launch with a proven operating framework for attendance, billing, communication, and growth.
       </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
       <Button size="lg" className="bg-[#E11D1D] text-white hover:bg-red-700 px-9 h-14 text-base font-bold">
        Get Started Free
       </Button>
      </div>
     </div>
    </div>
   </div>
  </section>
  </div>
 )
}
