import Link from "next/link";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: "https://cleanspree-uk.com",
  telephone: SITE_CONFIG.phoneTel,
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
      {/* Hero – background image visible with logo-matching overlay (cyan + dark) */}
      <section
        className="hero-with-image relative overflow-hidden px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(15, 23, 42, 0.82) 0%, rgba(8, 145, 178, 0.4) 50%, rgba(15, 23, 42, 0.82) 100%), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920')",
        }}
        aria-labelledby="hero-heading"
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 id="hero-heading" className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Commercial Cleaning Services
          </h1>
          <p className="animate-fade-in-up delay-1 mt-6 text-lg text-slate-200 sm:text-xl">
            {SITE_CONFIG.name} delivers reliable, high-quality commercial cleaning for hotels, offices, restaurants, and more across the UK.
          </p>
          <div className="animate-fade-in-up delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-label="Trusted by businesses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-scale-in-spring">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
              Trusted by 100+ Businesses
            </p>
          </AnimateOnScroll>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-12 text-slate-600">
            {["Hotels", "Offices", "Restaurants", "Cinemas"].map((label, i) => (
              <AnimateOnScroll key={label} delay={i as 0 | 1 | 2 | 3 | 4 | 5} animation="animate-scale-in-spring">
                <span className="font-semibold transition-transform duration-300 hover:scale-110 hover:text-cyan-600">
                  {label}
                </span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-in-up-slow">
            <h2 id="services-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Professional Cleaning Services
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1} animation="animate-fade-in-up-slow">
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              From commercial to residential, we offer a full range of cleaning solutions tailored to your needs.
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i % 3 as 0 | 1 | 2 | 3 | 4 | 5} animation={i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}>
                <Link
                  href={`/services#${service.id}`}
                  className="hover-lift group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={250}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="absolute left-0 top-0 h-full w-1 rounded-l-full bg-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {service.shortDesc}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600 group-hover:underline">
                      Learn more
                      <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="animate-scale-in-spring">
            <div className="mt-14 flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center rounded-full bg-cyan-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-900/25 transition-all duration-300 hover:bg-cyan-700 hover:shadow-xl focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="advantage-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-in-up-slow">
            <h2 id="advantage-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              The Clean Spree Advantage
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1} animation="animate-fade-in-up-slow">
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              We are dedicated to delivering top-quality cleaning services, ensuring every space is spotless, hygienic, and welcoming.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Commercial Expertise", desc: "Specialized in commercial cleaning with experience across hotels, offices, and more." },
              { title: "Kitchen Deep Cleaning", desc: "Expert team maintaining the highest standards of cleanliness and safety." },
              { title: "Flexible Staffing", desc: "Reliable cleaners available to support your operations during busy periods." },
              { title: "24/7 Service", desc: "Round-the-clock options ensuring your premises are always maintained." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i as 0 | 1 | 2 | 3 | 4 | 5} animation="animate-scale-in-spring">
                <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-in-up-slow">
            <h2 id="process-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              Simple Process, Exceptional Results
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1} animation="animate-fade-in-up-slow">
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Getting started with our professional cleaning services is easy.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i as 0 | 1 | 2 | 3 | 4 | 5} animation="animate-scale-in-spring">
                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white shadow-lg ring-4 ring-cyan-100 transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/30 hover:ring-cyan-200">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="animate-fade-in-up-slow">
            <h2 id="testimonials-heading" className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1} animation="animate-fade-in-up-slow">
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Don&apos;t just take our word for it — hear from some of our satisfied clients.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i as 0 | 1 | 2 | 3 | 4 | 5} animation="animate-scale-in-spring">
                <blockquote className="hover-lift rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/5">
                  <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4">
                    <cite className="not-italic">
                      <span className="font-semibold text-slate-900">{t.name}</span>
                      <span className="text-slate-500"> — {t.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-700 px-4 py-20 sm:py-28" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-lg text-cyan-100">
            Get in touch with us today for a free, no-obligation quote. Let us show you why we&apos;re a trusted cleaning service provider across the UK.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-cyan-700 transition-colors hover:bg-cyan-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
