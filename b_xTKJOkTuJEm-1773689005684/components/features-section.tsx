import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, Smartphone, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: LayoutDashboard,
    title: "All-in-One School Management",
    description: "Easily manage attendance, billing, student progress, and communication from one dashboard.",
    gradient: "from-[#7c3aed] to-[#6366f1]",
    bgGradient: "from-[#7c3aed]/5 to-[#6366f1]/5",
  },
  {
    icon: Smartphone,
    title: "Student Mobile App",
    description: "Students can book classes, sign up for events and testing, and pay invoices—all in one place.",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    bgGradient: "from-[#ec4899]/5 to-[#f43f5e]/5",
  },
  {
    icon: Sparkles,
    title: "AI = More Students, Less Work",
    description: "Turn site visitors into trial sign-ups and get instant help writing emails, texts, and alerts.",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    bgGradient: "from-[#8b5cf6]/5 to-[#ec4899]/5",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#faf5ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Why MAS9?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Smarter Growth with MAS9
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run and grow your martial arts school, all in one platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border-0 shadow-lg bg-gradient-to-br ${feature.bgGradient} backdrop-blur hover:shadow-xl transition-all hover:-translate-y-1 group`}>
              <CardContent className="p-8">
                <div className={`size-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-[#7c3aed] hover:text-[#6d28d9] font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
