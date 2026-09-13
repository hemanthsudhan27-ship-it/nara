import type { Metadata } from "next";
import SessionsClient from "@/components/SessionsClient";
import { FAQS } from "@/lib/sessionsData";

export const metadata: Metadata = {
  title: "Parkour & Freerunning Classes Calicut | Schedule & Fees",
  description:
    "Outdoor Parkour & Freerunning training in Calicut (Kozhikode). Classes held Mon, Wed & Fri (6:00 AM – 7:30 AM) led by coach @dadubruce. ₹2,500 admission, beginners warmly guided.",
  keywords: [
    "Parkour classes Calicut",
    "Parkour training Kozhikode",
    "Freerunning classes Kerala",
    "Parkour schedule Calicut",
    "Parkour fees Kerala",
    "Dadubruce parkour coach",
    "Learn parkour Calicut",
    "Outdoor movement sessions Kerala",
    "Calicut beach morning workouts",
  ],
  alternates: {
    canonical: "https://teamnara.in/sessions",
  },
  openGraph: {
    title: "Parkour & Freerunning Classes in Calicut | Team NARA",
    description:
      "Join outdoor parkour and freerunning training across Calicut with coach @dadubruce. Structured morning batches for beginners and advanced movers.",
    url: "https://teamnara.in/sessions",
    images: [
      {
        url: "/images/IMG_3115.PNG",
        width: 1200,
        height: 630,
        alt: "Outdoor Parkour and Freerunning Morning Class in Calicut",
      },
    ],
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Outdoor Parkour & Freerunning Class",
  description:
    "Grounded parkour fundamentals, vault mechanics, safety rolling, precision landings, functional mobility, and explosive freerunning flow in Calicut.",
  provider: {
    "@type": "SportsClub",
    name: "Team NARA Parkour",
    sameAs: "https://teamnara.in",
  },
  instructor: {
    "@type": "Person",
    name: "Dadubruce",
    jobTitle: "Lead Parkour Coach",
    sameAs: "https://instagram.com/dadubruce",
  },
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "INR",
    category: "One-time Admission",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: "South Beach Promenade, Calicut, Kerala",
    courseSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      byDay: ["Monday", "Wednesday", "Friday"],
      startTime: "06:00",
      endTime: "07:30",
    },
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
      name: "Sessions & Classes",
      item: "https://teamnara.in/sessions",
    },
  ],
};

export default function SessionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <SessionsClient />
    </>
  );
}
