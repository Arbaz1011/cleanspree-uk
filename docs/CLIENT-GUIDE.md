# Clean Spree UK — Client Guide

This guide helps you update content and manage the website without needing deep technical knowledge.

## Updating contact details

**File:** `src/lib/constants.ts`

- **Phone:** Change `phone` (display) and `whatsapp` (numbers only, e.g. `447700900000` for UK).
- **Email:** Change `email` (this is also used as the default recipient for the contact form unless you set `CONTACT_EMAIL` in environment variables).
- **Address:** Change `address`.
- **Social links:** Update `social.facebook`, `social.instagram`, `social.linkedin` with your real URLs.

After editing, save the file. If the site is deployed on Vercel, push the changes to your Git repository and Vercel will redeploy automatically.

## Adding or editing services

**File:** `src/lib/constants.ts`

Find the `SERVICES` array. Each service has:

- `id` — used in the URL (e.g. `hotel-cleaning`). Use lowercase and hyphens.
- `title` — heading shown on the site.
- `shortDesc` — short line used on the Home and Services overview.
- `description` — full paragraph for the Services page.
- `icon` — optional; currently the first letter of the title is used as a visual.

To add a new service, copy an existing block and change the values. The new service will appear on the Home page (first 6) and on the full Services page.

## Editing the Home page

- **Testimonials:** In `src/app/page.tsx`, find `TESTIMONIALS` and edit the `name`, `role`, and `quote` for each.
- **Steps (How it works):** In the same file, find `STEPS` and edit `title` and `text`.
- **Advantage boxes:** Find the “Why choose us” section and edit the array of `{ title, desc }` objects.

## Contact form and email

1. **Where emails go:** Set the environment variable `CONTACT_EMAIL` (e.g. in Vercel: Project → Settings → Environment Variables) to the address that should receive form submissions.
2. **Sending email (SMTP):** To actually send emails, set these in the same place:
   - `SMTP_HOST` (e.g. `smtp.sendgrid.net`)
   - `SMTP_PORT` (often `587`)
   - `SMTP_USER` and `SMTP_PASS` (from your email/SMTP provider)
   - Optionally `SMTP_FROM` for the “From” name and address

If SMTP is not set, the form will still show “Message sent” but the submission will only be logged (useful when testing). See `.env.example` in the project root for a template.

## Gallery

**File:** `src/app/gallery/page.tsx`

Find `GALLERY_ITEMS`. Each item has `id`, `title`, and `src` (image URL). Add or replace entries with your own image URLs (e.g. from your CMS or image host). For best performance, use images around 600–800px wide.

## Blog

- **List of posts:** In `src/app/blog/page.tsx`, find the `POSTS` array. Each post has `slug`, `title`, `excerpt`, and `date`. Add new posts here.
- **Post content:** In `src/app/blog/[slug]/page.tsx`, find the `POSTS` object. Add a key that matches the `slug` and provide `title`, `date`, and `content` (use `**bold**` for subheadings and normal paragraphs separated by blank lines).

For many posts or non-technical editing, consider connecting a headless CMS (e.g. Sanity or Contentful) and loading posts from there instead; the current structure makes it easy to replace with API calls.

## WhatsApp button

The floating WhatsApp button appears on every page. The number it uses is set in `src/lib/constants.ts` under `whatsapp` (numbers only, e.g. `447700900000`). The pre-filled message can be changed in `src/components/WhatsAppButton.tsx` (search for “I'd like to get a quote”).

## Deploying updates (Vercel)

1. Commit and push your changes to GitHub (or your connected Git provider).
2. Vercel will automatically build and deploy. Check the “Deployments” tab for status.
3. If you use environment variables (e.g. for email), they are set in Vercel → Project → Settings → Environment Variables. No need to commit them.

## Adding Google Analytics

1. Create a GA4 property and copy the Measurement ID (e.g. `G-XXXXXXXXXX`).
2. In Vercel, add an environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`.
3. Redeploy. The site already includes the Analytics component; it only runs when this variable is set.

## Need help?

- **Technical setup (Vercel, Git, SMTP):** Your developer or the person who set up the project can help.
- **Content and images:** Use this guide and the files mentioned above. Keep a backup of any text before making large edits.
