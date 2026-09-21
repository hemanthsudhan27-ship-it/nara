import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RegisterProvider } from "@/context/RegisterContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitleReveal from "@/components/TitleReveal";
import ScrollToTop from "@/components/ScrollToTop";
import MobileJoinBar from "@/components/MobileJoinBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#141414",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://teamnara.in"),
  title: {
    default: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
    template: "%s | Team NARA Parkour Calicut",
  },
  description:
    "Team NARA is Kerala's premier street movement collective based in Calicut (Kozhikode). Join structured outdoor parkour, freerunning, and tricking training along the coast. Classes led by experienced coaches.",
  keywords: [
    "Parkour",
    "Parkour Calicut",
    "Parkour Kerala",
    "Parkour training India",
    "Freerunning Kerala",
    "Freerunning Calicut",
    "Tricking Kozhikode",
    "Tricking Kerala",
    "Team NARA",
    "Team NARA parkour",
    "Calicut Beach Parkour",
    "Kozhikode street workout",
    "learn parkour beginners",
    "parkour classes Calicut",
    "movement community Kerala",
    "urban acrobatics Calicut",
    "outdoor fitness Kozhikode",
    "parkour coach Calicut",
    "obstacle training Kerala",
    "traceur Kerala",
  ],
  authors: [{ name: "Team NARA", url: "https://teamnara.in" }],
  creator: "Team NARA",
  publisher: "Team NARA Movement Collective",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://teamnara.in",
  },
  openGraph: {
    title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
    description:
      "Adapt. Evolve. Keep Moving. Kerala's premier street movement collective in Kozhikode. Outdoor sessions along Calicut beach.",
    url: "https://teamnara.in",
    siteName: "Team NARA Parkour",
    images: [
      {
        url: "/images/IMG_3116.PNG",
        width: 1200,
        height: 630,
        alt: "Team NARA Parkour and Freerunning Community on Calicut Beach Promenade at Sunset",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team NARA | Calicut Parkour Collective",
    description:
      "Outdoor parkour, freerunning, and tricking sessions at Calicut Beach. Adapt, evolve, and master human movement.",
    images: ["/images/IMG_3116.PNG"],
    creator: "@teamnara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "sports",
  icons: {
    icon: [
      { url: "/logo/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/logo/logo.png" }],
    shortcut: ["/logo/logo.png"],
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "SportsActivityLocation"],
  "@id": "https://teamnara.in/#organization",
  name: "Team NARA Parkour",
  alternateName: [
    "Team NARA",
    "NARA Parkour Calicut",
    "Calicut Freerunning Collective",
    "Team NARA Kerala",
  ],
  description:
    "Kerala's premier parkour, freerunning, and tricking collective. Offering beginner-friendly and advanced outdoor movement classes, safety vault mechanics, and coastal jams in Calicut.",
  url: "https://teamnara.in",
  logo: "https://teamnara.in/logo/logo.png",
  image: "https://teamnara.in/images/IMG_3116.PNG",
  telephone: "+91 85939 12936",
  email: "teamnara.in@gmail.com",
  priceRange: "₹2000 - ₹2500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "South Beach Promenade, Beach Rd",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673032",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.2498,
    longitude: 75.7725,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      opens: "06:00",
      closes: "07:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "17:00",
      closes: "19:00",
    },
  ],
  coach: {
    "@type": "Person",
    name: "Team NARA Coaches",
    jobTitle: "Parkour & Movement Specialists",
    sameAs: "https://instagram.com/teamnara.in",
  },
  sameAs: [
    "https://instagram.com/teamnara.in",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://teamnara.in/#website",
  name: "Team NARA Parkour Calicut",
  url: "https://teamnara.in",
  description: "Official portal for parkour, freerunning, and tricking training in Calicut, Kerala.",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://teamnara.in/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;700;900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-[#141414] text-neutral-100 antialiased selection:bg-brand-orange selection:text-white font-body flex flex-col min-h-screen">
        <RegisterProvider>
          <TitleReveal />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <MobileJoinBar />
        </RegisterProvider>
      </body>
    </html>
  );
}
