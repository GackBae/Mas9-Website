import { Check } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    id: "website",
    label: "Website Service",
    name: "Website",
    price: "$149/mo",
    audience: "Best for schools that need stronger online conversion.",
    summary:
      "High-performance website service built to rank locally and convert trial students consistently.",
    highlights: [
      "Custom conversion-focused design",
      "Local SEO architecture for martial arts keywords",
      "Lead capture funnel + instant inquiry flow",
      "Mobile-first performance optimization",
      "Monthly updates and technical maintenance",
    ],
  },
  {
    id: "software",
    label: "Software Service",
    name: "Software",
    price: "$150/mo",
    audience: "Best for schools that want cleaner daily operations.",
    summary:
      "Operational software service for running attendance, billing, staff workflow, and student management in one system.",
    highlights: [
      "Unified admin dashboard",
      "Automated attendance and test tracking",
      "Billing and payment workflow automation",
      "Staff task and schedule tools",
      "Student app experience and notifications",
    ],
  },
  {
    id: "marketing",
    label: "Marketing Service",
    name: "Marketing",
    price: "$700/mo",
    audience: "Best for schools focused on consistent lead growth.",
    summary:
      "Growth marketing service focused on lead generation, trial booking, and predictable student acquisition.",
    highlights: [
      "SEO and paid ads strategy",
      "Social and short-form content system",
      "Lead nurturing automation",
      "Campaign testing and optimization",
      "Monthly analytics and growth reporting",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(225,29,29,0.08),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(148,163,184,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E11D1D]/6 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="max-w-5xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/20 bg-[#E11D1D]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#E11D1D]">
            Service Pricing
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-gray-950">
            Three Distinct Services.
            <span className="block text-[#E11D1D]">Three Clear Outcomes.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-500 leading-relaxed">
            MAS9 pricing is organized by service type so each offer is easy to compare: website, software, and marketing.
            Each service below is independent and can be started separately.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">01 Website</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">02 Software</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">03 Marketing</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            className={`rounded-3xl border border-gray-200 p-7 md:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
            }`}
          >
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10 lg:items-start">
              <aside className="lg:pr-8 lg:border-r lg:border-gray-200">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{service.label}</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-950 tracking-tight">{service.name}</h2>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{service.audience}</p>

                <div className="mt-6 rounded-2xl border border-[#E11D1D]/20 bg-[#E11D1D]/5 px-4 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E11D1D]">Monthly Investment</p>
                  <div className="mt-1 text-4xl font-black text-[#E11D1D] leading-none">{service.price}</div>
                </div>

                <div className="mt-6 space-y-2">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#E11D1D] px-6 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
                  >
                    Discuss This Service
                  </Link>
                  <Link
                    href={`/contact?service=${service.id}&trial=true`}
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#E11D1D]/30 bg-white px-6 py-3 text-sm font-bold text-[#E11D1D] hover:bg-[#E11D1D]/5 transition-colors"
                  >
                    Try for Free
                  </Link>
                </div>
              </aside>

              <div>
                <p className="text-base text-gray-600 leading-relaxed">{service.summary}</p>
                <h3 className="mt-6 mb-3 text-sm font-black uppercase tracking-[0.16em] text-gray-900">What&apos;s Included</h3>

              <ul className="space-y-3">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-[#E11D1D]/10 text-[#E11D1D]">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
