import { pageMetadata, breadcrumbJsonLd, JsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Why Small-Batch JEE & NEET Coaching Works",
  description: "Why a batch of 10–15 taught by former FIITJEE and VMC HODs beats large coaching classes: weekly check-ups, same-day doubts, and a teacher who knows your name.",
  path: '/why-us',
});

export default function WhyUsLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Why us", '/why-us')} />
      {children}
    </>
  );
}
