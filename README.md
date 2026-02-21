# Clean Spree UK — Cleaning Services Website

A modern, responsive Next.js website for a UK-based cleaning service company. Built with the App Router, Tailwind CSS, and designed for scalability and easy content updates.

## Features

- **Pages:** Home, Services, About Us, Contact, Gallery, Blog
- **Services:** Hotel, Deep Kitchen, Office, House, New Build, End of Tenancy, One-Off cleaning
- **Contact form** with client-side validation (React Hook Form) and optional SMTP email via API route
- **Floating WhatsApp** button on all pages
- **Responsive & accessible** (WCAG-friendly focus states, semantic HTML, reduced motion support)
- **SEO:** Meta tags and semantic structure per page
- **UK-focused** content and locale (en-GB)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

### Contact form & email

1. Copy `.env.example` to `.env.local`.
2. Set SMTP variables to send contact form submissions by email:

   - `CONTACT_EMAIL` — where form submissions are sent
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — your SMTP provider (e.g. SendGrid, Mailgun, Gmail)
   - Optional: `SMTP_FROM` for the “From” address

Without SMTP, the form still returns success and logs the submission to the console (useful for local development).

### Site details (phone, email, WhatsApp)

Edit **`src/lib/constants.ts`** to update:

- Company name, tagline, description
- Phone, email, WhatsApp number (use UK format for WhatsApp, e.g. `447700900000`)
- Address and social links

## Project structure

- `src/app/` — App Router pages and API routes
- `src/components/` — Header, Footer, ContactForm, WhatsAppButton
- `src/lib/constants.ts` — Site config, services list, nav links (easy to edit)

## Adding content

- **Services:** Add or edit entries in `SERVICES` in `src/lib/constants.ts`. Add a new section on the Services page if needed.
- **Blog:** Add posts in `src/app/blog/page.tsx` (list) and `src/app/blog/[slug]/page.tsx` (post content). For a scalable setup, consider a headless CMS (e.g. Sanity, Contentful) and fetch content in these pages.
- **Gallery:** Update the `GALLERY_ITEMS` array in `src/app/gallery/page.tsx` with your images and titles.

## Deployment (Vercel)

1. Push the project to GitHub (or another Git provider).
2. In [Vercel](https://vercel.com), import the repository and deploy.
3. In the project **Settings → Environment Variables**, add your `CONTACT_EMAIL` and SMTP variables (and any other env vars).
4. Optionally add a custom domain in Vercel project settings.

## Analytics

To add Google Analytics:

1. Create a GA4 property and get your Measurement ID (e.g. `G-XXXXXXXXXX`).
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to `.env.local` (and in Vercel env vars for production).
3. Add the GA script in `src/app/layout.tsx` (e.g. using `next/script` and the official gtag snippet).

## Tech stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **React Hook Form** (contact form)
- **Nodemailer** (SMTP in API route)
- **Heroicons** (icons)

## License

Private — for Clean Spree UK use.
