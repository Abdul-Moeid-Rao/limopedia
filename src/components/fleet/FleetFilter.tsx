"use client";
import React from 'react';
import { useLanguage } from "@/components/LanguageContext";

interface FleetFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    vehicleCount: number;
}

export default function FleetFilter({ activeCategory, onCategoryChange, vehicleCount }: FleetFilterProps) {
    const { t } = useLanguage();

    const categories = [
        { id: 'all', labelKey: 'fleetFilterAll' },
        { id: 'sedan', labelKey: 'fleetFilterSedan' },
        { id: 'suv', labelKey: 'fleetFilterSUV' },
        { id: 'stretch', labelKey: 'fleetFilterStretch' },
        { id: 'sprinter', labelKey: 'fleetFilterSprinter' },
        { id: 'bus', labelKey: 'fleetFilterBus' },
        { id: 'motorcoach', labelKey: 'fleetFilterBus' }
    ];

    return (
        <section className="bg-white border-b border-gray-100 sticky top-20 z-40 py-6 text-left">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => onCategoryChange(cat.id)}
                                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat.id
                                    ? 'bg-gold text-white shadow-lg'
                                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                                    }`}
                                data-i18n={cat.labelKey}
                            >
                                {t(cat.labelKey)}
                            </button>
                        ))}
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                        <span className="text-navy">{vehicleCount}</span> <span data-i18n="fleetFilterResults">{t("fleetFilterResults")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
