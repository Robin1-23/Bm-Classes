import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BM Classes Gurgaon | Best IIT JEE Coaching & Best NEET Coaching',
    template: '%s | BM Classes Gurgaon',
  },
  description: 'BM Classes Gurgaon (BmClasses) is the #1 Best IIT JEE Coaching & Best NEET Coaching Institute in Gurgaon. Taught 100% directly by Senior Ex-HODs of FIITJEE & VMC in 10-15 student micro-batches in Sector 52 & Ardee City. Class 9, 10, 11, 12 & Droppers.',
  keywords: [
    // Top Rank IIT JEE Keywords
    'iit jee coaching in gurgaon',
    'best iit jee coaching in gurgaon',
    'top iit jee coaching in gurgaon',
    'best coaching institute in gurgaon for iit jee',
    'best jee main coaching in gurgaon',
    'best jee advanced coaching in gurgaon',
    'best iit jee coaching center in gurgaon',
    'top 10 iit jee coaching in gurgaon',

    // Top Rank NEET Medical Keywords
    'neet coaching in gurgaon',
    'best neet coaching in gurgaon',
    'top neet coaching in gurgaon',
    'best coaching institute in gurgaon for neet',
    'best medical coaching in gurgaon',
    'best neet ug coaching center in gurgaon',
    'top neet coaching institute in gurgaon',

    // Grade & Class Keywords
    'best coaching for class 11 in gurgaon',
    'best coaching for class 12 in gurgaon',
    'best coaching for class 9 in gurgaon',
    'best coaching for class 10 in gurgaon',
    'best dropper batch for jee in gurgaon',
    'best repeater batch for neet in gurgaon',
    'class 11 jee 2 year batch gurgaon',
    'class 12 jee 1 year batch gurgaon',
    'foundation coaching class 9 10 gurgaon',

    // Hyperlocal Gurgaon Location Keywords
    'best iit jee coaching in sector 52 gurgaon',
    'best neet coaching in sector 52 gurgaon',
    'best coaching in ardee city gurgaon',
    'best coaching in sector 45 gurgaon',
    'best coaching in sector 47 gurgaon',
    'best coaching in sector 46 gurgaon',
    'coaching institute in gurgaon sector 52',
    'best coaching near huda city centre gurgaon',
    'golf course extension road jee coaching',
    'dlf phase 4 5 iit jee institute gurgaon',
    'sushant lok jee neet coaching gurgaon',

    // Brand & Ex-HOD Mentorship Keywords
    'BM Classes Gurgaon',
    'BmClasses Gurgaon',
    'BM Classes Sector 52',
    'BM Classes Ardee City',
    'ex fiitjee hod coaching in gurgaon',
    'ex vmc hod coaching in gurgaon',
    'micro batch iit jee coaching gurgaon',
    'small batch iit coaching sector 52',
    'FIITJEE Alternative in Gurgaon',
    'VMC Alternative in Gurgaon',
    'Allen Alternative in Gurgaon',
    'Aakash Alternative in Gurgaon',
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
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
  verification: {
    google: 'Fq-s47d0ftSJBLa5q6IbNPpc3H-HVjL3E2FqVasZaZg',
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
      streetAddress: 'House no - 1411p, 1st floor, sec-45, near DPS-45 school',
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
          text: 'Chemistry classes by BM sir is located at House no - 1411p, 1st floor, sec-45, near DPS-45 school, Gurgaon, Haryana 122003.',
        },
      },
      {
        '@type': 'Question',
        name: 'What coaching courses are offered at BmClasses Gurgaon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BmClasses offers Class 6th, 7th & 8th Science foundation, Class 9th & 10th Foundation/Olympiad batches, Class 11th 2-Year JEE & NEET integrated batches, Class 12th 1-Year Pinnacle batches, and XII Pass / Dropper Intensive Ranker batches.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Senior Ex-HODs teach every single lecture at BmClasses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At BM Classes, 100% of lectures, doubt-solving sessions, and test reviews are conducted personally by BM Sir, Konika Ma\'am & Chumki Ma\'am. We maintain a strict zero junior assistant policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Online (9th–12th) & 1-on-1 personalized Science classes available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Chumki Ma\'am (22 Years Exp — 18 Yrs FIITJEE, 2 Yrs NIIT e-Gurucool, 2 Yrs PMT OASIS) is our Senior Science Teacher offering Online (9th–12th) + 1-on-1 personalized classes.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="google-site-verification" content="Fq-s47d0ftSJBLa5q6IbNPpc3H-HVjL3E2FqVasZaZg" />

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
