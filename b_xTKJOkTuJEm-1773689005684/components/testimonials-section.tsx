"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "MAS9 is the only platform we use now. It covers everything our martial arts school needs—management software, staff and student apps, our website, and even marketing. Everything works together, which saves us time and money.",
    author: "Grand Master Yang",
    role: "TKD School Owner",
    avatar: "GMY",
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
    avatar: "MSK",
    school: "Kim's Martial Arts",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf5ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-[#fbbf24] text-[#fbbf24]" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">Based on 456 Reviews</span>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Owner Voices
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Growth-accelerating products for martial arts schools and more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow relative overflow-hidden group">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="size-12 text-[#7c3aed]" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <blockquote className="text-card-foreground leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#ec4899] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
