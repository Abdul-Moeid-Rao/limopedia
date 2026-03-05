"use client";
import React from 'react';
import { useLanguage } from "@/components/LanguageContext";
import BaseHero from "@/components/BaseHero";

export default function FleetHero() {
    const { t } = useLanguage();

    return (
        <BaseHero
            title="fleetHeroTitle"
            subtitle="fleetHeroSubtitle"
            description="fleetHeroDesc"
            backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5962?auto=format&fit=crop&q=80"
            showBreadcrumbs={true}
            breadcrumbs={[
                { label: "navHome", href: "/" },
                { label: "fleetHeroSubtitle" }
            ]}
            showButtons={false}
            overlayOpacity={0.9}
        />
    );
}
