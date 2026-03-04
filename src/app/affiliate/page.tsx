import React from 'react';
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import AffiliateHowItWorks from "@/components/affiliate/AffiliateHowItWorks";
import AffiliateBenefits from "@/components/affiliate/AffiliateBenefits";
import RateTable from "@/components/affiliate/RateTable";
import WhoCanApply from "@/components/affiliate/WhoCanApply";
import AffiliateForm from "@/components/affiliate/AffiliateForm";

export default function AffiliatePage() {
    return (
        <main className="min-h-screen bg-white">
            <AffiliateHero />

            <AffiliateHowItWorks />

            <AffiliateBenefits />

            <RateTable />

            <WhoCanApply />

            <AffiliateForm />

        </main>
    );
}
