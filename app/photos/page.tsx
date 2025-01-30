import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={2}
        images={[
          {
            src: "/photos/2022-11-13.jpg",
            alt: "UBB Central",
          },
          {
            src: "/photos/2023-02-12.jpg",
            alt: "UBB Courtyard",
          },
          {
            src: "/photos/2023-06-11.jpg",
            alt: "UBB",
          },
        ]}
      />
    </section>
  );
}
