"use client";

import { useState, useCallback } from "react";

// Tiny transparent PNG so img always has valid src when showing placeholder text
const PLACEHOLDER_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

type Props = {
  src: string;
  alt: string;
  className?: string;
  apiFallbackSrc?: string;
};

export default function ServiceImage({
  src,
  alt,
  className = "",
  apiFallbackSrc,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);
  const [triedApi, setTriedApi] = useState(false);
  const [showPlaceholderText, setShowPlaceholderText] = useState(false);

  const handleError = useCallback(() => {
    if (apiFallbackSrc && !triedApi) {
      setTriedApi(true);
      setImgSrc(apiFallbackSrc);
      return;
    }
    setShowPlaceholderText(true);
    setImgSrc(PLACEHOLDER_DATA);
  }, [apiFallbackSrc, triedApi]);

  return (
    <span className="relative block h-full w-full">
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
      {showPlaceholderText && (
        <span className="absolute inset-0 flex items-center justify-center bg-slate-200 text-center text-sm font-medium text-slate-500">
          {alt}
        </span>
      )}
    </span>
  );
}
