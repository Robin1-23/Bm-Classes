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
        breadcrumb="Fee calculator"
        badgeText="No hidden fees"
        title="Your fee. Your scholarship."
        soft="No surprises."
        subtitle="See your yearly fee in seconds, and how much a merit scholarship of up to 40% could save you."
        tint="bg-[#f3f1ff]"
        ctaHref="/#book-demo"
        facts={[{"label":"fees from","value":"₹85,000"},{"label":"scholarship","value":"Up to 40%"}]}
        wide={{"label":"Included in the fee","value":"Study material, tests and doubt sessions"}}
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
