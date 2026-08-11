import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'BmClasses Results & Rankers | AIR 18, AIR 22, AIR 52 JEE & NEET Selections',
  description: 'Explore the proven ranker track record of BmClasses Gurgaon. AIR 18, AIR 22, AIR 52, AIR 102 top ranks in JEE Advanced, JEE Main & NEET UG with 85%+ qualification rate.',
  keywords: [
    'BmClasses Results Gurgaon',
    'Bm Classes Top AIR Ranks',
    'JEE Advanced AIR 18 22 52 Gurgaon',
    'JEE Main Result BmClasses Sector 52',
    'NEET Selection Rate Gurgaon Coaching',
    'Best IIT JEE Results Institute Gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/results`,
  },
  openGraph: {
    title: 'BmClasses Results & Top AIR Rankers | Gurgaon',
    description: 'Proven top ranks AIR 18, 22, 52, 102 in JEE Advanced & NEET UG produced 100% directly by Senior Ex-HODs.',
    url: `${siteUrl}/results`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function ResultsLayout({ children }) {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Results & Rankers', item: `${siteUrl}/results` },
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
