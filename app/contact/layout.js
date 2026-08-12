import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Best IIT JEE & NEET Coaching Center in Sector 52 Gurgaon | Contact BmClasses',
  description: 'Visit the best IIT JEE coaching and best NEET coaching institute in Gurgaon Sector 52 & Ardee City. Book 1-on-1 diagnostic counseling with Senior Ex-HODs at B 38 Ground Floor Ardee City. Call +91 98998 18241.',
  keywords: [
    'iit jee coaching in gurgaon',
    'best iit jee coaching in gurgaon',
    'neet coaching in gurgaon',
    'best neet coaching in gurgaon',
    'best iit jee coaching in sector 52 gurgaon',
    'best neet coaching in sector 52 gurgaon',
    'best coaching in ardee city gurgaon',
    'coaching institute in gurgaon sector 52',
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact BmClasses Gurgaon | Ardee City Sector 52 Studio',
    description: 'Visit our center at B 38 Ground Floor Ardee City Sector 52 Gurgaon or call +91 98998 18241 for 1-on-1 Ex-HOD counseling.',
    url: `${siteUrl}/contact`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function ContactLayout({ children }) {
  const jsonLdContactSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'BmClasses Gurgaon',
    url: `${siteUrl}/contact`,
    telephone: '+919899818241',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B 38, Ground Floor, Ardee City, Sector 52',
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
