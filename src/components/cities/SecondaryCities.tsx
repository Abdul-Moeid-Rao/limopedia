"use client";
import React from 'react';
import { secondaryCities } from "@/data/cities";
import { MapPin, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function SecondaryCities() {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-gray-50 border-t border-navy/5">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4" data-i18n="citiesExtTitle">{t("citiesExtTitle")}</h2>
                    <p className="text-gray-500 font-medium" data-i18n="citiesExtDesc">{t("citiesExtDesc")}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {secondaryCities.map((city) => (
                        <div key={city.id} className="bg-white p-6 rounded-3xl border border-navy/5 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 group text-left">
                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MapPin size={18} className="text-navy" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-1">{city.name}</h4>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{city.state}</span>
                            <Link href="/book" className="mt-6 flex items-center justify-between text-gold font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-all">
                                <span data-i18n="citiesBookNow">{t("citiesBookNow")}</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                    <div className="bg-navy p-6 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-center items-center text-center cursor-pointer group hover:bg-gold transition-colors duration-500">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                            <Plus size={24} />
                        </div>
                        <h4 className="text-white font-bold mb-1" data-i18n="citiesRequestCity">{t("citiesRequestCity")}</h4>
                        <p className="text-white/50 text-[10px] uppercase font-black tracking-widest leading-tight" data-i18n="citiesRequestDesc">{t("citiesRequestDesc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
