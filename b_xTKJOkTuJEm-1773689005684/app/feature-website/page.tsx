"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Smartphone, Zap, Palette, Search, Globe, TrendingUp, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function WebsitePage() {
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
              <Globe className="w-4 h-4 text-[#E11D1D]" />
              <span className="text-sm font-semibold text-slate-700">Beautiful Websites That Convert</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
              Professional Websites <br />
              <span className="bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">for Martial Arts Schools</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Stand out online with a stunning, high-converting website designed specifically for martial arts schools. Attract more students and grow your business.
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

      {/* Feature 1: Custom Design */}
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
                <Palette className="w-4 h-4 text-[#E11D1D]" />
                <span className="text-xs font-semibold text-[#E11D1D] uppercase tracking-wide">Beautiful Design</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Custom Design<br />
                <span className="bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">Tailored to You</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Beautiful, professional websites tailored to your martial arts school's brand and identity.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Mobile Responsive</h3>
                      <p className="text-slate-600 text-sm">Fully optimized for all devices</p>
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

      {/* Feature 2: SEO & Performance */}
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
                <Search className="w-4 h-4 text-slate-700" />
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">SEO Optimized</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Get Found Online<br />
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">Rank Higher</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Built with search engine optimization in mind to help potential students find your school online.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Lightning-Fast Performance</h3>
                      <p className="text-slate-600 text-sm">Visitors stay engaged and don't bounce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 3: Lead Conversion */}
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
                <TrendingUp className="w-4 h-4 text-[#E11D1D]" />
                <span className="text-xs font-semibold text-[#E11D1D] uppercase tracking-wide">High Converting</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Turn Visitors<br />Into Students<br />
                <span className="bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">Automatically</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Built-in forms and CTAs designed to convert visitors into trial students.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Easy Content Management</h3>
                      <p className="text-slate-600 text-sm">Update anytime without technical knowledge</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Secure & Reliable</h3>
                      <p className="text-slate-600 text-sm">99.9% uptime guarantee</p>
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a professional website that attracts students and grows your martial arts school.
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
