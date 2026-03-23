"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
 return (
  <section className="py-16 md:py-24 bg-[#E11D1D] relative overflow-hidden">
   {/* Background decorations */}
   <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-white/[0.03] bg-v-grid pointer-events-none" />
    <motion.div 
     animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1]
     }}
     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-20 left-1/4 size-96 rounded-full bg-white blur-3xl transition-opacity" 
    />
    <motion.div 
     animate={{ 
      scale: [1.2, 1, 1.2],
      opacity: [0.1, 0.2, 0.1]
     }}
     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
     className="absolute bottom-0 right-1/4 size-96 rounded-full bg-white blur-3xl" 
    />
   </div>
   
   <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
     <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
      <Sparkles className="size-4" />
      Start Your Free Trial
     </div>
     <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 text-balance max-w-4xl mx-auto tracking-tight leading-[1.1]">
      Level Up Your School Starting Today
     </h2>
     <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed">
      All-in-one tools to simplify operations, engage students, and grow your school.
     </p>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
       {/* Particle Pings around primary button */}
       <div className="absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 hidden sm:block pointer-events-none">
         {[0, 1, 2].map((i) => (
           <motion.div
             key={i}
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
             transition={{ 
               duration: 3, 
               repeat: Infinity, 
               delay: i * 1,
               ease: "easeOut"
             }}
             className="absolute inset-0 size-16 -ml-8 -mt-8 rounded-full border border-white/50"
           />
         ))}
       </div>

       <Button 
        size="lg" 
        className="bg-white text-[#E11D1D] hover:bg-white/90 px-10 h-14 text-lg font-bold rounded-full shadow-2xl transition-all active:scale-95 group relative z-10"
       >
        Get Started Free
        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
       </Button>
       <Button 
        size="lg" 
        variant="outline"
        className="border-white/30 text-white hover:bg-white/10 px-10 h-14 text-lg font-bold rounded-full backdrop-blur-sm transition-all active:scale-95 relative z-10"
       >
        Schedule Demo
       </Button>
     </div>
    </motion.div>
   </div>
  </section>
 )
}
