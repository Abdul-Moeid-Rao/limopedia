"use client";
import React from 'react';
import Image from "next/image";
import { Users, Music, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function GroupHero() {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-[85vh] flex items-center pt-20">
            <div className="absolute inset-0 z-0">
                <Image src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80" alt="Luxury Sprinter interior" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl mt-12">
                <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                    <Users size={16} className="text-gold" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white" data-i18n="groupTag">{t("groupTag")}</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-8 leading-[1.1] tracking-tight">
                    <span data-i18n="groupHeroTitle1">{t("groupHeroTitle1")}</span><br />
                    <span className="text-gold italic" data-i18n="groupHeroTitle2">{t("groupHeroTitle2")}</span>{" "}
                    <span data-i18n="groupHeroTitle3">{t("groupHeroTitle3")}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed" data-i18n="groupHeroDesc">{t("groupHeroDesc")}</p>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm md:text-base text-gray-300 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2"><Music size={20} className="text-gold" /><span data-i18n="groupTrust1">{t("groupTrust1")}</span></div>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="flex items-center gap-2"><Star size={20} className="text-gold" /><span data-i18n="groupTrust2">{t("groupTrust2")}</span></div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy to-transparent" />
        </section>
    );
}
