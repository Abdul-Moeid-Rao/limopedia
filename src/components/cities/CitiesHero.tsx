"use client";
import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import BaseHero from "@/components/BaseHero";

export default function CitiesHero() {
    const { t } = useLanguage();

    const bookingForm = (
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl max-w-5xl">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="relative col-span-1 lg:col-span-1">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                    <input 
                        type="text" 
                        placeholder={t("citiesPickup")} 
                        data-i18n-placeholder="citiesPickup" 
                        className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" 
                    />
                </div>
                <div className="relative col-span-1 lg:col-span-1">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
                    <input 
                        type="text" 
                        placeholder={t("citiesDropoff")} 
                        data-i18n-placeholder="citiesDropoff" 
                        className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" 
                    />
                </div>
                <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                    <input 
                        type="text" 
                        placeholder={t("citiesDate")} 
                        data-i18n-placeholder="citiesDate" 
                        onFocus={(e) => (e.target.type = "date")} 
                        className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" 
                    />
                </div>
                <div className="relative">
                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                    <input 
                        type="text" 
                        placeholder={t("citiesTime")} 
                        data-i18n-placeholder="citiesTime" 
                        onFocus={(e) => (e.target.type = "time")} 
                        className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all text-sm font-medium" 
                    />
                </div>
                <Link href="/book" className="col-span-1">
                    <button 
                        type="button" 
                        className="btn-gold w-full h-14 flex items-center justify-center gap-2 group" 
                        data-i18n="citiesCheckRates"
                    >
                        {t("citiesCheckRates")}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </form>
        </div>
    );

    return (
        <BaseHero
            title="citiesHeroTitle"
            description="citiesDesc"
            backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
            showBreadcrumbs={true}
            breadcrumbs={[
                { label: "navHome", href: "/" },
                { label: "citiesHeroTitle" }
            ]}
            showButtons={false}
            customContent={bookingForm}
            overlayOpacity={0.6}
        />
    );
}
