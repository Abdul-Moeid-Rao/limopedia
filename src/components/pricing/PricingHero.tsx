"use client";
import React from 'react';
import { BadgeCheck, ShieldCheck, Calculator, XCircle } from "lucide-react";

export default function PricingHero() {
    return (
        <section className="bg-gray-50/50 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Transparent & Guaranteed Rates
                    </span>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold text-navy mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        Simple, <br />
                        <span className="text-gold italic">Transparent Pricing</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        No hidden fees. No surge pricing. No surprises. The price you see is the price you pay — guaranteed.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-full border border-navy/5 shadow-sm">
                            <BadgeCheck className="text-gold" size={20} />
                            <span className="text-xs font-black uppercase tracking-widest text-navy">Price Match Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-full border border-navy/5 shadow-sm">
                            <XCircle className="text-gold" size={20} />
                            <span className="text-xs font-black uppercase tracking-widest text-navy">No Hidden Fees</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-full border border-navy/5 shadow-sm">
                            <ShieldCheck className="text-gold" size={20} />
                            <span className="text-xs font-black uppercase tracking-widest text-navy">Free Cancellation</span>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-gold px-12 h-18 text-sm flex items-center justify-center gap-4 mx-auto shadow-2xl shadow-gold/20"
                    >
                        Get Instant Quote
                        <Calculator size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
