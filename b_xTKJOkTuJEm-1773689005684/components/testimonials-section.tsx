"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion, useMotionValue, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
 {
  quote: "After using Kicksite, switching to MAS9 has been a great decision for our school. What stands out is how much they listen to school owners and continuously improve their platform based on real feedback. It's not just software—they genuinely care about helping our business grow.",
  author: "School Owner",
  role: "Martial Arts School",
  image: "/review-1.png",
  school: "Verified Review",
  logo: "/kims-tkd-logo.png",
 },
 {
  quote: "MAS9 is a modern solution that's clearly designed for martial arts schools. The face recognition check-in and testing scoring system have saved us a lot of time, and the ability to customize testing certificates adds a professional touch for our students. What really stands out is their customer support—they're responsive, listen to school owners, and keep improving the platform. It's been a great experience working with them.",
  author: "Master Yunho Kim",
  role: "Master",
  image: "/review-2.png",
  school: "Kim's Tae Kwon Do, Idaho",
  logo: "/yh-logo.png",
 },
 {
  quote: "I'm not very comfortable with computers, so I was worried about switching systems. But MAS9 has been very easy to use, and the admin app makes everything simple to manage. Their customer support is extremely friendly and always ready to help. It really took a lot of stress off running our school.",
  author: "Master Hama Alzouma",
  role: "Master",
  image: "/review-3.png",
  school: "Empower Taekwondo, NC",
  logo: "/empower-logo.png",
 },
 {
  quote: "MAS9 has really improved how we communicate with our students and parents. The app makes it easy for families to stay updated with schedules and announcements, and it has made our school feel much more organized and professional.",
  author: "Grand Master Kwangil Bae",
  role: "Grand Master",
  image: "/review-4.png",
  school: "Elite Taekwondo Center",
  logo: "/elite-logo.jpeg",
 },
]

export function TestimonialsSection() {
 const [isDragging, setIsDragging] = useState(false)
 const x = useMotionValue(0)
 const controls = useAnimationControls()

 useEffect(() => {
  if (!isDragging) {
   const currentX = x.get()
   controls.start({
    x: [currentX, currentX - 1600],
    transition: {
     duration: 40 * (1 - (Math.abs(currentX) % 1600) / 1600),
     ease: "linear",
     repeat: Infinity,
     repeatType: "loop",
    },
   })
  } else {
   controls.stop()
  }
 }, [isDragging, controls, x])

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
    
    <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
     <motion.div 
      className="flex gap-8"
      drag="x"
      dragConstraints={{ left: -3200, right: 0 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      style={{ x }}
      animate={controls}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
     >
      {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
       <div
        key={index}
        className="relative group flex-shrink-0 w-[380px] flex flex-col"
       >
       <div className="flex-1 flex flex-col bg-gradient-to-br from-white to-slate-50/80 rounded-[2.5rem] border border-slate-200/60 p-10 transition-all hover:shadow-2xl hover:border-slate-300/80 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E11D1D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        {testimonial.logo && (
         <div className="absolute top-6 right-10 z-10">
          <Image 
           src={testimonial.logo}
           alt="School Logo"
           width={48}
           height={48}
           className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
          />
         </div>
        )}
        
        <div className="flex gap-1 mb-8 relative z-10">
         {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-5 fill-[#fbbf24] text-[#fbbf24] drop-shadow-sm" />
         ))}
        </div>
        
        <blockquote className="text-slate-700 font-medium leading-[1.7] text-base mb-10 relative z-10 min-h-[280px]">
         &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        
        <div className="flex items-center gap-4 relative z-10">
         {testimonial.image ? (
          <div className="size-14 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
           <Image 
            src={testimonial.image} 
            alt={testimonial.author}
            width={56}
            height={56}
            className="object-cover w-full h-full"
           />
          </div>
         ) : testimonial.avatar ? (
          <div className="size-14 rounded-full bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center shadow-lg">
           <span className="text-white font-bold text-sm">
            {testimonial.avatar}
           </span>
          </div>
         ) : null}
         <div>
          <div className="font-extrabold text-slate-900 text-sm uppercase tracking-tight">
           {testimonial.author}
          </div>
          <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mt-1">
           {testimonial.school}
          </div>
         </div>
        </div>
       </div>
       </div>
      ))}
     </motion.div>
    </div>
   </div>
  </section>
 )
}
