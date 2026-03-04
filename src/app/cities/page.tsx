import React from 'react';
import CitiesHero from "@/components/cities/CitiesHero";
import FeaturedCities from "@/components/cities/FeaturedCities";
import SecondaryCities from "@/components/cities/SecondaryCities";
import PopularRoutes from "@/components/cities/PopularRoutes";
import CruisePorts from "@/components/cities/CruisePorts";
import BookingWidget from "@/components/BookingWidget";

export default function CitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <CitiesHero />

            <FeaturedCities />

            <SecondaryCities />

            <PopularRoutes />

            <CruisePorts />

            {/* Bottom Booking CTA */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">Ready to Book Your Ride?</h2>
                        <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
                    </div>

                    <div className="bg-white rounded-[40px] shadow-2xl shadow-navy/5 border border-navy/5 p-4 md:p-8 lg:p-12 relative animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <BookingWidget />
                    </div>
                </div>
            </section>

        </main>
    );
}
