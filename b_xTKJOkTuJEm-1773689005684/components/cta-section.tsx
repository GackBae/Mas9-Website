import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#ec4899] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-white/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          <Sparkles className="size-4" />
          Start Your Free Trial
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance max-w-3xl mx-auto">
          Level Up Your School Starting Today
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
          All-in-one tools to simplify operations, engage students, and grow your school.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-[#7c3aed] hover:bg-white/90 px-8 h-12 font-semibold shadow-xl"
          >
            Get Started Free
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 h-12 font-semibold backdrop-blur-sm"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
