"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Headphones, Layers, Globe } from "lucide-react"

const faqCategories = {
  support: {
    label: "Support Team",
    icon: Headphones,
    items: [
      {
        question: "How can I contact MAS9 support?",
        answer: "You can contact us via live chat in your dashboard, email us at support@mas9.com, or call us directly at (646) 466 6833 during business hours.",
      },
      {
        question: "What are your support hours?",
        answer: "Our team is available Monday to Friday, 11 AM – 8 PM (EST). We respond to most inquiries within 24 hours.",
      },
      {
        question: "Can MAS9 help transfer my data from another software?",
        answer: "Yes. MAS9 helps Taekwondo schools, Karate schools, and other martial arts schools transfer student data, memberships, and billing information from existing software with minimal downtime.",
      },
      {
        question: "Do you offer onboarding or training?",
        answer: "Yes. We provide guided onboarding and training designed specifically for martial arts schools, including Taekwondo and Karate programs.",
      },
      {
        question: "Can I request help with custom features or improvements?",
        answer: "Absolutely. We welcome feedback and often roll out improvements based on school owners' needs. Just let our support team know what you're looking for!",
      },
    ],
  },
  features: {
    label: "Product Features",
    icon: Layers,
    items: [
      {
        question: "What features does MAS9 include?",
        answer: "MAS9 includes student management, attendance tracking, billing & invoicing, class scheduling, belt testing management, communication tools, a mobile app for students, and marketing features.",
      },
      {
        question: "Is there a mobile app for students?",
        answer: "Yes! Students and parents can download our mobile app to book classes, sign up for events, view schedules, and make payments.",
      },
      {
        question: "Can I manage multiple locations?",
        answer: "Yes, MAS9 supports multi-location management, allowing you to oversee all your schools from a single dashboard.",
      },
      {
        question: "Does MAS9 support belt testing management?",
        answer: "Yes. You can create tests, manage registrations, track results, and issue certificates all within MAS9.",
      },
      {
        question: "How does the billing system work?",
        answer: "MAS9 handles recurring billing, one-time payments, invoicing, and payment reminders automatically. We support credit cards, ACH, and other payment methods.",
      },
    ],
  },
  website: {
    label: "Website & AI",
    icon: Globe,
    items: [
      {
        question: "Does MAS9 offer website design?",
        answer: "Yes! We create custom, professional martial arts websites that are fully integrated with your MAS9 software.",
      },
      {
        question: "How does the AI chatbot work?",
        answer: "Our AI chatbot can answer common questions from website visitors, book trial classes automatically, and capture leads 24/7.",
      },
      {
        question: "Can MAS9 help with marketing?",
        answer: "Yes, we offer marketing services including SEO, social media ads, and lead generation campaigns specifically designed for martial arts schools.",
      },
      {
        question: "Are the websites mobile-friendly?",
        answer: "Absolutely. All MAS9 websites are fully responsive and optimized for mobile devices, ensuring a great experience for visitors on any device.",
      },
    ],
  },
}

export function FAQSection() {
  const [activeTab, setActiveTab] = useState("support")

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about MAS9 and our services.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-10 bg-muted/30 p-1.5 rounded-xl h-auto">
            {Object.entries(faqCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="flex items-center gap-2 py-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7c3aed] data-[state=active]:to-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all"
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(faqCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {category.items.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-muted/30 data-[state=open]:border-[#7c3aed]/30 transition-all"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5 [&[data-state=open]>span>span:first-child]:text-[#7c3aed]">
                      <span className="flex items-center gap-4">
                        <span className="text-muted-foreground font-bold text-sm min-w-[24px]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-foreground text-left">
                          {item.question}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-10 pb-5 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
