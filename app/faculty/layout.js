import { pageMetadata, breadcrumbJsonLd, JsonLd, facultyJsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Faculty: Former HODs of FIITJEE & VMC",
  description: "Meet BM Sir (Chemistry, 20+ years, former Academic Head at VMC Gurgaon), Konika Ma’am (Biology, 20 years) and Chumki Ma’am (Science, 22 years). They teach every class.",
  path: '/faculty',
});

export default function FacultyLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Faculty", '/faculty')} />
      <JsonLd data={facultyJsonLd()} />
      {children}
    </>
  );
}
