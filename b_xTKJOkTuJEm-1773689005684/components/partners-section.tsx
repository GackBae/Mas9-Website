"use client"

function WorldTaekwondoLogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#1e3a5f" strokeWidth="2" fill="none" />
    <path d="M20 5 C28 12, 28 28, 20 35 C12 28, 12 12, 20 5" fill="#c41e3a" />
    <path d="M20 5 C12 12, 12 28, 20 35 C28 28, 28 12, 20 5" fill="#1e3a5f" fillOpacity="0.8" />
   </svg>
   <div className="text-left">
    <div className="text-[10px] font-bold text-[#1e3a5f] leading-tight">WORLD</div>
    <div className="text-[10px] font-bold text-[#1e3a5f] leading-tight">TAEKWONDO</div>
   </div>
  </div>
 )
}

function USATaekwondoLogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#002868" />
    <rect y="0" width="36" height="3" fill="#bf0a30" />
    <rect y="6" width="36" height="3" fill="#bf0a30" />
    <rect y="12" width="36" height="3" fill="#bf0a30" />
    <rect y="18" width="36" height="3" fill="#bf0a30" />
    <rect y="24" width="36" height="3" fill="#bf0a30" />
    <rect y="30" width="36" height="3" fill="#bf0a30" />
    <rect width="18" height="18" fill="#002868" />
    {[...Array(6)].map((_, i) => (
     <circle key={i} cx={6 + (i % 3) * 5} cy={4 + Math.floor(i / 3) * 5} r="1" fill="white" />
    ))}
   </svg>
   <div className="text-left">
    <div className="text-[10px] font-bold text-[#002868] leading-tight">USA</div>
    <div className="text-[10px] font-bold text-[#002868] leading-tight">TAEKWONDO</div>
   </div>
  </div>
 )
}

function KukkiwonLogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" stroke="#1a1a1a" strokeWidth="2" fill="none" />
    <circle cx="18" cy="18" r="12" fill="#c41e3a" />
    <circle cx="18" cy="18" r="8" fill="#002868" />
    <circle cx="18" cy="18" r="4" fill="#ffd700" />
   </svg>
   <span className="text-xs font-bold text-[#1a1a1a]">KUKKIWON</span>
  </div>
 )
}

function ATALogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2 L34 34 L2 34 Z" fill="#c41e3a" />
    <text x="13" y="28" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">A</text>
   </svg>
   <span className="text-lg font-bold text-[#c41e3a]">ATA</span>
  </div>
 )
}

function ITFLogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" fill="#002868" />
    <text x="8" y="23" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">ITF</text>
   </svg>
   <span className="text-lg font-bold text-[#002868]">ITF</span>
  </div>
 )
}

function USAKarateLogo() {
 return (
  <div className="flex items-center gap-2">
   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="#002868" />
    <polygon points="18,6 20,14 28,14 22,19 24,27 18,22 12,27 14,19 8,14 16,14" fill="white" />
   </svg>
   <div className="text-left">
    <div className="text-[10px] font-bold text-[#002868] leading-tight">USA</div>
    <div className="text-[10px] font-bold text-[#002868] leading-tight">KARATE</div>
   </div>
  </div>
 )
}

export function PartnersSection() {
 return (
  <section className="py-16 md:py-20 bg-background border-y border-border/30">
   <div className="container mx-auto px-4">
    <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-10">
     In Partnership with Leading Martial Arts Brands
    </h3>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
     <WorldTaekwondoLogo />
     <USATaekwondoLogo />
     <KukkiwonLogo />
     <ATALogo />
     <ITFLogo />
     <USAKarateLogo />
    </div>
   </div>
  </section>
 )
}
