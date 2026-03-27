import Link from "next/link"
import { ShieldCheck, Apple, PlayCircle, Sparkles } from "lucide-react"

export default function AdminAppDownloadPage() {
  return (
    <main className="relative min-h-[78vh] overflow-hidden bg-[linear-gradient(160deg,#fff8f3_0%,#ffffff_46%,#fff4eb_100%)] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-14 top-12 h-64 w-64 rounded-full bg-[#E11D1D]/10 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#eddccf] bg-white/90 p-8 shadow-[0_35px_80px_-40px_rgba(125,61,35,0.45)] backdrop-blur sm:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/20 bg-[#E11D1D]/10 px-4 py-2 text-sm font-semibold text-[#E11D1D]">
            <Sparkles className="h-4 w-4" />
            Admin App
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#221913] sm:text-5xl">
            Download MAS9 Admin App
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6b5647] sm:text-lg">
            Manage classes, members, attendance, and announcements from one dedicated admin app.
            Choose your platform and get started.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              href="https://play.google.com/store/apps/details?id=com.mas9fr.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#ead7c8] bg-[#fff9f4] p-5 transition hover:-translate-y-0.5 hover:border-[#E11D1D]/35 hover:bg-white"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe9dc] text-[#E11D1D]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold text-[#271d16] group-hover:text-[#E11D1D]">
                Download for Android
              </p>
              <p className="mt-1 text-sm text-[#7f6858]">Google Play Store</p>
            </Link>

            <Link
              href="https://apps.apple.com/us/app/mas9-admin/id6749735289"
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

          <div className="mt-8 rounded-2xl border border-[#f1dfd2] bg-[#fff5ec] p-4 text-sm text-[#7b6352] sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-medium text-[#5f4a3d]">
              <ShieldCheck className="h-4 w-4 text-[#E11D1D]" />
              Built for MAS9 school owners and staff
            </div>
            <span className="mt-2 block text-xs sm:mt-0">Role-based access · Secure sync · Operational control</span>
          </div>
        </div>
      </div>
    </main>
  )
}
