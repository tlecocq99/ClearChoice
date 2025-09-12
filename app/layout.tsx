import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://clearchoicepools.org'),
  title: 'Clear Choice Pool Cleaning | Professional Pool Service in Lafayette, Louisiana',
  description:
    'Clear Choice provides reliable pool cleaning, maintenance, and repairs in Lafayette, Louisiana. Weekly service, chemical balancing, filter cleaning, and more. Call +1 (337) 889-6169.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Clear Choice Pool Cleaning | Lafayette, Louisiana',
    description: 'Expert pool maintenance & cleaning. Weekly service, chemical care, filter cleaning. Call +1 (337) 889-6169.',
    siteName: 'Clear Choice Pools',
    images: [{ url: '/images/og/clearchoice-1200x630.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clear Choice Pool Cleaning | Lafayette, Louisiana',
    description: 'Reliable local pool cleaning & maintenance. Call +1 (337) 889-6169.',
    images: ['/images/og/clearchoice-1200x630.jpg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
