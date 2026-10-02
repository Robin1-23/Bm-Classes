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
        breadcrumb="Faculty"
        badgeText="Former FIITJEE & VMC HODs"
        title="Legends at the board."
        soft="Every lecture."
        subtitle="No junior assistants. No swapped faculty. BM Sir, Konika Ma’am and Chumki Ma’am teach every class."
        tint="bg-[#eef7ea]"
        facts={[{"label":"teaching experience","value":"20+ yrs"},{"label":"students per batch","value":"10–15"}]}
        wide={{"label":"Your teachers","value":"BM Sir, Konika Ma’am & Chumki Ma’am","faces":true}}
      />
      <FacultyIntroVideoCard />
      <FacultySection />
      <DemoBookingSection />
    </>
  );
}
