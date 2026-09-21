import type { Metadata } from "next";
import CoachesClient from "@/components/CoachesClient";

export const metadata: Metadata = {
  title: "Meet Our Coaches | Coach Renjith & Coach Nithin | Team NARA",
  description:
    "Meet Team NARA coaches: Coach Renjith leading Batch 1 (Wandru) and Coach Nithin specializing in technical freerunning and urban spatial mastery in Calicut, Kerala.",
  keywords: [
    "Team NARA coaches",
    "Parkour coach Calicut",
    "Coach Renjith Wandru",
    "Coach Nithin freerunning",
    "Batch 1 Wandru Calicut",
    "Parkour trainers Kerala",
    "Freerunning mentors Kozhikode",
    "Street movement coaches India",
  ],
  alternates: {
    canonical: "https://teamnara.in/coaches",
  },
  openGraph: {
    title: "Meet the Coaches | Team NARA Calicut Parkour",
    description:
      "Train with Coach Renjith (Batch 1: Wandru) and Coach Nithin. Progressive outdoor parkour, vault dynamics, and freerunning flow on the coast of Calicut.",
    url: "https://teamnara.in/coaches",
    images: [
      {
        url: "/coaches/renjith/IMG_9167.webp",
        width: 1200,
        height: 630,
        alt: "Coach Renjith sunset backflip at Calicut Beach Pier",
      },
      {
        url: "/coaches/nithin/IMG_8202.JPG.webp",
        width: 1200,
        height: 630,
        alt: "Coach Nithin aerial urban gap leap",
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
      name: "Coaches",
      item: "https://teamnara.in/coaches",
    },
  ],
};

const jsonLdCoaches = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Team NARA Coaching Cadre",
  sport: "Parkour & Freerunning",
  location: {
    "@type": "Place",
    name: "South Beach Kozhikode (Calicut)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calicut",
      addressRegion: "Kerala",
      postalCode: "673001",
      addressCountry: "IN",
    },
  },
  coach: [
    {
      "@type": "Person",
      name: "Coach Renjith",
      jobTitle: "Head Coach & Founder (Lead Trainer, Batch 1: Wandru)",
      description:
        "Head coach leading Batch 1: Wandru with expertise in vault dynamics, precision rail jumps, and coastal acrobatics.",
      image: "https://teamnara.in/coaches/renjith/IMG_2007.webp",
    },
    {
      "@type": "Person",
      name: "Coach Nithin",
      jobTitle: "Senior Coach & Technical Movement Architect",
      description:
        "Senior coach specializing in technical freerunning, high-elevation architectural precision, wall climb velocity, and spatial navigation.",
      image: "https://teamnara.in/coaches/nithin/IMG_8202.JPG.webp",
    },
  ],
};

export default function CoachesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCoaches) }}
      />
      <CoachesClient />
    </>
  );
}
