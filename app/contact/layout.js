import { pageMetadata, breadcrumbJsonLd, JsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Contact and Directions, Sector 45",
  description: "Visit BM Classes at Flat no 303, Ayyachi Apartment, Block C, Sector 45, near Delhi Public School, Gurugram. Call +91 98998 18241 or book a free demo class.",
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Contact", '/contact')} />
      {children}
    </>
  );
}
