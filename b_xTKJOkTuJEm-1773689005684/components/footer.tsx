"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import Image from "next/image"

function MAS9FooterLogo() {
 return (
  <div className="relative h-14 w-60 bg-white/95 rounded-xl p-2 px-4 shadow-sm">
   <Image 
    src="/logo.png" 
    alt="MAS9 Logo" 
    fill
    className="object-contain object-left scale-90"
   />
  </div>
 )
}

const footerLinks = {
 navigation: [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "School Growth", href: "/school-growth" },
  { label: "Help Center", href: "#" },
 ],
 products: [
  { label: "Admin Software", href: "#" },
  { label: "Student App", href: "#" },
  { label: "Website Builder", href: "#" },
  { label: "AI Marketing", href: "#" },
 ],
 legal: [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
 ],
}

const socialLinks = [
 { icon: Facebook, href: "#" },
 { icon: Instagram, href: "#" },
 { icon: Youtube, href: "#" },
 { icon: Linkedin, href: "#" },
]

export function Footer() {
 return (
  <footer className="bg-background text-foreground pt-24 pb-12 relative overflow-hidden">
   {/* Subtle top border/glow */}
   <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
   
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
     {/* Brand Column */}
     <div className="lg:col-span-4 flex flex-col gap-8">
      <MAS9FooterLogo />
      <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-medium">
       The elite operating system for martial arts school growth. 
       Precision-engineered for masters who demand excellence.
      </p>
      <div className="flex gap-4">
       {socialLinks.map((social, i) => (
        <Link
         key={i}
         href={social.href}
         className="size-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-[#E11D1D] hover:shadow-[0_0_15px_rgba(225,29,29,0.4)] transition-all group"
        >
         <social.icon className="size-4 text-muted-foreground group-hover:text-white" />
        </Link>
       ))}
      </div>
     </div>

     {/* Links Columns */}
     <div className="lg:col-span-2">
      <h4 className="font-extrabold text-base uppercase tracking-[0.2em] mb-8 text-muted-foreground">Dynasty</h4>
      <ul className="flex flex-col gap-4">
       {footerLinks.navigation.map((link) => (
        <li key={link.label}>
         <Link href={link.href} className="text-muted-foreground hover:text-[#E11D1D] text-base font-bold transition-colors flex items-center gap-1 group">
          {link.label}
          <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
         </Link>
        </li>
       ))}
      </ul>
     </div>

     <div className="lg:col-span-2">
      <h4 className="font-extrabold text-base uppercase tracking-[0.2em] mb-8 text-muted-foreground">Ecosystem</h4>
      <ul className="flex flex-col gap-4">
       {footerLinks.products.map((link) => (
        <li key={link.label}>
         <Link href={link.href} className="text-muted-foreground hover:text-[#E11D1D] text-base font-bold transition-colors">
          {link.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Contact Column */}
     <div className="lg:col-span-4 bg-black/5 rounded-[2rem] p-8 border border-black/5">
      <h4 className="font-extrabold text-base uppercase tracking-[0.2em] mb-6 text-muted-foreground">Headquarters</h4>
      <div className="space-y-6">
       <div className="flex items-start gap-4">
        <div className="size-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
         <MapPin className="size-5 text-primary" />
        </div>
        <div>
         <span className="text-base font-bold block mb-1">New York Office</span>
         <span className="text-muted-foreground text-sm font-medium">
          1 Pennsylvania Plaza, Suite 1423,<br />
          New York, NY 10119 USA
         </span>
        </div>
       </div>
       <div className="flex items-center gap-4">
        <div className="size-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
         <Mail className="size-5 text-primary" />
        </div>
        <span className="text-base font-bold">info@mas9.com</span>
       </div>
       <div className="flex items-center gap-4">
        <div className="size-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
         <Phone className="size-5 text-primary" />
        </div>
        <span className="text-base font-bold">(646) 466-6833</span>
       </div>
      </div>
     </div>
    </div>

    <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
     <div className="flex flex-wrap justify-center gap-8 order-2 md:order-1">
      {footerLinks.legal.map((link) => (
       <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground text-sm font-bold transition-colors">
        {link.label}
       </Link>
      ))}
     </div>
     <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest order-1 md:order-2">
      © {new Date().getFullYear()} MAS9 Dynasty. All Rights Reserved.
     </p>
    </div>
   </div>
   
   {/* Decorative inner glow */}
   <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-[#E11D1D]/5 blur-[100px] pointer-events-none" />
  </footer>
 )
}
