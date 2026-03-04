import React from 'react';
import TourHero from "@/components/tours/TourHero";
import TourFeatures from "@/components/tours/TourFeatures";
import TourPackages from "@/components/tours/TourPackages";
import BookingWidget from "@/components/BookingWidget";
import CorporateInquiryForm from "@/components/corporate/CorporateInquiryForm";

export default function CityToursPage() {
    return (
        <main className="min-h-screen bg-white">
            <TourHero />

            <div className="bg-navy border-b border-navy-light pt-12 pb-24 relative z-10">
                <BookingWidget />
            </div>

            <TourFeatures />

            <TourPackages />

            <CorporateInquiryForm />
        </main>
    );
}
