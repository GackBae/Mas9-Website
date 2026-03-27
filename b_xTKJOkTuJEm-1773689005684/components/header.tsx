"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, LogIn } from "lucide-react"

export function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 const [featureMenuOpen, setFeatureMenuOpen] = useState(false)

 return (
  <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
   <div className="container mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    <Link href="/" className="flex items-center">
     <Image
      src="/logo.png"
      alt="MAS9"
      width={180}
      height={48}
      className="h-10 w-auto"
      priority
     />
    </Link>

    <nav className="hidden lg:flex items-center gap-10">
     <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">Home</Link>
     <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900">About Us</Link>

     <div
      className="relative group"
     >
      <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
       Features
       <ChevronDown className="size-4" />
      </button>
      <div className="absolute top-full left-0 mt-2 w-52 rounded-lg border border-gray-200 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
       <Link href="/feature-saas" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Software</Link>
       <Link href="/feature-website" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Websites</Link>
       <Link href="/feature-marketing" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Marketing</Link>
      </div>
     </div>

     <Link href="/pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900">Pricing</Link>
     <Link href="https://help.mas9.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-slate-900">Help Center</Link>
     <Link href="/school-growth" className="text-sm font-medium text-slate-700 hover:text-slate-900">School Growth</Link>
    </nav>

    <div className="hidden lg:flex items-center gap-3">
      <Link
       href="https://school.mas9.com/login-school-admin"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
      >
       <LogIn className="size-4" />
       Log In
      </Link>
      <Link
       href="https://calendly.com/masnineusa/meeting?back=1&month=2025-06"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center gap-2 rounded-md bg-[#E11D1D] px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
     >
      Schedule Demo
     </Link>
    </div>

    <button
     className="lg:hidden p-2 text-slate-600"
     onClick={() => setMobileMenuOpen((prev) => !prev)}
     aria-label="Toggle mobile menu"
    >
     {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
    </button>
   </div>

   {mobileMenuOpen && (
    <div className="lg:hidden border-t border-gray-200 bg-white">
     <nav className="container mx-auto px-4 py-5 flex flex-col gap-4">
      <Link href="/" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      <Link href="/about" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
      <Link href="/feature-saas" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Software</Link>
      <Link href="/feature-website" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Websites</Link>
      <Link href="/feature-marketing" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Marketing</Link>
      <Link href="/pricing" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
      <Link href="https://help.mas9.com/" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Help Center</Link>
      <Link href="/school-growth" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>School Growth</Link>
      <div className="pt-3 mt-2 border-t border-gray-200 flex flex-col gap-3">
       <Link href="https://school.mas9.com/login-school-admin" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
       <Link href="https://calendly.com/masnineusa/meeting?back=1&month=2025-06" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-[#E11D1D] px-4 py-2 text-sm font-semibold text-white" onClick={() => setMobileMenuOpen(false)}>
       Schedule Demo
      </Link>
      </div>
     </nav>
    </div>
   )}
  </header>
 )
}
