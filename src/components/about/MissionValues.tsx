"use client";
import React from 'react';
import { Shield, Gem, Handshake, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function MissionValues() {
    const { t } = useLanguage();

    const values = [
        {
            titleKey: "valueSafetyTitle",
            descKey: "valueSafetyDesc",
            icon: <Shield size={32} className="text-gold" />
        },
        {
            titleKey: "valueLuxuryTitle",
            descKey: "valueLuxuryDesc",
            icon: <Gem size={32} className="text-gold" />
        },
        {
            titleKey: "valueReliabilityTitle",
            descKey: "valueReliabilityDesc",
            icon: <Handshake size={32} className="text-gold" />
        },
        {
            titleKey: "valueCommunityTitle",
            descKey: "valueCommunityDesc",
            icon: <Globe size={32} className="text-gold" />
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block" data-i18n="valuesPrinciples">
                        {t("valuesPrinciples")}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-6" data-i18n="valuesTitle">
                        {t("valuesTitle")}
                    </h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm border-t-4 border-t-gold hover:shadow-2xl transition-all duration-500 group text-left">
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 font-playfair" data-i18n={value.titleKey}>
                                {t(value.titleKey)}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-medium text-sm" data-i18n={value.descKey}>
                                {t(value.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
