import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Contact BmClasses Gurgaon | Visit Sector 52 Ardee City Center & Meet Ex-HODs',
  description: 'Book a 1-on-1 diagnostic counseling session with Senior Ex-HODs at B 38, Ground Floor, Ardee City, Sector 52, Gurgaon. Call +91 98998 18241 or visit center.',
  keywords: [
    'Contact BmClasses Gurgaon',
    'BmClasses Sector 52 Address',
    'BmClasses Ardee City Center Location',
    'JEE Coaching Phone Number Gurgaon',
    'NEET Coaching Center Near Sector 52 Metro',
    'Book Diagnostic Session BmClasses',
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
