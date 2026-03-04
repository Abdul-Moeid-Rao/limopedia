"use client";
import React from 'react';
import { Check, ArrowRight, Star } from "lucide-react";

export default function CorporatePlans() {
    const plans = [
        {
            name: "Pay Per Ride",
            price: "Standard Rates",
            bestFor: "Occasional business travel",
            features: [
                "No monthly commitment",
                "Instant online booking",
                "Credit card on file billing",
                "Receipts sent via email",
                "24/7 Phone support"
            ],
            buttonText: "Start Booking",
            isPopular: false
        },
        {
            name: "Monthly Account",
            price: "5-10% Preferred Rates",
            bestFor: "Regular corporate travel",
            features: [
                "Consolidated monthly invoicing",
                "Dedicated Account Manager",
                "Preferred vehicle priority",
                "PO numbers & cost centers",
                "Employee sub-accounts"
            ],
            buttonText: "Get Started",
            isPopular: true
        },
        {
            name: "Annual Contract",
            price: "Custom Rate Card",
            bestFor: "High-volume volume firms",
            features: [
                "Maximum volume savings",
                "Fixed rate pricing",
                "On-site coordinators",
                "Dedicated fleet options",
                "API / GDS integration"
            ],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-playfair font-bold text-navy mb-4">Corporate Account Options</h2>
                    <p className="text-gray-500 font-medium">Choose the plan that fits your company&apos;s logistics needs.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative p-10 rounded-[40px] border shadow-sm flex flex-col h-full transition-all duration-500 hover:shadow-2xl ${plan.isPopular
                                ? 'bg-navy border-navy scale-105 z-10'
                                : 'bg-white border-navy/5'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                                    <Star size={14} fill="white" />
                                    Most Popular Choice
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-playfair font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-navy'}`}>
                                    {plan.name}
                                </h3>
                                <div className={`text-xl font-bold italic mb-4 ${plan.isPopular ? 'text-gold' : 'text-gold'}`}>
                                    {plan.price}
                                </div>
                                <p className={`text-sm font-medium ${plan.isPopular ? 'text-white/60' : 'text-gray-400'}`}>
                                    Best for: {plan.bestFor}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-12 flex-1">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-gold' : 'bg-green-500'}`}>
                                            <Check size={12} className="text-white" strokeWidth={4} />
                                        </div>
                                        <span className={`text-sm font-semibold opacity-90 ${plan.isPopular ? 'text-white' : 'text-navy'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full h-14 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${plan.isPopular
                                ? 'btn-gold'
                                : 'bg-navy text-white hover:bg-gold transition-colors duration-500'
                                }`}>
                                {plan.buttonText}
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
