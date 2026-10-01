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
        title="Exam strategy, straight from the HODs"
        subtitle="Shortcuts, blueprints and problem-solving tricks our Ex-HODs actually use in class."
        breadcrumb="Articles"
      />
      <BlogSection />
      <CenterLocationSection 
        onOpenRegister={openRegister}
      />
    </>
  );
}
