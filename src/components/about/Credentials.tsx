"use client";
import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Credentials() {
    const { t } = useLanguage();

    const credentials = [
        {
            titleKey: "credBBBTitle",
            descKey: "credBBBDesc",
            icon: <Award className="text-gold" size={32} />
        },
        {
            titleKey: "credLiveryTitle",
            descKey: "credLiveryDesc",
            icon: <FileCheck className="text-gold" size={32} />
        },
        {
            titleKey: "credInsuredTitle",
            descKey: "credInsuredDesc",
            icon: <ShieldCheck className="text-gold" size={32} />
        },
        {
            titleKey: "credAirportTitle",
            descKey: "credAirportDesc",
            icon: <CheckCircle2 className="text-gold" size={32} />
        }
    ];

    return (
        <section className="py-24 bg-gray-100/50 text-left">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-i18n="credTitle">
                        {t("credTitle")}
                    </h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {credentials.map((cred, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[30px] shadow-sm border border-navy/5 flex flex-col items-center text-center group hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                {cred.icon}
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2" data-i18n={cred.titleKey}>{t(cred.titleKey)}</h4>
                            <p className="text-gray-400 text-xs font-medium leading-relaxed" data-i18n={cred.descKey}>
                                {t(cred.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
