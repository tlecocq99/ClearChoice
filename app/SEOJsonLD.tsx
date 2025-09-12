'use client';
import Script from 'next/script';

export default function SEOJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Clear Choice Pool Cleaning",
    "url": "https://clearchoicepools.org/",
    "logo": "https://clearchoicepools.org/images/logo.png",
    "image": "https://clearchoicepools.org/images/og/clearchoice-1200x630.jpg",
    "description": "Pool cleaning, maintenance, chemical balancing, and filter service in Lafayette, Louisiana.",
    "telephone": "+13378896169",
    "priceRange": "$$",
    "areaServed": ["Lafayette, LA"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lafayette",
      "addressRegion": "LA",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://github.com/tlecocq99/Clear-Choice"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Services",
      "itemListElement": [
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Weekly Pool Cleaning"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Chemical Balancing"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Filter Cleaning & Inspection"}}
      ]
    }
  };

  return (
    <Script id="ld-localbusiness" type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}