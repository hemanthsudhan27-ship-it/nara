import type { Metadata } from "next";
import CommunityClient from "@/components/CommunityClient";

export const metadata: Metadata = {
  title: "Movement Community & Culture | Sunset Jams Calicut",
  description:
    "Join Team NARA's movement family in Calicut, Kerala. Learn about our weekly Sunday sunset jams on South Beach, community ethos, and traceur testimonials.",
  keywords: [
    "Parkour community Kerala",
    "Calicut movement collective",
    "Sunday sunset parkour jam",
    "Kozhikode beach workout group",
    "Freerunning brotherhood Kerala",
    "Team NARA members",
  ],
  alternates: {
    canonical: "https://teamnara.in/community",
  },
  openGraph: {
    title: "Movement Community & Culture in Calicut | Team NARA",
    description:
      "More than training sessions, Team NARA is a close-knit movement collective united by passion and mutual encouragement along Calicut's coastline.",
    url: "https://teamnara.in/community",
    images: [
      {
        url: "/images/IMG_3116.PNG",
        width: 1200,
        height: 630,
        alt: "Team NARA Community Sunset Jam at Calicut South Beach",
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
      name: "Community",
      item: "https://teamnara.in/community",
    },
  ],
};

export default function CommunityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <CommunityClient />
    </>
  );
}
