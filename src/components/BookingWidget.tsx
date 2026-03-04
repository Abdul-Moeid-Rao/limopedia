"use client";
import { useState } from "react";
import { MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/LanguageContext";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function BookingWidget() {
    const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
    const { t } = useLanguage();

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className="text-2xl font-playfair font-bold text-navy flex items-center gap-3" data-i18n="bookYourRide">
                        {t("bookYourRide")}
                        <div className="h-[2px] w-12 bg-gold" />
                    </h2>
                </div>

                <div className="flex bg-secondary/50 p-1 rounded-full w-fit">
                    <button
                        onClick={() => setTripType("one-way")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                            tripType === "one-way" ? "bg-gold text-white shadow-md" : "text-navy hover:text-gold"
                        )}
                        data-i18n="bookOneWay"
                    >
                        {t("bookOneWay")}
                    </button>
                    <button
                        onClick={() => setTripType("round-trip")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                            tripType === "round-trip" ? "bg-gold text-white shadow-md" : "text-navy hover:text-gold"
                        )}
                        data-i18n="bookRoundTrip"
                    >
                        {t("bookRoundTrip")}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Pickup */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                        <MapPin size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder={t("bookPickup")}
                        data-i18n="bookPickup"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all placeholder:!text-gray-400"
                    />
                </div>

                {/* Dropoff */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                        <MapPin size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder={t("bookDropoff")}
                        data-i18n="bookDropoff"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                </div>

                {/* Date */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                        <Calendar size={20} />
                    </div>
                    <input
                        type="date"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                </div>

                {/* Time */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                        <Clock size={20} />
                    </div>
                    <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold appearance-none transition-all">
                        <option data-i18n="bookSelectTime">{t("bookSelectTime")}</option>
                        {Array.from({ length: 96 }).map((_, i) => {
                            const hour = Math.floor(i / 4);
                            const minute = (i % 4) * 15;
                            const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
                            return <option key={time} value={time}>{time}</option>;
                        })}
                    </select>
                </div>

                {/* Passengers */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                        <Users size={20} />
                    </div>
                    <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <button className="btn-gold w-full md:w-auto px-12 py-4 flex items-center justify-center gap-2 text-lg">
                    <span data-i18n="bookInstantQuote">{t("bookInstantQuote")}</span> <ArrowRight className="group-hover:translate-x-1" />
                </button>
                <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1" data-i18n="bookNoCreditCard">✓ {t("bookNoCreditCard")}</span>
                    <span className="flex items-center gap-1" data-i18n="bookFreeCancel">✓ {t("bookFreeCancel")}</span>
                </div>
            </div>
        </div>
    );
}
