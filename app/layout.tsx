import type { Metadata, Viewport } from "next";
import { Anton, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { RegisterProvider } from "@/context/RegisterContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import TitleReveal from "@/components/TitleReveal";

const fontHeadline = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontScript = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#141414",
};

export const metadata: Metadata = {
  title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
  description:
    "Team NARA is a street movement collective based in Calicut, Kerala. Join outdoor parkour, freerunning, and tricking sessions along the coastline of Kozhikode.",
  keywords: [
    "Parkour Calicut",
    "Freerunning Kerala",
    "Tricking Kozhikode",
    "Team NARA",
    "Calicut Beach Parkour",
    "Movement Community Kerala",
  ],
  authors: [{ name: "Team NARA" }],
  openGraph: {
    title: "Team NARA | Parkour • Freerunning • Tricking | Calicut, Kerala",
    description: "Adapt. Evolve. Keep Moving. Street movement collective in Kozhikode.",
    url: "https://teamnara.in",
    siteName: "Team NARA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team NARA | Calicut Parkour Collective",
    description: "Outdoor parkour, freerunning, and tricking sessions at Calicut Beach.",
  },
  icons: {
    icon: [
      { url: "/logo/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/logo/logo.png" },
    ],
    shortcut: ["/logo/logo.png"],
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
      className={`${fontHeadline.variable} ${fontBody.variable} ${fontScript.variable} scroll-smooth`}
    >
      <head>
        <link href="https://fonts.cdnfonts.com/css/crossfly" rel="stylesheet" />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
      </head>
      <body className="bg-[#141414] text-neutral-100 antialiased selection:bg-brand-orange selection:text-white font-body flex flex-col min-h-screen">
        <RegisterProvider>
          <SplashScreen />
          <TitleReveal />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </RegisterProvider>
      </body>
    </html>
  );
}
