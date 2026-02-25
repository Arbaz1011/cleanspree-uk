import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Clean Spree — our mission, values, and commitment to professional cleaning services across the UK.",
};

const VALUES = [
  {
    title: "Quality",
    description: "We never compromise on the standard of our work. Every job is completed to the highest level of cleanliness.",
  },
  {
    title: "Reliability",
    description: "When we say we'll be there, we're there. Our clients depend on us for consistent, punctual service.",
  },
  {
    title: "Integrity",
    description: "Transparent pricing, honest communication, and ethical practices in everything we do.",
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen, adapt, and go the extra mile to meet your needs.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-slate-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            About {SITE_CONFIG.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Your trusted partner for professional cleaning across the United Kingdom.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600">
                {SITE_CONFIG.name} was founded with a simple mission: to deliver exceptional cleaning
                services that businesses and households can rely on. With experience across hotels,
                offices, restaurants, and homes, we understand that every environment has unique
                needs. Our team is trained, insured, and committed to leaving every space spotless
                and hygienic.
              </p>
              <p className="mt-4 text-slate-600">
                We operate across the UK, offering flexible scheduling, transparent pricing, and
                a customer-first approach. Whether you need daily office cleaning, a one-off deep
                clean, or end of tenancy services, we're here to help.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80"
                alt="Cleaning team at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-cyan-700">{value.title}</h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-4 text-lg text-slate-600">
            To provide reliable, high-quality cleaning services that enhance the environments
            where people work and live — with integrity, professionalism, and a commitment to
            customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
}
