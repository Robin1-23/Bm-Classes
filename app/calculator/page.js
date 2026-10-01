'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BespokeFeeBreakdown from '@/components/calculator/BespokeFeeBreakdown';
import CalculatorSection from '@/components/CalculatorSection';
import ProgramsSection from '@/components/ProgramsSection';
import { useModal } from '@/context/ModalContext';

export default function CalculatorPage() {
  const { openRegister } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="100% FEE TRANSPARENCY"
        title="Your fee. Your scholarship. No surprises."
        subtitle="See your exact course fee and unlock up to 40% merit scholarship based on your Class X/XI marks."
        breadcrumb="Fee Calculator"
      />
      <BespokeFeeBreakdown />
      <CalculatorSection 
        onOpenRegister={openRegister}
      />
      <ProgramsSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
