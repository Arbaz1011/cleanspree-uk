import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-800">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
                C
              </span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 text-sm text-slate-600">
              {SITE_CONFIG.tagline}. Professional cleaning across the UK.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/services#hotel-cleaning" className="hover:text-teal-600">Hotel Cleaning</Link></li>
              <li><Link href="/services#office-cleaning" className="hover:text-teal-600">Office Cleaning</Link></li>
              <li><Link href="/services#house-cleaning" className="hover:text-teal-600">House Cleaning</Link></li>
              <li><Link href="/services#end-of-tenancy" className="hover:text-teal-600">End of Tenancy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-600 hover:text-teal-600">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="text-slate-600 hover:text-teal-600">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="text-slate-600">{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-600"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-600"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
