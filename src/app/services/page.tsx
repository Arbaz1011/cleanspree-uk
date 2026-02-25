import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional cleaning services: hotel, office, house, end of tenancy, deep kitchen, new build and one-off cleaning across the UK.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero – cleanspree.ie style: simple, professional */}
      <section className="border-b border-slate-200 bg-slate-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Professional Cleaning Services
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <p className="mt-4 text-lg text-slate-600">
              We offer a comprehensive range of cleaning services tailored to meet your specific needs. Each service is delivered with the highest standards of professionalism and attention to detail.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Service list – cleanspree.ie: title, description, bullets, Book This Service */}
      <section className="py-12 sm:py-16" aria-label="Service list">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <AnimateOnScroll key={service.id} delay={(index % 2) as 0 | 1}>
                <article
                  id={service.id}
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid gap-0 sm:grid-cols-[minmax(0,280px)_1fr]">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 sm:h-auto sm:min-h-[220px]">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover"
                        width={400}
                        height={280}
                      />
                    </div>
                    <div className="p-8 sm:p-10">
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-slate-600">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {service.features.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – cleanspree.ie style: cyan strip */}
      <section className="border-t border-slate-200 bg-cyan-700 px-4 py-16 sm:py-20" aria-labelledby="services-cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="services-cta-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Ready to experience the difference?
          </h2>
          <p className="mt-3 text-cyan-100">
            Get in touch with us today for a free, no-obligation quote. Let us show you why we&apos;re a trusted cleaning service provider across the UK.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 font-semibold text-cyan-700 transition-colors hover:bg-cyan-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
