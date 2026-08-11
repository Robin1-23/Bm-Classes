import React from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  title: 'Senior Ex-FIITJEE & VMC HOD Faculty Team | BmClasses Gurgaon',
  description: 'Meet Gurgaon’s most elite JEE & NEET faculty team. 100% Ex-HODs of FIITJEE & VMC with 20+ years experience teaching Physics, Chemistry, Mathematics & Biology in Sector 52.',
  keywords: [
    'Ex FIITJEE HOD Faculty Gurgaon',
    'Ex VMC HOD Chemistry Physics Maths Gurgaon',
    'BmClasses Senior Faculty Team',
    'Best IIT JEE Teachers in Gurgaon',
    'Best NEET Biology Teachers Gurgaon',
    'Personalized HOD Mentorship Gurgaon',
  ],
  alternates: {
    canonical: `${siteUrl}/faculty`,
  },
  openGraph: {
    title: 'Senior Ex-FIITJEE & VMC HOD Faculty Team | BmClasses Gurgaon',
    description: 'Learn 100% directly from Senior Ex-HODs with 20+ years of rank-producing experience in JEE & NEET.',
    url: `${siteUrl}/faculty`,
    siteName: 'BmClasses Gurgaon',
    type: 'website',
  },
};

export default function FacultyLayout({ children }) {
  const jsonLdFacultySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'BmClasses Senior Faculty Team',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Person',
          name: 'Senior Physics Ex-HOD',
          jobTitle: 'HOD Physics & Founder Mentor',
          worksFor: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
          description: 'Ex-HOD FIITJEE with 20+ years experience producing AIR 18, 22, 52 top ranks in JEE Advanced Physics.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Person',
          name: 'Senior Chemistry Ex-HOD',
          jobTitle: 'HOD Chemistry & Co-Founder Mentor',
          worksFor: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
          description: 'Ex-HOD VMC with 18+ years experience specializing in Organic & Physical Chemistry for JEE & NEET.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Person',
          name: 'Senior Mathematics Ex-HOD',
          jobTitle: 'HOD Mathematics',
          worksFor: { '@type': 'EducationalOrganization', name: 'BmClasses Gurgaon' },
          description: 'Ex-HOD FIITJEE with 19+ years experience mentoring 1000+ IITians in Calculus & Algebra.',
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Faculty Team', item: `${siteUrl}/faculty` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFacultySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
