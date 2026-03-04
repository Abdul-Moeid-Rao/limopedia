"use client";
import React from 'react';
import { DollarSign, BarChart3, UserCheck, PhoneCall, Link2, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AffiliateBenefits() {
    const { t } = useLanguage();

    const benefits = [
        {
            titleKey: "benefitCommTitle",
            descKey: "benefitCommDesc",
            icon: <DollarSign className="text-gold" size={28} />
        },
        {
            titleKey: "benefitDashTitle",
            descKey: "benefitDashDesc",
            icon: <BarChart3 className="text-gold" size={28} />
        },
        {
            titleKey: "benefitManagerTitle",
            descKey: "benefitManagerDesc",
            icon: <UserCheck className="text-gold" size={28} />
        },
        {
            titleKey: "benefitDispatchTitle",
            descKey: "benefitDispatchDesc",
            icon: <PhoneCall className="text-gold" size={28} />
        },
        {
            titleKey: "benefitWhiteLabelTitle",
            descKey: "benefitWhiteLabelDesc",
            icon: <Link2 className="text-gold" size={28} />
        },
        {
            titleKey: "benefitZapTitle",
            descKey: "benefitZapDesc",
            icon: <Zap className="text-gold" size={28} />
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 text-navy">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-i18n="benefitsTitle">
                        {t("benefitsTitle")}
                    </h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[30px] shadow-sm border border-navy/5 hover:shadow-xl transition-all duration-500 group flex flex-col items-center sm:items-start text-center sm:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                                <div className="group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 font-playfair" data-i18n={benefit.titleKey}>
                                {t(benefit.titleKey)}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium" data-i18n={benefit.descKey}>
                                {t(benefit.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
