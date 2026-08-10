'use client';

import React from 'react';
import { ModalProvider, useModal } from '@/context/ModalContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import SeatLockModal from '@/components/SeatLockModal';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import MobileStickyActionBar from '@/components/MobileStickyActionBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';

function Shell({ children }) {
  const { registerOpen, loginOpen, seatLockOpen, videoTitle, preselectedProgram, closeModals } = useModal();

  return (
    <div className="min-h-screen flex flex-col pb-16 lg:pb-0 overflow-x-hidden max-w-full w-full">
      {/* <AnnouncementBar /> */}
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <Modals
        registerOpen={registerOpen}
        loginOpen={loginOpen}
        videoTitle={videoTitle}
        preselectedProgram={preselectedProgram}
        onClose={closeModals}
      />
      <SeatLockModal
        isOpen={seatLockOpen}
        onClose={closeModals}
      />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
      <MobileStickyActionBar />
    </div>
  );
}

export default function ClientLayoutWrapper({ children }) {
  return (
    <ModalProvider>
      <Shell>{children}</Shell>
    </ModalProvider>
  );
}
