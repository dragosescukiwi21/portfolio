"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4;
  clickable?: boolean;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  clickable = false,
}) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
  }, []);

  return (
    <>
      <section>
        <div className={`grid ${gridClass} gap-4 my-8`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square ${clickable ? "cursor-pointer transition-transform duration-200 hover:scale-[1.02]" : ""}`}
              onClick={
                clickable ? () => openLightbox(image.src, image.alt) : undefined
              }
            >
              {image.href && !clickable ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={image.href}
                  className="block w-full h-full"
                >
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    priority
                    className="rounded-lg object-cover"
                  />
                </a>
              ) : (
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                  className="rounded-lg object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="lightbox-image"
          />
        </div>
      )}
    </>
  );
};
