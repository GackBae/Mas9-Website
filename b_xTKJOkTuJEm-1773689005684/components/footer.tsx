import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

function MAS9FooterLogo() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#footerLogoGradient)" />
      <text x="7" y="22" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">M9</text>
      <text x="40" y="22" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui">MAS9</text>
    </svg>
  )
}

const footerLinks = {
  navigation: [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#" },
    { label: "Help Center", href: "#faq" },
  ],
  apps: [
    { label: "Member App Download", href: "#" },
    { label: "Admin App Download", href: "#" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <MAS9FooterLogo />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              All-in-one solutions for martial arts schools, afterschool programs, franchise networks, and instructors looking to grow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="size-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#ec4899] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps & Legal */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Apps</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.apps.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-5 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="size-4 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">Email Us</div>
                  <span className="text-white/80 text-sm">info@mas9.com</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="size-4 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">Call Us</div>
                  <span className="text-white/80 text-sm">(646) 466-6833</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-4 text-white/70" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">Address</div>
                  <span className="text-white/80 text-sm">
                    1 Pennsylvania Plaza, Suite 1423,<br />
                    New York, NY 10119 USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            All rights reserved MAS9 USA {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
