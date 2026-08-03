'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import ProgramsSection from '@/components/ProgramsSection';
import FacultySection from '@/components/FacultySection';
import CalculatorSection from '@/components/CalculatorSection';
import PlatformSection from '@/components/PlatformSection';
import ResultsSection from '@/components/ResultsSection';
import BlogSection from '@/components/BlogSection';
import CenterLocationSection from '@/components/CenterLocationSection';
import { useModal } from '@/context/ModalContext';

export default function Home() {
  const { openRegister, openSeatLock, openVideo } = useModal();

  return (
    <>
      <HeroSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <WhySection />
      <ProgramsSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <FacultySection 
        onOpenRegister={openRegister}
      />
      <CalculatorSection 
        onOpenRegister={openRegister} 
        onOpenSeatLock={openSeatLock}
      />
      <PlatformSection />
      <ResultsSection 
        onOpenVideo={openVideo} 
      />
      <BlogSection />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
