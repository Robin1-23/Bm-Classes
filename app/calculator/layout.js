import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'JEE & NEET Scholarship Fee Calculator | Up to 90% Waiver BmClasses Gurgaon',
  description: 'Calculate your personalized fee structure and merit scholarship waiver (up to 90%) for JEE Main, JEE Advanced & NEET UG micro-batch coaching at BmClasses Gurgaon.',
  keywords: [
    'JEE Scholarship Test Gurgaon',
    'NEET Scholarship Waiver Gurgaon',
    'BmClasses Fee Calculator Sector 52',
    'Best Affordable JEE Coaching Gurgaon',
    'Merit Scholarship IIT Coaching Ardee City',
  ],
  alternates: {
    canonical: `${siteUrl}/calculator`,
  },
  openGraph: {
    title: 'JEE & NEET Merit Scholarship Fee Calculator | BmClasses Gurgaon',
    description: 'Instant scholarship calculator for Class 9th, 10th, 11th, 12th & Droppers. Get up to 90% fee waiver.',
    url: `${siteUrl}/calculator`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function CalculatorLayout({ children }) {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Scholarship Calculator', item: `${siteUrl}/calculator` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
