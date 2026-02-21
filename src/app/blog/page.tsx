import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Cleaning tips, industry news, and advice from Clean Spree UK.",
};

const POSTS = [
  {
    slug: "top-tips-keeping-office-clean",
    title: "Top tips for keeping your office clean",
    excerpt: "Simple habits and routines that help maintain a professional workspace and support productivity.",
    date: "2024-01-15",
  },
  {
    slug: "end-of-tenancy-cleaning-checklist",
    title: "End of tenancy cleaning checklist",
    excerpt: "What landlords and agents look for — and how to maximise your chance of getting your full deposit back.",
    date: "2024-01-08",
  },
  {
    slug: "why-deep-kitchen-cleaning-matters",
    title: "Why deep kitchen cleaning matters",
    excerpt: "Commercial and domestic kitchens need more than a quick wipe. Here's why deep cleans are essential.",
    date: "2023-12-20",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-slate-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Cleaning tips, industry news, and advice from the Clean Spree team.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-8">
            {POSTS.map((post) => (
              <li key={post.slug}>
                <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <time dateTime={post.date} className="text-sm text-slate-500">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-slate-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block font-medium text-teal-600 hover:underline"
                  >
                    Read more →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
