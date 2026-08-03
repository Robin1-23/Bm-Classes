'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeWhyUsDetails from '@/components/why-us/BespokeWhyUsDetails';
import WhySection from '@/components/WhySection';
import PlatformSection from '@/components/PlatformSection';

export default function WhyUsPage() {
  return (
    <>
      <PageHeader 
        badgeText="10-15 MICRO-BATCH RIGOR"
        title="Why Small-Batch Coaching Outperforms Mass Factories"
        subtitle="Premier institute rigor combined with the individual attention and same-day board doubt resolution only a capped 10-15 student batch provides."
        breadcrumb="Why Us"
      />
      <BespokeWhyUsDetails />
      <WhySection />
      <PlatformSection />
    </>
  );
}
