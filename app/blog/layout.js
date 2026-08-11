import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bmclasses.in';

export const metadata = {
  title: 'JEE & NEET Exam Prep Guides, Strategy & Tips | BmClasses Gurgaon Blog',
  description: 'Read expert JEE Advanced, JEE Main & NEET UG preparation strategies, subject-wise revision plans, and NCERT mastery tips written directly by Senior Ex-FIITJEE & VMC HODs.',
  keywords: [
    'JEE Advanced Preparation Strategy Gurgaon',
    'NEET UG Revision Tips Ex HODs',
    'Class 11 to 12 JEE Transition Guide',
    'Class 9 10 Foundation Strategy IIT JEE',
    'BmClasses Educational Blog Gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'JEE & NEET Preparation Blog & Exam Guides | BmClasses Gurgaon',
    description: 'Expert study strategies, exam hacks, and NCERT mastery guides written directly by Senior Ex-HODs.',
    url: `${siteUrl}/blog`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function BlogLayout({ children }) {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Exam Guides & Blog', item: `${siteUrl}/blog` },
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
