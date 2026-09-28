import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Kerala's Movement Pioneers | Calicut Parkour",
  description:
    "The story of Team NARA: from a few kids learning flips in Calicut to a community built around Parkour, Freerunning, Tricking, and human movement.",
  keywords: [
    "About Team NARA",
    "Parkour Kerala origins",
    "Calicut parkour history",
    "Traceur collective Kozhikode",
    "Street movement Kerala",
    "Team NARA coaches",
    "Parkour philosophy Calicut",
  ],
  alternates: {
    canonical: "https://teamnara.in/about",
  },
  openGraph: {
    title: "About Team NARA | Kerala's Movement Pioneers",
    description:
      "NARA comes from Sanskrit meaning human. Discover how a few kids learning flips built Kerala's parkour, freerunning, and tricking community in Calicut.",
    url: "https://teamnara.in/about",
    images: [
      {
        url: "/images/IMG_3116.PNG",
        width: 1200,
        height: 630,
        alt: "Team NARA Parkour Community at Calicut Beach",
      },
    ],
  },
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
      name: "About Us",
      item: "https://teamnara.in/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <AboutClient />
    </>
  );
}
