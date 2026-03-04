"use client";
import React from 'react';
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AffiliateHowItWorks() {
    const { t } = useLanguage();

    const steps = [
        {
            titleKey: "stepApplyTitle",
            descKey: "stepApplyDesc",
            icon: "📋"
        },
        {
            titleKey: "stepSendTitle",
            descKey: "stepSendDesc",
            icon: "🚗"
        },
        {
            titleKey: "stepPaidTitle",
            descKey: "stepPaidDesc",
            icon: "💰"
        }
    ];

    return (
        <section className="py-24 bg-white text-left">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-20 animate-in fade-in duration-1000" data-i18n="howItWorksTitle">
                    {t("howItWorksTitle")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Arrows (Desktop) */}
                    <div className="hidden md:block absolute top-[20%] left-1/3 -translate-x-1/2 w-40 pointer-events-none opacity-20">
                        <div className="h-0.5 w-full bg-gold relative">
                            <ArrowRight className="absolute right-0 -top-2 text-gold" size={20} />
                        </div>
                    </div>
                    <div className="hidden md:block absolute top-[20%] left-2/3 -translate-x-1/2 w-40 pointer-events-none opacity-20">
                        <div className="h-0.5 w-full bg-gold relative">
                            <ArrowRight className="absolute right-0 -top-2 text-gold" size={20} />
                        </div>
                    </div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group text-center px-6">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-8 border border-gray-100 group-hover:bg-gold transition-colors duration-500">
                                <span className="text-4xl group-hover:scale-125 transition-transform duration-500 grayscale group-hover:grayscale-0">
                                    {step.icon}
                                </span>
                                {/* Step number badge */}
                                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 font-playfair" data-i18n={step.titleKey}>{t(step.titleKey)}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium text-sm" data-i18n={step.descKey}>
                                {t(step.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
