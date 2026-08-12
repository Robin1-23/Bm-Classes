import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Why BmClasses is the Best IIT JEE & NEET Coaching Institute in Gurgaon',
  description: 'Discover why BmClasses is ranked the best IIT JEE coaching and best NEET coaching in Gurgaon. 100% direct Ex-HOD teaching, 10-15 capped batch size, zero dummy faculty, and proven top ranks AIR 18, 22, 52.',
  keywords: [
    'best iit jee coaching in gurgaon',
    'best neet coaching in gurgaon',
    'iit jee coaching in gurgaon',
    'neet coaching in gurgaon',
    'best coaching institute in gurgaon for iit jee',
    'best coaching institute in gurgaon for neet',
    'top iit jee coaching in gurgaon',
    'top neet coaching in gurgaon',
    'micro batch iit jee coaching gurgaon',
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
