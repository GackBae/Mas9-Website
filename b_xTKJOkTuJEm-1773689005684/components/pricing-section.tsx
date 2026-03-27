"use client"

import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const PLANS = [
  {
    name: "Front Kick (Website)",
    price: 149,
    description: "High-performance school websites engineered for #1 rankings and student conversion.",
    features: [
      "V2.2 Custom Design",
      "SEO Architecture",
      "Lead Capture Engine",
      "Integrated Chatbot",
      "Speed Optimization",
      "Mobile First UI"
    ]
  },
  {
    name: "Software",
    price: 150,
    description: "The foundational Protocol_01 for elite martial arts schools. A unified OS that eliminates operational friction.",
    features: [
      "Unified Admin Hub",
      "Automated Testing Sync",
      "Real-time Attendance",
      "Staff Productivity Suite",
      "Automated Billing",
      "Student Mobile App"
    ]
  },
  {
    name: "Side Kick (Marketing)",
    price: 700,
    description: "Complete marketing domination for martial arts schools. Advanced growth strategies and campaign management.",
    features: [
      "SEO & SEM Strategy",
      "Social Media Management",
      "Content Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
      "Brand Development"
    ],
    highlight: true
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(225,29,29,0.08),transparent_35%),radial-gradient(circle_at_88%_12%,rgba(15,23,42,0.08),transparent_34%)] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full bg-[#E11D1D]/6 blur-[140px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#E11D1D]/10 text-[#E11D1D] px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
          >
            Invest in Victory
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Simple, <span className="text-gradient-red">Powerful</span> Pricing
          </motion.h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
              className={`relative bg-gradient-to-b from-slate-900 via-black to-slate-950 text-white rounded-[2.5rem] p-8 md:p-10 border ${plan.highlight ? 'border-[#E11D1D]/35 shadow-[0_30px_90px_rgba(225,29,29,0.22)]' : 'border-white/10 shadow-[0_28px_80px_rgba(2,6,23,0.5)]'} overflow-hidden group flex flex-col h-full [transform-style:preserve-3d]`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_48%)] pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-px bg-white/20 pointer-events-none" />
              <div className="absolute -top-20 -left-20 size-56 rounded-full bg-white/10 blur-[70px] pointer-events-none" />
              
              <div className="flex flex-col gap-8 flex-grow">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className={`size-5 ${plan.highlight ? 'text-[#E11D1D]' : 'text-white/40'}`} />
                    <span className="text-lg font-extrabold tracking-tight uppercase">{plan.name}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight">
                        ${plan.price}
                      </span>
                    <span className="text-white/50 font-bold">/mo</span>
                  </div>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="h-px bg-white/10 w-full" />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 group/item">
                        <div className="size-4 rounded-full bg-[#E11D1D]/20 flex items-center justify-center shrink-0 group-hover/item:scale-125 transition-transform">
                          <Check className="size-2.5 text-[#E11D1D]" />
                        </div>
                        <span className="text-[13px] font-semibold text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <Button className="w-full bg-white hover:bg-[#E11D1D] text-black hover:text-white h-14 text-base font-black rounded-full transition-all active:scale-95">
                  Choose Marketing Service
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <p className="text-center text-white/30 text-[10px] mt-4 font-bold uppercase tracking-widest leading-none">
                  No Contracts • Risk Free
                </p>
              </div>

              {/* Decorative Inner Glow */}
              <div className={`absolute -bottom-24 -left-24 size-64 rounded-full ${plan.highlight ? 'bg-[#E11D1D]/10' : 'bg-white/[0.02]'} blur-[80px] pointer-events-none`} />
              <div className={`absolute -top-24 -right-24 size-56 rounded-full ${plan.highlight ? 'bg-[#E11D1D]/12' : 'bg-white/[0.04]'} blur-[90px] pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
 return <div className={className}>{children}</div>
}
