"use client";
import React from 'react';
import { UserCheck, FileText, Rocket, CalendarCheck, Shield, MonitorSmartphone } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function CorporateFeatures() {
    const { t } = useLanguage();
    const features = [
        { icon: <UserCheck size={32} />, titleKey: "corpFeat1Title", descKey: "corpFeat1Desc" },
        { icon: <FileText size={32} />, titleKey: "corpFeat2Title", descKey: "corpFeat2Desc" },
        { icon: <Rocket size={32} />, titleKey: "corpFeat3Title", descKey: "corpFeat3Desc" },
        { icon: <CalendarCheck size={32} />, titleKey: "corpFeat4Title", descKey: "corpFeat4Desc" },
        { icon: <Shield size={32} />, titleKey: "corpFeat5Title", descKey: "corpFeat5Desc" },
        { icon: <MonitorSmartphone size={32} />, titleKey: "corpFeat6Title", descKey: "corpFeat6Desc" },
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="corpFeatTitle">{t("corpFeatTitle")}</h2>
                    <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-10 rounded-[40px] border border-navy/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 group bg-white">
                            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-navy mb-8 group-hover:bg-gold group-hover:text-white transition-all duration-500">{feature.icon}</div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4 group-hover:text-gold transition-colors" data-i18n={feature.titleKey}>{t(feature.titleKey)}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium" data-i18n={feature.descKey}>{t(feature.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
