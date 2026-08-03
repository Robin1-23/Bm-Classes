'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import CenterLocationSection from '@/components/CenterLocationSection';
import CalculatorSection from '@/components/CalculatorSection';
import { useModal } from '@/context/ModalContext';

export default function ContactPage() {
  const { openRegister, openSeatLock } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="ARDEE CITY GROUND FLOOR"
        title="Visit BmClasses Gurgaon Studio & Meet Ex-HODs"
        subtitle="Book a direct 1-on-1 diagnostic counseling session with Senior HODs at our Ardee City, Sector 52 center."
        breadcrumb="Contact Us"
      />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
      <CalculatorSection 
        onOpenRegister={openRegister}
        onOpenSeatLock={openSeatLock}
      />
    </>
  );
}
