import { pageMetadata, breadcrumbJsonLd, JsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "JEE & NEET Fee and Scholarship Calculator",
  description: "See your yearly fee for Class 11, Class 12 or droppers in seconds, and how much a merit scholarship of up to 40% could save you. No hidden costs.",
  path: '/calculator',
});

export default function CalculatorLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Fee calculator", '/calculator')} />
      {children}
    </>
  );
}
