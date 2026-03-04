"use client";
import React from 'react';
import { X, Users, Briefcase, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Vehicle } from "@/data/fleet";
import { useLanguage } from "@/components/LanguageContext";

interface VehicleModalProps {
    vehicle: Vehicle | null;
    onClose: () => void;
}

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
    const { t } = useLanguage();

    if (!vehicle) return null;

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

    const amenityMap: Record<string, string> = {
        "Complimentary Bottled Water": "amenWater",
        "Live Flight Tracking": "amenFlight",
        "Professional Uniformed Chauffeur": "amenUniform",
        "24/7 Dispatch Support": "amenDispatch",
        "Spacious Luggage Capacity": "amenLuggage",
        "Rear Climate Control": "amenRearClimate",
        "Premium Sound System": "amenPremiumSound",
        "Child Seats Available On Request": "amenChildSeat",
        "Fiber Optic Lighting": "amenFiber",
        "Champagne Flutes & Ice": "amenChampagne",
        "Bluetooth Audio Connection": "amenBluetooth",
        "Extra Deep Tinted Windows": "amenTint",
        "Multi-Color LED Lighting": "amenMultiLED",
        "Upgraded Sound with Subwoofers": "amenSub",
        "Dual Bar Areas": "amenDualBar",
        "Touch Screen Controls": "amenTouch",
        "High-Top Standing Room": "amenHighTop",
        "Forward Facing Seating": "amenForward",
        "Individual AC Vents": "amenVent",
        "Extra Large Luggage Area": "amenExtraLuggage",
        "Reclining Massage Seats": "amenMassage",
        "Smart TV with Apple TV": "amenApple",
        "Nespresso Machine & Bar": "amenNespresso",
        "Privacy Partition with Intercom": "amenIntercom",
        "Overhead Parcel Racks": "amenOverhead",
        "Rear Luggage Compartment": "amenRearComp",
        "PA System for Announcements": "amenPAAnnounce",
        "Reading Lights": "amenReading",
        "Dance Pole (Removable)": "amenPole",
        "Dual 40-inch Smart TVs": "amenDualSmartTV",
        "Perimeter Leather Seating": "amenLeatherSeat",
        "High Volume Fog Machine Available": "amenFog",
        "Onboard Restroom": "amenRestroom",
        "Underfloor Luggage Bays": "amenUnderfloor",
        "USB Ports at Every Seat": "amenUSBSeat",
        "Climate Control per Passenger": "amenClimatePass"
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

    const vehicleDescMap: Record<string, string> = {
        "Lincoln Continental or Cadillac CT6. Professional and discreet for business travelers.": "vDescExecSedan",
        "Cadillac Escalade or Lincoln Navigator. The ultimate standard in South Florida luxury.": "vDescLuxSUV",
        "Lincoln MKT Stretch. Iconic elegance for weddings, anniversaries and special events.": "vDescStretchLimo",
        "Lincoln 120\" Stretch. When ordinary isn't enough, make an entrance with more space.": "vDescSuperStretch",
        "Perfect Group transport for corporate retreats, golf trips, and family outings.": "vDescSprinter",
        "Custom Executive configured Sprinter with a private jet interior experience.": "vDescSprinterVIP",
        "Reliable and efficient logistics for weddings and corporate group movements.": "vDescMiniBus",
        "The ultimate mobile event space. Entertainment-focused interior for large groups.": "vDescPartyBus",
        "National standard for large groups. Maximum comfort for long-distance travel.": "vDescMotorCoach"
    };

    const translatedName = vehicleNameMap[vehicle.name] ? t(vehicleNameMap[vehicle.name]) : vehicle.name;
    const translatedDesc = vehicleDescMap[vehicle.description] ? t(vehicleDescMap[vehicle.description]) : vehicle.description;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 anonymous text-left">
            <div
                className="absolute inset-0 bg-navy/90 backdrop-blur-md animate-in fade-in duration-500"
                onClick={onClose}
            />

            <div className="relative w-full max-w-6xl bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col lg:flex-row h-full max-h-[90vh] animate-in zoom-in-95 duration-500">
                {/* Image & Gallery Section */}
                <div className="relative lg:w-3/5 h-[300px] lg:h-full bg-secondary overflow-hidden">
                    <Image
                        src={vehicle.image}
                        alt={translatedName}
                        fill
                        className="object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-8 left-8 z-50 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all border border-white/20 lg:hidden"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                    <div className="hidden lg:flex justify-end mb-8">
                        <button
                            onClick={onClose}
                            className="w-12 h-12 bg-gray-50 hover:bg-secondary rounded-full flex items-center justify-center text-navy transition-all"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mb-10">
                        <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 inline-block">
                            {vehicle.category}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                            {translatedName}
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            {translatedDesc}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-gray-100">
                        <div>
                            <span className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3" data-i18n="vModalStarting">{t("vModalStarting")}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-navy">${vehicle.startingPrice}</span>
                                <span className="text-xs font-bold text-gray-400" data-i18n="vModalPerRide">{t("vModalPerRide")}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Users size={20} className="text-gold" />
                                <span className="text-sm font-bold text-navy">{vehicle.passengers} <span className="text-gray-400 font-medium" data-i18n="vCardPassengers">{t("vCardPassengers")}</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase size={20} className="text-gold" />
                                <span className="text-sm font-bold text-navy">{vehicle.bags} <span className="text-gray-400 font-medium" data-i18n="vCardBags">{t("vCardBags")}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-10">
                        <h4 className="text-sm font-black text-navy uppercase tracking-[0.2em] mb-6" data-i18n="vModalFeatures">
                            {t("vModalFeatures")}
                        </h4>
                        <div className="grid grid-cols-2 gap-y-4">
                            {vehicle.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                    {featureMap[feat] ? t(featureMap[feat]) : feat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-12">
                        <h4 className="text-sm font-black text-navy uppercase tracking-[0.2em] mb-6" data-i18n="vModalAmenities">
                            {t("vModalAmenities")}
                        </h4>
                        <div className="space-y-4">
                            {vehicle.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-gray-600">
                                        {amenityMap[amenity] ? t(amenityMap[amenity]) : amenity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Button */}
                    <div className="mt-auto">
                        <button className="btn-gold w-full h-16 text-sm uppercase font-black tracking-widest" data-i18n="navBookNow">
                            {t("navBookNow")}
                        </button>
                        <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.1em] text-gray-400" data-i18n="bookNoCreditCard">
                            {t("bookNoCreditCard")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
