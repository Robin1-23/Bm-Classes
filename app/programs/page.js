'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramsSection from '@/components/ProgramsSection';
import DemoBookingSection from '@/components/DemoBookingSection';
import { COURSES } from '@/data/siteContent';

// Next upcoming batch, re-evaluated on every deploy
const NEXT = COURSES.filter((c) => c.startISO && Date.parse(c.startISO) > Date.now()).sort((a, b) => a.startISO.localeCompare(b.startISO))[0];

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
        facts={[NEXT ? { label: 'next batch starts', value: NEXT.start.replace(/ \d{4}$/, '') } : { label: 'batches', value: 'Ongoing' }, { label: 'mock papers', value: 'Up to 20' }]}
        wide={{ label: 'Every course', value: 'Hybrid: join online or at a centre' }}
      />
      <ProgramsSection />
      <DemoBookingSection />
    </>
  );
}
