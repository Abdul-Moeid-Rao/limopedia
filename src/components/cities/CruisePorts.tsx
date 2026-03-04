"use client";
import React from 'react';
import { Ship, ArrowRight, Anchor, Timer } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function CruisePorts() {
    const { t } = useLanguage();

    const ports = [
        { nameKey: "citiesPortMiami", descKey: "citiesPortMiamiDesc" },
        { nameKey: "citiesPortEver", descKey: "citiesPortEverDesc" },
        { nameKey: "citiesPortCan", descKey: "citiesPortCanDesc" },
        { nameKey: "citiesPortTampa", descKey: "citiesPortTampaDesc" }
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6" data-i18n="citiesCruiseTitle">{t("citiesCruiseTitle")}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium" data-i18n="citiesCruiseDesc">{t("citiesCruiseDesc")}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {ports.map((port) => (
                        <div key={port.nameKey} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                                <Ship size={32} />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-white mb-2" data-i18n={port.nameKey}>{t(port.nameKey)}</h3>
                            <p className="text-gray-400 text-sm mb-8 font-medium" data-i18n={port.descKey}>{t(port.descKey)}</p>
                            <Link href="/book" className="flex items-center justify-between text-gold font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-all">
                                <span data-i18n="citiesCruiseBook">{t("citiesCruiseBook")}</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-6 max-w-xl">
                        <div className="flex items-center gap-4">
                            <Timer className="text-gold" size={24} />
                            <p className="text-white font-bold" data-i18n="citiesCruiseTimed">{t("citiesCruiseTimed")}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Anchor className="text-gold" size={24} />
                            <p className="text-white font-bold" data-i18n="citiesCruiseLuggage">{t("citiesCruiseLuggage")}</p>
                        </div>
                    </div>
                    <Link href="/book">
                        <button className="btn-gold px-12 h-16 text-lg flex items-center justify-center gap-3 w-full lg:w-auto shadow-2xl shadow-gold/20" data-i18n="citiesCruiseBtn">
                            {t("citiesCruiseBtn")}
                            <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
