import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-outfit', display: 'swap' });
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { SITE_URL, BUSINESS, organizationJsonLd, JsonLd } from '@/data/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BM Classes | IIT JEE & NEET Coaching in Gurugram (Sector 45)',
    template: '%s | BM Classes Gurugram',
  },
  description:
    'BM Classes (Chemistry By Bighnaraj Sir on Google Maps): IIT JEE, NEET and board coaching in Gurugram by former FIITJEE and VMC HODs. Rated 4.9 on Google. 3 centres. Book a free demo.',
  applicationName: 'BM Classes',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'BM Classes | IIT JEE & NEET Coaching in Gurugram',
    description: BUSINESS.description,
    url: SITE_URL,
    siteName: 'BM Classes',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BM Classes | IIT JEE & NEET Coaching in Gurugram',
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'Fq-s47d0ftSJBLa5q6IbNPpc3H-HVjL3E2FqVasZaZg',
  },
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Gurugram',
    'geo.position': `${BUSINESS.lat};${BUSINESS.lng}`,
    ICBM: `${BUSINESS.lat}, ${BUSINESS.lng}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`scroll-smooth ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <JsonLd data={organizationJsonLd()} />
      </head>
      <body className="font-body bg-[#f5f7ff] text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
