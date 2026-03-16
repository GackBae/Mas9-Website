"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function MAS9Logo() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logoGradient)" />
      <text x="7" y="22" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">M9</text>
      <text x="40" y="22" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="system-ui">MAS9</text>
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <MAS9Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-foreground hover:text-[#7c3aed] transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-[#7c3aed] transition-colors">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-[#7c3aed] transition-colors outline-none">
              Features <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem className="cursor-pointer">Admin Software</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Admin App</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Member App</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Websites</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Marketing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-[#7c3aed] transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-[#7c3aed] transition-colors">
            Help Center
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-[#7c3aed] transition-colors">
            School Growth
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log In
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white border-0 shadow-md shadow-[#7c3aed]/25"
          >
            Schedule Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link href="#" className="text-base font-medium text-foreground hover:text-[#7c3aed] py-2">
              Home
            </Link>
            <Link href="#about" className="text-base font-medium text-muted-foreground hover:text-[#7c3aed] py-2">
              About Us
            </Link>
            <Link href="#features" className="text-base font-medium text-muted-foreground hover:text-[#7c3aed] py-2">
              Features
            </Link>
            <Link href="#pricing" className="text-base font-medium text-muted-foreground hover:text-[#7c3aed] py-2">
              Pricing
            </Link>
            <Link href="#faq" className="text-base font-medium text-muted-foreground hover:text-[#7c3aed] py-2">
              Help Center
            </Link>
            <Link href="#" className="text-base font-medium text-muted-foreground hover:text-[#7c3aed] py-2">
              School Growth
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50 mt-2">
              <Button variant="outline" className="w-full h-11">
                Log In
              </Button>
              <Button 
                className="w-full h-11 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] hover:from-[#6d28d9] hover:to-[#db2777] text-white border-0"
              >
                Schedule Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
