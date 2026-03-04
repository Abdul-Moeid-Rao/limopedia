import React from 'react';
import SecurityHero from "@/components/security/SecurityHero";
import CoverageGrid from "@/components/security/CoverageGrid";
import SecurityChecklist from "@/components/security/SecurityChecklist";
import ProcurementSection from "@/components/security/ProcurementSection";

export default function CyberInsurancePage() {
    return (
        <main className="min-h-screen bg-white">
            <SecurityHero />

            <CoverageGrid />

            <SecurityChecklist />

            <ProcurementSection />

        </main>
    );
}
