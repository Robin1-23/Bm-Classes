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
        badgeText="WHY BM CLASSES"
        title="Small rooms. Big ranks."
        subtitle="Big-institute rigour, with the attention and same-day doubt solving only a 10–15 student batch can give."
        breadcrumb="Why us"
      />
      <WhySection />
      <TeachingMethod />
      <ComparisonSection />
      <DemoBookingSection />
    </>
  );
}
