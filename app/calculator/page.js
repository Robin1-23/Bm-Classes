'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeFeeBreakdown from '@/components/calculator/BespokeFeeBreakdown';
import CalculatorSection from '@/components/CalculatorSection';
import ProgramsSection from '@/components/ProgramsSection';
import { useModal } from '@/context/ModalContext';

export default function CalculatorPage() {
  const { openRegister, openSeatLock } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="100% FEE TRANSPARENCY"
        title="Interactive Fee & Merit Scholarship Calculator"
        subtitle="Calculate your exact course fee and unlock up to 40% Ex-HOD Merit Scholarship fee waivers based on your Class X/XI marks."
        breadcrumb="Fee Calculator"
      />
      <BespokeFeeBreakdown />
      <CalculatorSection 
        onOpenRegister={openRegister}
        onOpenSeatLock={openSeatLock}
      />
      <ProgramsSection 
        onOpenRegister={openRegister}
        onOpenSeatLock={openSeatLock}
      />
    </>
  );
}
