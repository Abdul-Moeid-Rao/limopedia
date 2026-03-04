"use client";
import React from 'react';
import { Clock, ShieldCheck, MapPin, Briefcase, PlaneTakeoff, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AirportFeatures() {
    const { t } = useLanguage();
    const features = [
        { icon: <PlaneTakeoff size={32} />, titleKey: "airportFeat1Title", descKey: "airportFeat1Desc" },
        { icon: <Clock size={32} />, titleKey: "airportFeat2Title", descKey: "airportFeat2Desc" },
        { icon: <HeartHandshake size={32} />, titleKey: "airportFeat3Title", descKey: "airportFeat3Desc" },
        { icon: <Briefcase size={32} />, titleKey: "airportFeat4Title", descKey: "airportFeat4Desc" },
        { icon: <MapPin size={32} />, titleKey: "airportFeat5Title", descKey: "airportFeat5Desc" },
        { icon: <ShieldCheck size={32} />, titleKey: "airportFeat6Title", descKey: "airportFeat6Desc" },
    ];
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-i18n="airportFeatTitle">{t("airportFeatTitle")}</h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium" data-i18n="airportFeatDesc">{t("airportFeatDesc")}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">{feature.icon}</div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4" data-i18n={feature.titleKey}>{t(feature.titleKey)}</h3>
                            <p className="text-gray-500 leading-relaxed" data-i18n={feature.descKey}>{t(feature.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
