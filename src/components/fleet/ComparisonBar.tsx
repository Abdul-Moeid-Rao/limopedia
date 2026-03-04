"use client";
import React from 'react';
import { X, BarChart2, Plus, Info } from "lucide-react";
import Image from "next/image";
import { Vehicle } from "@/data/fleet";
import { useLanguage } from "@/components/LanguageContext";

interface ComparisonBarProps {
    comparingIds: string[];
    vehicles: Vehicle[];
    onRemove: (id: string) => void;
    onClear: () => void;
    onViewComparison: () => void;
}

export default function ComparisonBar({ comparingIds, vehicles, onRemove, onClear, onViewComparison }: ComparisonBarProps) {
    const { t } = useLanguage();
    if (comparingIds.length === 0) return null;

    const comparingVehicles = vehicles.filter(v => comparingIds.includes(v.id));

    const vehicleNameMap: Record<string, string> = {
        "Executive Sedan": "vNameExecSedan",
        "Luxury SUV": "vNameLuxSUV",
        "Stretch Limousine": "vNameStretchLimo",
        "Super Stretch Limo": "vNameSuperStretch",
        "Mercedes Sprinter Van": "vNameSprinter",
        "Mercedes Sprinter VIP": "vNameSprinterVIP",
        "Mini Bus": "vNameMiniBus",
        "Party Bus": "vNamePartyBus",
        "Motor Coach Bus": "vNameMotorCoach"
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-navy rounded-[30px] shadow-2xl border border-white/10 p-4 md:p-6 backdrop-blur-xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Summary */}
                        <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2 hidden lg:flex">
                            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center">
                                <BarChart2 className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-tight" data-i18n="compareBarTitle">{t("compareBarTitle")}</h4>
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                                    {comparingIds.length}/3 <span data-i18n="fleetFilterResults">{t("fleetFilterResults")}</span>
                                </p>
                            </div>
                        </div>

                        {/* Selected List */}
                        <div className="flex flex-grow items-center gap-4 overflow-x-auto custom-scrollbar-hide pb-2 md:pb-0">
                            {comparingVehicles.map((vehicle) => (
                                <div key={vehicle.id} className="relative group shrink-0">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-gold transition-all relative">
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/0 transition-colors" />
                                    </div>
                                    <button
                                        onClick={() => onRemove(vehicle.id)}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-navy shadow-lg hover:bg-red-500 hover:text-white transition-all scale-0 group-hover:scale-100"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            ))}

                            {/* Placeholders */}
                            {[...Array(3 - comparingIds.length)].map((_, i) => (
                                <div key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center text-white/20">
                                    <Plus size={20} />
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button
                                onClick={onClear}
                                className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-white transition-colors px-4"
                                data-i18n="compareBarClear"
                            >
                                {t("compareBarClear")}
                            </button>
                            <button
                                onClick={onViewComparison}
                                className="btn-gold h-14 px-8 text-[10px] font-black uppercase tracking-widest whitespace-nowrap flex-grow md:flex-grow-0"
                                data-i18n="compareBarView"
                            >
                                {t("compareBarView")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ComparisonOverlayProps {
    vehicles: Vehicle[];
    onClose: () => void;
}

export function ComparisonOverlay({ vehicles, onClose }: ComparisonOverlayProps) {
    const { t } = useLanguage();

    const vehicleNameMap: Record<string, string> = {
        "Executive Sedan": "vNameExecSedan",
        "Luxury SUV": "vNameLuxSUV",
        "Stretch Limousine": "vNameStretchLimo",
        "Super Stretch Limo": "vNameSuperStretch",
        "Mercedes Sprinter Van": "vNameSprinter",
        "Mercedes Sprinter VIP": "vNameSprinterVIP",
        "Mini Bus": "vNameMiniBus",
        "Party Bus": "vNamePartyBus",
        "Motor Coach Bus": "vNameMotorCoach"
    };

    const featureMap: Record<string, string> = {
        "Leather": "featLeather",
        "Climate": "featClimate",
        "WiFi": "featWiFi",
        "Charging": "featCharging",
        "Panoramic": "featPanoramic",
        "TV Screen": "featTV",
        "Bar": "featBar",
        "Mood Lighting": "featMood",
        "Sound System": "featSound",
        "Privacy Partition": "featPartition",
        "Full Bar": "featFullBar",
        "LED Ceiling": "featLED",
        "Captain Seats": "featCaptain",
        "USB Charging": "featUSB",
        "TV": "featTV",
        "Mini Bar": "featMiniBar",
        "Privacy": "featPrivacy",
        "AC": "featAC",
        "Reclining Seats": "featReclining",
        "Storage": "featStorage",
        "LED Lights": "featLED",
        "Dance Floor": "featDance",
        "Luggage Bay": "featLuggage",
        "PA System": "featPA"
    };

    return (
        <div className="fixed inset-0 z-[110] bg-navy/95 backdrop-blur-xl animate-in fade-in duration-500 flex items-center justify-center p-4 md:p-10 text-left">
            <div className="container mx-auto max-w-6xl relative h-full flex flex-col pt-10">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white italic" data-i18n="compareBarTitle">{t("compareBarTitle")}</h2>
                    <button
                        onClick={onClose}
                        className="w-14 h-14 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-grow overflow-x-auto custom-scrollbar pb-10">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 pr-8 text-gray-500 uppercase tracking-widest text-[10px] font-black w-1/4" data-i18n="compareTableVehicle">{t("compareTableVehicle")}</th>
                                {vehicles.map(v => (
                                    <th key={v.id} className="py-6 px-4">
                                        <div className="text-white font-playfair text-xl font-bold">{vehicleNameMap[v.name] ? t(vehicleNameMap[v.name]) : v.name}</div>
                                        <div className="text-gold text-xs font-bold mt-1 uppercase tracking-widest">{v.category}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            <tr className="border-b border-white/5">
                                <td className="py-8 pr-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]" data-i18n="compareTablePrice">{t("compareTablePrice")}</td>
                                {vehicles.map(v => (
                                    <td key={v.id} className="py-8 px-4 font-bold text-2xl">${v.startingPrice} <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.1em]" data-i18n="vModalPerRide">{t("vModalPerRide")}</span></td>
                                ))}
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-8 pr-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]" data-i18n="compareTableCapacity">{t("compareTableCapacity")}</td>
                                {vehicles.map(v => (
                                    <td key={v.id} className="py-8 px-4 text-sm font-medium">
                                        {v.passengers} <span data-i18n="vCardPassengers">{t("vCardPassengers")}</span> <br />
                                        {v.bags} <span data-i18n="vCardBags">{t("vCardBags")}</span>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-8 pr-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]" data-i18n="compareTableFeatures">{t("compareTableFeatures")}</td>
                                {vehicles.map(v => (
                                    <td key={v.id} className="py-8 px-4">
                                        <div className="flex flex-col gap-3">
                                            {v.features.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-secondary font-medium">
                                                    <Info size={12} className="text-gold" />
                                                    {featureMap[feat] ? t(featureMap[feat]) : feat}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-auto py-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest max-w-sm" data-i18n="fleetChoiceDesc">
                        {t("fleetChoiceDesc")}
                    </p>
                    <button className="btn-gold px-12 h-16 text-xs uppercase font-black tracking-widest" data-i18n="navBookNow">
                        {t("navBookNow")}
                    </button>
                </div>
            </div>
        </div>
    );
}

