import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Contact Chemistry By Bighnaraj Sir | Sector 45 Gurgaon Center',
  description: 'Visit Chemistry By Bighnaraj Sir at Flat no 303, Ayyachi Apartment, Block C, Sector 45, near DPS, Gurugram. Book 1-on-1 diagnostic counseling with BM Sir. Call +91 98998 18241.',
  keywords: [
    'iit jee coaching in gurgaon',
    'best iit jee coaching in gurgaon',
    'neet coaching in gurgaon',
    'best neet coaching in gurgaon',
    'chemistry by bighnaraj sir sector 45',
    'best coaching near dps 45 gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Chemistry By Bighnaraj Sir | Sector 45 Gurgaon',
    description: 'Visit our center at Flat no 303, Ayyachi Apartment, Block C, Sector 45, near DPS, Gurugram or call +91 98998 18241 for 1-on-1 counseling.',
    url: `${siteUrl}/contact`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function ContactLayout({ children }) {
  const jsonLdContactSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Chemistry By Bighnaraj Sir',
    url: `${siteUrl}/contact`,
    telephone: '+919899818241',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat no 303, Ayyachi Apartment, Block C, Uday Nagar, Sector 45, near Delhi Public School',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.441687,
      longitude: 77.064937,
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${siteUrl}/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
