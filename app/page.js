'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import AdmissionJourneySection from '@/components/AdmissionJourneySection';
import ProgramsSection from '@/components/ProgramsSection';
import CalculatorSection from '@/components/CalculatorSection';
import FacultySection from '@/components/FacultySection';
import ReelShowcaseSection from '@/components/ReelShowcaseSection';
import FacultyIntroVideoCard from '@/components/FacultyIntroVideoCard';
import WhySection from '@/components/WhySection';
import PlatformSection from '@/components/PlatformSection';
import ResultsSection from '@/components/ResultsSection';
import CenterLocationSection from '@/components/CenterLocationSection';
import LocalSeoKeywordsSection from '@/components/LocalSeoKeywordsSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { useModal } from '@/context/ModalContext';

export default function Home() {
  const { openRegister, openSeatLock, openVideo } = useModal();

  return (
    <>
      <HeroSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <AdmissionJourneySection 
        onOpenRegister={openRegister}
      />
      <FacultyIntroVideoCard />
      <ProgramsSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <CalculatorSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <ReelShowcaseSection />
      <FacultySection 
        onOpenRegister={openRegister}
      />
      <WhySection hidePedagogy />
      <PlatformSection />
      <ResultsSection 
        onOpenVideo={openVideo} 
      />
      <LocalSeoKeywordsSection />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
      <StickyMobileCTA 
        onOpenRegister={openRegister}
      />
    </>
  );
}
