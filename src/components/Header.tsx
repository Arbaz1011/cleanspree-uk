"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/98 shadow-sm shadow-slate-900/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-slate-600 transition-colors hover:text-cyan-600 focus:text-cyan-600 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-700 hover:shadow-md hover:shadow-cyan-900/20 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 sm:inline-flex"
          >
            Get Free Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:ring-2 focus:ring-cyan-500 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" aria-hidden />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-slate-50/80 md:hidden ${open ? "block" : "hidden"}`}
        role="region"
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col gap-0 py-2">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-slate-700 hover:bg-slate-100 hover:text-cyan-600 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="border-t border-slate-100 px-4 py-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-cyan-600 py-3 text-center font-semibold text-white hover:bg-cyan-700 shadow-sm"
            >
              Get Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
