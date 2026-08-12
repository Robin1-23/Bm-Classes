'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import FacultyIntroVideoCard from '@/components/FacultyIntroVideoCard';
import BespokeFacultyBios from '@/components/faculty/BespokeFacultyBios';
import FacultySection from '@/components/FacultySection';
import WhySection from '@/components/WhySection';
import { useModal } from '@/context/ModalContext';

export default function FacultyPage() {
  const { openRegister } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="100% EX-FIITJEE & VMC HODs"
        title="Learn Directly from Legendary Subject Leads"
        subtitle="No junior teaching assistants or swapped faculties. BM Sir, Konika Ma’am & Chumki Ma’am teach every single lecture."
        breadcrumb="Ex-HOD Faculty"
      />
      <FacultyIntroVideoCard 
        title="Meet BM Sir & Konika Ma'am (Masterclass Intro)"
      />
      <BespokeFacultyBios />
      <FacultySection 
        onOpenRegister={openRegister}
      />
      <WhySection />
    </>
  );
}
