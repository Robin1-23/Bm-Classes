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
import FloatingLiveReelWidget from '@/components/FloatingLiveReelWidget';
import { useModal } from '@/context/ModalContext';

// Order: promise → proof → people → programs → reasons → price → process → visit
export default function Home() {
  const { openRegister, openSeatLock, openVideo } = useModal();

  return (
    <>
      <HeroSection onOpenRegister={openRegister} onOpenSeatLock={openSeatLock} />
      <ResultsSection onOpenVideo={openVideo} />
      <ReelShowcaseSection />
      <FacultyIntroVideoCard />
      <FacultySection onOpenRegister={openRegister} />
      <ProgramsSection onOpenRegister={openRegister} onOpenSeatLock={openSeatLock} />
      <WhySection hidePedagogy />
      <CalculatorSection onOpenRegister={openRegister} onOpenSeatLock={openSeatLock} />
      <AdmissionJourneySection onOpenRegister={openRegister} />
      <CenterLocationSection onOpenRegister={openRegister} />
      <FloatingLiveReelWidget />
    </>
  );
}
