"use client";
import React from 'react';
import { useLanguage } from "@/components/LanguageContext";
import BaseHero from "@/components/BaseHero";

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <BaseHero
            title="aboutHeroTitleLine1<br><span class='text-gold italic'>aboutHeroTitleLine2</span>"
            subtitle="aboutHeroSubtitle"
            description="aboutHeroDesc"
            backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
            showBreadcrumbs={true}
            breadcrumbs={[
                { label: "navHome", href: "/" },
                { label: "navAbout" }
            ]}
            showButtons={false}
            overlayOpacity={0.7}
        />
    );
}
