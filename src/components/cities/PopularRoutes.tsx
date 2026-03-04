"use client";
import React from 'react';
import { popularRoutes } from "@/data/cities";
import { ArrowRight, Clock, Navigation } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function PopularRoutes() {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-playfair font-bold text-navy mb-4" data-i18n="citiesRouteTitle">{t("citiesRouteTitle")}</h2>
                    <p className="text-gray-500 font-medium" data-i18n="citiesRouteDesc">{t("citiesRouteDesc")}</p>
                </div>
                <div className="bg-white rounded-[40px] shadow-2xl shadow-navy/5 border border-navy/5 overflow-hidden">
                    <div className="hidden md:grid grid-cols-4 bg-gray-50 px-10 py-5 border-b border-navy/5">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest" data-i18n="citiesRouteColRoute">{t("citiesRouteColRoute")}</span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-12" data-i18n="citiesRouteColTime">{t("citiesRouteColTime")}</span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest" data-i18n="citiesRouteColPrice">{t("citiesRouteColPrice")}</span>
                        <span className="text-right text-[10px] font-black text-gray-400 uppercase tracking-widest" data-i18n="citiesRouteColBook">{t("citiesRouteColBook")}</span>
                    </div>
                    <div className="divide-y divide-navy/5">
                        {popularRoutes.map((route, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 items-center px-6 md:px-10 py-6 hover:bg-secondary/20 transition-colors group">
                                <div className="flex items-center gap-4 mb-4 md:mb-0">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                                        <Navigation size={18} className="text-navy group-hover:text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-navy">{route.from}</span>
                                            <ArrowRight size={14} className="text-gold" />
                                            <span className="font-bold text-navy">{route.to}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 md:ml-12 mb-4 md:mb-0">
                                    <Clock size={16} className="text-gold" />
                                    <span className="text-sm font-medium">{route.time}</span>
                                </div>
                                <div className="mb-4 md:mb-0">
                                    <span className="text-2xl font-bold text-navy tracking-tighter">${route.price}</span>
                                </div>
                                <div className="text-right">
                                    <Link href="/book">
                                        <button className="btn-gold px-8 py-3 text-sm group-hover:shadow-lg transition-all" data-i18n="citiesBookNow">{t("citiesBookNow")}</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-center mt-12 text-sm text-gray-400 font-medium" data-i18n="citiesRouteNote">{t("citiesRouteNote")}</p>
            </div>
        </section>
    );
}
