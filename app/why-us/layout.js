import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bmclasses.in';

export const metadata = {
  title: 'Why BmClasses Gurgaon | Ex-FIITJEE & VMC HODs vs Mass Coaching Factories',
  description: 'Discover why BmClasses is Gurgaon’s #1 choice for JEE & NEET. 100% direct Ex-HOD teaching, 10-15 capped batch size, zero junior assistant teachers, and proven top ranks AIR 18, 22, 52.',
  keywords: [
    'Why BmClasses Gurgaon',
    'Best Micro Batch JEE Coaching Gurgaon',
    'Ex FIITJEE HOD Coaching Gurgaon',
    'Ex VMC HOD Coaching Gurgaon',
    'Personalized JEE Coaching Sector 52',
    'Coaching Institute Small Batch Gurgaon',
    'Top IIT JEE Coaching Methodology',
  ],
  alternates: {
    canonical: `${siteUrl}/why-us`,
  },
  openGraph: {
    title: 'Why BmClasses Gurgaon | Ex-HOD Direct Teaching & Micro-Batches',
    description: 'Compare factory coaching vs BmClasses 10-15 student micro-batch methodology in Gurgaon Sector 52 & Ardee City.',
    url: `${siteUrl}/why-us`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function WhyUsLayout({ children }) {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Why BmClasses', item: `${siteUrl}/why-us` },
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
