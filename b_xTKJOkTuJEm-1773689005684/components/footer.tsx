"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail } from "lucide-react"

const companyLinks = [
 { label: "Home", href: "/" },
 { label: "Features", href: "/feature-saas" },
 { label: "About Us", href: "/about" },
 { label: "Contact Us", href: "/contact" },
 { label: "Help Center", href: "https://mas9usa.notion.site/MAS9-Help-Center-1d1546c9736380658ec2fca8c659d77b" },
]

const appLinks = [
 { label: "Member App Download", href: "/member-app-download" },
 { label: "Admin App Download", href: "/admin-app-download" },
]

const legalLinks = [
 { label: "Terms Condition", href: "/terms" },
 { label: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
 return (
  <footer className="border-t border-gray-200 bg-white py-16">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
     <div className="space-y-4 lg:col-span-1">
      <Link href="/" className="inline-flex items-center">
       <Image
        src="/logo.png"
        alt="MAS9"
        width={180}
        height={48}
        className="h-10 w-auto"
       />
      </Link>
      <p className="max-w-sm text-sm text-slate-600">
       All-in-one solutions for martial arts schools, afterschool programs, franchise networks, and instructors looking to grow.
      </p>
     </div>

     <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">MAS9</h4>
      <ul className="space-y-2">
       {companyLinks.map((link) => (
        <li key={link.label}>
         <Link
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-sm text-slate-600 hover:text-slate-900"
         >
          {link.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">Apps</h4>
      <ul className="space-y-2">
       {appLinks.map((link) => (
        <li key={link.label}>
         <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
          {link.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">Contact & Legal</h4>
      <div className="space-y-2 text-sm text-slate-600 mb-4">
       {legalLinks.map((link) => (
        <Link key={link.label} href={link.href} className="block hover:text-slate-900">
         {link.label}
        </Link>
       ))}
      </div>
      <div className="space-y-3 text-sm text-slate-600">
       <div className="flex items-center gap-2">
        <Mail className="size-4 text-slate-500" />
        <span>info@mas9.com</span>
       </div>
       <div className="flex items-start gap-2">
        <MapPin className="mt-0.5 size-4 text-slate-500" />
        <span>1 Pennsylvania Plaza, Suite 1423, New York, NY 10119 USA</span>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-slate-500">
     <p>All rights reserved MAS9 USA® 2025</p>
    </div>
   </div>
  </footer>
 )
}
