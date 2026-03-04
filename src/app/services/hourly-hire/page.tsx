import React from 'react';
import HourlyHero from "@/components/hourly/HourlyHero";
import HourlyFeatures from "@/components/hourly/HourlyFeatures";
import HourlyUseCases from "@/components/hourly/HourlyUseCases";
import BookingWidget from "@/components/BookingWidget";
import Testimonials from "@/components/corporate/CorporateTestimonials";

export default function HourlyHirePage() {
    return (
        <main className="min-h-screen bg-white">
            <HourlyHero />

            <div className="bg-navy border-b border-navy-light pt-12 pb-24 relative z-10">
                <BookingWidget />
            </div>

            <HourlyFeatures />

            <HourlyUseCases />

            <Testimonials />
        </main>
    );
}
