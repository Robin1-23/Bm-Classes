import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bmclasses.in';

export const metadata = {
  title: 'IIT JEE & NEET Coaching Programs Gurgaon | Class 9, 10, 11, 12 & Droppers',
  description: 'Explore 10-15 student micro-batch classroom programs in Gurgaon for JEE Main, JEE Advanced, NEET UG & Class 9/10 Foundation. Taught 100% directly by Senior Ex-HODs of FIITJEE & VMC.',
  keywords: [
    'JEE Advanced Coaching Gurgaon',
    'JEE Main Coaching Sector 52 Gurgaon',
    'NEET UG Medical Coaching Gurgaon',
    'Class 9th Foundation Coaching Gurgaon',
    'Class 10th Board Olympiad Coaching Gurgaon',
    'Class 11th JEE 2 Year Batch Gurgaon',
    'Class 12th JEE Main Advanced Batch Gurgaon',
    'Class 12 Pass Dropper Ranker Batch Gurgaon',
    'BmClasses Programs Gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/programs`,
  },
  openGraph: {
    title: 'IIT JEE & NEET Coaching Programs Gurgaon | BmClasses',
    description: 'Specialized 10-15 student micro-batch programs for JEE Main, JEE Advanced & NEET UG, taught 100% by Senior Ex-HODs in Gurgaon Sector 52.',
    url: `${siteUrl}/programs`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function ProgramsLayout({ children }) {
  const jsonLdCourseListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'BmClasses Coaching Programs Gurgaon',
    description: 'Classroom coaching programs for IIT JEE, NEET UG & Foundation in Gurgaon.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Course',
          name: '2-Year JEE Advanced & Main Integrated Batch',
          description: 'For Class 11 Students targeting JEE 2026/2027 with 100% Senior Ex-HOD teaching.',
          provider: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Course',
          name: '1-Year JEE Main & Advanced Pinnacle Batch',
          description: 'For Class 12 Students targeting top rank in JEE 2025/2026.',
          provider: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Course',
          name: 'XII Pass / Droppers Intensive Ranker Batch',
          description: 'Rigorous problem-solving program for repeaters.',
          provider: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Course',
          name: 'NEET UG Medical Excellence Batch',
          description: 'Complete NCERT mastery + High-Yield MCQ practice for medical aspirants.',
          provider: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Course',
          name: 'Class 9th & 10th Foundation & Olympiad Batch',
          description: 'Early competitive foundation for Class 9 and 10 students.',
          provider: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Academic Programs', item: `${siteUrl}/programs` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourseListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
