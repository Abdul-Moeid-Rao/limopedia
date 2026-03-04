"use client";

import { ShieldCheck, Clock, CreditCard, Headphones } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function WhyUs() {
    const { t } = useLanguage();

    const reasons = [
        {
            icon: Clock,
            statKey: "whyUsOnTimeStat",
            textKey: "whyUsOnTimeDesc",
        },
        {
            icon: ShieldCheck,
            statKey: "whyUsCheckedStat",
            textKey: "whyUsCheckedDesc",
        },
        {
            icon: CreditCard,
            statKey: "whyUsFeesStat",
            textKey: "whyUsFeesDesc",
        },
        {
            icon: Headphones,
            statKey: "whyUsSupportStat",
            textKey: "whyUsSupportDesc",
        },
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4" data-i18n="whyUsTitle">
                        {t("whyUsTitle")}
                    </h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
                                <reason.icon size={40} className="text-gold" />
                            </div>
                            <div className="text-3xl font-playfair font-bold text-white mb-3" data-i18n={reason.statKey}>
                                {t(reason.statKey)}
                            </div>
                            <p className="text-gray-400 max-w-[250px] mx-auto" data-i18n={reason.textKey}>
                                {t(reason.textKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
