import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Hotel cleaning, office cleaning, house cleaning, end of tenancy, deep kitchen cleaning, new build and one-off cleaning across the UK.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-slate-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Professional Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            From commercial to residential, we offer a full range of cleaning solutions across the UK.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-label="Service list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 flex flex-col gap-8 lg:flex-row lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                    <span className="text-2xl font-bold">{service.title.charAt(0)}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-slate-600">{service.description}</p>
                </div>
                <div className="flex-1">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-slate-200">
                    <img
                      src={`https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-teal-700 px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Need a custom solution?</h2>
        <p className="mt-2 text-teal-100">
          Contact us for a free, no-obligation quote tailored to your needs.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-teal-700 hover:bg-teal-50"
        >
          Get Free Quote
        </Link>
      </section>
    </div>
  );
}
