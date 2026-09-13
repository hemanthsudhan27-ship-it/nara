import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Team NARA | Training Grounds & Inquiries Calicut",
  description:
    "Get in touch with Team NARA parkour coaches in Calicut (Kozhikode), Kerala. Reach out via email, WhatsApp, or Instagram for training batches, fees, and workshop bookings.",
  keywords: [
    "Contact Team NARA",
    "Parkour coach Calicut contact",
    "Team NARA contact",
    "Calicut parkour phone number",
    "Parkour training location Kozhikode",
    "Join Team NARA",
  ],
  alternates: {
    canonical: "https://teamnara.in/contact",
  },
  openGraph: {
    title: "Contact Team NARA | Training Grounds Calicut",
    description:
      "Connect with Kerala's premier parkour and freerunning collective. Session questions, locations, fees, and workshops.",
    url: "https://teamnara.in/contact",
  },
};

const jsonLdContact = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Team NARA Parkour Calicut",
  description: "Official contact page for Team NARA movement collective in Kozhikode, Kerala.",
  url: "https://teamnara.in/contact",
  mainEntity: {
    "@type": "SportsClub",
    name: "Team NARA Parkour",
    email: "teamnara.in@gmail.com",
    telephone: "+91 85939 12936",
    address: {
      "@type": "PostalAddress",
      streetAddress: "South Beach Promenade, Beach Rd",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      postalCode: "673032",
      addressCountry: "IN",
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
      name: "Contact",
      item: "https://teamnara.in/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ContactClient />
    </>
  );
}
