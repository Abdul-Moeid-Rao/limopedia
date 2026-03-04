"use client";
import React, { useState, useMemo } from 'react';
import FleetHero from "@/components/fleet/FleetHero";
import FleetFilter from "@/components/fleet/FleetFilter";
import VehicleCard from "@/components/fleet/VehicleCard";
import VehicleModal from "@/components/fleet/VehicleModal";
import ComparisonBar, { ComparisonOverlay } from "@/components/fleet/ComparisonBar";
import { vehicles, Vehicle } from "@/data/fleet";
import { Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function FleetPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [comparingIds, setComparingIds] = useState<string[]>([]);
    const [isComparing, setIsComparing] = useState(false);

    const filteredVehicles = useMemo(() => {
        if (activeCategory === 'all') return vehicles;
        return vehicles.filter(v => v.category === activeCategory);
    }, [activeCategory]);

    const handleToggleCompare = (id: string) => {
        setComparingIds(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            if (prev.length >= 3) return prev; // Max 3 vehicles for comparison
            return [...prev, id];
        });
    };

    return (
        <main className="min-h-screen bg-gray-50 text-left">
            <FleetHero />

            <FleetFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                vehicleCount={filteredVehicles.length}
            />

            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredVehicles.map((vehicle) => (
                        <VehicleCard
                            key={vehicle.id}
                            vehicle={vehicle}
                            onViewDetails={setSelectedVehicle}
                            onToggleCompare={handleToggleCompare}
                            isComparing={comparingIds.includes(vehicle.id)}
                        />
                    ))}
                </div>

                {filteredVehicles.length === 0 && (
                    <div className="py-32 text-center">
                        <h3 className="text-3xl font-playfair font-bold text-navy opacity-40" data-i18n="fleetNoResults">{t("fleetNoResults")}</h3>
                        <button
                            onClick={() => setActiveCategory('all')}
                            className="mt-6 text-gold font-bold uppercase tracking-widest hover:underline"
                            data-i18n="fleetViewAllBtn"
                        >
                            {t("fleetViewAllBtn")}
                        </button>
                    </div>
                )}
            </section>

            {/* Bottom CTA Section */}
            <section className="bg-navy/5 py-24 border-t border-navy/5">
                <div className="container mx-auto px-4 text-center max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-navy mb-4 leading-tight" data-i18n="fleetChoiceTitle">{t("fleetChoiceTitle")}</h2>
                    <p className="text-lg text-gray-500 mb-16 font-medium" data-i18n="fleetChoiceDesc">{t("fleetChoiceDesc")}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5 flex flex-col items-center group hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Phone size={32} className="text-navy" />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4" data-i18n="fleetCallTitle">{t("fleetCallTitle")}</h3>
                            <p className="text-gray-500 mb-8 max-w-xs mx-auto" data-i18n="fleetCallDesc">{t("fleetCallDesc")}</p>
                            <a href="tel:8883000069" className="btn-gold px-10 py-5 text-sm uppercase font-black tracking-widest bg-navy hover:bg-gold hover:text-white group" data-i18n="fleetCallBtn">
                                {t("fleetCallBtn")}
                            </a>
                        </div>

                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5 flex flex-col items-center group hover:shadow-xl transition-all duration-500">
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MessageSquare size={32} className="text-navy" />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4" data-i18n="fleetChatTitle">{t("fleetChatTitle")}</h3>
                            <p className="text-gray-500 mb-8 max-w-xs mx-auto" data-i18n="fleetChatDesc">{t("fleetChatDesc")}</p>
                            <button className="btn-gold px-10 py-5 text-sm uppercase font-black tracking-widest border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white" data-i18n="fleetChatBtn">
                                {t("fleetChatBtn")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modals & Overlays */}
            <VehicleModal
                vehicle={selectedVehicle}
                onClose={() => setSelectedVehicle(null)}
            />

            <ComparisonBar
                comparingIds={comparingIds}
                vehicles={vehicles}
                onRemove={(id) => setComparingIds(prev => prev.filter(i => i !== id))}
                onClear={() => setComparingIds([])}
                onViewComparison={() => setIsComparing(true)}
            />

            {isComparing && (
                <ComparisonOverlay
                    vehicles={vehicles.filter(v => comparingIds.includes(v.id))}
                    onClose={() => setIsComparing(false)}
                />
            )}

        </main>
    );
}
