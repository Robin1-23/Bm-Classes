'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import FacultyIntroVideoCard from '@/components/FacultyIntroVideoCard';
import FacultySection from '@/components/FacultySection';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        badgeText="FORMER FIITJEE & VMC HODs"
        title="Legends at the board. Every lecture."
        subtitle="No junior assistants. No swapped faculty. BM Sir, Konika Ma’am and Chumki Ma’am teach every class."
        breadcrumb="Faculty"
      />
      <FacultyIntroVideoCard />
      <FacultySection />
      <DemoBookingSection />
    </>
  );
}
