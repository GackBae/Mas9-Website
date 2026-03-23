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
import { motion } from "framer-motion"

const containerVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 0.8,
   ease: [0.22, 1, 0.36, 1] as any,
   staggerChildren: 0.1,
  },
 },
}

const itemVariants = {
 hidden: { opacity: 0, y: 10 },
 visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.5 },
 },
}

const faqCategories = {
// ... existing categories ...
 support: {
  label: "Support Team",
  icon: Headphones,
  items: [
   {
    question: "How can I contact MAS9 support?",
    answer: "You can contact us via live chat in your dashboard, email us at info@mas9.com, or call us directly at (646) 466 6833 during business hours.",
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
   {
    question: "Can I use my own domain name?",
    answer: "Yes, you can connect your existing domain to your MAS9 website, or we can help you register a new one.",
   },
  ],
 },
}

export function FAQSection() {
 const [activeTab, setActiveTab] = useState("support")

 return (
  <section id="faq" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-background relative border-t border-border/10">
   <div className="container mx-auto px-4 max-w-5xl pb-12">
    <motion.div 
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.3 }}
     variants={containerVariants}
     className="text-center mb-12"
    >
     <motion.div 
      variants={itemVariants}
      className="inline-flex items-center gap-2 bg-[#E11D1D]/10 text-[#E11D1D] px-4 py-1.5 rounded-full text-sm font-medium mb-6"
     >
      FAQ
     </motion.div>
     <motion.h2 
      variants={itemVariants}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
     >
      Frequently Asked Questions
     </motion.h2>
     <motion.p 
      variants={itemVariants}
      className="text-muted-foreground max-w-xl mx-auto"
     >
      Everything you need to know about MAS9 and our services.
     </motion.p>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8, delay: 0.2 }}
     className="overflow-visible"
    >
     <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full overflow-visible">
      <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/30 p-2 rounded-xl h-16 sm:h-20">
       {Object.entries(faqCategories).map(([key, category]) => {
        const Icon = category.icon
        return (
         <TabsTrigger 
          key={key} 
          value={key} 
          className="flex items-center gap-3 py-4 text-base sm:text-lg data-[state=active]:bg-[#E11D1D] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all font-semibold"
         >
          <Icon className="size-5 sm:size-6" />
          <span className="hidden sm:inline">{category.label}</span>
         </TabsTrigger>
        )
       })}
      </TabsList>

      {Object.entries(faqCategories).map(([key, category]) => (
       <TabsContent key={key} value={key} className="mt-0 p-4 overflow-visible">
        <Accordion type="single" collapsible className="w-full space-y-3 pb-8 overflow-visible">
         {category.items.map((item, index) => (
          <AccordionItem 
           key={index} 
           value={`item-${index}`} 
           className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-muted/30 data-[state=open]:border-[#E11D1D]/30 transition-all overflow-visible last:border-b"
          >
           <AccordionTrigger className="text-left hover:no-underline py-5 [&[data-state=open]>span>span:first-child]:text-[#E11D1D]">
            <span className="flex items-center gap-4">
             <span className="text-[#E11D1D]/70 font-black text-base md:text-lg min-w-[32px]">
              {String(index + 1).padStart(2, '0')}
             </span>
             <span className="font-bold text-foreground text-left text-lg md:text-xl tracking-tight">
              {item.question}
             </span>
            </span>
           </AccordionTrigger>
           <AccordionContent className="text-muted-foreground pl-12 pb-6 leading-relaxed text-base md:text-lg">
            {item.answer}
           </AccordionContent>
          </AccordionItem>
         ))}
        </Accordion>
       </TabsContent>
      ))}
     </Tabs>
    </motion.div>
   </div>
  </section>
 )
}
