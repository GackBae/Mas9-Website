"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, FileCheck, DollarSign, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SoftwarePage() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,29,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,116,139,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-slate-50 border border-red-100 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#E11D1D]" />
              <span className="text-sm font-semibold text-slate-700">Trusted by 500+ Martial Arts Schools</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
              What Makes MAS9 <br />
              <span className="bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">Stand Out</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Explore the powerful tools that make running your martial arts school easier than ever.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="group bg-[#E11D1D] text-white hover:bg-red-700 px-10 h-14 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="https://calendly.com/masnineusa/meeting?back=1&month=2026-03" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-slate-900 hover:bg-slate-50 border-2 border-slate-200 px-10 h-14 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                  Schedule Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Easy to Use */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(225,29,29,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
                <Sparkles className="w-4 h-4 text-[#E11D1D]" />
                <span className="text-xs font-semibold text-[#E11D1D] uppercase tracking-wide">Intuitive Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Easy to Use<br />
                <span className="bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">Hard to Beat</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Spend less time fighting clunky systems. MAS9 is designed to be clean, easy, and powerful — so you can focus on your martial arts school.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">The Best Intuitive Interface</h3>
                      <p className="text-slate-600 text-sm">MAS9 is so simple, your whole team can start using it right away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E11D1D]/20 to-red-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-slate-50 to-red-50 rounded-3xl border border-slate-200 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: All Digital */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(100,116,139,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200/50 to-slate-300/50 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-2xl"></div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <FileCheck className="w-4 h-4 text-slate-700" />
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Digital First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                From Sign-Ups<br />to Payments—<br />
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">All Digital</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                From sign-ups to testing, ditch the paperwork and manage everything in one simple platform.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Trial Form, Membership Agreements, Event Registration and More</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/member-app-download" className="group inline-flex items-center gap-2 text-[#E11D1D] font-bold hover:gap-3 transition-all">
                  Explore Member App 
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 3: Billing */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Smart Billing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Save Time,<br />Get Paid Faster,<br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Worry Less</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Cut down on fees and late payments with a tuition billing system built for martial arts schools.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Industry Lowest Merchant Fees</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Smart Tracking. Timely Follow-Ups. Paid Faster</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl border border-green-100 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Level Up Your School Starting Today
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of martial arts schools using MAS9 to streamline operations and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E11D1D] text-white hover:bg-red-700 px-10 h-14 text-lg font-bold rounded-full">
              Start Free Trial
            </Button>
            <Link href="https://calendly.com/masnineusa/meeting?back=1&month=2026-03" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-10 h-14 text-lg font-bold rounded-full">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
