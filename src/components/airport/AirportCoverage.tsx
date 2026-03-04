"use client";
import React from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function AirportCoverage() {
    const { t } = useLanguage();
    const airports = [
        { code: "MIA", name: "Miami International", descKey: "airportMIADesc" },
        { code: "FLL", name: "Fort Lauderdale-Hollywood", descKey: "airportFLLDesc" },
        { code: "PBI", name: "Palm Beach International", descKey: "airportPBIDesc" },
        { code: "MCO", name: "Orlando International", descKey: "airportMCODesc" },
    ];
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Texture" fill className="object-cover grayscale" />
            </div>
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-i18n="airportCoverTitle">{t("airportCoverTitle")}</h2>
                        <div className="h-1 w-20 bg-gold rounded-full mb-8" />
                        <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium" data-i18n="airportCoverDesc">{t("airportCoverDesc")}</p>
                        <ul className="space-y-6">
                            {airports.map((airport, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors cursor-default">
                                    <div className="w-16 h-16 rounded-xl bg-navy text-gold font-bold flex items-center justify-center text-xl shrink-0 shadow-lg">{airport.code}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy mb-1">{airport.name}</h4>
                                        <p className="text-gray-500 text-sm font-medium" data-i18n={airport.descKey}>{t(airport.descKey)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 w-full lg:h-[700px] h-[400px] relative rounded-[40px] overflow-hidden shadow-2xl group">
                        <Image src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80" alt="Chauffeur waiting at airport terminal" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                                <p className="font-playfair font-bold text-xl italic mb-2" data-i18n="airportFBOQuote">{t("airportFBOQuote")}</p>
                                <p className="text-sm text-gray-300 font-bold uppercase tracking-widest" data-i18n="airportFBOAuthor">{t("airportFBOAuthor")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
