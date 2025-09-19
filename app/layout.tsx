import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEOJsonLd from "./SEOJsonLD";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://clearchoicepools.org"),
  title: {
    default: "Pool Cleaners in Lafayette, LA | Clear Choice Pools",
    template: "%s | Clear Choice Pools · Lafayette, LA",
  },
  description:
    "Local pool cleaners in Lafayette, Louisiana. Weekly cleaning, chemical balancing, filter service, and more. Call +1 (337) 889-6169 for fast, reliable service.",
  keywords: [
    "pool cleaners",
    "pool cleaning",
    "pool service",
    "pool maintenance",
    "pool cleaners near me",
    "Lafayette LA",
    "Broussard LA",
    "Youngsville LA",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://clearchoicepools.org/",
    title: "Pool Cleaners in Lafayette, LA | Clear Choice Pools",
    description:
      "Expert pool cleaning and maintenance in Lafayette, LA. Weekly service, chemical care, and filter cleaning. Call +1 (337) 889-6169.",
    siteName: "Clear Choice Pools",
    locale: "en_US",
    images: ["https://clearchoicepools.org/og/clearchoice-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool Cleaners in Lafayette, LA | Clear Choice Pools",
    description:
      "Reliable local pool cleaning & maintenance in Lafayette, LA. Call +1 (337) 889-6169.",
    images: ["https://clearchoicepools.org/og/clearchoice-1200x630.png"],
  },
  // Optional: add your Google Search Console verification code when available
  // verification: { google: 'YOUR_VERIFICATION_CODE' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* LocalBusiness structured data for improved local SEO */}
        <SEOJsonLd />
        {children}
      </body>
    </html>
  );
}
