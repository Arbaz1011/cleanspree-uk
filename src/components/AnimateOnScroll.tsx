"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Animation class when in view: animate-reveal, animate-reveal-up, animate-scale-in, etc. */
  animation?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  rootMargin?: string;
};

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "animate-reveal",
  delay = 0,
  rootMargin = "0px 0px -40px 0px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const delayClass = delay ? `animation-delay-${delay * 100}` : "";

  return (
    <div
      ref={ref}
      data-revealed={inView}
      className={`${inView ? animation : "opacity-0 translate-y-8"} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
