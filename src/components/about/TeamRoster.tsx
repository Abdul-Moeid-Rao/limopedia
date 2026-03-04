"use client";
import React from 'react';
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function TeamRoster() {
    const { t } = useLanguage();

    const team = [
        {
            name: "Arthur Limon",
            titleKey: "teamFounderTitle",
            bioKey: "teamFounderBio",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
        },
        {
            name: "Elena Rodriguez",
            titleKey: "teamCOOTitle",
            bioKey: "teamCOOBio",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
        },
        {
            name: "Marcus Chen",
            titleKey: "teamFleetTitle",
            bioKey: "teamFleetBio",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden text-left">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block" data-i18n="teamLeadership">
                        {t("teamLeadership")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="teamTitle">
                        {t("teamTitle")}
                    </h2>
                    <p className="text-gray-500 font-medium" data-i18n="teamSubtitle">
                        {t("teamSubtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {team.map((member, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gold transition-colors duration-500 shadow-xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h4 className="text-2xl font-bold text-navy mb-2">{member.name}</h4>
                            <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4" data-i18n={member.titleKey}>
                                {t(member.titleKey)}
                            </p>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mx-auto mb-6" data-i18n={member.bioKey}>
                                {t(member.bioKey)}
                            </p>
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-navy hover:bg-gold hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
