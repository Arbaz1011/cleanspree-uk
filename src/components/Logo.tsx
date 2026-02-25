"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const LOGO_SRC = "/logo.png";

export default function Logo() {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center text-xl font-bold tracking-tight transition-colors hover:opacity-90 focus:opacity-90"
      aria-label={SITE_CONFIG.name}
    >
      {!failed ? (
        <span className="relative flex h-12 w-auto min-w-[3rem] items-center sm:h-14">
          <img
            src={LOGO_SRC}
            alt=""
            width={200}
            height={56}
            className="h-12 w-auto max-h-12 object-contain object-left sm:h-14 sm:max-h-14"
            loading="eager"
            onError={() => setFailed(true)}
          />
        </span>
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-600 text-white sm:h-12 sm:w-12">
          {SITE_CONFIG.name.charAt(0)}
        </span>
      )}
    </Link>
  );
}
