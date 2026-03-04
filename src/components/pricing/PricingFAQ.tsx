"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Is the price guaranteed when I book?",
        a: "Yes. The price shown at checkout is exactly what you pay. We never add surcharges after booking."
    },
    {
        q: "Do prices change during events (F1, Art Basel)?",
        a: "Standard routes maintain base rates. Event-specific packages may apply during major events."
    },
    {
        q: "What's your cancellation policy?",
        a: "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours are charged 50%."
    },
    {
        q: "Do you charge extra for late-night rides?",
        a: "No. Our pricing is the same 24/7. No night surcharges."
    },
    {
        q: "What if my flight is delayed?",
        a: "We monitor your flight. If it's delayed, your driver waits at no extra charge."
    },
    {
        q: "Do you offer corporate or affiliate discounts?",
        a: "Yes — corporate accounts and affiliates receive 10–15% discounted rates. Apply on our Corporate or Affiliate pages."
    }
];

export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 text-gold">
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">Pricing FAQ</h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-[30px] border border-navy/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="font-bold text-navy group-hover:text-gold transition-colors">{faq.q}</span>
                                {openIndex === idx ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gray-300 group-hover:text-gold transition-colors" />}
                            </button>
                            {openIndex === idx && (
                                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                                    <p className="text-gray-500 font-medium leading-relaxed pt-2 border-t border-gray-50">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
