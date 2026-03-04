"use client";
import React from 'react';
import { ShieldCheck, ClipboardCheck, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function CorporateHero() {
    const { t } = useLanguage();
    return (
        <section className="bg-navy pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Corporate Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/90" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <nav className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-12">
                    <Link href="/" className="hover:text-gold transition-colors" data-i18n="navHome">{t("navHome")}</Link>
                    <ChevronRight size={12} className="opacity-50" />
                    <span className="text-gray-500" data-i18n="navServices">{t("navServices")}</span>
                    <ChevronRight size={12} className="opacity-50" />
                    <span className="text-gold" data-i18n="serviceCorporate">{t("serviceCorporate")}</span>
                </nav>
                <div className="max-w-4xl">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6" data-i18n="corpTag">{t("corpTag")}</span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-[1.1]">
                        <span data-i18n="corpHeroTitle1">{t("corpHeroTitle1")}</span><br />
                        <span className="text-gold italic" data-i18n="corpHeroTitle2">{t("corpHeroTitle2")}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-3xl" data-i18n="corpHeroDesc">{t("corpHeroDesc")}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                        <button onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold px-10 h-16 text-sm flex items-center justify-center gap-3 w-full sm:w-auto" data-i18n="corpSetupBtn">
                            {t("corpSetupBtn")}<ArrowRight size={18} />
                        </button>
                        <button className="px-10 h-16 text-sm font-bold text-white bg-transparent border-2 border-white/20 hover:border-gold transition-all rounded-full flex items-center justify-center gap-3 w-full sm:w-auto" data-i18n="corpQuoteBtn">
                            {t("corpQuoteBtn")}
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-6 gap-x-12 pt-12 border-t border-white/10">
                        <div className="flex items-center gap-3 text-white/70 text-sm font-bold"><span className="text-xl">🏢</span><span data-i18n="corpTrust1">{t("corpTrust1")}</span></div>
                        <div className="flex items-center gap-3 text-white/70 text-sm font-bold"><ClipboardCheck size={20} className="text-gold" /><span data-i18n="corpTrust2">{t("corpTrust2")}</span></div>
                        <div className="flex items-center gap-3 text-white/70 text-sm font-bold"><ShieldCheck size={20} className="text-gold" /><span data-i18n="corpTrust3">{t("corpTrust3")}</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
