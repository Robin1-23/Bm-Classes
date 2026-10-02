'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import CenterLocationSection from '@/components/CenterLocationSection';
import VisitGuide from '@/components/contact/VisitGuide';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badgeText="SECTOR 45, GURUGRAM"
        title="Come see the classroom."
        subtitle="Meet the HOD, get a plan for your preparation, and see where you’d study."
        breadcrumb="Contact"
      />
      <CenterLocationSection />
      <VisitGuide />
      <DemoBookingSection />
    </>
  );
}
