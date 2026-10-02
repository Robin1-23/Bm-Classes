import { pageMetadata, breadcrumbJsonLd, JsonLd } from '@/data/seo';

export const metadata = pageMetadata({
  title: "Contact & 3 Centres: Sector 45, 46 & Malibu Towne",
  description: "BM Classes has 3 centres in Gurugram: Ayyachi Apartment, Sector 45 (near DPS); OD-55, Malibu Towne, Sector 47; and 2423, Sector 46. Call +91 98998 18241 or book a free demo.",
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
