import type { Metadata } from "next";
import CoachesClient from "@/components/CoachesClient";

export const metadata: Metadata = {
  title: "Meet Our Coaches | Coach Wandru, Coach Nithin & Coach Dadu | Team NARA",
  description:
    "Meet Team NARA coaches: Coach Wandru (Renjith), Coach Nithin Tom, and Coach Dadu (Sarathnad). Experienced movement pioneers with over 8 years of coaching in Calicut, Kerala.",
  keywords: [
    "Team NARA coaches",
    "Parkour coach Calicut",
    "Coach Renjith Wandru",
    "Coach Nithin Tom",
    "Coach Dadu Sarathnad",
    "Origins Gym Canada coach",
    "Batch 1 Wandru Calicut",
    "Parkour trainers Kerala",
    "Freerunning mentors Kozhikode",
    "Speed parkour India",
  ],
  alternates: {
    canonical: "https://teamnara.in/coaches",
  },
  openGraph: {
    title: "Meet the Coaches | Team NARA Calicut Parkour",
    description:
      "Train with Coach Wandru (Renjith), Coach Nithin Tom, and Coach Dadu (Sarathnad). Progressive outdoor parkour, pure speed mechanics, and creative freerunning in Calicut.",
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
      {
        url: "/gallery/IMG_2282.webp",
        width: 1200,
        height: 800,
        alt: "Coach Dadu sea wall precision leap at Calicut Beach",
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
      name: "Coach Wandru (Renjith)",
      jobTitle: "Head Coach (Lead Trainer, Batch 1: Wandru)",
      description:
        "Training Parkour since 2016–17 with a Karate and martial arts background. Multiple national-level title winner specializing in Freerunning, flips, tricks, and creative movement.",
      image: "https://teamnara.in/coaches/renjith/IMG_2007.webp",
    },
    {
      "@type": "Person",
      name: "Coach Nithin Tom",
      jobTitle: "Senior Coach & International Parkour Athlete",
      description:
        "Training Parkour since 2017 with a Track & Field background. Former coach at Origins Gym in Canada, international speed event winner, and one of India’s finest Parkour athletes.",
      image: "https://teamnara.in/coaches/nithin/IMG_8202.JPG.webp",
    },
    {
      "@type": "Person",
      name: "Coach Dadu (Sarathnad)",
      jobTitle: "Senior Coach & Movement Pioneer",
      description:
        "Training Parkour since 2014 with over 8 years of coaching experience. Focuses on pure movement, flow, and safe progression, helping shape the Kerala parkour scene.",
      image: "https://teamnara.in/gallery/IMG_2264.webp",
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
