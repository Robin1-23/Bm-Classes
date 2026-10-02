'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import CenterLocationSection from '@/components/CenterLocationSection';
import VisitGuide from '@/components/contact/VisitGuide';
import DemoBookingSection from '@/components/DemoBookingSection';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact"
        badgeText="Sector 45 · Malibu Towne · Sector 46"
        title="Come see"
        soft="the classroom."
        subtitle="Meet the HOD, get a plan for your preparation, and see where you’d study."
        tint="bg-[#eef4ff]"
        facts={[{"label":"centres in Gurugram","value":"3"},{"label":"on Google","value":"4.9 ★"}]}
        wide={{"label":"Call or WhatsApp","value":"+91 98998 18241","href":"tel:+919899818241"}}
      />
      <CenterLocationSection />
      <VisitGuide />
      <DemoBookingSection />
    </>
  );
}
