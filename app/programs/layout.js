import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Best IIT JEE & NEET Coaching Programs in Gurgaon | Class 9, 10, 11, 12 & Droppers',
  description: 'Explore Gurgaon’s best IIT JEE coaching and best NEET coaching micro-batch programs (10-15 students). Special 2-Year Class 11, 1-Year Class 12 & Dropper ranker batches taught 100% directly by Senior Ex-HODs.',
  keywords: [
    'iit jee coaching in gurgaon',
    'best iit jee coaching in gurgaon',
    'neet coaching in gurgaon',
    'best neet coaching in gurgaon',
    'top iit jee coaching in gurgaon',
    'top neet coaching in gurgaon',
    'best coaching institute in gurgaon for iit jee',
    'best coaching institute in gurgaon for neet',
    'jee main coaching in gurgaon',
    'jee advanced coaching in gurgaon',
    'best dropper batch for jee in gurgaon',
    'best repeater batch for neet in gurgaon',
    'class 11 jee coaching in gurgaon',
    'class 12 jee coaching in gurgaon',
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
