import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Clean Spree for a free quote. Contact form, phone, email, and WhatsApp available.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-100/60 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Get a free, no-obligation quote. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
              <p className="mt-4 text-slate-600">
                Fill in the form and we&apos;ll get back to you as soon as possible. You can
                also reach us by phone, email, or WhatsApp.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <span className="font-medium text-slate-900">Email:</span>{" "}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-600 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-900">Phone:</span>{" "}
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className="text-cyan-600 hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                  <span className="block text-sm text-slate-500">From overseas: +353 1 4007531</span>
                </li>
                <li>
                  <span className="font-medium text-slate-900">WhatsApp:</span>{" "}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline"
                  >
                    Chat with us
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-900">Address:</span>{" "}
                  <span className="text-slate-600">{SITE_CONFIG.address}</span>
                </li>
              </ul>
              <div className="mt-8 rounded-2xl overflow-hidden bg-slate-200 aspect-video max-w-lg">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.474822938!2d-0.127758!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
