"use client";
import React from 'react';
import { MapPin, Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function CitiesHero() {
    const { t } = useLanguage();
    return (
        <section className="bg-navy pt-20 pb-20 md:pt-28 md:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-fixed mix-blend-overlay" />
            <div className="container mx-auto px-4 relative z-10">
                <nav className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    <Link href="/" className="hover:text-gold transition-colors" data-i18n="navHome">{t("navHome")}</Link>
                    <ChevronRight size={12} className="opacity-50" />
                    <span className="text-gold" data-i18n="citiesHeroTitle">{t("citiesHeroTitle")}</span>
                </nav>
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight" data-i18n="citiesHeroTitle">
                        {t("citiesHeroTitle")}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium" data-i18n="citiesHeroDesc">
                        {t("citiesHeroDesc")}
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl max-w-5xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                            <div className="relative col-span-1 lg:col-span-1">
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                                <input type="text" placeholder={t("citiesPickup")} data-i18n-placeholder="citiesPickup" className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" />
                            </div>
                            <div className="relative col-span-1 lg:col-span-1">
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
                                <input type="text" placeholder={t("citiesDropoff")} data-i18n-placeholder="citiesDropoff" className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" />
                            </div>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                                <input type="text" placeholder={t("citiesDate")} data-i18n-placeholder="citiesDate" onFocus={(e) => (e.target.type = "date")} className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" />
                            </div>
                            <div className="relative">
                                <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                                <input type="text" placeholder={t("citiesTime")} data-i18n-placeholder="citiesTime" onFocus={(e) => (e.target.type = "time")} className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" />
                            </div>
                            <Link href="/book" className="col-span-1">
                                <button type="button" className="btn-gold w-full h-14 flex items-center justify-center gap-2 group" data-i18n="citiesCheckRates">
                                    {t("citiesCheckRates")}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
