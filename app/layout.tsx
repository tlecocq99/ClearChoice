import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://clearchoicepools.org'),
  title: 'Clear Choice Pool Cleaning | Lafayette, Louisiana',
  description:
    'Clear Choice provides reliable pool cleaning and maintenance in Lafayette, Louisiana. Weekly service, chemical balancing, filter cleaning, and more. Call +1 (337) 889-6169.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Clear Choice Pool Cleaning | Lafayette, Louisiana',
    description:
      'Expert pool maintenance & cleaning in Lafayette, LA. Weekly service, chemical care, and filter cleaning. Call +1 (337) 889-6169.',
    siteName: 'Clear Choice Pools',
    images: [{ url: '/images/og/clearchoice-1200x630.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clear Choice Pool Cleaning | Lafayette, Louisiana',
    description:
      'Reliable local pool cleaning & maintenance in Lafayette, LA. Call +1 (337) 889-6169.',
    images: ['/images/og/clearchoice-1200x630.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}