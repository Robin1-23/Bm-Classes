'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ResultsBoard from '@/components/ResultsBoard';
import ResultsSection from '@/components/ResultsSection';
import FacultySection from '@/components/FacultySection';
import { useModal } from '@/context/ModalContext';

export default function ResultsPage() {
  const { openRegister, openVideo } = useModal();

  return (
    <>
      <PageHeader
        breadcrumb="Results"
        badgeText="JEE & NEET results"
        title="Our toppers"
        soft="did the talking."
        subtitle="Real results and real video reviews from BM Classes students and parents."
        tint="bg-[#fbf0ee]"
        ctaHref="/#book-demo"
        facts={[{"label":"JEE Advanced","value":"AIR 18"},{"label":"on Google","value":"4.9 ★"}]}
        wide={{"label":"JEE Main","value":"99.48 percentile, Aaryan Jain"}}
      />
      <ResultsBoard />
      <ResultsSection 
        onOpenVideo={openVideo}
      />
      <FacultySection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
