'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeWhyUsDetails from '@/components/why-us/BespokeWhyUsDetails';
import WhySection from '@/components/WhySection';

export default function WhyUsPage() {
  return (
    <>
      <PageHeader 
        badgeText="10-15 MICRO-BATCH RIGOR"
        title="Small rooms. Big ranks."
        subtitle="Big-institute rigour, with the attention and same-day doubt solving only a 10–15 student batch can give."
        breadcrumb="Why Us"
      />
      <BespokeWhyUsDetails />
      <WhySection />
    </>
  );
}
