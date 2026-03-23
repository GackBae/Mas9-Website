import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from "@/components/header"
import { AiAgent } from "@/components/ai-agent"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: 'MAS9 — Smart Software for Martial Arts Schools',
 description: 'Simplify operations, boost engagement and grow your school—all in one powerful platform.',
 generator: 'v0.app',
 icons: {
  icon: [
   {
    url: '/icon-light-32x32.png',
    media: '(prefers-color-scheme: light)',
   },
   {
    url: '/icon-dark-32x32.png',
    media: '(prefers-color-scheme: dark)',
   },
   {
    url: '/icon.svg',
    type: 'image/svg+xml',
   },
  ],
  apple: '/apple-icon.png',
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
    </div>
    <Analytics />
   </body>
  </html>
 )
}
