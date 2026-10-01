'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ModalProvider, useModal } from '@/context/ModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import MobileStickyActionBar from '@/components/MobileStickyActionBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';

function Shell({ children }) {
  const pathname = usePathname();
  const { registerOpen, videoTitle, preselectedProgram, prefilledPhone, closeModals } = useModal();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col pb-24 lg:pb-0 overflow-x-hidden max-w-full w-full">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      {!isAdmin && <Footer />}
      <Modals
        registerOpen={registerOpen}
        videoTitle={videoTitle}
        preselectedProgram={preselectedProgram}
        prefilledPhone={prefilledPhone}
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
