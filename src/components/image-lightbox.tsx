"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

function LightboxOverlay({
  images,
  alt,
  openIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  alt: string;
  openIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
      >
        ×
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="Image précédente"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:left-4"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Image suivante"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-4"
          >
            →
          </button>
        </>
      ) : null}

      <div className="relative h-full w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
        <Image src={images[openIndex]} alt={alt} fill sizes="100vw" className="object-contain" />
      </div>

      {images.length > 1 ? (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
          {openIndex + 1} / {images.length}
        </span>
      ) : null}
    </div>
  );
}

function useLightbox(count: number) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current - 1 + count) % count));
  }, [count]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current + 1) % count));
  }, [count]);

  return { openIndex, open: setOpenIndex, close, showPrev, showNext };
}

export function HeroLightboxImage({ src, alt }: { src: string; alt: string }) {
  const { openIndex, open, close, showPrev, showNext } = useLightbox(1);

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={`Agrandir l'image : ${alt}`}
        className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl border-0 bg-surface p-0"
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" priority />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-foreground">
            Agrandir
          </span>
        </span>
      </button>

      {openIndex !== null ? (
        <LightboxOverlay
          images={[src]}
          alt={alt}
          openIndex={openIndex}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}

export function GalleryLightbox({ images, alt }: { images: string[]; alt: string }) {
  const { openIndex, open, close, showPrev, showNext } = useLightbox(images.length);

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => open(index)}
            aria-label={`Agrandir l'image ${index + 1} du projet ${alt}`}
            className="group relative block aspect-[16/9] cursor-zoom-in overflow-hidden rounded-xl border-0 bg-surface p-0"
          >
            <Image src={src} alt={alt} fill className="object-cover object-top" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-foreground">
                Agrandir
              </span>
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <LightboxOverlay
          images={images}
          alt={alt}
          openIndex={openIndex}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
