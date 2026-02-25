import { NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import { join, resolve } from "path";

const LOGO_NAMES = ["logo.png", "logo.png.png", "logo.svg", "logo.webp"];
const CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function findLogoPath(): Promise<string | null> {
  // Allow explicit path (e.g. when running from another folder)
  const envPath = process.env.LOGO_PATH;
  if (envPath) {
    try {
      await access(envPath);
      return envPath;
    } catch {
      // fall through to search
    }
  }

  let dir = process.cwd();
  const maxLevels = 10;
  for (let level = 0; level < maxLevels; level++) {
    for (const name of LOGO_NAMES) {
      const fullPath = join(dir, "public", name);
      try {
        await access(fullPath);
        return fullPath;
      } catch {
        continue;
      }
    }
    const cleanspreePath = join(dir, "cleanspree-uk", "public");
    for (const name of LOGO_NAMES) {
      const fullPath = join(cleanspreePath, name);
      try {
        await access(fullPath);
        return fullPath;
      } catch {
        continue;
      }
    }
    const parent = resolve(dir, "..");
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

export async function GET() {
  const path = await findLogoPath();
  if (!path) {
    return NextResponse.json({ error: "Logo not found" }, { status: 404 });
  }
  const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
  const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream";
  try {
    const buffer = await readFile(path);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return NextResponse.json({ error: "Read failed" }, { status: 500 });
  }
}
