import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BmClasses Gurgaon | Best JEE Main, JEE Advanced & NEET Coaching Institute',
    template: '%s | BmClasses Gurgaon',
  },
  description: 'Gurgaon’s #1 coaching institute for IIT JEE Main, JEE Advanced, NEET UG & Class 9th, 10th, 11th, 12th, Droppers. Taught 100% directly by Senior Ex-HODs of FIITJEE & VMC in 10-15 student micro-batches in Sector 52 & Ardee City. AIR 18, 22, 52 top ranks.',
  keywords: [
    // Brand Keywords
    'BmClasses Gurgaon',
    'Bm Classes Gurgaon',
    'Bm Classes Sector 52',
    'Bm Classes Ardee City',
    'BM Classes HODs',
    'BM Classes Gurgaon Fee Structure',

    // Core Intent Keywords
    'Best JEE Coaching Gurgaon',
    'Best IIT JEE Coaching Sector 52 Gurgaon',
    'Top NEET UG Coaching Institute Gurgaon',
    'Coaching Institute in Gurgaon Sector 52',
    'Best Coaching Institute in Ardee City Gurgaon',
    'FIITJEE Alternative in Gurgaon',
    'VMC Alternative in Gurgaon',
    'Allen Alternative in Gurgaon',

    // Grade & Class Keywords
    'Class 9th Foundation Coaching Gurgaon',
    'Class 10th Board & Olympiad Coaching Gurgaon',
    'Class 11th JEE 2 Year Integrated Batch Gurgaon',
    'Class 12th JEE Main & Advanced Pinnacle Batch Gurgaon',
    'Class 12 Pass Dropper Intensive Ranker Batch Gurgaon',
    'Class 11 & 12 NEET Medical Excellence Batch Gurgaon',
    'JEE Coaching for Droppers in Gurgaon',
    'NEET Coaching for Repeaters in Gurgaon',

    // Subject & Hyperlocal Keywords
    'Ex FIITJEE HOD Physics Chemistry Maths Coaching Gurgaon',
    'Ex VMC HOD IIT JEE Coaching Gurgaon',
    'Micro-Batch JEE Coaching Gurgaon',
    'Small Batch IIT Coaching Sector 52',
    'Golf Course Extension Road JEE Coaching',
    'DLF Phase 4 5 IIT JEE Institute Gurgaon',
  ],
  authors: [{ name: 'BmClasses Senior Faculty Team' }],
  creator: 'BmClasses Gurgaon',
  publisher: 'BmClasses',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BmClasses Gurgaon | Best JEE Main, JEE Advanced & NEET Coaching',
    description: '100% taught directly by Senior Ex-HODs of FIITJEE & VMC in 10-15 student micro-batches in Gurgaon Sector 52 & Ardee City. AIR 18, AIR 22, AIR 52 proven ranks.',
    url: siteUrl,
    siteName: 'BmClasses Gurgaon',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero_student_laptop.jpg',
        width: 1200,
        height: 630,
        alt: 'BmClasses JEE & NEET Micro-Batch Coaching Institute Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BmClasses Gurgaon | Ex-FIITJEE & VMC HODs JEE & NEET Coaching',
    description: '100% taught directly by Senior Ex-HODs of FIITJEE & VMC in capped 10-15 student micro-batches in Gurgaon.',
    images: ['/hero_student_laptop.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  // EducationalOrganization & LocalBusiness Schema
  const jsonLdOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteUrl}/#organization`,
    name: 'BmClasses Gurgaon',
    alternateName: ['BM Classes', 'BmClasses', 'BM Classes Gurgaon'],
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/hero_student_laptop.jpg`,
    description: 'Gurgaon’s premier micro-batch (10-15 students) coaching institute for JEE Advanced, JEE Main & NEET UG, taught 100% directly by Ex-HODs of FIITJEE & VMC.',
    telephone: '+919899818241',
    email: 'info@bmclasses.in',
    priceRange: '₹₹',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coaching Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: '2-Year JEE Advanced & Main Integrated Batch (Class 11)',
            description: 'Comprehensive 2-year classroom program for Class 11 targeting JEE 2026/2027.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: '1-Year JEE Main & Advanced Pinnacle Batch (Class 12)',
            description: 'Targeted 1-year rank improvement program for Class 12 targeting JEE 2025/2026.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'XII Pass / Droppers Intensive Ranker Batch',
            description: 'Rigorous problem-solving dropper program for repeaters.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'NEET UG Medical Excellence Batch',
            description: 'Complete NCERT mastery + High-Yield MCQ practice for medical aspirants.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Class 9th & 10th Foundation & Olympiad Batch',
            description: 'Early competitive foundation for Class 9 and 10 students.',
          },
        },
      ],
    },
  };

  // FAQ Page Schema for Google Search Rich Accordions
  const jsonLdFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is BmClasses considered the best JEE & NEET coaching institute in Gurgaon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BmClasses is taught 100% directly by Senior Ex-HODs of FIITJEE & VMC in capped 10-15 student micro-batches. Unlike mass coaching factories with junior assistant teachers, every student receives direct mentorship from top rank-producing faculty.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is BmClasses located in Gurgaon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BmClasses is located at B 38, Ground Floor, Ardee City, Sector 52, Gurgaon, Haryana 122003 (Near Sector 52 Metro & Golf Course Extension Road).',
        },
      },
      {
        '@type': 'Question',
        name: 'What coaching courses are offered at BmClasses Gurgaon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BmClasses offers Class 9th & 10th Foundation/Olympiad batches, Class 11th 2-Year JEE & NEET integrated batches, Class 12th 1-Year Pinnacle batches, and XII Pass / Dropper Intensive Ranker batches.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the batch size at BmClasses Gurgaon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Batches are strictly capped at 10 to 15 students per batch to guarantee individual attention, personalized doubt resolution, and custom study tracking for every student.',
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Calistoga&family=Chonburi&family=Geist:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* JSON-LD Master Organization & FAQ Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqSchema) }}
        />
      </head>
      <body className="font-body bg-[#faf8f5] text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
