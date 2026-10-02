import { pageMetadata, breadcrumbJsonLd, JsonLd, courseListJsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Crash Courses 2027: Boards, JEE Main, NEET & Class 10",
  description: "12th Board Chemistry and Biology, JEE Main and NEET Chemistry crash courses for 2027, a Class 10 rapid course and 1-on-1 Science. Hybrid classes in Gurugram from 10 Oct 2026.",
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
