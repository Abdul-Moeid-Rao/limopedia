"use client";
import React from 'react';
import Image from "next/image";
import { ArrowRight, Plane } from "lucide-react";
import { featuredCities } from "@/data/cities";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function FeaturedCities() {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="citiesPrimaryTitle">{t("citiesPrimaryTitle")}</h2>
                    <div className="h-1.5 w-24 bg-gold rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCities.map((city) => (
                        <div key={city.id} className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                            <Image src={city.image} alt={city.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                <div className="mb-6">
                                    {city.airportCode && (
                                        <span className="inline-flex items-center gap-2 bg-gold text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 shadow-lg">
                                            <Plane size={12} />{city.airportCode}
                                        </span>
                                    )}
                                    <Link href={`/cities/${city.name.toLowerCase().replace(/ /g, "-")}`} className="hover:text-gold transition-colors">
                                        <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2 leading-tight">{city.name}</h3>
                                    </Link>
                                    <p className="text-white/70 font-medium mb-6">{city.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {city.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold text-white/50 bg-white/10 uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/book" className="w-full">
                                    <button className="btn-gold w-full flex items-center justify-center gap-2 group/btn">
                                        <span data-i18n="citiesBookIn">{t("citiesBookIn")}</span> {city.name}
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
