"use client";
import React from 'react';
import { Bus, Plane, Hotel, CalendarDays, Briefcase, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function WhoCanApply() {
    const { t } = useLanguage();

    const audiences = [
        {
            titleKey: "audiencesTransTitle",
            descKey: "audiencesTransDesc",
            icon: <Bus size={32} />
        },
        {
            titleKey: "audiencesTravelTitle",
            descKey: "audiencesTravelDesc",
            icon: <Plane size={32} />
        },
        {
            titleKey: "audiencesHotelTitle",
            descKey: "audiencesHotelDesc",
            icon: <Hotel size={32} />
        },
        {
            titleKey: "audiencesEventsTitle",
            descKey: "audiencesEventsDesc",
            icon: <CalendarDays size={32} />
        },
        {
            titleKey: "audiencesCorpTitle",
            descKey: "audiencesCorpDesc",
            icon: <Briefcase size={32} />
        },
        {
            titleKey: "audiencesIntlTitle",
            descKey: "audiencesIntlDesc",
            icon: <Globe size={32} />
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50 text-left">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="whoCanApplyTitle">
                        {t("whoCanApplyTitle")}
                    </h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {audiences.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm border border-navy/5 flex items-start gap-6 group hover:shadow-2xl transition-all duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/50 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2 font-playfair" data-i18n={item.titleKey}>
                                    {t(item.titleKey)}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium" data-i18n={item.descKey}>
                                    {t(item.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
