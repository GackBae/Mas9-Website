import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AiAgent } from "@/components/ai-agent"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: 'MAS9 — Smart Software for Martial Arts Schools',
 description: 'Simplify operations, boost engagement and grow your school—all in one powerful platform.',
 generator: 'v0.app',
 icons: {
  icon: '/favicon.png',
  apple: '/favicon.png',
 },
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html lang="en">
   <body className="font-sans antialiased">
    <div className="min-h-screen flex flex-col">
     <Header />
     <main className="flex-1">
      {children}
     </main>
     <Footer />
    </div>
    <Analytics />
   </body>
  </html>
 )
}
