"use client"

import { Check, ArrowRight, Sparkles, Brain, TrendingUp, Users, MessageSquare, BarChart3, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const AI_FEATURES = [
  {
    icon: Brain,
    title: "AI Lead Scoring",
    description: "Automatically score leads by conversion probability",
    benefits: ["Click behavior analysis", "Inquiry tracking", "Visit frequency prediction"],
    highlight: true
  },
  {
    icon: Zap,
    title: "AI Follow-up Automation",
    description: "Automated contact and messaging at optimal times",
    benefits: ["Smart timing recommendations", "Personalized messages", "24/7 response"]
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "24/7 inquiry response, booking, and consultation automation",
    benefits: ["Trial signup automation", "FAQ handling", "Live consultation support"]
  },
  {
    icon: TrendingUp,
    title: "Churn Prediction",
    description: "Predict student dropout risk and enable proactive intervention",
    benefits: ["Attendance decline detection", "Payment delay analysis", "Engagement monitoring"]
  },
  {
    icon: BarChart3,
    title: "Revenue Forecasting",
    description: "Predict monthly revenue and analyze seasonal trends",
    benefits: ["Accurate revenue prediction", "Seasonal pattern analysis", "Growth strategy insights"]
  },
  {
    icon: Target,
    title: "Personalized Recommendations",
    description: "Customer-specific program suggestions and upsell opportunities",
    benefits: ["Custom program recommendations", "Equipment upsells", "Additional class suggestions"]
  }
]

const CORE_METRICS = [
  {
    value: "Revenue ↑",
    description: "Up to 40% improvement in lead conversion"
  },
  {
    value: "Time ↓", 
    description: "25% reduction in operational hours"
  },
  {
    value: "Retention ↑",
    description: "30% decrease in customer churn rate"
  }
]

export function AISection() {
  return (
    <section id="ai" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-[#E11D1D]/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#E11D1D]/10 text-[#E11D1D] px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
          >
            AI Powered Growth
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Not Just AI, But <span className="text-gradient-red">Revenue-Driving</span> AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            AI features in CRM aren't "nice-to-haves" - they're tools that<br />
            <span className="text-foreground font-bold">directly impact revenue, conversion rates, and operational hours</span>.
          </motion.p>
        </div>

        {/* Core Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {CORE_METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-black/5 border border-white/10"
            >
              <div className="text-3xl font-black text-[#E11D1D] mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {AI_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative bg-black text-white rounded-2xl p-8 shadow-premium border ${feature.highlight ? 'border-[#E11D1D]/30' : 'border-white/5'} overflow-hidden group`}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-8 bg-[#E11D1D] text-white text-[10px] font-black px-4 py-1.5 rounded-b-xl uppercase tracking-[0.2em]">
              CORE FEATURE
                </div>
              )}
              
              <div className="flex items-start gap-6">
                <div className={`size-12 rounded-xl ${feature.highlight ? 'bg-[#E11D1D]/20' : 'bg-white/10'} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`size-6 ${feature.highlight ? 'text-[#E11D1D]' : 'text-white/80'}`} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-[#E11D1D]" />
                        <span className="text-[13px] text-white/60">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Inner Glow */}
              <div className={`absolute -bottom-16 -right-16 size-32 rounded-full ${feature.highlight ? 'bg-[#E11D1D]/10' : 'bg-white/[0.02]'} blur-[60px] pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#E11D1D]/10 text-[#E11D1D] px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Sparkles className="size-4" />
            Focus on the 5 most impactful AI features that deliver real results
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {[
              "AI Lead Scoring", 
              "AI Follow-up", 
              "Churn Prediction", 
              "AI Chatbot", 
              "Smart Messaging"
            ].map((item, index) => (
              <div key={index} className="text-center p-3 rounded-xl bg-black/5 border border-white/10">
                <div className="text-xs font-bold text-foreground">{item}</div>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            These 5 features alone will <span className="text-[#E11D1D] font-bold">immediately boost revenue and operational efficiency</span>
          </p>

          <Button className="bg-[#E11D1D] hover:bg-white text-white hover:text-black h-14 text-base font-black rounded-full transition-all active:scale-95 px-8">
            View AI Features
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
