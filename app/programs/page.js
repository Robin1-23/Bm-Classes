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
        breadcrumb="Courses"
        badgeText="Courses 2026–27"
        title="Built for ranks,"
        soft="not roll numbers."
        subtitle="JEE Main, JEE Advanced and NEET batches of 10–15, taught entirely by former HODs of FIITJEE and VMC."
        tint="bg-[#fdf4e6]"
        facts={[{"label":"Class 11 starts","value":"6 April"},{"label":"fees from","value":"₹85,000"}]}
        wide={{"label":"Merit scholarships","value":"Up to 40% off, based on Class X/XI marks"}}
      />
      <ProgramsSection />
      <BatchTimetable />
      <YearRoadmap />
      <CalculatorSection />
      <DemoBookingSection />
    </>
  );
}
