import React from 'react';
import PricingHero from "@/components/pricing/PricingHero";
import BaseRateTable from "@/components/pricing/BaseRateTable";
import WhatsIncluded from "@/components/pricing/WhatsIncluded";
import OptionalAddOns from "@/components/pricing/OptionalAddOns";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import BookingEmbed from "@/components/pricing/BookingEmbed";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <PricingHero />

            <BaseRateTable />

            <WhatsIncluded />

            <OptionalAddOns />

            <PricingFAQ />

            <BookingEmbed />

        </main>
    );
}
