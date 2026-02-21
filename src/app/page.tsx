import Link from "next/link";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: "https://cleanspree-uk.com",
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: { "@type": "PostalAddress", addressLocality: SITE_CONFIG.address },
  areaServed: "GB",
  priceRange: "££",
};

const TESTIMONIALS = [
  {
    name: "Sarah Thompson",
    role: "Hotel Manager",
    quote:
      "Clean Spree has been instrumental in maintaining the high standards of cleanliness at our hotel. Their attention to detail and professional approach is outstanding.",
  },
  {
    name: "Michael O'Brien",
    role: "Office Building Owner",
    quote:
      "We've been using Clean Spree for our office cleaning needs for over a year now. Their reliability and quality of service is exceptional.",
  },
  {
    name: "Emma Walsh",
    role: "Homeowner",
    quote:
      "The end of tenancy cleaning service was fantastic. They transformed the property and helped us secure our full deposit back.",
  },
];

const STEPS = [
  { step: 1, title: "Contact Us", text: "Reach out via phone, email, or our contact form. We'll respond within 24 hours." },
  { step: 2, title: "Free Quote", text: "We'll assess your needs and provide a detailed, transparent quote with no hidden costs." },
  { step: 3, title: "Schedule Service", text: "Choose a convenient time that works for you. We're flexible and accommodating." },
  { step: 4, title: "Enjoy Results", text: "Sit back and relax while our expert team delivers spotless, professional cleaning." },
];

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920')] bg-cover bg-center opacity-25 mix-blend-overlay" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Professional Cleaning Services Across the UK
          </h1>
          <p className="mt-6 text-lg text-teal-100 sm:text-xl">
            {SITE_CONFIG.name} delivers reliable, high-quality cleaning for hotels, offices, homes, and more across the United Kingdom.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-400 hover:shadow-xl focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-label="Trusted by businesses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted by 100+ Businesses
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 text-slate-600">
            <span className="font-semibold">Hotels</span>
            <span className="font-semibold">Offices</span>
            <span className="font-semibold">Restaurants</span>
            <span className="font-semibold">Homes</span>
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="py-20 sm:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Professional Cleaning Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            From commercial to residential, we offer a full range of cleaning solutions tailored to your needs.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <span className="text-xl font-bold">{service.title.charAt(0)}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-teal-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-600">{service.shortDesc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-teal-600 group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-teal-600 font-medium hover:underline"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="advantage-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="advantage-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            The Clean Spree Advantage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            We are dedicated to delivering top-quality cleaning services, ensuring every space is spotless, hygienic, and welcoming.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Commercial Expertise", desc: "Specialized in commercial cleaning with experience across hotels, offices, and more." },
              { title: "Kitchen Deep Cleaning", desc: "Expert team maintaining the highest standards of cleanliness and safety." },
              { title: "Flexible Staffing", desc: "Reliable cleaners available to support your operations during busy periods." },
              { title: "24/7 Service", desc: "Round-the-clock options ensuring your premises are always maintained." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Simple Process, Exceptional Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Getting started with our professional cleaning services is easy.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Don&apos;t just take our word for it — hear from some of our satisfied clients.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-slate-900">{t.name}</span>
                    <span className="text-slate-500"> — {t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 px-4 py-20 sm:py-28" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Get in touch today for a free, no-obligation quote. Let us show you why we&apos;re a trusted cleaning service across the UK.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-teal-700 shadow-lg transition-all hover:bg-teal-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
