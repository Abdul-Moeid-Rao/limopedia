"use client";
import React from 'react';
import { Users, Briefcase, Eye, BarChart2 } from "lucide-react";
import Image from "next/image";
import { Vehicle } from "@/data/fleet";
import { useLanguage } from "@/components/LanguageContext";

interface VehicleCardProps {
    vehicle: Vehicle;
    onViewDetails: (vehicle: Vehicle) => void;
    onToggleCompare: (id: string) => void;
    isComparing: boolean;
}

export default function VehicleCard({ vehicle, onViewDetails, onToggleCompare, isComparing }: VehicleCardProps) {
    const { t } = useLanguage();

    // Map feature strings to translation keys if they exist, otherwise use as is
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

    const translatedName = vehicleNameMap[vehicle.name] ? t(vehicleNameMap[vehicle.name]) : vehicle.name;

    return (
        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-navy/5 group hover:shadow-2xl transition-all duration-700 flex flex-col h-full text-left">
            {/* Image Section */}
            <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                    src={vehicle.image}
                    alt={translatedName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tags */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    {vehicle.mostPopular && (
                        <span className="px-4 py-1.5 bg-gold text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                            Most Popular
                        </span>
                    )}
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-navy text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {vehicle.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500">
                        {translatedName}
                    </h3>
                    <div className="text-right">
                        <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest" data-i18n="vModalStarting">{t("vModalStarting")}</span>
                        <span className="text-2xl font-bold text-navy">${vehicle.startingPrice}</span>
                    </div>
                </div>

                {/* Specs Row */}
                <div className="flex items-center gap-6 mb-8 py-4 border-y border-gray-50">
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-gold" />
                        <span className="text-xs font-bold text-navy">{vehicle.passengers} <span className="text-gray-400 font-medium" data-i18n="vCardPassengers">{t("vCardPassengers")}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-gold" />
                        <span className="text-xs font-bold text-navy">{vehicle.bags} <span className="text-gray-400 font-medium" data-i18n="vCardBags">{t("vCardBags")}</span></span>
                    </div>
                </div>

                {/* Features List (Mini) */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-secondary/30 text-navy/70 text-[10px] font-bold rounded-lg border border-navy/5">
                            {featureMap[feat] ? t(featureMap[feat]) : feat}
                        </span>
                    ))}
                    {vehicle.features.length > 3 && (
                        <span className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-lg anonymous">
                            +{vehicle.features.length - 3}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                    <button
                        onClick={() => onViewDetails(vehicle)}
                        className="flex items-center justify-center gap-2 h-14 bg-navy text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-500 group/btn"
                    >
                        <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                        <span data-i18n="vCardDetails">{t("vCardDetails")}</span>
                    </button>
                    <button
                        onClick={() => onToggleCompare(vehicle.id)}
                        className={`flex items-center justify-center gap-2 h-14 border-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${isComparing
                            ? 'bg-gold border-gold text-white'
                            : 'border-secondary bg-transparent text-navy hover:border-gold hover:text-gold'
                            }`}
                    >
                        <BarChart2 size={16} />
                        {isComparing ? <span data-i18n="vCardComparing">{t("vCardComparing")}</span> : <span data-i18n="vCardCompare">{t("vCardCompare")}</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}
