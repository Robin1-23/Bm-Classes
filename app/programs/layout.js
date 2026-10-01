import { pageMetadata, breadcrumbJsonLd, JsonLd, courseListJsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "JEE & NEET Coaching Programs, Class 9–12",
  description: "JEE Main, JEE Advanced and NEET programmes in Sector 45, Gurugram: Class 11 & 12, droppers, Biology, and Class 9–10 foundation. Batches of 10–15. See timings and fees.",
  path: '/programs',
});

export default function ProgramsLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Programs", '/programs')} />
      <JsonLd data={courseListJsonLd()} />
      {children}
    </>
  );
}
