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
        badgeText="AIR 18, 22, 52, 102 TOP RANKS"
        title="Our toppers did the talking."
        subtitle="15+ years of JEE Advanced and NEET top ranks, plus real video reviews from Gurgaon parents and alumni."
        breadcrumb="Top AIR Ranks"
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
