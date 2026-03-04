"use client";
import React from 'react';
import { ArrowRight } from "lucide-react";

export default function BookingEmbed() {
    return (
        <section id="booking-widget" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-5xl mx-auto bg-navy rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-gold/10" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">Get Your Exact Price Now</h2>
                        <p className="text-gray-400 text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                            Enter your trip details below to see all vehicle choices and real-time guaranteed pricing for your specific route.
                        </p>

                        {/* Static Placeholder for Widget */}
                        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-md">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                <div className="text-left">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 block">From</label>
                                    <div className="h-16 bg-white/5 border border-white/10 rounded-full px-6 flex items-center text-white/30 text-sm">📍 Pickup Location</div>
                                </div>
                                <div className="text-left">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 block">To</label>
                                    <div className="h-16 bg-white/5 border border-white/10 rounded-full px-6 flex items-center text-white/30 text-sm">📍 Drop-off Location</div>
                                </div>
                                <div className="text-left">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 block">Date</label>
                                    <div className="h-16 bg-white/5 border border-white/10 rounded-full px-6 flex items-center text-white/30 text-sm">📅 Select Date</div>
                                </div>
                                <div className="text-left flex items-end">
                                    <button className="btn-gold w-full h-16 text-xs flex items-center justify-center gap-2 group">
                                        Check Rates
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
