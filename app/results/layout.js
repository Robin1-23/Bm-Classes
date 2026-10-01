import { pageMetadata, breadcrumbJsonLd, JsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "JEE & NEET Results and Student Reviews",
  description: "BM Classes results: JEE Advanced AIR 18, 22 and 52, JEE Main 99+ percentile, and video reviews from students. Rated 4.9 on Google from 65 reviews.",
  path: '/results',
});

export default function ResultsLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Results", '/results')} />
      {children}
    </>
  );
}
