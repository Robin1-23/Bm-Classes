'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ResultsSection from '@/components/ResultsSection';
import ReelShowcaseSection from '@/components/ReelShowcaseSection';
import FacultyIntroVideoCard from '@/components/FacultyIntroVideoCard';
import FacultySection from '@/components/FacultySection';
import ProgramsSection from '@/components/ProgramsSection';
import WhySection from '@/components/WhySection';
import CalculatorSection from '@/components/CalculatorSection';
import AdmissionJourneySection from '@/components/AdmissionJourneySection';
import CenterLocationSection from '@/components/CenterLocationSection';
import { useModal } from '@/context/ModalContext';

// Order: promise → proof → people → programs → reasons → price → process → visit
export default function Home() {
  const { openRegister, openVideo } = useModal();

  return (
    <>
      <HeroSection onOpenRegister={openRegister} />
      <ResultsSection onOpenVideo={openVideo} />
      <ReelShowcaseSection />
      <FacultyIntroVideoCard />
      <FacultySection onOpenRegister={openRegister} />
      <ProgramsSection onOpenRegister={openRegister} />
      <WhySection hidePedagogy />
      <CalculatorSection onOpenRegister={openRegister} />
      <AdmissionJourneySection onOpenRegister={openRegister} />
      <CenterLocationSection onOpenRegister={openRegister} />
    </>
  );
}
