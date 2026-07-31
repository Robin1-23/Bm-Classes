import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bmclasses.in';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BmClasses Gurgaon | Ex-FIITJEE & VMC HODs Micro-Batch JEE & NEET Coaching',
    template: '%s | BmClasses Gurgaon',
  },
  description: 'Gurgaon’s premier micro-batch (10-15 students) coaching institute for JEE Advanced, JEE Main & NEET UG, taught 100% directly by Ex-HODs of FIITJEE & VMC. AIR 18, 22, 52 top ranks.',
  keywords: [
    'JEE Advanced Coaching Gurgaon',
    'JEE Main Coaching Sector 52 Gurgaon',
    'NEET UG Coaching Gurgaon',
    'Ex FIITJEE HOD Coaching Gurgaon',
    'Ex VMC HOD Coaching Gurgaon',
    'Small Batch JEE Coaching Ardee City',
    'Best IIT JEE Academy Gurgaon',
    'Personalized Physics Chemistry Maths Coaching Gurgaon',
    'BmClasses Gurgaon',
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
    title: 'BmClasses Gurgaon | Ex-FIITJEE & VMC HODs JEE & NEET Coaching',
    description: '100% taught directly by Ex-HODs of FIITJEE & VMC in 10-15 student micro-batches. Proven top ranks: AIR 18, AIR 22, AIR 52, AIR 102.',
    url: siteUrl,
    siteName: 'BmClasses Gurgaon',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero_student_laptop.jpg',
        width: 1200,
        height: 630,
        alt: 'BmClasses JEE & NEET Micro-Batch Coaching Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BmClasses Gurgaon | Ex-FIITJEE & VMC HODs JEE & NEET Coaching',
    description: '100% taught directly by Ex-HODs of FIITJEE & VMC in capped 10-15 student micro-batches in Gurgaon.',
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
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'BmClasses',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/hero_student_laptop.jpg`,
    description: 'Premier JEE Advanced, JEE Main & NEET UG coaching institute in Gurgaon taught 100% directly by Ex-HODs of FIITJEE & VMC in 10-15 student micro-batches.',
    telephone: '+919899818241',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coaching Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: '2-Year JEE Advanced & Main Integrated Batch',
            description: 'For Class 11 Students targeting JEE 2026/2027.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: '1-Year JEE Main & Advanced Pinnacle Batch',
            description: 'For Class 12 Students targeting top rank in JEE 2025/2026.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'XII Pass / Droppers Intensive Ranker Batch',
            description: 'Rigorous problem-solving program for repeaters.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'NEET UG Medical Excellence Batch',
            description: 'Complete NCERT mastery + High-Yield MCQ practice.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data Schema for Google Search Engine Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="font-body bg-[#faf8f5] text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
