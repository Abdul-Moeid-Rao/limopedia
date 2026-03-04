"use client";
import React from 'react';
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function FleetHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-navy pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden text-left">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5962?auto=format&fit=crop&q=80"
                    alt="Limopedia Fleet"
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
                    <span className="text-gold" data-i18n="fleetHeroSubtitle">{t("fleetHeroSubtitle")}</span>
                </nav>

                <div className="max-w-4xl">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-i18n="fleetHeroSubtitle">
                        {t("fleetHeroSubtitle")}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000" data-i18n="fleetHeroTitle">
                        {t("fleetHeroTitle")}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-0 leading-relaxed font-medium max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000" data-i18n="fleetHeroDesc">
                        {t("fleetHeroDesc")}
                    </p>
                </div>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-4 w-[2px] h-24 bg-gradient-to-b from-transparent to-gold" />
        </section>
    );
}
