"use client";
import React from 'react';
import { BadgeCheck, ShieldCheck, Calculator, XCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import BaseHero from "@/components/BaseHero";

export default function PricingHero() {
    const { t } = useLanguage();

    const pricingFeatures = (
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
    );

    const quoteButton = (
        <button
            onClick={() => document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-12 h-18 text-sm flex items-center justify-center gap-4 mx-auto shadow-2xl shadow-gold/20"
        >
            Get Instant Quote
            <Calculator size={18} />
        </button>
    );

    return (
        <BaseHero
            title="Simple, <br><span class='text-gold italic'>Transparent Pricing</span>"
            subtitle="Transparent & Guaranteed Rates"
            description="No hidden fees. No surge pricing. No surprises. The price you see is the price you pay — guaranteed."
            backgroundImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
            showBreadcrumbs={true}
            breadcrumbs={[
                { label: "navHome", href: "/" },
                { label: "navPricing" }
            ]}
            showButtons={false}
            customContent={
                <div>
                    {pricingFeatures}
                    {quoteButton}
                </div>
            }
            overlayOpacity={0.6}
        />
    );
}
