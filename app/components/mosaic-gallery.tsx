"use client";

import React, { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface MosaicImage {
  src: string;
  alt: string;
  span?: "normal" | "wide" | "tall"; // layout variety
}

interface MosaicGalleryProps {
  images: MosaicImage[];
}

export const MosaicGallery: React.FC<MosaicGalleryProps> = ({ images }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  // Assign spans deterministically so it looks varied
  const spannedImages = images.map((img, i) => ({
    ...img,
    span: img.span ?? (i % 5 === 0 ? "wide" : i % 7 === 3 ? "tall" : "normal"),
  }));

  const getColSpan = (span: string) => {
    if (span === "wide") return "col-span-2";
    return "col-span-1";
  };

  const getRowSpan = (span: string) => {
    if (span === "tall") return "row-span-2";
    return "row-span-1";
  };

  const getAspect = (span: string) => {
    if (span === "wide") return "aspect-[2/1]";
    if (span === "tall") return "aspect-[1/2]";
    return "aspect-square";
  };

  return (
    <>
      <div className="my-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {spannedImages.map((img, index) => (
          <div
            key={index}
            className={`relative ${getAspect(img.span!)} ${getColSpan(img.span!)} ${getRowSpan(img.span!)} overflow-hidden rounded-lg cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-[1.01]`}
            onClick={() => openLightbox(img.src, img.alt)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 780px) 50vw, 25vw"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {mounted && lightboxSrc && createPortal(
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="lightbox-image"
          />
        </div>,
        document.body
      )}
    </>
  );
};
