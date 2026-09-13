import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";
import { EXTENDED_GALLERY } from "@/lib/galleryData";

export const metadata: Metadata = {
  title: "Visual Gallery | Parkour & Freerunning Photography Calicut",
  description:
    "Raw visual archive of Team NARA athletes in action along the coast of Calicut (Kozhikode), Kerala. Precision jumps, sea wall vaults, sunrise freerunning flow, and sunset jams.",
  keywords: [
    "Parkour photography Kerala",
    "Calicut parkour images",
    "Freerunning photos Kozhikode",
    "Team NARA gallery",
    "Beach parkour wallpaper",
    "Urban movement pictures Kerala",
  ],
  alternates: {
    canonical: "https://teamnara.in/gallery",
  },
  openGraph: {
    title: "Parkour & Freerunning Photo Gallery | Team NARA Calicut",
    description:
      "Explore high-resolution action frames, sunset beach jams, and movement progression along the Malabar coast of Kerala.",
    url: "https://teamnara.in/gallery",
    images: [
      {
        url: "/photos/IMG_2282.webp",
        width: 1200,
        height: 800,
        alt: "Sea Wall Precision Jump in Calicut by Team NARA",
      },
    ],
  },
};

const jsonLdGallery = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Team NARA Parkour Movement Gallery",
  description: "High-resolution photography documenting parkour and freerunning in Calicut, Kerala.",
  url: "https://teamnara.in/gallery",
  image: EXTENDED_GALLERY.map((item) => ({
    "@type": "ImageObject",
    contentUrl: `https://teamnara.in${item.src}`,
    name: item.title,
    description: item.description,
    caption: `${item.title} at ${item.location}`,
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://teamnara.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: "https://teamnara.in/gallery",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGallery) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <GalleryClient />
    </>
  );
}
