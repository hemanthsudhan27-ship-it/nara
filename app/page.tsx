import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
  description:
    "Official Team NARA website. Kerala's premier parkour, freerunning, and tricking community in Calicut (Kozhikode). Join morning outdoor classes, beginner vaults, and coastal beach jams led by coach @dadubruce.",
  alternates: {
    canonical: "https://teamnara.in",
  },
  openGraph: {
    title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
    description:
      "Join outdoor parkour, freerunning, and tricking sessions along the coast of Calicut (Kozhikode). Beginner drills, vault progressions, and sunset jams.",
    url: "https://teamnara.in",
    siteName: "Team NARA Parkour",
    images: [
      {
        url: "/images/IMG_3116.PNG",
        width: 1200,
        height: 630,
        alt: "Team NARA Parkour and Freerunning Community on Calicut Beach Promenade",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
    description:
      "Outdoor parkour, freerunning, and tricking sessions at Calicut Beach. Adapt, evolve, and master movement.",
    images: ["/images/IMG_3116.PNG"],
  },
};

export default function Home() {
  return <HomeClient />;
}
