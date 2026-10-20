import './globals.css';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

const outfit = Outfit({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-outfit', display: 'swap' });
// Geist is self-hosted (Next 14 can't fetch it from Google Fonts): no render-blocking stylesheet, preloaded, no layout shift
const geist = localFont({ src: './fonts/Geist-latin.woff2', weight: '400 700', variable: '--font-geist', display: 'swap' });
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import { SITE_URL, BUSINESS, organizationJsonLd, websiteJsonLd, JsonLd } from '@/data/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BM Classes | Best IIT JEE & NEET Coaching in Gurgaon (Gurugram)',
    template: '%s | BM Classes Gurugram',
  },
  description:
    'BM Classes (Chemistry By Bighnaraj Sir): IIT JEE, NEET and Chemistry coaching in Gurgaon / Gurugram by former FIITJEE and VMC HODs. Batches of 10–15, rated 4.9 on Google, 3 centres. Free demo.',
  applicationName: 'BM Classes',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'BM Classes | IIT JEE & NEET Coaching in Gurgaon (Gurugram)',
    description: BUSINESS.description,
    url: SITE_URL,
    siteName: 'BM Classes',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BM Classes | IIT JEE & NEET Coaching in Gurgaon (Gurugram)',
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
    <html lang="en-IN" className={`scroll-smooth ${outfit.variable} ${geist.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="font-body bg-[#f5f7ff] text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
