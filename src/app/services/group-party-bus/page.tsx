import React from 'react';
import GroupHero from "@/components/group/GroupHero";
import GroupFeatures from "@/components/group/GroupFeatures";
import GroupFleet from "@/components/group/GroupFleet";
import BookingWidget from "@/components/BookingWidget";
import CorporateInquiryForm from "@/components/corporate/CorporateInquiryForm";

export default function GroupPartyBusPage() {
    return (
        <main className="min-h-screen bg-white">
            <GroupHero />

            <div className="bg-navy border-b border-navy-light pt-12 pb-24 relative z-10">
                <BookingWidget />
            </div>

            <GroupFeatures />

            <GroupFleet />

            <CorporateInquiryForm />
        </main>
    );
}
