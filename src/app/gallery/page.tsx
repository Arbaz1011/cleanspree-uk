import type { Metadata } from "next";
import path from "path";
import fs from "fs";

// Ensure this route is included in the build
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our completed cleaning projects and before/after results across the UK.",
};

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const VIDEO_EXT = [".mp4", ".webm", ".mov"];

function getGalleryMedia() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  if (!fs.existsSync(galleryDir)) return { images: [], videos: [] };

  const files = fs.readdirSync(galleryDir);
  const images: string[] = [];
  const videos: string[] = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    // Skip shortcuts and non-media
    if (ext === ".lnk" || base.startsWith(".")) continue;
    if (IMAGE_EXT.includes(ext)) images.push(file);
    else if (VIDEO_EXT.includes(ext)) videos.push(file);
  }

  images.sort();
  videos.sort();
  return { images, videos };
}

export default function GalleryPage() {
  const { images, videos } = getGalleryMedia();

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

      {images.length > 0 && (
        <section className="py-16 sm:py-24" aria-label="Gallery images">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Photos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((file) => (
                <div
                  key={file}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/gallery/${file}`}
                      alt={file.replace(/\.[^.]+$/, "")}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="p-4 font-medium text-slate-800 capitalize">
                    {file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {videos.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24" aria-label="Gallery videos">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">Videos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((file) => (
                <div
                  key={file}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <video
                      src={`/gallery/${file}`}
                      controls
                      className="h-full w-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="p-4 font-medium text-slate-800 capitalize">
                    {file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {images.length === 0 && videos.length === 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center text-slate-600">
            <p>No images or videos in the gallery yet. Add files to the <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">public/gallery</code> folder.</p>
          </div>
        </section>
      )}
    </div>
  );
}
