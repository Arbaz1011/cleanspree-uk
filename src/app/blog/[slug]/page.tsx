import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const POSTS: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "top-tips-keeping-office-clean": {
    title: "Top tips for keeping your office clean",
    date: "2024-01-15",
    content: `
      A clean office isn't just about appearances — it supports focus, reduces illness, and makes a better impression on clients. Here are some simple habits that help.

      **Daily habits:** Encourage staff to clear desks at the end of the day, empty bins when full, and wipe down shared surfaces. Small actions add up.

      **Professional cleaning:** Schedule regular deep cleans with a professional team. We can work around your hours (including out of hours) so there's no disruption.

      **High-touch areas:** Keyboards, door handles, and kitchen areas need extra attention. Regular sanitising of these spots helps reduce the spread of germs.

      **Declutter:** Less clutter means easier cleaning and a calmer environment. Consider a clear-desk policy or regular declutter sessions.

      Need help with office cleaning? Get in touch for a free quote.
    `,
  },
  "end-of-tenancy-cleaning-checklist": {
    title: "End of tenancy cleaning checklist",
    date: "2024-01-08",
    content: `
      Moving out? A thorough end of tenancy clean can make the difference between getting your full deposit back or losing money. Here's what landlords and agents typically expect.

      **Kitchen:** All surfaces, inside and out of cupboards, appliances (including oven and fridge), and extractor. No grease or food residue.

      **Bathrooms:** Toilet, sink, bath/shower, tiles, and grout. Limescale and soap scum should be removed.

      **Living areas and bedrooms:** Floors vacuumed and mopped, skirting boards dusted, windows inside (and out if accessible). No personal items left behind.

      **General:** All rooms dusted, carpets professionally cleaned if required by your contract, and any marks on walls addressed (check your tenancy agreement).

      Many tenants hire a professional end of tenancy cleaning service to ensure nothing is missed. We provide a detailed clean that meets most agent checklists — contact us for a quote.
    `,
  },
  "why-deep-kitchen-cleaning-matters": {
    title: "Why deep kitchen cleaning matters",
    date: "2023-12-20",
    content: `
      Kitchens — whether at home or in a restaurant — accumulate grease, grime, and bacteria that a quick daily wipe can't tackle. Here's why deep cleaning is essential.

      **Food safety:** In commercial kitchens, deep cleaning is part of food safety compliance. Grease build-up can attract pests and harbour bacteria.

      **Equipment longevity:** Ovens, extractors, and grills last longer and work better when they're properly cleaned. Grease can affect performance and become a fire risk.

      **Health:** Mould, grease, and hidden dirt can affect air quality and health. Regular deep cleans keep the environment safe.

      **Peace of mind:** Knowing your kitchen has been professionally deep cleaned gives you confidence that every corner has been covered.

      We offer deep kitchen cleaning for both commercial and domestic clients. Get in touch for a free quote.
    `,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/\n/g, " "),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-teal-600 hover:underline"
        >
          ← Back to Blog
        </Link>
        <header className="mt-6">
          <time
            dateTime={post.date}
            className="text-sm text-slate-500"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>
        <div className="prose prose-slate mt-8 max-w-none">
          {paragraphs.map((p, i) => {
            if (p.startsWith("**") && p.endsWith("**")) {
              const text = p.slice(2, -2);
              return (
                <h2 key={i} className="mt-8 text-xl font-semibold text-slate-900">
                  {text}
                </h2>
              );
            }
            return (
              <p key={i} className="mt-4 text-slate-700 leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>
        <p className="mt-12">
          <Link
            href="/contact"
            className="font-medium text-teal-600 hover:underline"
          >
            Get a free quote →
          </Link>
        </p>
      </article>
    </div>
  );
}
