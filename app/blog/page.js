'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import BlogSection from '@/components/BlogSection';
import CenterLocationSection from '@/components/CenterLocationSection';
import { useModal } from '@/context/ModalContext';

export default function BlogPage() {
  const { openRegister } = useModal();

  return (
    <>
      <PageHeader 
        badgeText="EX-HOD INSIGHTS & STRATEGY"
        title="High-Yield JEE & NEET Preparation Articles"
        subtitle="Expert exam preparation blueprints, organic reaction shortcuts, and problem-solving strategies written directly by Senior Ex-HODs."
        breadcrumb="Articles"
      />
      <BlogSection />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
