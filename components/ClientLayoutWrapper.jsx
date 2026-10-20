'use client';

import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { track } from '@vercel/analytics';
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

  // Count taps on call and WhatsApp links anywhere on the site
  useEffect(() => {
    const onClick = (e) => {
      const href = e.target.closest?.('a[href]')?.getAttribute('href') || '';
      if (href.startsWith('tel:')) track('Call tap', { page: window.location.pathname });
      else if (/wa\.me|whatsapp\.com/.test(href)) track('WhatsApp tap', { page: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full w-full">
      {!isAdmin && <Header />}
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
      {!isAdmin && <FloatingWhatsAppButton />}
      <ScrollToTopButton />
      {!isAdmin && <MobileStickyActionBar />}
      {/* Page views; admin pages are never tracked */}
      <Analytics beforeSend={(event) => (event.url.includes('/admin') ? null : event)} />
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
