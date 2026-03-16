"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Globe, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Smart School Management",
    description: "Manage memberships, billing, and communication—powered by AI. Save time with AI-written emails, texts, and push alerts.",
    features: ["Student Management", "Billing & Invoicing", "Class Scheduling", "Belt Testing"],
    cta: "Get Started Today",
    ctaLink: "#",
    gradient: "from-[#7c3aed] to-[#6366f1]",
  },
  {
    icon: Globe,
    title: "Custom Martial Arts Website",
    description: "Dominate online with a pro-level martial arts website – fully managed, no hassle.",
    features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Lead Capture"],
    cta: "Schedule Free Consulting",
    ctaLink: "#",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    icon: Megaphone,
    title: "Marketing Service",
    description: "From ads to SEO, we handle the marketing so you can focus on teaching.",
    features: ["Social Media Ads", "Google Ads", "SEO Optimization", "Lead Generation"],
    cta: "Schedule Free Consulting",
    ctaLink: "#",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ec4899]/10 text-[#ec4899] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            No More Tech Headaches
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simplify your operations, thrill your members, and focus on what truly matters – delivering world-class martial arts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 shadow-lg bg-card hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className={`size-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-[#7c3aed]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 h-11`}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
