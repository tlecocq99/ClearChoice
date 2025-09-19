import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEOJsonLd from "./SEOJsonLD";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://clearchoicepools.org"),
  title: {
    default: "Best Pool Services in Lafayette, LA | Clear Choice Pools",
    template: "%s | Clear Choice Pools · Lafayette, LA",
  },
  description:
    "Clear Choice Pools provides expert pool service, cleaning, maintenance, and repairs in Lafayette, LA. Keep your pool crystal clear year-round. Contact us today!",
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
  alternates: { canonical: "https://clearchoicepools.org/" },
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
    title: "Best Pool Services in Lafayette, LA | Clear Choice Pools",
    description:
      "Clear Choice Pools provides expert pool service, cleaning, maintenance, and repairs in Lafayette, LA. Keep your pool crystal clear year-round. Contact us today! Call +1 (337) 889-6169.",
    siteName: "Clear Choice Pools",
    locale: "en_US",
    images: [
      "https://clearchoicepools.org/og/clearchoice-1200x630.png",
      { url: "https://clearchoicepools.org/og/clearchoice-1200x630.png", height: 480 },
      { url: "https://clearchoicepools.org/og/clearchoice-1200x630.png", width: 720 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pool Services in Lafayette, LA | Clear Choice Pools",
    description:
      "Clear Choice Pools provides expert pool service, cleaning, maintenance, and repairs in Lafayette, LA. Keep your pool crystal clear year-round. Contact us today! Call +1 (337) 889-6169.",
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
      <body>
        {/* LocalBusiness structured data for improved local SEO */}
        <SEOJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
