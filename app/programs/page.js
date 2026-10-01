'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeProgramRoadmap from '@/components/programs/BespokeProgramRoadmap';
import ProgramsSection from '@/components/ProgramsSection';
import BatchTimetable from '@/components/BatchTimetable';
import CalculatorSection from '@/components/CalculatorSection';
import { useModal } from '@/context/ModalContext';

export default function ProgramsPage() {
  const { openRegister } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="ACADEMIC PROGRAMS 2026-27"
        title="Built for ranks, not roll numbers."
        subtitle="JEE Main, JEE Advanced and NEET micro-batches, taught 100% by Senior Ex-HODs."
        breadcrumb="Academic Programs"
      />
      <BespokeProgramRoadmap />
      <ProgramsSection 
        onOpenRegister={openRegister}
      />
      <BatchTimetable />
      <CalculatorSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
