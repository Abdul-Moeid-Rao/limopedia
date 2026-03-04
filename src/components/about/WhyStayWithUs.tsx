"use client";
import React from 'react';
import { Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function WhyStayWithUs() {
    const { t } = useLanguage();

    const quotes = [
        {
            textKey: "quote1Text",
            authorKey: "quote1Author",
            companyKey: "quote1Company"
        },
        {
            textKey: "quote2Text",
            authorKey: "quote2Author",
            companyKey: "quote2Company"
        },
        {
            textKey: "quote3Text",
            authorKey: "quote3Author",
            companyKey: "quote3Company"
        }
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden text-left">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20 text-white">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-i18n="whyBackTitle">
                        {t("whyBackTitle")}
                    </h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {quotes.map((quote, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[50px] relative group hover:bg-white/10 transition-all duration-500">
                            <Quote size={48} className="text-gold opacity-20 absolute top-8 right-8 group-hover:opacity-40 transition-opacity" />
                            <p className="text-gray-300 text-lg italic leading-relaxed mb-8 relative z-10">
                                &ldquo;<span data-i18n={quote.textKey}>{t(quote.textKey)}</span>&rdquo;
                            </p>
                            <div>
                                <h4 className="text-white font-bold" data-i18n={quote.authorKey}>{t(quote.authorKey)}</h4>
                                <p className="text-gold font-bold uppercase tracking-widest text-[10px] mt-1" data-i18n={quote.companyKey}>{t(quote.companyKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
