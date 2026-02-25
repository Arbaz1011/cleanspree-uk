import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Clean Spree | Professional Cleaning Services",
    template: "%s | Clean Spree",
  },
  description:
    "Professional cleaning services across the UK. Hotel, office, house, end of tenancy, and deep kitchen cleaning. Get a free quote today.",
  keywords: [
    "cleaning services UK",
    "office cleaning",
    "house cleaning",
    "end of tenancy cleaning",
    "hotel cleaning",
    "deep kitchen cleaning",
  ],
  authors: [{ name: "Clean Spree" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${dmSans.variable} min-h-screen bg-slate-50 antialiased`}>
        <GoogleAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cyan-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
