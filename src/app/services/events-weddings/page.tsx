import React from 'react';
import EventsHero from "@/components/events/EventsHero";
import EventsFeatures from "@/components/events/EventsFeatures";
import FleetShowcase from "@/components/events/FleetShowcase";
import Testimonials from "@/components/corporate/CorporateTestimonials";
import CorporateInquiryForm from "@/components/corporate/CorporateInquiryForm";

export default function EventsWeddingsPage() {
    return (
        <main className="min-h-screen bg-white">
            <EventsHero />

            <EventsFeatures />

            <FleetShowcase />

            <Testimonials />

            <CorporateInquiryForm />
        </main>
    );
}
