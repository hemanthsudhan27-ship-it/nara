import type { Metadata } from "next";
import WhatWeDoClient from "@/components/WhatWeDoClient";

export const metadata: Metadata = {
  title: "What We Do | Parkour, Freerunning & Tricking Disciplines",
  description:
    "Explore the 5 disciplines of Team NARA in Calicut, Kerala: Parkour obstacle navigation, Freerunning acrobatic flow, Tricking martial arts kicks, Youth & corporate clinics, and coastal Community jams.",
  keywords: [
    "Parkour disciplines",
    "Freerunning tricks Kerala",
    "Tricking combos Calicut",
    "Parkour vaults and rolls",
    "Movement workshops Kerala",
    "Urban acrobatics Kozhikode",
    "Obstacle clearance training",
  ],
  alternates: {
    canonical: "https://teamnara.in/what-we-do",
  },
  openGraph: {
    title: "Parkour, Freerunning & Tricking Disciplines | Team NARA",
    description:
      "From utilitarian obstacle traversal to creative flow and martial kicks. Explore the 5 pillars of the Team NARA curriculum in Calicut.",
    url: "https://teamnara.in/what-we-do",
    images: [
      {
        url: "/images/IMG_3117.PNG",
        width: 1200,
        height: 630,
        alt: "Team NARA Movement Disciplines in Calicut",
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
      name: "What We Do",
      item: "https://teamnara.in/what-we-do",
    },
  ],
};

export default function WhatWeDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <WhatWeDoClient />
    </>
  );
}
