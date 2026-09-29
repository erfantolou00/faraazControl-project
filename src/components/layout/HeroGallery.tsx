"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

const SLIDES = [
  "/heroSection/1.jpg",
  "/heroSection/2.jpg",
  "/heroSection/3.jpg",
  "/heroSection/4.jpg",
] as const;

const INTERVAL_MS = 5200;

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

interface HeroGalleryProps {
  title: string;
  locale: string;
}

export default function HeroGallery({ title, locale }: HeroGalleryProps) {
  const isRtl = locale === "fa";
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const labels = isRtl
    ? {
        region: "گالری تصاویر",
        prev: "تصویر قبلی",
        next: "تصویر بعدی",
        dot: (n: number) => `رفتن به تصویر ${n}`,
      }
    : {
        region: "Image gallery",
        prev: "Previous image",
        next: "Next image",
        dot: (n: number) => `Go to image ${n}`,
      };

  useEffect(() => {
    if (hovered || hidden || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [hovered, hidden, reducedMotion, index]);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + SLIDES.length) % SLIDES.length);
  }

  function onPointerUp(clientX: number) {
    if (dragStart == null) return;
    const delta = clientX - dragStart;
    setDragStart(null);
    if (Math.abs(delta) < 48) return;
    goTo(index + (delta < 0 ? 1 : -1));
  }

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false);
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        if (event.target instanceof Element && event.target.closest("button")) return;
        setDragStart(event.clientX);
      }}
      onPointerUp={(event) => onPointerUp(event.clientX)}
      onPointerCancel={() => setDragStart(null)}
    >
      <div className="relative h-full overflow-hidden">
        {SLIDES.map((src, slideIndex) => {
          const active = slideIndex === index;
          return (
            <div
              key={src}
              className={`absolute inset-0 ${reducedMotion ? "" : "transition-transform duration-700 ease-out"}`}
              style={{ transform: `translate3d(${(slideIndex - index) * 100}%, 0, 0)` }}
              aria-hidden={!active}
            >
              <Image
                src={src}
                alt={active ? title : ""}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                draggable={false}
                className="pointer-events-none object-cover"
                {...(slideIndex === 0 ? { priority: true } : { loading: "eager" as const })}
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-background/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 px-4 py-4">
        <p className="text-xs font-semibold tabular-nums text-text">
          {String(index + 1).padStart(2, "0")}
          <span className="text-text-muted"> / {String(SLIDES.length).padStart(2, "0")}</span>
        </p>

        <div className="flex items-center gap-2" dir="ltr">
          {SLIDES.map((src, slideIndex) => {
            const active = slideIndex === index;
            return (
              <button
                key={src}
                type="button"
                aria-label={labels.dot(slideIndex + 1)}
                aria-current={active ? "true" : undefined}
                onClick={() => goTo(slideIndex)}
                className={`h-1.5 transition-all ${active ? "w-6 bg-primary" : "w-1.5 bg-text/45 hover:bg-text/70"}`}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2" dir="ltr">
          <button
            type="button"
            aria-label={labels.prev}
            onClick={() => goTo(index - 1)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border bg-background/80 text-text backdrop-blur-sm transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            onClick={() => goTo(index + 1)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border bg-background/80 text-text backdrop-blur-sm transition hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {index + 1} / {SLIDES.length}
      </p>
    </div>
  );
}
