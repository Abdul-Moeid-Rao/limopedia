"use client";
import React from 'react';
import { Users, Wine, Route, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function EventsFeatures() {
    const { t } = useLanguage();
    const features = [
        { icon: <Users size={32} />, titleKey: "eventsFeat1Title", descKey: "eventsFeat1Desc" },
        { icon: <Clock size={32} />, titleKey: "eventsFeat2Title", descKey: "eventsFeat2Desc" },
        { icon: <Wine size={32} />, titleKey: "eventsFeat3Title", descKey: "eventsFeat3Desc" },
        { icon: <Route size={32} />, titleKey: "eventsFeat4Title", descKey: "eventsFeat4Desc" },
        { icon: <ShieldCheck size={32} />, titleKey: "eventsFeat5Title", descKey: "eventsFeat5Desc" },
        { icon: <Sparkles size={32} />, titleKey: "eventsFeat6Title", descKey: "eventsFeat6Desc" },
    ];
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-i18n="eventsFeatTitle">{t("eventsFeatTitle")}</h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium" data-i18n="eventsFeatDesc">{t("eventsFeatDesc")}</p>
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
