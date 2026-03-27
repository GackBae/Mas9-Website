import Link from "next/link"
import { Smartphone, Apple, PlayCircle, Sparkles } from "lucide-react"

export default function MemberAppDownloadPage() {
  return (
    <main className="relative min-h-[78vh] overflow-hidden bg-[linear-gradient(160deg,#fff8f3_0%,#ffffff_46%,#fff4eb_100%)] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#E11D1D]/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#eddccf] bg-white/90 p-8 shadow-[0_35px_80px_-40px_rgba(125,61,35,0.45)] backdrop-blur sm:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/20 bg-[#E11D1D]/10 px-4 py-2 text-sm font-semibold text-[#E11D1D]">
            <Sparkles className="h-4 w-4" />
            Student App
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#221913] sm:text-5xl">
            Download MAS9 Member App
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6b5647] sm:text-lg">
            Access schedules, attendance, announcements, and progress updates in one place.
            Pick your device below and install in seconds.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              href="https://play.google.com/store/apps/details?id=com.mas9&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#ead7c8] bg-[#fff9f4] p-5 transition hover:-translate-y-0.5 hover:border-[#E11D1D]/35 hover:bg-white"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe9dc] text-[#E11D1D]">
                <Smartphone className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold text-[#271d16] group-hover:text-[#E11D1D]">
                Download for Android
              </p>
              <p className="mt-1 text-sm text-[#7f6858]">Google Play Store</p>
            </Link>

            <Link
              href="https://apps.apple.com/us/app/mas9/id6503226761"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#ead7c8] bg-[#fff9f4] p-5 transition hover:-translate-y-0.5 hover:border-[#E11D1D]/35 hover:bg-white"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe9dc] text-[#E11D1D]">
                <Apple className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold text-[#271d16] group-hover:text-[#E11D1D]">
                Download for iOS
              </p>
              <p className="mt-1 text-sm text-[#7f6858]">Apple App Store</p>
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-[#f1dfd2] bg-[#fffaf5] p-5 text-sm text-[#5f4a3d]">
            <h2 className="text-base font-semibold text-[#2a1e16]">Log In to the MAS9 App</h2>
            <ul className="mt-3 space-y-1.5">
              <li>
                <span className="font-semibold">Username:</span> Your email address
              </li>
              <li>
                <span className="font-semibold">Temporary Password:</span> The part of your email before the "@" symbol
              </li>
            </ul>

            <div className="mt-4 rounded-xl border border-[#ead8ca] bg-white p-4 text-sm">
              <p className="font-semibold text-[#2a1e16]">For example,</p>
              <p className="mt-2 text-[#5f4a3d]">
                ID : <span className="font-medium">test@gmail.com</span>
              </p>
              <p className="text-[#5f4a3d]">
                PW : <span className="font-medium">test</span>
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#f1dfd2] bg-[#fff5ec] p-4 text-sm text-[#7b6352] sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-medium text-[#5f4a3d]">
              <Smartphone className="h-4 w-4 text-[#E11D1D]" />
              Recommended for all active MAS9 students
            </div>
            <span className="mt-2 block text-xs sm:mt-0">Fast install · Secure login · Real-time updates</span>
          </div>
        </div>
      </div>
    </main>
  )
}
