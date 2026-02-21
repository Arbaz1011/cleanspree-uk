import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our completed cleaning projects and before/after results across the UK.",
};

const GALLERY_ITEMS = [
  { id: 1, title: "Office reception", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { id: 2, title: "Hotel lobby", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { id: 3, title: "Commercial kitchen", src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80" },
  { id: 4, title: "Meeting room", src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" },
  { id: 5, title: "Residential living room", src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { id: 6, title: "Bathroom", src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-slate-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A selection of completed projects and spaces we&apos;ve cleaned across the UK.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-label="Gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 font-medium text-slate-800">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
