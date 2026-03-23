import { HeroSection } from "@/components/hero-section"
import ModernSoftwareSection from "@/components/modern-software-section"
import { ImpactSection } from "@/components/impact-section"
import { ServicesSection } from "@/components/services-section"
import { AISection } from "@/components/ai-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
 return (
  <>
   <HeroSection />
   <ModernSoftwareSection />
   <ImpactSection />
   <ServicesSection />
   <AISection />
   <PricingSection />
   <TestimonialsSection />
   <PartnersSection />
   <FAQSection />
   <CTASection />
  </>
 )
}
