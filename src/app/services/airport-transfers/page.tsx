import React from 'react';
import AirportHero from "@/components/airport/AirportHero";
import AirportFeatures from "@/components/airport/AirportFeatures";
import BookingWidget from "@/components/BookingWidget";
import AirportCoverage from "@/components/airport/AirportCoverage";
import Testimonials from "@/components/corporate/CorporateTestimonials";

export default function AirportTransfersPage() {
    return (
        <main className="min-h-screen bg-white">
            <AirportHero />

            <div className="bg-navy border-b border-navy-light pt-12 pb-24">
                <BookingWidget />
            </div>

            <AirportFeatures />

            <AirportCoverage />

            <Testimonials />
        </main>
    );
}
