"use client";
import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function AffiliateHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-navy pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden text-left">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="Partnership"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
                    <Link href="/" className="hover:text-gold transition-colors" data-i18n="navHome">{t("navHome") || "Home"}</Link>
                    <ChevronRight size={12} className="opacity-50" />
                    <span className="text-gold" data-i18n="navAffiliate">{t("navAffiliate")}</span>
                </nav>

                <div className="max-w-4xl">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-i18n="affiliateHeroSubtitle">
                        {t("affiliateHeroSubtitle")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        <span data-i18n="affiliateHeroTitleLine1">{t("affiliateHeroTitleLine1")}</span> <br />
                        <span className="text-gold italic" data-i18n="affiliateHeroTitleLine2">{t("affiliateHeroTitleLine2")}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000" data-i18n="affiliateHeroDesc">
                        {t("affiliateHeroDesc")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <button
                            onClick={() => document.getElementById('affiliate-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-gold px-10 h-16 text-sm flex items-center justify-center gap-3 w-full sm:w-auto"
                            data-i18n="affiliateApplyBtn"
                        >
                            {t("affiliateApplyBtn")}
                            <ArrowRight size={18} />
                        </button>
                        <button className="px-10 h-16 text-sm font-bold text-white bg-transparent border-2 border-white/20 hover:border-gold transition-all rounded-full flex items-center justify-center gap-3 w-full sm:w-auto" data-i18n="affiliateRateSheetBtn">
                            {t("affiliateRateSheetBtn")}
                        </button>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap items-center gap-y-6 gap-x-10 pt-12 border-t border-white/10">
                        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 size={16} className="text-gold" /> <span data-i18n="affiliateTrustApproval">{t("affiliateTrustApproval")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 size={16} className="text-gold" /> <span data-i18n="affiliateTrustPayouts">{t("affiliateTrustPayouts")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 size={16} className="text-gold" /> <span data-i18n="affiliateTrustManager">{t("affiliateTrustManager")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <CheckCircle2 size={16} className="text-gold" /> <span data-i18n="affiliateTrustDashboard">{t("affiliateTrustDashboard")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
