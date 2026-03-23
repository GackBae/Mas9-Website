"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
 {
  quote: "MAS9 is the only platform we use now. It covers everything our martial arts school needs—management software, staff and student apps, our website, and even marketing. Everything works together, which saves us time and money.",
  author: "Grand Master Yang",
  role: "TKD School Owner",
  avatar: "GY",
  school: "Yang's Taekwondo Academy",
 },
 {
  quote: "MAS9 completely changed how professional our school operates. From student management to belt testing and communication, everything is connected in one system. Parents notice the difference, and our retention improved.",
  author: "Master Joshua",
  role: "TKD School Owner",
  avatar: "MJ",
  school: "Elite Martial Arts",
 },
 {
  quote: "MAS9's AI-powered chatbot answers questions and books trial classes for us around the clock—no manual follow-ups needed. Add in the automated billing and reminders, and we've freed up hours each week while boosting new-student conversions.",
  author: "Master SJ Kim",
  role: "TKD School Owner",
  avatar: "MK",
  school: "Kim's Martial Arts",
 },
]

export function TestimonialsSection() {
 return (
  <section className="py-24 md:py-32 bg-white relative overflow-hidden">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-20">
     <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center px-6 py-1.5 rounded-full border border-[#E11D1D] text-[#E11D1D] text-[10px] font-black mb-6 tracking-widest uppercase"
     >
      BASED ON 2,500+ REVIEWS
     </motion.div>
     <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-7xl font-extrabold text-[#0f172a] mb-6 tracking-tight"
     >
      Real Owner Voices
     </motion.h2>
     <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-lg text-[#64748b] font-medium"
     >
      Hear from school owners who have transformed their operations and growth with MAS9.
     </motion.p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
     {testimonials.map((testimonial, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1, duration: 0.5 }}
       className="relative group h-full"
      >
       <div className="h-full bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-10 transition-all hover:bg-white hover:shadow-xl group">
        <div className="flex gap-1 mb-8">
         {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 fill-[#fbbf24] text-[#fbbf24]" />
         ))}
        </div>
        
        <blockquote className="text-[#334155] font-medium leading-[1.6] text-lg mb-10 relative z-10">
         &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        
        <div className="mt-auto flex items-center gap-4">
         <div className="size-12 rounded-full bg-[#E11D1D] flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-xs">
           {testimonial.avatar}
          </span>
         </div>
         <div>
          <div className="font-bold text-[#0f172a] text-sm uppercase tracking-tight">
           {testimonial.author}
          </div>
          <div className="text-[#64748b] text-[10px] font-bold uppercase tracking-widest mt-0.5">
           {testimonial.school}
          </div>
         </div>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 )
}
