import React from "react";
import type { Metadata } from "next";
import { MosaicGallery } from "app/components/mosaic-gallery";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">photos</h1>
      <hr className="page-title-divider" />
      <MosaicGallery
        images={[
          { src: "/photos/2022-11-13.jpg", alt: "UBB Central" },
          { src: "/photos/2023-02-12.jpg", alt: "UBB Courtyard" },
          { src: "/photos/2023-06-11.jpg", alt: "UBB" },
        ]}
      />
    </section>
  );
}
