'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeCenterGuide from '@/components/contact/BespokeCenterGuide';
import CenterLocationSection from '@/components/CenterLocationSection';
import CalculatorSection from '@/components/CalculatorSection';
import { useModal } from '@/context/ModalContext';

export default function ContactPage() {
  const { openRegister, openSeatLock } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="SECTOR 45 GURGAON CENTER"
        title="Visit Chemistry classes by BM sir"
        subtitle="Book a direct 1-on-1 diagnostic counseling session at House no - 1411p, 1st floor, sec-45, near DPS-45 school."
        breadcrumb="Contact Us"
      />
      <BespokeCenterGuide />
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
