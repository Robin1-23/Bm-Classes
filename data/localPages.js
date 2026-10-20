// Search landing pages: one per keyword group. Facts only — every claim here must match
// data/siteContent.js, data/seo.js and the Google Business Profile.

const AREAS = 'Sector 45, Sector 46, Sector 47, Malibu Towne, Sushant Lok, Golf Course Road, DLF Phase 4 and South City';

export const LOCAL_PAGES = {
  'jee-coaching-gurgaon': {
    path: '/jee-coaching-gurgaon',
    nav: 'IIT JEE coaching in Gurgaon',
    metaTitle: 'Best IIT JEE Coaching in Gurgaon (Gurugram) — Small Batches',
    metaDescription:
      'Looking for the best IIT JEE coaching in Gurgaon / Gurugram? BM Classes: JEE Chemistry by BM Sir, ex-Academic Head VMC Gurgaon. Batches of 10–15, AIR 18, 22 and 52. Free demo.',
    badge: 'IIT JEE coaching · Gurgaon',
    title: 'IIT JEE coaching',
    soft: 'in Gurgaon (Gurugram).',
    subtitle:
      'JEE Main and Advanced Chemistry taught by BM Sir himself, former Academic Head at VMC Gurgaon, in batches of 10–15 students at three Gurugram centres.',
    tint: 'bg-[#eef4ff]',
    facts: [
      { label: 'JEE Advanced ranks', value: 'AIR 18' },
      { label: 'batch size', value: '10–15' },
    ],
    courseIds: ['jee-main-2027-chemistry', 'board-2027-chemistry', 'one-on-one-science'],
    faculty: ['Bighnaraj Mishra', 'Chumki'],
    intro: {
      heading: 'Looking for the best IIT JEE coaching in Gurgaon?',
      paras: [
        'Most JEE aspirants in Gurugram choose between big chains with batches of 60 or more and small local tutors. BM Classes sits in between: senior teachers who spent years at FIITJEE and VMC, teaching small batches themselves, close to home.',
        'Chemistry is where JEE ranks are often won or lost, because it is the most scoring of the three subjects when the concepts are clear. BM Sir (Bighnaraj Mishra) has taught JEE Chemistry for over 20 years, including as Academic Head at VMC Gurgaon and as faculty at FIITJEE Kalu Sarai. His students include JEE Advanced AIR 18, AIR 22 and AIR 52.',
      ],
    },
    compare: [
      ['Who actually teaches you', 'BM Sir teaches every JEE Chemistry class. No junior assistants.'],
      ['Batch size', '10–15 students, so every doubt is solved the same day.'],
      ['Tests', 'The JEE Main 2027 Chemistry crash course includes 20 JEE Main mock papers.'],
      ['Track record', 'JEE Advanced AIR 18, AIR 22, AIR 52; JEE Main 99+ percentile.'],
      ['Reviews', 'Rated 4.9 on Google from 65 reviews (as “Chemistry By Bighnaraj Sir”).'],
      ['Location', `Three centres in Gurugram, easy to reach from ${AREAS}.`],
    ],
    faq: [
      {
        q: 'Which is the best IIT JEE coaching in Gurgaon?',
        a: 'The best coaching is the one where a senior teacher knows you by name. BM Classes in Sector 45, Gurugram is run by former FIITJEE and VMC faculty, keeps batches to 10–15 students, and is rated 4.9 on Google from 65 reviews. Its students have achieved JEE Advanced AIR 18, AIR 22 and AIR 52.',
      },
      {
        q: 'Does BM Classes teach JEE Main and JEE Advanced?',
        a: 'Yes. BM Sir teaches JEE Chemistry to Advanced level. The current batch is the JEE Main 2027 Chemistry crash course: 40 hours of classes and 20 JEE Main mock papers, starting 10 November 2026, online or at a Gurugram centre.',
      },
      {
        q: 'Is BM Classes in Gurgaon or Gurugram?',
        a: 'Both — Gurgaon was renamed Gurugram in 2016. BM Classes has three centres there: Sector 45 (near DPS), Malibu Towne in Sector 47, and Sector 46.',
      },
      {
        q: 'Can I try a JEE class before joining?',
        a: 'Yes. Book a free demo class on the website or WhatsApp +91 98998 18241. The team confirms your slot on WhatsApp and shares fees and timings on the call.',
      },
    ],
  },

  'neet-coaching-gurgaon': {
    path: '/neet-coaching-gurgaon',
    nav: 'NEET coaching in Gurgaon',
    metaTitle: 'Best NEET Coaching in Gurgaon (Gurugram) for MBBS — Small Batches',
    metaDescription:
      'Looking for the best NEET / MBBS entrance coaching in Gurgaon or Gurugram? NEET Chemistry by BM Sir and Biology by Konika Ma’am, ex-FIITJEE faculty. Batches of 10–15. Free demo.',
    badge: 'NEET & MBBS entrance · Gurgaon',
    title: 'NEET coaching',
    soft: 'in Gurgaon (Gurugram).',
    subtitle:
      'Get into MBBS with NEET Chemistry from BM Sir and Biology from Konika Ma’am — senior teachers with 20+ years each, in batches of 10–15 students.',
    tint: 'bg-[#eef7ea]',
    facts: [
      { label: 'NEET Chemistry', value: '40 hrs' },
      { label: 'mock papers', value: '20' },
    ],
    courseIds: ['neet-2027-chemistry', 'board-2027-biology', 'one-on-one-science'],
    faculty: ['Bighnaraj Mishra', 'Konika', 'Chumki'],
    intro: {
      heading: 'Looking for the best NEET coaching in Gurgaon?',
      paras: [
        'NEET is the entrance exam for MBBS and BDS seats across India, and Biology and Chemistry together make up three-quarters of the paper. That is exactly where BM Classes is strongest.',
        'NEET Chemistry is taught by BM Sir (20+ years, former Academic Head at VMC Gurgaon). Biology is taught by Konika Ma’am, who has 20 years of experience, taught the FIITJEE KVPY batch and was faculty at DPS Sushant Lok. Both teach in batches of 10–15, so no student gets lost at the back of a hall.',
      ],
    },
    compare: [
      ['Who actually teaches you', 'BM Sir for Chemistry and Konika Ma’am for Biology. No junior assistants.'],
      ['Batch size', '10–15 students per batch.'],
      ['Tests', 'The NEET 2027 Chemistry crash course includes 20 NEET mock papers.'],
      ['Boards too', 'A 12th Board 2027 Biology crash course runs alongside, so board and NEET prep don’t clash.'],
      ['Reviews', 'Rated 4.9 on Google from 65 reviews (as “Chemistry By Bighnaraj Sir”).'],
      ['Location', `Three centres in Gurugram, easy to reach from ${AREAS}.`],
    ],
    faq: [
      {
        q: 'Which is the best NEET coaching in Gurgaon for MBBS?',
        a: 'Look for senior teachers, small batches and regular NEET-pattern tests. At BM Classes in Gurugram, NEET Chemistry is taught by BM Sir and Biology by Konika Ma’am, both with 20+ years of experience, in batches of 10–15. The institute is rated 4.9 on Google from 65 reviews.',
      },
      {
        q: 'What NEET course is running now?',
        a: 'The NEET 2027 Chemistry crash course: 40 hours of classes and 20 NEET mock papers, starting 10 November 2026, in hybrid mode (online or at a Gurugram centre). A 12th Board 2027 Biology crash course starts 10 October 2026.',
      },
      {
        q: 'Is NEET coaching available online?',
        a: 'Yes. Every crash course is hybrid, so you can join from home. Chumki Ma’am also teaches Science online, 1-on-1, for Classes 9–12.',
      },
      {
        q: 'Can I try a NEET class before joining?',
        a: 'Yes. Book a free demo class on the website or WhatsApp +91 98998 18241. Fees and batch timings are shared on the call.',
      },
    ],
  },

  'chemistry-classes-gurgaon': {
    path: '/chemistry-classes-gurgaon',
    nav: 'Chemistry classes in Gurgaon',
    metaTitle: 'Best Chemistry Classes in Gurgaon, Gurugram & Delhi NCR — BM Sir',
    metaDescription:
      'Best chemistry classes in Gurgaon / Gurugram and Delhi NCR: Chemistry By Bighnaraj Sir (BM Sir), 20+ years, ex-VMC & FIITJEE. Boards, JEE and NEET. Online across NCR. Rated 4.9 on Google.',
    badge: 'Chemistry By Bighnaraj Sir',
    title: 'Chemistry classes',
    soft: 'in Gurgaon & Delhi NCR.',
    subtitle:
      'Boards, JEE and NEET Chemistry with BM Sir — known on Google Maps as “Chemistry By Bighnaraj Sir”. At a Gurugram centre, or online from anywhere in Delhi NCR.',
    tint: 'bg-[#fdf4e6]',
    facts: [
      { label: 'years teaching', value: '20+' },
      { label: 'on Google', value: '4.9★' },
    ],
    courseIds: ['board-2027-chemistry', 'jee-main-2027-chemistry', 'neet-2027-chemistry'],
    faculty: ['Bighnaraj Mishra'],
    intro: {
      heading: 'Looking for the best chemistry classes in Gurgaon or Delhi NCR?',
      paras: [
        'BM Classes started as “Chemistry By Bighnaraj Sir”, and Chemistry is still at its heart. BM Sir (Bighnaraj Mishra) has taught Physical, Organic and Inorganic Chemistry for over 20 years — as Academic Head at VMC Gurgaon and as faculty at FIITJEE Kalu Sarai.',
        'Students from across Delhi NCR join his batches: in person at Sector 45, Malibu Towne (Sector 47) or Sector 46 in Gurugram, or online in hybrid mode from Delhi, Noida, Faridabad and beyond.',
      ],
    },
    compare: [
      ['Who actually teaches you', 'BM Sir teaches every Chemistry class himself.'],
      ['Boards', '12th Board 2027 Chemistry: 35 hours of classes and 20 mock papers, from 10 Oct 2026.'],
      ['JEE & NEET', 'JEE Main and NEET 2027 Chemistry: 40 hours and 20 mock papers each, from 10 Nov 2026.'],
      ['Batch size', '10–15 students per batch.'],
      ['Reviews', 'Rated 4.9 on Google from 65 reviews.'],
      ['Across NCR', 'Hybrid classes: join at a Gurugram centre or online from anywhere in Delhi NCR.'],
    ],
    faq: [
      {
        q: 'Who is the best chemistry teacher in Gurgaon?',
        a: 'BM Sir (Bighnaraj Mishra) of BM Classes is one of Gurugram’s most experienced chemistry teachers: 20+ years, former Academic Head at VMC Gurgaon and former FIITJEE faculty. His profile “Chemistry By Bighnaraj Sir” is rated 4.9 on Google from 65 reviews.',
      },
      {
        q: 'Are there chemistry classes for Class 12 boards?',
        a: 'Yes. The 12th Board 2027 Chemistry crash course has 35 hours of classes and 20 mock papers, starting 10 October 2026, online or at a Gurugram centre.',
      },
      {
        q: 'Can students from Delhi or Noida join?',
        a: 'Yes. Every crash course is hybrid, so students anywhere in Delhi NCR can join online and visit a Gurugram centre when they want to.',
      },
      {
        q: 'Where are the chemistry classes held?',
        a: 'At three Gurugram centres: Flat 303, Ayyachi Apartment, Sector 45 (near DPS); OD-55, Malibu Towne, Sector 47; and 2423, Sector 46 — and online.',
      },
    ],
  },
};
