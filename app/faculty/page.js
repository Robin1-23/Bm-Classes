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
        subtitle="No junior teaching assistants or swapped faculties. Dhirendra Pratap Singh and Bighnaraj Mishra teach every single lecture."
        breadcrumb="Ex-HOD Faculty"
      />
      <FacultyIntroVideoCard 
        title="Meet BM Sir & Konika Ma'am (Masterclass Intro)"
        subtitle="Watch the 2.5-minute introduction to see how our Senior faculty build conceptual clarity and 1-on-1 student mentorship."
      />
      <BespokeFacultyBios />
      <FacultySection 
        onOpenRegister={openRegister}
      />
      <WhySection />
    </>
  );
}
