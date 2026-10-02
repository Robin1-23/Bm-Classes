'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import WhySection from '@/components/WhySection';
import TeachingMethod from '@/components/why-us/TeachingMethod';
import ComparisonSection from '@/components/why-us/ComparisonSection';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Why us"
        badgeText="Why BM Classes"
        title="Small rooms."
        soft="Big ranks."
        subtitle="Big-institute rigour, with the attention and same-day doubt solving only a 10–15 student batch can give."
        tint="bg-[#f3f1ff]"
        facts={[{"label":"students per batch","value":"10–15"},{"label":"doubts solved","value":"Same day"}]}
        wide={{"label":"Every class taught by","value":"Former FIITJEE & VMC HODs","faces":true}}
      />
      <WhySection />
      <TeachingMethod />
      <ComparisonSection />
      <DemoBookingSection />
    </>
  );
}
