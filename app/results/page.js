'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeHallOfFame from '@/components/results/BespokeHallOfFame';
import ResultsSection from '@/components/ResultsSection';
import FacultySection from '@/components/FacultySection';
import { useModal } from '@/context/ModalContext';

export default function ResultsPage() {
  const { openRegister, openVideo } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="AIR 18, 22, 52, 102 TOP RANKS"
        title="Proven Rank Telemetry & Parent Reviews"
        subtitle="15+ years of verified JEE Advanced and NEET top ranks. Real video reviews from Gurgaon parents and IITian alumni."
        breadcrumb="Top AIR Ranks"
      />
      <BespokeHallOfFame />
      <ResultsSection 
        onOpenVideo={openVideo}
      />
      <FacultySection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
