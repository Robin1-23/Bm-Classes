'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramsSection from '@/components/ProgramsSection';
import BatchTimetable from '@/components/BatchTimetable';
import YearRoadmap from '@/components/programs/YearRoadmap';
import CalculatorSection from '@/components/CalculatorSection';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        badgeText="COURSES 2026–27"
        title="Built for ranks, not roll numbers."
        subtitle="JEE Main, JEE Advanced and NEET batches of 10–15, taught entirely by former HODs of FIITJEE and VMC."
        breadcrumb="Courses"
      />
      <ProgramsSection />
      <BatchTimetable />
      <YearRoadmap />
      <CalculatorSection />
      <DemoBookingSection />
    </>
  );
}
