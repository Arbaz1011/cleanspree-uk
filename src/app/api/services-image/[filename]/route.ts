import { NextRequest, NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import { join, resolve } from "path";

const ALLOWED_NAMES = [
  "hotel-cleaning",
  "deep-kitchen",
  "office-cleaning",
  "house-cleaning",
  "new-build",
  "end-of-tenancy",
];
const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

async function findImagePath(filename: string): Promise<string | null> {
  const relPath = join("public", "images", "services", filename);
  let dir = process.cwd();
  const maxLevels = 8;
  for (let level = 0; level < maxLevels; level++) {
    const fullPath = join(dir, relPath);
    try {
      await access(fullPath);
      return fullPath;
    } catch {
      const cleanspreePath = join(dir, "cleanspree-uk", relPath);
      try {
        await access(cleanspreePath);
        return cleanspreePath;
      } catch {
        // continue
      }
      const parent = resolve(dir, "..");
      if (parent === dir) break;
      dir = parent;
    }
  }
  return null;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const raw = await params;
  const filename = raw?.filename ?? "";
  const base = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();

  if (!base || !ALLOWED_NAMES.includes(base) || !CONTENT_TYPES[ext]) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const path = await findImagePath(filename);
  if (!path) {
    return NextResponse.json(
      { error: "File not found", cwd: process.cwd() },
      { status: 404 }
    );
  }

  try {
    const buffer = await readFile(path);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": CONTENT_TYPES[ext],
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch {
    return NextResponse.json({ error: "Read failed" }, { status: 500 });
  }
}
