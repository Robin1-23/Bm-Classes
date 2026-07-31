'use client';

import React, { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import ProgramsSection from '@/components/ProgramsSection';
import FacultySection from '@/components/FacultySection';
import CalculatorSection from '@/components/CalculatorSection';
import PlatformSection from '@/components/PlatformSection';
import ResultsSection from '@/components/ResultsSection';
import BlogSection from '@/components/BlogSection';
import CenterLocationSection from '@/components/CenterLocationSection';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import SeatLockModal from '@/components/SeatLockModal';
import MobileStickyActionBar from '@/components/MobileStickyActionBar';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

export default function Home() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [seatLockOpen, setSeatLockOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState(null);

  const handleOpenRegister = () => {
    setLoginOpen(false);
    setSeatLockOpen(false);
    setRegisterOpen(true);
  };

  const handleOpenLogin = () => {
    setRegisterOpen(false);
    setSeatLockOpen(false);
    setLoginOpen(true);
  };

  const handleOpenSeatLock = () => {
    setRegisterOpen(false);
    setLoginOpen(false);
    setSeatLockOpen(true);
  };

  const handleOpenVideo = (title) => {
    setVideoTitle(title);
  };

  const handleCloseModals = () => {
    setRegisterOpen(false);
    setLoginOpen(false);
    setSeatLockOpen(false);
    setVideoTitle(null);
  };

  return (
    <main className="min-h-screen flex flex-col pb-16 lg:pb-0 overflow-x-hidden max-w-full w-full">
      <AnnouncementBar />
      <Header 
        onOpenRegister={handleOpenRegister} 
        onOpenLogin={handleOpenLogin} 
        onOpenSeatLock={handleOpenSeatLock}
      />
      <HeroSection 
        onOpenRegister={handleOpenRegister} 
        onOpenSeatLock={handleOpenSeatLock}
      />
      <WhySection />
      <ProgramsSection 
        onOpenRegister={handleOpenRegister} 
        onOpenSeatLock={handleOpenSeatLock}
      />
      <FacultySection 
        onOpenRegister={handleOpenRegister}
      />
      <CalculatorSection 
        onOpenRegister={handleOpenRegister} 
        onOpenSeatLock={handleOpenSeatLock}
      />
      <PlatformSection />
      <ResultsSection 
        onOpenVideo={handleOpenVideo} 
      />
      <BlogSection />
      <CenterLocationSection 
        onOpenRegister={handleOpenRegister}
      />
      <Footer 
        onOpenRegister={handleOpenRegister} 
        onOpenLogin={handleOpenLogin} 
        onOpenSeatLock={handleOpenSeatLock}
      />
      <Modals 
        registerOpen={registerOpen}
        loginOpen={loginOpen}
        videoTitle={videoTitle}
        onClose={handleCloseModals}
      />
      <SeatLockModal
        isOpen={seatLockOpen}
        onClose={handleCloseModals}
      />
      <FloatingWhatsAppButton />
      <MobileStickyActionBar 
        onOpenRegister={handleOpenRegister}
        onOpenSeatLock={handleOpenSeatLock}
      />
    </main>
  );
}
