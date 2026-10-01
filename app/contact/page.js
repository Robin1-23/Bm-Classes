'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeCenterGuide from '@/components/contact/BespokeCenterGuide';
import CenterLocationSection from '@/components/CenterLocationSection';
import CalculatorSection from '@/components/CalculatorSection';
import { useModal } from '@/context/ModalContext';

export default function ContactPage() {
  const { openRegister } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="SECTOR 45 GURGAON CENTER"
        title="Come see the classroom."
        subtitle="Book a 1-on-1 counselling session at House no - 1411p, 1st floor, Sector 45, near DPS-45 school."
        breadcrumb="Contact Us"
      />
      <BespokeCenterGuide />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
      <CalculatorSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
