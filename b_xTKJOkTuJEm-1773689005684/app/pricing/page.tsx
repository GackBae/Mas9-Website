import { PricingSection } from "@/components/pricing-section"

export default function PricingPage() {
 return (
  <div className="flex flex-col">
   <div className="pt-20">
    <PricingSection />
   </div>
   
   {/* Additional Pricing FAQ or details can go here if needed to match mas9.com exactly */}
   <section className="py-20 bg-[#f8f9fa]">
    <div className="container mx-auto px-4 text-center">
     <h2 className="text-2xl font-bold mb-4">Included in the Pro Plan:</h2>
     <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted-foreground pt-8">
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> No Setup Fees
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> Unlimited Users
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> Free Migrations
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> Daily Backups
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> SSL Security
      </div>
      <div className="flex items-center gap-2 justify-center">
        <span className="size-2 rounded-full bg-[#E11D1D]" /> 24/7 Support
      </div>
     </div>
    </div>
   </section>
  </div>
 )
}
