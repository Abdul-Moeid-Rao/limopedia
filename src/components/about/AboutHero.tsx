"use client";

import React from 'react';
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-navy pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden text-left">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                    alt="Limopedia Team Meeting"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
                    <Link href="/" className="hover:text-gold transition-colors" data-i18n="navHome">{t("navHome") || "Home"}</Link>
                    <ChevronRight size={12} className="opacity-50" />
                    <span className="text-gold" data-i18n="navAbout">{t("navAbout")}</span>
                </nav>

                <div className="max-w-4xl mx-auto">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-i18n="aboutHeroSubtitle">
                        {t("aboutHeroSubtitle")}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        <span data-i18n="aboutHeroTitleLine1">{t("aboutHeroTitleLine1")}</span> <br />
                        <span className="text-gold italic" data-i18n="aboutHeroTitleLine2">{t("aboutHeroTitleLine2")}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-0 leading-relaxed font-medium max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000" data-i18n="aboutHeroDesc">
                        {t("aboutHeroDesc")}
                    </p>
                </div>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold" />
        </section>
    );
}
