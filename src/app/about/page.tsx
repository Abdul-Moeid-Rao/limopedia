"use client";

import React from 'react';
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import AboutStats from "@/components/about/AboutStats";
import MissionValues from "@/components/about/MissionValues";
import TeamRoster from "@/components/about/TeamRoster";
import Credentials from "@/components/about/Credentials";
import WhyStayWithUs from "@/components/about/WhyStayWithUs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white">
            <AboutHero />

            <OurStory />

            <AboutStats />

            <MissionValues />

            <TeamRoster />

            <Credentials />

            <WhyStayWithUs />

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-8 leading-tight">
                        <span data-i18n="aboutCTATitleLine1">{t("aboutCTATitleLine1")}</span> <br />
                        <span className="text-gold" data-i18n="aboutCTATitleLine2">{t("aboutCTATitleLine2")}</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/book" className="btn-gold px-10 h-16 text-sm flex items-center justify-center gap-4 w-full sm:w-auto">
                            <span data-i18n="aboutCTABookBtn">{t("aboutCTABookBtn")}</span>
                            <ArrowRight size={18} />
                        </Link>
                        <button className="px-10 h-16 text-sm font-bold text-navy bg-transparent border-2 border-navy/10 hover:border-gold transition-all rounded-full flex items-center justify-center gap-4 w-full sm:w-auto" data-i18n="aboutCTAContactBtn">
                            {t("aboutCTAContactBtn")}
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
