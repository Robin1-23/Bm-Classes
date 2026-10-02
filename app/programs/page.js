'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramsSection from '@/components/ProgramsSection';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Courses"
        badgeText="Courses 2026–27"
        title="Short courses."
        soft="Serious results."
        subtitle="Crash courses for the 2027 boards, JEE Main and NEET, a rapid Class 10 course, and 1-on-1 Science. Online and offline."
        tint="bg-[#fdf4e6]"
        facts={[{ label: 'next batch starts', value: '10 Oct' }, { label: 'mock papers', value: 'Up to 20' }]}
        wide={{ label: 'Every course', value: 'Hybrid: join online or at a centre' }}
      />
      <ProgramsSection />
      <DemoBookingSection />
    </>
  );
}
