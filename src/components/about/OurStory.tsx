"use client";
import React from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function OurStory() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white overflow-hidden text-left">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1 animate-in slide-in-from-left-20 duration-1000">
                        <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block" data-i18n="storyHeritage">
                            {t("storyHeritage")}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-8 leading-tight" data-i18n="storyTitle">
                            {t("storyTitle")}
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                            <p data-i18n="storyPara1">
                                {t("storyPara1")}
                            </p>
                            <p data-i18n="storyPara2">
                                {t("storyPara2")}
                            </p>
                            <p data-i18n="storyPara3">
                                {t("storyPara3")}
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 relative lg:h-[700px] h-96 animate-in slide-in-from-right-20 duration-1000">
                        <div className="absolute inset-0 bg-secondary rounded-[60px] translate-x-6 translate-y-6 -z-10" />
                        <div className="absolute inset-0 overflow-hidden rounded-[60px] shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5962?auto=format&fit=crop&q=80"
                                alt="Professional Chauffeur service"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        {/* Gold Badge Overlay */}
                        <div className="absolute -bottom-10 -left-10 bg-gold p-10 rounded-[40px] shadow-2xl hidden md:block">
                            <p className="text-navy font-playfair font-bold text-4xl leading-none" data-i18n="storyBadgeValue">{t("storyBadgeValue")}</p>
                            <p className="text-navy font-bold text-[10px] uppercase tracking-widest mt-2" data-i18n="storyBadgeText">{t("storyBadgeText")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
