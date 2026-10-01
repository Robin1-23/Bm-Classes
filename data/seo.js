// Single source of truth for search engines and AI assistants.
// Keep these facts in sync with the Google Business Profile.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';

export const BUSINESS = {
  name: 'BM Classes',
  googleName: 'Chemistry By Bighnaraj Sir',
  description:
    'IIT JEE and NEET coaching in Sector 45, Gurugram, taught by former HODs of FIITJEE and VMC in batches of 10–15 students.',
  phone: '+919899818241',
  street: 'Flat no 303, Ayyachi Apartment, Block C, Uday Nagar, Sector 45, near Delhi Public School',
  city: 'Gurugram',
  region: 'Haryana',
  postalCode: '122003',
  lat: 28.441687,
  lng: 77.064937,
  googleProfile: 'https://maps.google.com/?cid=5853186131892736630',
  sameAs: [
    'https://maps.google.com/?cid=5853186131892736630',
    'https://www.instagram.com/bm__classes',
    'https://www.facebook.com/share/1PFmnYsfRK/',
    'https://youtube.com/watch?v=XDQq1L-ldP8',
  ],
};

export const FACULTY = [
  {
    name: 'Bighnaraj Mishra',
    alternateName: 'BM Sir',
    jobTitle: 'Head of Chemistry',
    description: 'Chemistry teacher with 20+ years of experience. Former Academic Head at VMC Gurgaon and former faculty at FIITJEE Kalu Sarai.',
    knowsAbout: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'JEE Advanced', 'NEET'],
    image: '/bm_sir.jpg',
  },
  {
    name: 'Konika',
    alternateName: 'Konika Ma’am',
    jobTitle: 'Head of Biology',
    description: 'Biology teacher with 20 years of experience. Taught the FIITJEE KVPY batch and was faculty at DPS Sushant Lok.',
    knowsAbout: ['Botany', 'Zoology', 'NEET Biology', 'CBSE Biology'],
    image: '/konika_mam.jpg',
  },
  {
    name: 'Chumki',
    alternateName: 'Chumki Ma’am',
    jobTitle: 'Science Lead',
    description: 'Science teacher with 22 years of experience, including 18 years as senior faculty at FIITJEE. Teaches Classes 9–12 online and 1-on-1.',
    knowsAbout: ['Physics', 'Chemistry', 'Biology', 'Class 9–12 Science'],
    image: '/chumki_mam.jpeg',
  },
];

export const COURSES = [
  { name: 'JEE & NEET Integrated Programme (Class 11 & 12)', description: 'Two-year Physics, Chemistry and Biology programme for JEE Main, JEE Advanced and NEET, in batches of 10–15.' },
  { name: 'Droppers Batch (JEE & NEET)', description: 'Intensive one-year programme for students repeating JEE or NEET.' },
  { name: 'Biology with Konika Ma’am (Class 9–12 & NEET)', description: 'NCERT Biology taught line by line on a digital board, for NEET and CBSE, ICSE and IB boards.' },
  { name: 'Maths & Science Foundation (Class 9 & 10)', description: 'Board preparation on the updated NCERT syllabus with early JEE and NEET problem solving.' },
  { name: '1-on-1 Science, Online (Class 9–12)', description: 'Personal online Science classes with Chumki Ma’am, one-on-one or in small groups.' },
];

// Shown on the home page AND emitted as FAQPage data, so the two never drift apart.
export const FAQ = [
  {
    q: 'Where is BM Classes in Gurugram?',
    a: 'BM Classes (listed on Google Maps as “Chemistry By Bighnaraj Sir”) is at Flat no 303, Ayyachi Apartment, Block C, Uday Nagar, Sector 45, near Delhi Public School, Gurugram, Haryana 122003.',
  },
  {
    q: 'Who teaches at BM Classes?',
    a: 'Every class is taught by the senior faculty themselves: BM Sir (Bighnaraj Mishra, Chemistry, 20+ years, former Academic Head at VMC Gurgaon), Konika Ma’am (Biology, 20 years) and Chumki Ma’am (Science, 22 years, 18 of them at FIITJEE). There are no junior assistants.',
  },
  {
    q: 'How many students are in a batch?',
    a: 'Batches are capped at 10–15 students, so the teacher knows each student’s target and pace and doubts are solved the same day.',
  },
  {
    q: 'Which courses does BM Classes offer?',
    a: 'JEE and NEET programmes for Class 11, Class 12 and droppers; Biology for Class 9–12 and NEET; Maths and Science foundation for Class 9 and 10; online 1-on-1 Science for Class 9–12; and daily doubt-clearing sessions.',
  },
  {
    q: 'What are the fees at BM Classes?',
    a: 'Classroom programmes start from ₹85,000 a year for Class 11, ₹90,000 for Class 12 and ₹95,000 for droppers, including study material and tests. Merit scholarships of up to 40% are available based on Class X/XI marks. The fee calculator on the website shows your exact fee.',
  },
  {
    q: 'What results have BM Classes students achieved?',
    a: 'BM Classes students have achieved JEE Advanced ranks including AIR 18, AIR 22 and AIR 52, and JEE Main scores of 99+ percentile. The institute is rated 4.9 on Google from 65 reviews.',
  },
  {
    q: 'Are online classes available?',
    a: 'Yes. Most batches run offline and online, and Chumki Ma’am teaches Science online, one-on-one or in small groups, for Classes 9 to 12.',
  },
  {
    q: 'Can I attend a free demo class?',
    a: 'Yes. Book a free demo class on the website by choosing your class, subject, date and time. The team confirms your slot on WhatsApp.',
  },
];

const abs = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: [BUSINESS.googleName, 'BmClasses', 'BM Classes Gurugram'],
    description: BUSINESS.description,
    url: SITE_URL,
    logo: abs('/icon.png'),
    image: abs('/opengraph-image'),
    telephone: BUSINESS.phone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    hasMap: BUSINESS.googleProfile,
    areaServed: ['Gurugram', 'Sector 45 Gurugram', 'Sushant Lok', 'Golf Course Road', 'DLF Phase 4', 'Sector 46', 'Sector 47'].map((name) => ({ '@type': 'Place', name })),
    sameAs: BUSINESS.sameAs,
    knowsAbout: ['IIT JEE Main', 'JEE Advanced', 'NEET UG', 'Chemistry', 'Physics', 'Biology', 'Mathematics', 'CBSE Board'],
    founder: { '@id': `${SITE_URL}/faculty#bighnaraj-mishra` },
    employee: FACULTY.map((p) => ({ '@id': `${SITE_URL}/faculty#${p.name.toLowerCase().replace(/\s+/g, '-')}` })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coaching programmes',
      itemListElement: COURSES.map((c) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: c.name,
          description: c.description,
          provider: { '@id': `${SITE_URL}/#organization` },
        },
      })),
    },
  };
}

export function facultyJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': FACULTY.map((p) => ({
      '@type': 'Person',
      '@id': `${SITE_URL}/faculty#${p.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: p.name,
      alternateName: p.alternateName,
      jobTitle: p.jobTitle,
      description: p.description,
      knowsAbout: p.knowsAbout,
      image: abs(p.image),
      worksFor: { '@id': `${SITE_URL}/#organization` },
    })),
  };
}

export function courseListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'BM Classes coaching programmes',
    itemListElement: COURSES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Course', name: c.name, description: c.description, provider: { '@id': `${SITE_URL}/#organization` } },
    })),
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function breadcrumbJsonLd(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: abs(path) },
    ],
  };
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// Page metadata in one call: title, description, canonical and social cards.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: abs(path), siteName: 'BM Classes', locale: 'en_IN', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}
