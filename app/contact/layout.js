import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Contact Chemistry classes by BM sir | Sector 45 Gurgaon Center',
  description: 'Visit Chemistry classes by BM sir at House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon. Book 1-on-1 diagnostic counseling with BM Sir. Call +91 98998 18241.',
  keywords: [
    'iit jee coaching in gurgaon',
    'best iit jee coaching in gurgaon',
    'neet coaching in gurgaon',
    'best neet coaching in gurgaon',
    'chemistry classes by bm sir sector 45',
    'best coaching near dps 45 gurgaon',
    'best coaching in sector 45 gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Chemistry classes by BM sir | Sector 45 Gurgaon',
    description: 'Visit our center at House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon or call +91 98998 18241 for 1-on-1 counseling.',
    url: `${siteUrl}/contact`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function ContactLayout({ children }) {
  const jsonLdContactSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Chemistry classes by BM sir',
    url: `${siteUrl}/contact`,
    telephone: '+919899818241',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House no - 1411p, 1st floor, sec-45, near DPS-45 school',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4357,
      longitude: 77.0784,
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
