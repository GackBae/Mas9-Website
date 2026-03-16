"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Calendar, CreditCard, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background gradient blurs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 size-[600px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="absolute top-20 right-1/4 size-[500px] rounded-full bg-[#ec4899]/10 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 text-[#7c3aed] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Star className="size-4 fill-[#7c3aed]" />
            #1 Martial Arts School Software
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Power Your School with{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">MAS9</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Simplify operations, boost engagement and grow your school—all in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white border-0 px-8 h-12 text-base font-semibold shadow-lg shadow-[#7c3aed]/25"
            >
              Get Started Free
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base border-border hover:bg-muted">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup with floating cards */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating Card - Left Top */}
          <div className="absolute -left-4 md:-left-12 top-8 z-10 hidden sm:block">
            <div className="bg-card rounded-xl shadow-xl p-4 border border-border/50 w-48">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#ec4899] flex items-center justify-center">
                  <Users className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Active Students</div>
                  <div className="text-lg font-bold text-card-foreground">2,847</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-500">
                <TrendingUp className="size-3" />
                <span>+12% this month</span>
              </div>
            </div>
          </div>

          {/* Floating Card - Right Top */}
          <div className="absolute -right-4 md:-right-12 top-20 z-10 hidden sm:block">
            <div className="bg-card rounded-xl shadow-xl p-4 border border-border/50 w-48">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-[#ec4899] to-[#f43f5e] flex items-center justify-center">
                  <Calendar className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Classes Today</div>
                  <div className="text-lg font-bold text-card-foreground">24</div>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#ec4899] to-[#f43f5e] rounded-full" />
              </div>
            </div>
          </div>

          {/* Floating Card - Left Bottom */}
          <div className="absolute -left-4 md:-left-8 bottom-12 z-10 hidden sm:block">
            <div className="bg-card rounded-xl shadow-xl p-4 border border-border/50 w-52">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center">
                  <CreditCard className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                  <div className="text-lg font-bold text-card-foreground">$48,294</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
          </div>

          {/* Main Dashboard Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            {/* Browser Chrome */}
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground max-w-xs">
                  app.mas9.com/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 bg-gradient-to-br from-[#faf5ff] to-white min-h-[400px]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Welcome back, Master Kim</p>
                </div>
                <div className="flex gap-2">
                  <div className="bg-card rounded-lg px-3 py-1.5 text-xs border border-border/50">Today</div>
                  <div className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white rounded-lg px-3 py-1.5 text-xs">This Week</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Students", value: "2,847", change: "+12%" },
                  { label: "Active Classes", value: "156", change: "+8%" },
                  { label: "Revenue", value: "$48,294", change: "+23%" },
                  { label: "Retention", value: "94.2%", change: "+2%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-card rounded-xl p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-emerald-500">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="bg-card rounded-xl p-4 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-foreground text-sm">Student Growth</h4>
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-[#7c3aed]" /> New
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-[#ec4899]" /> Active
                    </span>
                  </div>
                </div>
                {/* Simplified Chart */}
                <div className="h-32 flex items-end gap-2">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1">
                      <div 
                        className="bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-t-sm opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
