"use client"

import { Check, ArrowRight, Sparkles, Brain, TrendingUp, Users, MessageSquare, BarChart3, Zap, Target, Cpu } from "lucide-react"
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
    <section id="ai" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:2rem_2rem]" />
      {/* Single soft red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E11D1D]/8 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-[#E11D1D]/10 border border-[#E11D1D]/25 text-[#E11D1D] px-6 py-2.5 rounded-full text-sm font-bold mb-8 uppercase tracking-widest"
          >
            <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            AI Powered Growth Engine
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
          >
            Not Just AI, But{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#E11D1D] via-red-400 to-red-500 bg-clip-text text-transparent">
                Revenue-Driving
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#E11D1D]/30 to-red-500/30 blur-2xl opacity-40" />
            </span>
            {" "}AI
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            AI features in CRM aren't "nice-to-haves" - they're tools that{" "}
            <span className="text-white font-bold relative">
              directly impact revenue, conversion rates, and operational hours
            </span>
          </motion.p>
        </div>

        {/* Core Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {CORE_METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.15, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group h-full"
            >
              <div className="relative text-center p-10 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden h-full flex flex-col items-center justify-center hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300">
                
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-black text-[#E11D1D] mb-4">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-300 font-medium">{metric.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {AI_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group h-full"
            >
              <div className={`relative rounded-2xl p-8 overflow-hidden border transition-all duration-300 h-full flex flex-col ${
                feature.highlight 
                  ? 'bg-white/[0.05] border-[#E11D1D]/30 hover:border-[#E11D1D]/50' 
                  : 'bg-white/[0.03] border-white/8 hover:border-white/15'
              }`}>
                
                {/* Badge */}
                {feature.highlight && (
                  <div className="absolute top-4 right-4 bg-[#E11D1D] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-[#E11D1D]/50">
                    CORE AI
                  </div>
                )}
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className={`relative size-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    feature.highlight 
                      ? 'bg-[#E11D1D]/15 border border-[#E11D1D]/30' 
                      : 'bg-white/8 border border-white/10'
                  }`}>
                    <feature.icon className={`size-7 ${feature.highlight ? 'text-[#E11D1D]' : 'text-white/60'}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#E11D1D] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-base mb-5 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-2.5">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <div className={`mt-1.5 size-1.5 rounded-full shrink-0 ${feature.highlight ? 'bg-[#E11D1D]' : 'bg-white/30'}`} />
                          <span className="text-sm text-slate-400 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-3 bg-[#E11D1D]/10 border border-[#E11D1D]/20 text-white px-8 py-4 rounded-full text-sm font-bold mb-10">
            <Sparkles className="size-5 animate-pulse" />
            Focus on the 5 most impactful AI features that deliver real results
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            {[
              "AI Lead Scoring", 
              "AI Follow-up", 
              "Churn Prediction", 
              "AI Chatbot", 
              "Smart Messaging"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative group"
              >
                <div className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#E11D1D]/30 group-hover:bg-white/[0.06] transition-all duration-300">
                  <div className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            These 5 features alone will{" "}
            <span className="text-white font-black">
              immediately boost revenue and operational efficiency
            </span>
          </p>

        </motion.div>
      </div>
    </section>
  )
}
