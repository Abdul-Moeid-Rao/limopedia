"use client";
import React from 'react';
import { Check } from "lucide-react";

const inclusions = [
    "Professional uniformed chauffeur",
    "Flight monitoring (airport rides)",
    "Complimentary wait time (45 min airports, 15 min other)",
    "Bottled water",
    "Phone & USB charging",
    "All tolls and taxes",
    "Meet & greet with name sign (airports)",
    "Luggage assistance",
    "Real-time driver tracking"
];

export default function WhatsIncluded() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">Every Ride Includes — At No Extra Cost</h2>
                    <div className="h-1.5 w-16 bg-green-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-navy/5 group hover:border-green-500/30 transition-all">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                                <Check size={18} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600 font-bold text-sm tracking-tight">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
