"use client";
import React from 'react';
import { Sparkles } from "lucide-react";

const addons = [
    { name: "Champagne / Wine Setup", price: "$45", icon: "🍾" },
    { name: "Rose Petal Decoration", price: "$55", icon: "🌹" },
    { name: "Birthday Setup", price: "$65", icon: "🎂" },
    { name: "Red Carpet Service", price: "$35", icon: "📸" },
    { name: "Custom Playlist", price: "Complimentary", icon: "🎵" },
    { name: "WiFi Hotspot", price: "Complimentary", icon: "🌐" }
];

export default function OptionalAddOns() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 mb-4 bg-gold/10 px-4 py-2 rounded-full">
                        <Sparkles size={14} className="text-gold" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold text-center">Elite Experiences</span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">Optional Upgrades</h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {addons.map((addon, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-[40px] border border-transparent hover:border-gold/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group text-center">
                            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{addon.icon}</div>
                            <h4 className="text-navy font-bold mb-2 text-sm">{addon.name}</h4>
                            <p className="text-gold font-black text-xs uppercase tracking-widest">{addon.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
